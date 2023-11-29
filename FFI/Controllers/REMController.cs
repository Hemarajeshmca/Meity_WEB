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
using System.ComponentModel;
using System.Collections;
using Newtonsoft.Json.Linq;
using GemBox.Spreadsheet;

namespace FFI.Controllers
{
    public class REMController : Controller
    {
        // GET: REM
        public ActionResult RevenueList()
        {
            return View();
        }
        private IConfiguration _configuration;
        public REMController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult RevenueListfetch([FromBody] Context context)
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
                string Urlcon = "/all_revenue_list?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objList);
        }

        [HttpPost]
        public ActionResult Revenuefetch([FromBody] FContext objContext)
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
                string Urlcon = "/revenue?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&revenue_rowid=" + objContext.revenue_rowid + "&revenue_id=" + objContext.revenue_id;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }

        #region Revenue list
        public class List
        {
            public int Out_revenue_rowid { get; set; }
            public string Out_revenue_id { get; set; }
            public string Out_financial_year { get; set; }
            public string Out_business_code { get; set; }
            public string Out_business_desc { get; set; }
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

            public int iOut_revenue_rowid { get; set; }
            public string iOut_revenue_id { get; set; }


            //--Excel
            public XHeader Header { get; set; }
            public IList<ExcelColumn> excelColumn { get; set; }
            public IList<object> excelHistory { get; set; }



            //--Excel

        }


        public class Header
        {
            public int IOU_revenue_rowid { get; set; }
            public string IOU_revenue_id { get; set; }
            public string In_financial_year_code { get; set; }
            public string In_financial_year { get; set; }
            public string In_business_code { get; set; }
            public string In_business_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }


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


        #region single Fetch
        public class FHeader
        {
            public int IOU_revenue_rowid { get; set; }
            public string IOU_revenue_id { get; set; }
            public string In_financial_year_code { get; set; }
            public string In_financial_year { get; set; }
            public string In_business_code { get; set; }
            public string In_business_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class FDetails
        {
            public int In_revenuedtl_rowid { get; set; }
            public string In_trn_date { get; set; }
            public string In_revenue_head { get; set; }
            public string In_revenue_desc { get; set; }
            public string In_bill_no { get; set; }
            public float In_revenue_amount { get; set; }
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
            public IList<FDetails> Details { get; set; }

            public int revenue_rowid { get; set; }
            public string revenue_id { get; set; }

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

            public Document document { get; set; }

        }
        #endregion

        #region Revsave
        public class SHeader
        {
            public int IOU_revenue_rowid { get; set; }
            public string IOU_revenue_id { get; set; }
            public string In_financial_year_code { get; set; }
            public string In_business_code { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class SDetails
        {
            public int In_revenuedtl_rowid { get; set; }
            public string In_trn_date { get; set; }
            public string In_revenue_head { get; set; }
            public string In_revenue_desc { get; set; }
            public string In_bill_no { get; set; }
            public float In_revenue_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SHeader Header { get; set; }
            public IList<SDetails> Details { get; set; }

        }
        public class SDocument
        {
            public SContext context { get; set; }

        }
        public class SApplication
        {
            public SDocument document { get; set; }

        }
        #endregion

        public ActionResult REMSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            SDocument objDoc = new SDocument();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Details = objContext.Details;
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
                string Urlcon = "/NewRevenue";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }

        public class Document
        {
            public FContext Context { get; set; }

        }
        public ActionResult RevenueForm()
        {
            return View();
        }
        public ActionResult ExpenseList()
        {
            return View();
        }
        [HttpPost]
        public JsonResult ExpenceListfetch([FromBody] Context context)
        {
            EXPApplication objList = new EXPApplication();
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
                string Urlcon = "/allexpense_list?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (EXPApplication)JsonConvert.DeserializeObject(post_data, typeof(EXPApplication));
            }
            return Json(objList);
        }
        #region expence list
        public class EXPList
        {
            public int Out_expense_rowid { get; set; }
            public string Out_expense_id { get; set; }
            public string Out_business_code { get; set; }
            public string Out_business_desc { get; set; }
            public string Out_financial_year { get; set; }
            public int Out_total_expenses { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

        }
        public class EXPContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<EXPList> List { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }

        }
        public class EXPApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class EXPApplication
        {
            public EXPContext context { get; set; }
            public EXPApplicationException ApplicationException { get; set; }

        }
        #endregion
        public ActionResult ExpenseForm()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Expfetch([FromBody] ExpFContext objContext)
        {
            ExpFApplication objout = new ExpFApplication();
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
                string Urlcon = "/expense?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&expense_rowid=" + objContext.expense_rowid + "&expense_id=" + objContext.expense_id;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (ExpFApplication)JsonConvert.DeserializeObject(post_data, typeof(ExpFApplication));
            }
            return Json(objout);
        }
        #region single fetch
        public class ExpFHeader
        {
            public int IOU_expense_rowid { get; set; }
            public string IOU_expense_id { get; set; }
            public string In_financial_year_code { get; set; }
            public string In_financial_year { get; set; }
            public string In_business_code { get; set; }
            public string In_business_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class ExpFDetails
        {
            public int In_expensedtl_rowid { get; set; }
            public string In_trn_date { get; set; }
            public string In_expense_description { get; set; }
            public string In_expense_head { get; set; }
            public string In_bill_no { get; set; }
            public float In_expense_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class ExpFContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public ExpFHeader Header { get; set; }
            public IList<ExpFDetails> Details { get; set; }
            public string expense_id { get; set; }
            public int expense_rowid { get; set; }
        }
        public class ExpFApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class ExpFApplication
        {
            public ExpFContext context { get; set; }
            public ExpFApplicationException ApplicationException { get; set; }

        }
        #endregion

        [HttpPost]
        public ActionResult ExpenseSave([FromBody] ExpSContext objContext)
        {
            ExpSApplication objRoot = new ExpSApplication();
            ExpSDocument objDoc = new ExpSDocument();
            ExpSContext objContextDetails = new ExpSContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
            objContextDetails.Details = objContext.Details;

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
                string Urlcon = "/NewExpense";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region expence save
        public class ExpSHeader
        {
            public int IOU_expense_rowid { get; set; }
            public string IOU_expense_id { get; set; }
            public string In_financial_year_code { get; set; }
            public string In_financial_year { get; set; }
            public string In_business_code { get; set; }
            public string In_business_desc { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class ExpSDetails
        {
            public int In_expensedtl_rowid { get; set; }
            public string In_trn_date { get; set; }
            public string In_expense_description { get; set; }
            public string In_expense_head { get; set; }
            public string In_bill_no { get; set; }
            public float In_expense_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class ExpSContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public ExpSHeader Header { get; set; }
            public IList<ExpSDetails> Details { get; set; }

        }
        public class ExpSDocument
        {
            public ExpSContext context { get; set; }

        }
        public class ExpSApplication
        {
            public ExpSDocument document { get; set; }

        }
        #endregion
        public ActionResult RevenueReport()
        {
            return View();
        }
        public ActionResult ExpenseReport()
        {
            return View();
        }
        public ActionResult REM_TAX()
        {
            return View();
        }
        [HttpPost]
        public ActionResult REM_TAXSave([FromBody] REM_TAXContext objContext)
        {
            REM_TAXApplication objRoot = new REM_TAXApplication();
            REM_TAXDocument objDoc = new REM_TAXDocument();
            REM_TAXContext objContextDetails = new REM_TAXContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Input = objContext.Input;
           

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
                string Urlcon = "/rem_newtaxfil";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        #region tax fill save
        public class Input
        {
            public int In_tax_rowid { get; set; }
            public string In_tax_id { get; set; }
            public string In_business_code { get; set; }
            public string In_financial_year_code { get; set; }
            public string In_tax_filing_date { get; set; }
            public string In_tax_filing_ref_no { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class REM_TAXContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Input Input { get; set; }

        }
        public class REM_TAXDocument
        {
            public REM_TAXContext context { get; set; }

        }
        public class REM_TAXApplication
        {
            public REM_TAXDocument document { get; set; }

        }
        #endregion
        public ActionResult RevenueExpenseOverallReport()
        {
            return View();
        }
        public ActionResult RevenueExpenseTaxReport()
        {
            return View();
        }
        [HttpPost]
        public ActionResult RevExpfetch([FromBody] RevExpContext objContext)
        {
            RevExpApplication objout = new RevExpApplication();
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
                string Urlcon = "/RevenueExpenseTaxReport?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&In_fpo_code=" + objContext.In_fpo_code + "&In_month=" + objContext.In_month;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (RevExpApplication)JsonConvert.DeserializeObject(post_data, typeof(RevExpApplication));
            }
            return Json(objout);
        }
        #region fetch
        public class RevExpOutput
        {
            public string In_orgn_name { get; set; }
            public string In_business { get; set; }
            public string In_product_name { get; set; }
            public string In_hsncode { get; set; }
            public string In_hsn_desc { get; set; }
            public string In_invoice_no { get; set; }
            public float In_total_invoiceamout { get; set; }
            public float In_tax_amount { get; set; }
            public float In_cgst_rate { get; set; }
            public float In_sgst_rate { get; set; }
            public float In_igst_rate { get; set; }
            public float In_TotalTax { get; set; }

        }
        public class RevExpContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<RevExpOutput> Output { get; set; }
            public string In_fpo_code { get; set; }
            public string In_month { get; set; }

        }
        public class RevExpApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class RevExpApplication
        {
            public RevExpContext context { get; set; }
            public RevExpApplicationException ApplicationException { get; set; }

        }
        #endregion
        public ActionResult TaxReport()
        {
            return View();
        }

        //Pandiaraj start 


        #region Excel object
        public class XHeader
        {
            public string out_entity_group_code { get; set; }
            public string out_procedure_name { get; set; }
            public string out_procedure_type { get; set; }
            public int out_no_of_columns { get; set; }

        }
        public class ExcelColumn
        {
            public string excel_column { get; set; }
            public string column_name { get; set; }
            public string column_type { get; set; }
            public int max_len { get; set; }
            public int seq_no { get; set; }

        }

        public class XApplication
        {
            public Context context { get; set; }
            public IList<List> ApplicationException { get; set; }

        }
        public class retrieveExcelTemplatelist
        {
            public string excel_upload_code { get; set; }
            public string userId { get; set; }
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string localeId { get; set; }
            public string templateName { get; set; }
        }

        public class RootObject
        {
            public Context context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }
        #endregion

        #region REV Report
        public class RRList
        {
            public string In_rehead { get; set; }
            public string In_redate { get; set; }
            public string In_redesc { get; set; }
            public string In_rebill { get; set; }
            public float In_reamt { get; set; }
            public float In_emat { get; set; }
            public string In_status_code { get; set; }

        }
        public class RRContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<RRList> List { get; set; }

            public string In_from_date { get; set; }
            public string In_to_date { get; set; }
            public string In_pro_code { get; set; }
        }
        public class RRApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class RRApplication
        {
            public RRContext context { get; set; }
            public RRApplicationException ApplicationException { get; set; }

        }
        #endregion

        public string RevenueExReport([FromBody] RRContext objContext)
        {

            RRContext objContextDetails = new RRContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;

            objContextDetails.List = objContext.List;
            RRApplication objRoot = new RRApplication();

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
                RRContext objout = new RRContext();
                string Urlcon = "/revenue_expense_report?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" +
                    objContext.localeId + "&In_from_date=" + objContext.In_from_date + "&In_to_date=" + objContext.In_to_date + "&In_pro_code=" +
                    objContext.In_pro_code;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (RRContext)JsonConvert.DeserializeObject(post_data, typeof(RRContext));
            }
            return JsonConvert.SerializeObject(post_data);
        }


        #region Tax
        #region Tax Model
        public class Output
        {
            public string In_business { get; set; }
            public string In_product_name { get; set; }
            public string In_hsncode { get; set; }
            public string In_hsn_desc { get; set; }
            public string In_invoice_no { get; set; }
            public float In_total_invoiceamount { get; set; }
            public float In_tax_amount { get; set; }
            public float In_cgst_rate { get; set; }
            public float In_sgst_rate { get; set; }
            public float In_igst_rate { get; set; }
            public float In_TotalTax { get; set; }

        }
        public class TAXContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<Output> Output { get; set; }

            public string In_month { get; set; }


        }
        public class TAXApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class TAXApplication
        {
            public TAXContext context { get; set; }
            public TAXApplicationException ApplicationException { get; set; }

        }
        #endregion
        [HttpPost]
        public string REMTaxReport([FromBody] TAXContext objContext)
        {
            TAXContext objContextDetails = new TAXContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;

            objContextDetails.Output = objContext.Output;
            RRApplication objRoot = new RRApplication();

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
                RRContext objout = new RRContext();
                string Urlcon = "/REMTaxReport?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" +
                    objContext.localeId + "&In_month=" + objContext.In_month;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (RRContext)JsonConvert.DeserializeObject(post_data, typeof(RRContext));
            }
            return JsonConvert.SerializeObject(post_data);
        }


        #endregion
        #region Revenue Expense overall
        #region Revenue Expense overall class
        public class REOOutput
        {
            public string In_fpo_code { get; set; }
            public string In_revenueexpense { get; set; }
            public string In_date { get; set; }
            public string In_description { get; set; }
            public string In_bill_no { get; set; }
            public float In_revenueamount { get; set; }
            public float In_expenseamount { get; set; }

        }
        public class REOContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<REOOutput> Output { get; set; }

            public string In_fpo_code { get; set; }
            public string In_pro_code { get; set; }
            public string In_Fin_Year { get; set; }
            public string In_rev_exp { get; set; }

        }
        public class REOApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class REOApplication
        {
            public REOContext context { get; set; }
            public REOApplicationException ApplicationException { get; set; }

        }
        #endregion


        #region
        public string RevenueExReportNAF([FromBody] REOContext objContext)
        {

            REOContext objContextDetails = new REOContext();
            //objContextDetails.userId = objContext.userId;
            //objContextDetails.locnId = objContext.locnId;
            //objContextDetails.localeId = objContext.localeId;
            //objContextDetails.orgnId = objContext.orgnId;

            //objContextDetails.List = objContext.List;
            REOApplication objRoot = new REOApplication();

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
                REOContext objout = new REOContext();
                string Urlcon = "/RevenueExpenseOverAllReport?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" +
                    objContext.userId + "&lang=" +
                objContext.localeId + "&In_fpo_code=" + objContext.In_fpo_code + "&In_pro_code=" + objContext.In_pro_code + "&In_Fin_Year=" +
                objContext.In_Fin_Year + "&In_rev_exp=" + objContext.In_rev_exp;
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (REOContext)JsonConvert.DeserializeObject(post_data, typeof(REOContext));
            }
            return JsonConvert.SerializeObject(post_data);
        }
        #endregion
        #endregion
        //Pandiaraj end 
    }
}
