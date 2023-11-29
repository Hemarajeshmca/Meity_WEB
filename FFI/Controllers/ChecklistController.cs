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
    public class ChecklistController : Controller
    {
        //
        // GET: /Checklist/
        public ActionResult Checklist()
        {
            return View();
        }
        private IConfiguration _configuration;
        public ChecklistController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        public ActionResult Checklistfetch([FromBody] FContext objContext)
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
                //string Urlcon = "/checklist_tran?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&doc_rowid=" + objContext.doc_rowid + "&doc_no=" + objContext.doc_no + "&doc_type=" + objContext.doc_type;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.DefaultRequestHeaders.Accept.Clear();
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                //Stream data = response.Content.ReadAsStreamAsync().Result;
                //StreamReader reader = new StreamReader(data);
                //post_data = reader.ReadToEnd();
                //objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));

                string Urlcon = "FISChecklist/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                // client.BaseAddress = new Uri("http://169.38.77.190:101/api/ICDProduct/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("FISChecklistfetchtran", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        [HttpPost]
        public ActionResult ChecklistHISTORY([FromBody] HContext objContext)
        {
            HApplication objout = new HApplication();
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
                string Urlcon = "FISChecklist/";
                //string Urlcon = "/checklist_history?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&doc_rowid=" + objContext.doc_rowid + "&row_id=" + objContext.row_id + "&doc_no=" + objContext.doc_no + "&doc_type=" + objContext.doc_type + "&edit_date=" + objContext.edit_date + "&edited_by=" + objContext.edited_by + "&mode_flag=" + objContext.mode_flag;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("FISChecklistfetchHistory", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (HApplication)JsonConvert.DeserializeObject(post_data, typeof(HApplication));
            }
            return Json(objout);
        }
        #region fetch
        public class Element
        {
            public int In_chklstelement_rowid { get; set; }
            public string In_element_code { get; set; }
            public string In_element_desc { get; set; }
            public string In_subelement_code { get; set; }
            public string In_subelement_desc { get; set; }
            public string In_allowed_option { get; set; }
            public string In_mandatory_flag { get; set; }
            public string In_any_all_flag { get; set; }
            public string In_element_value { get; set; }
            public string In_complied_flag { get; set; }
            public string In_verified_on { get; set; }
            public string In_verified_by { get; set; }
            public string In_remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class History
        {
            public int In_row_id { get; set; }
            public string In_edit_date { get; set; }
            public string In_edited_by { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<Element> Element { get; set; }
            public IList<History> History { get; set; }
            public int doc_rowid { get; set; }
            public string doc_no { get; set; }
            public string doc_type { get; set; }

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
        #region history
        public class Chklist_Element
        {
            public int In_chklstelement_rowid { get; set; }
            public string In_element_code { get; set; }
            public string In_element_desc { get; set; }
            public string In_subelement_code { get; set; }
            public string In_subelement_desc { get; set; }
            public string In_mandatory_flag { get; set; }
            public string In_allowed_option { get; set; }
            public string In_any_all_flag { get; set; }
            public string In_element_value { get; set; }
            public string In_complied_flag { get; set; }
            public string In_remarks { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class HContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<Chklist_Element> Chklist_Element { get; set; }
            public int doc_rowid { get; set; }
            public int row_id { get; set; }
            public string doc_no { get; set; }
            public string doc_type { get; set; }
            public string edit_date { get; set; }
            public string edited_by { get; set; }
            public string mode_flag { get; set; }
        }
        public class HApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class HApplication
        {
            public HContext context { get; set; }
            public HApplicationException ApplicationException { get; set; }

        }
        #endregion
        [HttpPost]
        public ActionResult ChecklistSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
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
                string Urlcon = "FISChecklist/";
                //string Urlcon = "/newChecklistTran";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newFISChecklist", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region save
        public class SElement
        {
            public int IOU_doc_rowid { get; set; }
            public string In_doc_no { get; set; }
            public string In_doc_type { get; set; }
            public int In_chklstelement_rowid { get; set; }
            public string In_element_code { get; set; }
            public string In_subelement_code { get; set; }
            public string In_mandatory_flag { get; set; }
            public string In_allowed_option { get; set; }
            public string In_any_all_flag { get; set; }
            public string In_element_value { get; set; }
            public string In_complied_flag { get; set; }
            public string In_verified_on { get; set; }
            public string In_verified_by { get; set; }
            public string In_remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
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

        #region fetch
        public class FCLHeader
        {
            public int IOU_chklst_rowid { get; set; }
            public string IOU_activity_code { get; set; }
            public string In_activity_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FCLElement
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
        public class FCLContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FCLHeader Header { get; set; }
            public IList<FCLElement> Element { get; set; }
            public string activity_code { get; set; }
            public int chklst_rowid { get; set; }


        }
        public class FCLApplication
        {
            public FCLContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion


        
    }
}