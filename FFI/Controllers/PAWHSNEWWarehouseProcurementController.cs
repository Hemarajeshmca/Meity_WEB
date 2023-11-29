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
    public class PAWHSNEWWarehouseProcurementController : Controller
    {
        private IConfiguration _configuration;
        public PAWHSNEWWarehouseProcurementController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult PAWHSNEWWarehouseProcurementList()
        {
            return View();
        }
        public ActionResult PAWHSNEWWarehouseProcurementForm()
        {
            return View();
        }

        #region List
        public class pawhs_NewActual_Proc_ALL_RootObject
        {
            public pawhs_NewActual_Proc_ALL_Context context { get; set; }
            public pawhs_NewActual_Proc_ALL_ApplicationException ApplicationException { get; set; }
        }
        public class pawhs_NewActual_Proc_ALL_Application
        {
            public pawhs_NewActual_Proc_ALL_Context context { get; set; }
            public pawhs_NewActual_Proc_ALL_ApplicationException ApplicationException { get; set; }

        }

        public class pawhs_NewActual_Proc_ALL_ApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class pawhs_NewActual_Proc_ALL_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }

            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            //  public pawhs_NewEstimate_Proc_ALL_Filter Filter { get; set; }
            public IList<pawhs_NewActual_Proc_ALL_List> List { get; set; }

        }

        public class pawhs_NewActual_Proc_ALL_List
        {
            public int Out_whs_rowid { get; set; }
            public string Out_LotNo { get; set; }
            public string Out_farmer_code { get; set; }
            public string Out_farmer_name { get; set; }
            public string Out_member_type { get; set; }
            public string Out_item_code { get; set; }
            public string Out_item_name { get; set; }
            public string Out_accepted_qty { get; set; }
            public string Out_whs_code { get; set; }
            public string Out_status { get; set; }
            public string Out_Remarks { get; set; }
            public string Out_agg_code { get; set; }

        }

        #endregion

        #region Fetch 

        public class PAWHSActualProcurmentFetchApplication
        {

            public PAWHSActualProcurment_FetchContext context { get; set; }

        }


        public class PAWHSActualProcurment_FetchContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int IOU_act_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_lotno { get; set; }
            public PAWHSActualProcurment_FetchHeader Header { get; set; }
            public IList<PAWHSActualProcurment_Fetch_QtyDetail> QtyDetail { get; set; }
            public IList<PAWHSActualProcurment_Fetch_OtherDetail> OtherDetail { get; set; }
            public IList<PAWHSActualProcurment_Fetch_OtherDetail1> OtherDetail1 { get; set; }
            public IList<PAWHSActualProcurment_Fetch_SlnoDetail> SlnoDetail { get; set; }
        }

        public class PAWHSActualProcurment_FetchHeader
        {
            public int IOU_act_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_lotno { get; set; }
            public string In_farmer_code { get; set; }

            public string In_farmer_name { get; set; }
            public string In_member_type { get; set; }
            public string In_item_code { get; set; }
            public string In_item_name { get; set; }
            public double In_actual_qty { get; set; }
            public double In_actual_price { get; set; }
            public double In_actual_value { get; set; }
            public double in_advance_amt { get; set; }
            public Int32 In_no_of_bags { get; set; }
            public string in_status { get; set; }
            public string in_actual_remarks { get; set; }
            public string in_approved_remarks { get; set; }
            public string in_pickup_remarks { get; set; }
            public string in_wr_remarks { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_wh_code { get; set; }
            public double In_accepted_qty { get; set; }
            public double In_payto_farmer { get; set; }

        }

        public class PAWHSActualProcurment_Fetch_QtyDetail
        {
            public int In_qty_row_id { get; set; }
            public string In_agg_code { get; set; }
            public string In_lotno { get; set; }
            public string In_item_code { get; set; }
            public string In_qty_code { get; set; }
            public string In_qty_range { get; set; }
            public string In_qty_unit { get; set; }
            public string In_qty_name { get; set; }
            public double In_actual_value { get; set; }
            public double In_wr_qty_value { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHSActualProcurment_Fetch_OtherDetail
        {
            public int In_Other_row_id { get; set; }
            public string In_agg_code { get; set; }
            public string In_lotno { get; set; }
            public double In_packaging_cost { get; set; }
            public double In_transporting_cost { get; set; }
            public double In_unpacking_cost { get; set; }
            public double In_local_packaging_cost { get; set; }
            public double In_local_transporting_cost { get; set; }
            public double In_temp_cost { get; set; }
            public double In_temp_cost1 { get; set; }
            public double In_temp_cost2 { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class PAWHSActualProcurment_Fetch_SlnoDetail
        {
            public int In_slno_row_id { get; set; }
            public string In_agg_code { get; set; }
            public string In_lotno { get; set; }
            public string In_slno { get; set; }
            public string In_temp1 { get; set; }
            public string In_temp2 { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class PAWHSActualProcurment_Fetch_OtherDetail1
        {
            public string In_lotno { get; set; }
            public string In_type { get; set; }
            public double In_value { get; set; }
        }
        #endregion

        [HttpPost]
        public ActionResult GetActualProcurementList([FromBody] pawhs_NewActual_Proc_ALL_Context objContext)
        {

            pawhs_NewActual_Proc_ALL_RootObject objList = new pawhs_NewActual_Proc_ALL_RootObject();
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
                string Urlcon = "PAWHS_NewWareHouseReceipt/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("pawhs_NewWareHouseReceipt_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (pawhs_NewActual_Proc_ALL_RootObject)JsonConvert.DeserializeObject(post_data, typeof(pawhs_NewActual_Proc_ALL_RootObject));
            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult ActualProcurementfetch([FromBody] PAWHSActualProcurment_FetchContext objContext)
        {
            PAWHSActualProcurmentFetchApplication objout = new PAWHSActualProcurmentFetchApplication();
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
                string Urlcon = "NewPawhsActulProcurment/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("new_pawhs_Single_ActualProc", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSActualProcurmentFetchApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSActualProcurmentFetchApplication));
            }
            return Json(objout);
        }
    }
}