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
    public class PAWHSStockAdjustController : Controller
    {
        private IConfiguration _configuration;
        public PAWHSStockAdjustController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        // GET: PAWHSStockAdjustList
        public ActionResult PAWHSStockAdjustList()
        {
            return View();
        }
        public ActionResult PAWHSStockAdjustForm()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetStockAdjustlist([FromBody] Context objContext)
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
            urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            using (var client = new HttpClient())
            {
                //string Urlcon = "/allstock_adjustment?org="+objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.filterby_option + "&filterby_code=" + objContext.filterby_code + "&filterby_fromvalue=" + objContext.filterby_fromvalue + "&filterby_tovalue=" + objContext.filterby_tovalue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSStockAdj/");
                string Urlcon = "PAWHSStockAdj/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allstock_adjustment", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objList);
        }


        [HttpPost]
        public ActionResult StockAdjustfetch([FromBody] FContext objContext)
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
            urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            using (var client = new HttpClient())
            {
                //string Urlcon = "/stock_adjustment?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&adjustment_rowid=" + objContext.adjustment_rowid + "&adjustment_no=" + objContext.adjustment_no;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSStockAdj/");
                string Urlcon = "PAWHSStockAdj/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("stock_adjustment", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }

        [HttpPost]
        public ActionResult StockAdjustSave([FromBody] SContext objContext)
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
            objContextsave.Detail = objContext.Detail;
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
                //string Urlcon = "/new_pawhs_stock_adjustment";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSStockAdj/");
                string Urlcon = "PAWHSStockAdj/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_pawhs_stock_adjustment", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }





        #region  list 

        public class List
        {
            public int Out_adjustment_rowid { get; set; }
            public string Out_adjustment_no { get; set; }
            public string Out_adjustment_date { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string filterby_option { get; set; }
            public string filterby_code { get; set; }
            public string filterby_fromvalue { get; set; }
            public string filterby_tovalue { get; set; }
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

        #endregion


        #region fetch
        public class FHeader
        {
            public int IOU_adjustment_rowid { get; set; }
            public string IOU_adjustment_no { get; set; }
            public string In_whs_code { get; set; }
            public string In_whs_name { get; set; }
            public string In_adjustment_date { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_process_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FDetail
        {
            public int In_adjustmentdtl_rowid { get; set; }
            public string In_grn_invoiceno { get; set; }
            public string In_adjustment_type { get; set; }
            public string In_adjustment_desc { get; set; }
            public string In_item_code { get; set; }
            public string In_item_name { get; set; }
            public string In_inward_outward { get; set; }
            public string In_uom { get; set; }
            public float In_quantity { get; set; }
            public float In_adjustment_qty { get; set; }
            public string In_remarks { get; set; }
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
            public IList<FDetail> Detail { get; set; }

            public int adjustment_rowid { get; set; }
            public string adjustment_no { get; set; }

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


        #region  save
        public class SHeader
        {
            public int IOU_adjustment_rowid { get; set; }
            public string IOU_adjustment_no { get; set; }
            public string In_whs_code { get; set; }
            public string In_adjustment_date { get; set; }
            public string In_status_code { get; set; }
            public string In_process_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SDetail
        {
            public int In_adjustmentdtl_rowid { get; set; }
            public string In_grn_invoiceno { get; set; }
            public string In_adjustment_type { get; set; }
            public string In_item_code { get; set; }
            public string In_inward_outward { get; set; }
            public string In_uom { get; set; }
            public int In_quantity { get; set; }
            public int In_adjustment_qty { get; set; }
            public string In_remarks { get; set; }
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