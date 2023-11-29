using System;
using System.Collections.Generic;
using System.Data;
using System.Web;
//using System.Web.UI;
//using System.Web.UI.WebControls;
using System.Xml;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public partial class MasterDefinition_APIClient
{
    #region API (savemaster_code) INVOCATION 
    /// <summary>
    /// Function to execute API, this 
    /// <para>- receives input data for the API, in the form of objects</para>
    /// <para>- marshalls object values into API request</para>
    /// <para>- executes REST API at a specified url</para>
    /// <para>- binds API response values into designated output parameter objects</para>
    /// <para>
    /// <b>Note:</b>
    /// <para>
    ///     Function takes generic objects as input and output parameters. For binding API input/output data from/to the objects,
    ///     the function makes an assumption that the objects would contain properties whose names match the service signature elements,
    ///     viz., segments and data items; function throws exception for null object parameters and returns non-fatal warning messages,
    ///     if the parameter objects are not distinct i.e., the same objects are sent as values for more than one parameter
    /// </para>
    /// </para>
    /// </summary>
    /// <exception cref="System.Exception"></exception>

    /*
     * Resource: Master
     * Description: Save Master Code Detail
     * Http verb: POST
     * Request format: JSON
     * Response format: JSON
     * Requires authorization: No
     */
    public List<string> invokeAPI_Master_savemaster_code(dynamic contextrequest, dynamic Headerrequest, dynamic Detailrequest)
    {
        object responseJson = new object();
        List<string> messageCollection;
        try
        {
            if (contextrequest == null)
            {
                contextrequest = WebAPIProxy.getContext();
            }
            messageCollection = WebAPIProxy.validateParameters(Headerrequest, Detailrequest);
            
            string requestDataFormat = "application/json";
            string responseDataFormat = "application/json";
            
            string targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/newmaster";
            
            //Here responseJson contains API response JSON string given by the targetURL
            responseJson = WebAPIProxy.invokeAPI("POST", targetURL, prepareAPIRequest_Master_savemaster_code(contextrequest, Headerrequest, Detailrequest), requestDataFormat, responseDataFormat, null);
            dynamic response = JObject.Parse(JsonConvert.DeserializeObject(responseJson.ToString()).ToString());
            
            if(response.ApplicationException == null)
            {
                try {
                    processAPIResponse_Master_savemaster_code(response);
                }
                catch (Exception exception) {
                    Master_savemaster_codehandleException("Error encountered while processing API response. " + exception.Message);
                }
            }
            else
            {
                //Output contains error
                string errorNumber = "", errorDescription = "";
                errorNumber = response.ApplicationException.errorNumber;
                errorDescription = response.ApplicationException.errorDescription;
                if (errorNumber != "")
                    errorNumber += ": ";
                Master_savemaster_codehandleException(errorNumber + errorDescription);
            }
        }
        catch (Exception exception)
        {
            throw exception;
        }
        return messageCollection;
    }
    
    protected void Master_savemaster_codehandleException(string expMessage)
    {
        throw new Exception(expMessage);
    }
    #endregion
    
    #region PREPARING API (savemaster_code) REQUEST IN JSON FORMAT 
    //Code for preparing input data for the api savemaster_code
    private object prepareAPIRequest_Master_savemaster_code(dynamic contextrequest, dynamic Headerrequest, dynamic Detailrequest)
    {
        var request = "{";
        
        //Processing context segment
        request = request + @"""context"" : {";
        if(contextrequest != null && contextrequest.GetType().GetProperty("orgnId") != null)
            request += @"""orgnId"" : """ + contextrequest.GetType().GetProperty("orgnId").GetValue(contextrequest) + @""",";
        if(contextrequest != null && contextrequest.GetType().GetProperty("locnId") != null)
            request += @"""locnId"" : """ + contextrequest.GetType().GetProperty("locnId").GetValue(contextrequest) + @""",";
        if(contextrequest != null && contextrequest.GetType().GetProperty("userId") != null)
            request += @"""userId"" : """ + contextrequest.GetType().GetProperty("userId").GetValue(contextrequest) + @""",";
        if(contextrequest != null && contextrequest.GetType().GetProperty("localeId") != null)
            request += @"""localeId"" : """ + contextrequest.GetType().GetProperty("localeId").GetValue(contextrequest) + @""",";
        
        //Processing Header segment
        request = request + @"""Header"" : {";
        request += @"""parent_code"" : """ + Headerrequest.parent_code + "";  // Unicode string
        request = request + "},";
        
        //Processing Detail segment
        request = request + @"""Detail"" : [";
        if (Detailrequest != null && Detailrequest.GetType().IsArray)
        {
            var isFirstDetailRowProcessed = false;
            foreach (dynamic Detailchild in (Array)Detailrequest)
            {
                if (Detailchild == null) continue;
                if(isFirstDetailRowProcessed)
                    request = request + ",";
                else
                    isFirstDetailRowProcessed = true;
                
                request = request + "{";
                request += @"""master_rowid"" : " + Detailchild.master_rowid.ToString() + ",";  // Int32: -2147483648 to 2147483647
                request += @"""row_slno"" : " + Detailchild.row_slno.ToString() + ",";  // Int16: -32768 to 32767
                request += @"""master_code"" : """ + Detailchild.master_code + ",";  // Unicode string
                request += @"""master_description"" : """ + Detailchild.master_description + ",";  // Unicode string
                if ( Detailchild.master_ll_description == null )
                    request = request + @"""master_ll_description"" : null,"; //NULL (i.e. value unknown)
                else
                    request += @"""master_ll_description"" : """ + Detailchild.master_ll_description + ",";  // Unicode string
                request += @"""depend_code"" : """ + Detailchild.depend_code + ",";  // Unicode string
                request += @"""locallang_flag"" : """ + Detailchild.locallang_flag + ",";  // Unicode string
                request += @"""status_code"" : """ + Detailchild.status_code + ",";  // Unicode string
                request += @"""row_timestamp"" : """ + Detailchild.row_timestamp + ",";  // Unicode string
                request += @"""mode_flag"" : """ + Detailchild.mode_flag + "";  // Unicode string
                request = request + "}";
            }
        }
        request = request + "]";
        request = request + "}";
        request = request + "}";
        return request;
    }
    #endregion
    
    #region PROCESSING API (savemaster_code) RESPONSE 
    //Code for processing response data from the API 'savemaster_code'
    private void processAPIResponse_Master_savemaster_code(dynamic responseJSON)
    {
        var outcontext = responseJSON.context;
    }
    #endregion
}
