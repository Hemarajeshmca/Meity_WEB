using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class PAWHSNEWBuyerMaster : Controller
    {
        public IActionResult BuyermasterList()
        {
            return View();
        }
        public IActionResult Buyermaster()
        {
            return View();
        }
        string dbstring = "";
        private MySqlConnection con;
        private IConfiguration _configuration;
        public PAWHSNEWBuyerMaster(IConfiguration configuration)
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
        public JsonResult BuyerMasterList([FromBody] PawhsBuyerMasterContext context)
        {
            PawhsBuyerMasterApplication objList = new PawhsBuyerMasterApplication();
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

                string Urlcon = "New_Pawhs_BuyerMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("BuyerMaster_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PawhsBuyerMasterApplication)JsonConvert.DeserializeObject(post_data, typeof(PawhsBuyerMasterApplication));

            }
            return Json(objList);
        }
        public ActionResult BuyerMasterfetch([FromBody] PawhsBuyerMasterFetchContext objContext)
        {
            PawhsBuyerMasterFetchApplication objout = new PawhsBuyerMasterFetchApplication();
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

                string Urlcon = "New_Pawhs_BuyerMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("BuyerMaster_SingleFetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PawhsBuyerMasterFetchApplication)JsonConvert.DeserializeObject(post_data, typeof(PawhsBuyerMasterFetchApplication));
            }
            return Json(objout);
        }
        public ActionResult BuyerMasterSave([FromBody] SavebuyerContext objContext)
        {
            SavebuyerApplication objRoot = new SavebuyerApplication();
            SavebuyerDocument objDoc = new SavebuyerDocument();
            SavebuyerContext objContextDetails = new SavebuyerContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.buyerAddress = objContext.buyerAddress;
          
            for (int i = 0; i < objContextDetails.buyerAddress.Count; i++)
            {
                if (objContextDetails.buyerAddress[0].In_buyer_code == null || objContextDetails.buyerAddress[0].In_buyer_code == "")
                {
                    objContextDetails.buyerAddress[0].In_buyer_code = objContextDetails.Header.In_buyer_code;
                }
            }

            objContextDetails.buyerTax = objContext.buyerTax;
            for (int i = 0; i < objContextDetails.buyerTax.Count; i++)
            {
                if (objContextDetails.buyerTax[0].In_buyer_code == null || objContextDetails.buyerTax[0].In_buyer_code == "")
                {
                    objContextDetails.buyerTax[0].In_buyer_code = objContextDetails.Header.In_buyer_code;
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
                string Urlcon = "New_Pawhs_BuyerMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newSaveBuyerMaster", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (SavebuyerDocument)JsonConvert.DeserializeObject(post_data, typeof(SavebuyerDocument));
            }
            return Json(objDoc);
        }

        public string GetBuyerCode(string BuyerCode)
        {
            DataTable dt = new DataTable();

            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "bh")
            {
                dbstring = _configuration.GetSection("dbtypeBA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_dev")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_uat")["api_url"] = _configuration.GetSection("odUat")["api_url"];
                }
                else
                {
                    _configuration.GetSection("Api_pro")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("BuyerCode_fetch", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_buyer_code", BuyerCode));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }

        #region List
        public class PawhsBuyerMasterRootObject
        {
            public PawhsBuyerMasterContext context { get; set; }
            public PawhsBuyerMasterApplicationException ApplicationException { get; set; }
        }
        public class PawhsBuyerMasterApplication
        {
            public PawhsBuyerMasterContext context { get; set; }
            public PawhsBuyerMasterApplicationException ApplicationException { get; set; }

        }
        public class PawhsBuyerMasterApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PawhsBuyerMasterContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public IList<PawhsBuyerMasterList> List { get; set; }

        }
        public class PawhsBuyerMasterList
        {

            public int Out_buyer_rowid { get; set; }
            public string Out_buyer_code { get; set; }
            public string Out_version_no { get; set; }
            public string Out_buyer_name { get; set; }
            public string Out_pan_no { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

            public string Out_mob_no { get; set; }
            public string Out_whatsapp_no { get; set; }
            public string Out_contact_person { get; set; }
            public string Out_emailid { get; set; }
            public string Out_onboarding_date { get; set; }
            public string Out_buyer_type { get; set; }
        }
        #endregion
        #region Fetch 

        public class PawhsBuyerMasterFetchApplication
        {

            public PawhsBuyerMasterFetchContext context { get; set; }

        }
        public class PawhsBuyerMasterFetchContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }

            public int buyer_rowid { get; set; }
            public string buyer_code { get; set; }
            public int version_no { get; set; }
            public PawhsBuyerMasterFetchHeader Header { get; set; }
            public IList<PawhsBuyerMasterFetchAddress> buyerAddress { get; set; }
            public IList<PawhsBuyerMasterFetchTax> buyerTax { get; set; }
        }
        public class PawhsBuyerMasterFetchHeader
        {
            public Int32 In_buyer_rowid { get; set; }
            public string In_buyer_code { get; set; }
            public Int32 In_version_no { get; set; }
            public string In_buyer_name { get; set; }
            public string In_pan_no { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_MobileNo { get; set; }
            public string In_WhatsappeNo { get; set; }
            public string In_Contact_name { get; set; }
            public string In_Email { get; set; }
            public string In_Onboard_Date { get; set; }
            public string In_buyer_type { get; set; }


        }
        public class PawhsBuyerMasterFetchAddress
        {
            public string buyerAddress { get; set; }
            public int In_buyer_addr_rowid { get; set; }
            public string In_buyeraddr_type { get; set; }
            public string In_buyer_addr_type_desc { get; set; }
            public string In_buyer_addr1 { get; set; }
            public string In_buyer_addr2 { get; set; }
            public string In_buyer_country { get; set; }
            public string In_buyer_country_desc { get; set; }
            public string In_buyer_state { get; set; }
            public string In_buyer_state_desc { get; set; }
            public string In_buyer_dist { get; set; }
            public string In_buyer_dist_desc { get; set; }
            public string In_buyer_taluk { get; set; }
            public string In_buyer_taluk_desc { get; set; }
            public string In_buyer_panchayat { get; set; }
            public string In_buyer_panchayat_desc { get; set; }
            public string In_buyer_village { get; set; }
            public string In_buyer_village_desc { get; set; }
            public string In_buyer_pincode { get; set; }
            public string In_buyer_pincode_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class PawhsBuyerMasterFetchTax
        {
            public string buyerTax { get; set; }
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
        public class SavebuyerHeader
        {
            public int In_buyer_rowid { get; set; }
            public string In_buyer_code { get; set; }
            public int In_version_no { get; set; }
            public string In_buyer_name { get; set; }
            public string In_pan_no { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public int In_buyer_rowid1 { get; set; }
            public string In_buyer_code1 { get; set; }
            public string errorNo { get; set; } 
            public string In_MobileNo { get; set; }
            public string In_WhatsappeNo { get; set; }
            public string In_Contact_name { get; set; }
            public string In_Email { get; set; }
            public string In_Onboard_Date { get; set; }
            public string module_code { get; set; }

        }
        public class SavebuyerAddress
        {
            public string In_buyer_code { get; set; }
            public int In_version_no { get; set; }
            public int In_buyeraddr_rowid { get; set; }
            public string In_buyeraddr_type { get; set; }
            public string In_buyer_addr1 { get; set; }
            public string In_buyer_addr2 { get; set; }
            public string In_buyer_country { get; set; }
            public string In_buyer_state { get; set; }
            public string In_buyer_dist { get; set; }
            public string In_buyer_taluk { get; set; }
            public string In_buyer_panchayat { get; set; }
            public string In_buyer_village { get; set; }
            public string In_buyer_pincode { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string errorNo { get; set; }
        }
        public class SavebuyerTax
        {
            public string In_buyer_code { get; set; }
            public int In_version_no { get; set; }
            public int In_tax_rowid { get; set; }
            public string In_tax_type { get; set; }
            public string In_tax_reg_no { get; set; }
            public string In_state_code { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SavebuyerContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SavebuyerHeader Header { get; set; }
            public IList<SavebuyerAddress> buyerAddress { get; set; }
            public IList<SavebuyerTax> buyerTax { get; set; }

        }
        public class SavebuyerDocument
        {
            public SavebuyerContext context { get; set; }
            public PawhsBuyerMasterApplicationException ApplicationException { get; set; }

        }
        public class SavebuyerApplication
        {
            public SavebuyerDocument document { get; set; }

        }
        #endregion
    }
}
