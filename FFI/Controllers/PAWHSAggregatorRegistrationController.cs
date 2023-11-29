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
    public class PAWHSAggregatorRegistrationController : Controller
    {
        // GET: PAWHSAggregatorRegistration
        public ActionResult PAWHSAggregatorRegistrationList()
        {
            return View();
        }
        public ActionResult PAWHSAggregatorRegistrationForm()
        {
            return View();
        }
        private IConfiguration _configuration;
        public PAWHSAggregatorRegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult PAWHSAggregatorListfetch([FromBody]Context context)
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
            //    urlstring = "http://localhost:51379/api/";
                // string Urlcon = "/allaggregator_registration?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "Admin_AggregatorRegistration/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("allaggregator_registration?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + 
                    context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + 
                    context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + 
                    context.FilterBy_ToValue + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult GetPAWHSAggregator([FromBody]FContext objContext)
        {
            FApplication objfetch = new FApplication();
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
            //    urlstring = "http://localhost:51379/api/";
                // string Urlcon = "/aggregator_registration?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&orgn_rowid=" + objContext.Header.IOU_orgn_rowid + "&aggregator_code=" + objContext.Header.IOU_aggregator_code ;
                string Urlcon = "Admin_AggregatorRegistration/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("aggregator_registration?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + 
                    "&lang=" + objContext.localeId + "&orgn_rowid=" + objContext.Header.IOU_orgn_rowid + "&aggregator_code=" + 
                    objContext.Header.IOU_aggregator_code).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objfetch);
        }
        [HttpPost]
        // public ActionResult GetMEMBERPAWHSAggregator([FromBody]MContext objContext)
        public ActionResult GetMEMBERPAWHSAggregator(string userId, string orgnId, string locnId, string localeId, int orgn_rowid,string orgn_code,string aggregator_code,string fpo_code)
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
            //using (var client = new HttpClient())
            //{
            //    // string Urlcon = "/Aggr_mem_reg?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&orgn_rowid=" + objContext.orgn_rowid + "&orgn_code=" + objContext.orgn_code + "&aggregator_code=" + objContext.aggregator_code + "&fpo_code=" + objContext.fpo_code;
            //    string Urlcon = "Admin_AggregatorRegistration/";
            //    client.BaseAddress = new Uri(urlstring + Urlcon);
            //    client.DefaultRequestHeaders.Accept.Clear();
            //    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            //    HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
            //    //var response = client.GetAsync("Aggr_mem_reg?org = " + objContext.orgnId + " & locn = " + objContext.locnId + " & user = " + objContext.userId + " & lang = " + objContext.localeId + " & orgn_rowid = " + objContext.orgn_rowid + " & orgn_code = " + objContext.orgn_code + " & aggregator_code = " + objContext.aggregator_code + " & fpo_code = " + objContext.fpo_code).Result;
            //    var response = client.GetAsync("Aggr_mem_reg?orgnId = " + orgnId + " & locnId = " + locnId + " & userId = " + userId + " & localeId = " + localeId + " & orgn_rowid = " + orgn_rowid + " & orgn_code = " + orgn_code + " & aggregator_code = " + aggregator_code + " & fpo_code = " + fpo_code).Result;
            //    Stream data = response.Content.ReadAsStreamAsync().Result;
            //    StreamReader reader = new StreamReader(data);
            //    post_data = reader.ReadToEnd();
            //    objfetch = (MApplication)JsonConvert.DeserializeObject(post_data, typeof(MApplication));
            //}
            //return Json(objfetch);
            using (var client = new HttpClient())
            {
                // string Urlcon = "/roleactivity?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&role_rowid=" + objContext.role_rowid + "&orgn_level=" + objContext.orgn_level ;
                string Urlcon = "Admin_AggregatorRegistration/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("Aggr_mem_reg?orgnId=" + orgnId + "&locnId=" + locnId + "&userId=" + userId + "&localeId=" + localeId + "&orgn_rowid=" + orgn_rowid + "&orgn_code=" + orgn_code + "&aggregator_code=" + aggregator_code + "&fpo_code=" + fpo_code).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (MApplication)JsonConvert.DeserializeObject(post_data, typeof(MApplication));
            }
            return Json(objfetch);
        }
        public ActionResult SavePAWHSAggregator([FromBody] SContext objContext)
        {
            if (objContext.Header.Address == null)
            {
                objContext.Header.Address = new List<SAddress>();
            }
            if (objContext.Header.Fig == null)
            {
                objContext.Header.Fig = new List<SFig>();
            }           
            if (objContext.Header.Bank == null)
            {
                objContext.Header.Bank = new List<SBank>();
            }

            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;

            SHeader objHederDetails = new SHeader();
            objHederDetails = objContext.Header;
            objHederDetails.Address = objContext.Header.Address;
            objHederDetails.Fig = objContext.Header.Fig;          
            objHederDetails.Bank = objContext.Header.Bank;
          

            objContextDetails.Header = objHederDetails;
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
                //string Urlcon = "/new_aggregator_registration";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.DefaultRequestHeaders.Accept.Clear();
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                //Stream data = response.Content.ReadAsStreamAsync().Result;
                //StreamReader reader = new StreamReader(data);
                //post_data = reader.ReadToEnd();

              //  urlstring = "http://localhost:51379/api/";
                string Urlcon = "Admin_AggregatorRegistration/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_aggregator_registration", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region list
        public class List
        {
            public int Out_orgn_rowid { get; set; }
            public string Out_aggregator_code { get; set; }
            public string Out_aggregator_name { get; set; }
            public string Out_orgn_level { get; set; }
            public string Out_aggregator_type { get; set; }
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
        #region fetch
        public class Address
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
        public class Bank
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
        public class Fig
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
        public class Header
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
            public IList<Address> Address { get; set; }
            public IList<Bank> Bank { get; set; }
            public IList<Fig> Fig { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }

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
        #region save
        public class SAddress
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
        public class SBank
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
        public class SFig
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
        public class SHeader
        {
            public int IOU_orgn_rowid { get; set; }
            public string IOU_aggregator_code { get; set; }
            public string Out_aggregator_type { get; set; }
            public string Out_orgn_code { get; set; }
            public string Out_fpo_code { get; set; }
            public string Out_aggregator_name { get; set; }
            public string Out_aggregator_ll_name { get; set; }
            public string Out_orgn_level { get; set; }
            public string Out_facilitator_code { get; set; }
            public string Out_facilitator_ll_code { get; set; }
            public string Out_member_name { get; set; }
            public string Out_member_ll_name { get; set; }
            public string Out_status_code { get; set; }
            public string Out_mode_flag { get; set; }
            public string Out_row_timestamp { get; set; }
            public IList<SAddress> Address { get; set; }
            public IList<SBank> Bank { get; set; }
            public IList<SFig> Fig { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SHeader Header { get; set; }

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
            public Header Header { get; set; }
            public IList<Address> Address { get; set; }
            public IList<Bank> Bank { get; set; }
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