
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;


namespace FFI.Controllers
{
    public class ShareController : Controller
    {
        // GET: Share
        public ActionResult Share()
        {
            return View();
        }

        private IConfiguration _configuration;
        public ShareController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult Sharefetch([FromBody]FContext context)
        {
            FApplication objList = new FApplication();
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
                string Urlcon = "FIScertificatedispatch/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/FIScertificatedispatch/");
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FIScertificatedispatch/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("sharedespatch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));

            }
            return Json(objList);
        }
        [HttpPost]
        // public ActionResult ShareSave(string userId, string orgnId, string locnId, string localeId, SDHeader ObjHeader, List<SDDetail> ObjDetail)
        public ActionResult ShareSave([FromBody] SDContext objContextShare)

        {
            //SDApplication objRootShare = new SDApplication();
            //SDDocument objDocShare = new SDDocument();
            //SDContext objContextDetailsShare = new SDContext();
            //objContextDetailsShare.userId = objContextShare.userId;
            //objContextDetailsShare.locnId = objContextShare.locnId;
            //objContextDetailsShare.localeId = objContextShare.localeId;
            //objContextDetailsShare.orgnId = objContextShare.orgnId;
            //objContextDetailsShare.Detail = objContextShare.Detail;
            //objContextDetailsShare.Header = objContextShare.Header;

            //objDocShare.context = objContextDetailsShare;
            //objRootShare.document = objDocShare;

            //SDHeader ObjHeader = new SDHeader();
            //ObjHeader.In_fpoorgn_code = objContextShare.Header.In_fpoorgn_code;
            //ObjHeader.In_despatch_status = objContextShare.Header.In_despatch_status;
            //ObjHeader.In_despatch_date = objContextShare.Header.In_despatch_date;

            //objContextDetailsShare.userId = objContextShare.userId;
            // objContextDetailsShare.locnId = objContextShare.locnId;
            // objContextDetailsShare.localeId = objContextShare.localeId;
            // objContextDetailsShare.orgnId = objContextShare.orgnId;
            // objContextDetailsShare.Detail = objContextShare.Detail;
            // objContextDetailsShare.Header = objContextShare.Header;

            // objDocShare.context = objContextDetailsShare;
            // objRootShare.document = objDocShare;

            // Implemented By Shee
            SDTestHeader ObjTestHeader = new SDTestHeader();
            ObjTestHeader.In_despatch_date = objContextShare.Header.In_despatch_date; //"2020-05-15";
            ObjTestHeader.In_despatch_status = objContextShare.Header.In_despatch_status; // "QCD_SHA_CERT_DESP_PEND";
            ObjTestHeader.In_fpoorgn_code = objContextShare.Header.In_fpoorgn_code; // "UTRFPCL";

            List<SDTestDetail> objTestList = new List<SDTestDetail>();

            for (int i = 0; i < objContextShare.Detail.Count; i++)
            {
                if(objContextShare.Detail[i].In_process_status == "QCD_SHA_CERT_DESP_DONE") {
                SDTestDetail objtest = new SDTestDetail();
                objtest.In_certificate_no = objContextShare.Detail[i].In_certificate_no;
                objtest.In_despatch_awb_no = objContextShare.Detail[i].In_despatch_awb_no;
                objtest.In_despatch_date = objContextShare.Detail[i].In_despatch_date;
                objtest.In_despatch_remark = objContextShare.Detail[i].In_despatch_remark;
                objtest.In_farmer_code = objContextShare.Detail[i].In_farmer_code;
                objtest.In_fpomember_code = objContextShare.Detail[i].In_fpomember_code;
                objtest.In_mode_flag = objContextShare.Detail[i].In_mode_flag;
                objtest.In_process_status = objContextShare.Detail[i].In_process_status;
                objtest.In_row_timestamp = objContextShare.Detail[i].In_row_timestamp;
                objtest.In_shareapp_no = objContextShare.Detail[i].In_shareapp_no;
                objtest.In_shareapp_rowid = objContextShare.Detail[i].In_shareapp_rowid;
                objTestList.Add(objtest);
                }
            }


            SDTestApplication objTestRootShare = new SDTestApplication();
            SDTestDocument objTestDocShare = new SDTestDocument();
            SDTestContext objTestContextDetailsShare = new SDTestContext();
            objTestContextDetailsShare.userId = objContextShare.userId;
            objTestContextDetailsShare.locnId = objContextShare.locnId;
            objTestContextDetailsShare.localeId = objContextShare.localeId;
            objTestContextDetailsShare.orgnId = objContextShare.orgnId;
            objTestContextDetailsShare.Detail = objTestList;
            objTestContextDetailsShare.Header = ObjTestHeader;

            objTestDocShare.context = objTestContextDetailsShare;
            objTestRootShare.document = objTestDocShare;

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
                string Urlcon = "FIScertificatedispatch/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/FIScertificatedispatch/");
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FIScertificatedispatch/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objTestRootShare), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newShareDespatch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }


        #region fetch

        public class FDetail
        {
            public int In_shareapp_rowid { get; set; }
            public string In_shareapp_date { get; set; }
            public string In_shareapp_no { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_farmer_code { get; set; }
            public string In_member_name { get; set; }
            public string In_certificate_no { get; set; }
            public string In_folio_no { get; set; }
            public string In_despatch_date { get; set; }
            public string In_despatch_awb_no { get; set; }
            public string In_process_status { get; set; }
            public string In_process_status_desc { get; set; }
            public string In_despatch_remark { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<FDetail> Detail { get; set; }
            public string fpoorgn_code { get; set; }
            public string despatch_status { get; set; }
            public string despatch_date { get; set; }

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
        #region save
        public class SDHeader
        {
            public string In_fpoorgn_code { get; set; }
            public string In_despatch_status { get; set; }
            public string In_despatch_date { get; set; }

        }

        public class SDDetail
        {
            public int In_shareapp_rowid { get; set; }
            public string In_shareapp_no { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_farmer_code { get; set; }
            public string In_certificate_no { get; set; }
            public string In_despatch_date { get; set; }
            public string In_despatch_awb_no { get; set; }
            public string In_process_status { get; set; }
            public string In_despatch_remark { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SDContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SDHeader Header { get; set; }
            public IList<SDDetail> Detail { get; set; }

        }
        public class SDDocument
        {
            public SDContext context { get; set; }

        }
        public class SDApplication
        {
            public SDDocument document { get; set; }

        }

        public class SDTestHeader
        {
            public string In_despatch_date { get; set; }
            public string In_despatch_status { get; set; }
            public string In_fpoorgn_code { get; set; }

        }
        public class SDTestDetail
        {
            public string In_certificate_no { get; set; }
            public string In_despatch_awb_no { get; set; }
            public string In_despatch_date { get; set; }
            public string In_despatch_remark { get; set; }
            public string In_farmer_code { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_process_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_shareapp_no { get; set; }
            public int In_shareapp_rowid { get; set; }

        }
        public class SDTestContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SDTestHeader Header { get; set; }
            public IList<SDTestDetail> Detail { get; set; }

        }
        public class SDTestDocument
        {
            public SDTestContext context { get; set; }

        }
        public class SDTestApplication
        {
            public SDTestDocument document { get; set; }
        }
        #endregion
    }
}