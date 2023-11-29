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
    public class ReportsController : Controller
    {
        //
        // GET: /Reports/
        public ActionResult Reportslist()
        {
            return View();
        }
        public ActionResult ReportsForm()
        {
            return View();
        }
        #region Comman Grid List and Field
        [HttpPost]
        public string CommanGridlist()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("report_code", typeof(string));
            dt.Columns.Add("report_name", typeof(string));
            dt.Columns.Add("status_code", typeof(string));
            dt.Columns.Add("report_filname", typeof(string));
            dt.Columns.Add("created_Date", typeof(string));
            var XmlBankFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "report.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlBankFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/root/row");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["report_code"] = getidname.GetElementsByTagName("report_code")[0].InnerText;
                dr["report_name"] = getidname.GetElementsByTagName("report_code")[0].InnerText;
                dr["report_filname"] = getidname.GetElementsByTagName("report_source")[0].InnerText;
                dr["status_code"] = getidname.GetElementsByTagName("status_code")[0].InnerText;
                dr["created_date"] = getidname.GetElementsByTagName("date")[0].InnerText;
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
          
            dt.Columns.Add("parameter_type", typeof(string));
           

            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "ReportsXml.xml"));
            XmlDocument xmlload = new XmlDocument();
            xmlload.Load(XmlRoleFullPath);
            XmlNodeList nodevalue = xmlload.SelectNodes("//root//row");
            for (int i = 0; i < nodevalue.Count; i++)
            {
                DataRow dr = dt.NewRow();
               
                dr["parameter_type"] = nodevalue[i]["param_type"].InnerXml;
               
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }

        #endregion

        private IConfiguration _configuration;
        public ReportsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        //public ActionResult ReportsListfetch([FromBody]Context objContext)
        public ActionResult ReportsListfetch(string org, string locn, string user, string lang, string filterby_option, string filterby_code, string filterby_fromvalue, string filterby_tovalue)
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
                // string Urlcon = "/allreport?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.FilterBy_Option + "&filterby_code=" + objContext.FilterBy_Code + "&filterby_fromvalue=" + objContext.FilterBy_FromValue + "&filterby_tovalue=" + objContext.FilterBy_ToValue + "";
                string Urlcon = "Admin_Reportconfig/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.GetAsync("allreport?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&filterby_option=" + filterby_option + "&filterby_code=" + filterby_code + "&filterby_fromvalue=" + filterby_fromvalue + " &filterby_tovalue = " + filterby_tovalue + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        [HttpPost]
        //  public ActionResult GetReportsList([FromBody] FContext objContext)
        public ActionResult GetReportsList(string userId, string orgnId, string locnId, string localeId, int report_rowid)
        {
            FContext objout = new FContext();
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
                // string Urlcon = "/report_config?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&report_rowid=" + objContext.Header.IOU_report_rowid;
                string Urlcon = "Admin_Reportconfig/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.GetAsync("report_config?org=" + orgnId + "&locn=" + locnId + "&user=" + userId + "&lang=" + localeId + "&report_rowid=" + report_rowid + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FContext)JsonConvert.DeserializeObject(post_data, typeof(FContext));
            }
            return Json(post_data);
        }

        [HttpPost]
        public ActionResult SaveReportsList([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.Param_detail = objContext.Param_detail;

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
                // string Urlcon = "/newreportsconfig";
                string Urlcon = "Admin_Reportconfig/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newreportsconfig", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region list fetch
        public class List
        {
            public int Out_report_rowid { get; set; }
            public string Out_module_code { get; set; }
            public string Out_module_name { get; set; }
            public string Out_report_code { get; set; }
            public string Out_report_name { get; set; }
            public string Out_report_type { get; set; }
            public string Out_report_type_desc { get; set; }
            public string out_report_source { get; set; }
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
        public class Header
        {
            public int IOU_report_rowid { get; set; }
            public string In_module_code { get; set; }
            public string In_report_code { get; set; }
            public string In_report_name { get; set; }
            public string In_report_type { get; set; }
            public string In_report_type_desc { get; set; }
            public string In_report_source { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Param_detail
        {
            public int In_reportparam_rowid { get; set; }
            public int In_param_slno { get; set; }
            public string In_param_name { get; set; }
            public string In_param_desc { get; set; }
            public string In_param_type { get; set; }
            public string In_param_type_desc { get; set; }
            public string In_param_value { get; set; }
            public string In_param_value_desc { get; set; }
            public string In_mandatory_flag { get; set; }
            public string In_status_code { get; set; }
            public string in_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<Param_detail> Param_detail { get; set; }

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
            public int IOU_report_rowid { get; set; }
            public string In_module_code { get; set; }
            public string In_report_code { get; set; }
            public string In_report_name { get; set; }
            public string In_report_type { get; set; }
            public string In_report_source { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SParam_detail
        {
            public int In_reportparam_rowid { get; set; }
            public int In_param_slno { get; set; }
            public string In_param_name { get; set; }
            public string In_param_desc { get; set; }
            public string In_param_type { get; set; }
            public string In_param_value { get; set; }
            public string In_mandatory_flag { get; set; }
            public string Instatus_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SHeader Header { get; set; }
            public IList<SParam_detail> Param_detail { get; set; }

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