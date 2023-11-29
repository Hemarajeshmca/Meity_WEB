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

namespace FFI.Controllers
{
    public class ReportFarmerBasicInfoController : Controller
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private IConfiguration _configuration;
#pragma warning disable CS0618 // Type or member is obsolete
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        string urlstring = "";
        string dbstring = "";
        // GET: ICDReports
        log4net.ILog logger = log4net.LogManager.GetLogger(typeof(ReportFarmerBasicInfoController));

        public ReportFarmerBasicInfoController(IWebHostEnvironment webHostEnvironment, IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _webHostEnvironment = webHostEnvironment;
            _hostingEnvironment = hostingEnvironment;
        }
        public ActionResult ReportFarmerBasicInfo()
        {
            return View();
        }
        public ActionResult ReportBankAndKyc()
        {
            return View();
        }
        public ActionResult ReportYieldAndProcurement()
        {
            return View();
        }
        public ActionResult ReportLandDetailsInfo()
        {
            return View();
        }
        public ActionResult ReportFarmerSowingDetails()
        {
            return View();
        }
        public ActionResult ReportFarmerads()
        {
            return View();
        }

        public ActionResult SowingDetailProgressreport()
        {
            return View();
        }
        public ActionResult ReportFarmerOnboarded()
        {
            return View();
        }
        public ActionResult SowingDetailFPOReport()
        {
            return View();
        }
        #region Farmer Progess Report
        public string FarmerProgressReport([FromBody] Faremerprogreport Objfarrpt)
        {
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
            DataSet dataSet = new DataSet();
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Report_FarmerdetailsCount", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_From_Date", Objfarrpt.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_To_Date", Objfarrpt.todate));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objfarrpt.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_User", Objfarrpt.user));
            cmd.Parameters.Add(new MySqlParameter("In_orgn_code", Objfarrpt.fpocode));

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dataSet);
            con.Close();
            Data1 = JsonConvert.SerializeObject(dataSet);
            return Data1;
      

        }
        public class Faremerprogreport
        {
            public string fromdate { get; set; }
            public string todate { get; set; }
            public string parent_code { get; set; }
            public string user { get; set; }
            public string fpocode { get; set; }
        

        }
        #endregion

        #region sowingProgress

        public string getsowingreport(string fpo_code, string parent_code,string user)
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
            MySqlCommand cmd = new MySqlCommand("FARM_RPT_sowingprogressreport", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
            cmd.Parameters.Add(new MySqlParameter("in_fpo_orgn", fpo_code));
            cmd.Parameters.Add(new MySqlParameter("in_user", user));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            logger.Debug("sowing progress count" + dt.Rows.Count);
            con.Close();
            Data1 = JsonConvert.SerializeObject(dt);
            //var jsonResult = Json(Data1, JsonRequestBehavior.AllowGet);
            //jsonResult.MaxJsonLength = int.MaxValue;
            return Data1;
        }
        #endregion
        //Get ADS Report data 05-02-2021 [venkatachalam .s]
        #region FarmerADS Report
        public class farmeradsreport
        {
            public string fpocode { get; set; }
            public string district { get; set; }
            public string taluk { get; set; }
            public string village { get; set; }
            public int from_index { get; set; }
            public int to_index { get; set; }
        }
        #endregion
        #region
        [HttpPost]
        public ActionResult GetAdsdetails([FromBody] farmeradsreport objfarmeradsreport)
        {
            FDRADSFinal objADS = new FDRADSFinal();
            DataTable dt = new DataTable();
            logger.Debug("Try to Get the ADS Reports");
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
                MySqlCommand cmd = new MySqlCommand("report_FarmerAdsReportRD", con);
                cmd.Parameters.AddWithValue("in_Fpoorgn_code", objfarmeradsreport.fpocode);
                cmd.Parameters.AddWithValue("in_District_name", objfarmeradsreport.district);
                cmd.Parameters.AddWithValue("in_Taluk_name", objfarmeradsreport.taluk);
                cmd.Parameters.AddWithValue("in_Village_name", objfarmeradsreport.village);
                cmd.Parameters.AddWithValue("in_from_index", objfarmeradsreport.from_index);
                cmd.Parameters.AddWithValue("in_to_index", objfarmeradsreport.to_index);
                cmd.Parameters.Add(new MySqlParameter("record_count", MySqlDbType.VarChar)).Direction = ParameterDirection.Output;

                cmd.CommandType = CommandType.StoredProcedure;
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(dt);
                objADS.out_record_count = Convert.ToInt32((string)cmd.Parameters["record_count"].Value.ToString());
                con.Close();
                logger.Debug("Total Records Returns Count :" + dt.Rows.Count);
                List<FDRFinaList> objListADS = ConvertADSList(dt);
                objADS.ADSDetails = objListADS;
            }
            catch (Exception ex)
            {
                logger.Debug("Error Occured");
                logger.Debug(ex.ToString());
            }
            return Json(objADS, new Newtonsoft.Json.JsonSerializerSettings());
        }
        [HttpPost]

        // public ActionResult DownloadADSDetails([FromBody] farmeradsreport objfarmeradsreport)
        public string DownloadADSDetails([FromBody] farmeradsreport objfarmeradsreport)
        {
            dynamic tmp_rpt = new JObject();
            DataTable dt = new DataTable();
            string msg = "";
            string webRootPath = _webHostEnvironment.WebRootPath;
            string contentRootPath = _webHostEnvironment.ContentRootPath;
            string folderName = "uploadedXLFiles";
            string fileLocation = Path.Combine(webRootPath, folderName);
            Guid guid = Guid.NewGuid();
            string Clientpath = Path.Combine(fileLocation + "\\" + "ADSReport" + guid + ".xls" + "");
            string path = Clientpath;
            string client1 = Path.Combine("/uploadedXLFiles/" + "ADSReport" + guid + ".xls" + "");
            // Path.Combine(fileLocation + "ADSReport" + guid + ".xls" + "");
            if (System.IO.File.Exists(path))
            {
                System.IO.File.Delete(path);
            }
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
                MySqlCommand cmd = new MySqlCommand("report_FarmerAdsReport_Download", con);
                cmd.Parameters.AddWithValue("in_Fpoorgn_code", objfarmeradsreport.fpocode);
                cmd.Parameters.AddWithValue("in_District_name", objfarmeradsreport.district);
                cmd.Parameters.AddWithValue("in_Taluk_name", objfarmeradsreport.taluk);
                cmd.Parameters.AddWithValue("in_Village_name", objfarmeradsreport.village);
                cmd.Parameters.AddWithValue("in_from_index", objfarmeradsreport.from_index);
                cmd.Parameters.AddWithValue("in_to_index", objfarmeradsreport.to_index);
                cmd.Parameters.Add(new MySqlParameter("record_count", MySqlDbType.VarChar)).Direction = ParameterDirection.Output;
                cmd.CommandType = CommandType.StoredProcedure;
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();

                //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
                //  path = Path.Combine("ADSReport.xls");
                using (SpreadsheetDocument document = SpreadsheetDocument.Create(path, SpreadsheetDocumentType.Workbook))
                {
                    WorkbookPart workbookPart = document.AddWorkbookPart();
                    workbookPart.Workbook = new Workbook();
                    WorksheetPart worksheetPart = workbookPart.AddNewPart<WorksheetPart>();
                    var sheetData = new SheetData();
                    worksheetPart.Worksheet = new Worksheet(sheetData);
                    Sheets sheets = workbookPart.Workbook.AppendChild(new Sheets());
                    Sheet sheet = new Sheet() { Id = workbookPart.GetIdOfPart(worksheetPart), SheetId = 1, Name = "Sheet1" };
                    sheets.Append(sheet);
                    Row headerRow = new Row();
                    List<string> columns = new List<string>();
                    foreach (System.Data.DataColumn column in dt.Columns)
                    {
                        columns.Add(column.ColumnName);
                        Cell cell = new Cell();
                        cell.DataType = CellValues.String;
                        cell.CellValue = new CellValue(column.ColumnName);
                        headerRow.AppendChild(cell);
                    }
                    sheetData.AppendChild(headerRow);
                    foreach (DataRow dsrow in dt.Rows)
                    {
                        Row newRow = new Row();
                        foreach (String col in columns)
                        {
                            Cell cell = new Cell();
                            cell.DataType = CellValues.String;
                            cell.CellValue = new CellValue(dsrow[col].ToString());
                            newRow.AppendChild(cell);
                        }
                        sheetData.AppendChild(newRow);
                    }
                    workbookPart.Workbook.Save();
                }
                msg = "Ads Report Dowload Successfully ";
                tmp_rpt.path = client1;
            }
            catch (Exception ex)
            {
                msg = "Failed";
                logger.Debug(ex.ToString());
            }
            return JsonConvert.SerializeObject(tmp_rpt);

        }
        public List<FDRFinaList> ConvertADSList(DataTable dt)
        {
            List<FDRFinaList> objList = new List<FDRFinaList>();
            try
            {
                objList = dt.AsEnumerable().Select(x => new FDRFinaList
                {
                    farmer_code = (string)(x["farmer_code"] ?? ""),
                    FPOName = (string)(x["FPOName"] ?? ""),
                    farmer_name = (string)(x["farmer_name"] ?? ""),
                    sur_name = (string)(x["sur_name"] ?? ""),
                    fhw_name = (string)(x["fhw_name"] ?? ""),
                    dob = (string)(x["dob"] ?? ""),
                    farmer_dist = (string)(x["farmer_dist"] ?? ""),
                    farmer_taluk = (string)(x["farmer_taluk"] ?? ""),
                    farmer_panchayat = (string)(x["farmer_panchayat"] ?? ""),
                    farmer_village = (string)(x["farmer_village"] ?? ""),
                    farmer_addr2 = (string)(x["farmer_addr2"] ?? ""),
                    farmer_pincode = (string)(x["farmer_pincode"] ?? ""),
                    gender_flag = (string)(x["gender_flag"] ?? ""),
                    reg_mobile_no = (string)(x["reg_mobile_no"] ?? ""),
                    GroupName = (string)(x["GroupName"] ?? ""),
                    LTHName = (string)(x["LTHName"] ?? ""),
                    LTHMobileNo = (string)(x["LTHMobileNo"] ?? ""),
                    No_of_Milling_machine_in_villages = (string)(x["No_of_Milling_machine_in_villages"] ?? ""),
                    No_of_Tractors_in_Village = (string)(x["No_of_Tractors_in_Village"] ?? ""),
                    Distance_of_Warehouse = (string)(x["Distance_of_Warehouse"] ?? ""),
                    WareHouse_Type = (string)(x["WareHouse_Type"] ?? ""),
                    BANK_AC = (string)(x["BANK_AC"] ?? ""),
                    Bank_Account_No = (string)(x["Bank_Account_No"] ?? ""),
                    Bank_Name = (string)(x["Bank_Name"] ?? ""),
                    Branch_Name = (string)(x["Branch_Name"] ?? ""),
                    IFSC_Code = (string)(x["IFSC_Code"] ?? ""),
                    CASTE = (string)(x["CASTE"] ?? ""),
                    Education = (string)(x["Education"] ?? ""),
                    LF = (string)(x["LF"] ?? ""),
                    Aadhar_No = (string)(x["Aadhar_No"] ?? ""),
                    Family_No = (string)(x["Family_No"] ?? ""),
                    Working_No = (string)(x["Working_No"] ?? ""),
                    family_member_migrated = (string)(x["family_member_migrated"] ?? ""),
                    OISLabour = (string)(x["OISLabour"] ?? ""),
                    OISJob = (string)(x["OISJob"] ?? ""),
                    OISBusiness = (string)(x["OISBusiness"] ?? ""),
                    House = (string)(x["House"] ?? ""),
                    Tractor = (string)(x["Tractor"] ?? ""),
                    ISTubewell = (string)(x["ISTubewell"] ?? ""),
                    ISCanal = (string)(x["ISCanal"] ?? ""),
                    F_Pond = (string)(x["F_Pond"] ?? ""),
                    PISLTrader = (string)(x["PISLTrader"] ?? ""),
                    PISGOVT = (string)(x["PISGOVT"] ?? ""),
                    PISFpo = (string)(x["PISFpo"] ?? ""),
                    SHCard = (string)(x["SHCard"] ?? ""),
                    Large_Ruminants = (string)(x["Large_Ruminants"] ?? ""),
                    Poultry = (string)(x["Poultry"] ?? ""),
                    Small_Ruminants = (string)(x["Small_Ruminants"] ?? ""),
                    Own_land_Acr = (string)(x["Own_land_Acr"] ?? ""),
                    Lease_land_Acr = (string)(x["Lease_land_Acr"] ?? ""),
                    FY_2019_20_kharif_area_Maize = (string)(x["FY_2019_20_kharif_area_Maize"] ?? ""),
                    FY_2019_20_kharif_area_Paddy = (string)(x["FY_2019_20_kharif_area_Paddy"] ?? ""),
                    FY_2019_20_kharif_area_Veg = (string)(x["FY_2019_20_kharif_area_Veg"] ?? ""),
                    FY_2020_21_kharif_area_Maize = (string)(x["FY_2020_21_kharif_area_Maize"] ?? ""),
                    FY_2020_21_kharif_area_Paddy = (string)(x["FY_2020_21_kharif_area_Paddy"] ?? ""),
                    FY_2020_21_kharif_area_Veg = (string)(x["FY_2020_21_kharif_area_Veg"] ?? ""),
                    FY_2019_20_rabi_area_Maize = (string)(x["FY_2019_20_rabi_area_Maize"] ?? ""),
                    FY_2019_20_rabi_area_Paddy = (string)(x["FY_2019_20_rabi_area_Paddy"] ?? ""),
                    FY_2019_20_rabi_area_Veg = (string)(x["FY_2019_20_rabi_area_Veg"] ?? ""),
                    FY_2020_21_rabi_area_Maize = (string)(x["FY_2020_21_rabi_area_Maize"] ?? ""),
                    FY_2020_21_rabi_area_Paddy = (string)(x["FY_2020_21_rabi_area_Paddy"] ?? ""),
                    FY_2020_21_rabi_area_Veg = (string)(x["FY_2020_21_rabi_area_Veg"] ?? ""),
                    Maize_yield_qtl_acre = (string)(x["Maize_yield_qtl_acre"] ?? ""),
                    Maize_yield_Kh_Ra = (string)(x["Maize_yield_Kh_Ra"] ?? ""),
                    Ragi_2020_Acre = (string)(x["Ragi_2020_Acre"] ?? ""),
                    Ragi_2021_Acre = (string)(x["Ragi_2021_Acre"] ?? ""),
                    INS_Life = (string)(x["INS_Life"] ?? ""),
                    INS_Health = (string)(x["INS_Health"] ?? ""),
                    INS_Crop = (string)(x["INS_Crop"] ?? ""),
                    Loan_Vill = (string)(x["Loan_Vill"] ?? ""),
                    Loan_MFI = (string)(x["Loan_MFI"] ?? ""),
                    Loan_Bank = (string)(x["Loan_Bank"] ?? ""),
                    Kalia = (string)(x["Kalia"] ?? ""),
                    PM_Kisan_Nidhi = (string)(x["PM_Kisan_Nidhi"] ?? ""),
                    eNAM_Reg = (string)(x["eNAM_Reg"] ?? ""),
                    RMC_Reg = (string)(x["RMC_Reg"] ?? ""),
                    INPLTrader = (string)(x["INPLTrader"] ?? ""),
                    INPSociety = (string)(x["INPSociety"] ?? ""),
                    INPFPO = (string)(x["INPFPO"] ?? ""),
                    MSTLTrader = (string)(x["MSTLTrader"] ?? ""),
                    MSTRMC = (string)(x["MSTRMC"] ?? ""),
                    MSTFPO = (string)(x["MSTFPO"] ?? ""),
                    SMPLTrader = (string)(x["SMPLTrader"] ?? ""),
                    SMPRMC = (string)(x["SMPRMC"] ?? ""),
                    SMPFPO = (string)(x["SMPFPO"] ?? ""),
                    FPC_share_paid_Rs = (string)(x["FPC_share_paid_Rs"] ?? ""),
                    Share_Certificate = (string)(x["Share_Certificate"] ?? ""),
                    Share_Certificate_No = (string)(x["Share_Certificate_No"] ?? ""),
                    Own_Maize_storage_Kuccha = (string)(x["Own_Maize_storage_Kuccha"] ?? ""),
                    Own_Maize_storage_Pucca = (string)(x["Own_Maize_storage_Pucca"] ?? ""),
                    Drying_practices_Road = (string)(x["Drying_practices_Road"] ?? ""),
                    Drying_practices_Kuccha = (string)(x["Drying_practices_Kuccha"] ?? ""),
                    Drying_practices_Pucca = (string)(x["Drying_practices_Pucca"] ?? ""),
                    Drying_practices_Platform = (string)(x["Drying_practices_Platform"] ?? ""),
                    Reason_for_crop_loss_Weather = (string)(x["Reason_for_crop_loss_Weather"] ?? ""),
                    Reason_for_crop_loss_Pest = (string)(x["Reason_for_crop_loss_Pest"] ?? ""),
                    Reason_for_crop_loss_PHM = (string)(x["Reason_for_crop_loss_PHM"] ?? ""),
                    share_of_RCLWeather = (string)(x["share_of_RCLWeather"] ?? ""),
                    share_of_RCLPest = (string)(x["share_of_RCLPest"] ?? ""),
                    share_of_RCLPHM = (string)(x["share_of_RCLPHM"] ?? ""),
                    Interested_to_sell_to_FPC = (string)(x["Interested_to_sell_to_FPC"] ?? ""),
                    Whether_Aggregator = (string)(x["Whether_Aggregator"] ?? ""),
                    of_maize_sold_in_Month_0_1 = (string)(x["of_maize_sold_in_Month_0_1"] ?? ""),
                    of_maize_sold_in_Month_2_3 = (string)(x["of_maize_sold_in_Month_2_3"] ?? ""),
                    of_maize_sold_in_Month_3 = (string)(x["of_maize_sold_in_Month_3"] ?? ""),
                    Form_of_storage_Cob = (string)(x["Form_of_storage_Cob"] ?? ""),
                    Form_of_storage_Loose = (string)(x["Form_of_storage_Loose"] ?? ""),
                    Form_of_storage_Bags = (string)(x["Form_of_storage_Bags"] ?? ""),
                    sale_of_maize_to_Hat = (string)(x["sale_of_maize_to_Hat"] ?? ""),
                    sale_of_maize_to_LTrader = (string)(x["sale_of_maize_to_LTrader"] ?? ""),
                    sale_of_maize_to_RMC = (string)(x["sale_of_maize_to_RMC"] ?? ""),
                    Payment_received_in_days_Hat = (string)(x["Payment_received_in_days_Hat"] ?? ""),
                    Payment_received_in_days_LTrader = (string)(x["Payment_received_in_days_LTrader"] ?? ""),
                    Payment_received_in_days_RMC = (string)(x["Payment_received_in_days_RMC"] ?? ""),
                    Idea_of_maize_QC_M = (string)(x["Idea_of_maize_QC_M"] ?? ""),
                    Idea_of_maize_QC_F = (string)(x["Idea_of_maize_QC_F"] ?? ""),
                    Idea_of_maize_QC_DD = (string)(x["Idea_of_maize_QC_DD"] ?? ""),
                    Interest_to_WH_Subsidy = (string)(x["Interest_to_WH_Subsidy"] ?? ""),
                    Interest_to_WR_Finance = (string)(x["Interest_to_WR_Finance"] ?? ""),
                    Concern_LRP_ME = (string)(x["Concern_LRP_ME"] ?? "")
                }).ToList();
            }
            catch (Exception ex)
            {
                logger.Debug(ex.ToString());
            }
            return objList;
        }
        #endregion

        #region MobileProgress
        public ActionResult MobileProgressReport()
        {
            return View();
        }
        public string getmobilereport()
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
            MySqlCommand cmd = new MySqlCommand("RPT_FarmerAdsmobileprogress", con);
            cmd.CommandType = CommandType.StoredProcedure;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            Data1 = JsonConvert.SerializeObject(dt);
            //var jsonResult = Json(Data1, JsonRequestBehavior.AllowGet);
            //jsonResult.MaxJsonLength = int.MaxValue;
            return Data1;
        }
        #endregion

        #region
        [HttpPost]
        public string GetTaluk(string fpo_code, string dist_code,string parent_code)
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
            MySqlCommand cmd = new MySqlCommand("Report_Farmerbasicinfo_Gettaluk", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
            cmd.Parameters.Add(new MySqlParameter("in_fpo_orgn", fpo_code));
            cmd.Parameters.Add(new MySqlParameter("in_fpo_dist", dist_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }

        [HttpPost]
        public string Getgram(string fpo_code, string dist_code, string taluk_code)
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
            MySqlCommand cmd = new MySqlCommand("Report_Farmerbasicinfo_Getgram", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_fpoorgn_code", fpo_code));
            cmd.Parameters.Add(new MySqlParameter("in_fpo_dist", dist_code));
            cmd.Parameters.Add(new MySqlParameter("in_fpo_taluk", taluk_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }
        #endregion

        #region
        [HttpPost]
        public string GetVillage(string fpo_code, string dist_code, string taluk_code,string parent_code)
        {
            DataTable dt = new DataTable();
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
                MySqlCommand cmd = new MySqlCommand("Report_Farmerbasicinfo_Getvillage", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
                cmd.Parameters.Add(new MySqlParameter("in_fpoorgn_code", fpo_code));
                cmd.Parameters.Add(new MySqlParameter("in_fpo_dist", dist_code));
                cmd.Parameters.Add(new MySqlParameter("in_fpo_taluk", taluk_code));
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(dt);
                logger.Error("Village DropDown Called");
                logger.Error(dt.Rows.Count);
                con.Close();
            }
            catch (Exception ex)
            {
                logger.Error(ex.ToString());
            }
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }
        #endregion


        //Get Sowing Details 05-01-2020
        #region
        public JsonResult getsowingdetails([FromBody] Farmersowingdetailsinfo Objsowingdetailsinfo)
        {
            List<CropSowing> objCropSowDtls = new List<CropSowing>();
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
            MySqlCommand cmd = new MySqlCommand("Report_FarmerCropSowingDetails", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_Start_year", Objsowingdetailsinfo.startyear));
            cmd.Parameters.Add(new MySqlParameter("in_End_year", Objsowingdetailsinfo.endyear));
            cmd.Parameters.Add(new MySqlParameter("in_Crop_name", Objsowingdetailsinfo.cropname));
            cmd.Parameters.Add(new MySqlParameter("in_user_code", Objsowingdetailsinfo.user_code));
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", Objsowingdetailsinfo.parent_code));
            cmd.Parameters.Add(new MySqlParameter("in_fpo_code", Objsowingdetailsinfo.fpo_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);

            for (int i = 0; i < dt.Rows.Count; i++)
            {
                CropSowing objCrop = new CropSowing();
                objCrop.SowingYear = dt.Rows[i]["SowingYear"].ToString();
                objCrop.fponame = dt.Rows[i]["fponame"].ToString();
                objCrop.FarmerCode = dt.Rows[i]["FarmerCode"].ToString();
                objCrop.FarmerName = dt.Rows[i]["FarmerName"].ToString();
                objCrop.district = dt.Rows[i]["district"].ToString();
                objCrop.taluk = dt.Rows[i]["taluk"].ToString();
                objCrop.grampanchayat = dt.Rows[i]["grampanchayat"].ToString();
                objCrop.farmervillage = dt.Rows[i]["Farmervillage"].ToString();
                objCrop.Season = dt.Rows[i]["Season"].ToString();
                objCrop.CropType = dt.Rows[i]["CropType"].ToString();
                objCrop.CropName = dt.Rows[i]["CropName"].ToString();
                objCrop.SeedName = dt.Rows[i]["SeedName"].ToString();
                objCrop.CropVariety = dt.Rows[i]["CropVariety"].ToString();
                objCrop.SeedQuantity = dt.Rows[i]["SeedQuantity"].ToString();
                objCrop.LandArea = dt.Rows[i]["LandArea"].ToString();
                objCrop.Yield = dt.Rows[i]["Yield"].ToString();
              //  objCrop.expectedsurplus = Convert.ToDecimal(dt.Rows[i]["expectedsurplus"].ToString() == "" ? "0.00" : dt.Rows[i]["expectedsurplus"].ToString());
                // Convert.ToDecimal(dt.Rows[i]["expectedsurplus"].value);
                objCrop.Pricepaid = dt.Rows[i]["Pricepaid"].ToString();
                objCrop.SowingDate = dt.Rows[i]["SowingDate"].ToString();
                objCrop.createdate = dt.Rows[i]["createdate"].ToString();
                objCrop.createby = dt.Rows[i]["createby"].ToString();
                objCropSowDtls.Add(objCrop);
            }
            con.Close();
            //return JsonConvert.SerializeObject(dt);
            return Json(objCropSowDtls);
        }
        #endregion



        #region Report_sowingdetails
        public class CropSowDetails
        {
            public List<CropSowing> CropDtls { get; set; }
        }
        public class CropSowing
        {
            public string SowingYear { get; set; }
            public string fponame { get; set; }
            public string FarmerCode { get; set; }
            public string FarmerName { get; set; }
            public string district { get; set; }
            public string taluk { get; set; }
            public string grampanchayat { get; set; }
            public string farmervillage { get; set; }
            public string Season { get; set; }
            public string CropType { get; set; }
            public string CropName { get; set; }
            public string CropVariety { get; set; }
            public string SeedQuantity { get; set; }
            public string LandArea { get; set; }
            public string Yield { get; set; }
            public decimal expectedsurplus { get; set; }
            public string Pricepaid { get; set; }
            public string SeedName { get; set; }
            public string createdate { get; set; }
            public string createby { get; set; }
            public string SowingDate { get; set; }

        }

        public class Farmersowingdetailsinfo
        {
            public string startyear { get; set; }
            public string endyear { get; set; }
            public string cropname { get; set; }
            public string user_code { get; set; }
            public string parent_code { get; set; }
            public string fpo_code { get; set; }

        }

        public class Farmersowingdetailsinforeport
        {
            public string fromdate { get; set; }
            public string todate { get; set; }
            public string year { get; set; }
            public string cropname { get; set; }
            public string season { get; set; }
            public string user_code { get; set; }
            public string parent_code { get; set; }
            public string fpo_code { get; set; }

        }
        #endregion

        //GetDistrict 
        [HttpPost]
        public string GetDistrict(string fpo_code,string parent_code)
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
            MySqlCommand cmd = new MySqlCommand("Report_Farmerbasicinfo_Getdistrict", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_fpoorgn_code", fpo_code));
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }

        public string Getseasoncrop(string user_code, string parent_code)
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
            MySqlCommand cmd = new MySqlCommand("Report_Farmerbasicinfo_Sowingseason", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_user_code", user_code));
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }
        public string Getcropname(string user_code, string parent_code)
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
            MySqlCommand cmd = new MySqlCommand("Report_Farmerbasicinfo_SowingCropname", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_user_code", user_code));
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", parent_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }
        #region
        //bank and kyc dropdown list
        //GetDistrict 
        [HttpPost]
        public string Getreportbankandkyclist(string fpo_code)
        {

            DataSet ds = new DataSet();

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
            MySqlCommand cmd = new MySqlCommand("Report_bankandkyc_list", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_fpoorgn_code", fpo_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(ds);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(ds);
        }


        #endregion
        public string Farmerprofilebasicinfo([FromBody] BasicInfo Objbasicinfo)
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
            MySqlCommand cmd = new MySqlCommand("Report_Basic_Profile_info", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", Objbasicinfo.parent_code));
            cmd.Parameters.Add(new MySqlParameter("in_user", Objbasicinfo.user));
            cmd.Parameters.Add(new MySqlParameter("in_fpoorgn_code", Objbasicinfo.fpocode));
            cmd.Parameters.Add(new MySqlParameter("in_District_name", Objbasicinfo.district));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }
        public string Farmerbankandkyc([FromBody] BankAndKyc Objbankandkyc)
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
            MySqlCommand cmd = new MySqlCommand("Report_Bank_And_Kyc", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", Objbankandkyc.parent_code));
            cmd.Parameters.Add(new MySqlParameter("in_user", Objbankandkyc.user));
            cmd.Parameters.Add(new MySqlParameter("in_Fpoorgn_code", Objbankandkyc.fpocode));
            cmd.Parameters.Add(new MySqlParameter("in_District_name", Objbankandkyc.district));
            cmd.Parameters.Add(new MySqlParameter("in_Taluk_name", Objbankandkyc.taluk));
            cmd.Parameters.Add(new MySqlParameter("in_Village_name", Objbankandkyc.village));

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }
        public string Landdetailsinfo([FromBody] LandDetailsInfo Objlanddetailsinfo)
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
            MySqlCommand cmd = new MySqlCommand("Report_Land_Details_Info", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_parent_code", Objlanddetailsinfo.parent_code));
            cmd.Parameters.Add(new MySqlParameter("in_user", Objlanddetailsinfo.user));
            cmd.Parameters.Add(new MySqlParameter("in_Fpoorgn_code", Objlanddetailsinfo.fpocode));
            cmd.Parameters.Add(new MySqlParameter("in_District_name", Objlanddetailsinfo.district));
            cmd.Parameters.Add(new MySqlParameter("in_Taluk_name", Objlanddetailsinfo.taluk));
            cmd.Parameters.Add(new MySqlParameter("in_Village_name", Objlanddetailsinfo.village));

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }

        public string yieldandprocurement([FromBody] Farmeryieldandprocurement Objyieldandprocurement)
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
            MySqlCommand cmd = new MySqlCommand("Report_yieldandprocurement", con);
            cmd.CommandType = CommandType.StoredProcedure;

            cmd.Parameters.Add(new MySqlParameter("in_Start_year", Objyieldandprocurement.startyear));
            cmd.Parameters.Add(new MySqlParameter("in_End_year", Objyieldandprocurement.endyear));
            // cmd.Parameters.Add(new MySqlParameter("in_Village_name", Objyieldandprocurement.village));

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();

            FDRADSFinal objFDR = new FDRADSFinal();

            return JsonConvert.SerializeObject(dt);


        }

        public static List<FDRFinaList> ConvertToList<FDRFinaList>(DataTable dt)
        {
            var columnNames = dt.Columns.Cast<DataColumn>().Select(c => c.ColumnName.ToLower()).ToList();
            var properties = typeof(FDRFinaList).GetProperties();
            return dt.AsEnumerable().Select(row =>
            {
                var objT = Activator.CreateInstance<FDRFinaList>();
                foreach (var pro in properties)
                {
                    if (columnNames.Contains(pro.Name.ToLower()))
                    {
                        try
                        {
                            pro.SetValue(objT, row[pro.Name]);
                        }
                        catch (Exception ex) { }
                    }
                }
                return objT;
            }).ToList();
        }

        //Get Sowing Details 24-08-2022
        #region
        public string getsowingdetailsreport([FromBody] Farmersowingdetailsinforeport Objsowingdetailsinfo)
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
            MySqlCommand cmd = new MySqlCommand("Report_FarmerCropSowingDetailsFPO", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_fromdate", Objsowingdetailsinfo.fromdate));
            cmd.Parameters.Add(new MySqlParameter("In_todate", Objsowingdetailsinfo.todate));
            cmd.Parameters.Add(new MySqlParameter("In_Year", Objsowingdetailsinfo.year));
            cmd.Parameters.Add(new MySqlParameter("In_cropname", Objsowingdetailsinfo.cropname));
            cmd.Parameters.Add(new MySqlParameter("In_Season", Objsowingdetailsinfo.season));
            cmd.Parameters.Add(new MySqlParameter("In_user_code", Objsowingdetailsinfo.user_code));
            cmd.Parameters.Add(new MySqlParameter("In_parent_code", Objsowingdetailsinfo.parent_code));
            cmd.Parameters.Add(new MySqlParameter("In_fpo_code", Objsowingdetailsinfo.fpo_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }
        //ICD center search
        public ActionResult season_search_rpt(string season)
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
            response = objproduct1.seasonsearchrpt(season, dbstring);
            return Json(response);
        }
        public ActionResult season_search_rptALL(string season,string parent)
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
            response = objproduct1.seasonsearchrptALL(season, parent, dbstring);
            return Json(response);
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
        #endregion
        #region Report_Farmeryieldandprocurement
        public class Farmeryieldandprocurement
        {
            public string startyear { get; set; }
            public string endyear { get; set; }
            public string village { get; set; }
        }
        #endregion

        #region FarmerProfileinfo
        public class BasicInfo
        {
            public string parent_code { get; set; }
            public string user { get; set; }
            public string fpocode { get; set; }
            public string district { get; set; }

        }
        #endregion
        #region BankAndKyc
        public class BankAndKyc
        {
            public string fpocode { get; set; }
            public string district { get; set; }
            public string taluk { get; set; }
            public string village { get; set; }
            public string parent_code { get; set; }
            public string user { get; set; }

        }
        #endregion
        #region LandDetailsInfo
        public class LandDetailsInfo
        {
            public string fpocode { get; set; }
            public string district { get; set; }
            public string taluk { get; set; }
            public string village { get; set; }
            public string parent_code { get; set; }
            public string user { get; set; }
        }
        #endregion
        #region FarmerYieldProcurement
        public class FarmerYieldProcurement
        {
            public string startyear { get; set; }
            public string endyear { get; set; }
            public string village { get; set; }

        }
        #endregion
   
      
    }
    public class FDRADSFinal
    {
        public int out_record_count { get; set; }
        public List<FDRFinaList> ADSDetails { get; set; }
    }

    public class FDRFinaList
    {
        public string farmer_code { get; set; }
        public string FPOName { get; set; }
        public string farmer_name { get; set; }
        public string sur_name { get; set; }
        public string fhw_name { get; set; }
        public string dob { get; set; }
        public string farmer_dist { get; set; }
        public string farmer_taluk { get; set; }
        public string farmer_panchayat { get; set; }
        public string farmer_village { get; set; }
        public string farmer_addr2 { get; set; }
        public string farmer_pincode { get; set; }
        public string gender_flag { get; set; }
        public string reg_mobile_no { get; set; }
        public string GroupName { get; set; }
        public string LTHName { get; set; }
        public string LTHMobileNo { get; set; }
        public string No_of_Milling_machine_in_villages { get; set; }
        public string No_of_Tractors_in_Village { get; set; }
        public string Distance_of_Warehouse { get; set; }
        public string WareHouse_Type { get; set; }
        public string BANK_AC { get; set; }
        public string Bank_Account_No { get; set; }
        public string Bank_Name { get; set; }
        public string Branch_Name { get; set; }
        public string IFSC_Code { get; set; }
        public string CASTE { get; set; }
        public string Education { get; set; }
        public string LF { get; set; }
        public string Aadhar_No { get; set; }
        public string Family_No { get; set; }
        public string Working_No { get; set; }
        public string family_member_migrated { get; set; }
        public string OISLabour { get; set; }
        public string OISJob { get; set; }
        public string OISBusiness { get; set; }
        public string House { get; set; }
        public string Tractor { get; set; }
        public string ISTubewell { get; set; }
        public string ISCanal { get; set; }
        public string F_Pond { get; set; }
        public string PISLTrader { get; set; }
        public string PISGOVT { get; set; }
        public string PISFpo { get; set; }
        public string SHCard { get; set; }
        public string Large_Ruminants { get; set; }
        public string Poultry { get; set; }
        public string Small_Ruminants { get; set; }
        public string Own_land_Acr { get; set; }
        public string Lease_land_Acr { get; set; }
        public string FY_2019_20_kharif_area_Maize { get; set; }
        public string FY_2019_20_kharif_area_Paddy { get; set; }
        public string FY_2019_20_kharif_area_Veg { get; set; }
        public string FY_2020_21_kharif_area_Maize { get; set; }
        public string FY_2020_21_kharif_area_Paddy { get; set; }
        public string FY_2020_21_kharif_area_Veg { get; set; }
        public string FY_2019_20_rabi_area_Maize { get; set; }
        public string FY_2019_20_rabi_area_Paddy { get; set; }
        public string FY_2019_20_rabi_area_Veg { get; set; }
        public string FY_2020_21_rabi_area_Maize { get; set; }
        public string FY_2020_21_rabi_area_Paddy { get; set; }
        public string FY_2020_21_rabi_area_Veg { get; set; }
        public string Maize_yield_qtl_acre { get; set; }
        public string Maize_yield_Kh_Ra { get; set; }
        public string Ragi_2020_Acre { get; set; }
        public string Ragi_2021_Acre { get; set; }
        public string INS_Life { get; set; }
        public string INS_Health { get; set; }
        public string INS_Crop { get; set; }
        public string Loan_Vill { get; set; }
        public string Loan_MFI { get; set; }
        public string Loan_Bank { get; set; }
        public string Kalia { get; set; }
        public string PM_Kisan_Nidhi { get; set; }
        public string eNAM_Reg { get; set; }
        public string RMC_Reg { get; set; }
        public string INPLTrader { get; set; }
        public string INPSociety { get; set; }
        public string INPFPO { get; set; }
        public string MSTLTrader { get; set; }
        public string MSTRMC { get; set; }
        public string MSTFPO { get; set; }
        public string SMPLTrader { get; set; }
        public string SMPRMC { get; set; }
        public string SMPFPO { get; set; }
        public string FPC_share_paid_Rs { get; set; }
        public string Share_Certificate { get; set; }
        public string Share_Certificate_No { get; set; }
        public string Own_Maize_storage_Kuccha { get; set; }
        public string Own_Maize_storage_Pucca { get; set; }
        public string Drying_practices_Road { get; set; }
        public string Drying_practices_Kuccha { get; set; }
        public string Drying_practices_Pucca { get; set; }
        public string Drying_practices_Platform { get; set; }
        public string Reason_for_crop_loss_Weather { get; set; }
        public string Reason_for_crop_loss_Pest { get; set; }
        public string Reason_for_crop_loss_PHM { get; set; }
        public string share_of_RCLWeather { get; set; }
        public string share_of_RCLPest { get; set; }
        public string share_of_RCLPHM { get; set; }
        public string Interested_to_sell_to_FPC { get; set; }
        public string Whether_Aggregator { get; set; }
        public string of_maize_sold_in_Month_0_1 { get; set; }
        public string of_maize_sold_in_Month_2_3 { get; set; }
        public string of_maize_sold_in_Month_3 { get; set; }
        public string Form_of_storage_Cob { get; set; }
        public string Form_of_storage_Loose { get; set; }
        public string Form_of_storage_Bags { get; set; }
        public string sale_of_maize_to_Hat { get; set; }
        public string sale_of_maize_to_LTrader { get; set; }
        public string sale_of_maize_to_RMC { get; set; }
        public string Payment_received_in_days_Hat { get; set; }
        public string Payment_received_in_days_LTrader { get; set; }
        public string Payment_received_in_days_RMC { get; set; }
        public string Idea_of_maize_QC_M { get; set; }
        public string Idea_of_maize_QC_F { get; set; }
        public string Idea_of_maize_QC_DD { get; set; }
        public string Interest_to_WH_Subsidy { get; set; }
        public string Interest_to_WR_Finance { get; set; }
        public string Concern_LRP_ME { get; set; }
    }


 
}



