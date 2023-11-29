using System;
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
    public class PAWHSPaymentdetailsupdateController : Controller
    {
        private IConfiguration _configuration;
        public PAWHSPaymentdetailsupdateController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        // GET: PAWHSPaymentdetailsupdate
        public ActionResult PAWHSPaymentdetailsupdate()
        {
            return View();
        }
        [HttpPost]
        public JsonResult fetchpaymentdetailslist([FromBody]FContext context)
        {   
            FApplication objList = new FApplication();
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
                string Urlcon = "PAWHSPaymentdetailsupdate/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://localhost:60695/api/PAWHSPaymentdetailsupdate/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("pawhs_payment_update", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult PaymentDetailsUpdate([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            SDocument objDoc = new SDocument();
            SContext objContextsave = new SContext();
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
                string Urlcon = "PAWHSPaymentdetailsupdate/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.BaseAddress = new Uri("http://localhost:60695/api/PAWHSPaymentdetailsupdate/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_pawhs_payment_update", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }

        #region fetch
        public class FPaymentDtl
        {
            public int In_paymentdtl_rowid { get; set; }
            public string In_payment_advice_no { get; set; }
            public string In_receipt_id { get; set; }
            public string In_farmer_name { get; set; }
            public float In_payment_amount { get; set; }
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
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<FPaymentDtl> PaymentDtl { get; set; }

            public string payment_status { get; set; }

        }
        public class FApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class FApplication
        {
            public FContext context { get; set; }
            public FApplicationException ApplicationException { get; set; }

        }
        #endregion
        #region save
        public class SPaymentDtl
        {
            public int In_paymentdtl_rowid { get; set; }
            public string In_payment_advice_no { get; set; }
            public string In_receipt_id { get; set; }
            public string In_farmer_name { get; set; }
            public int In_payment_amount { get; set; }
            public string In_payment_date { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_remark { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_payment_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<SPaymentDtl> PaymentDtl { get; set; }

        }
        public class SDocument
        {
            public SContext context { get; set; }

        }
        public class SApplication
        {
            public SDocument document { get; set; }

        }
        #endregion
    }



}