using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
//using System.Web.UI;
//using System.Web.UI.WebControls;
using System.Collections;
using System.Collections.Specialized;
//using CCA.Util;
namespace FFI.Controllers
{
    public class CCAVResponseController : Controller
    {
        //
        // GET: /CCAVResponse/
        public ActionResult Index()
        {
            ////test payment
            //  string workingKey = "DBA9EE7FF3811418C3AD4E0E122502D7";//put in the 32bit alpha numeric key in the quotes provided here
            //132 payment
            //string workingKey = "ADD885D817B247A26B9D0AD9702B068C";//put in the 32bit alpha numeric key in the quotes provided here
            ////CCACrypto ccaCrypto = new CCACrypto();
            //string encResponse = ccaCrypto.Decrypt(Request.Form["encResp"], workingKey);
            //NameValueCollection Params = new NameValueCollection();
            //string[] segments = encResponse.Split('&');
            //foreach (string seg in segments)
            //{
            //    string[] parts = seg.Split('=');
            //    if (parts.Length > 0)
            //    {
            //        string Key = parts[0].Trim();
            //        string Value = parts[1].Trim();
            //        Params.Add(Key, Value);
            //    }
            //}

            //for (int i = 0; i < Params.Count; i++)
            //{
            //    //Response.Write(Params.Keys[i] + " = " + Params[i] + "<br>");
            //}
            return View();
        }
    }
}