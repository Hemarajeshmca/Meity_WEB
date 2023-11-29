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
    public class GenerateObjRegisterController : Controller
    {
        // GET: GenerateObjRegister
        //Muralidharan developed on 13-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public GenerateObjRegisterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult GenerateObjRegister()
        {
            return View();
        }
        public ActionResult GenerateObjRegisterForm()
        {
            return View();
        }
        //first combo
        #region xml Local DropDown Load
        public string Xmlcmb_Localbind()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Orgl", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "Generatexml.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/report");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion

        #region old
        public class Header
        {
            public string In_register_type { get; set; }
            public string In_register_type_desc { get; set; }
            public int In_register_rowid { get; set; }
            public string In_register_no { get; set; }
            public string In_register_date { get; set; }
            public string In_fpoorgn_code { get; set; }
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
        public class AllContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FarmerFilter Filter { get; set; }
            public IList<List> List { get; set; }

        }
     
        public class AllApplication
        {
            public AllContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }

        #endregion
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
        [HttpPost]
        public fisobregisApplication FetchServiceList([FromBody] fisobregisContext objContext)
        {
            fisobregisApplication objList = new fisobregisApplication();
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
                string Urlcon = "FISobjRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
              //  client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISobjRegister/");
               // client.BaseAddress = new Uri("http://localhost:9654/api/FISobjRegister/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("objection_register", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (fisobregisApplication)JsonConvert.DeserializeObject(post_data, typeof(fisobregisApplication));

            }
            return objList;
        }

        #region old save
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
        public SfisobregisDocument SaveObjRegister([FromBody] SfisobregisContext objContext)
        {
            SfisobregisApplication ObjRoot = new SfisobregisApplication();
            SfisobregisContext ObjContext = new SfisobregisContext();
            SfisobregisDocument ObjDocuent = new SfisobregisDocument();

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
                string Urlcon = "FISobjRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                   // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISobjRegister/");

                //client.BaseAddress = new Uri("http://localhost:9654/API/FISobjRegister/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                // var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newObjectionRegister", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
               // ObjRoot = (SfisobregisApplication)JsonConvert.DeserializeObject(post_data,typeof(SfisobregisApplication));
                ObjDocuent= (SfisobregisDocument)JsonConvert.DeserializeObject(post_data, typeof(SfisobregisDocument));
            }
            return ObjDocuent;
        }

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
        #region NewAPI
        public class fisobregisHeader
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
        public class fisobregisDetail
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
        public class fisobregisContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public fisobregisHeader Header { get; set; }
            public IList<fisobregisDetail> Detail { get; set; }
            public Int32 register_rowid { get; set; }
            public string fpoorgn_code { get; set; }

        }
        public class fisobregisApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class fisobregisApplication
        {
            public fisobregisContext context { get; set; }
            public fisobregisApplicationException ApplicationException { get; set; }

        }
        #endregion


        #region New API SAVE
        public class SfisobregisHeader
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
        public class SfisobregisDetail
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
        public class SfisobregisContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SfisobregisHeader Header { get; set; }
            public IList<SfisobregisDetail> Detail { get; set; }

        }
        public class SfisobregisDocument
        {
            public SfisobregisContext context { get; set; }

        }
        public class SfisobregisApplication
        {
            public SfisobregisDocument document { get; set; }

        }
        #endregion
    }
}