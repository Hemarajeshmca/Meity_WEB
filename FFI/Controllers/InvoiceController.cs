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
using static FFI.Controllers.Invoice_model;
using iTextSharp.text;
using iTextSharp.text.pdf;
using MySql.Data.MySqlClient;
using System.Data;
using Microsoft.AspNetCore.Hosting;
using System.Drawing;
using Microsoft.AspNetCore.Http;
using Rectangle = iTextSharp.text.Rectangle;

namespace FFI.Controllers
{
    public class InvoiceController : Controller
    {
        // GET: Invoice
        public ActionResult InvoiceForm()
        {
            return View();
        }
        public ActionResult InvoiceList()
        {
            return View();
        }
        public ActionResult InvoicePayment()
        {
            return View();
        }
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        string dbstring = "";
        private IConfiguration _configuration;
        public InvoiceController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult InvoiceListfetch([FromBody]Context context)
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

                //  string Urlcon = "ICD_MOBILEAPP/allinvoice?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "ICDInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("ICDInvoiceAll", content).Result;
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
            public int Out_invoice_rowid { get; set; }
            public string Out_ic_code { get; set; }
            public string Out_ic_name { get; set; }
            public string Out_invoice_no { get; set; }
            public string Out_invoice_date { get; set; }
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
        public ActionResult Invoicefetch([FromBody] FContext objContext)
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

                //string Urlcon = "ICD_MOBILEAPP/invoice?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&invoice_rowid=" + objContext.invoice_rowid;
                string Urlcon = "ICDInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("ICDInvoicefetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
                HttpContext.Session.SetString("orgId", objout.context.orgnId);
                HttpContext.Session.SetString("userId", objout.context.userId);
                HttpContext.Session.SetString("Invoiceno", objout.context.Header.In_invoice_no);
            }
            return Json(objout);
        }
        #region list fetch
        public class InvoiceDetail
        {
            public int In_invoicedtl_rowid { get; set; }
            public string In_invoice_no { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_catg_desc { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_subcatg_desc { get; set; }
            public string In_product_code { get; set; }
            public string In_product_desc { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_desc { get; set; }
            public float In_qty { get; set; }
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
        public class InvoiceTax
        {
            public int In_invoicetax_rowid { get; set; }
            public string In_invoice_no { get; set; }
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
            public float In_balance_amount { get; set; }
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
            public int IOU_invoice_rowid { get; set; }
            public string In_orgn_code { get; set; }
            public string In_invoice_no { get; set; }
            public string In_ic_code { get; set; }
            public string In_ic_desc { get; set; }
            public string In_invoice_date { get; set; }
            public string In_customer_type { get; set; }
            public string In_customer_type_desc { get; set; }
            public string In_customer_name { get; set; }
            public string In_customer_address { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_provider_location { get; set; }
            public string In_provider_location_desc { get; set; }
            public string In_reciver_location { get; set; }
            public string In_reciver_location_desc { get; set; }
            public float In_totalinvoice_amount { get; set; }
            public float In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_process_status { get; set; }
            public string In_process_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
            public Int32 In_transport_amount { get; set; }
            public string In_others { get; set; }
            public string In_phone_no { get; set; }
            public IList<InvoiceDetail> InvoiceDetail { get; set; }
            public IList<InvoiceTax> InvoiceTax { get; set; }
            public IList<PaymentCollection> PaymentCollection { get; set; }

            public IList<ICDInvoiceDetailSlno> Slno { get; set; }

        }
        public class ICDInvoiceDetailSlno
        {
            public int In_invoicedtl_rowid { get; set; }
            public string In_slno { get; set; }
            public string In_no_of_bags { get; set; }
            public string In_invoice_no { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public int invoice_rowid { get; set; }


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
        public ActionResult InvoiceSave([FromBody] SAContext objContext)
        {
            SItestApplication objApp = new SItestApplication();
            SItestDocument objTestDocShare = new SItestDocument();
            SItestContext objTestContextDetailsShare = new SItestContext();
            SItestHeader ObjTestHeader = new SItestHeader();
            ObjTestHeader.IOU_invoice_rowid = objContext.Header.IOU_invoice_rowid;
            ObjTestHeader.In_orgn_code = objContext.Header.In_orgn_code;
            ObjTestHeader.In_invoice_no = objContext.Header.In_invoice_no;
            ObjTestHeader.In_ic_code = objContext.Header.In_ic_code;
            ObjTestHeader.In_invoice_date = objContext.Header.In_invoice_date;
            ObjTestHeader.In_customer_type = objContext.Header.In_customer_type;
            ObjTestHeader.In_customer_name = objContext.Header.In_customer_name;
            ObjTestHeader.In_customer_address = objContext.Header.In_customer_address;
            ObjTestHeader.In_farmer_code = objContext.Header.In_farmer_code;
            ObjTestHeader.In_provider_location = objContext.Header.In_provider_location;
            ObjTestHeader.In_reciver_location = objContext.Header.In_reciver_location;
            ObjTestHeader.In_totalinvoice_amount = objContext.Header.In_totalinvoice_amount;
            ObjTestHeader.In_balance_amount = objContext.Header.In_balance_amount;
            ObjTestHeader.In_status_code = objContext.Header.In_status_code;
            ObjTestHeader.In_process_status = objContext.Header.In_process_status;
            ObjTestHeader.In_row_timestamp = objContext.Header.In_row_timestamp;
            ObjTestHeader.In_mode_flag = objContext.Header.In_mode_flag;
            ObjTestHeader.In_others = objContext.Header.In_others;
            ObjTestHeader.In_transport_amount = objContext.Header.In_transport_amount;
            ObjTestHeader.In_phone_no = objContext.Header.In_phone_no;

            List<SItestInvoiceDetail> objTestList = new List<SItestInvoiceDetail>();

            for (int i = 0; i < objContext.InvoiceDetail.Count; i++)
            {
                SItestInvoiceDetail objtest = new SItestInvoiceDetail();
                objtest.In_invoicedtl_rowid = objContext.InvoiceDetail[i].In_invoicedtl_rowid;
                objtest.In_product_catg_code = objContext.InvoiceDetail[i].In_product_catg_code;
                objtest.In_product_subcatg_code = objContext.InvoiceDetail[i].In_product_subcatg_code;
                objtest.In_product_code = objContext.InvoiceDetail[i].In_product_code;
                objtest.In_hsn_code = objContext.InvoiceDetail[i].In_hsn_code;
                objtest.In_qty = objContext.InvoiceDetail[i].In_qty;
                objtest.In_base_price = objContext.InvoiceDetail[i].In_base_price;
                objtest.In_product_amount = objContext.InvoiceDetail[i].In_product_amount;
                objtest.In_discount_amount = objContext.InvoiceDetail[i].In_discount_amount;
                objtest.In_tax_amount = objContext.InvoiceDetail[i].In_tax_amount;
                objtest.In_net_amount = objContext.InvoiceDetail[i].In_net_amount;
                objtest.In_status_code = objContext.InvoiceDetail[i].In_status_code;
                objtest.In_mode_flag = objContext.InvoiceDetail[i].In_mode_flag;
                objTestList.Add(objtest);
            }
            List<SItestSerialno> objserialno = new List<SItestSerialno>();
            for (int i = 0; i < objContext.Serialno.Count; i++)
            {
                SItestSerialno objtest1 = new SItestSerialno();
                objtest1.In_slno_row_id = objContext.Serialno[i].In_slno_row_id;
                objtest1.In_no_of_bags = objContext.Serialno[i].In_no_of_bags;
                objtest1.In_slno = objContext.Serialno[i].In_slno;
                objtest1.In_invoice_no = objContext.Serialno[i].In_invoice_no;
                objtest1.In_product_code = objContext.Serialno[i].In_product_code;
                objtest1.In_product_name = objContext.Serialno[i].In_product_name;
                objtest1.In_mode_flag = objContext.Serialno[i].In_mode_flag;
                objserialno.Add(objtest1);
            }

            objTestContextDetailsShare.userId = objContext.userId;
            objTestContextDetailsShare.locnId = objContext.locnId;
            objTestContextDetailsShare.localeId = objContext.localeId;
            objTestContextDetailsShare.orgnId = objContext.orgnId;
            objTestContextDetailsShare.InvoiceDetail = objTestList;
            objTestContextDetailsShare.Serialno = objserialno;
            objTestContextDetailsShare.Header = ObjTestHeader;

            objTestDocShare.context = objTestContextDetailsShare;
            objApp.document = objTestDocShare;

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
                string Urlcon = "ICDInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objApp), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_Invoice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objTestDocShare = (SItestDocument)JsonConvert.DeserializeObject(post_data, typeof(SItestDocument));
            }
            return Json(objTestDocShare);

        }

        #region save
        public class SAHeader
        {
            public int IOU_invoice_rowid { get; set; }
            public string In_orgn_code { get; set; }
            public string In_invoice_no { get; set; }
            public string In_ic_code { get; set; }
            public string In_invoice_date { get; set; }
            public string In_customer_type { get; set; }
            public string In_customer_name { get; set; }
            public string In_customer_address { get; set; }
            public string In_farmer_code { get; set; }
            public string In_provider_location { get; set; }
            public string In_reciver_location { get; set; }
            public double In_totalinvoice_amount { get; set; }
            public double In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_process_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
            public Int32 In_transport_amount { get; set; }
            public Int32 In_others { get; set; }
            public string In_phone_no { get; set; }

        }
        public class SAInvoiceDetail
        {
            public int In_invoicedtl_rowid { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_code { get; set; }
            public string In_hsn_code { get; set; }
            public double In_qty { get; set; }
            public double In_base_price { get; set; }
            public double In_product_amount { get; set; }
            public double In_discount_amount { get; set; }
            public double In_tax_amount { get; set; }
            public double In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class ICDInvoiceDetailSerialno
        {
            public int In_slno_row_id { get; set; }
            public string In_slno { get; set; }
            public string In_no_of_bags { get; set; }
            public string In_invoice_no { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class SAContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SAHeader Header { get; set; }
            public IList<SAInvoiceDetail> InvoiceDetail { get; set; }
            public IList<ICDInvoiceDetailSerialno> Serialno { get; set; }

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
        public ActionResult InvoicePaymentfetch([FromBody] PContext objContext)
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

                // string Urlcon = "ICD_MOBILEAPP/paymentcollection?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&invoice_rowid=" + objContext.invoice_rowid;
                string Urlcon = "ICDInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("ICDInvoicePayfetch", content).Result;
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
            public string In_invoice_no { get; set; }
            public string In_invoice_date { get; set; }
            public float In_invoice_amount { get; set; }
            public float In_balance_amount { get; set; }

        }
        public class Detail
        {
            public int In_paymentcollection_rowid { get; set; }
            public string In_payment_type { get; set; }
            public string In_payment_type_desc { get; set; }
            public string In_payment_no { get; set; }
            public float In_balance_amount { get; set; }
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
            public int invoice_rowid { get; set; }


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
        public ActionResult InvoicePaymentSave([FromBody] PSContext objContext)
        {
            PSApplication objRoot = new PSApplication();
            Document1 objDoc = new Document1();
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

                // string Urlcon = "ICD_MOBILEAPP/mobnewsavePaymentCollection";
                string Urlcon = "ICDInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                // var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_invoice_payment", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region payemntsave
        public class PSHeader
        {
            public int IOU_invoice_rowid { get; set; }
            public string IOU_invoice_no { get; set; }
            public string In_invoice_date { get; set; }
            public float In_invoice_amount { get; set; }
            public float In_balance_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_ref_no { get; set; }
            public string In_payment_date { get; set; }
            public float In_payment_amount { get; set; }
            public string In_payment_response { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
            public string In_check_no { get; set; }

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
        public class Document1
        {
            public PSContext context { get; set; }

        }
        public class PSApplication
        {
            public Document1 document { get; set; }

        }
        #endregion

        public ActionResult InvoicesendSMS([FromBody] send_sms objsms)
        {

            string post_data = "";

            using (var client = new HttpClient())
            {
                string Urlcon = "http://169.38.77.190:101/api/SendSMS/SendSMS";
                client.BaseAddress = new Uri(Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objsms), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }



        #region sendsms
        public class send_sms
        {
            public string senderid { get; set; }
            public string mobile_no { get; set; }
            public string msg_desc { get; set; }

        }

        public class RootObject
        {
            public string ErrorCode { get; set; }
            public string ErrorMessage { get; set; }
            public List<send_sms> send_sms { get; set; }
        }
        #endregion

        public ActionResult downloadpdf()
        {
            var sptver = "Invoice A4 Print";
            var file_ext = ".pdf";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string folderName = "DownloadXLFiles";
            string fileLocation = Path.Combine(webRootPath, folderName);

            //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
            string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + file_ext);
            // string path = Path.Combine(fileLocation, sptver + file_ext);
            string path = Path.Combine(sptver + file_ext);
            if (System.IO.File.Exists(path))
            {

                System.IO.File.Delete(path);
            }

            string contentType = "application/pdf";

            byte[] filecontent = exportpdf();
            //string filename = "Sample_PDF_" + DateTime.Now.ToString("MMddyyyyhhmmss") + ".pdf";
            return File(filecontent, contentType, path);
        }
        public byte[] exportpdf()
        {
            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "bh")
            {
                dbstring = _configuration.GetSection("dbtypeBA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_dev")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_uat")["api_url"] = _configuration.GetSection("odUat")["api_url"];
                }
                else
                {
                    _configuration.GetSection("Api_pro")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            DataSet table_data = new DataSet();
            DataTable temp = new DataTable();
            con = new MySqlConnection(dbstring);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("ICDRPT_TaxInvoice", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("in_orgnId", HttpContext.Session.GetString("orgId"));
            cmd.Parameters.AddWithValue("in_userId", HttpContext.Session.GetString("userId"));
            cmd.Parameters.AddWithValue("in_invoice_no", HttpContext.Session.GetString("Invoiceno"));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(table_data);
            con.Close();
            // DataSet table_data = JsonConvert.DeserializeObject<DataSet>(HttpContext.Session.GetString("dtDownload"));
            // creating document object
            System.IO.MemoryStream ms = new System.IO.MemoryStream();
            var rec = new iTextSharp.text.Rectangle(230, 600);
            //iTextSharp.text.Rectangle rec = new iTextSharp.text.Rectangle(PageSize.A4);
            rec.BackgroundColor = new BaseColor(System.Drawing.Color.Olive);
            Document doc = new Document(rec);
            doc.SetPageSize(iTextSharp.text.PageSize.A4);
            PdfWriter writer = PdfWriter.GetInstance(doc, ms);
            doc.Open();
            PdfContentByte content = writer.DirectContent;
            iTextSharp.text.Rectangle rectangle = new iTextSharp.text.Rectangle(doc.PageSize);
            //customized border sizes
            rectangle.Left += doc.LeftMargin - 5;
            rectangle.Right -= doc.RightMargin - 5;
            rectangle.Top -= doc.TopMargin - 5;
            rectangle.Bottom += doc.BottomMargin - 5;
            content.SetColorStroke(BaseColor.BLACK); // setting the color of the border to black
            content.Rectangle(rectangle.Left, rectangle.Bottom, rectangle.Width, rectangle.Height);
            content.Stroke();

            //Creating paragraph for header
            iTextSharp.text.Font mainFont = new iTextSharp.text.Font();
            iTextSharp.text.Font boldFont = new iTextSharp.text.Font();
            boldFont = FontFactory.GetFont("Arial", 12, iTextSharp.text.Font.BOLD);
            iTextSharp.text.Font NormalFont = iTextSharp.text.FontFactory.GetFont("Arial", 12, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font NormalFont1 = iTextSharp.text.FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);

            BaseFont bfntHead = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.EMBEDDED);
            iTextSharp.text.Font fntHead = new iTextSharp.text.Font(bfntHead, 9, 1, iTextSharp.text.BaseColor.BLACK);
            BaseFont bfntHead1 = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.EMBEDDED);
            iTextSharp.text.Font fntblack = new iTextSharp.text.Font(bfntHead1, 10, 1, iTextSharp.text.BaseColor.BLACK);
            Paragraph prgHeading = new Paragraph();
            prgHeading.Alignment = Element.ALIGN_LEFT;
            prgHeading.Add(new Chunk("Tax Invoice- cum- bill of supply".ToUpper(), boldFont));
            doc.Add(prgHeading);
            Paragraph prgGeneratedBY = new Paragraph();
            BaseFont btnAuthor = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
            iTextSharp.text.Font fntAuthor = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
            prgGeneratedBY.Alignment = Element.ALIGN_RIGHT;
            prgGeneratedBY.Add(new Chunk("Invoice Generated by :" + HttpContext.Session.GetString("userId").ToUpper(), NormalFont));
            //DateTime.Now.ToShortDateString()
            prgGeneratedBY.Add(new Chunk("\nGenerated Date : " + DateTime.Parse(DateTime.Now.ToShortDateString()).ToString("dd/MM/yyyy"), NormalFont));
            doc.Add(prgGeneratedBY);
            //Adding a line
            // Paragraph p = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            //Adding line break
            //Paragraph prgGeneratedBY1 = new Paragraph();
            //BaseFont btnAutho1r = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
            //iTextSharp.text.Font fntAuthor1 = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
            //prgGeneratedBY1.Alignment = Element.ALIGN_RIGHT;
            //prgGeneratedBY1.Add(new Chunk("\nInvoice No : " + table_data.Tables[0].Rows[0]["invoice_no"], NormalFont));
            //prgGeneratedBY1.Add(new Chunk("\nInvoice Date : " + DateTime.Parse(table_data.Tables[0].Rows[0]["invoice_date"].ToString()).ToShortDateString(), NormalFont));
            //doc.Add(prgGeneratedBY1);
            string address = table_data.Tables[0].Rows[0]["addr"].ToString();
            int addrlen = 0;
            addrlen = address.Length;
            string addr1 = "";
            string addr2 = "";
            if (addrlen >= 25)
            {
                addr1 = address.Substring(0, 25);
                addrlen = addrlen - 26;
            }
            else
            {
                addr1 = address.Substring(0, addrlen);
            }
            if (addrlen > 1)
            {
                addr2 = address.Substring(26, addrlen);
            }

            //doc.Add(new Chunk("\nDetails of Seller:", boldFont));
            //doc.Add(new Chunk("\n" + table_data.Tables[0].Rows[0]["orgn_name"] + "                          Invoice No : " + table_data.Tables[0].Rows[0]["invoice_no"], NormalFont));
            //doc.Add(new Chunk("\nAddress      : " + addr1 + "                                             Invoice Date: " + DateTime.Parse(table_data.Tables[0].Rows[0]["invoice_date"].ToString()).ToString("dd/MM/yyyy"), NormalFont));
            //doc.Add(new Chunk("\n                   " + addr2, NormalFont));
            //doc.Add(new Chunk("\nState          :  " + table_data.Tables[0].Rows[0]["orgn_state"], NormalFont));
            //doc.Add(new Chunk("\nGSTIN        : " + table_data.Tables[0].Rows[0]["tax_reg_no"], NormalFont));
            //doc.Add(new Chunk("\nCINNO        : " + table_data.Tables[0].Rows[0]["cin_no"], NormalFont));
           
            PdfPTable tablet = new PdfPTable(2);
            float[] columnWidthst = new float[] { 70f, 30f };
            tablet.SetWidths(columnWidthst);
            tablet.DefaultCell.Border = Rectangle.NO_BORDER;
            tablet.WidthPercentage = 100;
            PdfPCell cellt = new PdfPCell();
            cellt.HorizontalAlignment = Element.ALIGN_LEFT;
            cellt.VerticalAlignment = Element.ALIGN_LEFT;
            cellt.AddElement(new Chunk("" + table_data.Tables[0].Rows[0]["orgn_name"], NormalFont));
            cellt.AddElement(new Chunk("Address         : " + addr1, NormalFont));
            cellt.AddElement(new Chunk("                      " + addr2, NormalFont));
            cellt.AddElement(new Chunk("State              : " + table_data.Tables[0].Rows[0]["orgn_state"], NormalFont));
            cellt.AddElement(new Chunk("GSTIN            : " + table_data.Tables[0].Rows[0]["tax_reg_no"], NormalFont));
            cellt.AddElement(new Chunk("CINNO           : " + table_data.Tables[0].Rows[0]["cin_no"], NormalFont));
            cellt.AddElement(new Chunk("", NormalFont));
            cellt.Border = Rectangle.NO_BORDER;
            tablet.AddCell(cellt);

            cellt = new PdfPCell(new Phrase());
            cellt.HorizontalAlignment = Element.ALIGN_RIGHT;
            cellt.VerticalAlignment = Element.ALIGN_RIGHT;
            cellt.AddElement(new Chunk("Invoice No     " + " : " + table_data.Tables[0].Rows[0]["invoice_no"], NormalFont));
            cellt.AddElement(new Chunk("Invoice Date " + " " + " : " + DateTime.Parse(table_data.Tables[0].Rows[0]["invoice_date"].ToString()).ToString("dd/MM/yyyy"), NormalFont));
            cellt.Border = Rectangle.NO_BORDER;
            tablet.AddCell(cellt);
            cellt.FixedHeight = 36f;
            doc.Add(tablet);
            doc.Add(new Chunk("\n", NormalFont));
            //Adding a line
            // Paragraph p1 = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk("\n", NormalFont));
            doc.Add(new Chunk("\nDetails of Receiver/Buyer (Bill to/ship to):", boldFont));
            doc.Add(new Chunk("\nName         : " + table_data.Tables[0].Rows[0]["customer_name"], NormalFont));
            doc.Add(new Chunk("\nAddress      : " + table_data.Tables[0].Rows[0]["customer_address"], NormalFont));
            doc.Add(new Chunk("\nState          :  " + table_data.Tables[0].Rows[0]["Customer_state"], NormalFont));
            doc.Add(new Chunk("\nGSTIN        : ", NormalFont));
            doc.Add(new Chunk("\n", NormalFont));
            //Adding a line
            //  Paragraph p2 = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk("\n", NormalFont));
            //Adding  PdfPTable
            //25
            PdfPTable table = new PdfPTable(table_data.Tables[2].Columns.Count);
            table.DefaultCell.FixedHeight = 27f;
            float[] columnWidths = new float[table_data.Tables[2].Columns.Count];

            //foreach (DataColumn column in table_data.Tables[2].Columns)
            //{
            //    PdfPCell cell = new PdfPCell();
            //    cell.HorizontalAlignment = Element.ALIGN_CENTER;
            //    cell.VerticalAlignment = Element.ALIGN_MIDDLE;
            //    //cell.Phrase = new Phrase(column.ColumnName.ToString(), fontBold);
            //    cell.Phrase = new Phrase(column.ColumnName);

            //    cell.BackgroundColor = new BaseColor(85, 107, 47);
            //    //cell.BorderColor = new BaseColor(255, 0, 0);
            //    cell.BorderColor = new BaseColor(244, 164, 96);


            //    table.AddCell(cell);

            //}
            for (int i = 0; i < table_data.Tables[2].Columns.Count; i++)
            {
                if (i == 0)
                {
                    columnWidths[i] = 12f;

                }
                if (i == 1)
                {
                    columnWidths[i] = 60f;
                }
                if (i == 2)
                {
                    columnWidths[i] = 13f;
                }
                if (i == 3)
                {
                    columnWidths[i] = 20f;
                }
                if (i == 4)
                {
                    columnWidths[i] = 20f;
                }
                if (i == 5)
                {
                    columnWidths[i] = 30f;
                }
                table.SetWidths(columnWidths);
                table.AddCell(table_data.Tables[2].Columns[i].ColumnName.ToString());

            }
            //  writing table Data


            for (int i = 0; i < table_data.Tables[2].Rows.Count; i++)
            {
                for (int j = 0; j < table_data.Tables[2].Columns.Count; j++)
                {
                    if (j >= 2)
                    {
                        PdfPCell cell = new PdfPCell();
                        cell.HorizontalAlignment = Element.ALIGN_RIGHT;
                        cell.VerticalAlignment = Element.ALIGN_RIGHT;
                        cell.Phrase = new Phrase(table_data.Tables[2].Rows[i][j].ToString());
                        //table.AddCell(table_data.Tables[2].Rows[i][j].ToString());
                        table.AddCell(cell);
                    }
                    else
                    {
                        table.AddCell(table_data.Tables[2].Rows[i][j].ToString());
                    }
                }
            }
            doc.Add(table);
            doc.Add(new Chunk("\n", NormalFont));
            //Paragraph prgGeneratedBY1 = new Paragraph();
            //BaseFont btnAutho1r = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
            //iTextSharp.text.Font fntAuthor1 = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
            //prgGeneratedBY1.Alignment = Element.ALIGN_RIGHT;
            //prgGeneratedBY1.Add(new Chunk("\nBill Total : " + table_data.Tables[4].Rows[0]["bill_total"], NormalFont));
            //// prgGeneratedBY1.Add(new Chunk("\nTransport Amount : " + table_data.Tables[0].Rows[0]["transport_amount"], NormalFont));
            //prgGeneratedBY1.Add(new Chunk("\nOthers : " + table_data.Tables[0].Rows[0]["others"], NormalFont));
            //prgGeneratedBY1.Add(new Chunk("\nTotal Tax : " + table_data.Tables[1].Rows[0]["tax_amt"], NormalFont));
            //prgGeneratedBY1.Add(new Chunk("\nTotal Invoice : " + table_data.Tables[1].Rows[0]["net_amount"], NormalFont));
            //doc.Add(prgGeneratedBY1);
            PdfPTable tableb = new PdfPTable(3);
            tableb.WidthPercentage = 30.0f;
            tableb.HorizontalAlignment = Element.ALIGN_RIGHT;
            float[] columnWidthsb = new float[] { 35f, 10f, 30f };
            tableb.SetWidths(columnWidthsb);

            tableb.DefaultCell.Border = Rectangle.NO_BORDER;
            PdfPCell cellb = new PdfPCell(new Phrase("Bill Total ", NormalFont));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase("  :"));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase(table_data.Tables[4].Rows[0]["bill_total"].ToString()));
            cellb.Border = Rectangle.NO_BORDER;
            cellb.HorizontalAlignment = Element.ALIGN_RIGHT;
            cellb.VerticalAlignment = Element.ALIGN_RIGHT;
            tableb.AddCell(cellb);

            cellb = new PdfPCell(new Phrase("Total Tax ", NormalFont));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase("  :"));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase(table_data.Tables[1].Rows[0]["tax_amt"].ToString()));
            cellb.Border = Rectangle.NO_BORDER;
            cellb.HorizontalAlignment = Element.ALIGN_RIGHT;
            cellb.VerticalAlignment = Element.ALIGN_RIGHT;
            tableb.AddCell(cellb);

            cellb = new PdfPCell(new Phrase("Discount (-) ", NormalFont));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase("  :"));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase(table_data.Tables[1].Rows[0]["discount"].ToString()));
            cellb.Border = Rectangle.NO_BORDER;
            cellb.HorizontalAlignment = Element.ALIGN_RIGHT;
            cellb.VerticalAlignment = Element.ALIGN_RIGHT;
            tableb.AddCell(cellb);

            cellb = new PdfPCell(new Phrase("Others ", NormalFont));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase("  :"));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase(table_data.Tables[0].Rows[0]["others"].ToString()));
            cellb.Border = Rectangle.NO_BORDER;
            cellb.HorizontalAlignment = Element.ALIGN_RIGHT;
            cellb.VerticalAlignment = Element.ALIGN_RIGHT;
            tableb.AddCell(cellb);

            cellb = new PdfPCell(new Phrase("Total Invoice ", NormalFont));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb = new PdfPCell(new Phrase("  :"));
            cellb.Border = Rectangle.NO_BORDER;
            tableb.AddCell(cellb);
            cellb.HorizontalAlignment = Element.ALIGN_RIGHT;
            cellb = new PdfPCell(new Phrase(table_data.Tables[1].Rows[0]["net_amount"].ToString()));
            cellb.Border = Rectangle.NO_BORDER;
            cellb.HorizontalAlignment = Element.ALIGN_RIGHT;
            cellb.VerticalAlignment = Element.ALIGN_RIGHT;
            tableb.AddCell(cellb);

            doc.Add(tableb);
            //doc.Add(new Chunk("\n                                                                                                                  Total Tax :" + table_data.Tables[1].Rows[0]["tax_amt"], NormalFont));
            //doc.Add(new Chunk("\n                                                                                                              Total Invoice :" + table_data.Tables[1].Rows[0]["net_amount"], NormalFont));
            doc.Add(new Chunk("\n", NormalFont));
            //Adding  PdfPTable
            PdfPTable table1 = new PdfPTable(table_data.Tables[3].Columns.Count);
            for (int k = 0; k < table_data.Tables[3].Columns.Count; k++)
            {
                table1.AddCell(table_data.Tables[3].Columns[k].ColumnName);

            }
            //  writing table Data
            for (int k = 0; k < table_data.Tables[3].Rows.Count; k++)
            {
                for (int l = 0; l < table_data.Tables[3].Columns.Count; l++)
                {

                    PdfPCell cell = new PdfPCell();
                    cell.HorizontalAlignment = Element.ALIGN_RIGHT;
                    cell.VerticalAlignment = Element.ALIGN_RIGHT;

                    cell.Phrase = new Phrase(table_data.Tables[3].Rows[k][l].ToString());
                    table1.AddCell(cell);
                }
            }
            doc.Add(table1);

            doc.Add(new Chunk("\nTotal Invoice Value in Words -" + table_data.Tables[1].Rows[0]["amttxt"], NormalFont));
            doc.Add(new Chunk("\n", NormalFont));
            //Adding a line
            // Paragraph p3 = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk("\n", NormalFont));
            doc.Add(new Chunk("\nTerms & Conditions :", boldFont));
            doc.Add(new Chunk("\n1. Subject to " + table_data.Tables[0].Rows[0]["orgn_state"] + "  district Jurisdiction only", NormalFont));
            doc.Add(new Chunk("\n2. Goods once sold will not be taken back.", NormalFont));
            doc.Add(new Chunk("\n", NormalFont));
            doc.Add(new Chunk("\n                                       *This is computer generated invoice, hence signature is not required*.", NormalFont1));
            doc.Close();

            byte[] result = ms.ToArray();

            return result;
        }


        public ActionResult downloadpdfInvoice()
        {
            var sptver = "Invoice Print";
            var file_ext = ".pdf";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string folderName = "DownloadXLFiles";
            string fileLocation = Path.Combine(webRootPath, folderName);

            //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
            string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + file_ext);
            // string path = Path.Combine(fileLocation, sptver + file_ext);
            string path = Path.Combine(sptver + file_ext);
            if (System.IO.File.Exists(path))
            {

                System.IO.File.Delete(path);
            }

            string contentType = "application/pdf";

            byte[] filecontent = exportpdfInvoice();
            //string filename = "Sample_PDF_" + DateTime.Now.ToString("MMddyyyyhhmmss") + ".pdf";
            return File(filecontent, contentType, path);
        }
        public byte[] exportpdfInvoice()
        {
            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "bh")
            {
                dbstring = _configuration.GetSection("dbtypeBA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_dev")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_uat")["api_url"] = _configuration.GetSection("odUat")["api_url"];
                }
                else
                {
                    _configuration.GetSection("Api_pro")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            DataSet table_data = new DataSet();
            DataTable temp = new DataTable();
            con = new MySqlConnection(dbstring);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("ICDRPT_TaxInvoice", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("in_orgnId", HttpContext.Session.GetString("orgId"));
            cmd.Parameters.AddWithValue("in_userId", HttpContext.Session.GetString("userId"));
            cmd.Parameters.AddWithValue("in_invoice_no", HttpContext.Session.GetString("Invoiceno"));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(table_data);
            con.Close();
            // DataSet table_data = JsonConvert.DeserializeObject<DataSet>(HttpContext.Session.GetString("dtDownload"));
            // creating document object
            System.IO.MemoryStream ms = new System.IO.MemoryStream();

            var rec = new iTextSharp.text.Rectangle(230, 600);
            //var doc = new iTextSharp.text.Document(pgSize, leftMargin, rightMargin, topMargin, bottomMargin);

            //iTextSharp.text.Rectangle rec = new iTextSharp.text.Rectangle(PageSize.A4);
            rec.BackgroundColor = new BaseColor(System.Drawing.Color.White);
            //Document doc = new Document(rec);
            Document doc = new iTextSharp.text.Document(rec, 10f, 10f, 10f, 10f);
            doc.SetPageSize(rec);
            PdfWriter writer = PdfWriter.GetInstance(doc, ms);
            doc.Open();
            //PdfContentByte content = writer.DirectContent;
            //iTextSharp.text.Rectangle rectangle = new iTextSharp.text.Rectangle(doc.PageSize);
            ////customized border sizes
            //rectangle.Left += doc.LeftMargin - 5;
            //rectangle.Right -= doc.RightMargin - 5;
            //rectangle.Top -= doc.TopMargin - 5;
            //rectangle.Bottom += doc.BottomMargin - 5;
            //content.SetColorStroke(BaseColor.BLACK); // setting the color of the border to black
            //content.Rectangle(rectangle.Left, rectangle.Bottom, rectangle.Width, rectangle.Height);
            //content.Stroke();

            //Creating paragraph for header
            iTextSharp.text.Font mainFont = new iTextSharp.text.Font();
            iTextSharp.text.Font boldFont = new iTextSharp.text.Font();
            boldFont = FontFactory.GetFont("Arial", 12, iTextSharp.text.Font.BOLD);
            iTextSharp.text.Font NormalFont = iTextSharp.text.FontFactory.GetFont("Arial", 12, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font HeaderFont = iTextSharp.text.FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font SmallFont = iTextSharp.text.FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);

            BaseFont bfntHead = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.EMBEDDED);
            iTextSharp.text.Font fntHead = new iTextSharp.text.Font(bfntHead, 9, 1, iTextSharp.text.BaseColor.BLACK);
            BaseFont bfntHead1 = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.EMBEDDED);
            iTextSharp.text.Font fntblack = new iTextSharp.text.Font(bfntHead1, 10, 1, iTextSharp.text.BaseColor.BLACK);

            Paragraph prgHeading = new Paragraph();
            prgHeading.Alignment = Element.ALIGN_CENTER;
            prgHeading.Add(new Chunk(table_data.Tables[0].Rows[0]["orgn_name"].ToString(), HeaderFont));
            doc.Add(prgHeading);

            doc.Add(new Chunk("  " + table_data.Tables[0].Rows[0]["addrsmall"].ToString(), SmallFont));
            doc.Add(new Chunk("   " + table_data.Tables[0].Rows[0]["pincode"].ToString(), SmallFont));
            BaseFont btnAuthor = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
            //Paragraph prgGeneratedBY = new Paragraph();
            //BaseFont btnAuthor = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
            //iTextSharp.text.Font fntAuthor = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
            //prgGeneratedBY.Alignment = Element.ALIGN_LEFT;
            //prgGeneratedBY.Add(new Chunk(table_data.Tables[0].Rows[0]["addrsmall"].ToString(), SmallFont));
            //prgGeneratedBY.Add(new Chunk(table_data.Tables[0].Rows[0]["pincode"].ToString(), SmallFont));
            //doc.Add(prgGeneratedBY);

            doc.Add(new Chunk("\n                                            *Invoice*", SmallFont));
            doc.Add(new Chunk("\nBill No : " + table_data.Tables[0].Rows[0]["invoice_no"] + "                               Date :" + DateTime.Parse(table_data.Tables[0].Rows[0]["invoice_date"].ToString()).ToString("dd/MM/yyyy"), SmallFont));
            doc.Add(new Chunk("\nCustomer Name : " + table_data.Tables[0].Rows[0]["customer_name"], SmallFont));
            doc.Add(new Chunk("\nDescription  " + "        Qty  " + "       Price " + "       Discount   " + "         Total ", SmallFont));
            doc.Add(new Chunk("------------------------------------------------------------------------------", SmallFont));

            for (int i = 0; i < table_data.Tables[2].Rows.Count; i++)
            {

                string description = table_data.Tables[2].Rows[i][1].ToString();
                int desclen = 0;
                desclen = description.Length;
                string desc1 = "";
                string desc2 = "";
                if (desclen >= 13)
                {
                    desc1 = description.Substring(0, 13);
                    desclen = desclen - 14;
                }
                else
                {
                    desc1 = description.Substring(0, desclen);
                    desclen = desclen - desclen;
                }
                if (desclen > 0)
                {
                    desc2 = description.Substring(14, desclen);
                }

                doc.Add(new Chunk("\n" + desc1 + "  " + table_data.Tables[2].Rows[i][2].ToString() + "      " + table_data.Tables[2].Rows[i][3].ToString() + "       " + table_data.Tables[2].Rows[i][4].ToString() + "          " + table_data.Tables[2].Rows[i][5].ToString(), SmallFont));
                if (desc2.Length > 0)
                {
                    doc.Add(new Chunk("\n" + "" + desc2, SmallFont));
                }

            }
            doc.Add(new Chunk("\n------------------------------------------------------------------------------", SmallFont));

            //doc.Add(new Chunk("\n", NormalFont));
            Paragraph prgGeneratedBY1 = new Paragraph();
            BaseFont btnAutho1r = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
            iTextSharp.text.Font fntAuthor1 = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
            prgGeneratedBY1.Alignment = Element.ALIGN_RIGHT;
            prgGeneratedBY1.Add(new Chunk("Bill Total : " + table_data.Tables[4].Rows[0]["bill_total"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nTotal Item : " + table_data.Tables[4].Rows[0]["total_item"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nTotal Qty : " + table_data.Tables[4].Rows[0]["total_qty"], SmallFont));
            // prgGeneratedBY1.Add(new Chunk("\nTransport Amount : " + table_data.Tables[0].Rows[0]["transport_amount"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nOthers : " + table_data.Tables[0].Rows[0]["others"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nDiscount (-) : " + table_data.Tables[1].Rows[0]["discount"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nTotal Tax : " + table_data.Tables[1].Rows[0]["tax_amt"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nNet Value : " + table_data.Tables[1].Rows[0]["net_amount"], SmallFont));
            doc.Add(prgGeneratedBY1);
            doc.Add(new Chunk("------------------------------------------------------------------------------", SmallFont));
            doc.Add(new Chunk("\nTAX SUMMARY" + "    HSN CODE" + "      TAXBLE" + "    TAXAMT      ", SmallFont));
            doc.Add(new Chunk("------------------------------------------------------------------------------", SmallFont));
            doc.Add(new Chunk("\n CGST " + table_data.Tables[3].Rows[0]["CGST %"] + "%" + "           " + table_data.Tables[3].Rows[0]["hsn_code_desc"] + "        " + table_data.Tables[3].Rows[0]["Taxable Amount"] + "       " + table_data.Tables[3].Rows[0]["CGST Amount"], SmallFont));
            doc.Add(new Chunk("\n SGST " + table_data.Tables[3].Rows[0]["SGST %"] + "%" + "           " + table_data.Tables[3].Rows[0]["hsn_code_desc"] + "        " + table_data.Tables[3].Rows[0]["Taxable Amount"] + "       " + table_data.Tables[3].Rows[0]["SGST Amount"], SmallFont));

            doc.Close();

            byte[] result = ms.ToArray();

            return result;
        }

    }

}