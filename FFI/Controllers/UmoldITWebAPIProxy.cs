using System;
using System.Xml;
using System.Net;
using System.IO;
using System.Text;
using System.Data;
using System.Collections.Generic;
//using System.Net.Http;
using System.Configuration;
using Microsoft.Extensions.Configuration;

public class UmoldITWebAPIProxy
{    
    #region CONSTRUCTOR 
    public UmoldITWebAPIProxy()
    {
    }
    #endregion

    #region FUNCTION TO HANDLE SPECIAL CHARACTERS LIKE '<', '&', '>', ''', '"' ETC AND RETURNS EQUIVALENT XML NODE VALUE 
    public string XMLEncode(String value)
    {
        XmlDocument convertedXml = new XmlDocument();
        convertedXml.InnerXml = "<document><convertedValue/></document>";
        convertedXml.FirstChild.SelectSingleNode("./convertedValue").InnerText = value;
        return convertedXml.FirstChild.SelectSingleNode("./convertedValue").InnerXml;
    }
    #endregion

    #region FUNCTION TO HANDLE SPECIAL CHARACTERS LIKE ''', '"' ETC AND RETURNS EQUIVALENT JSON VALUE 
    //public string JSONEncode(String value)
    //{
    //    string quoted = System.Web.Helpers.Json.Encode(value);
    //    return quoted.Substring(1, quoted.Length - 2);
    //}
    private IConfiguration _configuration;
    public UmoldITWebAPIProxy(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    #endregion  

    #region API INVOCATION 
    public object invokeAPI(string httpverb, string targetURL, object requestData, string requestFormat, string responseFormat, string authorizationHeaderValue)
    {                      
        string responseData = "";
        try
        {                        
            HttpWebRequest request;
            HttpWebResponse response = null;
            Stream requestStream, responseStream;
            byte[] bytes;
            string requestString = "";

            if (requestData != null)
            {
                requestString = requestData.ToString();                                
            }
            request = (HttpWebRequest)WebRequest.Create(targetURL);
            bytes = Encoding.ASCII.GetBytes(requestString);

            request.Method = httpverb;
            if(requestFormat != null)
            {
                request.ContentType = requestFormat;
            }
            request.Accept = responseFormat;
            request.ContentLength = bytes.Length;
            
            if (authorizationHeaderValue != null)
                request.Headers[HttpRequestHeader.Authorization] = authorizationHeaderValue;

            if (requestData != null)
            {
                requestStream = request.GetRequestStream();
                requestStream.Write(bytes, 0, bytes.Length);
                requestStream.Close();
            }

            response = (HttpWebResponse)request.GetResponse();

            if (response.StatusCode == HttpStatusCode.OK)
            {
                responseStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(responseStream);

                responseData = reader.ReadToEnd();
            }
            response.Close();
        }
        catch (Exception ex)
        {
            throw ex;
        }
        return responseData;
    }
    #endregion

    #region FUNCTION PARAMETERS VALIDATION 
    /**
     * This function will be used when API invoked from object based clients snippet 
     * */
    public List<string> validateParameters(params object[] args)
    {
        List<string> messageCollection = new List<string>();
        int parami, paramj;

        #region NULL PARAMETER EXISTENCE CHECK 
        for (parami = 0; parami < args.Length; parami++)
        {
            if (args[parami] == null)
            {
                throw new Exception("Invalid parameter at position '" + (parami + 1) + "'. Null object supplied");
            }
        }
        #endregion

        #region DUPLICATE PARAMETER EXISTENCE CHECK 
        for (parami = 0; parami < args.Length; parami++)
        {
            for (paramj = parami + 1; paramj < args.Length; paramj++)
            {
                if (args[parami].Equals(args[paramj]))
                {
                    messageCollection.Add("Parameter " + parami.ToString() + " (" + args[parami].GetType().Name + ") and parameter " + paramj.ToString() + " (" + args[paramj].GetType().Name + ") are equal");
                }
            }
        }
        #endregion

        return messageCollection;
    }
    #endregion

    /**
     * The following functions are necessary for API invocation
     * User can replace your values for the appropriate placeholder
     * */
    #region FUNCTION TO GET WEB SERVER URL 
   
    public string getWebURL()
    {

        //Replace your own custom logic to get appropriate physical server address if required; 
        //otherwise set appropriate value to the variable 'webServerPath'
        //Note: replace ~webServerPath~ with only dns/virtual directory path like 'localhost:8080/demo' 
        //For example, string webServerPath =  "http://localhost:8080/demo";

        string webServerPath = "";
        var Dbtype = _configuration.GetSection("AppSettings")["Instance"];
        //webServerPath = ConfigurationManager.AppSettings["webUrl"].ToString() + "/api";
        if (Dbtype == "bh") { webServerPath = _configuration.GetSection("AppSettings")["webUrl"].ToString() + "/api_bh"; }
        else if (Dbtype == "up") { webServerPath = _configuration.GetSection("AppSettings")["webUrl"].ToString() + "/api_up"; }
        else if (Dbtype == "od") { webServerPath = _configuration.GetSection("AppSettings")["webUrl"].ToString() + "/api_od"; }
        else if (Dbtype == "Ta") { webServerPath = _configuration.GetSection("AppSettings")["webUrl"].ToString() + "/api_tn"; }
        //if (Dbtype == "bh") { webServerPath = ConfigurationManager.AppSettings["webUrlBH"].ToString() + "/api"; }
        //else if (Dbtype == "up") { webServerPath = ConfigurationManager.AppSettings["webUrlUP"].ToString() + "/api"; }
        //else if (Dbtype == "od") { webServerPath = ConfigurationManager.AppSettings["webUrlOD"].ToString() + "/api"; }
        //else if (Dbtype == "Ta") { webServerPath = ConfigurationManager.AppSettings["webUrlTA"].ToString() + "/api_tn"; }
        return webServerPath;
    }
    #endregion

    #region FUNCTION TO GET CONTEXT OBJECT 
    public object getContext()
    {
        //Replace USER INPUT with appropriate values for context elements
        var context = new
        {
           orgnId = "Global", //String
            //orgnId = _configuration.GetSection("AppSettings")["orgnId"].ToString(),
            locnId = "ALL", //String
            userId = "admin", //String
            //userId = _configuration.GetSection("AppSettings")["userId"].ToString(),
            localeId = "en_US" //String
        };
        return context;
    }
    #endregion
}