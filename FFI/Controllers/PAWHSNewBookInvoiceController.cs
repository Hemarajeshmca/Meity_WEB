using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using FFI_Datamodel;
using iTextSharp.text;
using iTextSharp.text.pdf;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class PAWHSNewBookInvoiceController : Controller
    {
        string urlstring = "";
        string dbstring = "";
        private IConfiguration _configuration;
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        public PAWHSNewBookInvoiceController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        public ActionResult PAWHSNewBookInvoiceList()
        {
            return View();
        }
        public ActionResult PAWHSNewBookInvoiceForm()
        {
            return View();
        }
        public ActionResult NewPAWHSNewBookInvoiceForm()
        {
            return View();
        }
        public ActionResult PAWHSNewBookInvoicePaymentForm()
        {
            return View();
        }

        #region list
        public class PAWHSBookInvoiceList
        {
            public int Out_Book_invoce_rowid { get; set; }
            public string Out_invoice_no { get; set; }
            public string Out_invoice_date { get; set; }
            public string Out_Buyer_name { get; set; }
            public string Out_Buyer_Location { get; set; }
            public string Out_po_id { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

        }
        public class PAWHSBookInvoiceFilter
        {
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }

        }
        public class PAWHSBookInvoiceContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHSBookInvoiceFilter Filter { get; set; }
            public IList<PAWHSBookInvoiceList> List { get; set; }

        }
        public class PAWHSBookInvoiceApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PAWHSBookInvoiceApplication
        {
            public PAWHSBookInvoiceContext context { get; set; }
            public PAWHSBookInvoiceApplicationException ApplicationException { get; set; }

        }
        #endregion
        [HttpPost]
        public ActionResult bookinvoiceList([FromBody] PAWHSBookInvoiceContext objContext)
        {
            PAWHSBookInvoiceApplication objList = new PAWHSBookInvoiceApplication();
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
                string Urlcon = "PAWHS_NEW_BookInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("new_book_invoice_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PAWHSBookInvoiceApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSBookInvoiceApplication));

            }
            return Json(objList);
        }

        #region productfetch
        public class PDetail
        {
            public string In_ic_code { get; set; }
            public string In_productcategory { get; set; }
            public string In_productcategory_desc { get; set; }
            public string In_productsubcategory { get; set; }
            public string In_productsubcategory_desc { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_uomtype_desc { get; set; }
            public float In_base_price { get; set; }
            public float In_current_qty { get; set; }
            public float In_tax_rate { get; set; }

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
        public class PContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<PDetail> Detail { get; set; }
            public IList<InvoiceTax> InvoiceTax { get; set; }
            public PAWHSbO_FHeader Header { get; set; }
            public string In_location_code { get; set; }
            public string In_po_no { get; set; }

        }
        public class PAWHSbO_FHeader
        {
            public string In_buyer_location { get; set; }
            public string In_buyer_date { get; set; }

        }
        public class PApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PApplication
        {
            public PContext context { get; set; }
            public PApplicationException ApplicationException { get; set; }

        }
        #endregion
        #region  new product fetch
        public class PAWHSBookInvoicenewProductDetail
        {
            public string In_ic_code { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_uomtype_desc { get; set; }
            public string In_qty { get; set; }
            public string In_rate { get; set; }
            public string In_amount { get; set; }
            public string In_tax_amount { get; set; }
            public Double In_net_amount { get; set; }
            public string In_discount { get; set; }
            public string In_others { get; set; }
        }
        public class PAWHSBookInvoicenewInvoiceTax
        {
            public int In_invoicetax_rowid { get; set; }
            public string In_invoice_no { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_desc { get; set; }
            public Double In_cgst_rate { get; set; }
            public Double In_sgst_rate { get; set; }
            public Double In_igst_rate { get; set; }
            public Double In_ugst_rate { get; set; }
            public string In_tax_type { get; set; }
            public Double In_tax_rate { get; set; }
            public Double In_taxable_amount { get; set; }
            public Double In_tax_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }

        public class PAWHSBookInvoicenewProductContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string In_location_code { get; set; }
            public string In_po_no { get; set; }
            public IList<PAWHSBookInvoicenewProductDetail> Detail { get; set; }
            public IList<PAWHSBookInvoicenewInvoiceTax> InvoiceTax { get; set; }
            public List<BatchOtherDetails> OtherDtl { get; set; }

        }

        public class BatchOtherDetails
        {
            public int In_othercost_rowid { get; set; }
            public string In_cost_type { get; set; }
            public string In_cost_name { get; set; }
            public Double In_cost_value { get; set; }
            public string In_mode_flag { get; set; }
        }


        public class PAWHSBookInvoicenewProductApplication
        {
            public PAWHSBookInvoicenewProductContext context { get; set; }
            public PAWHSBookInvoiceApplicationException ApplicationException { get; set; }

        }
        #endregion
        [HttpPost]
        public ActionResult getPOproduct(string org, string locn, string user, string lang,string po_id,string location_code)
        {
            PContext objContext = new PContext();
            objContext.orgnId = org;
            objContext.locnId = locn;
            objContext.userId = user;
            objContext.localeId = lang;
            objContext.In_location_code = location_code;
            objContext.In_po_no = po_id;
            PAWHSBookInvoicenewProductApplication objList = new PAWHSBookInvoicenewProductApplication();
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
                string Urlcon = "PAWHS_NEW_BookInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("poproductsearch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PAWHSBookInvoicenewProductApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSBookInvoicenewProductApplication));
            }
            return Json(objList);
        }

        #region SAVE
        public class PAWHSBookInvoiceSInvoiceDetails
        {
            public int In_invoice_details_rowid { get; set; }
            public string In_item_code { get; set; }
            public string In_item_desc { get; set; }
            public string In_item_name { get; set; }
            public string In_type { get; set; }
            public Double In_qty { get; set; }
            public string In_uom_code { get; set; }
            public Double In_rate { get; set; }
            public Double In_amount { get; set; }
            //public Double In_discount { get; set; }
            public Double In_tax_amount { get; set; }
            public Double In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_hsn_code { get; set; }
            public Double In_tax_rate { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHSBookInvoiceSTaxDetails
        {
            public int In_bitax_rowid { get; set; }
            public string In_taxrate_rowid { get; set; }
            public string In_taxratedtl_rowid { get; set; }
            public string In_tax_sub_type { get; set; }
            public Double In_taxable_amt { get; set; }
            public Double In_tax_rate { get; set; }
            public Double In_tax_gst { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHSBookInvoiceSothercost
        {
            public int In_othercostdtl_rowid { get; set; }
            public string In_cost_type { get; set; }
            public Double In_othercost_amt { get; set; }
            public string In_mode_flag { get; set; }

        }

        public class PAWHSBookInvoiceStransport
        {
            public int In_transdtl_rowid { get; set; }
            public string In_vehicle_no { get; set; }
            public int In_vehicle_weight { get; set; }
            public string In_prodcut_code { get; set; }
            public Double In_prodcut_qty { get; set; }
            public int In_no_of_bags { get; set; }
            public string In_location { get; set; }
            public int In_sl_no { get; set; }
            public string In_mode_flag { get; set; }
            public IList<PAWHSBookInvoiceStransportslno> Transportslno { get; set; }
        }
        public class PAWHSBookInvoiceStransportslno
        {
            public int In_slno_rowid { get; set; }
            public string In_sl_no { get; set; }
            public Double In_sl_qty { get; set; }
            public string In_UOM { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class PAWHSBookInvoiceSHeader
        {
            public int IOU_invoice_rowid { get; set; }
            public string IOU_invoice_no { get; set; }
            public string In_agg_code { get; set; }
            public string In_invoice_date { get; set; }
            public string In_po_ID { get; set; }
            public string In_Buyer_Location { get; set; }
            public string In_provider_state { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            //public Double In_tranport { get; set; }
            //public Double In_discount { get; set; }
            public Double In_net_amount { get; set; }
            public string In_row_timestamp { get; set; }
            public IList<PAWHSBookInvoiceSInvoiceDetails> InvoiceDetails { get; set; }
            public IList<PAWHSBookInvoiceSTaxDetails> TaxDetails { get; set; }
            //public IList<PAWHSBookInvoiceSothercost> othercost { get; set; }
            //public IList<PAWHSBookInvoiceStransport> transport { get; set; }
        }
        public class PAWHSBookInvoiceSContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHSBookInvoiceSHeader Header { get; set; }

        }
        public class PAWHSBookInvoiceSDocument
        {
            public PAWHSBookInvoiceSContext context { get; set; }
            public PAWHSBookInvoiceSApplicationException ApplicationException { get; set; }
        }
        public class PAWHSBookInvoiceSApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PAWHSBookInvoiceSApplication
        {
            public PAWHSBookInvoiceSDocument document { get; set; }
        }
        #endregion
        [HttpPost]
        public ActionResult NewBookInvoice([FromBody] PAWHSBookInvoiceSContext objContext)
        {
            PAWHSBookInvoiceSApplication ObjRoot = new PAWHSBookInvoiceSApplication();
            PAWHSBookInvoiceSContext ObjContext = new PAWHSBookInvoiceSContext();
            PAWHSBookInvoiceSDocument ObjDocuent = new PAWHSBookInvoiceSDocument();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.userId = objContext.userId;
            ObjContext.Header = objContext.Header;
            ObjContext.Header.InvoiceDetails = objContext.Header.InvoiceDetails;
            ObjContext.Header.TaxDetails = objContext.Header.TaxDetails;
            //ObjContext.Header.othercost = objContext.Header.othercost;
            //ObjContext.Header.transport = objContext.Header.transport;
            //ObjContext.Header.transport[0].Transportslno = objContext.Header.transport[0].Transportslno;
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
                string Urlcon = "PAWHS_NEW_BookInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");               
                var response = client.PostAsync("new_book_invoice_save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                ObjDocuent = (PAWHSBookInvoiceSDocument)JsonConvert.DeserializeObject(post_data, typeof(PAWHSBookInvoiceSDocument));
            }
            return Json(ObjDocuent);
        }
       
        #region fetch
        public class PAWHSBookInvoiceFInvoiceDetails
        {
            public int In_invoice_details_rowid { get; set; }
            public string In_item_code { get; set; }
            public string In_item_desc { get; set; }
            public string In_item_name { get; set; }
            public string In_type { get; set; }
            public Double In_qty { get; set; }
            public string In_uom_code { get; set; }
            public string In_uom_desc { get; set; }
            public Double In_rate { get; set; }
            public Double In_amount { get; set; }
            public Double In_discount { get; set; }
            public string In_others { get; set; }
            public Double In_tax_amount { get; set; }
            public Double In_net_amount { get; set; }
            public Double In_current_qty { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHSBookInvoiceFTaxDetails
        {
            public int In_taxdetails_rowid { get; set; }

            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_state { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_desc { get; set; }
            public Double In_tax_rate { get; set; }
            public Double In_taxable_amount { get; set; }
            public Double In_tax_amount { get; set; }
            public Double In_cgst_rate { get; set; }
            public Double In_sgst_rate { get; set; }
            public Double In_igst_rate { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHSBookInvoiceFothercost
        {
            public int In_othercost_rowid { get; set; }
            public string In_cost_type { get; set; }
            public string In_cost_name { get; set; }
            public Double In_cost_value { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHSBookInvoiceFtransport
        {
            public int In_transdtl_rowid { get; set; }
            public string In_vehicle_no { get; set; }
            public string In_vehicle_weight { get; set; }
            public string In_prodcut_code { get; set; }
            public Double In_prodcut_qty { get; set; }
            public int In_no_of_bags { get; set; }
            public int In_sl_no { get; set; }
            public string In_location { get; set; }
            public string In_mode_flag { get; set; }
            public string Transportslno { get; set; }

        }
        public class PAWHSBookInvoiceFHeader
        {
            public int IOU_invoice_rowid { get; set; }
            public string In_invoice_date { get; set; }
            public string In_invoice_no { get; set; }
            public string In_buyer_code { get; set; }
            public string In_buyer_name { get; set; }
            public string In_customer_state { get; set; }
            public string In_provider_state { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_po_no { get; set; }
            public string In_po_date { get; set; }
            public Double In_Transport_Amt { get; set; }
            public Double In_Discount_Amt { get; set; }
            public Double In_net_amount { get; set; }
            public Double In_bal_amount { get; set; }
            public IList<PAWHSBookInvoiceFInvoiceDetails> InvoiceDetails { get; set; }
            public IList<PAWHSBookInvoiceFTaxDetails> TaxDetails { get; set; }
            public IList<PAWHSBookInvoiceFothercost> othercost { get; set; }
            public IList<PAWHSBookInvoiceFtransport> transport { get; set; }

        }
        public class PAWHSBookInvoiceFContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int IOU_invoice_rowid { get; set; }
            public PAWHSBookInvoiceFHeader Header { get; set; }

        }

        public class PAWHSBookInvoiceFApplication
        {
            public PAWHSBookInvoiceFContext context { get; set; }
            public PAWHSBookInvoiceFApplicationException ApplicationException { get; set; }

        }
        public class PAWHSBookInvoiceFApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        #endregion
        [HttpPost]
        public ActionResult BookInvoiceFetch([FromBody] PAWHSBookInvoiceFContext objContext)
        {
            PAWHSBookInvoiceFApplication objout = new PAWHSBookInvoiceFApplication();
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

                string Urlcon = "PAWHS_NEW_BookInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_book_invoice_single", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSBookInvoiceFApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSBookInvoiceFApplication));
                HttpContext.Session.SetString("orgId", objout.context.orgnId);
                HttpContext.Session.SetString("userId", objout.context.userId);
                HttpContext.Session.SetString("Invoiceno", objout.context.Header.In_invoice_no);
            }
            return Json(objout);
        }

        #region transslno
        public class PAWHSBookInvoiceFTRANSContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int In_transdtl_rowid { get; set; }
            public IList<PAWHSBookInvoiceFtransportslno> transport { get; set; }

        }
        public class PAWHSBookInvoiceFtransportslno
        {
            public int In_slno_rowid { get; set; }
            public string In_sl_no { get; set; }
            public string In_sl_qty { get; set; }
            public string In_UOM { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class PAWHSBookInvoiceFTRANS
        {
            public PAWHSBookInvoiceFTRANSContext context { get; set; }
        }
        #endregion
        [HttpPost]
        public ActionResult BookInvoicetransslnoFetch([FromBody] PAWHSBookInvoiceFTRANSContext objContext)
        {
            PAWHSBookInvoiceFTRANS objout = new PAWHSBookInvoiceFTRANS();
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

                string Urlcon = "PAWHS_NEW_BookInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("transportslnofetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSBookInvoiceFTRANS)JsonConvert.DeserializeObject(post_data, typeof(PAWHSBookInvoiceFTRANS));
            }
            return Json(objout);
        }
     
        //location search
        public ActionResult location_search(string In_buyer_code, string In_agg_code)
        {
            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeTAUAt")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }

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
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }

            DataTable response = new DataTable();
            Helpdatamodel objproduct1 = new Helpdatamodel();
            response = objproduct1.locationsearch(In_buyer_code, In_agg_code, dbstring);
            return Json(response);
        }

        //PO search
        public ActionResult search_po(string In_buyer_code, string In_agg_code)
        {
            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeTAUAt")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }

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
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }

            DataTable response = new DataTable();
            Helpdatamodel objproduct1 = new Helpdatamodel();
            response = objproduct1.batchsearch(In_buyer_code, In_agg_code, dbstring);
            return Json(response);
        }

        //PO location search
        #region PO location search
        public class POLocContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHSPO_FHeader Header { get; set; }
            public int IOU_PO_rowid { get; set; }
            public string In_po_no { get; set; }

        }
        public class PAWHSPO_FHeader
        {
            public string In_buyer_location { get; set; }
            public string In_buyer_location_code { get; set; }
            public string In_buyer_date { get; set; }

        }
        public class POLocApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class POLocApplication
        {
            public POLocContext context { get; set; }
            public POLocApplicationException ApplicationException { get; set; }

        }
        #endregion       
        [HttpPost]
        public ActionResult getPOlocation(string org, string locn, string user, string lang, string po_id, string po_rowid)
        {
            POLocContext objContext = new POLocContext();
            objContext.orgnId = org;
            objContext.locnId = locn;
            objContext.userId = user;
            objContext.localeId = lang;
            objContext.IOU_PO_rowid = Convert.ToInt32(po_rowid);
            objContext.In_po_no = po_id;
            POLocApplication objList = new POLocApplication();
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
                string Urlcon = "PAWHS_NEW_BookInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("polocationsearch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (POLocApplication)JsonConvert.DeserializeObject(post_data, typeof(POLocApplication));
            }
            return Json(objList);
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
        public class PayContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PHeader Header { get; set; }
            public IList<Detail> Detail { get; set; }
            public int invoice_rowid { get; set; }


        }
        public class PayApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PayApplication
        {
            public PayContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion

        [HttpPost]
        public ActionResult InvoicePaymentfetch([FromBody] PayContext objContext)
        {
            PayApplication objout = new PayApplication();
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

                string Urlcon = "PAWHS_NEW_BookInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("PAWHSInvoicePayfetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PayApplication)JsonConvert.DeserializeObject(post_data, typeof(PayApplication));
            }
            return Json(objout);
        }
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
                string Urlcon = "PAWHS_NEW_BookInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                // var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_PAWHS_invoice_payment", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (Document1)JsonConvert.DeserializeObject(post_data, typeof(Document1));
            }
            return Json(objDoc);
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

        public ActionResult downloadpdf()
        {
            var sptver = "Book Invoice A4";
            var file_ext = ".pdf";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string folderName = "DownloadXLFiles";
            string fileLocation = Path.Combine(webRootPath, folderName);

            //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
            string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + file_ext);
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
            MySqlCommand cmd = new MySqlCommand("PAWHSRPT_TaxInvoice", con);
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
            iTextSharp.text.Rectangle rec = new iTextSharp.text.Rectangle(PageSize.A4);
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
            iTextSharp.text.Font NormalFont2 = iTextSharp.text.FontFactory.GetFont("Arial", 11, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font NormalFont3 = iTextSharp.text.FontFactory.GetFont("Arial", 3, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);

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

            PdfPTable tablei = new PdfPTable(3);
            tablei.WidthPercentage = 40.0f;
            tablei.HorizontalAlignment = Element.ALIGN_RIGHT;
            float[] columnWidthsi = new float[] { 55f, 10f, 30f };
            tablei.SetWidths(columnWidthsi);

            tablei.DefaultCell.Border = Rectangle.NO_BORDER;
            PdfPCell celli = new PdfPCell(new Phrase("Invoice Generated by ", NormalFont));
            celli.Border = Rectangle.NO_BORDER;
            tablei.AddCell(celli);
            celli = new PdfPCell(new Phrase("  :"));
            celli.Border = Rectangle.NO_BORDER;
            tablei.AddCell(celli);
            celli = new PdfPCell(new Phrase(HttpContext.Session.GetString("userId").ToString()));
            celli.Border = Rectangle.NO_BORDER;
            tablei.AddCell(celli);

            celli = new PdfPCell(new Phrase("Generated Date ", NormalFont));
            celli.Border = Rectangle.NO_BORDER;
            tablei.AddCell(celli);
            celli = new PdfPCell(new Phrase("  :"));
            celli.Border = Rectangle.NO_BORDER;
            tablei.AddCell(celli);
            celli = new PdfPCell(new Phrase(DateTime.Parse(DateTime.Now.ToShortDateString()).ToString("dd/MM/yyyy")));
            celli.Border = Rectangle.NO_BORDER;
            tablei.AddCell(celli);

            doc.Add(tablei);
            //Adding a line
            // Paragraph p = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            //Adding line break           
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
            doc.Add(new Chunk("\nDetails of Seller:", boldFont));
            PdfPTable tablet = new PdfPTable(2);
            float[] columnWidthst = new float[] { 70f, 30f };
            tablet.SetWidths(columnWidthst);
            tablet.DefaultCell.Border = Rectangle.NO_BORDER;
            tablet.WidthPercentage = 100;
            PdfPCell cellt = new PdfPCell();
            cellt.HorizontalAlignment = Element.ALIGN_LEFT;
            cellt.VerticalAlignment = Element.ALIGN_LEFT;
            cellt.AddElement(new Chunk("" + table_data.Tables[0].Rows[0]["orgn_name"], NormalFont2));
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
            cellt.AddElement(new Chunk("Invoice No      " + " " + " : " + table_data.Tables[0].Rows[0]["invoice_no"], NormalFont2));
            cellt.AddElement(new Chunk("Invoice Date " + " " + " : " + DateTime.Parse(table_data.Tables[0].Rows[0]["invoice_date"].ToString()).ToString("dd/MM/yyyy"), NormalFont));
            cellt.Border = Rectangle.NO_BORDER;
            tablet.AddCell(cellt);
            cellt.FixedHeight = 36f;
            doc.Add(tablet);

            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk("\n", NormalFont));
            doc.Add(new Chunk("\nDetails of Receiver/Buyer (Bill to/ship to):", boldFont));

            PdfPTable tabled = new PdfPTable(3);
            tablet.WidthPercentage = 100;
            tabled.HorizontalAlignment = Element.ALIGN_LEFT;
            float[] columnWidthsd = new float[] { 20f, 10f, 70f };
            tabled.SetWidths(columnWidthsd);

            tabled.DefaultCell.Border = Rectangle.NO_BORDER;
            PdfPCell celld = new PdfPCell(new Phrase("Name  ", NormalFont));
            cellt.HorizontalAlignment = Element.ALIGN_LEFT;
            cellt.VerticalAlignment = Element.ALIGN_LEFT;
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);
            celld = new PdfPCell(new Phrase(":"));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);
            celld = new PdfPCell(new Phrase(table_data.Tables[0].Rows[0]["customer_name"].ToString()));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);

            celld = new PdfPCell(new Phrase("Address ", NormalFont));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);
            celld = new PdfPCell(new Phrase(":"));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);
            celld = new PdfPCell(new Phrase(table_data.Tables[0].Rows[0]["customer_address"].ToString()));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);

            celld = new PdfPCell(new Phrase("State  ", NormalFont));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);
            celld = new PdfPCell(new Phrase(":"));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);
            celld = new PdfPCell(new Phrase(table_data.Tables[0].Rows[0]["Customer_state"].ToString()));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);

            celld = new PdfPCell(new Phrase("GSTIN ", NormalFont));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);
            celld = new PdfPCell(new Phrase(":"));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);
            celld = new PdfPCell(new Phrase(table_data.Tables[0].Rows[0]["buyergst"].ToString()));
            celld.Border = Rectangle.NO_BORDER;
            tabled.AddCell(celld);

            doc.Add(tabled);
            doc.Add(new Chunk("\n", NormalFont));
            //Adding a line
            //  Paragraph p2 = new Paragraph(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));
            doc.Add(new Chunk("\n", NormalFont));
            //Adding  PdfPTable
            //25
            PdfPTable table = new PdfPTable(table_data.Tables[2].Columns.Count);
            table.HorizontalAlignment = Element.ALIGN_LEFT;
            table.DefaultCell.FixedHeight = 27f;
            table.WidthPercentage = 100;
            float[] columnWidths = new float[table_data.Tables[2].Columns.Count];

            for (int i = 0; i < table_data.Tables[2].Columns.Count; i++)
            {
                if (i == 0)
                {
                    columnWidths[i] = 12f;

                }
                if (i == 1)
                {
                    columnWidths[i] = 70f;
                }
                if (i == 2)
                {
                    columnWidths[i] = 20f;
                }
                if (i == 3)
                {
                    columnWidths[i] = 30f;
                }
                if (i == 4)
                {
                    columnWidths[i] = 30f;
                }
                if (i == 5)
                {
                    columnWidths[i] = 20f;
                }
                if (i == 6)
                {
                    columnWidths[i] = 20f;
                }
                if (i == 7)
                {
                    columnWidths[i] = 40f;
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
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.WHITE, Element.ALIGN_LEFT, 1)));
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
            cellb = new PdfPCell(new Phrase(table_data.Tables[1].Rows[0]["net_amount"].ToString()));
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
            cellb = new PdfPCell(new Phrase(table_data.Tables[0].Rows[0]["discount"].ToString()));
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
            cellb = new PdfPCell(new Phrase(table_data.Tables[1].Rows[0]["total_amt"].ToString()));
            cellb.Border = Rectangle.NO_BORDER;
            cellb.HorizontalAlignment = Element.ALIGN_RIGHT;
            cellb.VerticalAlignment = Element.ALIGN_RIGHT;
            tableb.AddCell(cellb);

            doc.Add(tableb);
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 20.0F, iTextSharp.text.BaseColor.WHITE, Element.ALIGN_LEFT, 1)));
            //Adding  PdfPTable
            PdfPTable table1 = new PdfPTable(table_data.Tables[3].Columns.Count);
            table1.HorizontalAlignment = Element.ALIGN_LEFT;
            table1.WidthPercentage = 100;
            float[] columnWidthstax = new float[table_data.Tables[3].Columns.Count];
            for (int k = 0; k < table_data.Tables[3].Columns.Count; k++)
            {
                if (k == 0)
                {
                    columnWidthstax[k] = 30f;

                }
                if (k == 1)
                {
                    columnWidthstax[k] = 20f;
                }
                if (k == 2)
                {
                    columnWidthstax[k] = 30f;
                }
                if (k == 3)
                {
                    columnWidthstax[k] = 20f;
                }
                if (k == 4)
                {
                    columnWidthstax[k] = 30f;
                }

                table1.SetWidths(columnWidthstax);
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
            doc.Add(new Chunk("\n                                       *This is the computer generated invoice, hence signature is not required*.", NormalFont1));
            doc.Close();
            byte[] result = ms.ToArray();

            return result;
        }


        public ActionResult downloadpdfInvoice()
        {
            var sptver = "Book Invoice";
            var file_ext = ".pdf";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string folderName = "DownloadXLFiles";
            string fileLocation = Path.Combine(webRootPath, folderName);

            //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
            string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + file_ext);
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
            MySqlCommand cmd = new MySqlCommand("PAWHSRPT_TaxInvoice", con);
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
            doc.Add(new Chunk("\nQty " + "        Item Name " + "         Price " + "        Discount   " + "        Total ", SmallFont));
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
                    desc1 = description;
                    desclen = 0;
                }
                if (desclen > 0)
                {
                    desc2 = description.Substring(14, desclen);
                }

                doc.Add(new Chunk("\n" + table_data.Tables[2].Rows[i][2].ToString() + "          " + desc1 + "         " + table_data.Tables[2].Rows[i][3].ToString() + "        " + table_data.Tables[2].Rows[i][4].ToString() + "        " + table_data.Tables[2].Rows[i][5].ToString(), SmallFont));
                if (desc2.Length > 0)
                {
                    doc.Add(new Chunk("\n" + "         " + desc2, SmallFont));
                }
                //    Chunk test1 = new Chunk("\n" + table_data.Tables[2].Rows[i][2].ToString() + "  " + desc1 + "  " + table_data.Tables[2].Rows[i][3].ToString() + "      " + table_data.Tables[2].Rows[i][4].ToString() + "      " + table_data.Tables[2].Rows[i][5].ToString(), SmallFont);
                ////Chunk Qty = new Chunk(table_data.Tables[2].Rows[i][2].ToString(), SmallFont);
                ////    Chunk Desc = new Chunk("        "+desc1,SmallFont);
                ////    Chunk Price = new Chunk("             " + table_data.Tables[2].Rows[i][3].ToString(), SmallFont);
                ////    Chunk Disct = new Chunk("            " + table_data.Tables[2].Rows[i][4].ToString(), SmallFont);
                ////    Chunk total = new Chunk("      "+table_data.Tables[2].Rows[i][5].ToString(),SmallFont);
                //    Phrase p1 = new Phrase(test1);               
                //    //p1.Add(Qty);
                //    //p1.Add(Desc);
                //    //p1.Add(Price);
                //    //p1.Add(Disct);
                //    //p1.Add(total);
                //    Paragraph pg1 = new Paragraph();               
                //    pg1.Alignment = Element.ALIGN_RIGHT;
                //    pg1.Add(p1);
                //    doc.Add(pg1);

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
            prgGeneratedBY1.Add(new Chunk("\nOthers : " + table_data.Tables[0].Rows[0]["others"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nDiscount(-) : " + table_data.Tables[0].Rows[0]["discount"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nTotal Tax : " + table_data.Tables[1].Rows[0]["tax_amt"], SmallFont));
            prgGeneratedBY1.Add(new Chunk("\nNet Value : " + table_data.Tables[1].Rows[0]["net_amount"], SmallFont));
            doc.Add(prgGeneratedBY1);
            doc.Add(new Chunk("------------------------------------------------------------------------------", SmallFont));
           
                doc.Add(new Chunk("\nTAX SUMMARY" + "    HSN CODE" + "      TAXBLE" + "    TAXAMT      ", SmallFont));
                doc.Add(new Chunk("------------------------------------------------------------------------------", SmallFont));
            for (int i = 0; i < table_data.Tables[3].Rows.Count; i++)
            {
                doc.Add(new Chunk("\n CGST " + table_data.Tables[3].Rows[i]["CGST %"] + "%" + "           " + table_data.Tables[3].Rows[i]["hsn_code_desc"] + "        " + table_data.Tables[3].Rows[i]["Taxable Amount"] + "       " + table_data.Tables[3].Rows[i]["CGST Amount"], SmallFont));
                doc.Add(new Chunk("\n SGST " + table_data.Tables[3].Rows[i]["SGST %"] + "%" + "           " + table_data.Tables[3].Rows[i]["hsn_code_desc"] + "        " + table_data.Tables[3].Rows[i]["Taxable Amount"] + "       " + table_data.Tables[3].Rows[i]["SGST Amount"], SmallFont));
            }
            doc.Close();

            byte[] result = ms.ToArray();

            return result;
        }

    }

}



