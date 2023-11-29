using System;
using System.Collections.Generic;
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
    public class PAWHSAggregatorFarmerMapController : Controller
    {
        // GET: PAWHSAggregatorFarmerMap
        //Muralidharan developed on 18-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public PAWHSAggregatorFarmerMapController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult PAWHSAggregatorFarmerMapping()
        {
            return View();
        }
        public class List
        {
            public int In_farmer_rowid { get; set; }
            public string In_farmer_id { get; set; }
            public string In_pa_id { get; set; }
            public string In_given_name { get; set; }
            public string In_sur_name { get; set; }
            public string In_village_code { get; set; }
            public string In_village_name { get; set; }
            public string In_dob { get; set; }
            public string In_gender { get; set; }
            public string In_regd_mobile_no { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

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
            public int IOU_agg_farmer_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string In_aggregator_name { get; set; }
            public string In_village_covered_code { get; set; }
            public string In_village_covered_name { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FarmersNotMapped
        {
            public int In_farmer_rowid { get; set; }
            public string In_farmer_id { get; set; }
            public string In_given_name { get; set; }
            public string In_sur_name { get; set; }
            public string In_village_name { get; set; }
            public string In_dob { get; set; }
            public string In_gender { get; set; }
            public string In_regd_mobile_no { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class AggrContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<FarmersNotMapped> FarmersNotMapped { get; set; }

        }
        public class AggrApplication
        {
            public AggrContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        public class NewHeader
        {
            public int IOU_agg_farmer_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string In_aggregator_name { get; set; }
            public string In_village_covered_code { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FarmersMapped
        {
            public string In_dob { get; set; }
            public string In_farmer_id { get; set; }
            public int In_farmer_rowid { get; set; }
            public string In_gender { get; set; }
            public string In_given_name { get; set; }
            public string In_mode_flag { get; set; }
            public string In_pa_id { get; set; }
            public string In_regd_mobile_no { get; set; }
            public string In_status_code { get; set; }
            public string In_sur_name { get; set; }
            public string In_village_name { get; set; }       
            
            
            

        }
        public class NewContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public NewHeader Header { get; set; }
            public IList<FarmersMapped> FarmersMapped { get; set; }

        }
        public class Document
        {
            public NewContext context { get; set; }

        }
        public class NewApplication
        {
            public Document document { get; set; }

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
                //string Urlcon = "/allmapped_farmers?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSAggVSFarmap/");
                string Urlcon = "PAWHSAggVSFarmap/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("allmapped_farmers", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }

        [HttpPost]
        public ActionResult AggrServiceList([FromBody]AggrContext objContext)
        {
            AggrApplication objList = new AggrApplication();
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
                //string Urlcon = "/aggr_farmer_map?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&agg_farmer_rowid=" + objContext.Header.IOU_agg_farmer_rowid + "&agg_code=" + objContext.Header.IOU_agg_code + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSAggVSFarmap/");
                string Urlcon = "PAWHSAggVSFarmap/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("aggr_farmer_map", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (AggrApplication)JsonConvert.DeserializeObject(post_data, typeof(AggrApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveAggrDetails([FromBody]NewContext objContext)
        {
            AggrApplication objList = new AggrApplication();
            NewApplication ObjRoot = new NewApplication();
            NewContext ObjContext = new NewContext();
            Document ObjDocuent = new Document();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
            ObjContext.FarmersMapped = objContext.FarmersMapped;
            ObjContext.userId = objContext.userId;
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
                //string Urlcon = "/new_aggr_vs_farmer_mapping";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSAggVSFarmap/");
                string Urlcon = "PAWHSAggVSFarmap/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_aggr_vs_farmer_mapping", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (AggrApplication)JsonConvert.DeserializeObject(post_data, typeof(AggrApplication));
            }
            return Json(objList);
        }

    }
}