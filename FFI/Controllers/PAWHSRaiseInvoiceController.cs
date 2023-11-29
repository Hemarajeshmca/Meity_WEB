//using CCA.Util;
using FFI.ViewModel;
using System;
using System.Collections.Generic;
using System.Configuration;
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
    public class PAWHSRaiseInvoiceController : Controller
    {

        string AccessCode = ConfigurationManager.AppSettings["CcAvenueAccessCode"];
        string CheckoutUrl = ConfigurationManager.AppSettings["CcAvenueCheckoutUrl"];
        string WorkingKey = ConfigurationManager.AppSettings["CcAvenueWorkingKey"];
        string MerchantId = ConfigurationManager.AppSettings["CcAvenueMerchantId"];

        // GET: PAWHSRaiseInvoice
        //Muralidharan developed on 21-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public PAWHSRaiseInvoiceController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult PAWHSRaiseInvoiceList()
        {
            return View();
        }
        public ActionResult RaiseInvoiceForm()
        {
            return View();
        }
        public ActionResult PaymentCollections()
        {
            return View();
        }
        public ActionResult CcPayment()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CcPayment(string grn_invoice_no, string payment_amount, string farmer_name, string billing_address, string billing_city, string billing_state, string billing_zip, string billing_country, string billing_tel, string billing_email)
        {
            //var bkngno = "00089";
            //var queryParameter = new CCACrypto();

            //CCACrypto is the dll you get when you download the ASP.NET 3.5 integration kit from //ccavenue account.

            return View();
          //      "CcAvenuePayment", new CcAvenueViewModel(queryParameter.Encrypt
          //(BuildCcAvenueRequestParameters(grn_invoice_no, payment_amount, farmer_name, billing_address, billing_city, billing_state, billing_zip, billing_country, billing_tel, billing_email), WorkingKey), AccessCode, CheckoutUrl));
        }

        private string BuildCcAvenueRequestParameters(string invoiceNumber, string amount, string customername, string billingaddress, string billingcity, string billingstate, string billingzip, string billingcountry, string billingtel, string billingemail)
        {

            var queryParameters = new Dictionary<string, string>
             {
             {"order_id", invoiceNumber},
             {"merchant_id", MerchantId},
             {"amount", amount},
             {"currency","INR" },
             {"redirect_url","http://169.38.82.131:90/PAWHSRaiseInvoice/PaymentSuccessful" },
             {"cancel_url","http://169.38.82.131:90/PAWHSRaiseInvoice/PaymentCancelled"},
             {"billing_name", customername},
             {"billing_address", billingaddress},
             {"billing_city", billingcity},
             {"billing_state",billingstate},
             {"billing_zip",billingzip},
             {"billing_country",billingcountry},
             {"billing_tel",billingtel},
             {"billing_email",billingemail},
             {"request_type","JSON" },
             {"response_type","JSON" },
             {"version","1.1" }
        }.Select(item => string.Format("{0}={1}", item.Key, item.Value));
            return string.Join("&", queryParameters);
        }

        [HttpPost]
        public ActionResult PaymentSuccessful(string encResp)
        {
            //var decryption = new CCACrypto();
            //var decryptedParameters = decryption.Decrypt(encResp, WorkingKey);

            //var keyValuePairs = decryptedParameters.Split('&');
            var splittedKeyValuePairs = new Dictionary<string, string>();

            //foreach (var value in keyValuePairs)
            //{
            //    var keyValuePair = value.Split('=');
            //    splittedKeyValuePairs.Add(keyValuePair[0], keyValuePair[1]);
            //}

            //Here you can check the consistency of data i.e what you send is what you get back,
            //Make sure its not corrupted....
            //After that Save the details of the transaction into a db if you want to...
            //I am just returning the data I got back...

            return View(splittedKeyValuePairs);
        }

        [HttpPost]
        public ActionResult PaymentCancelled()
        {
            return View();
        }
        public class List
        {
            public int Out_raise_invoce_rowid { get; set; }
            public string Out_invoice_no { get; set; }
            public string Out_invoice_date { get; set; }
            public string Out_customer_name { get; set; }
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
        public class InvoiceDetails
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
            public Double In_tax_amount { get; set; }
            public Double In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class TaxDetails
        {
            public int In_taxdetails_rowid { get; set; }
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
        public class Header
        {
            public int IOU_invoice_rowid { get; set; }
            public string In_fpo_name { get; set; }
            public string In_invoice_date { get; set; }
            public string In_invoice_no { get; set; }
            public string In_customer_code { get; set; }
            public string In_customer_name { get; set; }
            public string In_customer_state { get; set; }
            public string In_provider_state { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public IList<InvoiceDetails> InvoiceDetails { get; set; }
            public IList<TaxDetails> TaxDetails { get; set; }

        }
        public class SingleContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int IOU_invoice_rowid { get; set; }
            public Header Header { get; set; }

        }
     
        public class SingleApplication
        {
            public SingleContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        public class NewInvoiceDetails
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
            public Double In_discount { get; set; }
            public Double In_tax_amount { get; set; }
            public Double In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class NewTaxDetails
        {
            public int In_taxdetails_rowid { get; set; }
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
            public string In_mode_flag { get; set; }

        }
        public class NewHeader
        {
            public int IOU_invoice_rowid { get; set; }
            public string IOU_invoice_no { get; set; }
            public string In_fpo_name { get; set; }
            public string In_invoice_date { get; set; }
            public string In_customer_code { get; set; }
            public string In_customer_state { get; set; }
            public string In_provider_state { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public IList<NewInvoiceDetails> InvoiceDetails { get; set; }
            public IList<NewTaxDetails> TaxDetails { get; set; }

        }
        public class NewContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public NewHeader Header { get; set; }
            //public IList<NewInvoiceDetails> InvoiceDetails { get; set; }
            //public IList<NewTaxDetails> TaxDetails { get; set; }

        }
        public class Document
        {
            public NewContext context { get; set; }

        }
        public class NewApplication
        {
            public Document document { get; set; }

        }
        public class PayHeader
        {
            public string In_invoice_no { get; set; }
            public Double In_amount { get; set; }
            public Double In_balance_amount { get; set; }
            public string In_paymode_code { get; set; }
            public string In_paymode_desc { get; set; }
            public string In_ref_no { get; set; }
            public string In_payment_date { get; set; }
            public Double In_payment_amount { get; set; }

        }
        public class Detail
        {
            public int In_paymentcollection_rowid { get; set; }
            public string In_payment_type { get; set; }
            public string In_payment_type_desc { get; set; }
            public string In_payment_no { get; set; }
            public Double In_balance_amount { get; set; }
            public Double In_payment_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_ref_no { get; set; }
            public string In_payment_date { get; set; }
            public string In_process_status { get; set; }
            public string In_process_status_desc { get; set; }
            public Double In_paid_amount { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PayContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string IOU_invoice_rowid { get; set; }
            public PayHeader Header { get; set; }
            public IList<Detail> Detail { get; set; }

        }
   
        public class PayApplication
        {
            public PayContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        public class SaveHeader
        {
            public int In_invoice_rowid { get; set; }
            public string In_invoice_no { get; set; }
            public int In_amount { get; set; }
            public Double In_balance_amount { get; set; }
            public string In_paymode_code { get; set; }
            public string In_ref_no { get; set; }
            public string In_payment_date { get; set; }
            public Double In_payment_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_modeflag { get; set; }
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
        public class SaveDocument
        {
            public SaveContext context { get; set; }

        }
        public class SaveApplication
        {
            public SaveDocument document { get; set; }

        }

        public class ProductDetail
        {
            public string In_ic_code { get; set; }
            public string In_productcategory { get; set; }
            public string In_productcategory_desc { get; set; }
            public string In_productsubcategory { get; set; }
            public string In_productsubcategory_desc { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_uomtype_code_desc { get; set; }
            public Double In_base_price { get; set; }
            public Double In_current_qty { get; set; }

        }
        public class InvoiceTax
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
     
        public class ProductContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FarmerFilter Filter { get; set; }
            public IList<ProductDetail> Detail { get; set; }
            public IList<InvoiceTax> InvoiceTax { get; set; }

        }
   
        public class ProductApplication
        {
            public ProductContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

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
                //string Urlcon = "/allraise_invoice?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSRaiseInvoice/");
                string Urlcon = "PAWHSRaiseInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allraise_invoice", content).Result;
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
                //string Urlcon = "/raise_invoice?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&invoice_rowid=" + objContext.IOU_invoice_rowid +  "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSRaiseInvoice/");
                string Urlcon = "PAWHSRaiseInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("raise_invoice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (SingleApplication)JsonConvert.DeserializeObject(post_data, typeof(SingleApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult NewRaiseInvoice([FromBody]NewContext objContext)
        {
            NewApplication ObjRoot = new NewApplication();
            NewContext ObjContext = new NewContext();
            Document ObjDocuent = new Document();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.userId = objContext.userId;
            ObjContext.Header = objContext.Header;
            ObjContext.Header.InvoiceDetails = objContext.Header.InvoiceDetails;
            ObjContext.Header.TaxDetails = objContext.Header.TaxDetails;
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
                //string Urlcon = "/new_raise_invoice";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSRaiseInvoice/");
                string Urlcon = "PAWHSRaiseInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_raise_invoice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        [HttpPost]
        public ActionResult PaymentCollection([FromBody]PayContext objContext)
        {
            PayApplication objList = new PayApplication();
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
                //string Urlcon = "/payment_collection?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&invoice_rowid=" + objContext.IOU_invoice_rowid + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSRaiseInvoice/");
                string Urlcon = "PAWHSRaiseInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("payment_collection", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PayApplication)JsonConvert.DeserializeObject(post_data, typeof(PayApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SavePaymentCollection([FromBody]SaveContext objContext)
        {
            SaveApplication ObjRoot = new SaveApplication();
            SaveContext ObjContext = new SaveContext();
            SaveDocument ObjDocument = new SaveDocument();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.userId = objContext.userId;
            ObjContext.Header = objContext.Header;
            ObjDocument.context = ObjContext;
            ObjRoot.document = ObjDocument;

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
                //string Urlcon = "/new_payment_collection_raise_invoice";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSRaiseInvoice/");
                string Urlcon = "PAWHSRaiseInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_payment_collection_raise_invoice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        [HttpPost]
        public ActionResult ProductServiceList([FromBody]ProductContext objContext)
        {
            ProductApplication objList = new ProductApplication();
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
                //string Urlcon = "/productsearch?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSRaiseInvoice/");
                string Urlcon = "PAWHSRaiseInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("productsearch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (ProductApplication)JsonConvert.DeserializeObject(post_data, typeof(ProductApplication));

            }
            return Json(objList);
        }


    }
}