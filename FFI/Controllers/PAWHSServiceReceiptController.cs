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
    public class PAWHSServiceReceiptController : Controller
    {
        // GET: PAWHSServiceReceipt
        //Muralidharan developed on 20-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public PAWHSServiceReceiptController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult PAWHSServiceReceiptList()
        {
            return View();
        }
        public ActionResult ServiceReceiptForm()
        {
            return View();
        }
        public class List
        {
            public int Out_receipt_rowid { get; set; }
            public string Out_grn { get; set; }
            public string Out_farmer_code { get; set; }
            public string Out_farmer_name { get; set; }
            public string Out_pickup_request_id { get; set; }
            public string Out_pickup_date { get; set; }
            public string Out_pickup_slot { get; set; }
            public string Out_procurement { get; set; }
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
            public int IOU_receipt_rowid { get; set; }
            public string IOU_service_receipt_no { get; set; }
            public string In_warehouse_code { get; set; }
            public string In_warehouse_name { get; set; }
            public string In_service_receipt_date { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_request_id { get; set; }
            public Double In_amount { get; set; }
            public Double In_paid_amount { get; set; }
            public Double In_balance_amount { get; set; }
            public string In_remarks { get; set; }
            public string In_output_item { get; set; }
            public string In_service_type { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Detail
        {
            public int In_receiptdtl_rowid { get; set; }
            public string In_item_code { get; set; }
            public string In_item_name { get; set; }
            public string In_uom { get; set; }
            public Double In_quantity { get; set; }
            public Double In_received_qty { get; set; }
            public Double In_accepted_qty { get; set; }
            public string In_remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SingleContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int IOU_receipt_rowid { get; set; }
            public string IOU_service_receipt_no { get; set; }
            public Header Header { get; set; }
            public IList<Detail> Detail { get; set; }

        }
  
        public class SingleApplication
        {
            public SingleContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        public class SaveHeader
        {
            public int IOU_receipt_rowid { get; set; }
            public string IOU_service_receipt_no { get; set; }
            public string In_warehouse_code { get; set; }
            public string In_service_receipt_date { get; set; }
            public string In_farmer_code { get; set; }
            public string In_request_id { get; set; }
            public Double In_amount { get; set; }
            public Double In_paid_amount { get; set; }
            public string In_remarks { get; set; }
            public string In_output_item { get; set; }
            public string In_service_type { get; set; }
            public Double In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SaveDetail
        {
            public int In_receiptdtl_rowid { get; set; }
            public string In_item_code { get; set; }
            public string In_uom { get; set; }
            public Double In_quantity { get; set; }
            public Double In_received_qty { get; set; }
            public Double In_accepted_qty { get; set; }
            public string In_remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SaveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SaveHeader Header { get; set; }
            public IList<SaveDetail> Detail { get; set; }

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
                //string Urlcon = "/allservice_receipting?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceReceipt/");
                string Urlcon = "PAWHSServiceReceipt/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allservice_receipting", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
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
                //string Urlcon = "/service_receipting?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&receipt_rowid=" + objContext.IOU_receipt_rowid + "&service_receipt_no=" + objContext.IOU_service_receipt_no  + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceReceipt/");
                string Urlcon = "PAWHSServiceReceipt/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("service_receipting", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (SingleApplication)JsonConvert.DeserializeObject(post_data, typeof(SingleApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveServiceReceipt([FromBody]SaveContext objContext)
        {
            SaveApplication ObjRoot = new SaveApplication();
            SaveContext ObjContext = new SaveContext();
            Document ObjDocuent = new Document();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.userId = objContext.userId;
            ObjContext.Header = objContext.Header;
            ObjContext.Detail = objContext.Detail;
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
                //string Urlcon = "/new_pawhs_service_receipting";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceReceipt/");
                string Urlcon = "PAWHSServiceReceipt/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_pawhs_service_receipting", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                ObjDocuent = (Document)JsonConvert.DeserializeObject(post_data, typeof(Document));
            }
            return Json(ObjDocuent);
        }
    }
}