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
    public class BankController : Controller
    {
        //
        // GET: /Bank/
        public ActionResult Banklist()
        {
            return View();
        }
        public ActionResult BankForm()
        {
            return View();
        }
        #region Comman Grid List and Field
        [HttpPost]
        public string CommanGridField(string GetName)
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("ifsc_code", typeof(string));
            dt.Columns.Add("branch_name", typeof(string));
            dt.Columns.Add("status_code", typeof(string));
            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "bankifsc.xml"));
            XmlDocument xmlload = new XmlDocument();
            xmlload.Load(XmlRoleFullPath);
            XmlNodeList nodevalue = xmlload.SelectNodes("//root//row[bank_code='" + GetName + "']");
            for (int i = 0; i < nodevalue.Count; i++)
            {
                DataRow dr = dt.NewRow();
                dr["ifsc_code"] = nodevalue[i]["ifsc_code"].InnerXml;
                dr["branch_name"] = nodevalue[i]["branch_name"].InnerXml;
                dr["status_code"] = nodevalue[i]["status_code"].InnerXml;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion
        #region Comman Grid List and Field
        [HttpPost]
         public string CommanGridlist()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("bank_code", typeof(string));
            dt.Columns.Add("bank_name", typeof(string));
            dt.Columns.Add("status_code", typeof(string));
            dt.Columns.Add("created_date", typeof(string));
            var XmlBankFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "bank.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlBankFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/root/row");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["bank_code"] = getidname.GetElementsByTagName("bank_code")[0].InnerText;
                dr["bank_name"] = getidname.GetElementsByTagName("bank_name")[0].InnerText;
                dr["status_code"] = getidname.GetElementsByTagName("status_code")[0].InnerText;
                dr["created_date"] = getidname.GetElementsByTagName("created_date")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion

        private IConfiguration _configuration;
        public BankController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        // public JsonResult BankListfetch([FromBody]Context context)
        public ActionResult BankListfetch(string org, string locn, string user, string lang, string filterby_option, string filterby_code, string filterby_fromvalue, string filterby_tovalue)
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
                // string Urlcon = "/allbank?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "Admin_Bank/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("allbank?org=" + org + "&locn=" + locn + "&user=" + user + "&lang=" + lang + "&filterby_option=" + filterby_option + "&filterby_code=" + filterby_code + "&filterby_fromvalue=" + filterby_fromvalue + " &filterby_tovalue = " + filterby_tovalue + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objList);
        }
        [HttpPost]
        //   public ActionResult Bankfetch([FromBody] FContext objContext)
        public ActionResult Bankfetch(string userId, string orgnId, string locnId, string localeId, string bank_rowid)
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
                // string Urlcon = "/bank?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&bank_rowid=" + objContext.bank_rowid;
                string Urlcon = "Admin_Bank/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("bank?org=" + orgnId + "&locn=" + locnId + "&user=" + userId + "&lang=" + localeId + "&bank_rowid=" + bank_rowid + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        [HttpPost]
        public ActionResult SaveBank([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.BankDtl = objContext.BankDtl;

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
                // string Urlcon = "/newbank";
                string Urlcon = "Admin_Bank/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newbank", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region list
        public class BankDtl
        {
            public int Out_bank_rowid { get; set; }
            public string Out_bank_code { get; set; }
            public string Out_bank_name { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<BankDtl> BankDtl { get; set; }
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
            public int In_bank_rowid { get; set; }
            public string In_bank_code { get; set; }
            public string In_bank_name { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FBankDtl
        {
            public int In_bankifsc_rowid { get; set; }
            public string In_ifsc_code { get; set; }
            public string In_branch_name { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string in_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<FBankDtl> BankDtl { get; set; }
            public string bank_rowid { get; set; }

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
        #region saveInput
        public class SHeader
        {
            public int IOU_bank_rowid { get; set; }
            public string In_bank_code { get; set; }
            public string In_bank_name { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SBankDtl
        {
            public int In_bankifsc_rowid { get; set; }
            public string In_ifsc_code { get; set; }
            public string In_branch_name { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SHeader Header { get; set; }
            public IList<SBankDtl> BankDtl { get; set; }

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
        #region SaveOutput
        public class OBHeader
        {
            public int IOU_bank_rowid { get; set; }
        }

        public class OBContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public OBHeader Header { get; set; }
        }
        public class OutputBank
        {
            public OBContext context { get; set; }
            public ApplicationExceptionSB ApplicationException { get; set; }
        }
        public class ApplicationExceptionSB
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        #endregion
       
    }
}