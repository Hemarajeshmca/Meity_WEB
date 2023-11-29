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
    public class PAWHSProductionTransactionController : Controller
    {
        // GET: PAWHSProductionTransaction
        public ActionResult ProductionTransactionStageList()
        {
            return View();
        }
        public ActionResult TransactionStageForm()
        {
            return View();
        }
        private IConfiguration _configuration;
        public PAWHSProductionTransactionController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult PAWHSProductionTransactionListfetch([FromBody]Context context)
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
                //string Urlcon = "/allproduction_transaction?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSProductionTransaction/");
                string Urlcon = "PAWHSProductionTransaction/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allproduction_transaction", content).Result;
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
            public int Out_pro_tran_rowid { get; set; }
            public string Out_fg_code { get; set; }
            public string Out_fg_desc { get; set; }
            public string Out_stage_document_id { get; set; }
            public string Out_stage_description { get; set; }
            public string Out_stage_start_datetime { get; set; }
            public string Out_stage_end_datetime { get; set; }
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
        public ActionResult PAWHSProductionTransactionSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.List = objContext.List;

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
                //string Urlcon = "/new_production_transaction";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSProductionTransaction/");
                string Urlcon = "PAWHSProductionTransaction/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_production_transaction", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region save
        public class Header
        {
            public int IOU_pro_tran_rowid { get; set; }
            public string IOU_fg_code { get; set; }
            public string In_stage_document_id { get; set; }
            public string In_production_stage_code { get; set; }
            public string In_stage_start_datetime { get; set; }
            public string In_stage_end_datetime { get; set; }
            public string In_tran_type { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SList
        {
            public int In_pro_tran_dtl_rowid { get; set; }
            public string In_input_or_output { get; set; }
            public string In_item { get; set; }
            public string In_uom { get; set; }
            public int In_qty { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<SList> List { get; set; }

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
        [HttpPost]
        public ActionResult PAWHSProductionTransactionfetch([FromBody] FContext objContext)
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
                //string Urlcon = "/production_transaction?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&pro_tran_rowid=" + objContext.pro_tran_rowid + "&fg_code=" + objContext.fg_code;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSProductionTransaction/");
                string Urlcon = "PAWHSProductionTransaction/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("production_transaction", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        #region single fetch
        public class FHeader
        {
            public int IOU_pro_tran_rowid { get; set; }
            public string IOU_fg_code { get; set; }
            public string In_stage_document_id { get; set; }
            public string In_production_stage_code { get; set; }
            public string In_production_stage_desc { get; set; }
            public string In_stage_start_datetime { get; set; }
            public string In_stage_end_datetime { get; set; }
            public string In_tran_type { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FList
        {
            public int In_pro_tran_dtl_rowid { get; set; }
            public string In_input_or_output { get; set; }
            public string In_item { get; set; }
            public string In_uom { get; set; }
            public int In_qty { get; set; }
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
            public FHeader Header { get; set; }
            public IList<FList> List { get; set; }
            public int pro_tran_rowid { get; set; }
            public string fg_code { get; set; }

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
    }
}