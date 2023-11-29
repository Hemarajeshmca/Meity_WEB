using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class PAWHSNEWProductAdj : Controller
    {
        // GET: ProductAdj
        private IConfiguration _configuration;

        public PAWHSNEWProductAdj(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        string urlstring = "";
        public ActionResult ProductAdjustmentForm()
        {
            return View();
        }
        public ActionResult ProductAdjustmentList()
        {
            return View();
        }


        [HttpPost]
        public ActionResult fetchstockadjustmentlist([FromBody] StockContext objContext)
        {

            StockRootObject objList = new StockRootObject();
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

                //string Urlcon = "ICD_MOBILEAPP/allstockAdjustment?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.filterby_option + "&filterby_code=" + objContext.filterby_code + "&filterby_fromvalue=" + objContext.filterby_fromvalue + "&filterby_tovalue=" + objContext.filterby_tovalue + "";
                string Urlcon = "PAWHS_New_StockAdj/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allstock_list", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (StockRootObject)JsonConvert.DeserializeObject(post_data, typeof(StockRootObject));
            }
            return Json(objList);
        }


        [HttpPost]
        public ActionResult stockadjustmentfetch([FromBody] PAWHSStock_FetchContext objContext)
        {
            PAWHSStockFetchApplication objout = new PAWHSStockFetchApplication();
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
                //string Urlcon = "ICD_MOBILEAPP/mobstockAdjustment?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&adjustment_rowid=" + objContext.adjustment_rowid;
                string Urlcon = "PAWHS_New_StockAdj/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("new_pawhs_Single_FetchStock", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSStockFetchApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSStockFetchApplication));
            }
            return Json(objout);
        }



        [HttpPost]
        public ActionResult stockadjustmentsave([FromBody] PAWHSStock_Save_Context objContext)
        {
            PAWHSStock_Save_Application objRoot = new PAWHSStock_Save_Application();
            PAWHSStock_Save_Document objDoc = new PAWHSStock_Save_Document();
            PAWHSStock_Save_Context objContextsave = new PAWHSStock_Save_Context();
            PAWHSStock_Save_Header objheader = new PAWHSStock_Save_Header();
            objContextsave.userId = objContext.userId;
            objContextsave.locnId = objContext.locnId;
            objContextsave.localeId = objContext.localeId;
            objContextsave.orgnId = objContext.orgnId;
            objContextsave.Header = objContext.Header;
            objContextsave.QtyDetail = objContext.QtyDetail;
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

                //string Urlcon = "ICD_MOBILEAPP/NewSaveStockAdjustment";
                string Urlcon = "PAWHS_New_StockAdj/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                // var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_pawhs_Stock_save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (PAWHSStock_Save_Document)JsonConvert.DeserializeObject(post_data, typeof(PAWHSStock_Save_Document));
            }
            return Json(post_data);
        }

        #region list 
        public class StockLIst
        {
            public int Out_adjustment_rowid { get; set; }
            public string Out_agg_code { get; set; }          
            public string Out_adjustment_no { get; set; }
            public string Out_adjustment_date { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

        }
        public class StockContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }     
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public IList<StockLIst> List { get; set; }
        }
        public class StockApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class StockRootObject
        {
            public StockContext context { get; set; }
            public StockApplicationException ApplicationException { get; set; }

        }
        #endregion


        #region fetch
        public class PAWHSStock_FetchHeader
        {
            public int IOU_adjustment_rowid1 { get; set; }
            public string In_agg_code { get; set; }         
            public string In_adjustment_no { get; set; }
            public string In_adjustment_date { get; set; }
            public string In_status_code { get; set; }
            public string In_process_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHSStock_Fetch_QtyDetail
        {
            public int In_adjustmentdtl_rowid { get; set; }
            public string In_adjustment_no { get; set; }
            public string In_receipt_ref_doc_no { get; set; }
            public string In_ref_doc_date { get; set; }
            public string In_adjustment_type { get; set; }
            public string In_adjustment_desc { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_catg_desc { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_subcatg_desc { get; set; }
            public string In_product_code { get; set; }
            public string In_product_desc { get; set; }
            public double In_adjustment_qty { get; set; }
            public string In_uom_type { get; set; }
            public string In_uom_type_desc { get; set; }
            public string In_remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public double In_out_qty { get; set; }

        }
        public class PAWHSStock_FetchContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int IOU_adjustment_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_adjustment_no { get; set; }
            public PAWHSStock_FetchHeader Header { get; set; }
            public IList<PAWHSStock_Fetch_QtyDetail> QtyDetail { get; set; }
           

        }
        public class FApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PAWHSStockFetchApplication
        {
            public PAWHSStock_FetchContext context { get; set; }

        }
        #endregion


        #region save 
        public class PAWHSStock_Save_Header
        {
            public Int32 In_adjustment_rowid { get; set; }
            public string In_agg_code { get; set; }               
            public string In_adjustment_no { get; set; }
            public string In_adjustment_date { get; set; }
            public string In_status_code { get; set; }
            public string In_process_status { get; set; }            
            public string In_mode_flag { get; set; }
            public Int32 IOU_adjustment_rowid { get; set; }
            public string IOU_adjustment_no { get; set; }
            public string IOU_ErroNo { get; set; }

        }
        public class PAWHSStock_Save_PODetail
        {
            public int IOU_adjustment_rowid { get; set; }
            public int In_adjustmentdtl_rowid { get; set; }
            public string IOU_adjustment_no { get; set; }
            public string In_receipt_ref_doc_no { get; set; }
            public string In_ref_doc_date { get; set; }
            public string In_adjustment_type { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_catg_desc { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_subcatg_desc { get; set; }
            public string In_product_code { get; set; }
            public string In_product_desc { get; set; }
            public double In_adjustment_qty { get; set; }
            public string In_uom_type { get; set; }
            public string In_remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public double In_out_qty { get; set; }

        }
        public class PAWHSStock_Save_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHSStock_Save_Header Header { get; set; }
            public IList<PAWHSStock_Save_PODetail> QtyDetail { get; set; }

        }
        public class PAWHSStock_Save_Document
        {
            public PAWHSStock_Save_Context context { get; set; }
            public StockApplicationException ApplicationException { get; set; }

        }
        public class PAWHSStock_Save_Application
        {
            public PAWHSStock_Save_Document document { get; set; }

        }
        #endregion
    }
}
