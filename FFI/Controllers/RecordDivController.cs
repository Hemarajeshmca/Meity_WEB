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
    public class RecordDivController : Controller
    {
        // GET: RecordDiv
        //Muralidharan developed on 13-05-2020
        private IConfiguration _configuration;
        string urlstring = "";
        public RecordDivController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ActionResult RecordDiv()
        {
            return View();
        }
         #region xml Local DropDown Load
        public string Xmlcmb_Localbind()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Orgl", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "Generatexml.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/shareDispatch");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion

        public class Detail
        {
            public int In_dividend_rowid { get; set; }
            public string In_share_holder_name { get; set; }
            public string In_certificate_no { get; set; }
            public string In_ditinct_from_to { get; set; }
            public Double  In_dividend_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_despatch_date { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_despatch_status { get; set; }
            public string In_despatch_status_desc { get; set; }
            public string In_despatch_remark { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<Detail> Detail { get; set; }

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
            public string In_fpoorgn_code { get; set; }
            public string In_despatch_status { get; set; }
            public string In_despatch_date { get; set; }

        }
        public class SaveDetail
        {
            public int In_dividend_rowid { get; set; }
            public string In_certificate_no { get; set; }
            public string In_ditinct_from_to { get; set; }
            public Double In_dividend_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_despatch_date { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_despatch_status { get; set; }
            public string In_despatch_remark { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SaveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<SaveDetail> Detail { get; set; }

        }
        public class Document
        {
            public SaveContext context { get; set; }

        }
        public class SaveApplication
        {
            public Document document { get; set; }

        }
        [HttpPost]
        public fisDMPApplication ServiceList([FromBody] fisDMPContext objContext)
        {
            fisDMPApplication objList = new fisDMPApplication();
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
                string Urlcon = "FISDivMupdstatus/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
              //  client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISDivMupdstatus/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("divident_update_status", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (fisDMPApplication)JsonConvert.DeserializeObject(post_data, typeof(fisDMPApplication));
            }
            return objList;
        }
        [HttpPost]
        public SfisDMPApplication SaveDividendUpdate([FromBody] SfisDMPContext objContext)
        {
            SfisDMPApplication ObjRoot = new SfisDMPApplication();
            SfisDMPContext ObjContext = new SfisDMPContext();
            SfisDMPDocument ObjDocuent = new SfisDMPDocument();

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
            ObjContext.Detail = objContext.Detail;
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
                string Urlcon = "FISDivMupdstatus/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
              //  client.BaseAddress = new Uri("http://localhost:60695/api/FISDivMupdstatus/");
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISDivMupdstatus/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                // var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newDividendUpdateStatus", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                ObjDocuent = (SfisDMPDocument)JsonConvert.DeserializeObject(post_data, typeof(SfisDMPDocument));
                ObjRoot.document = ObjDocuent;
            }
            return ObjRoot;
        }


        #region filldiv

        public class fisDMPDetail
        {
            public int In_dividend_rowid { get; set; }
            public string In_share_holder_name { get; set; }
            public string In_certificate_no { get; set; }
            public string In_ditinct_from_to { get; set; }
            public decimal In_dividend_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_despatch_date { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_despatch_status { get; set; }
            public string In_despatch_status_desc { get; set; }
            public string In_despatch_remark { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class fisDMPContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<fisDMPDetail> Detail { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_despatch_status { get; set; }
            public string In_despatch_date { get; set; }

        }
        public class fisDMPApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class fisDMPApplication
        {
            public fisDMPContext context { get; set; }
            public fisDMPApplicationException ApplicationException { get; set; }

        }
        #endregion
        #region SAVE
        public class SfisDMPHeader
        {
            public string In_fpoorgn_code { get; set; }
            public string In_despatch_status { get; set; }
            public string In_despatch_date { get; set; }

        }
        public class SfisDMPDetail
        {
            public int In_dividend_rowid { get; set; }
            public string In_certificate_no { get; set; }
            public string In_ditinct_from_to { get; set; }
            public Decimal In_dividend_amount { get; set; }
            public string In_payment_mode { get; set; }
            public string In_despatch_date { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_despatch_status { get; set; }
            public string In_despatch_remark { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SfisDMPContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SfisDMPHeader Header { get; set; }
            public IList<SfisDMPDetail> Detail { get; set; }

        }
        public class SfisDMPDocument
        {
            public SfisDMPContext context { get; set; }

        }
        public class SfisDMPApplication
        {
            public SfisDMPDocument document { get; set; }

        }
        #endregion
    }
}
