using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;
using System.Security;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Configuration;


namespace FFI.Controllers
{
    public class CapitalController : Controller
    {
        // GET: Capital
        private IConfiguration _configuration;
        string urlstring = "";
        public CapitalController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult Capital()
        {
            return View();
        }
       
        #region Comman Grid List and Field
        [HttpPost]
        public string CommanGridField(string GetName)
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("parameter", typeof(string));
           

            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "Capitalxml.xml"));
            XmlDocument xmlload = new XmlDocument();
            xmlload.Load(XmlRoleFullPath);
            XmlNodeList nodevalue = xmlload.SelectNodes("//root//row");
            for (int i = 0; i < nodevalue.Count; i++)
            {
                DataRow dr = dt.NewRow();
                dr["parameter"] = nodevalue[i]["parameter"].InnerXml;
              
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion

        public class CaptialContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public CaptialFilter Filter { get; set; }
            public Header Header { get; set; }
            //public List<Map> Map { get; set; }
        }

        public class SCaptialContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }            
            public SHeader Header { get; set; }
            //public List<Map> Map { get; set; }
        }
        public class CaptialFilter
        {
            public int captial_rowid { get; set; }
            public string fpoorgn_code { get; set; }
          
        }
        public class Header
        {
            public int IOU_capital_rowid1 { get; set; }
            public string IOU_fpoorgn_code1 { get; set; }
            public string In_fpoorgn_desc { get; set; }
            public string In_authorized_capital { get; set; }
            public string In_paid_capital { get; set; }
            public int In_max_shares_per_applicant { get; set; }
            public string In_share_price { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
        }

        public class SHeader
        {
            public int IOU_capital_rowid { get; set; }
            public string IOU_fpoorgn_code { get; set; }
            public string In_authorized_capital { get; set; }
            public string In_paid_capital { get; set; }
            public int In_max_shares_per_applicant { get; set; }
            public string In_share_price { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }


        }
        public class CaptialApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }
        public class CaptialRootObject
        {
            public CaptialContext context { get; set; }
            public CaptialApplicationException ApplicationException { get; set; }
        }
        public class Document
        {
            public SCaptialContext context { get; set; }

        }
        public class Application
        {
            public Document document { get; set; }

        }
        [HttpPost]
        public ActionResult GetCaptialDetails([FromBody]CaptialContext objContext)
        {
            CaptialRootObject objList = new CaptialRootObject();
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
                //string Urlcon = "/capital_struct?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&capital_rowid=" + objContext .Filter.captial_rowid + "&fpoorgn_code=" + objContext.Filter.fpoorgn_code + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                string Urlcon = "Captial/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/Captial/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("capital_struct", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (CaptialRootObject)JsonConvert.DeserializeObject(post_data, typeof(CaptialRootObject));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveCapital([FromBody]SCaptialContext objContext)
        {
            Application ObjRoot = new Application();
            SCaptialContext ObjContext = new SCaptialContext();
            Document ObjDocuent = new Document();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
            ObjContext.userId = objContext.userId;
            ObjDocuent.context = ObjContext;
            ObjRoot.document = ObjDocuent;
           
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
            urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            using (var client = new HttpClient())
            {
                //string Urlcon = "/newcapital"; 
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                string Urlcon = "Captial/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/Captial/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newcapital", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }



    }
}