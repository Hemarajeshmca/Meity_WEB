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
    public class PAWHSServiceMasterController : Controller
    {

        private IConfiguration _configuration;
        public PAWHSServiceMasterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        // GET: PAWHSItemMaster
        public ActionResult PAWHSServiceMasterList()
        {
            return View();
        }
        public ActionResult PAWHSServiceMasterForm()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetServiceMasterlist([FromBody] Context objContext)
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
                //string Urlcon = "/all_pawhs_service_master?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.FilterBy_Option + "&filterby_code=" + objContext.FilterBy_Code + "&filterby_fromvalue=" + objContext.FilterBy_FromValue + "&filterby_tovalue=" + objContext.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceMaster/");
                string Urlcon = "PAWHSServiceMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("all_pawhs_service_master", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objList);
        }


        [HttpPost]
        public ActionResult ServiceMasterfetch([FromBody] FContext objContext)
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
                //string Urlcon = "/pawhs_service_master?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&service_rowid=" + objContext.service_rowid + "&agg_code=" + objContext.agg_code + "&service_code=" + objContext.service_code;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceMaster/");
                string Urlcon = "PAWHSServiceMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("pawhs_service_master", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }

        [HttpPost]
        public ActionResult ServiceMasterSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            SDocument objDoc = new SDocument();
            SContext objContextsave = new SContext();
            SHeader objheader = new SHeader();
            objContextsave.userId = objContext.userId;
            objContextsave.locnId = objContext.locnId;
            objContextsave.localeId = objContext.localeId;
            objContextsave.orgnId = objContext.orgnId;
            objContextsave.Header = objContext.Header;
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
                //string Urlcon = "/pawhs_new_service_master";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceMaster/");
                string Urlcon = "PAWHSServiceMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("pawhs_new_service_master", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }



        #region list
        public class List
        {
            public int Out_service_rowid { get; set; }
            public string Out_agg_code { get; set; }
            public string Out_service_code { get; set; }
            public string Out_service_name { get; set; }
            public string Out_service_ll_name { get; set; }
            public string Out_hsn_code { get; set; }
            public string Out_hsn_description { get; set; }
            public decimal Out_rate { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

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


        #region fetch
        public class FHeader
        {
            public int IOU_service_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_service_code { get; set; }
            public string In_service_name { get; set; }
            public string In_service_ll_name { get; set; }
            public string In_output_name_code { get; set; }
            public string In_output_name_desc { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_description { get; set; }
            public float In_rate { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FHeader Header { get; set; }
            public int service_rowid { get; set; }
            public string agg_code { get; set; }
            public string service_code { get; set; }
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
            public int IOU_service_rowid { get; set; }
            public string In_agg_code { get; set; }
            public string IOU_service_code { get; set; }
            public string In_service_name { get; set; }
            public string In_service_ll_name { get; set; }
            public string In_output_name_code { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_description { get; set; }
            public float In_rate { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SHeader Header { get; set; }

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