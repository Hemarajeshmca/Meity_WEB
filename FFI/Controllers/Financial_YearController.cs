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
    public class Financial_YearController : Controller
    {
        private IConfiguration _configuration;
        public Financial_YearController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        // GET: Financial_Year
        public ActionResult Financial_Year()
        {
            return View();
        }
        [HttpPost]
        //  public JsonResult Financial_YearList([FromBody]Context context)
        public ActionResult Financial_YearList(string org, string locn, string user, string lang, string filterby_option, string filterby_code, string filterby_fromvalue, string filterby_tovalue)
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

                // string Urlcon = "/allfin_year?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "Admin_FinancialYear/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("allfinyear?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&filterby_option=" + filterby_option + "&filterby_code=" + filterby_code + "&filterby_fromvalue=" + filterby_fromvalue + " &filterby_tovalue = " + filterby_tovalue + "").Result;
                //  var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult FetchFinancialYear(string org, string locn, string user, string lang, int finyear_rowid)
        //public ActionResult GetFinancial_Year([FromBody]FContext objContext)
        {
            FApplication objfetch = new FApplication();
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
                // string Urlcon = "/fin_year?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&finyear_rowid=" + objContext.finyear_rowid;
                string Urlcon = "Admin_FinancialYear/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.GetAsync("fin_year?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&finyear_rowid=" + finyear_rowid + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objfetch);
        }
        [HttpPost]
        public ActionResult Financial_YearSave([FromBody]Contextsave objContext)
        {
            Applicationsave objRoot = new Applicationsave();
            Document objDoc = new Document();
            Contextsave objContextDetails = new Contextsave();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
           // objContextDetails.detail = objContext.detail;


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
                //string Urlcon = "/newfinyear";
                string Urlcon = "Admin_FinancialYear/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newfinyear", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();

            }
            return Json(post_data);
        }
        #region Financial Year Information(GetXml Code and Description)
        public string FinancialInfo()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("finyear_code", typeof(string));
            dt.Columns.Add("finyear_desc", typeof(string));
            dt.Columns.Add("status_code", typeof(string));
            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "finyear.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlRoleFullPath);
            XmlNodeList FinacialNodelist = xmlobject.SelectNodes("/root/row");
            foreach (XmlNode NodeData in FinacialNodelist)
            {
                XmlElement getidname = (XmlElement)NodeData;
                DataRow dr = dt.NewRow();
                dr["finyear_code"] = getidname.GetElementsByTagName("finyear_code")[0].InnerText;
                dr["finyear_desc"] = getidname.GetElementsByTagName("finyear_desc")[0].InnerText;
                dr["status_code"] = getidname.GetElementsByTagName("status_code")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }

        #endregion

        #region list fetch
        public class List
        {
            public int finyear_rowid { get; set; }
            public string finyear_code { get; set; }
            public string finyear_desc { get; set; }
            public string finyear_start_date { get; set; }
            public string finyear_end_date { get; set; }
            public string finyear_narration { get; set; }
            public string status_code { get; set; }
            public string status_desc { get; set; }
           

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
            public int finyear_rowid { get; set; }
            public string finyear_code { get; set; }
            public string finyear_desc { get; set; }
            public string finyear_start_date { get; set; }
            public string finyear_end_date { get; set; }
            public string finyear_narration { get; set; }
            public string status_code { get; set; }
            public string status_desc { get; set; }
            public string mode_flag { get; set; }
            public string row_timestamp { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public int finyear_rowid { get; set; }
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
        public class Headersave
        {
            public int finyear_rowid { get; set; }
            public string finyear_code { get; set; }
            public string finyear_desc { get; set; }
            public string finyear_start_date { get; set; }
            public string finyear_end_date { get; set; }
            public string finyear_narration { get; set; }
            public string status_code { get; set; }
            public string mode_flag { get; set; }
            public string row_timestamp { get; set; }

        }
        public class Contextsave
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Headersave Header { get; set; }

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