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
    public class PAWHSReadyForPickUpController : Controller
    {
        // GET: PAWHSReadyForPickUp
        public ActionResult ReadyForPickupList()
        {
            return View();
        }
        public ActionResult ReadyForPickupForm()
        {
            return View();
        }
        private IConfiguration _configuration;
        public PAWHSReadyForPickUpController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult ReadyForPickUpListfetch([FromBody]Context context)
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
                //string Urlcon = "/allreadyto_pickup?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSManageForPickUp/");
                string Urlcon = "PAWHSManageForPickUp/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allreadyto_pickup", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        #region list
        public class List
        {
            public int Out_pickup_rowid { get; set; }
            public string Out_farmer_code { get; set; }
            public string Out_farmer_name { get; set; }
            public string Out_pickup_request_id { get; set; }
            public string Out_pickup_date { get; set; }
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
        [HttpPost]
        public ActionResult ReadyForPickUpfetch([FromBody] FContext objContext)
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
                //string Urlcon = "/readyto_pickup?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&pickup_rowid=" + objContext.pickup_rowid + "&farmer_code=" + objContext.farmer_code;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSManageForPickUp/");
                string Urlcon = "PAWHSManageForPickUp/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("readyto_pickup", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        #region single fetch
        public class Header
        {
            public int IOU_pickup_rowid { get; set; }
            public string IOU_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_pickup_request_id { get; set; }
            public string In_pickup_date { get; set; }
            public string In_village { get; set; }
            public string In_fig { get; set; }
            public string In_fig_contact_person { get; set; }
            public string In_fig_contact_no { get; set; }
            public string In_pickup_slot_code { get; set; }
            public string In_pickup_slot_desc { get; set; }
            public string In_vehicle_code { get; set; }
            public string In_vehicle_desc { get; set; }
            public string In_vehicle_reg_no { get; set; }
            public string In_quantity { get; set; }
            public string In_warehouse_code { get; set; }
            public string In_warehouse_name { get; set; }
            public string In_max_carry_weight { get; set; }
            public string In_load_sapce_volume { get; set; }
            public string In_load_floor_length { get; set; }
            public string In_load_floor_width { get; set; }
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
            public Header Header { get; set; }
            public string farmer_code { get; set; }
            public int pickup_rowid { get; set; }


        }
        public class FApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class FApplication
        {
            public FContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion
        [HttpPost]
        public ActionResult ReadyForPickUpSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
           

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
                //string Urlcon = "/new_readyto_pickup";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSManageForPickUp/");
                string Urlcon = "PAWHSManageForPickUp/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_readyto_pickup", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region save
        public class SHeader
        {
            public int IOU_pickup_rowid { get; set; }
            public string IOU_farmer_code { get; set; }
            public string In_pickup_request_id { get; set; }
            public string In_pickup_date { get; set; }
            public string In_village { get; set; }
            public string In_fig { get; set; }
            public string In_fig_contact_person { get; set; }
            public string In_fig_contact_no { get; set; }
            public string In_pickup_slot_code { get; set; }
            public string In_vehicle_code { get; set; }
            public string In_vehicle_reg_no { get; set; }
            public string In_quantity { get; set; }
            public string In_warehouse_code { get; set; }
            public string In_max_carry_weight { get; set; }
            public string In_load_sapce_volume { get; set; }
            public string In_load_floor_length { get; set; }
            public string In_load_floor_width { get; set; }
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