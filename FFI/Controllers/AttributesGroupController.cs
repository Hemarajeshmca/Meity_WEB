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
    public class AttributesGroupController : Controller
    {
        // GET: AttributesGroup
        public ActionResult AttributesGrouplist()
        {
            return View();
        }

        public ActionResult AttributesGroupForm()
        {
            return View();
        }

        private IConfiguration _configuration;
        public AttributesGroupController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        //  public JsonResult AttributesList([FromBody]Context context)
        public ActionResult AttributesList(string org, string locn, string user, string lang, string filterby_option, string filterby_code, string filterby_fromvalue, string filterby_tovalue)
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
                // string Urlcon = "/all_attribute?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "Admin_AttributeGroup/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("all_attribute?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&filterby_option=" + filterby_option + "&filterby_code=" + filterby_code + "&filterby_fromvalue=" + filterby_fromvalue + " &filterby_tovalue = " + filterby_tovalue + "").Result;
                // var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        [HttpPost]
        //public ActionResult Attributesfetch([FromBody] FContext objContext)
        public ActionResult Attributesfetch(string userId, string orgnId, string locnId, string localeId, int entitygrp_rowid, string entitygrp_code)
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
                //string Urlcon = "/attr_group?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&entitygrp_rowid=" + objContext.entitygrp_rowid + "&entitygrp_code=" + objContext.entitygrp_code;
                string Urlcon = "Admin_AttributeGroup/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("attr_group?org=" + orgnId + "&locn=" + locnId + "&user=" + userId + "&lang=" + localeId + "&entitygrp_rowid=" + entitygrp_rowid + "&entitygrp_code=" + entitygrp_code + "").Result;
                // var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }

        [HttpPost]
        public ActionResult AttributesSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Detail = objContext.Detail;            
            objContextDetails.Header = objContext.Header;

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
                // string Urlcon = "/newattributegroup";
                string Urlcon = "Admin_AttributeGroup/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newattributegroup", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region Comman Grid List and Field
        [HttpPost]
        public string CommanGridField(string GetName)
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("attribute_group_code", typeof(string));
            dt.Columns.Add("attribute_group_code_name", typeof(string));
            dt.Columns.Add("Created_Date", typeof(string));
            dt.Columns.Add("Status", typeof(string));
           
            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "entitygrp_enUS.xml"));
            XmlDocument xmlload = new XmlDocument();
            xmlload.Load(XmlRoleFullPath);
            XmlNodeList nodevalue = xmlload.SelectNodes("//root//row");
            for (int i = 0; i < nodevalue.Count; i++)
            {
                DataRow dr = dt.NewRow();
                dr["attribute_group_code"] = nodevalue[i]["entitygrp_code"].InnerXml;
                dr["attribute_group_code_name"] = nodevalue[i]["description"].InnerXml;
                dr["Created_Date"] = "04/11/2016";
                dr["Status"] = nodevalue[i]["status_code"].InnerXml;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }

        #endregion




        #region Grid combo List Load
        [HttpPost]
        public string GridComboField(string GetName)
        {
            DataTable dt = new DataTable();
            //dt.Columns.Add("sl_no", typeof(string));
            //dt.Columns.Add("attribute_name", typeof(string));
            //dt.Columns.Add("depends_on", typeof(string));
            dt.Columns.Add("attribute_type", typeof(string));
            //dt.Columns.Add("length", typeof(string));

            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "entity_enUS.xml"));
            XmlDocument xmlload = new XmlDocument();
            xmlload.Load(XmlRoleFullPath);
            XmlNodeList nodevalue = xmlload.SelectNodes("//root//row");
            for (int i = 0; i < nodevalue.Count; i++)
            {
                DataRow dr = dt.NewRow();
                //dr["sl_no"] = nodevalue[i]["row_slno"].InnerXml;
                //dr["attribute_name"] = nodevalue[i]["description"].InnerXml;
                //dr["depends_on"] = "";
                dr["attribute_type"] = nodevalue[i]["entity_type"].InnerXml;
                //dr["length"] = nodevalue[i]["entity_length"].InnerXml;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }

        #endregion
        #region fetch
        public class List
        {
            public int Out_entitygrp_rowid { get; set; }
            public string Out_entitygrp_code { get; set; }
            public string Out_entitygrp_name { get; set; }
            public string Out_entitygrp_ll_name { get; set; }
            public string Out_multiline_flag { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

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
        public class Header
        {
            public string In_entitygrp_name { get; set; }
            public string In_entitygrp_ll_name { get; set; }
            public string In_multiline_flag { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Detail
        {
            public int In_entity_rowid { get; set; }
            public int In_row_slno { get; set; }
            public string In_entity_code { get; set; }
            public string In_entity_name { get; set; }
            public string In_entity_ll_name { get; set; }
            public string In_entity_type { get; set; }
            public string In_entity_type_desc { get; set; }
            public string In_entity_length { get; set; }
            public int In_entity_width { get; set; }
            public string In_depend_code { get; set; }
            public string In_depend_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<Detail> Detail { get; set; }
            public string entitygrp_code { get; set; }
            public int entitygrp_rowid { get; set; }

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
        public class SHeader
        {
            public int In_entitygrp_rowid { get; set; }
            public string In_entitygrp_code { get; set; }
            public string In_entitygrp_name { get; set; }
            public string In_entitygrp_ll_name { get; set; }
            public string In_multiline_flag { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SDetail
        {
            public int In_entity_rowid { get; set; }
            public int In_row_slno { get; set; }
            public string In_entity_code { get; set; }
            public string In_entity_name { get; set; }
            public string In_entity_ll_name { get; set; }
            public string In_entity_type { get; set; }
            public string In_entity_length { get; set; }
            public int In_entity_width { get; set; }
            public string In_depend_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SHeader Header { get; set; }
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