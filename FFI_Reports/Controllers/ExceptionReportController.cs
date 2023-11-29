using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using System.Data;
using MySql.Data.MySqlClient;
using System.IO;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http;
using OfficeOpenXml;

namespace FFI_Reports.Controllers

{
    public class ExceptionReportController : Controller
    {
        dynamic excel_msg = new JObject();
        private MySqlConnection con;
        private IConfiguration _configuration;
        private IHostingEnvironment _hostingEnvironment;
        string dbstring = "";
        public ExceptionReportController(IConfiguration config, IHostingEnvironment  objhsting)
        {
            _configuration = config;
            _hostingEnvironment = objhsting;
        }
          
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public string GetExceptionReport([FromBody] ExceptionRpt objparams)
        {
            try
            {
                string pdfpath = string.Empty;
                DataSet Dset = new DataSet();
                if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
                {
                    dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
                }
                con = new MySqlConnection(dbstring);
                con.Open();
                MySqlCommand cmd = new MySqlCommand("Pr_Get_ProdCapExceptionalRept", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("in_Start_year", objparams.startyear));
                cmd.Parameters.Add(new MySqlParameter("in_End_year", objparams.endyear));
                cmd.Parameters.Add(new MySqlParameter("in_Crop_name", objparams.cropname)); 
                cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = objparams.userId;
                cmd.Parameters.Add("in_orgnId", MySqlDbType.VarChar).Value = objparams.orgnId;
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(Dset);
                Dset.Tables[0].TableName = "ExceptionalReport";
                Dset.Tables[1].TableName = "ProductionCaptureReport";
                Dset.Tables[2].TableName = "SowingDetailsReport";
                con.Close();

                if (Dset.Tables.Count > 0)
                {
                    HttpContext.Session.SetString("dtDownload", JsonConvert.SerializeObject(Dset));
                }

                var file_ext = ".xls";
                string webRootPath = _hostingEnvironment.WebRootPath;
                string folderName = "DownloadXLFiles";
                string fileLocation = Path.Combine(webRootPath, folderName);
                Guid guid = Guid.NewGuid(); 
                string Clientpath = Path.Combine("/DownloadXLFiles/" + "Production_Capture_Exceptional_Report" + file_ext); 
                string path = Path.Combine(fileLocation, "Production_Capture_Exceptional_Report" + file_ext); 
                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }
                CreateExcelFile(path);
                excel_msg.path = Clientpath;
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return JsonConvert.SerializeObject(excel_msg);
        }

         


        public class ExceptionRpt
        {
            public string startyear { get; set; }
            public string endyear { get; set; }
            public string cropname { get; set; }
            public string userId { get; set; } 
            public string orgnId { get; set; } 
        }

        public void CreateExcelFile(string strFilePath)
        {
            try
            {
                DataSet dsfarmer = JsonConvert.DeserializeObject<DataSet>(HttpContext.Session.GetString("dtDownload"));

                using (ExcelPackage pck = new ExcelPackage())
                {
                    foreach (DataTable dataTable in dsfarmer.Tables)
                    {
                        ExcelWorksheet workSheet = pck.Workbook.Worksheets.Add(dataTable.TableName);
                        workSheet.Cells["A1"].LoadFromDataTable(dataTable, true);
                        workSheet.Cells["A1:XFD1"].Style.Font.Bold = true;
                    }

                    pck.SaveAs(new FileInfo(strFilePath));
                }
                 
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
