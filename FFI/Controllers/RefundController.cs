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
    public class RefundController : Controller
    {
        // GET: Refund
        public ActionResult Refund()
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
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/refund");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion
        private IConfiguration _configuration;
        public RefundController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public ShareRefundApplication Refundfetch([FromBody] ShareRefundContext context)
        {
            ShareRefundApplication objList = new ShareRefundApplication();
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
                string Urlcon = "FISshareRefund/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
              //  client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISshareRefund/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("sharerefund", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (ShareRefundApplication)JsonConvert.DeserializeObject(post_data, typeof(ShareRefundApplication));
            }
            return objList;
        }
        [HttpPost]
        public ActionResult RefundSave([FromBody] IUSrefundContext objContext)
        {
            IUSrefundApplication objRoot = new IUSrefundApplication();
            IUSrefundDocument objDoc = new IUSrefundDocument();

            IUSrefundContext objContextDetails = new IUSrefundContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Detail = objContext.Detail;
            objContextDetails.Header = objContext.Header;

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
                string Urlcon = "FISshareRefund/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
              //  client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISshareRefund/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newShareRefund", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (IUSrefundDocument)JsonConvert.DeserializeObject(post_data, typeof(IUSrefundDocument));
            }
            return Json(objDoc);
        }
        #region fetch
        public class Detail
        {
            public int In_shareapp_rowid { get; set; }
            public int In_refund_rowid { get; set; }
            public string In_shareapp_no { get; set; }
            public string In_member_name { get; set; }
            public string In_farmer_name { get; set; }
            public int In_applied_shares { get; set; }
            public int In_rejected_shares { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_refund_date { get; set; }
            public float In_refund_amount { get; set; }
            public string In_payment_ref_no { get; set; }
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
            public IList<Detail> Detail { get; set; }
            public string refund_status { get; set; }
            public string fpoorgn_code { get; set; }
            public string refund_date { get; set; }

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
        #region save
        public class Header
        {
            public string In_refund_status { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_refund_date { get; set; }

        }
        public class SDetail
        {
            public int In_shareapp_rowid { get; set; }
            public int In_refund_rowid { get; set; }
            public string In_shareapp_no { get; set; }
            public int In_applied_shares { get; set; }
            public int In_rejected_shares { get; set; }
            public string In_payment_mode { get; set; }
            public string In_refund_date { get; set; }
            public int In_refund_amount { get; set; }
            public string In_payment_ref_no { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<SDetail> Detail { get; set; }

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



        #region API FETCH
        public class ShareRefundDetail
        {
            public int In_shareapp_rowid { get; set; }
            public Int64 In_refund_rowid { get; set; }
            public string In_shareapp_date { get; set; }
            public string In_shareapp_no { get; set; }
            public string In_member_name { get; set; }
            public string In_farmer_name { get; set; }
            public int In_applied_shares { get; set; }
            public Int64 In_rejected_shares { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_refund_date { get; set; }
            public decimal In_refund_amount { get; set; }
            public string In_payment_ref_no { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class ShareRefundContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<ShareRefundDetail> Detail { get; set; }

            public string In_fpoorgn_code { get; set; }
            public string In_refund_status { get; set; }
            public string In_refund_date { get; set; }

        }
        public class ShareRefundApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class ShareRefundApplication
        {
            public ShareRefundContext context { get; set; }
            public ShareRefundApplicationException ApplicationException { get; set; }

        }
        #endregion

        #region Save share refund

        public class IUSrefundHeader
        {
            public string In_refund_status { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_refund_date { get; set; }
            public string detail_formatted { get; set; }


        }
        public class IUSrefundDetail
        {
            public int In_shareapp_rowid { get; set; }
            public int In_refund_rowid { get; set; }
            public string In_shareapp_no { get; set; }
            public int In_applied_shares { get; set; }
            public int In_rejected_shares { get; set; }
            public string In_payment_mode { get; set; }
            public string In_refund_date { get; set; }
            public int In_refund_amount { get; set; }
            public string In_payment_ref_no { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class IUSrefundContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IUSrefundHeader Header { get; set; }
            public IList<IUSrefundDetail> Detail { get; set; }

        }
        public class IUSrefundDocument
        {
            public IUSrefundContext context { get; set; }

        }
        public class IUSrefundApplication
        {
            public IUSrefundDocument document { get; set; }

        }
        #endregion
    }
}