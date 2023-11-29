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
    public class PAWHSServiceInvoiceController : Controller
    {
        // GET: PAWHSServiceInvoice
        public ActionResult PAWHSServiceInvoiceList()
        {
            return View();
        }
        public ActionResult ServiceInvoiceForm()
        {
            return View();
        }
        public ActionResult PaymentCollections()
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
        public PAWHSServiceInvoiceController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        public JsonResult PAWHSServiceInvoiceListfetch([FromBody]Context context)
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
                //string urlstring = "http://169.38.77.186/Deployable_image_final_pawhs/api/KANCHI";
                string Urlcon = "PAWHSServiceInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceInvoice/");
                //client.BaseAddress = new Uri("http://localhost:60695/api/PAWHSServiceInvoice/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("all_pawhs_service_invoice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        public ActionResult PAWHSServiceInvoicefetch([FromBody] Contextfetch objContext)
        {
            Applicationfetch objout = new Applicationfetch();
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
                //string urlstring = "http://169.38.77.186/Deployable_image_final_pawhs/api/KANCHI";
                string Urlcon = "PAWHSServiceInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/PAWHSServiceInvoice/");
                client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceInvoice/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                /*var response = client.GetAsync("").Result;*/
                var response = client.PostAsync("pawhs_service_invoice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (Applicationfetch)JsonConvert.DeserializeObject(post_data, typeof(Applicationfetch));
            }
            return Json(objout); 
        }
        public ActionResult PAWHSServiceInvoiceSave([FromBody] Contextsave objContext)
        {
            if (objContext.Header.InvoiceDetails == null)
            {
                objContext.Header.InvoiceDetails = new List<InvoiceDetailssave>();
            }
            if (objContext.Header.TaxDetails == null)
            {
                objContext.Header.TaxDetails = new List<TaxDetailssave>();
            }
            Applicationsave objRoot = new Applicationsave();
            Documentsave objDoc = new Documentsave();
            Contextsave objContextDetails = new Contextsave();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.Header.InvoiceDetails = objContext.Header.InvoiceDetails;
            objContextDetails.Header.TaxDetails = objContext.Header.TaxDetails;
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
                //string urlstring = "http://169.38.77.186/Deployable_image_final_pawhs/api/KANCHI";
                string Urlcon = "PAWHSServiceInvoice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/PAWHSServiceInvoice/");
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSServiceInvoice/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                
                var response = client.PostAsync("pawhs_new_service_invoice", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                //objDoc = (Applicationsave)JsonConvert.DeserializeObject(post_data, typeof(Applicationsave));
            }
           return Json(post_data);
           
        }
        #region List
        public class List
        {
            public int Out_invoce_rowid { get; set; }
            public string Out_invoice_no { get; set; }
            public string Out_invoice_date { get; set; }
            public string Out_customer_name { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

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
        #region SingleFetch
        public class InvoiceDetailsfetch
        {
            public int In_invoice_details_rowid { get; set; }
            public string In_service_code { get; set; }
            public string In_service_desc { get; set; }
            public float In_qty { get; set; }
            public string In_uom_code { get; set; }
            public string In_uom_desc { get; set; }
            public float In_rate { get; set; }
            public float In_amount { get; set; }
            public float In_discount { get; set; }
            public float In_tax_amount { get; set; }
            public float In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class TaxDetailsfetch
        {
            public int In_taxdetails_rowid { get; set; }
            public string In_state { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_description { get; set; }
            public float In_cgst { get; set; }
            public float In_sgst { get; set; }
            public float In_igst { get; set; }
            public float In_tax_rate { get; set; }
            public float In_taxable_amount { get; set; }
            public float In_tax_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Headerfetch
        {
            public int IOU_invoice_rowid { get; set; }
            public string In_fpo_name { get; set; }
            public string In_invoice_date { get; set; }
            public string In_invoice_no { get; set; }
            public string In_service_code { get; set; }
            public string In_customer_code { get; set; }
            public string In_customer_name { get; set; }
            public string In_customer_state { get; set; }
            public string In_provider_state { get; set; }
            public string In_output_field { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public IList<InvoiceDetailsfetch> InvoiceDetails { get; set; }
            public IList<TaxDetailsfetch> TaxDetails { get; set; }

        }
        public class Contextfetch
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Headerfetch Header { get; set; }
            public int invoice_rowid { get; set; }


        }
        public class ApplicationExceptionfetch
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class Applicationfetch
        {
            public Contextfetch context { get; set; }
            public ApplicationExceptionfetch ApplicationException { get; set; }

        }
        #endregion
        #region Save
        public class InvoiceDetailssave
        {
            public int In_invoice_details_rowid { get; set; }
            public string In_service_code { get; set; }
            public float In_qty { get; set; }
            public string In_uom_code { get; set; }
            public float In_rate { get; set; }
            public float In_amount { get; set; }
            public float In_discount { get; set; }
            public float In_tax_amount { get; set; }
            public float In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class TaxDetailssave
        {
            public int In_taxdetails_rowid { get; set; }
            public string In_state { get; set; }
            public string In_hsn_code { get; set; }
            public float In_cgst { get; set; }
            public float In_sgst { get; set; }
            public float In_igst { get; set; }
            public float In_tax_rate { get; set; }
            public float In_taxable_amount { get; set; }
            public float In_tax_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Headersave
        {
            public int IOU_invoice_rowid { get; set; }
            public string IOU_invoice_no { get; set; }
            public string In_service_code { get; set; }
            public string In_fpo_name { get; set; }
            public string In_invoice_date { get; set; }
            public string In_customer_code { get; set; }
            public string In_customer_state { get; set; }
            public string In_provider_state { get; set; }
            public string In_output_field { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public IList<InvoiceDetailssave> InvoiceDetails { get; set; }
            public IList<TaxDetailssave> TaxDetails { get; set; }

        }
        public class Contextsave
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Headersave Header { get; set; }

        }
        public class Documentsave
        {
            public Contextsave context { get; set; }

        }
        public class Applicationsave
        {
            public Documentsave document { get; set; }

        }
        #endregion
    }
}