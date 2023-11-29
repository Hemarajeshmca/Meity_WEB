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
    public class DocumentNumberingListController : Controller
    {
        // GET: DocumentNumberingList
        public ActionResult DocNumberingList()
        {
            return View();
        }

        public ActionResult DocNumberingNew()
        {
            return View();
        }

        private IConfiguration _configuration;
        public DocumentNumberingListController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult DocNumberList([FromBody] DCContextInput context)
        {
            DCNumberList objList = new DCNumberList();
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
                // string Urlcon = "/alldoc_num?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_Fromvalue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "Admin_DocumentNumbering/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                //  var response = client.GetAsync("").Result;
                var response = client.GetAsync("alldoc_num?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_Fromvalue + "&filterby_tovalue=" + context.FilterBy_ToValue + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (DCNumberList)JsonConvert.DeserializeObject(post_data, typeof(DCNumberList));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult GetDocNumber(string orgnId, string locnId, string userId, string localeId, string activity_code, string finyear_code, int docnum_rowid)
        {
            FetchDocNumber objout = new FetchDocNumber();
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
                string Urlcon = "Admin_DocumentNumbering/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("doc_num?org=" + orgnId + "&locn=" + locnId + "&user=" + userId + "&lang=" + localeId + "&activity_code=" + activity_code + "&finyear_code=" + finyear_code + "&docnum_rowid=" + docnum_rowid + "").Result; 
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FetchDocNumber)JsonConvert.DeserializeObject(post_data, typeof(FetchDocNumber));
            }
            return Json(objout);
        }
        [HttpPost]
        public ActionResult SaveDocNumber([FromBody] SaveDCContext objContext)
        {
            SaveDocNum objRoot = new SaveDocNum();
            SaveDCDocument objDoc = new SaveDCDocument();
            SaveDCContext objContextDetails = new SaveDCContext();
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
                string Urlcon = "Admin_DocumentNumbering/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newdocnum", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }

        #region List
        public class DCList
        {
            public string Out_activity_code { get; set; }
            public string Out_finyear_code { get; set; }
            public int Out_docnum_rowid { get; set; }
            public string Out_docnum_preview { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
        }

        public class DCContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public List<DCList> List { get; set; }
        }
        public class DCNumberList
        {
            public DCContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }
        public class DCContextInput
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_Fromvalue { get; set; }
            public string FilterBy_ToValue { get; set; }
        }
        #endregion

        #region SingleFetch
      
        public class FetchDocHeader
        {
            public string In_activity_code { get; set; }
            public string In_finyear_code { get; set; }
            public int In_docnum_rowid { get; set; }
            public string In_docnum_preview { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class FetchDocDetail
        {
            public int In_docnumformat_rowid { get; set; }
            public int In_row_slno { get; set; }
            public string In_format_type { get; set; }
            public string In_format_type_desc { get; set; }
            public string In_format_desc { get; set; }
            public string In_format_value { get; set; }
            public string In_format_length { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class FetchDocContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FetchDocHeader Header { get; set; }
            public List<FetchDocDetail> Detail { get; set; }
        }
        public class FetchDocNumber
        {
            public FetchDocContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }

        #endregion

        #region SaveInput
        public class SaveDCHeader
        {
            public int In_docnum_rowid { get; set; }
            public string In_activity_code { get; set; }
            public string In_finyear_code { get; set; }
            public string In_docnum_preview { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class SaveDCDetail
        {
            public int In_docnumformat_rowid { get; set; }
            public int In_row_slno { get; set; }
            public string In_format_type { get; set; }
            public string In_format_type_desc { get; set; }
            public string In_format_desc { get; set; }
            public string In_format_value { get; set; }
            public string In_format_length { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class SaveDCContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SaveDCHeader Header { get; set; }
            public List<SaveDCDetail> Detail { get; set; }
        }

        public class SaveDCDocument
        {
            public SaveDCContext context { get; set; }
        }

        public class SaveDocNum
        {
            public SaveDCDocument document { get; set; }
        }
        #endregion

        #region Output
        public class OutputDocHeader
        {
            public int In_docnum_rowid { get; set; }
        }

        public class OutputDocContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public OutputDocHeader Header { get; set; }
        }
        public class OutputDoc
        {
            public OutputDocContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }

        #endregion
    }
}