using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Xml.Linq;
using FFI_Datamodel;
using Microsoft.AspNetCore.Hosting;
using GemBox.Spreadsheet;
using System.Net;
using OfficeOpenXml;
using MySql.Data.MySqlClient;

namespace FFI.Controllers
{
    public class HomeController : Controller
    {

        public static List<combo_values> combo;
        private IConfiguration _configuration;
        private IHostingEnvironment _hostingEnvironment;
        string dbstring = "";
        private MySqlConnection con;
        public HomeController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        string urlstring = "";
        public ActionResult Home()
        {
            //mastercodelist();
            Common.Global.filter_condition = "";
            return View();
        }

        [HttpPost]
        public string displayHelp(string id)
        {
            if (id == "")
                id = "Help.html";
            string url = ConfigurationManager.AppSettings["helpUrl"].ToString() + id;
            return url;
        }

        [HttpPost]
        public string mastercodelist()
        {
            try
            {
                string[] result = { };
                string post_data = "";
                dynamic master_header = new JObject();
                master_header.orgnId = "flexi";
                master_header.locnId= _configuration.GetSection("Appsettings")["Instance"].ToString();
                master_header.userId = "admin";
                master_header.localeId = "en_US";
                master_header.parent_code = "ALL";
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
                    string Urlcon = "MasterDefinition/";
                    client.BaseAddress = new Uri(urlstring + Urlcon);                  
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpContent content = new StringContent(JsonConvert.SerializeObject(master_header), UTF8Encoding.UTF8, "application/json");
                    var response = client.PostAsync("MasterDefinition_List", content).Result;
                    Stream data = response.Content.ReadAsStreamAsync().Result;
                    StreamReader reader = new StreamReader(data);
                    post_data = reader.ReadToEnd();                   
                    result = (string[])JsonConvert.DeserializeObject(post_data, result.GetType());
                }
                Common.Util.mstlist = result;
            }
            catch (Exception ex)
            {
                //Common.LogTest.TestClass.getLogError(
                //                 Request.RequestContext.RouteData.Values["controller"].ToString(),
                //                 MethodBase.GetCurrentMethod().Name, ex.Message);
            }
            return JsonConvert.SerializeObject(Common.Util.mstlist);
        }
        #region MasterCodeScreenId

        public class Master_codeInput
        {
            public string userId { get; set; }
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string localeId { get; set; }
            public string screen_Id { get; set; }
       
        }
        public class MCSIHeader
        {
            public string screen_description { get; set; }
        }

        public class MCSIDetail
        {
            public int out_master_rowid { get; set; }
            public int out_row_slno { get; set; }
            public string out_parent_code { get; set; }
            public string out_parent_description { get; set; }
            public string out_master_code { get; set; }
            public string out_master_description { get; set; }
            public string out_master_ll_description { get; set; }
            public string out_depend_code { get; set; }
            public string out_depend_desc { get; set; }
            public string out_locallang_flag { get; set; }
            public string out_status_code { get; set; }
            public string out_status_desc { get; set; }
            public string out_row_timestamp { get; set; }
            public string out_mode_flag { get; set; }
        }

        public class MasterCodeScreenID
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public MCSIHeader Header { get; set; }
            public List<MCSIDetail> Detail { get; set; }
        }

        #endregion
        [HttpPost]
         public string screenId_mastercodelist( [FromBody] Master_codeInput input)
        {
            try
            {
                string screen_code = "";
                string orgnId = "";
                string locnId = "";
                string userId = "";
                string localeId = "";
             
                if (input.screen_Id == null)
                {
                    screen_code = "";
                }
                else
                {
                    screen_code = input.screen_Id;
                }
                if (input.orgnId == null)
                {
                    orgnId = "Global";
                }
                else
                {
                    orgnId = input.orgnId;
                }
                if (input.locnId == null)
                {
                    locnId = _configuration.GetSection("Appsettings")["Instance"].ToString();
                }
                else
                {
                    locnId = input.locnId;
                }
                if (input.userId == null)
                {
                    userId = "admin";
                }
                else
                {
                    userId = input.userId;
                }
                if (input.localeId == null)
                {
                    localeId = "en_US";
                }
                else
                {
                    localeId = input.localeId;
                }
                MasterCodeScreenID objList = new MasterCodeScreenID();
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
               
                    string Urlcon = "MasterDefinition/";
                    client.BaseAddress = new Uri(urlstring + Urlcon);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                    var response = client.GetAsync("mastercode_screenid?org=" + orgnId + "&locn=" + locnId + "&user=" + userId + "&lang=" + localeId + "&screen_code=" + screen_code + "").Result;
                    Stream data = response.Content.ReadAsStreamAsync().Result;
                    StreamReader reader = new StreamReader(data);
                    post_data = reader.ReadToEnd();
                     objList = (MasterCodeScreenID)JsonConvert.DeserializeObject(post_data, typeof(MasterCodeScreenID));
                

                    object[] array1 = new object[objList.Detail.Count];
                    for (var i = 0; i < objList.Detail.Count; i++)
                    {
                        array1[i] = objList.Detail[i];
                    }
                    Common.Util.mstScreenlist = array1;
                }
            }
            catch (Exception ex)
            {
                //Common.LogTest.TestClass.getLogError(
                //                Request.RequestContext.RouteData.Values["controller"].ToString(),
                //                MethodBase.GetCurrentMethod().Name, ex.Message);
            }
            return JsonConvert.SerializeObject(Common.Util.mstScreenlist);
        }

        [HttpPost]
        public string getcode(string mstcode)
        {
            DataTable dt = Common.Util.load_mastercodes(mstcode);
            return JsonConvert.SerializeObject(dt);

        }

        [HttpPost]
        public string getScreenIDcode([FromBody] Master_codeInput input)
        {
            DataTable dt = Common.Util.load_ScreenIDmastercodes(input.screen_Id);
            return JsonConvert.SerializeObject(dt);

        }
        [HttpPost]
        public string getScreencode(string deptcode)
        {
            DataTable dt = Common.Util.load_Screenmastercodes(deptcode);
            return JsonConvert.SerializeObject(dt);

        }

        public static object[] mstlist;

        public class combo_values
        {
            public string mastercode { get; set; }
            public string code { get; set; }
            public string description { get; set; }
            public string status { get; set; }
            public string mstcode { get; set; }
        }

        public List<combo_values> Aval_Permission(DataTable dt_Aval)
        {
            List<combo_values> aval_perm = new List<combo_values>();
            foreach (DataRow dr in dt_Aval.Rows)
            {
                combo_values newPerm = new combo_values();

                newPerm.mastercode = dr["mastercode"].ToString();
                newPerm.code = dr["code"].ToString();
                newPerm.description = dr["description"].ToString();
                newPerm.status = dr["status"].ToString();

                aval_perm.Add(newPerm);
            }
            return aval_perm;
        }


        [HttpPost]
        public string javascript_log4j(string formName, string filename, string methodName, string errmsg)
        {
            //Common.LogTest.TestClass.getJavascriptLogerror(formName, filename, methodName, errmsg);
            return "";
        }


        public class ExportContext
        {
            public string griddata { get; set; }
            public Boolean chkall { get; set; }
            public Boolean chkfilter { get; set; }
            public Boolean chktemp { get; set; }
            public string combovalue { get; set; }
            public string TreeId { get; set; }
            public string SubTreeId { get; set; }
            public string filepath { get; set; }
        }

        public string getCamelCase(string temp)
        {
            System.Globalization.TextInfo txtInfo = new System.Globalization.CultureInfo("en-us", false).TextInfo;
            temp = txtInfo.ToTitleCase(temp).Replace("Farmer_", "").Replace("_Desc", "").Replace('_', ' ');
            return temp;
        }


        [HttpPost]
        public string Export_Excel([FromBody]ExportContext sdata)
        {
            dynamic excel_export = new JObject();
            try
            {
                var result = new DataTable();
                Boolean chkall = sdata.chkall;
                Boolean chkfilter = sdata.chkfilter;
                Boolean chktemp = sdata.chktemp;
                string combovalue = sdata.combovalue;
                string TreeId = sdata.TreeId;
                string SubTreeId = sdata.SubTreeId;
                string filepath = sdata.filepath;
                string webRootPath = _hostingEnvironment.WebRootPath;
                var jArray = JArray.Parse(sdata.griddata.Replace("out_", ""));
                //adding columns
                foreach (var row in jArray)
                {
                    foreach (var jToken in row)
                    {
                        var jproperty = jToken as JProperty;
                        if (jproperty == null) continue;
                        if (result.Columns[jproperty.Name] == null)
                            result.Columns.Add(jproperty.Name, typeof(string));
                    }
                }
                foreach (var row in jArray)
                {
                    var datarow = result.NewRow();
                    foreach (var jToken in row)
                    {
                        var jProperty = jToken as JProperty;
                        if (jProperty == null) continue;
                        datarow[jProperty.Name] = jProperty.Value.ToString();
                    }
                    result.Rows.Add(datarow);
                }
                if (SubTreeId == "Farmer_reg")
                {
                    result.Columns.Remove("farmer_rowid");
                    result.Columns.Remove("version_no");
                    result.Columns.Remove("photo_farmer");
                    result.Columns.Remove("farmer_ll_name");
                    result.Columns.Remove("sur_ll_name");
                    result.Columns.Remove("fhw_ll_name");
                    result.Columns.Remove("farmer_ll_addr1");
                    result.Columns.Remove("farmer_ll_addr2");
                    result.Columns.Remove("farmer_country");
                    result.Columns.Remove("farmer_state");
                    result.Columns.Remove("farmer_dist");
                    result.Columns.Remove("farmer_taluk");
                    result.Columns.Remove("farmer_panchayat");
                    result.Columns.Remove("farmer_village");
                    result.Columns.Remove("farmer_pincode_desc");
                    result.Columns.Remove("marital_status");
                    result.Columns.Remove("marital_status_desc");
                    result.Columns.Remove("gender_flag");
                    result.Columns.Remove("status_code");
                    result.Columns.Remove("row_timestamp");
                    result.Columns.Remove("reg_note");
                    result.Columns.Remove("farmer_country_desc");
                    result.Columns.Remove("farmer_state_desc");
                    result.Columns.Remove("farmer_dist_desc");

                    result.Columns["farmer_code"].ColumnName = "Farmer Code";
                    result.Columns["farmer_name"].ColumnName = "Farmer First Name";
                    result.Columns["sur_name"].ColumnName = "Farmer Sur Name";
                    result.Columns["fhw_name"].ColumnName = "FHW Name";
                    result.Columns["farmer_dob"].ColumnName = "DOB";
                    result.Columns["farmer_addr1"].ColumnName = "Permanent Address";
                    result.Columns["Hamlet"].ColumnName = "Hamlet";
                    //result.Columns["farmer_country_desc"].ColumnName = getCamelCase(result.Columns["farmer_country_desc"].ColumnName);
                    //result.Columns["farmer_state_desc"].ColumnName = getCamelCase(result.Columns["farmer_state_desc"].ColumnName);
                    //result.Columns["farmer_dist_desc"].ColumnName = getCamelCase(result.Columns["farmer_dist_desc"].ColumnName);
                    result.Columns["farmer_taluk_desc"].ColumnName = getCamelCase(result.Columns["farmer_taluk_desc"].ColumnName);
                    result.Columns["farmer_panchayat_desc"].ColumnName = "Gram Panchayat";
                    result.Columns["farmer_village_desc"].ColumnName = getCamelCase(result.Columns["farmer_village_desc"].ColumnName);
                    result.Columns["farmer_pincode"].ColumnName = getCamelCase(result.Columns["farmer_pincode"].ColumnName);
                    result.Columns["reg_mobile_no"].ColumnName = "Farmer Mobile Number";
                    result.Columns["gender_flag_desc"].ColumnName = "Gender";
                    result.Columns["status_desc"].ColumnName = "Status";
                }
                else if (SubTreeId == "FAR_PRF")
                {
                    result.Columns.Remove("farmer_rowid");
                    result.Columns.Remove("version_no");
                    result.Columns.Remove("photo_farmer");
                    result.Columns.Remove("farmer_ll_name");
                    result.Columns.Remove("sur_ll_name");
                    result.Columns.Remove("fhw_ll_name");
                    result.Columns.Remove("farmer_ll_addr1");
                    result.Columns.Remove("farmer_ll_addr2");
                    result.Columns.Remove("farmer_country");
                    result.Columns.Remove("farmer_country_desc");
                    result.Columns.Remove("farmer_state");
                    result.Columns.Remove("farmer_state_desc");
                    result.Columns.Remove("farmer_dist");
                    result.Columns.Remove("farmer_dist_desc");
                    result.Columns.Remove("farmer_taluk");
                    result.Columns.Remove("farmer_panchayat");
                    result.Columns.Remove("farmer_village");
                    result.Columns.Remove("farmer_pincode_desc");
                    result.Columns.Remove("marital_status");
                    result.Columns.Remove("marital_status_desc");
                    result.Columns.Remove("gender_flag");
                    result.Columns.Remove("status_code");
                    result.Columns.Remove("row_timestamp");
                    result.Columns.Remove("reg_note");

                    result.Columns["farmer_code"].ColumnName = "Farmer Code";
                    result.Columns["farmer_name"].ColumnName = "Farmer First Name";
                    result.Columns["sur_name"].ColumnName = "Farmer Sur Name";
                    result.Columns["fhw_name"].ColumnName = "FHW Name";
                    result.Columns["farmer_dob"].ColumnName = "DOB";
                    result.Columns["farmer_addr1"].ColumnName = "Permanent Address";
                    result.Columns["farmer_addr2"].ColumnName = "Hamlet";
                    result.Columns["farmer_taluk_desc"].ColumnName = getCamelCase(result.Columns["farmer_taluk_desc"].ColumnName);
                    result.Columns["farmer_panchayat_desc"].ColumnName = getCamelCase(result.Columns["farmer_panchayat_desc"].ColumnName);
                    result.Columns["farmer_village_desc"].ColumnName = getCamelCase(result.Columns["farmer_village_desc"].ColumnName);
                    result.Columns["farmer_pincode"].ColumnName = getCamelCase(result.Columns["farmer_pincode"].ColumnName);
                    result.Columns["reg_mobile_no"].ColumnName = "Farmer Mobile Number";
                    result.Columns["gender_flag_desc"].ColumnName = "Gender";
                    result.Columns["status_desc"].ColumnName = "Status";
                }
                else if (SubTreeId == "FPO Registration List")
                {
                    result.Columns.Remove("orgn_rowid");
                    result.Columns.Remove("version_no");
                    result.Columns.Remove("orgn_cin");
                    result.Columns.Remove("primary_lang_code");
                    result.Columns.Remove("orgn_ll_name");
                    result.Columns.Remove("orgn_level");
                    result.Columns.Remove("orgn_type");
                    result.Columns.Remove("orgn_subtype");
                    result.Columns.Remove("orgn_subtype_desc");
                    result.Columns.Remove("secondary_lang_code");
                    result.Columns.Remove("orgn_auth_sign");
                    result.Columns.Remove("status_code");
                    result.Columns.Remove("row_timestamp");
                    result.Columns.Remove("FilterBy_Option");
                    result.Columns.Remove("FilterBy_Code");
                    result.Columns.Remove("FilterBy_FromValue");
                    result.Columns.Remove("FilterBy_ToValue");

                    result.Columns["orgn_code"].ColumnName = "FPO Code";
                    result.Columns["parent_code"].ColumnName = "Facilitator Org";
                    result.Columns["orgn_name"].ColumnName = "FPO Name";
                    result.Columns["orgn_level_desc"].ColumnName = "District";
                    result.Columns["orgn_type_desc"].ColumnName = "FPO Type";
                    result.Columns["orgn_logo"].ColumnName = "Number of Members";
                    result.Columns["status_desc"].ColumnName = "Status";
                }
                else if (SubTreeId == "ICDPRDT")
                {  
                    result.Columns["Out_ic_name"].ColumnName = "ICD Center Name";
                    
                }
                else if (SubTreeId == "Supplier Master List")
                {
                    result.Columns.Remove("Out_supplier_rowid");
                    result.Columns.Remove("Out_supplier_code");
                    result.Columns.Remove("Out_version_no");
                    result.Columns.Remove("Out_status_code");
                    result.Columns.Remove("Out_status_desc");
                    result.Columns.Remove("Out_row_timestamp");

                    result.Columns["Out_supplier_name"].ColumnName = "Supplier Name";
                    result.Columns["Out_pan_no"].ColumnName = "PAN No";
                    result.Columns["Out_ic_name"].ColumnName = "IC Name";
                }
                else if (SubTreeId == "FPOLGMT")
                {
                    result.Columns.Remove("fpoloan_rowid");
                    result.Columns.Remove("fpoorgn_code");
                    result.Columns.Remove("institution_type");
                    result.Columns.Remove("fpoloan_mat_date");
                    result.Columns.Remove("fpoloan_start_date");
                    result.Columns.Remove("refund_received");
                    result.Columns.Remove("emi_amount");
                    result.Columns.Remove("interest_rate");
                    result.Columns.Remove("repayment_in_yrs");
                    result.Columns.Remove("repayment_freq");
                    result.Columns.Remove("repayment_in_months");
                    result.Columns.Remove("collateral_type");
                    result.Columns.Remove("collateral_type_desc");
                    result.Columns.Remove("payable_amount");
                    result.Columns.Remove("payable_exception");
                    result.Columns.Remove("interest_amount");
                    result.Columns.Remove("collateral_amount");
                    result.Columns.Remove("closed_date");
                    result.Columns.Remove("received_amount");
                    result.Columns.Remove("settlement_amount");
                    //result.Columns.Remove("principle_paid");
                    result.Columns.Remove("interest_paid");
                    result.Columns.Remove("waive_amount");
                    result.Columns.Remove("status_code");

                    result.Columns["fpoloan_no"].ColumnName = "Fpo Loan No";
                    result.Columns["lending_institution"].ColumnName = "Institution";
                    result.Columns["institution_type_desc"].ColumnName = "Type";
                    result.Columns["sanctioned_date"].ColumnName = "Disb. Date";
                    result.Columns["sanctioned_amount"].ColumnName = "Loan Amount";
                    result.Columns["repayment_freq_desc"].ColumnName = "Repayment Frequency";
                    result.Columns["status_desc"].ColumnName = "Status";

                }
                Guid guid = Guid.NewGuid();
                var Excel_name = "";
                string path2 = "";
                if (chktemp == true)
                {
                    Excel_name = combovalue;
                    TreeId = "ws";
                    SubTreeId = "FFI";

                    path2 = Path.Combine(webRootPath, TreeId, SubTreeId, Excel_name + "." + filepath);
                    //path2 = Server.MapPath("~/" + TreeId + "/" + SubTreeId + "/" + Excel_name + "." + filepath);
                    SubTreeId = combovalue;
                }
                else
                {
                    SpreadsheetInfo.SetLicense("FREE-LIMITED-KEY");
                    var workbook = new ExcelFile();
                    var ExcelWorkSheet = workbook.Worksheets.Add(SubTreeId);
                    if (filepath == null)
                    {
                        filepath = "xlsx";
                    }
                    path2 = Path.Combine(webRootPath, SubTreeId + "." + filepath);
                    //path2 = Server.MapPath("~/Common_Excel/" + SubTreeId + "." + filepath);
                    if (System.IO.File.Exists(path2))
                    {
                        System.IO.File.Delete(path2);
                    }

                    workbook.Save(path2);
                }
                string Clientpath;
                string remoteUri = path2;
                string fileDownload;
                if (SubTreeId == "Farmer_reg")
                {
                    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", "Farmer Registration" + "." + filepath);
                    Clientpath = Path.Combine("/Downloaded_Excel/" + "Farmer Registration" + "." + filepath);
                }
                else if (SubTreeId == "FAR_PRF")
                {
                    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", "FarmerProfile." + filepath);
                    Clientpath = Path.Combine("/Downloaded_Excel/" + "FarmerProfile." + filepath);
                }
                else if (SubTreeId == "FPO Registration List")
                {
                    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", "FPORegistration." + filepath);
                    Clientpath = Path.Combine("/Downloaded_Excel/" + "FPORegistration." + filepath);
                }
                else if (SubTreeId == "ICDPRDT")
                {
                    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", "ICDProductMaster." + filepath);
                    Clientpath = Path.Combine("/Downloaded_Excel/" + "ICDProductMaster." + filepath);
                }
                else if (SubTreeId == "Supplier Master List")
                {

                    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", "ICDSupplierMaster." + filepath);
                    Clientpath = Path.Combine("/Downloaded_Excel/" + "ICDSupplierMaster." + filepath);

                }
                else if (SubTreeId == "FPOLGMT")
                {
                    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", "FPO Loan" + "." + filepath);
                    Clientpath = Path.Combine("/Downloaded_Excel/" + "FPO Loan" + "." + filepath);
                }
                //else if (SubTreeId == "PurchaseOrder")
                //{

                //    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", "PAWHS Purchase Order." + filepath);
                //    Clientpath = Path.Combine("/Downloaded_Excel/" + "PAWHS Purchase Order." + filepath);

                //}

                //else if (SubTreeId == "invoice")
                //{

                //    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", "PAWHS Invoice." + filepath);
                //    Clientpath = Path.Combine("/Downloaded_Excel/" + "PAWHS Invoice." + filepath);

                //}

                else
                {
                    fileDownload = Path.Combine(webRootPath, "Downloaded_Excel", SubTreeId + "_" + guid + "." + filepath);
                    Clientpath = Path.Combine("/Downloaded_Excel/" + SubTreeId + "_" + guid + "." + filepath);
                }
                string fileDownload12 = Path.Combine(webRootPath, "Downloaded_Excel");
                if (System.IO.File.Exists(fileDownload12))
                {
                    System.IO.File.OpenWrite(fileDownload12);
                }
                else
                {
                    DirectoryInfo di = Directory.CreateDirectory(fileDownload12);
                    WebClient myWebClient = new WebClient();
                    myWebClient.DownloadFile(remoteUri, fileDownload);

                    var workbookFileInfo = new FileInfo(@fileDownload);
                    using (ExcelPackage excel = new ExcelPackage(workbookFileInfo))
                    {

                        ExcelWorkbook workBook = excel.Workbook;
                        var firstWorksheet = workBook.Worksheets.First();
                        excel.Workbook.Worksheets.Delete(firstWorksheet);
                        var objWorksheet = excel.Workbook.Worksheets.Add("Data");
                        objWorksheet.Cells["A1"].LoadFromDataTable(result, true);
                        objWorksheet.Cells.AutoFitColumns();

                        using (ExcelRange objRange = objWorksheet.Cells["A1:XFD1"])
                        {
                            objRange.Style.Font.Bold = true;

                        }

                        ExcelRange range = objWorksheet.Cells["A1:I3264"];

                        ExcelAddress valueAddress = new ExcelAddress(15, 1, 25, 15);

                        excel.Save();
                        excel_export.msg = "" + Excel_name + " Exported Successfully";
                        excel_export.path = Clientpath;
                        excel_export.success = true;
                    }
                }
            }
            catch (Exception ex)
            {
                excel_export.msg = ex.Message;
                excel_export.success = false;
            }
            return JsonConvert.SerializeObject(excel_export);
        }

        
    }
}