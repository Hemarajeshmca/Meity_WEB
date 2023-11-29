using System.Collections.Generic;
using System.Data;
using System.Reflection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using FastReport.Data;
using FastReport.Utils;
using FastReport.Web;
using FastReport;
using System;
using System.Configuration;
using System.IO;
// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FFI.Controllers
{
    public class Rpt_Fast_Mst_FarmerController : Controller
    {
        // GET: /<controller>/

        private readonly ILogger<Rpt_Fast_Mst_FarmerController> _logger;
        private readonly IWebHostEnvironment _hostingEnvironment;
        public string ConnectionString { get; set; }
        public Rpt_Fast_Mst_FarmerController(ILogger<Rpt_Fast_Mst_FarmerController> logger, IWebHostEnvironment hostingEnvironment)
        {
            _logger = logger;
            _hostingEnvironment = hostingEnvironment;
            this.ConnectionString = "Data Source=169.38.77.186;UserID=root;Password=Kanchi@123;Database=kanchidb;Port=3306;SslMode=None;Connect Timeout=0;";
        }
        public IActionResult Rpt_Fast_Mst_Farmer([FromQuery(Name = "id")] string page)
        {
            string _page = HttpContext.Request.Query["id"].ToString();
            DataSet objDs = new DataSet();
            RegisteredObjects.AddConnection(typeof(MySqlDataConnection));
            WebReport WebReport = new WebReport();
            WebReport.Width = "10000";
            WebReport.Height = "1000"; // Set the height of the report
            string webRootPath = _hostingEnvironment.WebRootPath; // Get the path to wwwroot folder    
            if(_page == "FarmerProf")
            {
                WebReport.Report.Load(webRootPath + "/reports/FarmerProfile.frx");
            }
            else if(_page == "FarmerRegistration")
            {
                WebReport.Report.Load(webRootPath + "/reports/FarmerReg.frx");
            }
            else if (_page == "RPTINDMEM")
            {
                WebReport.Report.Load(webRootPath + "/reports/IndexOfMembers.frx");
            }
            else if (_page == "RPTALLOTREG")
            {
                WebReport.Report.Load(webRootPath + "/reports/AllotmentRegister.frx");
            }
            else if (_page == "RPTARM")
            {
                WebReport.Report.Load(webRootPath + "/reports/ANNUAL_RETURNS_MEMBERS.frx");
            }
            else if (_page == "RPTART")
            {
                WebReport.Report.Load(webRootPath + "/reports/ANNUAL_RETURNS_TRANSFERS.frx");
            }
            else if (_page == "RPTADR")
            {
                WebReport.Report.Load(webRootPath + "/reports/ANNUAL_DIVIDEND_REGISTER.frx");
            }
            else if (_page == "RPTTRNR")
            {
                WebReport.Report.Load(webRootPath + "/reports/TransferRegister.frx");
            }
            // Load the report into a WebReport object                        
            WebReport.Report.RegisterData(objDs, "Farmer"); //Register the data source in the report
            ViewBag.WebReport = WebReport;
            return View("Rpt_Fast_Mst_Farmer", ViewBag.WebReport);
        }
        public IActionResult Index()
        {
          
            return View();
            
        }
        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }   


    }



}
