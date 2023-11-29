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
    public class PAWHSNewBatchCreation : Controller
    {
        #region OldBatchCreation
        public IActionResult BatchCreationList()
        {
            return View();
        }
        public IActionResult BatchCreation()
        {
            return View();
        }
        public IActionResult NewBatchCreation()
        {
            return View();
        }

        public IActionResult BatchCreationListV3()
        {
            return View();
        }
        public IActionResult BatchCreationNewV3()
        {
            return View();
        }
        private IConfiguration _configuration;
        public PAWHSNewBatchCreation(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult BatchCreationList([FromBody] PawhsBatchCreationContext context)
        {
            PawhsBatchCreationApplication objList = new PawhsBatchCreationApplication();
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

                string Urlcon = "New_Pawhs_BatchCreation/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("BatchCreation_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PawhsBatchCreationApplication)JsonConvert.DeserializeObject(post_data, typeof(PawhsBatchCreationApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public JsonResult BatchCreationLotNo_List([FromBody] PawhsBatchCreationLotContext context)
        {
            PawhsBatchCreationLotApplication objList = new PawhsBatchCreationLotApplication();
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

                string Urlcon = "New_Pawhs_BatchCreation/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("BatchCreationLotNo_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PawhsBatchCreationLotApplication)JsonConvert.DeserializeObject(post_data, typeof(PawhsBatchCreationLotApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public JsonResult BatchCreationSave([FromBody] PAWHSBatchCreation_Save_Context objContext)
        {
            PAWHSBatchCreation_Save_Application objRoot = new PAWHSBatchCreation_Save_Application();
            PAWHSBatchCreation_Save_Document objDoc = new PAWHSBatchCreation_Save_Document();
            PAWHSBatchCreation_Save_Context objContextDetails = new PAWHSBatchCreation_Save_Context();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.in_selected_lot_id = objContext.in_selected_lot_id;
            objContextDetails.Header = objContext.Header;
            objContextDetails.OtherDtl = objContext.OtherDtl;
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
                string Urlcon = "New_Pawhs_BatchCreation/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("New_pawhs_BatchCreation_save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (PAWHSBatchCreation_Save_Document)JsonConvert.DeserializeObject(post_data, typeof(PAWHSBatchCreation_Save_Document));
            }
            return Json(objDoc);
        }
        [HttpPost]
        public ActionResult BatchCreationfetch([FromBody] PAWHSBatchCreation_FetchContext objContext)
        {
            PAWHSBatchCreationFetchApplication objout = new PAWHSBatchCreationFetchApplication();
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

                string Urlcon = "New_Pawhs_BatchCreation/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("BatchCreationLotNo_Single", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSBatchCreationFetchApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSBatchCreationFetchApplication));
            }
            return Json(objout);
        }
        [HttpPost]
        public JsonResult NewBatchCreationList([FromBody] PawhsBatchCreationContext context)
        {
            FetchBatchListNew objList = new FetchBatchListNew();
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
                string Urlcon = "NewPAWHSBatch10142/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = client.GetAsync("NewPAWHSBatchCreationList?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + " &filterby_tovalue = " + context.FilterBy_ToValue + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (FetchBatchListNew)JsonConvert.DeserializeObject(post_data, typeof(FetchBatchListNew));
            }
            return Json(objList);
        }
        #region Single
        public class PAWHSBatchCreationFetchApplication
        {
            public PAWHSBatchCreation_FetchContext context { get; set; }
        }
        public class PAWHSBatchCreation_FetchContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int In_batch_rowid { get; set; }
            public string In_batch_no { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_batch_no { get; set; }
            public IList<PAWHSBatchCreation_FetchHeader> Header { get; set; }
            public IList<PAWHSBatchCreation_FetchBatch_List> BatchList { get; set; }
            public IList<PAWHSBatchCreation_FetchOther_List> OtherList { get; set; }

        }
        public class PAWHSBatchCreation_FetchHeader
        {
            public int In_batch_rowid { get; set; }
            public string In_vehicle_no { get; set; }
            public int In_Total_No_of_lots { get; set; }
            public int In_No_of_batch_creation { get; set; }
            public int In_No_of_Pending { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class PAWHSBatchCreation_FetchBatch_List
        {
            public int In_act_row_id { get; set; }
            public string In_orgn_code { get; set; }
            public string In_agg_code { get; set; }
            public string In_lotno { get; set; }
            public string In_vehicle_no { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_member_type { get; set; }
            public string In_item_code { get; set; }
            public string In_item_name { get; set; }
            public double In_actual_qty { get; set; }
            public double In_actual_price { get; set; }
            public double In_actual_value { get; set; }
            public double In_advance_amt { get; set; }
            public int In_no_of_bags { get; set; }
        }
        public class PAWHSBatchCreation_FetchOther_List
        {
            public int In_batch_other_id { get; set; }
            public string In_batch_no { get; set; }
            public string In_cost_name { get; set; }
            public double In_cost_value { get; set; }
            public string in_mode_flag { get; set; }
        }
        #endregion

        #region Save
        public class PAWHSBatchCreation_Save_Application
        {
            public PAWHSBatchCreation_Save_Document document { get; set; }

        }
        public class PAWHSBatchCreation_Save_Document
        {
            public PAWHSBatchCreation_Save_Context context { get; set; }
            public PawhsBatchCreationApplicationException ApplicationException { get; set; }

        }

        public class PAWHSBatchCreation_Save_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string Out_batch_no { get; set; }
            public string Out_error_msg { get; set; }
            public string in_selected_lot_id { get; set; }
            public IList<PAWHSBacthCreation_Save_Header> Header { get; set; }
            public IList<PAWHSBatchCreation_Save_Otherdtl> OtherDtl { get; set; }
        }
        public class PAWHSBacthCreation_Save_Header
        {
            public int In_batch_rowid { get; set; }
            public string in_batch_no { get; set; }
            public string In_vehicle_no { get; set; }
            public int In_Total_No_of_lots { get; set; }
            public int In_No_of_batch_creation { get; set; }
            public int In_No_of_Pending { get; set; }
            public string In_mode_flag { get; set; }
            public string Out_batch_no { get; set; }
            public string Out_error_msg { get; set; }
        }
        public class PAWHSBatchCreation_Save_Otherdtl
        {
            public int In_batch_other_id { get; set; }
            public string In_batch_no { get; set; }
            public string In_cost_name { get; set; }
            public decimal In_cost_value { get; set; }
            public string in_mode_flag { get; set; }
            public int inout_batchotherdtl_row_id { get; set; }
            public string inout_batchno { get; set; }
        }
        #endregion

        #region List
        public class PawhsBatchCreationRootObject
        {
            public PawhsBatchCreationContext context { get; set; }
            public PawhsBatchCreationApplicationException ApplicationException { get; set; }
        }
        public class PawhsBatchCreationApplication
        {
            public PawhsBatchCreationContext context { get; set; }
            public PawhsBatchCreationApplicationException ApplicationException { get; set; }

        }
        public class PawhsBatchCreationApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PawhsBatchCreationContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public IList<PawhsBatchCreationList> List { get; set; }

        }
        public class PawhsBatchCreationList
        {

            public string Out_agg_code { get; set; }
            public string Out_batch_no { get; set; }
            public string Out_created_datetime { get; set; }
            public int Out_no_of_vehicles { get; set; }
            public int Out_no_of_lots { get; set; }


        }
        #endregion

        #region Batchcrtlot List
        public class PawhsBatchCreationLotApplication
        {
            public PawhsBatchCreationLotContext Context { get; set; }
            public PawhsBatchCreationApplicationException ApplicationException { get; set; }
        }

        public class PawhsBatchCreationLotContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string In_vehicle_no { get; set; }
            public IList<PawhsBatchCreationLotList> List { get; set; }
        }
        public class PawhsBatchCreationLotList
        {
            public int In_act_row_id { get; set; }
            public string In_orgn_code { get; set; }
            public string In_agg_code { get; set; }
            public string In_lotno { get; set; }
            public string In_vehicle_no { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_member_type { get; set; }
            public string In_item_code { get; set; }
            public string In_item_name { get; set; }
            public double In_actual_qty { get; set; }
            public double In_actual_price { get; set; }
            public double In_actual_value { get; set; }
            public double In_advance_amt { get; set; }
            public int In_no_of_bags { get; set; }
        }
        #endregion
        #endregion
        #region NewBatchCreation
        [HttpPost]
        public ActionResult BatchDetailsBasedOnDest(string org, string locn, string user, string lang, string destination, string item_name)
        {
            BatchDetailsBasedOnDestination objBatchList = new BatchDetailsBasedOnDestination();
            try
            {
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
                    string Urlcon = "NewPAWHSBatch10142/";
                    client.BaseAddress = new Uri(urlstring + Urlcon);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                    var response = client.GetAsync("BatchDetailsBasedonDestination?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&destination=" + destination + "&location_code=" + "QCD_UNS_OR").Result;
                    //var response = client.GetAsync("").Result;
                    Stream data = response.Content.ReadAsStreamAsync().Result;
                    StreamReader reader = new StreamReader(data);
                    string post_data = reader.ReadToEnd();
                    objBatchList = (BatchDetailsBasedOnDestination)JsonConvert.DeserializeObject(post_data, typeof(BatchDetailsBasedOnDestination));
                    //List<BatchDetails> objDestination = new List<BatchDetails>();
                    //if (item_name != null)
                    //{
                        //string[] items = item_name.Split(",");
                        //for (int k = 0; k < objBatchList.BatchDetails.Count; k++)
                        //{
                        //    for (int i = 0; i < items.Length; i++)
                        //    {
                        //        if (objBatchList.BatchDetails[k].In_item_code == items[i])
                        //        {
                        //            objDestination.Add(objBatchList.BatchDetails[k]);
                        //        }
                        //    }
                        //}
                    //}
                    //objBatchList.BatchDetails = objDestination;
                }
            }
            catch (Exception ex)
            {
            }
            return Json(objBatchList);
        }
        [HttpPost]

        [HttpPost]
        public ActionResult SaveBatch([FromBody] PAWHSNewBatchCreation_Save_Context objContext)
        {
            try
            {
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
                    string Urlcon = "NewPAWHSBatch10142/";
                    client.BaseAddress = new Uri(urlstring + Urlcon);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                    //var response = client.PostAsync("SaveBatchDetailsBasedonDestination", content).Result;
                    var response = client.PostAsync("SaveBatchDetailsBasedonDestination", content).Result;
                    Stream data = response.Content.ReadAsStreamAsync().Result;
                    StreamReader reader = new StreamReader(data);
                    string post_data = reader.ReadToEnd();
                    objContext = (PAWHSNewBatchCreation_Save_Context)JsonConvert.DeserializeObject(post_data, typeof(PAWHSNewBatchCreation_Save_Context));
                }
            }
            catch (Exception ex)
            {
            }
            return Json(objContext);
        }

        [HttpPost]
        public ActionResult FetchPurchaseOrderDetails(string org, string locn, string user, string lang, string po_no)
        {
            FetchPODetails objBatchList = new FetchPODetails();
            try
            {
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
                    string Urlcon = "NewPAWHSBatch10142/";
                    client.BaseAddress = new Uri(urlstring + Urlcon);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                    var response = client.GetAsync("FetchPODetails?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&po_no=" + po_no).Result;
                    //var response = client.GetAsync("").Result;
                    Stream data = response.Content.ReadAsStreamAsync().Result;
                    StreamReader reader = new StreamReader(data);
                    string post_data = reader.ReadToEnd();
                    objBatchList = (FetchPODetails)JsonConvert.DeserializeObject(post_data, typeof(FetchPODetails));
                }
            }
            catch (Exception ex)
            {
            }
            return Json(objBatchList);
        }
        [HttpPost]
        public ActionResult FectNewPAWHSBatchCreation(string org, string locn, string user, string lang, int batch_rowid, string batch_no)
        {
            BatchCreationSingleFetch objFetch = new BatchCreationSingleFetch();
            try
            {
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
                    string Urlcon = "NewPAWHSBatch10142/";
                    client.BaseAddress = new Uri(urlstring + Urlcon);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                    var response = client.GetAsync("FectNewPAWHSBatchCreation?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&batch_rowid=" + batch_rowid + "&batch_no=" + batch_no).Result;
                    //var response = client.GetAsync("").Result;
                    Stream data = response.Content.ReadAsStreamAsync().Result;
                    StreamReader reader = new StreamReader(data);
                    string post_data = reader.ReadToEnd();
                    objFetch = (BatchCreationSingleFetch)JsonConvert.DeserializeObject(post_data, typeof(BatchCreationSingleFetch));
                }
            }
            catch (Exception ex)
            {

            }
            return Json(objFetch);
        }
        public class BatchDetailsBasedOnDestination
        {
            public List<BatchDetails> BatchDetails { get; set; }
            public List<BatchProductDetails> ProductDetails { get; set; }
            public List<BatchProductTaxDetails> ProductTaxDetails { get; set; }
        }
        public class BatchDetails
        {
            public int In_act_row_id { get; set; }
            public string In_orgn_code { get; set; }
            public string In_agg_code { get; set; }
            public string In_product_type { get; set; }
            public string In_lot_type { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_item_code { get; set; }
            public string In_item_name { get; set; }
            public double In_actual_qty { get; set; }
            public double In_actual_price { get; set; }
            public double In_actual_value { get; set; }
            public double In_advance_amt { get; set; }
            public int In_no_of_bags { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_desc { get; set; }
            public double tax_rate { get; set; }
            
            public string In_mode_flag { get; set; }
        }
        public class BatchProductDetails
        {
            public int In_podtl_rowid { get; set; }
            public int In_sln_no { get; set; }
            public string In_item_code { get; set; }
            public string In_item_name { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_desc { get; set; }
            public string In_qty { get; set; }
            public string In_rate { get; set; }
            public string In_tax_rate { get; set; }
            public string In_product_amount { get; set; }
            public string In_discount { get; set; }
            public double In_othercharges { get; set; }
            public string In_tax { get; set; }
            public double In_gross_amount { get; set; }
            //public string In_remarks { get; set; }
            //public string In_ShipDetail { get; set; }
            public string In_unique_id { get; set; }
            //public string In_cgst_rate { get; set; }
            //public string In_sgst_rate { get; set; }
            //public string In_igst_rate { get; set; }
            //public string In_product_code { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class BatchProductTaxDetails
        {
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_code_desc { get; set; }
            public string In_hsn_desc { get; set; }
            public string In_cgst_rate { get; set; }
            public string In_sgst_rate { get; set; }
            public string In_sugst_rate { get; set; }
            public string In_igst_rate { get; set; }
            public string In_tax_rate { get; set; }
            public string In_taxable_amount { get; set; }
            public string In_tax_amount { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class BatchOtherDetails
        {
            public string In_cost_type { get; set; }
            public string In_cost_name { get; set; }
            public int In_cost_value { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class BatchAttachments
        {
            public int In_attch_rowid { get; set; }
            public string In_filename { get; set; }
            public string In_document { get; set; }
            public string In_description { get; set; }
            public string In_attch_date { get; set; }
            public string In_attch_upload { get; set; }
            public string In_attch_unique_id { get; set; }
            public string In_mode_flag { get; set; }
        }
        #endregion
        public class PAWHSNewBatchCreation_Save_Application
        {
            public PAWHSNewBatchCreation_Save_Document document { get; set; }
        }
        public class PAWHSNewBatchCreation_Save_Document
        {
            public PAWHSNewBatchCreation_Save_Context context { get; set; }
            public PawhsBatchCreationApplicationException ApplicationException { get; set; }
        }
        public class PAWHSNewBatchCreation_Save_Header
        {
            //public string Out_batch_no { get; set; }
            //public string Out_error_msg { get; set; }
            //public string in_selected_lot_id { get; set; }

            public int In_batch_rowid { get; set; }
            public string In_batch_no { get; set; }
            public string In_buyer_code { get; set; }
            public string In_buyer_location { get; set; }
            public string In_buyer_state_code { get; set; }
            public string In_buyer_name { get; set; }
            public string In_Vehicle_no { get; set; }
            public string In_po_no { get; set; }
            public string In_remarks { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class PAWHSNewBatchCreation_Save_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHSNewBatchCreation_Save_Header Header { get; set; }
            public List<BatchDetails> Batch { get; set; }
            public List<BatchOtherDetails> OtherDtl { get; set; }
            public List<BatchProductDetails> Invoice { get; set; }
            //public List<BatchProductTaxDetails> Tax { get; set; }
            public List<BatchAttachments> Attachment { get; set; }
        }
        public class FetchPODetails
        {
            public List<BatchProductDetails> PODetails { get; set; }
            public List<BatchProductTaxDetails> POTaxDetails { get; set; }
        }
        public class FetchBatchListNew
        {
            public List<FetchBatchListNewPAWHS> BatchList { get; set; }
        }
        public class FetchBatchListNewPAWHS
        {
            public int Out_batch_rowid { get; set; }
            public string Out_batch_no { get; set; }
            public string Out_batch_date { get; set; }
            public string Out_buyer_name { get; set; }
            public string Out_Vehicle_no { get; set; }

        }
        public class BatchCreationSingleFetch
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHSNewBatchCreation_Save_Header Header { get; set; }
            public List<BatchDetails> Batch { get; set; }
            public List<BatchOtherDetails> OtherDtl { get; set; }
            public List<BatchProductDetails> Invoice { get; set; }
            public List<BatchProductTaxDetails> Tax { get; set; }
            public List<BatchAttachments> Attachment { get; set; }
        }
    }
}
