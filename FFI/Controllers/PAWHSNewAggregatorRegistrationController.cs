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
    public class PAWHSNewAggregatorRegistrationController : Controller
    {
        // GET: PAWHSAggregatorRegistration
        public ActionResult PAWHSNewAggregatorRegistrationList()
        {
            return View();
        }
        public ActionResult PAWHSNewAggregatorRegistrationForm()
        {
            return View();
        }
        private IConfiguration _configuration;
        public PAWHSNewAggregatorRegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult PAWHSNewAggregatorRegistrationListfetch([FromBody]New_PAWHSAggregator_all_Context context)
        {
           
            New_PAWHSAggregator_all_Application objList = new New_PAWHSAggregator_all_Application();
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
                string Urlcon = "PAWHS_New_Aggregator/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_pawhs_aggregator_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (New_PAWHSAggregator_all_Application)JsonConvert.DeserializeObject(post_data, typeof(New_PAWHSAggregator_all_Application));
            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult GetPAWHSNEWAggregator([FromBody]New_PAWHSAggregator_single_Context objcontext)
        {
            New_PAWHSAggregator_single_Application objfetch = new New_PAWHSAggregator_single_Application();
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
                string Urlcon = "PAWHS_New_Aggregator/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objcontext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_pawhs_aggregator_single", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (New_PAWHSAggregator_single_Application)JsonConvert.DeserializeObject(post_data, typeof(New_PAWHSAggregator_single_Application));
            }
            return Json(objfetch);
        }
        [HttpPost]
        public ActionResult GetMEMBERPAWHSAggregator([FromBody]MContext objContext)
        {
            MApplication objfetch = new MApplication();
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
                string Urlcon = "/Aggr_mem_reg?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&orgn_rowid=" + objContext.orgn_rowid + "&orgn_code=" + objContext.orgn_code + "&aggregator_code=" + objContext.aggregator_code + "&fpo_code=" + objContext.fpo_code;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (MApplication)JsonConvert.DeserializeObject(post_data, typeof(MApplication));
            }
            return Json(objfetch);
        }
        public ActionResult SavePAWHSNewAggregator([FromBody] New_PAWHSAggregator_SContext objContext)
        {
            if (objContext.Address == null)
            {
                objContext.Address = new List<New_PAWHSAggregator_save_Address>();
            }
            if (objContext.FIG == null)
            {
                objContext.FIG = new List<New_PAWHSAggregator_save_FIG>();
            }
            if (objContext.Bank == null)
            {
                objContext.Bank = new List<New_PAWHSAggregator_save_Bank>();
            }

            New_PAWHSAggregator_SApplication objRoot = new New_PAWHSAggregator_SApplication();
            New_PAWHSAggregator_SDocument objDoc = new New_PAWHSAggregator_SDocument();
            New_PAWHSAggregator_SContext objContextDetails = new New_PAWHSAggregator_SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header =objContext.Header;
            objContextDetails.Address = objContext.Address;
            objContextDetails.Bank = objContext.Bank;
            objContextDetails.FIG = objContext.FIG;

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
                string Urlcon = "PAWHS_New_Aggregator/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_pawhs_aggregator_save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region List
        public class New_PAWHSAggregator_all_RootObject
        {
            public New_PAWHSAggregator_all_Context context { get; set; }
            public New_PAWHSAggregator_all_ApplicationException ApplicationException { get; set; }
        }
        public class New_PAWHSAggregator_all_Application
        {
            public New_PAWHSAggregator_all_Context context { get; set; }
            public New_PAWHSAggregator_all_ApplicationException ApplicationException { get; set; }

        }
        public class New_PAWHSAggregator_all_ApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class New_PAWHSAggregator_all_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public IList<New_PAWHSAggregator_all_List> List { get; set; }

        }
       
        public class New_PAWHSAggregator_all_List
        {
            //product_rowid, agg_code,product_code,product_name,product_category,product_subcategory,hsn_code,hsn_description
            public int Out_orgn_rowid { get; set; }
            public string Out_aggregator_code { get; set; }
            public string Out_aggregator_name { get; set; }
            public string Out_orgn_level { get; set; }
            public string Out_aggregator_type { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

        }

        #endregion
        #region Fetch 

        public class New_PAWHSAggregator_single_Application
        {
            //public PAWHSProductmasterFDocument document { get; set; }
            public New_PAWHSAggregator_single_Context context { get; set; }

        }

        public class New_PAWHSAggregator_single_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            //public int IOU_orgn_rowid { get; set; }
            //public string IOU_aggregator_code { get; set; }
            public New_PAWHSAggregator_single_Header Header { get; set; }
            public IList<New_PAWHSAggregator_single_Address> Address { get; set; }
            public IList<New_PAWHSAggregator_single_Bank> Bank { get; set; }
            public IList<New_PAWHSAggregator_single_FIG> FIG { get; set; }
        }

        public class New_PAWHSAggregator_single_Header
        {
            public int IOU_orgn_rowid { get; set; }
            public string IOU_aggregator_code { get; set; }
            public string Out_aggregator_type { get; set; }
            public string Out_fpo_code { get; set; }
            public string Out_fpo_desc { get; set; }
            public string Out_aggregator_name { get; set; }
            public string Out_aggregator_ll_name { get; set; }
            public string Out_orgn_level { get; set; }
            public string Out_facilitator_code { get; set; }
            public string Out_facilitator_name { get; set; }
            public string Out_facilitator_ll_code { get; set; }
            public string Out_facilitator_ll_name { get; set; }
            public string Out_member_name { get; set; }
            public string Out_member_ll_name { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_mode_flag { get; set; }
            public string Out_row_timestamp { get; set; }
        }

        public class New_PAWHSAggregator_single_Address
        {
            public int IOU_orgn_rowid { get; set; }
            public int Out_orgnaddr_rowid { get; set; }
            public string Out_addr_type { get; set; }
            public string Out_addr_type_desc { get; set; }
            public string Out_orgn_addr1 { get; set; }
            public string Out_orgn_addr2 { get; set; }
            public string Out_orgn_country { get; set; }
            public string Out_orgn_country_desc { get; set; }
            public string Out_orgn_state { get; set; }
            public string Out_orgn_state_desc { get; set; }
            public string Out_orgn_dist { get; set; }
            public string Out_orgn_dist_desc { get; set; }
            public string Out_orgn_taluk { get; set; }
            public string Out_orgn_taluk_desc { get; set; }
            public string Out_orgn_panchayat { get; set; }
            public string Out_orgn_panchayat_desc { get; set; }
            public string Out_orgn_village { get; set; }
            public string Out_orgn_village_desc { get; set; }
            public string Out_orgn_pincode { get; set; }
            public string Out_orgn_pincode_desc { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_mode_flag { get; set; }
        }

        public class New_PAWHSAggregator_single_Bank
        {
            public int IOU_orgn_rowid { get; set; }
            public int Out_orgnbank_rowid { get; set; }
            public string Out_bank_acc_no { get; set; }
            public string Out_bank_acc_type { get; set; }
            public string Out_bank_acc_type_desc { get; set; }
            public string Out_bank_code { get; set; }
            public string Out_bank_desc { get; set; }
            public string Out_branch_code { get; set; }
            public string Out_branch_desc { get; set; }
            public string Out_ifsc_code { get; set; }
            public string Out_dflt_dr_acc { get; set; }
            public string Out_dflt_dr_acc_desc { get; set; }
            public string Out_dflt_cr_acc { get; set; }
            public string Out_dflt_cr_acc_desc { get; set; }
            public string Out_bank_acc_purpose { get; set; }
            public string Out_bank_acc_purpose_desc { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_mode_flag { get; set; }
        }

        public class New_PAWHSAggregator_single_FIG
        {
            public int IOU_orgn_rowid { get; set; }
            public int Out_aggrfig_rowid { get; set; }
            public string Out_aggrfig_type { get; set; }
            public string Out_aggrfig_type_desc { get; set; }
            public string Out_aggrfig_code { get; set; }
            public string Out_aggrfig_name { get; set; }
            public string Out_aggrvillage_code { get; set; }
            public string Out_aggrvillage_name { get; set; }
            public string Out_contact_person { get; set; }
            public string Out_contact_no { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_mode_flag { get; set; }
        }
        #endregion
        #region Save

        public class New_PAWHSAggregator_SApplication
        {
            public New_PAWHSAggregator_SDocument document { get; set; }

        }
        public class New_PAWHSAggregator_SDocument
        {
            public New_PAWHSAggregator_SContext context { get; set; }

        }
        public class New_PAWHSAggregator_SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }


            public New_PAWHSAggregator_saveHeader Header { get; set; }
            public IList<New_PAWHSAggregator_save_Address> Address { get; set; }
            public IList<New_PAWHSAggregator_save_Bank> Bank { get; set; }
            public IList<New_PAWHSAggregator_save_FIG> FIG { get; set; }

        }

        public class New_PAWHSAggregator_saveHeader
        {
            public int IOU_orgn_rowid { get; set; }
            public string IOU_aggregator_code { get; set; }
            public string Out_aggregator_type { get; set; }
            public string Out_fpo_code { get; set; }
            public string Out_aggregator_name { get; set; }
            public string Out_aggregator_ll_name { get; set; }
            public string Out_orgn_level { get; set; }
            public string Out_facilitator_code { get; set; }
            public string Out_facilitator_ll_code { get; set; }
            public string Out_facilitator_ll_name { get; set; }
            public string Out_member_name { get; set; }
            public string Out_member_ll_name { get; set; }
            public string Out_status_code { get; set; }
            public string Out_mode_flag { get; set; }
            public string Out_row_timestamp { get; set; }
        }

        public class New_PAWHSAggregator_save_Address
        {

            public int Out_orgnaddr_rowid { get; set; }
            public string Out_addr_type { get; set; }
            public string Out_orgn_addr1 { get; set; }
            public string Out_orgn_addr2 { get; set; }
            public string Out_orgn_country { get; set; }
            public string Out_orgn_state { get; set; }
            public string Out_orgn_dist { get; set; }
            public string Out_orgn_taluk { get; set; }
            public string Out_orgn_panchayat { get; set; }
            public string Out_orgn_village { get; set; }
            public string Out_orgn_pincode { get; set; }
            public string Out_status_code { get; set; }
            public string Out_mode_flag { get; set; }
        }

        public class New_PAWHSAggregator_save_Bank
        {

            public int Out_orgnbank_rowid { get; set; }
            public string Out_bank_acc_no { get; set; }
            public string Out_bank_acc_type { get; set; }
            public string Out_bank_code { get; set; }
            public string Out_branch_code { get; set; }
            public string Out_ifsc_code { get; set; }
            public string Out_dflt_dr_acc { get; set; }
            public string Out_dflt_cr_acc { get; set; }
            public string Out_bank_acc_purpose { get; set; }
            public string Out_status_code { get; set; }
            public string Out_mode_flag { get; set; }
        }

        public class New_PAWHSAggregator_save_FIG
        {

            public int Out_aggrfig_rowid { get; set; }
            public string Out_aggrfig_type { get; set; }
            public string Out_aggrfig_code { get; set; }
            public string Out_aggrfig_name { get; set; }
            public string Out_aggrvillage_code { get; set; }
            public string Out_aggrvillage_name { get; set; }
            public string Out_contact_person { get; set; }
            public string Out_contact_no { get; set; }
            public string Out_status_code { get; set; }
            public string Out_mode_flag { get; set; }
        }

        #endregion
        #region memeber
        public class MHeader
        {
            public int IOU_orgn_rowid { get; set; }
            public string IOU_aggregator_code { get; set; }
            public string Out_orgn_code { get; set; }
            public string Out_fpo_code { get; set; }
            public string Out_fpo_desc { get; set; }
            public string Out_aggregator_type { get; set; }
            public string Out_aggregator_name { get; set; }
            public string Out_aggregator_ll_name { get; set; }
            public string Out_orgn_level { get; set; }
            public string Out_facilitator_code { get; set; }
            public string Out_facilitator_name { get; set; }
            public string Out_facilitator_ll_code { get; set; }
            public string Out_facilitator_ll_name { get; set; }
            public string Out_member_name { get; set; }
            public string Out_member_ll_name { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_mode_flag { get; set; }
            public string Out_row_timestamp { get; set; }

        }
        public class MAddress
        {
            public int Out_orgnaddr_rowid { get; set; }
            public string Out_addr_type { get; set; }
            public string Out_addr_type_desc { get; set; }
            public string Out_orgn_addr1 { get; set; }
            public string Out_orgn_addr2 { get; set; }
            public string Out_orgn_country { get; set; }
            public string Out_orgn_country_desc { get; set; }
            public string Out_orgn_state { get; set; }
            public string Out_orgn_state_desc { get; set; }
            public string Out_orgn_dist { get; set; }
            public string Out_orgn_dist_desc { get; set; }
            public string Out_orgn_taluk { get; set; }
            public string Out_orgn_taluk_desc { get; set; }
            public string Out_orgn_panchayat { get; set; }
            public string Out_orgn_panchayat_desc { get; set; }
            public string Out_orgn_village { get; set; }
            public string Out_orgn_village_desc { get; set; }
            public string Out_orgn_pincode { get; set; }
            public string Out_orgn_pincode_desc { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_mode_flag { get; set; }

        }
        public class MBank
        {
            public int Out_orgnbank_rowid { get; set; }
            public string Out_bank_acc_no { get; set; }
            public string Out_bank_acc_type { get; set; }
            public string Out_bank_acc_type_desc { get; set; }
            public string Out_bank_code { get; set; }
            public string Out_bank_desc { get; set; }
            public string Out_branch_code { get; set; }
            public string Out_branch_desc { get; set; }
            public string Out_ifsc_code { get; set; }
            public string Out_dflt_dr_acc { get; set; }
            public string Out_dflt_dr_acc_desc { get; set; }
            public string Out_dflt_cr_acc { get; set; }
            public string Out_dflt_cr_acc_desc { get; set; }
            public string Out_bank_acc_purpose { get; set; }
            public string Out_bank_acc_purpose_desc { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_mode_flag { get; set; }

        }
        public class FIG
        {
            public int Out_aggrfig_rowid { get; set; }
            public string Out_aggrfig_type { get; set; }
            public string Out_aggrfig_type_desc { get; set; }
            public string Out_aggrfig_code { get; set; }
            public string Out_aggrfig_name { get; set; }
            public string Out_aggrvillage_code { get; set; }
            public string Out_aggrvillage_name { get; set; }
            public string Out_contact_person { get; set; }
            public string Out_contact_no { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_mode_flag { get; set; }

        }
        public class MContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public MHeader Header { get; set; }
            public IList<MAddress> Address { get; set; }
            public IList<MBank> Bank { get; set; }
            public IList<FIG> FIG { get; set; }
            public int orgn_rowid { get; set; }
            public string orgn_code { get; set; }
            public string aggregator_code { get; set; }
            public string fpo_code { get; set; }

        }
        public class MApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class MApplication
        {
            public MContext context { get; set; }
            public MApplicationException ApplicationException { get; set; }

        }
        #endregion

    }
}