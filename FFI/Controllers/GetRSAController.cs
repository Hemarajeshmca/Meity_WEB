﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
//using System.Web.UI;
//using System.Web.UI.WebControls;
using System.Net;
using System.IO;
//using CCA.Util;
using System.Collections.Specialized;
using System.Xml;

namespace FFI.Controllers
{
    public class GetRSAController : Controller
    {
        ////
        //// GET: /GetRSA/
        //public string Index()
        //{
        //    //string queryUrl = "https://test.ccavenue.com/transaction/getRSAKey";
        //    string queryUrl = "https://secure.ccavenue.com/transaction/getRSAKey";
        //    string vParams = "";

        //    foreach (string key in Request.Params.AllKeys)
        //    {
        //        vParams += key + "=" + Request[key] + "&";
        //    }
        //    // Url Connection

        //    //ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;   

        //    String message = postPaymentRequestToGateway(queryUrl, vParams);
        //    //Response.Write(message);            
        //    //message = "";
        //    //message = vParams;
        //    return message;
        //}


        //private string postPaymentRequestToGateway(String queryUrl, String urlParam)
        //{
        //    String message = "";
        //    try
        //    {

        //        StreamWriter myWriter = null;// it will open a http connection with provided url
        //        WebRequest objRequest = WebRequest.Create(queryUrl);//send data using objxmlhttp object
        //        objRequest.Method = "POST";
        //        ServicePointManager.Expect100Continue = true;
        //        ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
        //        //ServicePointManager.SecurityProtocol = SecurityProtocolType.Ssl3 | SecurityProtocolType.Tls12  | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;
        //        ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };
        //        //objRequest.ContentLength = TranRequest.Length;
        //        objRequest.ContentType = "application/x-www-form-urlencoded";//to set content type
        //        myWriter = new System.IO.StreamWriter(objRequest.GetRequestStream());
        //        myWriter.Write(urlParam);//send data
        //        myWriter.Close();//closed the myWriter object

        //        // Getting Response

        //        System.Net.HttpWebResponse objResponse = (System.Net.HttpWebResponse)objRequest.GetResponse();//receive the responce from objxmlhttp object 

        //        using (System.IO.StreamReader sr = new System.IO.StreamReader(objResponse.GetResponseStream()))
        //        {
        //            message = sr.ReadToEnd();

        //        }
        //    }
        //    catch (Exception exception)
        //    {
        //        message = "";
        //        message = exception.ToString();
        //        //Console.Write("Exception occured while connection." + exception);
        //    }
        //    return message;
        //}




    }
}