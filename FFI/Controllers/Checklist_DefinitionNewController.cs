using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Xml;

namespace FFI.Controllers
{
    public class Checklist_DefinitionNewController : Controller
    {
        // GET: Checklist_DefinitionNewController
        public ActionResult Checklist_DefinitionNew()
        {
            return View();
        }

        public ActionResult Checklist_DefinitionNew_List()
        {
            return View();
        }

        #region xml data DropDown Load
        public string Xmlcmb_Activitybind()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Screens", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "ActivityXML.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/Activity/Screen");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Screens"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }

        #endregion


        #region xml data Products
        public string Products()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Dropd1", typeof(string));
            DT.Columns.Add("Dropd2", typeof(string));
            DT.Columns.Add("Remark", typeof(string));
            DT.Columns.Add("Mandatory", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "Checklist.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/Activity/Screen");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Dropd1"] = RoleNodeGetVal.InnerText;
                dr["Dropd2"] = RoleNodeGetVal.InnerText;
                dr["Remark"] = RoleNodeGetVal.InnerText;
                dr["Mandatory"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }

        #endregion

        private IConfiguration _configuration;
        public Checklist_DefinitionNewController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public ActionResult Checklist_Definitionfetch([FromBody] FContext objContext)
        {
            FApplication objout = new FApplication();
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
                //string Urlcon = "/checklist?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&chklst_rowid=" + objContext.chklst_rowid + "&activity_code=" + objContext.activity_code;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.DefaultRequestHeaders.Accept.Clear();
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                //Stream data = response.Content.ReadAsStreamAsync().Result;
                //StreamReader reader = new StreamReader(data);
                //post_data = reader.ReadToEnd();
                //objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
               // urlstring = "http://localhost:51379/api/";
                string Urlcon = "ChecklistDefinition/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                // client.BaseAddress = new Uri("http://169.38.77.190:101/api/ICDProduct/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("ChecklistDefinition_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        [HttpPost]
        public ActionResult Checklist_DefinitionSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.Element = objContext.Element;

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
                //string Urlcon = "/newChecklist";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.DefaultRequestHeaders.Accept.Clear();
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                //Stream data = response.Content.ReadAsStreamAsync().Result;
                //StreamReader reader = new StreamReader(data);
                //post_data = reader.ReadToEnd();
              //  urlstring = "http://localhost:51379/api/";
                string Urlcon = "ChecklistDefinition/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("ChecklistDefinition_save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region fetch
        public class Header
        {
            public int IOU_chklst_rowid { get; set; }
            public string IOU_activity_code { get; set; }
            public string In_activity_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Element
        {
            public int In_chklstelement_rowid { get; set; }
            public string In_element_code { get; set; }
            public string In_element_desc { get; set; }
            public string In_subelement_code { get; set; }
            public string In_subelement_desc { get; set; }
            public string In_mandatory_flag { get; set; }
            public string In_allowed_option { get; set; }
            public string In_any_all_flag { get; set; }
            public string In_any_all_flag_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<Element> Element { get; set; }
            public string activity_code { get; set; }
            public int chklst_rowid { get; set; }           
                

        }
        public class ApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class FApplication
        {
            public FContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion
        #region SAVE
        public class SHeader
        {
            public int IOU_chklst_rowid { get; set; }
            public string In_activity_code { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SElement
        {
            public int In_chklstelement_rowid { get; set; }
            public string In_element_code { get; set; }
            public string In_subelement_code { get; set; }
            public string In_mandatory_flag { get; set; }
            public string In_allowed_option { get; set; }
            public string In_any_all_flag { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SHeader Header { get; set; }
            public IList<SElement> Element { get; set; }

        }
        public class Document
        {
            public SContext context { get; set; }

        }
        public class SApplication
        {
            public Document document { get; set; }

        }
        #endregion
    }
}