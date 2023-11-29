using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Configuration;
using System.Xml.Linq;
//using Newtonsoft.Json;
//using Newtonsoft.Json.Linq;
using System.Data;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.Hosting;
using FFI_Datamodel;
using Microsoft.Extensions.Logging;
using System;

namespace FFI.Controllers
{
    public class ICDReportsController : Controller
    {
        private IConfiguration _configuration;
        private MySqlConnection con;
        private IHostingEnvironment _hostingEnvironment;
        string urlstring = "";
        string dbstring = "";
        // GET: ICDReports
        log4net.ILog logger = log4net.LogManager.GetLogger(typeof(ICDReportsController));
        public ICDReportsController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }

        public ActionResult SalesReport()
        {
            return View();
        }
        public ActionResult StockPositionReport()
        {
            return View();
        }
        public ActionResult StockMovementRegisterReport()
        {
            return View();
        }
        public ActionResult TaxReport()
        {
            return View();
        }
        public ActionResult CreditIssueReport()
        {
            return View();
        }
        public ActionResult InvoiceReport()
        {
            return View();
        }
        public ActionResult SupplierInvoicereport()
        {
            return View();
        }
        public ActionResult PurchasesReturns()
        {
            return View();
        }
        public ActionResult Payables()
        {
            return View();
        }
        public ActionResult Cashbalance()
        {
            return View();
        }
        public string Inv_Stkadjustment([FromBody] invoicereport Objinvoicereport)
        {
            DataTable dt_set1 = new DataTable();

            if(Objinvoicereport.fromdate == "" || Objinvoicereport.fromdate == "undefined-undefined-")
            {
                Objinvoicereport.fromdate = ".";
            }
            if(Objinvoicereport.todate == "" || Objinvoicereport.todate == "undefined-undefined-")
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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_InvoiceReport", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objinvoicereport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objinvoicereport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objinvoicereport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_field_Name", Objinvoicereport.fieldname));
            cmd.Parameters.Add(new MySqlParameter("In_Condi", Objinvoicereport.condi));
            cmd.Parameters.Add(new MySqlParameter("In_Value", Objinvoicereport.value));
            cmd.Parameters.Add(new MySqlParameter("In_fpo_name", Objinvoicereport.fpo));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objinvoicereport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objinvoicereport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }


        public string Invoice([FromBody] salereport Objsalereport)
        {
            DataTable dt_set1 = new DataTable();
            if(Objsalereport.fromdate == "" || Objsalereport.fromdate == "undefined-undefined-")
            {
                Objsalereport.fromdate = ".";
            }
            if(Objsalereport.todate == "" || Objsalereport.todate == "undefined-undefined-")
            {
                Objsalereport.todate = ".";
            }
            if(Objsalereport.pro_code == "" || Objsalereport.pro_code == "undefined")
            {
                Objsalereport.pro_code = ".";
            }
            if(Objsalereport.pro_name == "")
            {
                Objsalereport.pro_name = ".";
            }
            if(Objsalereport.frmcode == "")
            {
                Objsalereport.frmcode = ".";
            }
            if(Objsalereport.frmname == "")
            {
                Objsalereport.frmname = ".";
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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_SalesReport", con);
            cmd.CommandType = CommandType.StoredProcedure;
            // cmd.Parameters.Add(new MySqlParameter("In_Product_Code", Objsalereport.pro_code));
            cmd.Parameters.Add(new MySqlParameter("In_Product_Name", Objsalereport.pro_name));
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objsalereport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objsalereport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objsalereport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_farmer_code", Objsalereport.frmcode));
            cmd.Parameters.Add(new MySqlParameter("In_farmer_name", Objsalereport.frmname));
            cmd.Parameters.Add(new MySqlParameter("In_fpo_name", Objsalereport.fpo));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objsalereport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objsalereport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }

            public string Tax_report([FromBody]taxreport Objtaxreport)
            {
            DataTable dt_set3 = new DataTable();
            if(Objtaxreport.fromdate == "")
            {
                Objtaxreport.fromdate = ".";
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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_TaxReport", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_MONTH", Objtaxreport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objtaxreport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_FPO", Objtaxreport.fpo));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objtaxreport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objtaxreport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt_set3);
            con.Close();
            return JsonConvert.SerializeObject(dt_set3);

        }
        public string Stock_PositionReport([FromBody] stockpositionreport Objstockpositionreport)
        {
            if(Objstockpositionreport.pro_code == "")
            {
                Objstockpositionreport.pro_code = ".";
            }
            if (Objstockpositionreport.pro_name == "")
            {
                Objstockpositionreport.pro_name = ".";
            }

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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_StockPosition", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_Product_Code", Objstockpositionreport.pro_code));
            cmd.Parameters.Add(new MySqlParameter("In_Product_Name", Objstockpositionreport.pro_name));
            cmd.Parameters.Add(new MySqlParameter("In_Product_Cat", Objstockpositionreport.cmb_cat));
            cmd.Parameters.Add(new MySqlParameter("In_Product_SubCat", Objstockpositionreport.cmb_subcat));
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objstockpositionreport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objstockpositionreport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objstockpositionreport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_fpo_name", Objstockpositionreport.fpo));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objstockpositionreport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objstockpositionreport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt_set1);
            con.Close();
            return JsonConvert.SerializeObject(dt_set1);

        }
    

        public string SupplierInvoicereport_list([FromBody] invoicereport Objinvoicereport)
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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_SupplierInvoicereport", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objinvoicereport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objinvoicereport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objinvoicereport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_ic_name", Objinvoicereport.fpo));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objinvoicereport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objinvoicereport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }

        public string PurchasesReturns_list([FromBody] invoicereport Objinvoicereport)
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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_PurchasesReturns", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objinvoicereport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objinvoicereport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objinvoicereport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_ic_name", Objinvoicereport.fpo));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objinvoicereport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_USer", Objinvoicereport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }
        public string Cashbalance_list([FromBody] invoicereport Objinvoicereport)
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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_Cashbalance", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objinvoicereport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objinvoicereport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objinvoicereport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_ic_name", Objinvoicereport.fpo));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objinvoicereport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_USer", Objinvoicereport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }
        public string Payables_list([FromBody] invoicereport Objinvoicereport)
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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_Payables", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objinvoicereport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objinvoicereport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objinvoicereport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_ic_name", Objinvoicereport.fpo));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objinvoicereport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objinvoicereport.User));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }
        //ICD center search
        public ActionResult lcdcenter_search_rpt(string In_agg_code,string parent_code, string module)
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
            response = objproduct1.lcdcentersearchrpt(In_agg_code, parent_code, module, dbstring);
            return Json(response);
        }

        #region sales Report
        public class salereport
        {
            public string pro_code { get; set; }
            public string pro_name { get; set; }
            public string fromdate { get; set; }
            public string todate { get; set; }
            public string orgid { get; set; }
            public string frmcode { get; set; }
            public string frmname { get; set; }
            public string fpo { get; set; }
            public string parent_code { get; set; }
            public string User { get; set; }

        }
        #endregion
        #region tax report
        public class taxreport
        {
            public string fromdate { get; set; }
            public string orgid { get; set; }
            public string fpo  {get;set;}
            public string parent_code { get; set; }
            public string User { get; set; }
        }
        #endregion


        #region stock movement
        public string Stock_Movement([FromBody] stockmovementreport Objstockmovementreport)
        {

            if (Objstockmovementreport.pro_code == "")
            {
                Objstockmovementreport.pro_code = ".";
            }
            if (Objstockmovementreport.pro_name == "")
            {
                Objstockmovementreport.pro_name = ".";
            }
            if (Objstockmovementreport.fromdate == "" || Objstockmovementreport.fromdate == "undefined-undefined-")
            {
                Objstockmovementreport.fromdate = ".";
            }
            if (Objstockmovementreport.todate == "" || Objstockmovementreport.todate == "undefined-undefined-")
            {
                Objstockmovementreport.todate = ".";
            }
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
            MySqlCommand cmd = new MySqlCommand("ICDRPT_StockMovementRegister", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("p_Product_Code", Objstockmovementreport.pro_code));
            cmd.Parameters.Add(new MySqlParameter("p_Product_Name", Objstockmovementreport.pro_name));
            cmd.Parameters.Add(new MySqlParameter("p_From_Date", Objstockmovementreport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("p_To_Date", Objstockmovementreport.todate));
            cmd.Parameters.Add(new MySqlParameter("p_orgn_code", Objstockmovementreport.orgid));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt_set1);
            con.Close();
            return JsonConvert.SerializeObject(dt_set1);
        }
        public class stockmovementreport
        {
            public string pro_code { get; set; }
            public string pro_name { get; set; }
            public string fromdate { get; set; }
            public string todate { get; set; }
            public string orgid { get; set; }

        }
        #endregion

        #region stock position
        public class stockpositionreport
        {
            public string pro_code { get; set; }
           public string pro_name { get; set; }
            public string cmb_cat { get; set; }
            public string cmb_subcat { get; set; }
            public string fromdate { get; set; }
            public string todate { get; set; }
            public string orgid { get; set; }
            public string fpo { get; set; }
            public string parent_code { get; set; }
            public string User { get; set; }
        }
        #endregion

        #region invoice report
        public class invoicereport
        {
            public string fromdate { get; set; }
            public string todate { get; set; }
            public string orgid { get; set; }
            public string fieldname { get; set; }
            public string condi { get; set; }
            public string value { get; set; }
            public string fpo { get; set; }
            public string parent_code { get; set; }
            public string User { get; set; }
        
    }
        #endregion

        //GetProductCatory 
        [HttpPost]
        public string GetProductCategory(string fpo_code, string parent_code)
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
            MySqlCommand cmd = new MySqlCommand("Report_stockposition_Getproductcat", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_fpoorgn_code", fpo_code));
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }

        [HttpPost]
        public string GetProductSubCategory(string fpo_code, string cat_code, string parent_code)
        {
            DataSet dt = new DataSet();

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
            MySqlCommand cmd = new MySqlCommand("Report_stockposition_Getproductsubcat", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
            cmd.Parameters.Add(new MySqlParameter("in_fpo_orgn", fpo_code));
            cmd.Parameters.Add(new MySqlParameter("in_cat_code", cat_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }
        [HttpPost]
        public string GetProductName(string fpo_code, string cat_code, string subcat_code, string parent_code)
        {
            DataSet dt = new DataSet();
            try
            {
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
                MySqlCommand cmd = new MySqlCommand("Report_stockposition_GetProductName", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
                cmd.Parameters.Add(new MySqlParameter("in_fpoorgn_code", fpo_code));
                cmd.Parameters.Add(new MySqlParameter("in_cat_code", cat_code));
                cmd.Parameters.Add(new MySqlParameter("in_subcat_code", subcat_code));
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();

            }
            catch (Exception ex)
            {
                logger.Error(ex.ToString());
            }
            //return Json(dt);
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