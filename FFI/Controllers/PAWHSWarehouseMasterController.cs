using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.IO;

namespace FFI.Controllers
{
    public class PAWHSWarehouseMasterController : Controller
    {
        // GET: PAWHSWarehouseMaster
        //Muralidharan developed on 18-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public PAWHSWarehouseMasterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult PAWHSWarehouseMasterList()
        {
            return View();
        }
        public ActionResult WarehouseMasterForm()
        {
            return View();
        }
        public class List
        {
            public int Out_whs_rowid { get; set; }
            public string Out_agg_code { get; set; }
            public string Out_whs_code { get; set; }
            public string Out_whs_type { get; set; }
            public string Out_whs_name { get; set; }
            public string Out_whs_addr1 { get; set; }
            public string Out_whs_addr2 { get; set; }
            public string Out_whs_country { get; set; }
            public string Out_whs_state { get; set; }
            public string Out_whs_dist { get; set; }
            public string Out_whs_taluk { get; set; }
            public string Out_whs_panchayat { get; set; }
            public string Out_whs_village { get; set; }
            public string Out_whs_pincode { get; set; }
            public int Out_sqrf_area { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

        }
        public class FarmerFilter
        {
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public int out_record_count { get; set; }
            public int from_index { get; set; }
            public int to_index { get; set; }
            public int record_count { get; set; }
        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FarmerFilter Filter { get; set; }
            public IList<List> List { get; set; }

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
        public class Header
        {
            public int IOU_whs_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_whs_code { get; set; }
            public string In_whs_type { get; set; }
            public string In_whs_name { get; set; }
            public string In_whs_addr1 { get; set; }
            public string In_whs_addr2 { get; set; }
            public string In_whs_country { get; set; }
            public string In_whs_country_desc { get; set; }
            public string In_whs_state { get; set; }
            public string In_whs_state_desc { get; set; }
            public string In_whs_dist { get; set; }
            public string In_whs_dist_desc { get; set; }
            public string In_whs_taluk { get; set; }
            public string In_whs_taluk_desc { get; set; }
            public string In_whs_panchayat { get; set; }
            public string In_whs_panchayat_desc { get; set; }
            public string In_whs_village { get; set; }
            public string In_whs_village_desc { get; set; }
            public string In_whs_pincode { get; set; }
            public int In_sqrf_area { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SingleContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int IOU_whs_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_whs_code { get; set; }
            public Header Header { get; set; }

        }
     
        public class SingleApplication
        {
            public SingleContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        public class SaveHeader
        {
            public int IOU_whs_rowid { get; set; }
            public string In_agg_code { get; set; }
            public string IOU_whs_code { get; set; }
            public string In_whs_type { get; set; }
            public string In_whs_name { get; set; }
            public string In_whs_addr1 { get; set; }
            public string In_whs_addr2 { get; set; }
            public string In_whs_country { get; set; }
            public string In_whs_state { get; set; }
            public string In_whs_dist { get; set; }
            public string In_whs_taluk { get; set; }
            public string In_whs_panchayat { get; set; }
            public string In_whs_village { get; set; }
            public string In_whs_pincode { get; set; }
            public int In_sqrf_area { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SaveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SaveHeader Header { get; set; }

        }
        public class Document
        {
            public SaveContext context { get; set; }

        }
        public class SaveApplication
        {
            public Document document { get; set; }

        }
        [HttpPost]
        public ActionResult ServiceList([FromBody]Context objContext)
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
                //string Urlcon = "/allwarehouse_registration?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSWarehouseMaster/");
                string Urlcon = "PAWHSWarehouseMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allwarehouse_registration", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SingleServiceList([FromBody]SingleContext objContext)
        {
            SingleApplication objList = new SingleApplication();
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
                //string Urlcon = "/warehouse_registration?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&whs_rowid=" + objContext.IOU_whs_rowid + "&agg_code=" + objContext.IOU_agg_code + "&whs_code=" + objContext.IOU_whs_code + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSWarehouseMaster/");
                string Urlcon = "PAWHSWarehouseMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("warehouse_registration", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (SingleApplication)JsonConvert.DeserializeObject(post_data, typeof(SingleApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveWarehouseMaster([FromBody]SaveContext objContext)
        {
            SaveApplication ObjRoot = new SaveApplication();
            SaveContext ObjContext = new SaveContext();
            Document ObjDocuent = new Document();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
            ObjContext.userId = objContext.userId;
            ObjDocuent.context = ObjContext;
            ObjRoot.document = ObjDocuent;

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
                //string Urlcon = "/new_warehouse_registration";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSWarehouseMaster/");
                string Urlcon = "PAWHSWarehouseMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_warehouse_registration", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
    }
}