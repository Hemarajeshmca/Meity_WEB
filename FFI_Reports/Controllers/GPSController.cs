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

namespace FFI.Controllers
{
    public class GPSController : Controller
    {
        private IConfiguration _configuration;
        private MySqlConnection con;
        private IHostingEnvironment _hostingEnvironment;
        string urlstring = "";
        string dbstring = "";
        // GET: ICDReports

        public GPSController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        // GET: GPS
        public IActionResult GPSForm()
        {
            return View();
        }

        #region
        public class gpsreport
        {
            public string fromdate { get; set; }
            public string todate { get; set; }
            public string orgid { get; set; }
            public string fpocode { get; set; }
            public string parent_code { get; set; }           
        }
        #endregion
        public string gps_list([FromBody] gpsreport Objinvoicereport)
        {
            DataTable dt_set1 = new DataTable();

            if (Objinvoicereport.fromdate == "" || Objinvoicereport.fromdate == "undefined-undefined-")
            {
                Objinvoicereport.fromdate = ".";
            }
            if (Objinvoicereport.todate == "" || Objinvoicereport.todate == "undefined-undefined-")
            {
                Objinvoicereport.todate = ".";
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
            MySqlCommand cmd = new MySqlCommand("RPT_GPS", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objinvoicereport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objinvoicereport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objinvoicereport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objinvoicereport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_fpo_code", Objinvoicereport.fpocode));
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
    }
}
