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
    public class InWardController : Controller
    {
        // GET: InWard
        public ActionResult InwardEntryForm()
        {
            return View();
        }
        public ActionResult InwardEntryList()
        {
            return View();
        }
        public ActionResult InwardPayment()
        {
            return View();
        }
        private IConfiguration _configuration;
        public InWardController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult InwardListfetch([FromBody]ICDStockContext context)
        {
            ICDStockDocument objList = new ICDStockDocument();
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
                string Urlcon = "ICDStockInward/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //  var response = client.GetAsync("").Result;
                var response = client.PostAsync("allStockInwardList", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (ICDStockDocument)JsonConvert.DeserializeObject(post_data, typeof(ICDStockDocument));

            }
            return Json(objList);
        }
  
        [HttpPost]
        public ActionResult Inwardfetch([FromBody] SICDStockContext objContext)
        {
            SICDStockRootObject objout = new SICDStockRootObject();
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

                // string Urlcon = "ICD_MOBILEAPP/stockInward?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&inward_rowid=" + objContext.inward_rowid;
                string Urlcon = "ICDStockInward/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("stockInward", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (SICDStockRootObject)JsonConvert.DeserializeObject(post_data, typeof(SICDStockRootObject));
            }
            return Json(objout);
        }
        
        [HttpPost]
        public JsonResult InwardProductfetch([FromBody]PContext context)
        {
            PApplication objList = new PApplication();
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
                //string Urlcon = "ICD_MOBILEAPP/productsearch?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "ICDStockInward/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("ProductsearchStockInward", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PApplication)JsonConvert.DeserializeObject(post_data, typeof(PApplication));
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
            public string In_uomtype_code_desc { get; set; }
            public float In_base_price { get; set; }
            public float In_current_qty { get; set; }

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
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }

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
        [HttpPost]
        public ActionResult InwardSave([FromBody] IUStocksaveContext objContext)
        {
            IUStockApplication objRoot = new IUStockApplication();
            IUStockDocument objDoc = new IUStockDocument();
            IUStocksaveContext objContextDetails = new IUStocksaveContext();
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
                // string urlstring = "http://169.38.77.186/Deployable_image_trial_odisha/api/KANCHIICD_MOBILEAPP";
                string Urlcon = "ICDStockInward/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newSaveStockInward", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
      

        #region GetICDStockList
        public class ICDSTList
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

        }
        public class ICDStockContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public IList<ICDSTList> List { get; set; }


        }


        public class ICDStockRootObject
        {
            public ICDStockContext context { get; set; }
            public ICDSTListApplicationException ApplicationException { get; set; }
        }
        public class ICDSTListApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }

        public class ICDStockDocument
        {
            public ICDStockContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }
        #endregion
        #region FetchICDStock
        public class SICDStockContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int inward_rowid { get; set; }
            public ICDStockFetchHeader Header { get; set; }
            public List<ICDStockFetchDetail> Detail { get; set; }
            public List<ICDStockFetchDetailSlno> Slno { get; set; }
            public List<ICDINFetchDetailOtherCost> OtherCostInfo { get; set; }
            public List<ICDINFetchOtherInputs> OtherInputs { get; set; }
        }

        public class SICDStockRootObject
        {
            public SICDStockContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }

        public class ICDStockFetchHeader
        {
            public int IOU_inward_rowid { get; set; }
            public string In_orgn_code { get; set; }
            public string In_ic_code { get; set; }
            public string In_ic_desc { get; set; }
            public string In_inward_code { get; set; }
            public string In_inward_desc { get; set; }
            public string In_grn_no { get; set; }
            public string In_grn_date { get; set; }
            public string In_supplier_name { get; set; }
            public string In_supplier_location { get; set; }
            public string In_from_state { get; set; }
            public string In_Remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_process_status { get; set; }
            public DateTime In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

            public string In_bill_image { get; set; }
            public Int32 In_transport_amount { get; set; }
            public Int32 In_others { get; set; }
            public Int32 In_loading_unloading_cost { get; set; }
            public Int32 In_local_transport_cost { get; set; }
            public Int32 In_local_loading_unloading_cost { get; set; }
            public Double In_roundoff { get; set; }
        }
        public class ICDStockFetchDetail
        {
            public int In_inwarddtl_rowid { get; set; }
            public string In_inward_code { get; set; }
            public string In_inward_desc { get; set; }
            public string In_grn_no { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_catg_desc { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_subcatg_desc { get; set; }
            public string In_product_code { get; set; }
            public string In_product_desc { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_uomtype_desc { get; set; }
            public string In_batch_no { get; set; }
            public double In_received_qty { get; set; }
            public double In_product_amount { get; set; }
            public double In_tax_amount { get; set; }
            public double In_net_amount { get; set; }
            public double In_transport_amount { get; set; }
            public double In_discount { get; set; }
            public double In_cgst_rate { get; set; }
            public double In_sgst_rate { get; set; }
            public double In_igst_rate { get; set; }
            public double In_ugst_rate { get; set; }
            public double In_tax_rate { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

            //Ramya Added
            public decimal In_Base_Price { get; set; }
            public decimal In_Non_Base_Price { get; set; }
            //Ramya End

        }
        public class ICDStockFetchDetailSlno
        {
            public string In_inwardslno_rowid { get; set; }
            public int In_inwarddtl_rowid { get; set; }
            public string In_slno { get; set; }
            public string In_no_of_bags { get; set; }
            public string In_grn_no { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_code { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
        }

        
        //Ramya Added for Discount Screen CR
        public class ICDINFetchDetailOtherCost
        {
            public string In_inwardOtherCost_rowid { get; set; }
            public int In_inwarddtl_rowid { get; set; }
            public string In_OtherCostCode { get; set; }
            public string In_OtherCostType { get; set; }
            public string In_OtherCostOn { get; set; }
            public string In_OtherCostAmount { get; set; }
            public string In_grn_no { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_code { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class ICDINFetchOtherInputs
        {
            public string In_inwardOtherinput_rowid { get; set; }
            public int In_inwarddtl_rowid { get; set; }
            public int In_NoOfLoosePack { get; set; }
            public int In_CartonVolume { get; set; }
            public string In_Type { get; set; }
            public string In_ManufactureDate { get; set; }
            public string In_ExpDate { get; set; }
            public string In_mode_flag { get; set; }
            public string In_grn_no { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_code { get; set; }
            public string In_status_code { get; set; }
            public decimal In_Mrp { get; set; }
        }
        #endregion
        #region SaveICDStock
        public class ICDStocksaveHeader
        {
            public int IOU_inward_rowid { get; set; }
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
            public Int32 In_transport_amount { get; set; }
            public Int32 In_others { get; set; }
            public Int32 In_loading_unloading_cost { get; set; }
            public Int32 In_local_transport_cost { get; set; }
            public Int32 In_local_loading_unloading_cost { get; set; }
            public float In_roundoff { get; set; }
        }
        public class IUStocksaveDetail
        {
            public int In_inwarddtl_rowid { get; set; }
            public string In_inward_code { get; set; }
            public string In_grn_no { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_code { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_batch_no { get; set; }
            public float In_received_qty { get; set; }
            public float In_product_amount { get; set; }
            public float In_tax_amount { get; set; }
            public float In_transport_amount { get; set; }
            public float In_discount { get; set; }
            public float In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            //Ramya Added
            public decimal In_Base_Price { get; set; }
            public decimal In_Non_Base_Price { get; set; }
            public List<ICDStockSaveSlnoinfo> Slnoinfo { get; set; }
            public List<ICDINSDetailOtherCost> OtherCostInfo { get; set; }
            public List<ICDINSDetailOtherInputs> OtherInputInfo { get; set; }
            //Ramya End
            //Ramya Added for New CR - Discount SCreen
        }
            public class ICDINSDetailOtherInputs
            {
                public string In_inwardOtherinput_rowid { get; set; }
                public int In_inwarddtl_rowid { get; set; }
                public int In_NoOfLoosePack { get; set; }
                public int In_CartonVolume { get; set; }
                public string In_Type { get; set; }
                public string In_ManufactureDate { get; set; }
                public string In_ExpDate { get; set; }
                public string In_mode_flag { get; set; }
                public string In_grn_no { get; set; }
                public string In_product_catg_code { get; set; }
                public string In_product_subcatg_code { get; set; }
                public string In_product_code { get; set; }
                public string In_status_code { get; set; }
                public decimal In_Mrp { get; set; }
            }
            public class ICDINSDetailOtherCost
            {
                public string In_inwardOtherCost_rowid { get; set; }
                public int In_inwarddtl_rowid { get; set; }
                public string In_product_code { get; set; }
                public string In_OtherCostType { get; set; }
                public string In_OtherCostCode { get; set; }
                public string In_OtherCostOn { get; set; }
                public string In_OtherCostAmount { get; set; }
                public string In_grn_no { get; set; }
                public string In_product_catg_code { get; set; }
                public string In_product_subcatg_code { get; set; }
                public string In_status_code { get; set; }
                public string In_mode_flag { get; set; }
            }

            public class ICDStockSaveSlnoinfo
            {
                public string In_inwardslno_rowid { get; set; }
                public int In_inwarddtl_rowid { get; set; }
                public string In_slno { get; set; }
                public string In_no_of_bags { get; set; }
                public string In_grn_no { get; set; }
                public string In_product_catg_code { get; set; }
                public string In_product_subcatg_code { get; set; }
                public string In_product_code { get; set; }
                public string In_status_code { get; set; }
                public string In_mode_flag { get; set; }
            }

        public class IUStocksaveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public ICDStocksaveHeader Header { get; set; }
            public IList<IUStocksaveDetail> Detail { get; set; }

        }
        public class IUStockDocument
        {
            public IUStocksaveContext context { get; set; }

        }
        public class IUStockApplication
        {
            public IUStockDocument document { get; set; }

        }
        #endregion

        public ActionResult InwardPaymentfetch([FromBody] PayContext objContext)
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
               string Urlcon = "ICDStockInward/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("ICDInwardPayfetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PayApplication)JsonConvert.DeserializeObject(post_data, typeof(PayApplication));
            }
            return Json(objout);
        }

        #region payment fetch
        public class PayHeader
        {
            public string In_invoice_no { get; set; }
            public string In_invoice_date { get; set; }
            public float In_invoice_amount { get; set; }
            public float In_balance_amount { get; set; }

        }
        public class payDetail
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
            public PayHeader Header { get; set; }
            public IList<payDetail> Detail { get; set; }
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
            public PayApplicationException ApplicationException { get; set; }

        }
        #endregion
        public ActionResult InWardPaymentSave([FromBody] PaySContext objContext)
        {
            PaySApplication objRoot = new PaySApplication();
            DocumentPayS objDoc = new DocumentPayS();
            PaySContext objContextDetails = new PaySContext();
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
                string Urlcon = "ICDStockInward/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_inward_payment", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region payemntsave
        public class PaySHeader
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
        public class PaySDetail
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
        public class PaySContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PaySHeader Header { get; set; }
            public IList<PaySDetail> Detail { get; set; }

        }
        public class DocumentPayS
        {
            public PaySContext context { get; set; }

        }
        public class PaySApplication
        {
            public DocumentPayS document { get; set; }

        }
        #endregion
    }
}