using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.IO;


namespace FFI.Controllers
{
    public class DividendStructureDefinitionController : Controller
    {
        // GET: DividendStructureDefinition

        private IConfiguration _configuration;
        string urlstring = "";
        public DividendStructureDefinitionController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult DividendStructureDefinition()
        {
            return View();
        }
        public ActionResult DividendStructureDefinitionForm()
        {
            return View();
        }
        public class List
        {
            public int Out_dividendstru_rowid { get; set; }
            public string Out_fpoorgn_code { get; set; }
            public string Out_finyear_code { get; set; }
            public string Out_finyear_desc { get; set; }
            public string Out_period_from { get; set; }
            public string Out_period_to { get; set; }
            public string Out_dividend_type { get; set; }
            public string Out_dividend_type_desc { get; set; }
            public string Out_dividend_percent { get; set; }
            public string Out_report_date { get; set; }
            public string Out_declared_date { get; set; }
            public string Out_payor_bank_code { get; set; }
            public string Out_payor_bank_desc { get; set; }
            public string Out_payor_bank_acc_type { get; set; }
            public string Out_payor_bank_acc_type_desc { get; set; }
            public string Out_payor_bank_acc_no { get; set; }
            public string Out_payor_ifsc_code { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }
            public string Out_mode_flag { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FarmerFilter Filter { get; set; }
            public IList<List> List { get; set; }

        }
        public class FarmerFilter
        {
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public int out_record_count { get; set; }
            public int from_index { get; set; }
            public int to_index { get; set; }
            public int record_count { get; set; }
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

        public class Header
        {
            public int IOU_dividendstru_rowid { get; set; }
            public string IOU_fpoorgn_code { get; set; }
            public string In_finyear_code { get; set; }
            public string In_period_from { get; set; }
            public string In_period_to { get; set; }
            public string In_dividend_type { get; set; }
            public double In_dividend_percent { get; set; }
            public string In_report_date { get; set; }
            public string In_declared_date { get; set; }
            public string In_payor_bank_code { get; set; }
            public string In_payor_bank_acc_type { get; set; }
            public string In_payor_bank_acc_no { get; set; }
            public string In_payor_ifsc_code { get; set; }
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
            public Header Header { get; set; }

        }
        public class Document
        {
            public SContext context { get; set; }

        }
        public class SApplication
        {
            public Document document { get; set; }

        }

        public class SingleHeader
        {
            public int IOU_dividendstru_rowid { get; set; }
            public string IOU_fpoorgn_code { get; set; }
            public string In_finyear_code { get; set; }
            public string In_finyear_desc { get; set; }
            public string In_period_from { get; set; }
            public string In_period_to { get; set; }
            public string In_dividend_type { get; set; }
            public string In_dividend_type_desc { get; set; }
            public double In_dividend_percent { get; set; }
            public string In_report_date { get; set; }
            public string In_declared_date { get; set; }
            public string In_payor_bank_code { get; set; }
            public string In_payor_bank_desc { get; set; }
            public string In_payor_bank_acc_type { get; set; }
            public string In_payor_bank_acc_type_desc { get; set; }
            public string In_payor_bank_acc_no { get; set; }
            public string In_payor_ifsc_code { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SingleContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SingleHeader Header { get; set; }

        }
        public class SingleApplication
        {
            public SingleContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }


        [HttpPost]
        public ActionResult SingleFetchData([FromBody]SingleContext objContext)
        {
            SingleApplication objList = new SingleApplication();
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
                //string Urlcon = "/divident?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&dividendstru_rowid=" + objContext.Header.IOU_dividendstru_rowid + "&fpoorgn_code=" + objContext.Header.IOU_fpoorgn_code +"";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                string Urlcon = "FISDividend/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISDividend/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("divident", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (SingleApplication)JsonConvert.DeserializeObject(post_data, typeof(SingleApplication));

            }
            return Json(objList);
        }



        [HttpPost]
        public ActionResult SaveDividend([FromBody]SContext objContext)
        {
            SApplication ObjRoot = new SApplication();
            SContext ObjContext = new SContext();
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
           
            using (var client = new HttpClient())
            {
                //string Urlcon = "/newDividendStructure"; 
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                string Urlcon = "FISDividend/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISDividend/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newDividendStructure", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                ObjDocuent = (Document)JsonConvert.DeserializeObject(post_data, typeof(Document));
            }
            return Json(ObjDocuent);
        }


        [HttpPost]
        public ActionResult GetDividendStructure([FromBody]Context objContext)
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
                //string Urlcon = "/alldividends?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter .FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter .FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                string Urlcon = "FISDividend/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISDividend/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("alldividends", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
    }
}