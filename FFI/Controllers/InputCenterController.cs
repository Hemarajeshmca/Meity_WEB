using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class InputCenterController : Controller
    {
        private IConfiguration _configuration;
        public InputCenterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        // GET: InputCenter
        public ActionResult InputCenterForm()
        {
            ViewBag.ICDLogin = _configuration.GetSection("AppSettings")["ICDLogin"].ToString();
            return View();
        }
        public ActionResult InputCenterList()
        {
            return View();
        }
        [HttpPost]
        public JsonResult InputListfetch([FromBody] Context context)
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
                //string Urlcon = "/allipcenter?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.DefaultRequestHeaders.Accept.Clear();
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                //Stream data = response.Content.ReadAsStreamAsync().Result;
                //StreamReader reader = new StreamReader(data);
                //post_data = reader.ReadToEnd();
                //objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

                //      urlstring = "http://localhost:51379/api/";
                string Urlcon = "ICDInputCenter/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("ICDInputCenter_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult Inputfetch([FromBody] FContext objContext)
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
                //string Urlcon = "/inputcenter?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&ic_rowid=" + objContext.ic_rowid + "&orgn_code=" + objContext.orgn_code + "&version_no=" + objContext.version_no;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.DefaultRequestHeaders.Accept.Clear();
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                //Stream data = response.Content.ReadAsStreamAsync().Result;
                //StreamReader reader = new StreamReader(data);
                //post_data = reader.ReadToEnd();
                //objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));

                //  urlstring = "http://localhost:51379/api/";
                string Urlcon = "ICDInputCenter/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("ICDInputCenter_SingleFetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(post_data);
        }
        [HttpPost]
        public ActionResult SaveInput([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.userId = objContext.userId;
            objContextDetails.localeId = objContext.localeId;

            objContextDetails.Bank = objContext.Bank;
            objContextDetails.Address = objContext.Address;
            objContextDetails.User = objContext.User;
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
                //string Urlcon = "/newsaveInputCenter";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.DefaultRequestHeaders.Accept.Clear();
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                //Stream data = response.Content.ReadAsStreamAsync().Result;
                //StreamReader reader = new StreamReader(data);
                //post_data = reader.ReadToEnd();
                //     urlstring = "http://localhost:51379/api/";
                string Urlcon = "ICDInputCenter/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("ICDInputCenter_Save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region list
        public class List
        {
            public int Out_ic_rowid { get; set; }
            public string Out_ic_code { get; set; }
            public string Out_ic_name { get; set; }
            public string Out_orgn_code { get; set; }
            public int Out_version_no { get; set; }
            public string Out_orgn_cin { get; set; }
            public string Out_primary_lang_code { get; set; }
            public string Out_parent_code { get; set; }
            public string Out_orgn_name { get; set; }
            public string Out_orgn_ll_name { get; set; }
            public string Out_orgn_level { get; set; }
            public string Out_orgn_level_desc { get; set; }
            public string Out_orgn_type { get; set; }
            public string Out_orgn_type_desc { get; set; }
            public string Out_orgn_subtype { get; set; }
            public string Out_orgn_subtype_desc { get; set; }
            public string Out_secondary_lang_code { get; set; }
            public string Out_orgn_logo { get; set; }
            public string Out_orgn_auth_sign { get; set; }
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
        #region save
        public class SHeader
        {
            public int IOU_orgn_rowid { get; set; }
            public string IOU_orgn_code { get; set; }
            public int IOU_version_no { get; set; }
            public string In_orgn_cin { get; set; }
            public string In_parent_code { get; set; }
            public string In_orgn_name { get; set; }
            public string In_orgn_ll_name { get; set; }
            public string In_orgn_level { get; set; }
            public string In_orgn_type { get; set; }
            public string In_orgn_subtype { get; set; }
            public string In_primary_lang_code { get; set; }
            public string In_secondary_lang_code { get; set; }
            public string In_orgn_logo { get; set; }
            public string In_orgn_auth_sign { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_inputcenter_code { get; set; }
            public string In_inputcenter_type { get; set; }
            public string In_inputcenter_name { get; set; }
            public string In_fpo_name { get; set; }

        }
        public class SAddress
        {
            public int In_orgnaddr_rowid { get; set; }
            public string In_addr_type { get; set; }
            public string In_orgn_add1 { get; set; }
            public string In_orgn_addr2 { get; set; }
            public string In_orgn_country { get; set; }
            public string In_orgn_state { get; set; }
            public string In_orgn_dist { get; set; }
            public string In_orgn_taluk { get; set; }
            public string In_orgn_panchayat { get; set; }
            public string In_orgn_village { get; set; }
            public string In_orgn_pincode { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SBank
        {
            public int In_orgnbank_rowid { get; set; }
            public string In_bank_acc_no { get; set; }
            public string In_bank_acc_type { get; set; }
            public string In_bank_code { get; set; }
            public string In_branch_code { get; set; }
            public string In_ifsc_code { get; set; }
            public string In_dflt_dr_acc { get; set; }
            public string In_dflt_cr_acc { get; set; }
            public string In_bank_acc_purpose { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SUser
        {
            public int In_aggrlocuser_rowid { get; set; }
            public string In_aggrorgn_type { get; set; }
            public string In_aggrorgn_code { get; set; }
            public string In_aggrloc_type { get; set; }
            public string In_aggrloc_code { get; set; }
            public string In_role_code { get; set; }
            public string In_user_code { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string errorMsg { get; set; }
            public SHeader Header { get; set; }
            public IList<SAddress> Address { get; set; }
            public IList<SBank> Bank { get; set; }
            public IList<SUser> User { get; set; }

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
        public class FHeader
        {
            public int IOU_orgn_rowid { get; set; }
            public string IOU_orgn_code { get; set; }
            public int IOU_version_no { get; set; }
            public string In_orgn_cin { get; set; }
            public string In_parent_code { get; set; }
            public string In_orgn_name { get; set; }
            public string In_orgn_ll_name { get; set; }
            public string In_orgn_level { get; set; }
            public string In_orgn_level_desc { get; set; }
            public string In_orgn_type { get; set; }
            public string In_orgn_type_desc { get; set; }
            public string In_orgn_subtype { get; set; }
            public string In_orgn_subtype_desc { get; set; }
            public string In_primary_lang_code { get; set; }
            public string In_secondary_lang_code { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_ic_code { get; set; }
            public string In_ic_type { get; set; }
            public string In_ic_name { get; set; }
            public string In_fpo_name { get; set; }
            public string In_orgn_logo { get; set; }
            public string In_orgn_auth_sign { get; set; }

        }
        public class FAddress
        {
            public int In_orgnaddr_rowid { get; set; }
            public string In_addr_type { get; set; }
            public string In_addr_type_desc { get; set; }
            public string In_orgn_add1 { get; set; }
            public string In_orgn_addr2 { get; set; }
            public string In_orgn_country { get; set; }
            public string In_orgn_country_desc { get; set; }
            public string In_orgn_state { get; set; }
            public string In_orgn_state_desc { get; set; }
            public string In_orgn_dist { get; set; }
            public string In_orgn_dist_desc { get; set; }
            public string In_orgn_taluk { get; set; }
            public string In_orgn_taluk_desc { get; set; }
            public string In_orgn_panchayat { get; set; }
            public string In_orgn_panchayat_desc { get; set; }
            public string In_orgn_village { get; set; }
            public string In_orgn_village_desc { get; set; }
            public string In_orgn_pincode { get; set; }
            public string In_orgn_pincode_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FBank
        {
            public int In_orgnbank_rowid { get; set; }
            public string In_bank_acc_no { get; set; }
            public string In_bank_acc_type { get; set; }
            public string In_bank_acc_type_desc { get; set; }
            public string In_bank_code { get; set; }
            public string In_bank_desc { get; set; }
            public string In_branch_code { get; set; }
            public string In_branch_desc { get; set; }
            public string In_ifsc_code { get; set; }
            public string In_dflt_dr_acc { get; set; }
            public string In_dflt_dr_acc_desc { get; set; }
            public string In_dflt_cr_acc { get; set; }
            public string In_dflt_cr_acc_desc { get; set; }
            public string In_bank_acc_purpose { get; set; }
            public string In_bank_acc_purpose_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FUser
        {
            public int In_aggrlocuser_rowid { get; set; }
            public string In_aggrorgn_type { get; set; }
            public string In_aggrorgn_type_desc { get; set; }
            public string In_aggrorgn_code { get; set; }
            public string In_aggrloc_type { get; set; }
            public string In_aggrloc_type_desc { get; set; }
            public string In_aggrloc_code { get; set; }
            public string In_role_code { get; set; }
            public string In_user_code { get; set; }
            public string In_user_name { get; set; }
            public string In_email_id { get; set; }
            public string In_contact_no { get; set; }
            public string In_valid_till { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FHeader Header { get; set; }
            public IList<FAddress> Address { get; set; }
            public IList<FBank> Bank { get; set; }
            public IList<FUser> User { get; set; }
            public int version_no { get; set; }
            public string orgn_code { get; set; }
            public int ic_rowid { get; set; }

        }
        public class FApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class FApplication
        {
            public FContext context { get; set; }
            public FApplicationException ApplicationException { get; set; }

        }
        #endregion
    }
}