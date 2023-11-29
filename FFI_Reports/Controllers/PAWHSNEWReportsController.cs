using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using FFI_Datamodel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class PAWHSNEWReportsController : Controller
    {
        private IConfiguration _configuration;
        private MySqlConnection con;
        private IHostingEnvironment _hostingEnvironment;    
        string dbstring = "";
      
        public PAWHSNEWReportsController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
      
        public ActionResult ProductMovementReport()
        {
            return View();
        }
        public ActionResult TraceabilityReport()
        {
            return View();
        }

        //get Duplicate slno 
        public ActionResult DublicateslnoReport()
        {
            return View();
        }
        public ActionResult SalesReportPAWHS()
        {
            return View();
        }
        public ActionResult PurchaseEntryPAWHS()
        {
            return View();
        }
        public ActionResult SaleEntryPAWHS()
        {
            return View();
        }

        public ActionResult pawhs_productsearch_rpt(string In_agg_code, string parent_code, string module)
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
            response = objproduct1.pawhsproductsearchrpt(In_agg_code, parent_code, module, dbstring);
            return Json(response);
        }

        //Getduplicate slno report values 

        public string Getduplicateslno()
        {
            DataTable dt = new DataTable();
            try
            {
                if(_configuration.GetSection("AppSettings")["Instance"].ToString() =="Ta")
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
                else if(_configuration.GetSection("AppSettings")["Instance"].ToString() =="bh")
                {
                    dbstring = _configuration.GetSection("dbtypeBH")["mysqlcon"].ToString();
                }
                else if(_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
                {
                    if(_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                    {
                        dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                    }
                    else if(_configuration.GetSection("AppSettings")["Environment"].ToString() =="UAT")
                    {
                        dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                    }
                }
                else if(_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
                {
                    dbstring = _configuration.GetSection("dbtypUP").ToString();
                }
                con = new MySqlConnection(dbstring);
                con.Open();
                MySqlCommand cmd = new MySqlCommand("PAWHS_RPT_Duplicateslno", con);
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch(Exception ex)
            {
                throw ex;
            }
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
        public string Product_Movement([FromBody] productmovementreport Objproductmovementreport)
        {
            if (Objproductmovementreport.fromdate == "" || Objproductmovementreport.fromdate == "undefined-undefined-")
            {
                Objproductmovementreport.fromdate = ".";
            }
            if (Objproductmovementreport.todate == "" || Objproductmovementreport.todate == "undefined-undefined-")
            {
                Objproductmovementreport.todate = ".";
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
            MySqlCommand cmd = new MySqlCommand("PAWHSNewProductAdjustment", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_org_id", Objproductmovementreport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_item_code", Objproductmovementreport.prod_code));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objproductmovementreport.parent_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt_set1);
            con.Close();

            List<ProductList> prodDetails = new List<ProductList>();

            prodDetails = (from DataRow row in dt_set1.Rows

                           select new ProductList
                           {
                               row_no = Convert.ToInt32(row["row_no"].ToString()),
                               farmer_or_buyer = row["farmer_or_buyer"].ToString(),
                               pickup_date = row["pickup_date"].ToString(),
                               stock_in = Convert.ToDecimal(row["stock_in"].ToString()),
                               stock_out = Convert.ToDecimal(row["stock_out"].ToString()),
                               current_qty = Convert.ToDecimal(row["current_qty"].ToString()),
                           }).ToList();



            for (int i = 0; i < prodDetails.Count; i++)
            {
                if (i == 0)
                {
                    prodDetails[i].current_qty = prodDetails[i].stock_in;
                }
                else
                {
                    var result = prodDetails.Where(x => x.row_no <= (i + 1)).ToList();
                    decimal stockin = 0;
                    decimal stockout = 0;
                    for (int j = 0; j < result.Count; j++)
                    {
                        stockin = stockin + result[j].stock_in;
                        stockout = stockout + result[j].stock_out;
                    }
                    prodDetails[i].current_qty = stockin - stockout;
                    //var stockin = prodDetails.Sum(x => x.s >= i)
                }
            }
            return JsonConvert.SerializeObject(prodDetails);
        }
        [HttpPost]
        public ActionResult TraceabilityRpt(string org, string locn, string user, string lang,string whs_code, string In_from_date, string In_to_date)
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
            MySqlCommand cmd = new MySqlCommand("PAWHSNewTraceabilityRPT", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_org", org));
            cmd.Parameters.Add(new MySqlParameter("In_locn", org));
            cmd.Parameters.Add(new MySqlParameter("In_user", org));
            cmd.Parameters.Add(new MySqlParameter("In_lang", org));
            cmd.Parameters.Add(new MySqlParameter("In_whs_code", whs_code));
            cmd.Parameters.AddWithValue("In_from_date", In_from_date);
            cmd.Parameters.AddWithValue("In_to_date", In_to_date);

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt_set1);
            con.Close();
            List<TraceList> traceDetails = new List<TraceList>();
            traceDetails = (from DataRow row in dt_set1.Rows
                            select new TraceList
                            {
                                warehouse_name = row["warehouse_name"].ToString(),
                                plot_no = row["plot_no"].ToString(),
                                pfarmer_name = row["pfarmer_name"].ToString(),
                                pfarmer_code = row["pfarmer_code"].ToString(),
                                psl_no = row["psl_no"].ToString(),
                                slot_no = row["slot_no"].ToString(),
                                sbuyer_name = row["sbuyer_name"].ToString(),
                                ssl_no = row["ssl_no"].ToString()
                            }).ToList();

            return Json(traceDetails);
        }
        public class ProductList
        {
            public int row_no { get; set; }
            public string farmer_or_buyer { get; set; }
            public string pickup_date { get; set; }
            public decimal stock_in { get; set; }
            public decimal stock_out { get; set; }
            public decimal current_qty { get; set; }
        }

        public class TraceList
        {
            public string warehouse_name { get; set; }
            public string plot_no { get; set; }
            public string pfarmer_name { get; set; }
            public string pfarmer_code { get; set; }
            public string psl_no { get; set; }
            public string slot_no { get; set; }
            public string sbuyer_name { get; set; }
            public string ssl_no { get; set; }
        }
        public string Invoice([FromBody] salereport Objsalereport)
        {


            DataTable dt_set1 = new DataTable();
            if (Objsalereport.fromdate == "" || Objsalereport.fromdate == "undefined-undefined-")
            {
                Objsalereport.fromdate = ".";
            }
            if (Objsalereport.todate == "" || Objsalereport.todate == "undefined-undefined-")
            {
                Objsalereport.todate = ".";
            }
            if (Objsalereport.pro_code == "" || Objsalereport.pro_code == "undefined")
            {
                Objsalereport.pro_code = ".";
            }
            if (Objsalereport.pro_name == "")
            {
                Objsalereport.pro_name = ".";
            }
            if (Objsalereport.frmcode == "")
            {
                Objsalereport.frmcode = ".";
            }
            if (Objsalereport.frmname == "")
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
            MySqlCommand cmd = new MySqlCommand("PAWHSRPT_SalesReport", con);
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

        public string PurchaseEntryReport([FromBody] purchaseentryreport Objpurchaseentryreport)
        {
            DataTable dt_set1 = new DataTable();

            if (Objpurchaseentryreport.fromdate == "" || Objpurchaseentryreport.fromdate == "undefined-undefined-")
            {
                Objpurchaseentryreport.fromdate = ".";
            }
            if (Objpurchaseentryreport.todate == "" || Objpurchaseentryreport.todate == "undefined-undefined-")
            {
                Objpurchaseentryreport.todate = ".";
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
            MySqlCommand cmd = new MySqlCommand("PAWHSRPT_Purchaseentryreport", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objpurchaseentryreport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objpurchaseentryreport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objpurchaseentryreport.orgid));           
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objpurchaseentryreport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objpurchaseentryreport.User));
            cmd.Parameters.Add(new MySqlParameter("In_cropname", Objpurchaseentryreport.cropname));            
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }
        #region Purchase Entry report
        public class purchaseentryreport
        {
            public string fromdate { get; set; }
            public string todate { get; set; }
            public string orgid { get; set; }
            public string fpo { get; set; }
            public string parent_code { get; set; }
            public string User { get; set; }
            public string cropname { get; set; }

        }
        #endregion


        public string SaleEntryReport([FromBody] purchaseentryreport Objpurchaseentryreport)
        {
            DataTable dt_set1 = new DataTable();

            if (Objpurchaseentryreport.fromdate == "" || Objpurchaseentryreport.fromdate == "undefined-undefined-")
            {
                Objpurchaseentryreport.fromdate = ".";
            }
            if (Objpurchaseentryreport.todate == "" || Objpurchaseentryreport.todate == "undefined-undefined-")
            {
                Objpurchaseentryreport.todate = ".";
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
            MySqlCommand cmd = new MySqlCommand("PAWHSRPT_Saleentryreport", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objpurchaseentryreport.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objpurchaseentryreport.todate));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objpurchaseentryreport.orgid));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objpurchaseentryreport.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objpurchaseentryreport.User));
            cmd.Parameters.Add(new MySqlParameter("In_cropname", Objpurchaseentryreport.cropname));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }       
    }


    #region
    public class productmovementreport
    {
        public string orgid { get; set; }
        public string prod_code { get; set; }
        public string fromdate { get; set; }
        public string todate { get; set; }
        public string parent_code { get; set; }

    }
    #endregion
}
