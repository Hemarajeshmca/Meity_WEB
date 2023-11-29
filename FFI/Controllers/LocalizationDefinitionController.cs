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
    public class LocalizationDefinitionController : Controller
    {
        //
        // GET: /LocalizationDefinition/
        public ActionResult LocalizationDefinition_List()
        {
            return View();
        }

        public ActionResult LocalizationDefinition_Form()
        {
            return View();
        }


        #region xml Local DropDown Load
        public string Xmlcmb_Localbind()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Orgl", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "LocalDrop.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/Activity/Local/ScreenName");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion

        #region xml Local Screengrid Load
        public string LocalScreen()
        {

            DataTable dt = new DataTable();
            dt.Columns.Add("control_type", typeof(string));
            dt.Columns.Add("control_id", typeof(string));
            dt.Columns.Add("des_eng", typeof(string));
            dt.Columns.Add("des_loc_lang", typeof(string));

            var XmlUserFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "LocalGrid.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlUserFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/Local/Screen");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["control_type"] = getidname.GetElementsByTagName("controltype")[0].InnerText;
                dr["control_id"] = getidname.GetElementsByTagName("control")[0].InnerText;
                dr["des_eng"] = getidname.GetElementsByTagName("desEnglish")[0].InnerText;
                dr["des_loc_lang"] = getidname.GetElementsByTagName("deslocal")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion

        #region xml Local grid Load
        public string LocalGrid()
        {

            DataTable dt = new DataTable();
            dt.Columns.Add("column_id", typeof(string));
            dt.Columns.Add("des_eng", typeof(string));
            dt.Columns.Add("des_loc_lang", typeof(string));

            var XmlUserFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "LocalGrid.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlUserFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/Local/Grid");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["column_id"] = getidname.GetElementsByTagName("column")[0].InnerText;
                dr["des_eng"] = getidname.GetElementsByTagName("desEnglish")[0].InnerText;
                dr["des_loc_lang"] = getidname.GetElementsByTagName("deslocal")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion

        #region xml Local Frontgrid Load
        public string LocalFront()
        {

            DataTable dt = new DataTable();
            dt.Columns.Add("error_code", typeof(int));
            dt.Columns.Add("des_eng", typeof(string));
            dt.Columns.Add("des_loc_lang", typeof(string));

            var XmlUserFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "LocalGrid.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlUserFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/Local/Front");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["error_code"] = Convert.ToInt32(getidname.GetElementsByTagName("error")[0].InnerText);
                dr["des_eng"] = getidname.GetElementsByTagName("desEnglish")[0].InnerText;
                dr["des_loc_lang"] = getidname.GetElementsByTagName("deslocal")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion
        private IConfiguration _configuration;
        public LocalizationDefinitionController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";

        [HttpPost]
        public ActionResult LocalizationDefinition([FromBody]Context objContext)
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
                // string Urlcon = "/localization?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&activity_code=" + objContext.activity_code;
                string Urlcon = "Admin_Localization/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.GetAsync("localization?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&activity_code=" + objContext.activity_code + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }

        [HttpPost]
        public ActionResult LocalizationDefinitionSave([FromBody]Contextsave objContext)
        {
            Applicationsave objRoot = new Applicationsave();
            Document objDoc = new Document();
            Contextsave objContextDetails = new Contextsave();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
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
                string Urlcon = "Admin_Localization/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newlocalization", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();

            }
            return Json(post_data);
        }
        #region local model
        public class Screen
        {
            public int In_localization_rowid { get; set; }
            public string In_control_type { get; set; }
            public string In_control_type_desc { get; set; }
            public string In_control_code { get; set; }
            public string In_data_field { get; set; }
            public string In_locale_desc { get; set; }
            public string In_locale_ll_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FE
        {
            public int In_localization_rowid { get; set; }
            public string In_control_type { get; set; }
            public string In_control_type_desc { get; set; }
            public string In_control_code { get; set; }
            public string In_data_field { get; set; }
            public string In_locale_desc { get; set; }
            public string In_locale_ll_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class BE
        {
            public int In_localization_rowid { get; set; }
            public string In_control_type { get; set; }
            public string In_control_type_desc { get; set; }
            public string In_control_code { get; set; }
            public string In_data_field { get; set; }
            public string In_locale_desc { get; set; }
            public string In_locale_ll_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }

            public string activity_code { get; set; }
            public IList<Screen> Screen { get; set; }
            public IList<FE> FE { get; set; }
            public IList<BE> BE { get; set; }

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

        #region Save model
        public class Detail
        {
            public int In_localization_rowid { get; set; }
            public string In_activity_code { get; set; }
            public string In_control_type { get; set; }
            public string In_control_code { get; set; }
            public string In_data_field { get; set; }
            public string In_locale_desc { get; set; }
            public string In_locale_ll_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Contextsave
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<Detail> Detail { get; set; }

        }
        public class Document
        {
            public Contextsave context { get; set; }

        }
        public class Applicationsave
        {
            public Document document { get; set; }

        }
        #endregion
    }
}