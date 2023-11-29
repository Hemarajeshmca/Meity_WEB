using Newtonsoft.Json;
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
using System.Data;

namespace FFI.Controllers
{
    public class DuplicateRegisterController : Controller
    {
        private IConfiguration _configuration;
        string urlstring = "";
        public DuplicateRegisterController(IConfiguration configuration)
        {
            _configuration = configuration;
            // GET: DuplicateRegister
        }
            public ActionResult DuplicateRegisterform()
        {
            return View();
        }
        public ActionResult DuplicateRegister()
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
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/dub");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion


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
                //string Urlcon = "/allRegister?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISAllotmentRegister/");
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISAllotmentRegister/");
                string Urlcon = "FISAllotmentRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
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

        public FISDupRegApplication FetchServiceList([FromBody] FISDupRegContext objContext)
        {
            FISDupRegApplication objList = new FISDupRegApplication();
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
                //string Urlcon = "/transfer_register?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&register_rowid=" + objContext.Header.In_register_rowid + "&fpoorgn_code=" + objContext.Header.In_fpoorgn_code + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISDupRegister/");
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISDupRegister/");
                string Urlcon = "FISDupRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //  var response = client.GetAsync("").Result;
                var response = client.PostAsync("duplicate_register", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (FISDupRegApplication)JsonConvert.DeserializeObject(post_data, typeof(FISDupRegApplication));

            }
            return objList;
        }
        [HttpPost]
        public ActionResult SaveDuplicateRegister([FromBody] SFISDupRegContext objContext)
        {
            SFISDupRegApplication ObjRoot = new SFISDupRegApplication();
            SFISDupRegContext ObjContext = new SFISDupRegContext();
            SFISDupRegDocument ObjDocuent = new SFISDupRegDocument();

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
                //string Urlcon = "/newTransferRegister";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISDupRegister/");
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISDupRegister/");
                string Urlcon = "FISDupRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newDuplicateRegister", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                //ObjRoot = (SFISDupRegApplication)JsonConvert.DeserializeObject(post_data, typeof(SFISDupRegApplication));
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


        #region Fetch
        public class FISDupRegHeader
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
        public class FISDupRegDetail
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
        public class FISDupRegContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FISDupRegHeader Header { get; set; }
            public IList<FISDupRegDetail> Detail { get; set; }
            public Int32 In_register_rowid { get; set; }
            public string In_fpoorgn_code { get; set; }
        }
        public class FISDupRegApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class FISDupRegApplication
        {
            public FISDupRegContext context { get; set; }
            public FISDupRegApplicationException ApplicationException { get; set; }

        }

        #endregion

        #region save
        public class SFISDupRegHeader
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
        public class SFISDupRegDetail
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
        public class SFISDupRegContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SFISDupRegHeader Header { get; set; }
            public IList<SFISDupRegDetail> Detail { get; set; }

        }
        public class SFISDupRegDocument
        {
            public SFISDupRegContext context { get; set; }

        }
        public class SFISDupRegApplication
        {
            public SFISDupRegDocument document { get; set; }

        }
        #endregion
    }
}