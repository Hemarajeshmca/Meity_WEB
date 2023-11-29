using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace FFI.Controllers
{
    public class PAWHSPaymentAdviceController : Controller
    {
        public ActionResult paymentadviceLIst()
        {
            return View();
        }
        public ActionResult paymentadvice()
        {
            return View();
        }
        #region xml Local DropDown Load
        public string Xmlcmb_Localbind()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Orgl", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "Generatexml.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/refund");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion
        private IConfiguration _configuration;
        public PAWHSPaymentAdviceController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        public JsonResult PAWHSPaymentAdviceListfetch([FromBody]Context context)
        {
            Application objList = new Application();
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
                //string urlstring = "http://169.38.77.186/Deployable_image_final_pawhs/api/KANCHI";
                string Urlcon = "PAWHSpaymentadvice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                // client.BaseAddress = new Uri("http://localhost:60695/api/PAWHSpaymentadvice/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allpawhs_payment_advice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        public ActionResult PAWHSPaymentAdvicefetch([FromBody] Contextfetch objContext)
        {
            Applicationfetch objout = new Applicationfetch();
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
                //string urlstring = "http://169.38.77.186/Deployable_image_final_pawhs/api/KANCHI";
                string Urlcon = "PAWHSpaymentadvice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://localhost:60695/api/PAWHSpaymentadvice/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("pawhs_ser_aggregator_registration", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (Applicationfetch)JsonConvert.DeserializeObject(post_data, typeof(Applicationfetch));
            }
            return Json(objout);
        }
        public ActionResult PAWHSPaymentAdviceSave([FromBody] Contextsave objContextS)
        {
            Applicationsave objRoot = new Applicationsave();
            Documentsave objDoc = new Documentsave();
            Contextsave objContextDetails = new Contextsave();
            objContextDetails.userId = objContextS.userId;
            objContextDetails.locnId = objContextS.locnId;
            objContextDetails.localeId = objContextS.localeId;
            objContextDetails.orgnId = objContextS.orgnId;
            objContextDetails.Header = objContextS.Header;
            objContextDetails.Detail = objContextS.Detail;

            objDoc.context = objContextDetails;
            objRoot.document = objDoc;
            

            //if (objContextDetails.Header.In_mode_flag == "")
            //{
            //    objContextDetails.Header.In_mode_flag = "U";
            //}

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
                //string urlstring = "http://169.38.77.186/Deployable_image_final_pawhs/api/KANCHI";
                string Urlcon = "PAWHSpaymentadvice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/PAWHSpaymentadvice/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_pawhs_payment_advice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (Documentsave)JsonConvert.DeserializeObject(post_data, typeof(Documentsave));
            }
            //return Json(post_data);
            return Json(objDoc);
        }
        #region List
        public class List
        {
            public int Out_payment_rowid { get; set; }
            public string Out_payment_id { get; set; }
            public string Out_date { get; set; }
            public string Out_period_from { get; set; }
            public string Out_period_to { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<List> List { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }

        }
        public class ApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class Application
        {
            public Context context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion
        #region Fetch
        public class Headerfetch
        {
            public int IOU_payment_rowid { get; set; }
            public string IOU_payment_id { get; set; }
            public string IOU_from_date { get; set; }
            public string IOU_to_date { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Detailfetch
        {
            public int In_paymentdtl_rowid { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public float In_amount_paid { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Contextfetch
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Headerfetch Header { get; set; }
            public IList<Detailfetch> Detail { get; set; }
            public int payment_rowid { get; set; }
            public string payment_id { get; set; }
            public string from_date { get; set; }
            public string to_date { get; set; }

        }
        public class ApplicationExceptionfetch
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class Applicationfetch
        {
            public Contextfetch context { get; set; }
            public ApplicationExceptionfetch ApplicationException { get; set; }

        }
        #endregion
        #region Save
        public class Headersave
        {
            public int IOU_payment_rowid { get; set; }
            public string In_payment_id { get; set; }
            public string In_from_date { get; set; }
            public string In_to_date { get; set; }
            public string In_bank_name { get; set; }
            public int IOU_total_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Detailsave
        {
            public int In_paymentdtl_rowid { get; set; }
            public string In_req_no { get; set; }
            public string In_farmer_code { get; set; }
            public int In_amount_paid { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Contextsave
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Headersave Header { get; set; }
            public IList<Detailsave> Detail { get; set; }

        }
        public class Documentsave
        {
            public Contextsave context { get; set; }

        }
        public class Applicationsave
        {
            public Documentsave document { get; set; }

        }
        #endregion
    }
}