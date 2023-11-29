using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;
using System.Net;
using Newtonsoft.Json.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.Extensions.Configuration;


namespace FFI.Controllers
{
    public class SupplierController : Controller
    {
        public IActionResult SuppliermasterList()
        {
            return View();
        }
        public IActionResult Suppliermaster()
        {
            return View();
        }
       
        private IConfiguration _configuration;
        public SupplierController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
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
        [HttpPost]
        public JsonResult SupplierList([FromBody]ICDSupplierContext context)
        {
            ICDSupplierApplication objList = new ICDSupplierApplication();
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

                // string Urlcon = "/SupplierRegList?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "ICDSupplier/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("ICDSupplier_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (ICDSupplierApplication)JsonConvert.DeserializeObject(post_data, typeof(ICDSupplierApplication));

            }
            return Json(objList);
        }
        public ActionResult Supplierfetch([FromBody] ICDSupplierFetchContext objContext)
        {
            ICDSupplierFetchApplication objout = new ICDSupplierFetchApplication();
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

                // string Urlcon = "/SupplierRegistration?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&supplier_rowid=" + objContext.supplier_rowid + "&supplier_code=" + objContext.supplier_code + "&version_no=" + objContext.version_no;
                string Urlcon = "ICDSupplier/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("ICDSupplier_SingleFetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (ICDSupplierFetchApplication)JsonConvert.DeserializeObject(post_data, typeof(ICDSupplierFetchApplication));
            }
            return Json(objout);
        }
        public ActionResult SupplierSave([FromBody] SaveSupplierContext objContext)
        {
            SaveSupplierApplication objRoot = new SaveSupplierApplication();
            SaveSupplierDocument objDoc = new SaveSupplierDocument();
            SaveSupplierContext objContextDetails = new SaveSupplierContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.SupplierAddress = objContext.SupplierAddress;
            for( int i=0; i<objContextDetails.SupplierAddress.Count; i++ )
            {
                if (objContextDetails.SupplierAddress[i].In_supplier_code == null || objContextDetails.SupplierAddress[i].In_supplier_code == "") //ramya
                {
                    objContextDetails.SupplierAddress[i].In_supplier_code = objContextDetails.Header.In_supplier_code;
                }
            }
            objContextDetails.SupplierTax = objContext.SupplierTax;
            if (objContextDetails.SupplierTax != null)
            {
                for (int i = 0; i < objContextDetails.SupplierTax.Count; i++)
                {
                    if (objContextDetails.SupplierTax[i].In_supplier_code == null || objContextDetails.SupplierTax[i].In_supplier_code == "")
                    {
                        objContextDetails.SupplierTax[i].In_supplier_code = objContextDetails.Header.In_supplier_code;
                    }
                }
            }
            objDoc.context = objContextDetails;
            objRoot.document = objDoc;

            if (objContextDetails.Header.In_mode_flag == "")
            {
                objContextDetails.Header.In_mode_flag = "U";
            }

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
                string Urlcon = "ICDSupplier/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newSaveSupplier", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region List
        public class ICDSupplierRootObject
        {
            public ICDSupplierContext context { get; set; }
            public ICDSupplierApplicationException ApplicationException { get; set; }
        }
        public class ICDSupplierApplication
        {
            public ICDSupplierContext context { get; set; }
            public ICDSupplierApplicationException ApplicationException { get; set; }

        }
        public class ICDSupplierApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class ICDSupplierContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public IList<ICDSupplierList> List { get; set; }

        }
        public class ICDSupplierList
        {

            public int Out_supplier_rowid { get; set; }
            public string Out_supplier_code { get; set; }
            public string Out_version_no { get; set; }
            public string Out_supplier_name { get; set; }
            public string Out_pan_no { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }
            public string Out_ic_name { get; set; }


        }
        #endregion
        #region Fetch 

        public class ICDSupplierFetchApplication
        {

            public ICDSupplierFetchContext context { get; set; }

        }
        public class ICDSupplierFetchContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }

            public int supplier_rowid { get; set; }
            public string supplier_code { get; set; }
            public int version_no { get; set; }
            public ICDSupplierFetchHeader Header { get; set; }
            public IList<ICDSupplierFetchAddress> SupplierAddress { get; set; }
            public IList<ICDSupplierFetchTax> SupplierTax { get; set; }
        }
        public class ICDSupplierFetchHeader
        {
            public Int32 In_supplier_rowid { get; set; }
            public string In_ic_code { get; set; }
            public string In_ic_name { get; set; }
            public string In_supplier_code { get; set; }
            public Int32 In_version_no { get; set; }
            public string In_supplier_name { get; set; }
            public string In_pan_no { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
        }
        public class ICDSupplierFetchAddress
        {
            public string SupplierAddress { get; set; }
            public int In_supplier_addr_rowid { get; set; }
            public string In_supplier_addr_type { get; set; }
            public string In_supplier_addr_type_desc { get; set; }
            public string In_supplier_addr1 { get; set; }
            public string In_supplier_addr2 { get; set; }
            public string In_supplier_country { get; set; }
            public string In_supplier_country_desc { get; set; }
            public string In_supplier_state { get; set; }
            public string In_supplier_state_desc { get; set; }
            public string In_supplier_dist { get; set; }
            public string In_supplier_dist_desc { get; set; }
            public string In_supplier_taluk { get; set; }
            public string In_supplier_taluk_desc { get; set; }
            public string In_supplier_panchayat { get; set; }
            public string In_supplier_panchayat_desc { get; set; }
            public string In_supplier_village { get; set; }
            public string In_supplier_village_desc { get; set; }
            public string In_supplier_pincode { get; set; }
            public string In_supplier_pincode_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class ICDSupplierFetchTax
        {
            public string SupplierTax { get; set; }
            public int In_tax_rowid { get; set; }
            public string In_tax_type { get; set; }
            public string In_tax_reg_no { get; set; }
            public string In_state_code { get; set; }
            public string In_state_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
        }


        #endregion
        #region Save
        public class SaveSupplierHeader
        {
            public int In_supplier_rowid { get; set; }
            public string In_supplier_code { get; set; }
            public int In_version_no { get; set; }
            public string In_supplier_name { get; set; }
            public string In_pan_no { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public int In_supplier_rowid1 { get; set; }
            public string In_supplier_code1 { get; set; }
            public string errorNo { get; set; }

        }
        public class SaveSupplierAddress
        {
            public string In_supplier_code { get; set; }
            public int In_version_no { get; set; }
            public int In_supplier_addr_rowid { get; set; } //ramya
            public string In_supplieraddr_type { get; set; }
            public string In_supplier_addr1 { get; set; }
            public string In_supplier_addr2 { get; set; }
            public string In_supplier_country { get; set; }
            public string In_supplier_state { get; set; }
            public string In_supplier_dist { get; set; }
            public string In_supplier_taluk { get; set; }
            public string In_supplier_panchayat { get; set; }
            public string In_supplier_village { get; set; }
            public string In_supplier_pincode { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string errorNo { get; set; }
        }
        public class SaveSupplierTax
        {
            public string In_supplier_code { get; set; }
            public int In_version_no { get; set; }
            public int In_tax_rowid { get; set; }
            public string In_tax_type { get; set; }
            public string In_tax_reg_no { get; set; }
            public string In_state_code { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SaveSupplierContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SaveSupplierHeader Header { get; set; }
            public IList<SaveSupplierAddress> SupplierAddress { get; set; }
            public IList<SaveSupplierTax> SupplierTax { get; set; }

        }
        public class SaveSupplierDocument
        {
            public SaveSupplierContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        public class SaveSupplierApplication
        {
            public SaveSupplierDocument document { get; set; }

        }
        #endregion
    }
}