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

namespace FFI.Controllers
{
    public class GSTController : Controller
    {
        // GET: GST
        public ActionResult GSTList()
        {
            return View();
        }
        public ActionResult GSTForm()
        {
            return View();
        }
        private IConfiguration _configuration;
        public GSTController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        //public JsonResult GSTListfetch(string org, string locn, string user, string lang, string filterby_option, string filterby_code, 
        //                                string filterby_fromvalue, string filterby_tovalue)
        //{
        public JsonResult GSTListfetch([FromBody] Context Context)
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
                
           //     urlstring = "http://localhost:51379/api/";
                string Urlcon = "Admin_GST/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                //   var response = client.PostAsync("allgst", content).Result;
                //var response = client.GetAsync("allgst?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&filterby_option=" + filterby_option + 
                //                                            "&filterby_code=" + filterby_code + "&filterby_fromvalue=" + filterby_fromvalue + " &filterby_tovalue = " + 
                //                                            filterby_tovalue + "").Result;

                var response = client.GetAsync("allgst?org=" + Context.orgnId + "&locn=" + Context.locnId + "&user=" + Context.userId + "&lang=" +
                    Context.localeId + "&filterby_option=" + Context.FilterBy_Option + "&filterby_code=" + Context.FilterBy_Code + "&filterby_fromvalue=" +
                    Context.FilterBy_FromValue + "&filterby_tovalue=" + Context.FilterBy_ToValue + "").Result;


                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult GSTfetch([FromBody] FContext objContext)
        {
            FApplication objout = new FApplication();
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
        //        urlstring = "http://localhost:51379/api/";
                string Urlcon = "Admin_GST/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("gst?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" +
                    objContext.localeId + "&taxrate_rowid=" + objContext.taxrate_rowid + "&provider_location=" + objContext.provider_location+"").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication)); 
            }
            return Json(objout);
        }
        [HttpPost]
        public ActionResult GSTSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.Detail = objContext.Detail;

            objDoc.context = objContextDetails;
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
                //string Urlcon = "/newsaveGST";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.DefaultRequestHeaders.Accept.Clear();
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                //Stream data = response.Content.ReadAsStreamAsync().Result;
                //StreamReader reader = new StreamReader(data);
                //post_data = reader.ReadToEnd();

     //           urlstring = "http://localhost:51379/api/";
                string Urlcon = "Admin_GST/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newgst", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region list
        public class List
        {
            public int Out_taxrate_rowid { get; set; }
            public string Out_provider_location { get; set; }
            public string Out_provider_location_desc { get; set; }
            public string Out_reciver_location { get; set; }
            public string Out_reciver_location_desc { get; set; }
            public string Out_hsn_code { get; set; }
            public string Out_hsn_category_code { get; set; }
            public string Out_hsn_category { get; set; }
            public string Out_hsn_description { get; set; }
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
        #region single fetch
        public class Header
        {
            public int IOU_taxrate_rowid { get; set; }
            public string IOU_provider_location { get; set; }
            public string In_provider_location_desc { get; set; }
            public string In_reciver_location { get; set; }
            public string In_reciver_location_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Detail
        {
            public int In_taxratedtl_rowid { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_category_code { get; set; }
            public string In_hsn_category { get; set; }
            public string In_hsn_description { get; set; }
            public float In_cgst_rate { get; set; }
            public float In_sgst_rate { get; set; }
            public float In_igst_rate { get; set; }
            public float In_ugst_rate { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<Detail> Detail { get; set; }
            public string taxrate_rowid { get; set; }
            public string provider_location { get; set; }

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
        public class SHeader
        {
            public int IOU_taxrate_rowid { get; set; }
            public string In_provider_location { get; set; }
            public string In_reciver_location { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SDetail
        {
            public int In_taxratedtl_rowid { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_category_code { get; set; }
            public string In_hsn_description { get; set; }
            public float In_cgst_rate { get; set; }
            public float In_sgst_rate { get; set; }
            public float In_igst_rate { get; set; }
            public float In_ugst_rate { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SHeader Header { get; set; }
            public IList<SDetail> Detail { get; set; }

        }
        public class Document
        {
            public SContext context { get; set; }

        }
        public class SApplication
        {
            public Document document { get; set; }

        }
        #endregion
    }
}