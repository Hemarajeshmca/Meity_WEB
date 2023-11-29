using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
//using ClosedXML.Excel;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OfficeOpenXml;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
 

namespace FFI.Controllers
{
    public class ProgressRptController : Controller
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private IConfiguration _configuration;
#pragma warning disable CS0618 // Type or member is obsolete
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        string urlstring = "";
        string dbstring = "";
        DataSet ds = new DataSet();
        DataTable dt = new DataTable();
         
        log4net.ILog logger = log4net.LogManager.GetLogger(typeof(ProgressRptController));

        public ProgressRptController(IWebHostEnvironment webHostEnvironment, IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _webHostEnvironment = webHostEnvironment;
            _hostingEnvironment = hostingEnvironment;
        }
        public IActionResult ICDProgessReports()
        {
            return View();
        }
        public IActionResult PAWHSProgessReports()
        {
            return View();
        }

    [HttpPost]
        public string Geticddetails(string fpocode,string parentcode,string User)
        {
           
            string Data1 = "";
            //string fpo = String.Join(",", fpocode);


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
            // MySqlCommand cmd = new MySqlCommand("pr_get_daywisecount", con);
             MySqlCommand cmd = new MySqlCommand("pr_get_ProgressReport", con);
            //cmd.Parameters.AddWithValue("In_OrgnCode", fpo);
            cmd.Parameters.AddWithValue("In_OrgnCode", fpocode);
            cmd.Parameters.AddWithValue("In_Parent_code", parentcode);
            cmd.Parameters.AddWithValue("In_User", User);
            cmd.CommandType = CommandType.StoredProcedure;
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(ds);
                con.Close();
                Data1 = JsonConvert.SerializeObject(ds);
                return Data1; 
        }

        [HttpPost]
        public string Getpawhsdetails(string fpocode)
        {
            DataTable dt = new DataTable();
            string Data1 = "";
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
            MySqlCommand cmd = new MySqlCommand("pr_get_PA_rptdaywisecount", con);
            cmd.Parameters.AddWithValue("In_OrgnCode", fpocode);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            Data1 = JsonConvert.SerializeObject(dt);
            return Data1;
        }

        //public void btn_Export_Click()
        //{  
        //    using (XLWorkbook wb = new XLWorkbook())
        //    {
        //        wb.Worksheets.Add(ds);
        //        wb.Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
        //        wb.Style.Font.Bold = true;
        //        Response.Clear();
        //       Response.Buffer = true;
        //         Response.Charset = "";
        //        Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

        //        Response.AddHeader("content-disposition", "attachment;filename= EmployeeAndOrderReport.xlsx");
        //        using (MemoryStream MyMemoryStream = new MemoryStream())
        //        {
        //            wb.SaveAs(MyMemoryStream);

        //            MyMemoryStream.WriteTo(Response.OutputStream);
        //            Response.Flush();
        //            Response.End();
        //        }
        //    }
        //}
        //  }

        //public ActionResult GetDrpList()
        //{
        //    try
        //    {
        //        if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
        //        {
        //            dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
        //        }
        //        // objList = objService.GetDrpList(dbstring);
        //        DataTable dt = new DataTable();
        //        con = new MySqlConnection(dbstring);
        //        con.Open();
        //        MySqlCommand cmd = new MySqlCommand("Pr_Get_DrpList", con);
        //        cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //        cmd.Parameters.Add(new MySqlParameter("in_type", "FPO"));
        //        MySqlDataAdapter da = new MySqlDataAdapter(cmd);
        //        da.Fill(dt);
        //        con.Close();
        //        if (dt.Rows.Count > 0)
        //        {
        //            for (int i = 0; i < dt.Rows.Count; i++)
        //            {
        //                FPOModel obj = new FPOModel();
        //                obj.FPO_ID = Convert.ToInt32(dt.Rows[i][0]);
        //                obj.FPO_Code = Convert.ToString(dt.Rows[i][1]);
        //                obj.FPO_Name = Convert.ToString(dt.Rows[i][2]);
        //                objList.Add(obj);
        //            }
        //        }
        //        return Json(objList, new Newtonsoft.Json.JsonSerializerSettings());
        //    }
        //    catch (Exception ex)
        //    {
        //        // logger.Error(ex.ToString());
        //        return View();
        //    }
        //}



    }
}
