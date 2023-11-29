using FFI_Datamodel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace FFI_Reports.Controllers
{
    public class FPOReportsController : Controller
    {
        private IConfiguration _configuration;
        private MySqlConnection con;
        private IHostingEnvironment _hostingEnvironment;
        string dbstring = "";

        public FPOReportsController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        public IActionResult Fpoattachments()
        {
            return View();
        }
        public IActionResult PaytmtranRpt()
        {
            return View();
        }
        public IActionResult ConsolidatedFPOReport()
        {
            return View();
        }

        public IActionResult LoginHistoryReport()
        {
            return View();
        }

        [HttpPost]
        public string fileattachReport([FromBody] filattachreport Objfileattachreport)
        {
            DataTable dt_set1 = new DataTable();

            if (Objfileattachreport.fromdate == "" || Objfileattachreport.fromdate == "undefined-undefined-")
            {
                Objfileattachreport.fromdate = ".";
            }
            if (Objfileattachreport.todate == "" || Objfileattachreport.todate == "undefined-undefined-")
            {
                Objfileattachreport.todate = ".";
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
            DataTable dt = new DataTable();
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Pr_Get_FPOAttachRpt", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objfileattachreport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objfileattachreport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objfileattachreport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objfileattachreport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objfileattachreport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }


        [HttpPost]
        public string paytmtranReport([FromBody] filattachreport Objfileattachreport)
        {
            DataTable dt_set1 = new DataTable();

            if (Objfileattachreport.fromdate == "" || Objfileattachreport.fromdate == "undefined-undefined-")
            {
                Objfileattachreport.fromdate = ".";
            }
            if (Objfileattachreport.todate == "" || Objfileattachreport.todate == "undefined-undefined-")
            {
                Objfileattachreport.todate = ".";
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
            DataTable dt = new DataTable();
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Pr_Get_PaytmtranRpt", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objfileattachreport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objfileattachreport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objfileattachreport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objfileattachreport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objfileattachreport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }

        public string Getconsolidatedfporeport([FromBody] consolidatedfporeport Objconsolidatedfpo)
        {
            DataTable dt_set1 = new DataTable();
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
            DataTable dt = new DataTable();
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Rpt_ConsolidatedFPO", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_fromdate", Objconsolidatedfpo.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_todate", Objconsolidatedfpo.todate));
            cmd.Parameters.Add(new MySqlParameter("In_Year", Objconsolidatedfpo.year));
            //cmd.Parameters.Add(new MySqlParameter("In_cropname", Objconsolidatedfpo.cropname));
            cmd.Parameters.Add(new MySqlParameter("In_Season", Objconsolidatedfpo.season));
            cmd.Parameters.Add(new MySqlParameter("In_user_code", Objconsolidatedfpo.user_code));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objconsolidatedfpo.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_fpo_code", Objconsolidatedfpo.fpo_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
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

        public string GetFPOLoginHistoryporeport([FromBody] consolidatedfporeport Objconsolidatedfpo)
        {
            DataTable dt_set1 = new DataTable();
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
            DataTable dt = new DataTable();
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Rpt_FPOWiseLogin", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_fromdate", Objconsolidatedfpo.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_todate", Objconsolidatedfpo.todate));
            cmd.Parameters.Add(new MySqlParameter("In_user_code", Objconsolidatedfpo.user_code));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objconsolidatedfpo.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_fpo_code", Objconsolidatedfpo.fpo_code));

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }


    }
}

#region
public class filattachreport
{
    public string fromdate { get; set; }
    public string todate { get; set; }
    public string orgid { get; set; }
    public string fpo { get; set; }
    public string parent_code { get; set; }
    public string User { get; set; }
}

public class consolidatedfporeport
{
    public string fromdate { get; set; }
    public string todate { get; set; }
    public string year { get; set; }
   
    public string season { get; set; }
    public string user_code { get; set; }
    public string parent_code { get; set; }
    public string fpo_code { get; set; }

}
#endregion

