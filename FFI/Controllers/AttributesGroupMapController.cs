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
    public class AttributesGroupMapController : Controller
    {
        private IConfiguration _configuration;
        public AttributesGroupMapController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        // GET: AttributesGroupMap
        public ActionResult AttributesGroupMaplist()
        {
            return View();
        }

        public ActionResult AttributeGroupMapForm()
        {
            return View();
        }

        #region Comman Grid List and Field
        [HttpPost]
        public string CommanGridField()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Orgl", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "entitygrp_enUs.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/row/description");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }

        #endregion

        #region Grid combo List Load
        [HttpPost]
        public string GridComboField(string GetName)
        {
            DataTable dt = new DataTable();          
            dt.Columns.Add("attribute_group", typeof(string));            
            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "entitygrp_enUs.xml"));
            XmlDocument xmlload = new XmlDocument();
            xmlload.Load(XmlRoleFullPath);
            XmlNodeList nodevalue = xmlload.SelectNodes("//root//row");
            for (int i = 0; i < nodevalue.Count; i++)
            {
                DataRow dr = dt.NewRow();               
                dr["attribute_group"] = nodevalue[i]["description"].InnerXml;
               dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }

        #endregion

        [HttpPost]
        // public JsonResult AttributeGroupList([FromBody]Context context)
        public ActionResult AttributeGroupList(string org, string locn, string user, string lang, string filterby_option, string filterby_code, string filterby_fromvalue, string filterby_tovalue)
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
                //string Urlcon = "/all_attribute_activity?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "Admin_AttributeGroupMapping/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("all_attribute_activity?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&filterby_option=" + filterby_option + "&filterby_code=" + filterby_code + "&filterby_fromvalue=" + filterby_fromvalue + " &filterby_tovalue = " + filterby_tovalue + "").Result;
                //var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        [HttpPost]
        //   public ActionResult AttributeGroupfetch([FromBody] FContext objContext)
        public ActionResult AttributeGroupfetch(string userId, string orgnId, string locnId, string localeId, string activity_code)
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
                // string Urlcon = "/attr_grp_activity?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&activity_code=" + objContext.activity_code;
                string Urlcon = "Admin_AttributeGroupMapping/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("attr_grp_activity?org=" + orgnId + "&locn=" + locnId + "&user=" + userId + "&lang=" + localeId + "&activity_code=" + activity_code + "").Result;
                // var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        [HttpPost]
        public ActionResult AttributeGroupSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
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
                // string Urlcon = "/newattrgroupactivity";
                string Urlcon = "Admin_AttributeGroupMapping/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newattrgroupactivity", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region list fetch
        public class List
        {
            public int Out_entitygrpacitivity_rowid { get; set; }
            public string Out_activity_code { get; set; }
            public string Out_activity_desc { get; set; }
            public string Out_entitygrp_code { get; set; }
            public string Out_entitygrp_name { get; set; }
            public int Out_row_slno { get; set; }
            public string Out_mode_flag { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
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
        #endregion
        #region single fetch
        public class Detail
        {
            public int In_entitygrpacitivity_rowid { get; set; }
            public string In_entitygrp_code { get; set; }
            public string In_entitygrp_name { get; set; }
            public int In_row_slno { get; set; }
            public string In_mode_flag { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<Detail> Detail { get; set; }
            public string activity_code { get; set; }

        }
        public class FApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class FApplication
        {
            public FContext context { get; set; }
            public FApplicationException ApplicationException { get; set; }

        }
        #endregion
        #region save
        public class Header
        {
            public string In_activity_code { get; set; }

        }
        public class SDetail
        {
            public int In_entitygrpacitivity_rowid { get; set; }
            public string In_entitygrp_code { get; set; }
            public int In_row_slno { get; set; }
            public string In_mode_flag { get; set; }
            public string In_status_code { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<SDetail> Detail { get; set; }

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