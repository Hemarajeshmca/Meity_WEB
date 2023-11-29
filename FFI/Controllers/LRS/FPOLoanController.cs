using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;
using Microsoft.AspNetCore.Hosting;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace FFI.Controllers.LRS
{
    public class FPOLoanController : Controller
    {
        // GET: FPOLoan
        public ActionResult FPOLoanList()
        {
            return View();
        }
        public ActionResult FPOLoanForm()
        {
            return View();
        }
        public ActionResult FPOLoanFormEdit()
        {
            return View();
        }
        public ActionResult FPOLoanFormView()
        {
            return View();
        }
        public ActionResult RepaymentSchedule()
        {
            return View();
        }
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        string dbstring = "";
        private IConfiguration _configuration;

        public FPOLoanController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult LRSFPOLoanListfetch([FromBody] LRSFpoLoanContext context)
        {
            LRSFpoLoanApplication objList = new LRSFpoLoanApplication();
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
                string Urlcon = "LRS_FPOLoan/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("LRSFPOLoanList", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (LRSFpoLoanApplication)JsonConvert.DeserializeObject(post_data, typeof(LRSFpoLoanApplication));

            }
            return Json(objList);
        }
        #region ListFPO
        public class LRSFpoLoanList
        {
            public int out_fpoloan_rowid { get; set; }
            public string out_fpoorgn_code { get; set; }
            public string out_fpoloan_no { get; set; }
            public string out_lending_institution { get; set; }
            public string out_institution_type { get; set; }
            public string out_institution_type_desc { get; set; }
            public string out_sanctioned_date { get; set; }
            public string out_fpoloan_start_date { get; set; }
            public string out_fpoloan_mat_date { get; set; }
            public string out_sanctioned_amount { get; set; }
            public string out_received_amount { get; set; }
            public string out_emi_amount { get; set; }
            public string out_interest_rate { get; set; }
            public string out_repayment_in_yrs { get; set; }
            public string out_repayment_in_months { get; set; }
            public string out_repayment_freq { get; set; }
            public string out_repayment_freq_desc { get; set; }
            public string out_collateral_type { get; set; }
            public string out_collateral_type_desc { get; set; }
            public string out_collateral_amount { get; set; }
            public string out_payable_amount { get; set; }
            public string out_payable_exception { get; set; }
            public string out_interest_amount { get; set; }
            public string out_interest_paid { get; set; }
            public string out_refund_received { get; set; }
            public string out_closed_date { get; set; }
            public string out_settlement_amount { get; set; }
            public string out_waive_amount { get; set; }
            public string out_status_code { get; set; }
            public string out_status_desc { get; set; }

        }
        public class LRSFpoLoanContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<LRSFpoLoanList> List { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }

        }
        public class LRSFpoLoanApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class LRSFpoLoanApplication
        {
            public LRSFpoLoanContext context { get; set; }
            public LRSFpoLoanApplicationException ApplicationException { get; set; }

        }

        #endregion
        [HttpPost]
        public ActionResult LRSFPOLoanfetch([FromBody] LRSFpoLoanFContext objContext)
        {
            LRSFpoLoanFApplication objout = new LRSFpoLoanFApplication();
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
                string Urlcon = "LRS_FPOLoan/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("LRSFpoLoanfetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (LRSFpoLoanFApplication)JsonConvert.DeserializeObject(post_data, typeof(LRSFpoLoanFApplication));
                //HttpContext.Session.SetString("orgId", objout.context.orgnId);
                //HttpContext.Session.SetString("userId", objout.context.userId);
                //HttpContext.Session.SetString("fpoloan_no", objout.context.Header.In_fpoloan_no);
            }
            return Json(objout);
        }
        #region Single fetch

        public class LRSFpoLoanFHeader
        {
            public int IOU_fpoloan_rowid { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_fpoloan_no { get; set; }
            public string In_Institution_lending { get; set; }
            public string In_institution_type { get; set; }
            public string In_institution_type_desc { get; set; }
            public string In_sanctioned_date { get; set; }
            public string In_fpoloan_start_date { get; set; }
            public string In_fpoloan_mat_date { get; set; }
            public double In_Loan_amount { get; set; }
            public double In_received_amount { get; set; }
            public double In_emi_amount { get; set; }
            public double In_interest_rate { get; set; }
            public int In_repayment_in_yrs { get; set; }
            public int In_repayment_in_months { get; set; }
            public string In_repayment_freq { get; set; }
            public string In_repayment_freq_desc { get; set; }
            public string In_collateral_type { get; set; }
            public string In_collateral_type_desc { get; set; }
            public double In_collateral_amount { get; set; }
            public double In_payable_amount { get; set; }
            public string In_payable_exception { get; set; }
            public double In_interest_amount { get; set; }
            public double In_principle_paid { get; set; }
            public double In_interest_paid { get; set; }
            public double In_refund_received { get; set; }
            public string In_closed_date { get; set; }
            public double In_settlement_amount { get; set; }
            public double In_waive_amount { get; set; }
            public double In_lend_balance_amount { get; set; }
            public double In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public IList<LRSFpoLoanTranche> LRSFPOLoanTranche { get; set; }
            public IList<LRSFpoLoanRepayment> LRSFPOLoanRepayment { get; set; }
        }
        public class LRSFpoLoanRepayment
        {
            public int In_loanrepayment_rowid { get; set; }
            public int In_loaninstalment_rowid { get; set; }
            public string In_instalment_date { get; set; }
            public double In_instalment_amount { get; set; }
            public double In_penalty_amount { get; set; }
            public double In_waiver_amount { get; set; }
            public string In_paid_date { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_bank_code { get; set; }
            public string In_bank_acc_type { get; set; }
            public string In_bank_acc_type_desc { get; set; }
            public string In_bank_acc_no { get; set; }
            public string In_bank_ifsc_code { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_chq_date { get; set; }
            public string In_chq_no { get; set; }
            public string In_micr_code { get; set; }
            public string In_chq_valid_flag { get; set; }
            public string In_repayment_remark { get; set; }
            public string In_repayment_status { get; set; }
            public string In_repayment_status_desc { get; set; }
            public string In_instalment_no { get; set; }
            public double In_principle_amount { get; set; }
            public double In_interest_amount { get; set; }
            public double In_lend_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }


        }
        public class LRSFpoLoanTranche
        {
            public int In_fpoloantranche_rowid { get; set; }
            public string In_tranche_no { get; set; }
            public double In_tranche_amount { get; set; }
            public string In_received_date { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class LRSFpoLoanFContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int IOU_fpoloan_rowid { get; set; }
            public string In_fpoloan_no { get; set; }
            public LRSFpoLoanFHeader Header { get; set; }



        }
        public class LRSFpoLoanFApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class LRSFpoLoanFApplication
        {
            public LRSFpoLoanFContext context { get; set; }
            public LRSFpoLoanFApplicationException ApplicationException { get; set; }

        }
        #endregion

        [HttpPost]
        public ActionResult LrsFpoLoanSave([FromBody] LRSSaveContext objContext)
        {
            LRSSaveApplication objApp = new LRSSaveApplication();
            LRSSaveDocument objTestDocShare = new LRSSaveDocument();
            LRSSaveContext objTestContextDetailsShare = new LRSSaveContext();
            LRSSaveHeader ObjTestHeader = new LRSSaveHeader();
            ObjTestHeader.IOU_fpoloan_rowid = objContext.Header.IOU_fpoloan_rowid;
            ObjTestHeader.In_fpoorgn_code = objContext.Header.In_fpoorgn_code;
            ObjTestHeader.In_fpoloan_no = objContext.Header.In_fpoloan_no;
            ObjTestHeader.In_Institution_lending = objContext.Header.In_Institution_lending;
            ObjTestHeader.In_institution_type = objContext.Header.In_institution_type;
            ObjTestHeader.In_sanctioned_date = objContext.Header.In_sanctioned_date;
            ObjTestHeader.In_Loan_amount = objContext.Header.In_Loan_amount;
            ObjTestHeader.In_repayment_freq = objContext.Header.In_repayment_freq;
            ObjTestHeader.In_interest_rate = objContext.Header.In_interest_rate;
            ObjTestHeader.In_repayment_in_months = objContext.Header.In_repayment_in_months;
            ObjTestHeader.In_repayment_in_yrs = objContext.Header.In_repayment_in_yrs;
            ObjTestHeader.In_collateral_type = objContext.Header.In_collateral_type;
            ObjTestHeader.In_collateral_amount = objContext.Header.In_collateral_amount;
            ObjTestHeader.In_fpoloan_start_date = objContext.Header.In_fpoloan_start_date;
            ObjTestHeader.In_received_amount = objContext.Header.In_received_amount;
            ObjTestHeader.In_principle_paid = objContext.Header.In_principle_paid;
            ObjTestHeader.In_interest_paid = objContext.Header.In_interest_paid;
            ObjTestHeader.In_princ_outstanding_amount = objContext.Header.In_princ_outstanding_amount;
            ObjTestHeader.In_status_code = objContext.Header.In_status_code;      
            ObjTestHeader.In_row_timestamp = objContext.Header.In_row_timestamp;
            ObjTestHeader.In_mode_flag = objContext.Header.In_mode_flag;
          
            List<LRSSaveTranche> objTestList = new List<LRSSaveTranche>();

            for (int i = 0; i < objContext.Tranche.Count; i++)
            {
                LRSSaveTranche objtest = new LRSSaveTranche();
                objtest.In_fpoloantranche_rowid = objContext.Tranche[i].In_fpoloantranche_rowid;
                objtest.In_tranche_no = objContext.Tranche[i].In_tranche_no;
                objtest.In_tranche_amount = objContext.Tranche[i].In_tranche_amount;
                objtest.In_received_date = objContext.Tranche[i].In_received_date;
                objtest.In_row_timestamp = objContext.Tranche[i].In_row_timestamp;
                objtest.In_status_code = objContext.Tranche[i].In_status_code;
                objtest.In_mode_flag = objContext.Tranche[i].In_mode_flag;
                objTestList.Add(objtest);
            }
            List<LRSSaveRepayment> objrepayment = new List<LRSSaveRepayment>();
            for (int i = 0; i < objContext.Repayment.Count; i++)
            {
                LRSSaveRepayment objtest1 = new LRSSaveRepayment();
                objtest1.In_loanrepayment_rowid = objContext.Repayment[i].In_loanrepayment_rowid;
                objtest1.In_loaninstalment_rowid = objContext.Repayment[i].In_loaninstalment_rowid;
                objtest1.In_instalment_date = objContext.Repayment[i].In_instalment_date;
                objtest1.In_instalment_amount = objContext.Repayment[i].In_instalment_amount;
                objtest1.In_penalty_amount = objContext.Repayment[i].In_penalty_amount;
                objtest1.In_waiver_amount = objContext.Repayment[i].In_waiver_amount;
                objtest1.In_paid_date = objContext.Repayment[i].In_paid_date;
                objtest1.In_payment_mode = objContext.Repayment[i].In_payment_mode;
                objtest1.In_payment_mode_desc = objContext.Repayment[i].In_payment_mode_desc;
                objtest1.In_bank_code = objContext.Repayment[i].In_bank_code;
                objtest1.In_bank_acc_type = objContext.Repayment[i].In_bank_acc_type;
                objtest1.In_bank_acc_type_desc = objContext.Repayment[i].In_bank_acc_type_desc;
                objtest1.In_bank_acc_no = objContext.Repayment[i].In_bank_acc_no;
                objtest1.In_bank_ifsc_code = objContext.Repayment[i].In_bank_ifsc_code;
                objtest1.In_bank_ref_no = objContext.Repayment[i].In_bank_ref_no;
                objtest1.In_chq_date = objContext.Repayment[i].In_chq_date;
                objtest1.In_chq_no = objContext.Repayment[i].In_chq_no;
                objtest1.In_micr_code = objContext.Repayment[i].In_micr_code;
                objtest1.In_chq_valid_flag = objContext.Repayment[i].In_chq_valid_flag;
                objtest1.In_repayment_remark = objContext.Repayment[i].In_repayment_remark;
                objtest1.In_repayment_status = objContext.Repayment[i].In_repayment_status;
                objtest1.In_repayment_status_desc = objContext.Repayment[i].In_repayment_status_desc;
                objtest1.In_instalment_no = objContext.Repayment[i].In_instalment_no;
                objtest1.In_principle_amount = objContext.Repayment[i].In_principle_amount;
                objtest1.In_interest_amount = objContext.Repayment[i].In_interest_amount;
                objtest1.In_lend_balance_amount = objContext.Repayment[i].In_lend_balance_amount;
                objtest1.In_status_code = objContext.Repayment[i].In_status_code;
                objtest1.In_status_desc = objContext.Repayment[i].In_status_desc;
                objtest1.In_row_timestamp = objContext.Repayment[i].In_row_timestamp;
                objtest1.In_mode_flag = objContext.Repayment[i].In_mode_flag;
                objrepayment.Add(objtest1);
            }

            objTestContextDetailsShare.userId = objContext.userId;
            objTestContextDetailsShare.locnId = objContext.locnId;
            objTestContextDetailsShare.localeId = objContext.localeId;
            objTestContextDetailsShare.orgnId = objContext.orgnId;
            objTestContextDetailsShare.Tranche = objTestList;
            objTestContextDetailsShare.Repayment = objrepayment;
            objTestContextDetailsShare.Header = ObjTestHeader;

            objTestDocShare.context = objTestContextDetailsShare;
            objApp.document = objTestDocShare;

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
                string Urlcon = "LRS_FPOLoan/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objApp), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_LrsFPOLoan", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objTestDocShare = (LRSSaveDocument)JsonConvert.DeserializeObject(post_data, typeof(LRSSaveDocument));
            }
            return Json(objTestDocShare);

        }
        #region Save
        public class LRSSaveHeader
        {
            public int IOU_fpoloan_rowid { get; set; }
            public string In_fpoorgn_code { get; set; }
            public string In_fpoloan_no { get; set; }
            public string In_Institution_lending { get; set; }
            public string In_institution_type { get; set; }
            public string In_sanctioned_date { get; set; }
            public double In_Loan_amount { get; set; }
            public string In_repayment_freq { get; set; }
            public double In_interest_rate { get; set; }
            public int In_repayment_in_months { get; set; }
            public int In_repayment_in_yrs { get; set; }
            public string In_collateral_type { get; set; }
            public double In_collateral_amount { get; set; }
            public string In_fpoloan_start_date { get; set; }
            public double In_received_amount { get; set; }
            public double In_principle_paid { get; set; }
            public double In_interest_paid { get; set; }
            public double In_princ_outstanding_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class LRSSaveTranche
        {
            public int In_fpoloantranche_rowid { get; set; }
            public string In_fpoloan_no { get; set; }
            public string In_tranche_no { get; set; }
            public double In_tranche_amount { get; set; }
            public string In_received_date { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }


        }
        public class LRSSaveRepayment
        {
            public int In_loanrepayment_rowid { get; set; }
            public int In_loaninstalment_rowid { get; set; }
            public string In_fpoloan_no { get; set; }
            public string In_instalment_date { get; set; }
            public double In_instalment_amount { get; set; }
            public double In_principle_amount { get; set; }
            public double In_interest_amount { get; set; }
            public double In_penalty_amount { get; set; }
            public double In_waiver_amount { get; set; }
            public string In_paid_date { get; set; }
            public string In_payment_mode { get; set; }
            public string In_payment_mode_desc { get; set; }
            public string In_bank_code { get; set; }
            public string In_bank_acc_type { get; set; }
            public string In_bank_acc_type_desc { get; set; }
            public string In_bank_acc_no { get; set; }
            public string In_bank_ifsc_code { get; set; }
            public string In_bank_ref_no { get; set; }
            public string In_chq_date { get; set; }
            public string In_chq_no { get; set; }
            public string In_micr_code { get; set; }
            public string In_chq_valid_flag { get; set; }
            public string In_repayment_remark { get; set; }
            public string In_repayment_status { get; set; }
            public string In_repayment_status_desc { get; set; }
            public string In_instalment_no { get; set; } 
            public double In_lend_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class LRSSaveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public LRSSaveHeader Header { get; set; }
            public IList<LRSSaveTranche> Tranche { get; set; }
            public IList<LRSSaveRepayment> Repayment { get; set; }

        }
        public class LRSSaveDocument
        {
            public LRSSaveContext context { get; set; }
            public LRSSaveApplicationException ApplicationException { get; set; }
        }
        public class LRSSaveApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class LRSSaveApplication
        {
            public LRSSaveDocument document { get; set; }

        }
        #endregion
    }

}