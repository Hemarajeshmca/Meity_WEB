//using CCA.Util;
using FFI.ViewModel;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Net;
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
    public class PAWHSWarehouseReceiptController : Controller
    {
        string db;
        string AccessCode = ConfigurationManager.AppSettings["CcAvenueAccessCode"];
        string CheckoutUrl = ConfigurationManager.AppSettings["CcAvenueCheckoutUrl"];
        string WorkingKey = ConfigurationManager.AppSettings["CcAvenueWorkingKey"];
        string MerchantId = ConfigurationManager.AppSettings["CcAvenueMerchantId"];
        string TextToLocalKey = ConfigurationManager.AppSettings["TexttoLocalKey"];

        // GET: PAWHSWarehouseReceipt
        //Muralidharan developed on 19-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public PAWHSWarehouseReceiptController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult PAWHSWarehouseReceiptList()
        {
            return View();
        }
        public ActionResult WarehouseReceiptForm()
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
             {"redirect_url","http://169.38.82.131:90/PAWHSWarehouseReceipt/PaymentSuccessful" },
             {"cancel_url","http://169.38.82.131:90/PAWHSWarehouseReceipt/PaymentCancelled"},
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
        [HttpPost]
        public ActionResult SendMessage(string acceptedQuantity,string grn, string item, string uom, string mobileNo)
        {
            //db = string.Format("Hai Welcome to the Warehouse. Your GRN Number is GRN/00001,Use this GRN Number for Payment,Item Name {0},UOM {1}", item,uom);
            db = string.Format("The Receipt of " + acceptedQuantity + " in " + uom + ", " + item + " on "+DateTime.Now+" byed");
            SendMessage1(mobileNo);
            return Content(mobileNo);
        }
         
        [HttpPost]
        public string SendMessage1(string mobileNo)//string acceptedQuantity, string item, string uom)
        //public ActionResult SendMessage(string acceptedQuantity, string item, string uom, string mobileNo)
        {
            string result = "";
            try
            {              
                //string db1 = string.Format("Hai Welcome to the Warehouse. Your GRN Number is GRN/00001,Use this GRN Number for Payment");
                //    //,Item Name {0},UOM {1}", item,uom
                String message = HttpUtility.UrlEncode(db);
                using (var wb = new WebClient())
                {
                    byte[] response = wb.UploadValues("https://api.textlocal.in/send/", new NameValueCollection()
                {
                {"apikey" , TextToLocalKey},
                {"numbers" , mobileNo},
                {"message" , message},
                {"sender" , "TXTLCL"}
                });
                    result = System.Text.Encoding.UTF8.GetString(response);
                }
            }
            catch (Exception ex)
            {
                throw (ex);
            }
            return result;
        }

        public class List
        {
            public int Out_whs_receipt_rowid { get; set; }
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
            public int IOU_whs_receipt_rowid { get; set; }
            public string IOU_grn_invoice_no { get; set; }
            public string In_whs_code { get; set; }
            public string In_whs_name { get; set; }
            public string In_receipt_date { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_reg_mobile_no { get; set; }
            public string In_pickup_request_id { get; set; }
            public string In_item_code { get; set; }
            public string In_item_name { get; set; }
            public string In_uom { get; set; }
            public Double In_quantity { get; set; }
            public Double In_quality { get; set; }
            public string In_quality_desc { get; set; }
            public Double In_received_qty { get; set; }
            public Double In_accepted_qty { get; set; }
            public Double In_rate { get; set; }
            public Double In_amount { get; set; }
            public Double In_paid_amount { get; set; }
            public Double In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Detail
        {
            public string In_quality_code { get; set; }
            public string In_quality_desc { get; set; }
            public string In_range_1 { get; set; }
            public string In_range_2 { get; set; }
            public string In_range_3 { get; set; }
            public string In_range_4 { get; set; }
            public string In_range_5 { get; set; }
            public string In_product_range { get; set; }
            public string In_product_range_desc { get; set; }
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
            public int IOU_whs_receipt_rowid { get; set; }
            public string IOU_grn_invoice_no { get; set; }
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
            public int IOU_whs_receipt_rowid { get; set; }
            public string IOU_grn_invoice_no { get; set; }
            public string In_whs_code { get; set; }
            public string In_receipt_date { get; set; }
            public string In_farmer_code { get; set; }
            public string In_reg_mobile_no { get; set; }
            public string IOU_pickup_request_id { get; set; }
            public string In_item_code { get; set; }
            public string In_uom { get; set; }
            public int In_quantity { get; set; }
            public int In_quality { get; set; }
            public int In_received_qty { get; set; }
            public int In_accepted_qty { get; set; }
            public Double In_rate { get; set; }
            public Double In_amount { get; set; }
            public Double In_paid_amount { get; set; }
            public Double In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SaveDetail
        {
            public string In_quality_code { get; set; }
            public string In_range_1 { get; set; }
            public string In_range_2 { get; set; }
            public string In_range_3 { get; set; }
            public string In_range_4 { get; set; }
            public string In_range_5 { get; set; }
            public string In_product_range { get; set; }
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
        public class ItemHeader
        {
            public int IOU_item_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_item_code { get; set; }
            public string In_item_name { get; set; }
            public string In_item_ll_name { get; set; }
            public string In_item_type { get; set; }
            public string In_fg_category { get; set; }
            public string In_fg_subcategory { get; set; }
            public string In_uom_code { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_description { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class ItemDetail
        {
            public int In_item_dtl_rowid { get; set; }
            public string In_item_code { get; set; }
            public string In_quality { get; set; }
            public string In_quality_desc { get; set; }
            public Double In_base_price { get; set; }
            public string In_range_1 { get; set; }
            public string In_range_2 { get; set; }
            public string In_range_3 { get; set; }
            public string In_range_4 { get; set; }
            public string In_range_5 { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class ItemContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public ItemHeader Header { get; set; }
            public IList<ItemDetail> Detail { get; set; }

        }
   
        public class ItemApplication
        {
            public ItemContext context { get; set; }
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
                //string Urlcon = "/allwarehouse_receipt?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSWarehouseReceipt/");
                string Urlcon = "PAWHSWarehouseReceipt/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allwarehouse_receipt", content).Result;
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
                //string Urlcon = "/warehouse_receipt?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&whs_receipt_rowid=" + objContext.IOU_whs_receipt_rowid  + "&grn_invoice_no=" + objContext.IOU_grn_invoice_no  + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSWarehouseReceipt/");
                string Urlcon = "PAWHSWarehouseReceipt/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("warehouse_receipt", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (SingleApplication)JsonConvert.DeserializeObject(post_data, typeof(SingleApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveWarehouseReceipt([FromBody]SaveContext objContext)
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
                //string Urlcon = "/new_warehouse_receipt";

                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSWarehouseReceipt/");
                string Urlcon = "PAWHSWarehouseReceipt/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_warehouse_receipt", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                ObjDocuent = (Document)JsonConvert.DeserializeObject(post_data, typeof(Document));
            }
            return Json(ObjDocuent);
        }
        public ActionResult ItemMasterList([FromBody]ItemContext objContext)
        {
            ItemApplication objList = new ItemApplication();
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
                //string Urlcon = "/item_master?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&item_rowid=" + objContext.Header.IOU_item_rowid  + "&agg_code=" + objContext.Header.IOU_agg_code  + "&item_code=" +objContext.Header.IOU_item_code + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSWarehouseReceipt/");
                string Urlcon = "PAWHSWarehouseReceipt/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("item_master", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (ItemApplication)JsonConvert.DeserializeObject(post_data, typeof(ItemApplication));

            }
            return Json(objList);
        }
    }
}