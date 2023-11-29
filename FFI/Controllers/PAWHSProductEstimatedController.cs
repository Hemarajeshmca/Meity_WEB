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
    public class PAWHSProductEstimatedController : Controller
    {

        private IConfiguration _configuration;
        public PAWHSProductEstimatedController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult PAWHSProductEstimatedList()
        {
            return View();
        }
        public ActionResult PAWHSProductEstimatedForm()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetEstimatedList([FromBody] pawhs_NewEstimate_Proc_ALL_Context objContext)
        {

            pawhs_NewEstimate_Proc_ALL_RootObject objList = new pawhs_NewEstimate_Proc_ALL_RootObject();
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
                //string Urlcon = "/allitem_master?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.FilterBy_Option + "&filterby_code=" + objContext.FilterBy_Code + "&filterby_fromvalue=" + objContext.FilterBy_FromValue + "&filterby_tovalue=" + objContext.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHS_NewEstimated_Procurment/");
                string Urlcon = "PAWHS_NewEstimated_Procurment/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("pawhs_NewEstimated_Procurment_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (pawhs_NewEstimate_Proc_ALL_RootObject)JsonConvert.DeserializeObject(post_data, typeof(pawhs_NewEstimate_Proc_ALL_RootObject));
            }
            return Json(objList);
        }


        [HttpPost]
        public ActionResult ProductEstimatedfetch([FromBody] pawhs_NewEstimate_Proc_single_Context objContext)
        {
            pawhs_NewEstimate_Proc_single_Application objout = new pawhs_NewEstimate_Proc_single_Application();
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
                //string Urlcon = "/item_master?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&item_rowid=" + objContext.item_rowid + "&agg_code=" + objContext.agg_code + "&item_code=" + objContext.item_code;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHS_NewEstimated_Procurment/");
               string Urlcon = "PAWHS_NewEstimated_Procurment/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("pawhs_NewEstimate_Proc_single", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (pawhs_NewEstimate_Proc_single_Application)JsonConvert.DeserializeObject(post_data, typeof(pawhs_NewEstimate_Proc_single_Application));
            }
            return Json(objout);
        }




        #region list
        public class pawhs_NewEstimate_Proc_ALL_RootObject
        {
            public pawhs_NewEstimate_Proc_ALL_Context context { get; set; }
            public pawhs_NewEstimate_Proc_ALL_ApplicationException ApplicationException { get; set; }
        }
        public class pawhs_NewEstimate_Proc_ALL_Application
        {
            public pawhs_NewEstimate_Proc_ALL_Context context { get; set; }
            public pawhs_NewEstimate_Proc_ALL_ApplicationException ApplicationException { get; set; }

        }

        public class pawhs_NewEstimate_Proc_ALL_ApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class pawhs_NewEstimate_Proc_ALL_Context
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
            public IList<pawhs_NewEstimate_Proc_ALL_List> List { get; set; }

        }
        //public class pawhs_NewEstimate_Proc_ALL_Filter
        //{
        //    public string FilterBy_Option { get; set; }
        //    public string FilterBy_Code { get; set; }
        //    public string FilterBy_FromValue { get; set; }
        //    public string FilterBy_ToValue { get; set; }

        //}

        public class pawhs_NewEstimate_Proc_ALL_List
        {
            public int Out_Estm_rowid { get; set; }
            public string Out_LotNo { get; set; }
            public string Out_Farmer_Code { get; set; }
            public string Out_Farmer_Name { get; set; }
            public string Out_Member_Type { get; set; }
            public string Out_Item_Code { get; set; }
            public string Out_Item_Name { get; set; }
            public string Out_Estimated_Qty { get; set; }
            public string Out_Estimated_Price { get; set; }
            public string Out_Estimated_Value { get; set; }
            public string Out_Estimated_PickDate { get; set; }
            public string Out_Remarks { get; set; }
            public string Out_row_timestamp { get; set; }

        }


        #endregion


        #region Fetch 

        public class pawhs_NewEstimate_Proc_single_Application
        {
            //public PAWHSProductmasterFDocument document { get; set; }
            public pawhs_NewEstimate_Proc_single_Context context { get; set; }

        }

        public class pawhs_NewEstimate_Proc_single_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int in_Estm_rowid { get; set; }
            public string in_LotNo { get; set; }
            public pawhs_NewEstimate_Proc_single_Header Header { get; set; }
            public IList<pawhs_NewEstimate_Proc_Single_Quality> QualityDt { get; set; }
        }

        public class pawhs_NewEstimate_Proc_single_Header
        {
            public int in_Estm_rowid { get; set; }
            public string in_LotNo { get; set; }
            public string in_Farmer_Code { get; set; }
            public string in_Farmer_Name { get; set; }
            public string in_Member_Type { get; set; }
            public string in_Item_Code { get; set; }
            public string in_Item_Name { get; set; }
            public string in_variety_status { get; set; }
            public decimal in_Estimated_Qty { get; set; }
            public decimal in_Estimated_Price { get; set; }
            public decimal in_Estimated_Value { get; set; }
            public string in_Estimated_PickDate { get; set; }
            public string in_Estimated_attach { get; set; }
            public string in_Estimated_Status { get; set; }
            public string in_LRP_Name { get; set; }
            public string in_LRP_Mobile_no { get; set; }
            public string in_Remarks { get; set; }
           
        }
        public class pawhs_NewEstimate_Proc_Single_Quality
        {
            public int Out_qty_row_id { get; set; }
            public string Out_agg_code { get; set; }
            public string Out_lotno { get; set; }
            public string Out_qlt_code { get; set; }
            public string Out_Qlt_name { get; set; }
            public string Out_Qlt_value { get; set; }
        }

        #endregion

    }
}
