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
    public class PAWHSNEWSALEENTRYController : Controller
    {
        public IActionResult PAWHSNewSaleEntryList()
        {
            return View();
        }
        public IActionResult PAWHSNewSaleEntryform()
        {
            return View();
        }
        private IConfiguration _configuration;
        public PAWHSNEWSALEENTRYController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";      

       
        [HttpPost]
        public ActionResult GetActualProcurementList([FromBody] PAWHSSaleEntryContext objContext)
        {

            PawhsSaleEntryRootObject objList = new PawhsSaleEntryRootObject();
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
                string Urlcon = "New_PAWHS_SaleEntry/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("New_Pawhs_SaleEntry_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PawhsSaleEntryRootObject)JsonConvert.DeserializeObject(post_data, typeof(PawhsSaleEntryRootObject));
            }
            return Json(objList);
        }
        #region List
        public class PawhsSaleEntryRootObject
        {
            public PAWHSSaleEntryContext context { get; set; }
            public PawhsSaleEntryApplicationException ApplicationException { get; set; }
        }        
        public class PawhsSaleEntryApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PAWHSSaleEntryContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public IList<PAWHSSaleEntryList> List { get; set; }

        }
        public class PAWHSSaleEntryList
        {

            public int Out_sale_rowid { get; set; }
            public string Out_agg_code { get; set; }
            public string Out_agg_name { get; set; }
            public string Out_saleno { get; set; }
            public string Out_buyer_code { get; set; }
            public string Out_buyer_name { get; set; }
            public string Out_item_code { get; set; }
            public string Out_item_name { get; set; }
            public double Out_sale_qty { get; set; }
            public double Out_sale_price { get; set; }
            public string Out_sale_remarks { get; set; }
            public string Out_status { get; set; }
            public string Out_rowtimestamp { get; set; } 
            public string Out_invoice_date { get; set; }
            public decimal Out_NoOf_bags { get; set; }
            public string Out_vehicle_type { get; set; }
            public string Out_vehicle_No { get; set; }
            public string Out_QC_person { get; set; }
            public string Out_Lrp_Name { get; set; } 
        }
        #endregion

        public ActionResult saleentryfetch([FromBody] PAWHS_SaleEntry_FetchContext objContext)
        {
            PAWHS_SaleEntryFetchApplication objout = new PAWHS_SaleEntryFetchApplication();
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
                string Urlcon = "New_PAWHS_SaleEntry/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("New_Pawhs_Single_SaleEntry", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHS_SaleEntryFetchApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHS_SaleEntryFetchApplication));
            }
            return Json(objout);
        }

        #region Fetch
        public class PAWHS_SaleEntryFetchApplication
        {
            public PAWHS_SaleEntry_FetchContext context { get; set; }

        }
        public class PAWHS_SaleEntry_FetchContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int IOU_sale_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_sale_no { get; set; }
            public PAWHS_SaleEntry_FetchHeader Header { get; set; }
            public List<PAWHS_SaleEntry_Fetch_SlnoDetail> SlnoDetail { get; set; }
        }
        public class PAWHS_SaleEntry_FetchHeader
        {
            public int IOU_sale_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_sale_no { get; set; }
            public string IOU_lotno { get; set; }
            public string In_buyer_code { get; set; }
            public string In_buyer_name { get; set; }
            //public string In_item_code { get; set; }
            public string In_crop_variety { get; set; } //ramya added on 13 jul 21
            public string In_item_name { get; set; } //its Crop name
            public double In_sale_qty { get; set; }
            public double In_sale_price { get; set; }
            public double In_sale_value { get; set; }
            public string In_sale_date { get; set; }
            public double In_advance_amt { get; set; }
            public string In_pickup_date { get; set; }
            public int In_no_of_bags { get; set; }
            public string In_payment_type { get; set; }
            public string In_bank_acc_no { get; set; }
            public string In_cheque_no { get; set; }
            public string In_status { get; set; }
            public string In_sale_remarks { get; set; }
            public string In_sale_attach { get; set; }
            public string In_vehicle_type { get; set; }
            public string In_vehicle_no { get; set; }
            public string In_qcperson_name { get; set; }
            public string In_LRP_Name { get; set; }
            public string In_LRP_Mobile_no { get; set; }
            public string In_whs_code { get; set; }
            public string In_whs_name { get; set; }

        }
        public class PAWHS_SaleEntry_Fetch_SlnoDetail
        {
            public int In_slno_row_id { get; set; }
            public string In_agg_code { get; set; }
            public string In_lotno { get; set; }
            public string In_slno { get; set; }
            public string In_temp1 { get; set; }
            public string In_temp2 { get; set; }
            public string In_qty { get; set; }
            public string In_PO_serialno { get; set; }
            public string In_PO_lotno { get; set; }
            public string In_farmername { get; set; }
            public List<PAWHS_SaleEntry_Fetch_QlyDetail> QlyDetail { get; set; }
        }
        public class PAWHS_SaleEntry_Fetch_QlyDetail
        {
            public int In_qly_row_id { get; set; }
            public string In_agg_code { get; set; }
            public string In_sale_no { get; set; }
            public int In_slno_rowid { get; set; }
            public string In_slno { get; set; }
            public string In_item_code { get; set; }
            public string In_qly_code { get; set; }
            public string In_actual_value { get; set; }
            public double In_wr_qly_value { get; set; }
            public double In_estimate_qly_value { get; set; }
        }
        #endregion
    }

}
