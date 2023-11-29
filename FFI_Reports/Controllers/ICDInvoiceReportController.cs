using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using FFI_Datamodel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace FFI_Reports.Controllers
{
    public class ICDInvoiceReportController : Controller
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private IConfiguration _configuration;
#pragma warning disable CS0618 // Type or member is obsolete
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        string urlstring = "";
        string dbstring = "";
        // GET: ICDReports
        log4net.ILog logger = log4net.LogManager.GetLogger(typeof(ICDInvoiceReportController));

        public ICDInvoiceReportController(IWebHostEnvironment webHostEnvironment, IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _webHostEnvironment = webHostEnvironment;
            _hostingEnvironment = hostingEnvironment;
        }  

        public IActionResult FarmerInvoiceReport()
        {
            return View();
        }

        public IActionResult FarmerInvoiceReceivableRpt()
        {
            return View();
        }

        public IActionResult SalesReturnReport()
        {
            return View();
        }

        public IActionResult CollectionReport()
        {
            return View();
        }

        [HttpPost]
        public string Get_FarmerInvoiceReport(string In_StartDate, string In_EndDate, string In_ICCode, string In_fpocode,string parent_code, string User)
        {
            DataTable dt = new DataTable();
            string Data1 = "";
            if (In_StartDate == "" || In_StartDate == "undefined-undefined-")
            {
                In_StartDate = ".";
            }
            if (In_EndDate == "" || In_EndDate == "undefined-undefined-")
            {
                In_EndDate = ".";
            }
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
            MySqlCommand cmd = new MySqlCommand("PR_Get_FarmerInvoiceReport", con);
            cmd.Parameters.AddWithValue("In_ICCode", In_ICCode);
            cmd.Parameters.AddWithValue("In_fpocode", In_fpocode);
            cmd.Parameters.AddWithValue("In_StartDate", In_StartDate);
            cmd.Parameters.AddWithValue("In_EndDate", In_EndDate);
            cmd.Parameters.AddWithValue("In_parent_code", parent_code);
            cmd.Parameters.AddWithValue("In_User", User);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            Data1 = JsonConvert.SerializeObject(dt);
            //var jsonResult = Json(Data1, JsonRequestBehavior.AllowGet);
            //jsonResult.MaxJsonLength = int.MaxValue;
            return Data1;
        }



        [HttpPost]
        public string Get_FarmerInvoiceReceivableRpt(string In_StartDate, string In_EndDate, string In_ICCode,string In_fpocode, string parent_code, string User)
        {
            DataTable dt = new DataTable();
  
            string Data1 = "";
            if (In_StartDate == "" || In_StartDate == "undefined-undefined-")
            {
                In_StartDate = ".";
            }
            if (In_EndDate == "" || In_EndDate == "undefined-undefined-")
            {
                In_EndDate = ".";
            }
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
            MySqlCommand cmd = new MySqlCommand("PR_Get_FarmerInvoiceReceivables", con);
            cmd.Parameters.AddWithValue("In_ICCode", In_ICCode);
            cmd.Parameters.AddWithValue("In_fpocode", In_fpocode);
            cmd.Parameters.AddWithValue("In_StartDate", In_StartDate);
            cmd.Parameters.AddWithValue("In_EndDate", In_EndDate);
            cmd.Parameters.AddWithValue("In_parent_code", parent_code);
            cmd.Parameters.AddWithValue("In_User", User);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            Data1 = JsonConvert.SerializeObject(dt);
            //var jsonResult = Json(Data1, JsonRequestBehavior.AllowGet);
            //jsonResult.MaxJsonLength = int.MaxValue;
            return Data1;
        }
        [HttpPost]
        public string Get_CollectionRpt(string In_StartDate, string In_EndDate, string In_ICCode,string In_fpocode, string parent_code, string User)
        {
            DataTable dt = new DataTable();
            string Data1 = "";

            if (In_StartDate == "" || In_StartDate == "undefined-undefined-")
            {
                In_StartDate = ".";
            }
            if (In_EndDate == "" || In_EndDate == "undefined-undefined-")
            {
                In_EndDate = ".";
            }
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
            MySqlCommand cmd = new MySqlCommand("PR_Get_Collectionreport", con);
            cmd.Parameters.AddWithValue("In_ICCode", In_ICCode);
            cmd.Parameters.AddWithValue("In_fpocode", In_fpocode);
            cmd.Parameters.AddWithValue("In_StartDate", In_StartDate);
            cmd.Parameters.AddWithValue("In_EndDate", In_EndDate);
            cmd.Parameters.AddWithValue("In_parent_code", parent_code);
            cmd.Parameters.AddWithValue("In_User", User);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            Data1 = JsonConvert.SerializeObject(dt);
            //var jsonResult = Json(Data1, JsonRequestBehavior.AllowGet);
            //jsonResult.MaxJsonLength = int.MaxValue;
            return Data1;

        }

        [HttpPost]
        public string Get_SalesReturnReport(string In_StartDate, string In_EndDate, string In_ICCode, string In_fpocode,string parent_code, string User)
        {
            DataTable dt = new DataTable();
            string Data1 = "";
            if (In_StartDate == "" || In_StartDate == "undefined-undefined-")
            {
                In_StartDate = ".";
            }
            if (In_EndDate == "" || In_EndDate == "undefined-undefined-")
            {
                In_EndDate = ".";
            }
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
            MySqlCommand cmd = new MySqlCommand("Pr_Get_SalesReturnReport", con);
            cmd.Parameters.AddWithValue("In_ICCode", In_ICCode);
            cmd.Parameters.AddWithValue("In_fpocode", In_fpocode);
            cmd.Parameters.AddWithValue("In_StartDate", In_StartDate);
            cmd.Parameters.AddWithValue("In_EndDate", In_EndDate);
            cmd.Parameters.AddWithValue("In_parent_code", parent_code);
            cmd.Parameters.AddWithValue("In_User", User);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            Data1 = JsonConvert.SerializeObject(dt);
            //var jsonResult = Json(Data1, JsonRequestBehavior.AllowGet);
            //jsonResult.MaxJsonLength = int.MaxValue;
            return Data1;
        }
        public ActionResult ExportExcelDownload(string report_name, string input_string, string flag, string userid)
        {
            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeTAUAt")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }

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
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }

            DataTable response = new DataTable();
            Helpdatamodel objproduct1 = new Helpdatamodel();
            response = objproduct1.DownloadExcelExport(report_name, input_string, flag, userid, dbstring);
            return Json(response);
        }
    }
}
