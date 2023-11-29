using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace FFI.Controllers
{
    public class UpdateFpoController : Controller
    {
        // GET: UpdateFpo
        public ActionResult UpdateFpo()
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
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/update/report");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion
        private IConfiguration _configuration;
        public UpdateFpoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public ActionResult UpdateFpofetch([FromBody] Context objContext)
        {
            Application objout = new Application();
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
                string Urlcon = "FISUpdateFpo/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISUpdateFpo/");
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISUpdateFpo/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("update_share", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objout);
        }
        [HttpPost]
        public ActionResult UpdateFpoSave([FromBody] UpdateSaveContext objContext)
        {
            UpdateSaveApplication objRoot = new UpdateSaveApplication();
            UpdateSaveDocument objDoc = new UpdateSaveDocument();
            UpdateSaveContext objContextDetails = new UpdateSaveContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.Detail = objContext.Detail;

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
                string Urlcon = "FISUpdateFpo/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISUpdateFpo/");
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISUpdateFpo/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newUpdateShareAllotment", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region fetch
        public class Header
        {
            public string IOU_fpoorgn_code { get; set; }
            public string IOU_alloc_status_code { get; set; }
            public string IOU_board_approval_date { get; set; }

        }
        public class Detail
        {
            public int In_shareapp_rowid { get; set; }
            public string In_shareapp_date { get; set; }
            public string In_shareapp_no { get; set; }
            public string In_member_name { get; set; }
            public int In_applied_shares { get; set; }
            public int In_approved_shares { get; set; }
            public int In_rejected_shares { get; set; }
            public string In_rejected_comment { get; set; }
            public string In_approved_date { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
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

            public string fpoorgn_code { get; set; }
            public string alloc_status_code { get; set; }
            public string board_approval_date { get; set; }

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
        #endregion
        #region save
        public class UpdateSaveHeader
        {
            public string In_fpoorgn_code { get; set; }
            public string In_alloc_status_code { get; set; }

        }
        public class UpdateSaveDetail
        {
            public int In_shareapp_rowid { get; set; }
            public string In_shareapp_no { get; set; }
            public string In_member_name { get; set; }
            public int In_applied_shares { get; set; }
            public int In_approved_shares { get; set; }
            public int In_rejected_shares { get; set; }
            public string In_rejected_comment { get; set; }
            public string In_approved_date { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class UpdateSaveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public UpdateSaveHeader Header { get; set; }
            public IList<UpdateSaveDetail> Detail { get; set; }

        }
        public class UpdateSaveDocument
        {
            public UpdateSaveContext context { get; set; }
            public UpdateSaveApplication ApplicationException { get; set; }

        }
        public class UpdateSaveApplication
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
            public UpdateSaveDocument document { get; set; }


        }

        #endregion
    }
}