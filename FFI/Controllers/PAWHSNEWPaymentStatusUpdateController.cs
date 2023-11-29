﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;

namespace FFI.Controllers
{
    public class PAWHSNEWPaymentStatusUpdateController : Controller
    {
        private IConfiguration _configuration;
        public PAWHSNEWPaymentStatusUpdateController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        // GET: PAWHSPaymentdetailsupdate
        public ActionResult PAWHSNEWPaymentStatusUpdate()
        {
            return View();
        }
        [HttpPost]
        public JsonResult PAWHSNEWPaymentStatusUpdatelist([FromBody]PAWHS_New_PaymentAdvice_UpdateContext context)
        {
            PAWHS_New_PaymentAdvice_UpdateApplication objList = new PAWHS_New_PaymentAdvice_UpdateApplication();
            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {
               
                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            using (var client = new HttpClient())
            {
                string Urlcon = "PAWHS_New_PaymentAdvice_Update/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("PAWHS_New_PaymentAdvice_Update_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PAWHS_New_PaymentAdvice_UpdateApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHS_New_PaymentAdvice_UpdateApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult PAWHSNEWPaymentStatusUpdateSave([FromBody] PAWHS_New_PaymentAdvice_UpdateSContext objContext)
        {
            PAWHS_New_PaymentAdvice_UpdateSApplication objRoot = new PAWHS_New_PaymentAdvice_UpdateSApplication();
            PAWHS_New_PaymentAdvice_UpdateSDocument objDoc = new PAWHS_New_PaymentAdvice_UpdateSDocument();
            PAWHS_New_PaymentAdvice_UpdateSContext objContextsave = new PAWHS_New_PaymentAdvice_UpdateSContext();
            objContextsave.userId = objContext.userId;
            objContextsave.locnId = objContext.locnId;
            objContextsave.localeId = objContext.localeId;
            objContextsave.orgnId = objContext.orgnId;
            objContextsave.PaymentDtl = objContext.PaymentDtl;
            objDoc.context = objContextsave;
            objRoot.document = objDoc;



            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {  
               
                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            using (var client = new HttpClient())
            {
                string Urlcon = "PAWHS_New_PaymentAdvice_Update/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("PAWHS_New_PaymentAdvice_Update_Save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }

        #region list
        public class PAWHS_New_PaymentAdvice_UpdatePaymentDtl
        {
            public int In_paymentdtl_rowid { get; set; }
            public string In_payment_advice_no { get; set; }
            //    public string In_receipt_id { get; set; }
            public string In_farmer_name { get; set; }
            public double In_payment_amount { get; set; }
            public string In_payment_date { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_payment_remark { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_payment_status { get; set; }
            public string In_payment_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_UpdateContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<PAWHS_New_PaymentAdvice_UpdatePaymentDtl> PaymentDtl { get; set; }
            public string payment_status { get; set; }


        }
        public class PAWHS_New_PaymentAdvice_UpdateApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_UpdateApplication
        {
            public PAWHS_New_PaymentAdvice_UpdateContext context { get; set; }
            public PAWHS_New_PaymentAdvice_UpdateApplicationException ApplicationException { get; set; }

        }
        #endregion

        #region save
        public class PAWHS_New_PaymentAdvice_UpdateSPaymentDtl
        {
            public int In_paymentdtl_rowid { get; set; }
            public string In_payment_advice_no { get; set; }
            //     public string In_receipt_id { get; set; }
            public string In_farmer_name { get; set; }
            public double In_payment_amount { get; set; }
            public string In_payment_date { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_remark { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_payment_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_UpdateSContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<PAWHS_New_PaymentAdvice_UpdateSPaymentDtl> PaymentDtl { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_UpdateSDocument
        {
            public PAWHS_New_PaymentAdvice_UpdateSContext context { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_UpdateSApplication
        {
            public PAWHS_New_PaymentAdvice_UpdateSDocument document { get; set; }

        }
        #endregion
    }



}