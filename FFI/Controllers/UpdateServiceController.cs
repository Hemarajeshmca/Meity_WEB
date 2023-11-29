using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Configuration;


namespace FFI.Controllers
{
    public class UpdateServiceController : Controller
    {
        // GET: UpdateService
        //Muralidharan developed on 13-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public UpdateServiceController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult UpdateService()
        {
            return View();
        }
        #region xml Local DropDown Load
        public string Xmlcmb_Localbind()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Orgl", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "Generatexml.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/servicestatus");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion

        public class Detail
        {
            
            public int In_servicereq_rowid { get; set; }
            public string In_servicereq_no { get; set; }
            public string In_servicereq_date { get; set; }
            public string In_request_type { get; set; }
            public string In_request_type_desc { get; set; }
            public string In_requestsub_type { get; set; }
            public string In_requestsub_type_desc { get; set; }
            public string In_farmer_name { get; set; }
            public string In_sur_name { get; set; }
            public string In_certificate_sno { get; set; }
            public string In_Approvaldate { get; set; }
            public string In_processstatus { get; set; }
            public string In_process_status_desc { get; set; }
            public string In_reject_comments { get; set; }
            public string In_sr_comments { get; set; }
            public string In_certificate_no { get; set; }
            public string In_certificate_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_chklist_status_flag { get; set; }

        }
        public class Header
        {
            public string In_fpoorgn_code { get; set; }
            public string In_process_status { get; set; }
            public string In_Approval_date { get; set; }
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
        [HttpPost]
        public ActionResult FetchServiceList([FromBody]Context objContext)
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
                string Urlcon = "FISUpdateService/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISUpdateService/");
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISUpdateService/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("service_req_update", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
      
        public class SaveDetail
        {
            public int In_servicereq_rowid { get; set; }
            
            public string In_servicereq_no { get; set; }
            public string In_request_type { get; set; }
            public string In_requestsub_type { get; set; }
            public string In_farmer_name { get; set; }
            public string In_sur_name { get; set; }
            public string In_certificate_sno { get; set; }
            public string In_Approvaldate { get; set; }
            public string In_processstatus { get; set; }
            public string In_reject_comments { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_chklist_status_flag { get; set; }
            public string In_sr_comments { get; set; }

        }
        public class SaveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
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
        [HttpPost]
        public ActionResult SaveServiceReq([FromBody]SaveContext objContext)
        {
            SaveApplication ObjRoot = new SaveApplication();
            SaveContext ObjContext = new SaveContext();
            Document ObjDocuent = new Document();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
            ObjContext.userId = objContext.userId;
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
                string Urlcon = "FISUpdateService/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISUpdateService/");
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISUpdateService/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newservicerequestUpdate", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
    }
}