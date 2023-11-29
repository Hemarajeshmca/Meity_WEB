using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Text;
using static FFI.Controllers.InWardController;

namespace FFI.Controllers
{
    public class ICDStockIssueController : Controller
    {
        private IConfiguration _configuration;
        string urlstring = "";
        public ICDStockIssueController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IActionResult StockIssueTransfer()
        {
            return View();
        }
        public IActionResult StockIssueConfirm()
        {
            return View();
        }
        public ActionResult IssueConfirmForm()
        {
            return View();
        }
        public ActionResult StockIssueTransferForm()
        {

            return View();
        }
        [HttpPost]
        public ActionResult IssueList(string org, string locn, string user, string lang, string filterby_option, string filterby_code, string filterby_fromvalue, string filterby_tovalue,string issue_status)
        {
            ICDStockIssue_Model objList = new ICDStockIssue_Model();
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
                // string Urlcon = "ICD_MOBILEAPP/allStockInwardList?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "ICDStockIssue/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //  var response = client.GetAsync("").Result;
                var response = client.GetAsync("IssueList?org="+ org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&filterby_option=" + filterby_option + "&filterby_code=" + filterby_code + "&filterby_fromvalue="+ filterby_fromvalue + "&filterby_tovalue="+ filterby_tovalue + "&issue_status=" + issue_status).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (ICDStockIssue_Model)JsonConvert.DeserializeObject(post_data, typeof(ICDStockIssue_Model));
            }
            return Json(objList);
        }

        [HttpPost]
        public ActionResult StockIssueConfirmSave([FromBody] ICDINSContext objContext)
        {
            ICDINSRoot objRoot = new ICDINSRoot();
            ICDINSDocument objDoc = new ICDINSDocument();
            ICDINSDetail objdtl = new ICDINSDetail();
            List<ICDINSDetail> objlst = new List<ICDINSDetail>();
            ICDINSContext objContextDetails = new ICDINSContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            // objContextDetails.Detail = objContext.Detail;


            //objdtl.In_received_qty = Qty;
            //objdtl.In_product_code = ProductCode;
            //objdtl.In_mode_flag = objContext.Header.In_mode_flag;
            //objdtl.In_status_code = "A";

            objdtl.In_received_qty = objContext.Header.In_received_qty;
            objdtl.In_product_code = objContext.Header.In_product_code;
            objdtl.In_mode_flag = objContext.Header.In_mode_flag; 
            objdtl.In_status_code = "A";
            objdtl.In_mode_flag = "U";
            objlst.Add(objdtl);
            objContextDetails.Detail = objlst; 
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
                string Urlcon = "ICDMOBInward/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newSaveStockInward", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd(); 
            }
            return Json(post_data);
        }

        [HttpPost]
        public ActionResult StockTransferedSave([FromBody] ICDINSContext objContext)
        {
            ICDINSRoot objRoot = new ICDINSRoot();
            ICDINSDocument objDoc = new ICDINSDocument();
            ICDINSDetail objdtl = new ICDINSDetail();
            List<ICDINSDetail> objlst = new List<ICDINSDetail>();
            ICDINSContext objContextDetails = new ICDINSContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            // objContextDetails.Detail = objContext.Detail; 

            objdtl.In_received_qty = objContext.Header.In_received_qty;
            objdtl.In_product_code = objContext.Header.In_product_code;
            objdtl.In_mode_flag = objContext.Header.In_mode_flag;
            objdtl.In_status_code = "A";
            objlst.Add(objdtl);
            objContextDetails.Detail = objlst;
            //objDoc.context.Detail= objlst;
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
                // string urlstring = "http://169.38.77.186/Deployable_image_trial_odisha/api/KANCHIICD_MOBILEAPP";
                string Urlcon = "ICDMOBInward/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newSaveStockInward", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();

                // objDoc = (ICDINSDocument)JsonConvert.DeserializeObject(post_data, typeof(ICDINSDocument));


                //JsonResult data1 = Json(post_data);
                // if(data1!=null)
                //    return Json("success");
                // else
                //    return Json(post_data);
            }
            return Json(post_data);
        }
    }
    public class ICDINSDocument
    {
        public ICDINSContext context { get; set; }
    }

    public class ICDINSRoot
    {
        public ICDINSDocument document { get; set; }
    }
    public class ICDINSContext
    {
        public string orgnId { get; set; }
        public string locnId { get; set; }
        public string userId { get; set; }
        public string localeId { get; set; }
        public ICDINSHeader Header { get; set; }
        public List<ICDINSDetail> Detail { get; set; }
    }
    public class ICDINSDetail
    { 
        public int In_inwarddtl_rowid { get; set; }
        public string In_inward_code { get; set; }
        public string In_grn_no { get; set; }
        public string In_product_catg_code { get; set; }
        public string In_product_subcatg_code { get; set; }
        public string In_product_code { get; set; }
        public string In_uomtype_code { get; set; }
        public string In_batch_no { get; set; }
        public string In_received_qty { get; set; }
        public string In_product_amount { get; set; }
        public string In_tax_amount { get; set; }
        public int In_transport_amount { get; set; }
        public string In_discount { get; set; }
        public string In_net_amount { get; set; }
        public string In_status_code { get; set; }
        public string In_mode_flag { get; set; }
        //public List<ICDINSDetailSlno> Slnoinfo { get; set; }

    }
    public class ICDINSHeader
    {
        public string IOU_inward_rowid { get; set; }
        public string In_orgn_code { get; set; }
        public string In_ic_code { get; set; }
        public string In_inward_code { get; set; }
        public string In_grn_no { get; set; }
        public string In_grn_date { get; set; }
        public string In_supplier_name { get; set; }
        public string In_supplier_location { get; set; }
        public string In_from_state { get; set; }
        public string In_Remarks { get; set; }
        public string In_status_code { get; set; }
        public string In_process_status { get; set; }
        public string In_row_timestamp { get; set; }
        public string In_mode_flag { get; set; }
        public string In_bill_image { get; set; }
        public string In_transport_amount { get; set; }
        public string In_others { get; set; }
        public string In_loading_unloading_cost { get; set; }
        public string In_local_transport_cost { get; set; }
        public string In_local_loading_unloading_cost { get; set; }
        public string In_product_code { get; set; }
        public string In_received_qty { get; set; }

    }
    public class ICDStockIssue_Model
    {
        public List<StockIssueList> IssueTransferList { get; set; }
    }
    public class StockIssueList
    {
        public int Out_inward_rowid { get; set; }
        public string Out_ic_code { get; set; }
        public string Out_ic_name { get; set; }
        public string Out_grn_no { get; set; }
        public string Out_grn_date { get; set; }
        public string Out_supplier_name { get; set; }
        public string Out_supplier_location { get; set; }
        public string Out_from_state { get; set; }
        public string Out_status_code { get; set; }
        public decimal received_qty { get; set; }
        public decimal accepted_qty { get; set; }
        public decimal noofstock { get; set; }
        public string product_code { get; set; }
        public string uom_code { get; set; }
        public string Out_product_name { get; set; }
    }
}
