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
    public class FPOListMakerController : Controller
    {
        private IConfiguration _configuration;
        public FPOListMakerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";

        // GET: FPOListMaker
        public ActionResult FPOListMaker()
        {
            return View();
        }
        public ActionResult FPOListMakerForm()
        {
            return View();
        }
        [HttpPost]
        public JsonResult FPOList([FromBody]fetchcontextlist context)
        {
            RootObjectlist objList = new RootObjectlist();
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
                //string Urlcon = "/allfpo_reg?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.list.FilterBy_Option + "&filterby_code=" + context.list.FilterBy_Code + "&filterby_fromvalue=" + context.list.FilterBy_FromValue + "&filterby_tovalue=" + context.list.FilterBy_ToValue + "";
                string Urlcon = "FDRFpoReg/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("allfpo_reg?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.list.FilterBy_Option + "&filterby_code=" + context.list.FilterBy_Code + "&filterby_fromvalue=" + context.list.FilterBy_FromValue + "&filterby_tovalue=" + context.list.FilterBy_ToValue + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (RootObjectlist)JsonConvert.DeserializeObject(post_data, typeof(RootObjectlist));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveFPOWithMySql([FromBody]saveContext objContext)
        {
            if (objContext.header.address == null)
            {
                objContext.header.address = new List<Address>();
            }
            if (objContext.header.fig == null)
            {
                objContext.header.fig = new List<Fig>();
            }
            if (objContext.header.bearers == null)
            {
                objContext.header.bearers = new List<Bearer>();
            }
            if (objContext.header.bank == null)
            {
                objContext.header.bank = new List<Bank>();
            }
            if (objContext.header.tax == null)
            {
                objContext.header.tax = new List<Tax>();
            }
            if (objContext.header.user == null)
            {
                objContext.header.user = new List<User>();
            }
            if (objContext.header.CheckList == null)
            {
                objContext.header.CheckList = new List<CheckList>();
            }
            if (objContext.header.LoanDet == null)
            {
                objContext.header.LoanDet = new List<LoanDet>();
            }

            RootObject objRoot = new RootObject();
            Document objDoc = new Document();
            Context objContextDetails = new Context();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;

            Header objHederDetails = new Header();
            objHederDetails = objContext.header;
            objHederDetails.address = objContext.header.address;
            objHederDetails.fig = objContext.header.fig;
            objHederDetails.bearers = objContext.header.bearers;
            objHederDetails.bank = objContext.header.bank;
            objHederDetails.tax = objContext.header.tax;
            objHederDetails.user = objContext.header.user;
            objHederDetails.GeoLoc = objContext.header.GeoLoc;
            objHederDetails.CheckList = objContext.header.CheckList;
            objHederDetails.LoanDet = objContext.header.LoanDet;
            objContextDetails.header = objHederDetails;
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
                string Urlcon = "FDRFpoReg/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("newfporeg", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (Document)JsonConvert.DeserializeObject(post_data, typeof(Document));
            }
            return Json(objDoc);
        }
        [HttpPost]
        public ActionResult GetFPO([FromBody]Context objContext)
        {
            RootObjectFetch objfetch = new RootObjectFetch();
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
                // string Urlcon = "/Fpo_reg_orgn?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&orgn_rowid=" + objContext.header.inout_orgn_rowid + "&orgn_code=" + objContext.header.inout_orgn_code + "&version_no=" + objContext.header.inout_version_no + "";
                string Urlcon = "FDRFpoReg/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("Fpo_reg_orgn?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&orgn_rowid=" + objContext.header.inout_orgn_rowid + "&orgn_code=" + objContext.header.inout_orgn_code + "&version_no=" + objContext.header.inout_version_no + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (RootObjectFetch)JsonConvert.DeserializeObject(post_data, typeof(RootObjectFetch));
            }
            return Json(objfetch);
        }
        public ActionResult GetFPOTraila(Context objContext, int org_rowid, string org_code, int version_no)
        {
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
            RootObjectFetch objfetch = new RootObjectFetch();
            string post_data = "";
            using (var client = new HttpClient())
            {
                string Urlcon = "/FetchFPO?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&orgn_rowid=" + org_rowid + "&orgn_code=" + org_code + "&version_no=" + version_no + "";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (RootObjectFetch)JsonConvert.DeserializeObject(post_data, typeof(RootObjectFetch));

                Header1 objnewHeader = objfetch.context.Header;
                List<Address1> objnewaddres = objfetch.context.Header.Address;
                List<Bank1> objnewbank = objfetch.context.Header.Bank;
                List<Bearer1> objnewbearers = objfetch.context.Header.Bearers;
                List<Fig1> objnewFig = objfetch.context.Header.Fig;
                List<Tax1> objnewtax = objfetch.context.Header.Tax;
                List<User1> objnewuser = objfetch.context.Header.User;
                List<CheckList1> objnewchecklist = objfetch.context.Header.CheckList;
                List<LoanDet1> objnewLoandet = objfetch.context.Header.LoanDet;


                List<AddressNewFetch> objtestlst = new List<AddressNewFetch>();
                AddressNewFetch objtest = new AddressNewFetch();


                objtestlst.Add(objtest);

                RootObjectFetchNewFetch objNewfetch = new RootObjectFetchNewFetch();
                objNewfetch.context.Header.Address = objtestlst;
                objNewfetch.context.Header.Bank = objnewbank;
                objNewfetch.context.Header.Bearers = objnewbearers;
                objNewfetch.context.Header.Fig = objnewFig;
                objNewfetch.context.Header.Tax = objnewtax;
                objNewfetch.context.Header.User = objnewuser;
                objNewfetch.context.Header.CheckList = objnewchecklist;
                objNewfetch.context.Header.LoanDet = objnewLoandet;


            }
            return Json(objfetch);
        }

        #region xml Local FPO Load
        public string Fpo()
        {

            DataTable dt = new DataTable();
            dt.Columns.Add("type", typeof(string));
            dt.Columns.Add("code", typeof(string));
            dt.Columns.Add("name", typeof(string));
            dt.Columns.Add("village_covered", typeof(string));
            dt.Columns.Add("status", typeof(string));

            var XmlUserFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "FpoXml.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlUserFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/root/row");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["type"] = getidname.GetElementsByTagName("type")[0].InnerText;
                dr["code"] = getidname.GetElementsByTagName("code")[0].InnerText;
                dr["name"] = getidname.GetElementsByTagName("name")[0].InnerText;
                dr["village_covered"] = getidname.GetElementsByTagName("village_covered")[0].InnerText;
                dr["status"] = getidname.GetElementsByTagName("status")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion

        #region User Information
        public string RoleInfo()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("id", typeof(string));
            dt.Columns.Add("user_name", typeof(string));
            dt.Columns.Add("email", typeof(string));
            dt.Columns.Add("mobile_no", typeof(string));
            dt.Columns.Add("valid_till", typeof(string));
            dt.Columns.Add("status", typeof(string));
            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "FpoUser.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlRoleFullPath);
            XmlNodeList RoleNodelist = xmlobject.SelectNodes("/root/row");
            foreach (XmlNode RoleData in RoleNodelist)
            {
                XmlElement getidname = (XmlElement)RoleData;
                DataRow dr = dt.NewRow();
                dr["id"] = getidname.GetElementsByTagName("id")[0].InnerText;
                dr["user_name"] = getidname.GetElementsByTagName("user_name")[0].InnerText;
                dr["email"] = getidname.GetElementsByTagName("email")[0].InnerText;
                dr["mobile_no"] = getidname.GetElementsByTagName("mobile_no")[0].InnerText;
                dr["valid_till"] = getidname.GetElementsByTagName("valid_till")[0].InnerText;
                dr["status"] = getidname.GetElementsByTagName("status")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion
        public class List
        {
            public int out_orgn_rowid { get; set; }
            public string out_orgn_code { get; set; }
            public int out_version_no { get; set; }
            public string out_orgn_cin { get; set; }
            public string out_primary_lang_code { get; set; }
            public string out_parent_code { get; set; }
            public string out_orgn_name { get; set; }
            public string out_orgn_ll_name { get; set; }
            public string out_orgn_level { get; set; }
            public string out_orgn_level_desc { get; set; }
            public string out_orgn_type { get; set; }
            public string out_orgn_type_desc { get; set; }
            public string out_orgn_subtype { get; set; }
            public string out_orgn_subtype_desc { get; set; }
            public string out_secondary_lang_code { get; set; }
            public string out_orgn_logo { get; set; }
            public string out_orgn_auth_sign { get; set; }
            public string out_status_code { get; set; }
            public string out_status_desc { get; set; }
            public string out_row_timestamp { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
        }
        public class fetchcontextlist
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public List list { get; set; }
        }
        public class Contextlist
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public List<List> list { get; set; }
        }
        public class ApplicationExceptionlist
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }
        public class RootObjectlist
        {
            public Contextlist context { get; set; }
            public ApplicationExceptionlist ApplicationException { get; set; }
        }


        #region SaveFPO
        public class Address
        {
            public int in_orgnaddr_rowid { get; set; }
            public string in_addr_type { get; set; }
            public string in_orgn_add1 { get; set; }
            public string in_orgn_addr2 { get; set; }
            public string in_orgn_country { get; set; }
            public string in_orgn_state { get; set; }
            public string in_orgn_dist { get; set; }
            public string in_orgn_taluk { get; set; }
            public string in_orgn_panchayat { get; set; }
            public string in_orgn_village { get; set; }
            public string in_orgn_pincode { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class Fig
        {
            public int in_orgnfig_rowid { get; set; }
            public string in_fig_type { get; set; }
            public string in_fig_short_name { get; set; }
            public string in_fig_name { get; set; }
            public string in_fig_village_covered { get; set; }
            public string in_fig_president { get; set; }
            public string in_fig_treasurer { get; set; }
            public string in_fig_secretary { get; set; }
            public string in_fig_contact_person { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class Bearer
        {
            public int in_orgnofficebearers_rowid { get; set; }
            public string in_officebearer_role { get; set; }
            public string in_officebearer_name { get; set; }
            public string in_officebearer_contact_no { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class Bank
        {
            public int in_orgnbank_rowid { get; set; }
            public string in_bank_acc_no { get; set; }
            public string in_bank_acc_type { get; set; }
            public string in_bank_code { get; set; }
            public string in_branch_code { get; set; }
            public string in_ifsc_code { get; set; }
            public string in_dflt_dr_acc { get; set; }
            public string in_dflt_cr_acc { get; set; }
            public string in_bank_acc_purpose { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class User
        {
            public int in_aggrlocuser_rowid { get; set; }
            public string in_aggrorgn_type { get; set; }
            public string in_aggrorgn_code { get; set; }
            public string in_aggrloc_type { get; set; }
            public string in_aggrloc_code { get; set; }
            public string in_role_code { get; set; }
            public string in_user_code { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class Tax
        {
            public int in_tax_rowid { get; set; }
            public string in_tax_type { get; set; }
            public string in_tax_reg_no { get; set; }
            public string in_state_code { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class CheckList
        {
            public int in_checklist_rowid { get; set; }
            public string in_checklist_code { get; set; }
            public string checklist_desc { get; set; }
            public string in_complied_code { get; set; }
            public string in_complied_desc { get; set; }
            public string in_attachment { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class LoanDet
        {
            public int in_loan_rowid { get; set; }
            public string in_loan_type { get; set; }
            public string in_loan_from { get; set; }
            public string in_institution_name { get; set; }
            public string in_institution_branch { get; set; }
            public string in_loan_amount { get; set; }
            public string in_loan_tenor { get; set; }
            public string in_interest_rate { get; set; }
            public string in_emi_amount { get; set; }
            public string in_loan_start_date { get; set; }
            public string in_loan_end_date { get; set; }
            public string in_collateral_security { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class Header
        {
            public int inout_orgn_rowid { get; set; }
            public string inout_orgn_code { get; set; }
            public int inout_version_no { get; set; }
            public string in_orgn_cin { get; set; }
            public string in_parent_code { get; set; }
            public string in_orgn_name { get; set; }
            public string in_orgn_ll_name { get; set; }
            public string in_orgn_level { get; set; }
            public string in_orgn_type { get; set; }
            public string in_orgn_subtype { get; set; }
            public string in_primary_lang_code { get; set; }
            public string in_secondary_lang_code { get; set; }
            public string in_orgn_logo { get; set; }
            public string in_orgn_auth_sign { get; set; }
            public string in_attachment { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
            public string in_row_timestamp { get; set; }
            public List<Address> address { get; set; }
            public List<Fig> fig { get; set; }
            public List<Bearer> bearers { get; set; }
            public List<Bank> bank { get; set; }
            public List<User> user { get; set; }
            public List<Tax> tax { get; set; }
            public List<GeoLoc> GeoLoc { get; set; }
            public List<CheckList> CheckList { get; set; }
            public List<LoanDet> LoanDet { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header header { get; set; }
        }
        public class saveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header header { get; set; }
        }
        public class Document
        {
            public Context context { get; set; }
            public ApplicationExceptionlist ApplicationException { get; set; }
        }
        public class RootObject
        {
            public Document document { get; set; }
        }


        #endregion



        #region GetFPO
        public class Address1
        {
            public int in_orgnaddr_rowid { get; set; }
            public string in_addr_type { get; set; }
            public string addr_type_desc { get; set; }
            public string in_orgn_add1 { get; set; }
            public string in_orgn_addr2 { get; set; }
            public string in_orgn_country { get; set; }
            public string orgn_country_desc { get; set; }
            public string in_orgn_state { get; set; }
            public string orgn_state_desc { get; set; }
            public string in_orgn_dist { get; set; }
            public string orgn_dist_desc { get; set; }
            public string in_orgn_taluk { get; set; }
            public string orgn_taluk_desc { get; set; }
            public string in_orgn_panchayat { get; set; }
            public string orgn_panchayat_desc { get; set; }
            public string in_orgn_village { get; set; }
            public string orgn_village_desc { get; set; }
            public string in_orgn_pincode { get; set; }
            public string orgn_pincode_desc { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }

        public class Fig1
        {
            public int in_orgnfig_rowid { get; set; }
            public string in_fig_type { get; set; }
            public string fig_type_desc { get; set; }
            public string in_fig_short_name { get; set; }
            public string in_fig_name { get; set; }
            public string in_fig_village_covered { get; set; }
            public string fig_village_covered_desc { get; set; }
            public string in_fig_president { get; set; }
            public string in_fig_treasurer { get; set; }
            public string in_fig_secretary { get; set; }
            public string in_fig_contact_person { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }

        public class Bearer1
        {
            public int in_orgnofficebearers_rowid { get; set; }
            public string in_officebearer_role { get; set; }
            public string officebearer_role_desc { get; set; }
            public string in_officebearer_name { get; set; }
            public string in_officebearer_contact_no { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }

        public class Bank1
        {
            public int in_orgnbank_rowid { get; set; }
            public string in_bank_acc_no { get; set; }
            public string in_bank_acc_type { get; set; }
            public string bank_acc_type_desc { get; set; }
            public string in_bank_code { get; set; }
            public string bank_desc { get; set; }
            public string in_branch_code { get; set; }
            public string branch_desc { get; set; }
            public string in_ifsc_code { get; set; }
            public string in_dflt_dr_acc { get; set; }
            public string dflt_dr_acc_desc { get; set; }
            public string in_dflt_cr_acc { get; set; }
            public string dflt_cr_acc_desc { get; set; }
            public string in_bank_acc_purpose { get; set; }
            public string bank_acc_purpose_desc { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }

        public class User1
        {
            public int in_aggrlocuser_rowid { get; set; }
            public string in_aggrorgn_type { get; set; }
            public string aggrorgn_type_desc { get; set; }
            public string in_aggrorgn_code { get; set; }
            public string in_aggrloc_type { get; set; }
            public string aggrloc_type_desc { get; set; }
            public string in_aggrloc_code { get; set; }
            public string in_role_code { get; set; }
            public string in_user_code { get; set; }
            public string user_name { get; set; }
            public string email_id { get; set; }
            public string contact_no { get; set; }
            public string valid_till { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }

        public class Tax1
        {
            public int in_tax_rowid { get; set; }
            public string in_tax_type { get; set; }
            public string in_tax_reg_no { get; set; }
            public string in_state_code { get; set; }
            public string state_desc { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class CheckList1
        {
            public int in_checklist_rowid { get; set; }
            public string in_checklist_code { get; set; }
            public string checklist_desc { get; set; }
            public string in_complied_code { get; set; }
            public string in_complied_desc { get; set; }
            public string in_attachment { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class LoanDet1
        {
            public int in_loan_rowid { get; set; }
            public string in_loan_type { get; set; }
            public string in_loan_from { get; set; }
            public string in_institution_name { get; set; }
            public string in_institution_branch { get; set; }
            public string in_loan_amount { get; set; }
            public string in_loan_tenor { get; set; }
            public string in_interest_rate { get; set; }
            public string in_emi_amount { get; set; }
            public string in_loan_start_date { get; set; }
            public string in_loan_end_date { get; set; }
            public string in_collateral_security { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class Header1
        {
            public int out_orgn_rowid { get; set; }
            public string out_orgn_code { get; set; }
            public int out_version_no { get; set; }
            public string out_orgn_cin { get; set; }
            public string out_parent_code { get; set; }
            public string out_orgn_name { get; set; }
            public string out_orgn_ll_name { get; set; }
            public string out_orgn_level { get; set; }
            public string out_orgn_level_desc { get; set; }
            public string out_orgn_type { get; set; }
            public string out_orgn_type_desc { get; set; }
            public string out_orgn_subtype { get; set; }
            public string out_orgn_subtype_desc { get; set; }
            public string out_primary_lang_code { get; set; }
            public string out_secondary_lang_code { get; set; }
            public string out_status_code { get; set; }
            public string out_status_desc { get; set; }
            public string out_mode_flag { get; set; }
            public string out_row_timestamp { get; set; }
            public string out_orgn_logo { get; set; }
            public string out_orgn_auth_sign { get; set; }
            public string in_attachment { get; set; }
            public List<Address1> Address { get; set; }
            public List<Fig1> Fig { get; set; }
            public List<Bearer1> Bearers { get; set; }
            public List<Bank1> Bank { get; set; }
            public List<User1> User { get; set; }
            public List<Tax1> Tax { get; set; }
            public List<GeoLoc> GeoLoc { get; set; }
            public List<CheckList1> CheckList { get; set; }
            public List<LoanDet1> LoanDet { get; set; }
        }

        public class Context1
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header1 Header { get; set; }
        }



        public class RootObjectFetch
        {
            public Context1 context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }
        #endregion

        #region NewFetch

        public class AddressNewFetch
        {

            public int in_orgnaddr_rowid { get; set; }
            public string in_addr_type { get; set; }
            public string addr_type_desc { get; set; }
            public string in_orgn_country { get; set; }
            public string orgn_country_desc { get; set; }
            public string in_orgn_state { get; set; }
            public string orgn_state_desc { get; set; }
            public string in_orgn_dist { get; set; }
            public string orgn_dist_desc { get; set; }
            public string in_orgn_taluk { get; set; }
            public string orgn_taluk_desc { get; set; }
            public string in_orgn_panchayat { get; set; }
            public string orgn_panchayat_desc { get; set; }
            public string in_orgn_village { get; set; }
            public string orgn_village_desc { get; set; }
            public string in_orgn_add1 { get; set; }
            public string in_orgn_addr2 { get; set; }
            public string in_orgn_pincode { get; set; }
            public string orgn_pincode_desc { get; set; }
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }


        public class HeaderNewFetch
        {
            public int out_orgn_rowid { get; set; }
            public string out_orgn_code { get; set; }
            public int out_version_no { get; set; }
            public string out_orgn_cin { get; set; }
            public string out_parent_code { get; set; }
            public string out_orgn_name { get; set; }
            public string out_orgn_ll_name { get; set; }
            public string out_orgn_level { get; set; }
            public string out_orgn_level_desc { get; set; }
            public string out_orgn_type { get; set; }
            public string out_orgn_type_desc { get; set; }
            public string out_orgn_subtype { get; set; }
            public string out_orgn_subtype_desc { get; set; }
            public string out_primary_lang_code { get; set; }
            public string out_secondary_lang_code { get; set; }
            public string out_status_code { get; set; }
            public string out_status_desc { get; set; }
            public string out_mode_flag { get; set; }
            public string out_row_timestamp { get; set; }
            public string out_orgn_logo { get; set; }
            public string out_orgn_auth_sign { get; set; }
            public string out_attachment { get; set; }
            public List<AddressNewFetch> Address { get; set; }
            public List<Fig1> Fig { get; set; }
            public List<Bearer1> Bearers { get; set; }
            public List<Bank1> Bank { get; set; }
            public List<User1> User { get; set; }
            public List<Tax1> Tax { get; set; }
            public List<CheckList1> CheckList { get; set; }
            public List<LoanDet1> LoanDet { get; set; }
        }

        public class ContextNewFetch
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public HeaderNewFetch Header { get; set; }
        }

        public class ApplicationExceptionNewFetch
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }

        public class RootObjectFetchNewFetch
        {
            public ContextNewFetch context { get; set; }
            public ApplicationExceptionNewFetch ApplicationException { get; set; }
        }

        public class GeoLoc
        {
            public int in_geoloc_rowid { get; set; }  
            public string in_geoloc_country { get; set; }
            public string orgn_geoloc_desc { get; set; }
            public string in_geoloc_state { get; set; }
            public string geoloc_state_desc { get; set; }
            public string in_geoloc_dist { get; set; }
            public string geoloc_dist_desc { get; set; }
            public string in_geoloc_taluk { get; set; }
            public string geoloc_taluk_desc { get; set; }
            public string in_geoloc_panchayat { get; set; }
            public string geoloc_panchayat_desc { get; set; }
            public string in_geoloc_village { get; set; }
            public string geoloc_village_desc { get; set; } 
            public string in_status_code { get; set; }
            public string status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }






        #endregion
    }
}