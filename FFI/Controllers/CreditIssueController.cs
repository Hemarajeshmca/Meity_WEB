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
    public class CreditIssueController : Controller
    {
        // GET: CreditIssue
        public ActionResult CreditIssueForm()
        {
            return View();
        }
        public ActionResult CreditIssueList()
        {
            return View();
        }
        private IConfiguration _configuration;
        public CreditIssueController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult CreditIssueListfetch([FromBody]Context context)
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
                string Urlcon = "/allcreditissue?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
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
            public int Out_creditissue_rowid { get; set; }
            public string Out_ic_code { get; set; }
            public string Out_ic_name { get; set; }
            public string Out_creditissue_no { get; set; }
            public string Out_creditissue_date { get; set; }
            public string Out_customer_type { get; set; }
            public string Out_customer_type_desc { get; set; }
            public string Out_customer_name { get; set; }
            public string Out_reciver_location { get; set; }
            public string Out_reciver_location_desc { get; set; }
            public string Out_reciver_address { get; set; }
            public string Out_process_status { get; set; }
            public string Out_process_status_desc { get; set; }
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
        [HttpPost]
        public ActionResult CreditIssuefetch([FromBody] FContext objContext)
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
                string Urlcon = "/creditissue?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&creditissue_rowid=" + objContext.creditissue_rowid;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        #region list fetch
        public class CreditIssueDetail
        {
            public int In_creditissuedtl_rowid { get; set; }
            public string In_creditissue_no { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_catg_desc { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_subcatg_desc { get; set; }
            public string In_product_code { get; set; }
            public string In_product_desc { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_desc { get; set; }
            public float In_received_sale_qty { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_uomtype_desc { get; set; }
            public float In_base_price { get; set; }
            public float In_product_amount { get; set; }
            public float In_discount_amount { get; set; }
            public float In_tax_amount { get; set; }
            public float In_tax_rate { get; set; }
            public float In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class CreditIssueTax
        {
            public int In_creditissuetax_rowid { get; set; }
            public int In_creditissuedtl_rowid { get; set; }
            public string In_creditissue_no { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_desc { get; set; }
            public float In_cgst_rate { get; set; }
            public float In_sgst_rate { get; set; }
            public float In_igst_rate { get; set; }
            public float In_ugst_rate { get; set; }
            public string In_tax_type { get; set; }
            public float In_tax_rate { get; set; }
            public float In_taxable_amount { get; set; }
            public float In_tax_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PaymentCollection
        {
            public int In_paymentcollection_rowid { get; set; }
            public string In_payment_type { get; set; }
            public string In_payment_no { get; set; }
            public float In_payment_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_ref_no { get; set; }
            public string In_payment_date { get; set; }
            public string In_process_status { get; set; }
            public string In_process_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Header
        {
            public int IOU_creditissue_rowid { get; set; }
            public string In_orgn_code { get; set; }
            public string In_creditissue_no { get; set; }
            public string In_ic_code { get; set; }
            public string In_ic_desc { get; set; }
            public string In_creditissue_date { get; set; }
            public string In_customer_type { get; set; }
            public string In_customer_type_desc { get; set; }
            public string In_customer_name { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_provider_location { get; set; }
            public string In_provider_location_desc { get; set; }
            public string In_reciver_location { get; set; }
            public string In_reciver_location_desc { get; set; }
            public float In_totalcredit_amount { get; set; }
            public float In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_process_status { get; set; }
            public string In_process_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
            public IList<CreditIssueDetail> CreditIssueDetail { get; set; }
            public IList<CreditIssueTax> CreditIssueTax { get; set; }
            public IList<PaymentCollection> PaymentCollection { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }

            public int creditissue_rowid { get; set; }

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

        [HttpPost]
        public ActionResult CreditIssueSave([FromBody] SAContext objContext1)
        {
            SAApplication objRoot = new SAApplication();
            SADocument objDoc = new SADocument();
            SAContext objContextDetails = new SAContext();
            objContextDetails.userId = objContext1.userId;
            objContextDetails.locnId = objContext1.locnId;
            objContextDetails.localeId = objContext1.localeId;
            objContextDetails.orgnId = objContext1.orgnId;
            objContextDetails.Header = objContext1.Header;
            objContextDetails.CreditIssueDetail = objContext1.CreditIssueDetail;

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
                string Urlcon = "/newsaveCreditIssue";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }

        #region save
        public class SAHeader
        {
            public int IOU_creditissue_rowid { get; set; }
            public string In_orgn_code { get; set; }
            public string In_creditissue_no { get; set; }
            public string In_ic_code { get; set; }
            public string In_creditissue_date { get; set; }
            public string In_customer_type { get; set; }
            public string In_farmer_code { get; set; }
            public string In_customer_name { get; set; }
            public string In_provider_location { get; set; }
            public string In_reciver_location { get; set; }
            public float In_totalcredit_amount { get; set; }
            public float In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_process_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SACreditIssueDetail
        {
            public int In_creditissuedtl_rowid { get; set; }
            public string In_creditissue_no { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_code { get; set; }
            public string In_hsn_code { get; set; }
            public float In_received_sale_qty { get; set; }
            public float In_base_price { get; set; }
            public float In_product_amount { get; set; }
            public float In_discount_amount { get; set; }
            public float In_tax_amount { get; set; }
            public float In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SAContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SAHeader Header { get; set; }
            public IList<SACreditIssueDetail> CreditIssueDetail { get; set; }

        }
        public class SADocument
        {
            public SAContext context { get; set; }

        }
        public class SAApplication
        {
            public SADocument document { get; set; }

        }
        #endregion

        [HttpPost]
        public ActionResult CreditIssuePaymentfetch([FromBody] PContext objContext)
        {
            PApplication objout = new PApplication();
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
                string Urlcon = "/creditissue_payment?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&creditissue_rowid=" + objContext.creditissue_rowid;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PApplication)JsonConvert.DeserializeObject(post_data, typeof(PApplication));
            }
            return Json(objout);
        }

        #region payment fetch
        public class PHeader
        {
            public string In_creditissue_no { get; set; }
            public string In_creditissue_date { get; set; }
            public float In_invoice_amount { get; set; }
            public float In_balance_amount { get; set; }

        }
        public class Detail
        {
            public int In_paymentcollection_rowid { get; set; }
            public string In_payment_type { get; set; }
            public string In_payment_type_desc { get; set; }
            public string In_payment_no { get; set; }
            public float In_payment_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_ref_no { get; set; }
            public string In_payment_date { get; set; }
            public string In_process_status { get; set; }
            public string In_process_status_desc { get; set; }
            public float In_paid_amount { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PHeader Header { get; set; }
            public IList<Detail> Detail { get; set; }
            public int creditissue_rowid { get; set; }

        }
        public class PApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PApplication
        {
            public PContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion
        [HttpPost]
        public ActionResult CreditIssuePaymentSave([FromBody] PSContext objContext)
        {
            PSApplication objRoot = new PSApplication();
            Document objDoc = new Document();
            PSContext objContextDetails = new PSContext();
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
                string Urlcon = "/credit_newsavePaymentCollection";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region payemntsave
        public class PSHeader
        {
            public int IOU_creditissue_rowid { get; set; }
            public string IOU_creditissue_no { get; set; }
            public string In_creditissue_date { get; set; }
            public float In_invoice_amount { get; set; }
            public float In_balance_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_ref_no { get; set; }
            public string In_payment_date { get; set; }
            public float In_payment_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PSDetail
        {
            public int In_paymentcollection_rowid { get; set; }
            public string In_payment_type { get; set; }
            public string In_payment_no { get; set; }
            public float In_balance_amount { get; set; }
            public float In_payment_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_ref_no { get; set; }
            public string In_payment_date { get; set; }
            public string In_process_status { get; set; }
            public float In_paid_amount { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PSContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PSHeader Header { get; set; }
            public IList<PSDetail> Detail { get; set; }

        }
        public class Document
        {
            public PSContext context { get; set; }

        }
        public class PSApplication
        {
            public Document document { get; set; }

        }
        #endregion
    }

}