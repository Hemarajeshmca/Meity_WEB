﻿using Newtonsoft.Json;
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
    public class GenerateController : Controller
    {
        // GET: Generate
        public ActionResult Generate()
        {
            return View();
        }
        public ActionResult GenerateForm()
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
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/row/gen1");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion
        //secound Combo
        #region xml Local DropDown Load
        public string Xmlcmb_Localbind1()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Org1", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "Generatexml.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/row1/gen");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Org1"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion
        //third combo
        #region xml Local DropDown Load
        public string Xmlcmb_Localbind2()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Org3", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "UserXml.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/UserDetails/b");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Org3"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion
        private IConfiguration _configuration;
        public GenerateController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult Generatelistfetch([FromBody]Context context)
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
                string Urlcon = "FISAllotmentRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISAllotmentRegister/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allRegister", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult Generatefetch([FromBody] FContext objContext)
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
                string Urlcon = "FISAllotmentRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //  client.BaseAddress = new Uri("http://localhost:60695/api/FISAllotmentRegister/");
                //  client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISAllotmentRegister/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //  var response = client.GetAsync("").Result;
                var response = client.PostAsync("allotment_register", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        [HttpPost]
        public ActionResult GenerateSave([FromBody] SContext objContext)
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
                string Urlcon = "FISAllotmentRegister/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               
              //  client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISAllotmentRegister/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                // var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newAllotmentRegister", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region list
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
        #region fetch
        public class Header
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
        public class Detail
        {
            public int In_shareapp_rowid { get; set; }
            public string In_farmer_code { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_shareapp_no { get; set; }
            public string In_member_name { get; set; }
            public string In_member_sur_name { get; set; }
            public int In_applied_shares { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_chklist_status_flag { get; set; }
            public string In_shareapp_remark { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<Detail> Detail { get; set; }
            public int register_rowid { get; set; }
            public string fpoorgn_code { get; set; }

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
            public int IOU_register_rowid { get; set; }
            public string IOU_register_no { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_register_type { get; set; }
            public string In_register_date { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SDetail
        {
            public int In_shareapp_rowid { get; set; }
            public string In_shareapp_no { get; set; }
            public string In_farmer_code { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_member_name { get; set; }
            public string In_member_sur_name { get; set; }
            public int In_applied_shares { get; set; }
            public string In_status_code { get; set; }
            public string In_chklist_status_flag { get; set; }
            public string In_shareapp_remark { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

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