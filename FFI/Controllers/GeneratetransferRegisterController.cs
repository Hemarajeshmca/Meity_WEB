using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.IO;

namespace FFI.Controllers
{
    public class GeneratetransferRegisterController : Controller
    {
        // GET: GeneratetransferRegister
        //Muralidharan developed on 14-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public GeneratetransferRegisterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult GeneratetransferRegister()
        {
            return View();
        }
        public ActionResult GeneratetransferRegisterform()
        {
            return View();
        }
        public class List
        {
            public int Out_register_rowid { get; set; }
            public string Out_fpoorgn_code { get; set; }
            public string Out_register_no { get; set; }
            public string Out_register_type_code { get; set; }
            public string Out_register_type_desc { get; set; }
            public string Out_register_date { get; set; }
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
        public class AllContext
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
        public class AllApplication
        {
            public AllContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        [HttpPost]
        public ActionResult AllServiceList_old([FromBody]AllContext objContext)
        {
            AllApplication objList = new AllApplication();
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
                string Urlcon = "/allRegister?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (AllApplication)JsonConvert.DeserializeObject(post_data, typeof(AllApplication));

            }
            return Json(objList);
        }

        #region old
        public class Header
        {
            public string In_register_type { get; set; }
            public string In_register_type_desc { get; set; }

            public int In_register_rowid { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_register_no { get; set; }
            public string In_register_date { get; set; }
            public int In_record_count { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Detail
        {
            public int In_servicereq_rowid { get; set; }
            public string In_farmer_code { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_member_name { get; set; }
            public string In_member_sur_name { get; set; }
            public string In_certificate_sno { get; set; }
            public string In_issued_date { get; set; }
            public string In_dist_from { get; set; }
            public string In_dist_to { get; set; }
            public string In_servicereq_no { get; set; }
            public string In_request_date { get; set; }
            public string In_request_type { get; set; }
            public string In_request_type_desc { get; set; }
            public string In_requestsub_type { get; set; }
            public string In_requestsub_type_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_chklist_status_flag { get; set; }
            public string In_sr_comments { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<Detail> Detail { get; set; }

        }
  
        public class Application
        {
            public Context context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        public class SaveHeader
        {
            public int IOU_register_rowid { get; set; }
            public string IOU_register_no { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_register_type { get; set; }
            public string In_register_date { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SaveDetail
        {
            public int In_servicereq_rowid { get; set; }
            public string In_farmer_code { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_member_name { get; set; }
            public string In_member_sur_name { get; set; }
            public string In_certificate_sno { get; set; }
            public string In_issued_date { get; set; }
            public string In_dist_from { get; set; }
            public string In_dist_to { get; set; }
            public string In_servicereq_no { get; set; }
            public string In_request_date { get; set; }
            public string In_request_type { get; set; }
            public string In_requestsub_type { get; set; }
            public string In_status_code { get; set; }
            public string In_chklist_status_flag { get; set; }
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
        #endregion


        [HttpPost]
        public ActionResult FetchServiceList_old([FromBody]Context objContext)
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
                string Urlcon = "/transfer_register?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&register_rowid=" + objContext.Header.In_register_rowid + "&fpoorgn_code=" + objContext.Header.In_fpoorgn_code + "";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveObjRegister_old([FromBody]SaveContext objContext)
        {
            SaveApplication ObjRoot = new SaveApplication();
            SaveContext ObjContext = new SaveContext();
            Document ObjDocuent = new Document();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
            ObjContext.Detail = objContext.Detail;
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
                string Urlcon = "/newTransferRegister"; 
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }

        #region NewAPI

        [HttpPost]
        public AllotemntApplication AllServiceList([FromBody] AllotemntContext objContext)
        {
            AllotemntApplication objList = new AllotemntApplication();
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
                string Urlcon = "FISAllotmentRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
              //  client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISAllotmentRegister/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("allRegister", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (AllotemntApplication)JsonConvert.DeserializeObject(post_data, typeof(AllotemntApplication));
            }
            return objList;
        }

        [HttpPost]
        public FISTrnregApplication FetchServiceList([FromBody] FISTrnregContext objContext)
        {
            FISTrnregApplication objList = new FISTrnregApplication();
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
                string Urlcon = "FISTransferRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
              // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISTransferRegister/");
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISTransferRegister/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //  var response = client.GetAsync("").Result;
                var response = client.PostAsync("transfer_register", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (FISTrnregApplication)JsonConvert.DeserializeObject(post_data, typeof(FISTrnregApplication));

            }
            return objList;
        }
        [HttpPost]
        // public SFISTrnregApplication SaveObjRegister([FromBody] SFISTrnregContext objContext)
        public ActionResult SaveObjRegister([FromBody] SFISTrnregContext objContext)
        {
            SFISTrnregApplication ObjRoot = new SFISTrnregApplication();
            SFISTrnregContext ObjContext = new SFISTrnregContext();
            SFISTrnregDocument ObjDocuent = new SFISTrnregDocument();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
            ObjContext.Detail = objContext.Detail;
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
                string Urlcon = "FISTransferRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);

               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISTransferRegister/");
               // client.BaseAddress = new Uri("http://localhost:60695/api/FISTransferRegister/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newTransferRegister", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();

            }
            return Json(post_data);
        }

        #region list
        public class AllotemntList
        {
            public int Out_register_rowid { get; set; }
            public string Out_fpoorgn_code { get; set; }
            public string Out_register_no { get; set; }
            public string Out_register_type_code { get; set; }
            public string Out_register_type_desc { get; set; }
            public string Out_register_date { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

        }
        public class AllotemntContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<AllotemntList> List { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }

        }

        public class AllotemntApplication
        {
            public AllotemntContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion
         #region fetch
        public class FISTrnregHeader
        {
            public string In_register_type { get; set; }
            public string In_register_type_desc { get; set; }
            public string In_register_no { get; set; }
            public string In_register_date { get; set; }
            public int In_record_count { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FISTrnregDetail
        {
            public int In_servicereq_rowid { get; set; }
            public string In_farmer_code { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_member_name { get; set; }
            public string In_member_sur_name { get; set; }
            public string In_certificate_sno { get; set; }
            public string In_issued_date { get; set; }
            public string In_dist_from { get; set; }
            public string In_dist_to { get; set; }
            public string In_servicereq_no { get; set; }
            public string In_request_date { get; set; }
            public string In_request_type { get; set; }
            public string In_request_type_desc { get; set; }
            public string In_requestsub_type { get; set; }
            public string In_requestsub_type_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_chklist_status_flag { get; set; }
            public string In_sr_comments { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FISTrnregContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FISTrnregHeader Header { get; set; }
            public IList<FISTrnregDetail> Detail { get; set; }
            public Int32 In_register_rowid { get; set; }
            public string In_fpoorgn_code { get; set; }

        }
        public class FISTrnregApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class FISTrnregApplication
        {
            public FISTrnregContext context { get; set; }
            public FISTrnregApplicationException ApplicationException { get; set; }

        }
        #endregion
        #endregion

        #region New API save
        public class SFISTrnregHeader
        {
            public int IOU_register_rowid { get; set; }
            public string IOU_register_no { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_register_type { get; set; }
            public string In_register_date { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SFISTrnregDetail
        {
            public int In_servicereq_rowid { get; set; }
            public string In_farmer_code { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_member_name { get; set; }
            public string In_member_sur_name { get; set; }
            public string In_certificate_sno { get; set; }
            public string In_issued_date { get; set; }
            public int In_dist_from { get; set; }
            public int In_dist_to { get; set; }
            public string In_servicereq_no { get; set; }
            public string In_request_date { get; set; }
            public string In_request_type { get; set; }
            public string In_requestsub_type { get; set; }
            public string In_status_code { get; set; }
            public string In_chklist_status_flag { get; set; }
            public string In_sr_comments { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SFISTrnregContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SFISTrnregHeader Header { get; set; }
            public IList<SFISTrnregDetail> Detail { get; set; }

        }
        public class SFISTrnregDocument
        {
            public SFISTrnregContext context { get; set; }

        }
        public class SFISTrnregApplication
        {
            public SFISTrnregDocument document { get; set; }

        }
        #endregion
    }
}