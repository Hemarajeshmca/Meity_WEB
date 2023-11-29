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
    public class ServiceNomineeController : Controller
    {
        // GET: ServiceNominee
        //Muralidharan developed on 11-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public ServiceNomineeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult ServiceNomineeList()
        {
            return View();
        }
        public ActionResult ServiceNomineeForm()
        {
            return View();
        }
        public ActionResult ServiceNomineeEdit()
        {
            return View();
        }
        public class List
        {
            public int Out_servicereq_rowid { get; set; }
            public string Out_farmer_code { get; set; }
            public string Out_fpomember_code { get; set; }
            public string Out_farmer_name { get; set; }
            public string Out_sur_name { get; set; }
            public string Out_certificate_no { get; set; }
            public string Out_issued_date { get; set; }
            public int Out_dist_from { get; set; }
            public int Out_dist_to { get; set; }
            public string Out_servicereq_no { get; set; }
            public string Out_request_date { get; set; }
            public string Out_request_type { get; set; }
            public string Out_request_type_desc { get; set; }
            public string Out_requestsub_type { get; set; }
            public string Out_requestsub_type_desc { get; set; }
            public string Out_chklist_status_flag { get; set; }
            public string Out_sr_comments { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

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
        public class Header
        {
            public int IOU_servicereq_rowid { get; set; }
            public string IOU_fpomember_code { get; set; }
            public string IOU_servicereq_no { get; set; }
            public string In_farmer_code { get; set; }
            public string In_cur_member_nominee { get; set; }
            public string In_changeto_member_nominee { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_chklist_status_flag { get; set; }
            public string In_sr_comments { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SingleContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }

        }
      
        public class SingleApplication
        {
            public SingleContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }

        public class ReqHeader
        {
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_sur_name { get; set; }
            public string IOU_fpomember_code { get; set; }
            public string IOU_request_type { get; set; }
        }
        public class Share_certificate
        {
            public int In_certificatedist_rowid { get; set; }
            public string In_certificate_no { get; set; }
            public int In_dist_from { get; set; }
            public int In_dist_to { get; set; }
            public string In_issued_date { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }

        }
        public class Request_history
        {
            public int In_servicereq_rowid { get; set; }
            public string In_certificate_no { get; set; }
            public string In_issued_date { get; set; }
            public string In_servicereq_no { get; set; }
            public string In_request_date { get; set; }
            public string In_request_type { get; set; }
            public string In_request_type_desc { get; set; }
            public string In_requestsub_type { get; set; }
            public string In_requestsub_type_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }

        }
        public class ReqContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public ReqHeader Header { get; set; }
            public IList<Share_certificate> Share_certificate { get; set; }
            public IList<Request_history> Request_history { get; set; }

        }
       
        public class ReqApplication
        {
            public ReqContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        public class SaveHeader
        {
            public int IOU_servicereq_rowid { get; set; }
            public string IOU_servicereq_no { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_farmer_code { get; set; }
            public string In_cur_member_nominee { get; set; }
            public string In_changeto_member_nominee { get; set; }
            public string In_status_code { get; set; }
            public string In_chklst_status_flag { get; set; }
            public string In_sr_comments { get; set; }
            public string In_mode_flag { get; set; }
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
        public class Document
        {
            public SaveContext context { get; set; }

        }
        public class SaveApplication
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
                //string Urlcon = "/allservice_request?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISNamechange/");
                string Urlcon = "FISNamechange/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allservice_request", content).Result;
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
                //string Urlcon = "/service_req_nominee?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&servicereq_rowid=" + objContext.Header.IOU_servicereq_rowid + "&fpomember_code=" + objContext.Header.IOU_fpomember_code + "&servicereq_no=" + objContext.Header.IOU_servicereq_no + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISNomineechange/");
                string Urlcon = "FISNomineechange/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("service_req_nominee", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (SingleApplication)JsonConvert.DeserializeObject(post_data, typeof(SingleApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SingleServiceNomineeDetails([FromBody]ReqContext objContext)
        {
            ReqApplication objList = new ReqApplication();
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
                //string Urlcon = "/service_req?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&fpomember_code=" + objContext.Header.IOU_fpomember_code + "&request_type=" + objContext.Header.IOU_request_type + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISNamechange/");
                string Urlcon = "FISNamechange/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("service_req", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (ReqApplication)JsonConvert.DeserializeObject(post_data, typeof(ReqApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveReqNominee([FromBody]SaveContext objContext)
        {
            SingleApplication objList = new SingleApplication();
            SaveApplication ObjRoot = new SaveApplication();
            SaveContext ObjContext = new SaveContext();
            Document ObjDocuent = new Document();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
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
                //string Urlcon = "/newservicerequestnomiee";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISNomineechange/");
                string Urlcon = "FISNomineechange/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newservicerequestnomiee", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (SingleApplication)JsonConvert.DeserializeObject(post_data, typeof(SingleApplication));
            }
            return Json(objList);
        }
    }
}