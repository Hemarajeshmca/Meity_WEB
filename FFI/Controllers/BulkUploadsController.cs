//using ClosedXML.Excel;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using ExcelDataReader;
using GemBox.Spreadsheet;
//using iTextSharp.text;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using MySqlX.XDevAPI;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Drawing.Text;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace FFI.Controllers
{
    public class BulkUploadsController : Controller
    {

        DataTable excel_table = new DataTable();
        // DataTable excel_table1 = new DataTable();
        DataTable dt1 = new DataTable();
        dynamic col_nme;
        // GET: BulkUploads



        private readonly IWebHostEnvironment _webHostEnvironment;
        private IConfiguration _configuration;
#pragma warning disable CS0618 // Type or member is obsolete
        private IHostingEnvironment _hostingEnvironment;
#pragma warning restore CS0618 // Type or member is obsolete
        log4net.ILog logger = log4net.LogManager.GetLogger(typeof(ReportlistController));

        public BulkUploadsController(IWebHostEnvironment webHostEnvironment, IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _webHostEnvironment = webHostEnvironment;
            _hostingEnvironment = hostingEnvironment;
        }
        string urlstring = "";
        public ActionResult BulkUploads()
        {
            return View();
        }

        dynamic excel_msg = new JObject();

        #region Murali Changes Start 22-04-2020
        [HttpPost]
        public string readexcel_data(IFormFile importExcelFile, string column_name, string user_id, string menu_id, string Procedure_type,string orgn_id)
        {
            string methodName = MethodBase.GetCurrentMethod().Name;
            string fileLocation = "";
            dynamic tmp_rpt = new JObject();
            excel_msg.failure = false;
            string str_missmatch = "";
            dynamic Excel_save_detail = new JObject();
            try
            {
                // HttpContext.Session.Clear();
                col_nme = JsonConvert.DeserializeObject(column_name);
                string colnames = JsonConvert.DeserializeObject(column_name).ToString();
                HttpContext.Session.SetString("colName", colnames);
                //Session["colName"] = col_nme;

                if (importExcelFile != null && importExcelFile.Length > 0)
                {
                    DataSet ds = new DataSet();
                    if (importExcelFile.Length > 0)
                    {

                        //if (Request.Files["importExcelFile"].ContentLength > 0)
                        //{
                        string fileExtension = System.IO.Path.GetExtension(importExcelFile.FileName);
                        if (fileExtension == ".xls" || fileExtension == ".xlsx")
                        {
                            Guid guid = Guid.NewGuid();
                            string uId = guid.ToString();
                            string[] sptVar = importExcelFile.FileName.Split(new[] { fileExtension }, StringSplitOptions.None);
                            string webRootPath = _hostingEnvironment.WebRootPath;
                            string contentRootPath = _webHostEnvironment.ContentRootPath;

                            string folderName = "wwwroot";
                            fileLocation = Path.Combine(contentRootPath, folderName);

                            folderName = "uploadedXLFiles";
                            fileLocation = Path.Combine(contentRootPath, folderName);

                            fileLocation = Path.Combine(contentRootPath, sptVar[0] + uId + fileExtension);
                            if (System.IO.File.Exists(fileLocation))
                            {
                                System.IO.File.Delete(fileLocation);
                            }
                            string fullPath = Path.Combine(fileLocation, sptVar[0] + uId + fileExtension);
                            using (var streamss = new FileStream(fileLocation, FileMode.Create))
                            {

                                importExcelFile.CopyTo(streamss);
                            }
                            HttpContext.Session.SetString("sptVar", sptVar[0]);
                            //Session["sptVar"] = sptVar[0];
                            HttpContext.Session.SetString("fileextension", fileExtension);
                            // Session["fileextension"] = fileExtension;
                            FileStream stream = System.IO.File.Open(fileLocation, FileMode.Open, FileAccess.Read);

                            IExcelDataReader excelReader = ExcelReaderFactory.CreateBinaryReader(stream);
                            //excelReader.IsFirstRowAsColumnNames = true;
                            var result = excelReader.AsDataSet(new ExcelDataSetConfiguration()
                            {
                                ConfigureDataTable = (_) => new ExcelDataTableConfiguration()
                                {
                                    UseHeaderRow = true
                                }
                            });


                            dt1 = result.Tables[0];

                            int k = col_nme.Count;
                            int r_count = 0;
                            while (k < dt1.Columns.Count)
                            {
                                dt1.Columns.RemoveAt(k);
                                r_count++;
                            }

                            if (dt1.Columns.Count == col_nme.Count)
                            {
                                if (dt1.Rows.Count > 0)
                                {
                                    int j = 0;
                                    while (j < dt1.Rows.Count)
                                    {
                                        if (dt1.Rows[j][1].ToString() != "")
                                        {
                                            j++;
                                        }
                                        else
                                        {
                                            dt1.Rows.RemoveAt(j);
                                            j = 1;
                                        }
                                    }

                                    for (int n = 0; n < col_nme.Count; n++)
                                    {
                                        var col_name = col_nme[n].column_name.ToString();
                                        var col_type = col_nme[n].column_type.ToString();

                                        if (col_type == "Numeric")
                                        {
                                            col_type = typeof(string);
                                        }
                                        else if (col_type == "Date")
                                        {
                                            col_type = typeof(string);
                                        }
                                        else
                                        {
                                            col_type = typeof(string);
                                        }
                                        excel_table.Columns.Add(col_name, col_type);
                                        // excel_table1.Columns.Add(col_name, col_type);
                                    }

                                    for (int i = 0; i < dt1.Rows.Count; i++)
                                    {
                                        DataRow dr = excel_table.NewRow();

                                        // DataRow dr1 = excel_table1.NewRow();

                                        for (int l = 0; l < dt1.Columns.Count; l++)
                                        {
                                            var col_type = col_nme[l].column_type.ToString();
                                            var col_length = col_nme[l].max_len.ToString();
                                            var cellvalue = dt1.Rows[i][l];


                                            if (col_type == "Numeric")
                                            {
                                                if (cellvalue.ToString() == "")
                                                    cellvalue = 0.00;
                                                dr[l] = convert_to_double(cellvalue.ToString().Trim());
                                                //  dr1[l] = convert_to_double(cellvalue.ToString());
                                            }
                                            else if (col_type == "Date")
                                            {
                                                string conv = cellvalue.ToString().Trim();
                                                if (conv != "")
                                                {
                                                   
                                                    //string datetime = conv.Split(' ').First().Trim();
                                                    string datetime = conv;
                                                    // dr[l] = DateTime.ParseExact(datetime, "dd-MM-yyyy", null).ToString("yyyy-MM-dd");
                                                     dr[l] = Convert.ToDateTime(datetime).ToString("yyyy-MM-dd");
                                                    // dr1[l] = datetime.ToString();}

                                                }
                                                else
                                                {
                                                    dr[l] = conv.Replace("'", "''");

                                                }
                                            }
                                            else
                                            {
                                                string cell_val = cellvalue.ToString().Trim();
                                                dr[l] = cell_val.Replace("'", "''");
                                                //  dr1[l] = cell_val.Replace("'", "’");
                                            }
                                        }
                                        excel_table.Rows.Add(dr);
                                        //  excel_table1.Rows.Add(dr1);
                                    }

                                    var mydtList = new List<string>();
                                    var myudsList = new List<string>();

                                    int m = 0;
                                    Random rnd = new Random();
                                    int rdNum = rnd.Next(0, 999999999);
                                    while (m < excel_table.Rows.Count)
                                    {
                                        if (excel_table.Rows[m][1].ToString().Trim() != "")
                                        {
                                            Array excel_data = excel_table.Rows[m].ItemArray.ToArray();
                                            string concat = "";
                                            string uds_key = "";
                                            var uds_str = "";
                                            int column_index = 0;
                                            foreach (var item in excel_data)
                                            {

                                                if (col_nme[column_index].option_type != "U")
                                                {
                                                    var str = item.ToString().Trim();
                                                    concat += "'" + str + "'" + ",";
                                                    if (col_nme[column_index].option_type == "K")
                                                    {
                                                        uds_str = item.ToString().Trim();
                                                        uds_key += "'" + uds_str + "'" + ",";
                                                    }

                                                }
                                                else if (col_nme[column_index].option_type == "U")
                                                {
                                                    uds_str = item.ToString().Trim();
                                                    var uds_param = "";
                                                    //uds_param +=  "'" + col_nme[column_index].uds_id + "',  '"  +  col_nme[column_index].column_name +  "' ,'"   + " " +  "' , '" + uds_str + "'" +  ",";
                                                    uds_param = uds_key.Trim() + "'" + col_nme[column_index].uds_id + "',  '' ,'" + col_nme[column_index].column_name + "' , '" + uds_str.Trim() + "'";
                                                    myudsList.Add(uds_param);

                                                }
                                                column_index++;
                                            }
                                            concat = concat.Remove(concat.Length - 1);

                                            //concat = concat + "," + "'" + rdNum + "'";
                                            string param = concat.Trim();

                                            mydtList.Add(param);
                                            m++;
                                        }
                                    }
                                    Excel_save_detail.data = JsonConvert.SerializeObject(excel_table);
                                    Excel_save_detail.scaler = JsonConvert.SerializeObject(mydtList.ToList());

                                    //Vector function start 28-04-2020

                                    if (Procedure_type == "V")
                                    {
                                        DataTable dtFC = new DataTable();
                                        dtFC.Columns.Add("farmer_code");

                                        for (j = 0; j < excel_table.Rows.Count; j++)
                                        {
                                            savevectorApplicationouput obj_list = new savevectorApplicationouput();
                                            vectorApplication objRoot = new vectorApplication();
                                            savevectorDocument1 Obj_doc = new savevectorDocument1();
                                            savevectorContext Obj_context = new savevectorContext();
                                            if (menu_id == "FARMREG")
                                            {
                                                Obj_context.orgnId = orgn_id;
                                            }
                                            else
                                            {
                                                Obj_context.orgnId = HttpContext.Session.GetString("orgId");
                                            }                                           
                                            Obj_context.locnId = HttpContext.Session.GetString("locnId");
                                            Obj_context.userId = HttpContext.Session.GetString("UserId");
                                            Obj_context.localeId = HttpContext.Session.GetString("localeId");
                                            savevectorHeader objheader = new savevectorHeader();
                                            objheader.In_farmer_code = excel_table.Rows[j]["farmer_code"].ToString().Trim();
                                            dtFC.Rows.Add(objheader.In_farmer_code);
                                            objheader.In_version_no = 1;
                                            objheader.In_farmer_name = excel_table.Rows[j]["farmer_name"].ToString().Trim();
                                            objheader.In_sur_name = excel_table.Rows[j]["farmer_surname"].ToString().Trim();
                                            List<savevectorDetail> objlistdetail = new List<savevectorDetail>();
                                            for (k = 0; k < excel_table.Columns.Count; k++)
                                            {
                                                int numberOfRecords = dtFC.Select("farmer_code = '" + objheader.In_farmer_code.Trim() + "'").Length;
                                                savevectorDetail objDetails = new savevectorDetail();

                                                objDetails.In_entitygrp_code = HttpContext.Session.GetString("groupcode").Trim();
                                                objDetails.In_entity_code = excel_table.Columns[k].ColumnName.Trim();
                                                objDetails.In_row_slno = numberOfRecords.ToString().Trim();
                                                objDetails.In_entity_value = excel_table.Rows[j][k].ToString().Trim();
                                                objlistdetail.Add(objDetails);
                                            }
                                            Obj_context.Header = objheader;
                                            Obj_context.Detail = objlistdetail;
                                            Obj_doc.context = Obj_context;
                                            objRoot.document = Obj_doc;

                                            {
                                                string postdata = "";
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
                                                    // string Urlcon = "/newexcelvector";
                                                    string Urlcon = "Admin_BulkUpload/";
                                                    client.BaseAddress = new Uri(urlstring + Urlcon);
                                                    client.DefaultRequestHeaders.Accept.Clear();
                                                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                                                    HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                                                    var response = client.PostAsync("excelVector", content).Result;
                                                    Stream data = response.Content.ReadAsStreamAsync().Result;
                                                    StreamReader reader = new StreamReader(data);
                                                    postdata = reader.ReadToEnd();
                                                    obj_list = (savevectorApplicationouput)JsonConvert.DeserializeObject(postdata, typeof(savevectorApplicationouput));
                                                }
                                                //if (obj_list.ApplicationException == null)
                                                //{
                                                //    excel_table.Rows[j]["UploadStatus"] = "success";
                                                //    excel_table.Rows[j]["Comments"] = "-";

                                                //}
                                                //else
                                                //{
                                                //    HttpContext.Session.SetString("errorDescription", obj_list.ApplicationException.errorDescription);
                                                //    string tran_status_desc1 = HttpContext.Session.GetString("errorDescription");
                                                //    excel_table.Rows[j]["UploadStatus"] = "failure";
                                                //    excel_table.Rows[j]["Comments"] = tran_status_desc1;
                                                //}
                                                if (obj_list.context.Header.Out_tran_status_desc == "" || obj_list.context.Header.Out_tran_status_desc == null)
                                                {
                                                    excel_table.Rows[j]["UploadStatus"] = "success";
                                                    excel_table.Rows[j]["Comments"] = "-";
                                                }
                                                else
                                                {
                                                    HttpContext.Session.SetString("Out_tran_status_desc", obj_list.context.Header.Out_tran_status_desc);
                                                    string tran_status_desc = HttpContext.Session.GetString("Out_tran_status_desc");
                                                    excel_table.Rows[j]["UploadStatus"] = "failure";
                                                    excel_table.Rows[j]["Comments"] = tran_status_desc;
                                                }



                                            }
                                            Excel_save_detail.data = JsonConvert.SerializeObject(excel_table);

                                        }

                                        //History log  28-04-2020
                                        Excel_save_detail.data = JsonConvert.SerializeObject(excel_table);
                                        HttpContext.Session.SetString("dtDownload", JsonConvert.SerializeObject(excel_table));
                                        if (excel_table.Rows.Count > 0)
                                        {
                                            string status = "";
                                            DataView view = new DataView(excel_table);
                                            DataTable distinctValues = view.ToTable(true, "UploadStatus");

                                            if (distinctValues.Rows.Count > 0)
                                            {
                                                foreach (DataRow row in distinctValues.Rows)
                                                {
                                                    var upstatus = row["UploadStatus"].ToString();

                                                    if (upstatus == "success")
                                                    {
                                                        status = upstatus;
                                                    }
                                                    else if (upstatus == "failure")
                                                    {
                                                        status = upstatus;
                                                    }
                                                    else
                                                    {
                                                        status = upstatus;
                                                    }
                                                }

                                            }
                                           
                                            SaveHistoryApplicationRes obj_list = new SaveHistoryApplicationRes();
                                            SaveHistoryApplication objRoot = new SaveHistoryApplication();
                                            SaveHistoryDocument Obj_doc = new SaveHistoryDocument();
                                            SaveHistoryContext Obj_context = new SaveHistoryContext();
                                            SaveExcelHistory excelHistory = new SaveExcelHistory();
                                            if (menu_id == "FARMREG")
                                            {
                                                Obj_context.orgnId = orgn_id;
                                            }
                                            else
                                            {
                                                Obj_context.orgnId = HttpContext.Session.GetString("orgId");
                                            }                                          
                                            Obj_context.locnId = HttpContext.Session.GetString("locnId");
                                            Obj_context.userId = HttpContext.Session.GetString("UserId");
                                            Obj_context.localeId = HttpContext.Session.GetString("localeId");
                                            excelHistory.excel_upload_code = menu_id;
                                            excelHistory.excel_filename = importExcelFile.FileName;
                                            excelHistory.uploaded_by = user_id;
                                            excelHistory.status_code = status;
                                            excelHistory.uploaded_datetime = "";
                                            Obj_context.excelHistory = excelHistory;
                                            Obj_doc.context = Obj_context;
                                            objRoot.document = Obj_doc;
                                            string postdata = "";
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
                                                // string Urlcon = "/newhistorylog";
                                                string Urlcon = "Admin_BulkUpload/";
                                                client.BaseAddress = new Uri(urlstring + Urlcon);
                                                client.DefaultRequestHeaders.Accept.Clear();
                                                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                                                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                                                var response = client.PostAsync("excelHistory", content).Result;
                                                Stream data = response.Content.ReadAsStreamAsync().Result;
                                                StreamReader reader = new StreamReader(data);
                                                postdata = reader.ReadToEnd();
                                                obj_list = (SaveHistoryApplicationRes)JsonConvert.DeserializeObject(postdata, typeof(SaveHistoryApplicationRes));
                                            }

                                            //return Json(obj_list);
                                        }

                                        //history log end 28-04-2020



                                    }

                                    //Vector function end 28-04-2020

                                    //scaler Function start 28-04-2020

                                    else
                                    {
                                        for (j = 0; j < mydtList.Count; j++)
                                        {
                                            ScalerApplicationRes obj_list = new ScalerApplicationRes();
                                            ScalerApplication objRoot = new ScalerApplication();
                                            ScalerDocument obj_doc = new ScalerDocument();
                                            ScalerContext obj_context = new ScalerContext();
                                            ScalerHeader obj_header = new ScalerHeader();
                                            obj_header.option_type = menu_id;

                                            string Test1 = mydtList[j].ToString();
                                            obj_header.parameters = Test1;
                                            if (menu_id == "FARMREG")
                                            {
                                                obj_context.orgnId = orgn_id;
                                            }
                                            else
                                            {
                                                obj_context.orgnId = HttpContext.Session.GetString("orgId");
                                            }                                           
                                            obj_context.locnId = HttpContext.Session.GetString("locnId");
                                            obj_context.userId = HttpContext.Session.GetString("UserId");
                                            obj_context.localeId = HttpContext.Session.GetString("localeId");
                                            obj_context.header = obj_header;
                                            obj_doc.context = obj_context;
                                            objRoot.document = obj_doc;
                                            string postdata = "";
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
                                                //   string Urlcon = "/newexcelscaler";
                                                string Urlcon = "Admin_BulkUpload/";
                                                client.BaseAddress = new Uri(urlstring + Urlcon);
                                                client.DefaultRequestHeaders.Accept.Clear();
                                                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                                                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                                                var response = client.PostAsync("excelScalar", content).Result;
                                                Stream data = response.Content.ReadAsStreamAsync().Result;
                                                StreamReader reader = new StreamReader(data);
                                                postdata = reader.ReadToEnd();
                                                obj_list = (ScalerApplicationRes)JsonConvert.DeserializeObject(postdata, typeof(ScalerApplicationRes));
                                            }

                                            //Existing Code Commented by Venkat 22-09-2020 Start  Because PHP Api Error Description Showing Error Now 
                                            //showing tran_status_desc Variable 
                                            //if (obj_list.ApplicationException == null)
                                            //{
                                            //    excel_table.Rows[j]["UploadStatus"] = "success";
                                            //    excel_table.Rows[j]["Comments"] = "-";

                                            //}
                                            //else
                                            //{
                                            //    //Existing Code Commented by Venkat 22-09-2020
                                            //    HttpContext.Session.SetString("errorDescription", obj_list.ApplicationException.errorDescription);
                                            //    string tran_status_desc = HttpContext.Session.GetString("errorDescription");
                                            //    //Exsting Code End
                                            //    excel_table.Rows[j]["UploadStatus"] = "failure";
                                            //    excel_table.Rows[j]["Comments"] = tran_status_desc;
                                            //}

                                            // Existing code End 


                                            // New Code Venkat Written  Now getting output tran_status_desc Variable

                                            //start 26-11-2020
                                            if(menu_id == "QUICK")
                                            {
                                                //dynamic test = new object();
                                                var test = obj_list.context.headerouput.tran_status_desc.Split('/');
                                                
                                                excel_table.Rows[j]["state_Status"] = test[0];
                                                excel_table.Rows[j]["dist_Status"] = test[1];
                                                excel_table.Rows[j]["taluk_Status"] = test[2];
                                                excel_table.Rows[j]["gram_Status"] = test[3];
                                                excel_table.Rows[j]["village_Status"] = test[4];
                                                excel_table.Rows[j]["hamlet_status"] = test[5];

                                                if (excel_table.Rows[j]["state_Status"].ToString().Contains("QCD_") ||
                                                    excel_table.Rows[j]["dist_Status"].ToString().Contains("QCD_") ||
                                                    excel_table.Rows[j]["taluk_Status"].ToString().Contains("QCD_") ||
                                                    excel_table.Rows[j]["gram_Status"].ToString().Contains("QCD_") ||
                                                    excel_table.Rows[j]["village_Status"].ToString().Contains("QCD_") ||
                                                    excel_table.Rows[j]["hamlet_status"].ToString().Contains("QCD_")
                                                    )
                                                {
                                                    excel_table.Rows[j]["UploadStatus"] = "success";
                                                    excel_table.Rows[j]["Comments"] = "-";
                                                }
                                                else
                                                {
                                                    excel_table.Rows[j]["UploadStatus"] = "failure";
                                                    excel_table.Rows[j]["Comments"] = "-";
                                                }
                                            }
                                            else
                                            { 

                                            //End 


                                            if (obj_list.context.headerouput.tran_status_desc == "" || obj_list.context.headerouput.tran_status_desc == null)
                                            {
                                                excel_table.Rows[j]["UploadStatus"] = "success";
                                                excel_table.Rows[j]["Comments"] = "-";
                                            }
                                            else
                                            {
                                                HttpContext.Session.SetString("tran_status_desc", obj_list.context.headerouput.tran_status_desc);
                                                string tran_status_desc = HttpContext.Session.GetString("tran_status_desc");
                                                excel_table.Rows[j]["UploadStatus"] = "failure";
                                                excel_table.Rows[j]["Comments"] = tran_status_desc;
                                            }

                                            }
                                            //End

                                        }
                                        Excel_save_detail.data = JsonConvert.SerializeObject(excel_table);


                                        //History Log Inserted 29-04-2020

                                        Excel_save_detail.data = JsonConvert.SerializeObject(excel_table);
                                        HttpContext.Session.SetString("dtDownload", JsonConvert.SerializeObject(excel_table));
                                        if (excel_table.Rows.Count > 0)
                                        {
                                            string status = "";
                                            DataView view = new DataView(excel_table);
                                            DataTable distinctValues = view.ToTable(true, "UploadStatus");

                                            

                                            if (distinctValues.Rows.Count > 0)
                                            {
                                                foreach(DataRow row in distinctValues.Rows)
                                                {
                                                    var upstatus = row["UploadStatus"].ToString();

                                                    if(upstatus == "success")
                                                    {
                                                        status = upstatus;
                                                    }
                                                    else if(upstatus == "failure")
                                                    {
                                                        status = upstatus;
                                                    }
                                                    else
                                                    {
                                                        status = upstatus;
                                                    }
                                                }

                                            }
                                          
                                            SaveHistoryApplicationRes obj_list = new SaveHistoryApplicationRes();
                                            SaveHistoryApplication objRoot = new SaveHistoryApplication();
                                            SaveHistoryDocument Obj_doc = new SaveHistoryDocument();
                                            SaveHistoryContext Obj_context = new SaveHistoryContext();
                                            SaveExcelHistory excelHistory = new SaveExcelHistory();
                                            if (menu_id == "FARMREG")
                                            {
                                                Obj_context.orgnId = orgn_id;
                                            }
                                            else
                                            {
                                                Obj_context.orgnId = HttpContext.Session.GetString("orgId");
                                            }
                                            Obj_context.locnId = HttpContext.Session.GetString("locnId");
                                            Obj_context.userId = HttpContext.Session.GetString("UserId");
                                            Obj_context.localeId = HttpContext.Session.GetString("localeId");
                                            excelHistory.excel_upload_code = menu_id;
                                            excelHistory.excel_filename = importExcelFile.FileName;
                                            excelHistory.uploaded_by = user_id;
                                            excelHistory.status_code = status;
                                            excelHistory.uploaded_datetime = "";
                                            Obj_context.excelHistory = excelHistory;
                                            Obj_doc.context = Obj_context;
                                            objRoot.document = Obj_doc;

                                            string postdata = "";
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
                                                //  string Urlcon = "/newhistorylog";
                                                string Urlcon = "Admin_BulkUpload/";
                                                client.BaseAddress = new Uri(urlstring + Urlcon);
                                                client.DefaultRequestHeaders.Accept.Clear();
                                                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                                                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                                                var response = client.PostAsync("excelHistory", content).Result;
                                                Stream data = response.Content.ReadAsStreamAsync().Result;
                                                StreamReader reader = new StreamReader(data);
                                                postdata = reader.ReadToEnd();
                                                obj_list = (SaveHistoryApplicationRes)JsonConvert.DeserializeObject(postdata, typeof(SaveHistoryApplicationRes));
                                            }

                                            //return Json(obj_list);
                                        }
                                        //History End
                                    }
                                    //Scaler Function End 28-04-2020
                                }
                                else
                                {
                                    str_missmatch = "1st Else";
                                    logger.Debug(str_missmatch);
                                    //str_missmatch = "Template Miss Match";
                                    throw new Exception(str_missmatch);
                                }
                            }
                            else
                            {
                                str_missmatch = "2Nd Else";
                                logger.Debug(str_missmatch);
                               // str_missmatch = "Template Miss Match";
                                throw new Exception(str_missmatch);
                            }
                        }
                    }
                }
            }

            catch (Exception ex)
            {
                str_missmatch = "Expception Message";
                logger.Error("User Name - " + user_id + "Method Name -" + methodName + ex);
                Excel_save_detail.msg = ex.Message.ToString();
                tmp_rpt.msg = "Template Miss Match";
            }
            return JsonConvert.SerializeObject(tmp_rpt);
            //  return downloadexport(fileLocation); 
        }
        #endregion



        private string convert_to_double(string cellvalue)
        {
            string frm_double = "";
            try
            {
                double d = double.Parse(cellvalue.ToString());
                frm_double = d.ToString();
            }
            catch (Exception ex)
            {
                frm_double = "";
            }
            return frm_double;
        }

        private string convert_to_date(string cellvalue)
        {
            string frm_date = "";
            try
            {
                double d = double.Parse(cellvalue.ToString());
                frm_date = DateTime.FromOADate(d).Date.ToString("dd/MM/yyyy");
            }
            catch (Exception ex)
            {
                frm_date = "";
            }
            return frm_date;
        }

        private bool CheckDate(String date)
        {
            try
            {
                DateTime dt = DateTime.Parse(date);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public string OID, Compid, SubCompId, scd, Complexity, MaterialGroup, Quantity;

        public bool DataTypeValidation(DataRow row)
        {
            long l_integer = 0;
            int integer = -1;
            DateTime dt;

            string comments = "";
            bool validation = true;

            //Column 1 corresponds to Order ID in the Excel file
            string str = row[1].ToString();
            if (str.Length > 15)
            {
                validation = false;
                comments = "Maximum length for " + OID + " is 15.";
            }

            // Column 2 corresponds to Component Code
            str = row[2].ToString();
            if (str.Length > 15)
            {

                if (!validation)
                    comments = comments + ", Maximum length for " + Compid + " is 15.";
                else
                {
                    comments = "Maximum length for " + Compid + " is 15.";
                    validation = false;
                }
            }
            // Column 3 corresponds to SubComponent code
            str = row[3].ToString();
            if (str.Length > 15)
            {

                if (!validation)
                    comments = comments + ", Maximum length for " + SubCompId + " is 15.";
                else
                {
                    comments = "Maximum length for " + SubCompId + " is 15.";
                    validation = false;
                }
            }

            //Column 4 Corresponds to SunComponent Description
            str = row[4].ToString();
            if (string.Compare(str, "") == 0)
            {

                if (!validation)
                    comments = comments + ", " + scd + " cannot be empty.";
                else
                {
                    comments = scd + " cannot be empty.";
                    validation = false;
                }
            }
            else if (str.Length > 1024)
            {
                if (!validation)
                    comments = comments + ", Maximum length for " + scd + " is 1024.";
                else
                {
                    comments = "Maximum length for " + scd + " is 1024.";
                    validation = false;
                }
            }
            //Column 5 corresponds to ECD in the Excel file
            str = row[5].ToString();

            if (string.Compare(str, "") != 0)
            {
                CultureInfo culture = new CultureInfo("en-US");
                culture.DateTimeFormat.ShortDatePattern = "dd/MM/yyyy";
                DateTimeStyles style = DateTimeStyles.AdjustToUniversal;
                if (!(DateTime.TryParse(str, culture, style, out dt)))
                {

                    if (!validation)
                        comments = comments + ", ECD must be in DateTime format.";


                    else
                    {
                        comments = "ECD must be in DateTime format.";
                        validation = false;
                    }
                }
                else
                {
                    CultureInfo cultEnGb = new CultureInfo("en-GB");
                    CultureInfo cultEnUs = new CultureInfo("en-US");
                    DateTime dtGb = Convert.ToDateTime(str.Trim(), cultEnGb.DateTimeFormat);
                    if (dtGb.Year > 2099)
                    {
                        if (!validation)
                            comments = comments + ", ECD must be with in 100 years.";
                        else
                        {
                            comments = "ECD must be with in 100 years.";
                            validation = false;
                        }
                    }
                }
            }
            //Column 7 corresponds to Complexity in the Excel file
            str = row[7].ToString();
            if (string.Compare(str, "") != 0)
            {
                if (!(str.ToLower() == "yes" || str.ToLower() == "no"))
                {
                    if (!validation)
                        comments = comments + ", " + Complexity + " can only be Yes or No.";
                    else
                    {
                        comments = Complexity + " can only be Yes or No.";
                        validation = false;
                    }
                }

            }
            //Column 8 corresponds to Material Group in the Excel file
            str = row[8].ToString();
            if (str.Length > 20)
            {

                if (!validation)
                    comments = comments + ", Maximum length for " + MaterialGroup + " is 20.";
                else
                {
                    comments = "Maximum length for " + MaterialGroup + " is 20.";
                    validation = false;
                }
            }
            //Column 9 corresponds to Quantity in the Excel file
            str = row[9].ToString();
            if (string.Compare(str, "", true) != 0)
            {
                if ((long.TryParse(str, out l_integer)))
                {
                    if (l_integer == 0)
                    {
                        if (!validation)
                            comments = comments + ", Invalid " + Quantity + "(Least value must be 1).";
                        else
                        {
                            comments = "Invalid " + Quantity + "(Least value must be 1).";
                            validation = false;
                        }
                    }
                    else if (str.Length > 5)
                    {
                        if (!validation)
                            comments = comments + ", " + Quantity + " can only be 5 digit long.";
                        else
                        {
                            comments = Quantity + " can only be 5 digit long.";
                            validation = false;
                        }

                    }
                }

                else
                {
                    if (!validation)
                    {
                        comments = Quantity + " must be of type Integer. ";
                    }
                    else
                    {
                        comments = Quantity + " must be of type Integer. ";
                        validation = false;
                    }

                }


            }
            else
            {
                if (!validation)
                    comments = comments + ", Invalid  " + Quantity + "(Least value must be 1).";
                else
                {
                    comments = "Invalid " + Quantity + "(Least value must be 1). ";
                    validation = false;
                }
            }
            if (!validation)
            {
                //Column 10 corresponds to Update Status in the Excel file
                row[10] = "Failed";
                //Column 11 corresponds to Comments in the Excel file
                row[11] = comments;
            }
            return validation;
        }



        [HttpPost]
        public string Getrootpath()
        {
            string webRootPath = _hostingEnvironment.WebRootPath;
            string contentRootPath = _webHostEnvironment.ContentRootPath;
            excel_msg = contentRootPath;
            return JsonConvert.SerializeObject(excel_msg); ;
        }

        [HttpPost]
        public string downloadexcel(string menu)
        {
            try
            {

                //var sptver = Session["sptVar"];
                //var file_ext = Session["fileextension"];
                //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
                var sptver = HttpContext.Session.GetString("sptVar");
                var file_ext = HttpContext.Session.GetString("fileextension");
                string webRootPath = _hostingEnvironment.ContentRootPath;
                string folderName = "wwwroot";
                webRootPath = Path.Combine(webRootPath, folderName);
                folderName = "uploadedXLFiles";
                string fileLocation = Path.Combine(webRootPath, folderName);
                Guid guid = Guid.NewGuid();
                //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
                string Clientpath = Path.Combine("/uploadedXLFiles/" + sptver + "_" + guid + file_ext);
                string path = Path.Combine(fileLocation, sptver + "_" + guid + file_ext);
                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }
                CreateCSVFile(path);
                //string ipAddress = ConfigurationManager.AppSettings["helpUrl"].ToString();
                //string ipAddress = _configuration.GetSection("AppSettings")["helpUrl"].ToString();
                //string[] fileArr = ipAddress.Split(new string[] { "help" }, StringSplitOptions.None);
                //ipAddress = fileArr[0].ToString();
                //excel_msg.path = ipAddress + "/uploadedXLFiles/" + sptver + file_ext;
                excel_msg.path = Clientpath;
            }
            catch (Exception ex)
            {
                //throw ex;
                excel_msg.msg = ex.Message.ToString();
            }
            return JsonConvert.SerializeObject(excel_msg);
        }

        public void CreateCSVFile(string strFilePath)
        {
            try
            {
                var table = JsonConvert.DeserializeObject<DataTable>(HttpContext.Session.GetString("dtDownload"));
                using (SpreadsheetDocument document = SpreadsheetDocument.Create(strFilePath, SpreadsheetDocumentType.Workbook))
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
                    foreach (System.Data.DataColumn column in table.Columns)
                    {
                        columns.Add(column.ColumnName);

                        Cell cell = new Cell();
                        cell.DataType = CellValues.String;
                        cell.CellValue = new CellValue(column.ColumnName);
                        headerRow.AppendChild(cell);
                    }

                    sheetData.AppendChild(headerRow);

                    foreach (DataRow dsrow in table.Rows)
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
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //venkat start 22-04-2020
        public ActionResult retrieve_Excel_Template_list(string userId, string orgnId, string locnId, string localeId, string templateName, string excel_upload_code)
        {
            BulkExceltempApplication objList = new BulkExceltempApplication();
            string postdata = "";
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
                // string Urlcon = "/excel_temp?org= " + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&excel_upload_code=" + objContext.excel_upload_code + "";
                string Urlcon = "Admin_BulkUpload/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("excelTemp?org=" + orgnId + "&locn=" + locnId + "&user=" + userId + "&lang=" + localeId + "&excel_upload_code=" + excel_upload_code + "&templateName=" + templateName + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                postdata = reader.ReadToEnd();
                objList = (BulkExceltempApplication)JsonConvert.DeserializeObject(postdata, typeof(BulkExceltempApplication));
            }
            HttpContext.Session.SetString("Templatename", templateName);
            HttpContext.Session.SetString("groupcode", objList.context.Header.out_entity_group_code);
            HttpContext.Session.SetString("orgId", objList.context.orgnId);
            HttpContext.Session.SetString("locnId", objList.context.locnId);
            HttpContext.Session.SetString("UserId", objList.context.userId);
            HttpContext.Session.SetString("localeId", objList.context.localeId);
            return Json(objList);


        }
        #region excel temp
        public class BulkExceltempHeader
        {
            public string out_entity_group_code { get; set; }
            public string out_procedure_name { get; set; }
            public string out_procedure_type { get; set; }
            public int out_no_of_columns { get; set; }

        }
        public class BulkExceltempExcelColumn
        {
            public string excel_column { get; set; }
            public string column_name { get; set; }
            public string column_type { get; set; }
            public int max_len { get; set; }
            public int seq_no { get; set; }

        }
        public class BulkExceltempExcelHistory
        {
            public string history_log { get; set; }
            public string excel_filename { get; set; }
            public string status_desc { get; set; }
            public string uploaded_by { get; set; }
            public string uploaded_datetime { get; set; }

        }
        public class BulkExceltempContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public BulkExceltempHeader Header { get; set; }
            public IList<BulkExceltempExcelColumn> excelColumn { get; set; }
            public IList<BulkExceltempExcelHistory> excelHistory { get; set; }

        }
        public class BulkExceltempApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class BulkExceltempApplication
        {
            public BulkExceltempContext context { get; set; }
            public BulkExceltempApplicationException ApplicationException { get; set; }

        }

        #endregion
        //venkat end 

        [HttpPost]
        public string Excel_Template(string template_name, string column_name)
        {

            dynamic tmp_rpt = new JObject();
            try
            {

                dynamic temp_col_nme = JsonConvert.DeserializeObject(column_name);
                SpreadsheetInfo.SetLicense("FREE-LIMITED-KEY");


                var workbook = new ExcelFile();


                var ExcelWorkSheet = workbook.Worksheets.Add(template_name);

                for (int i = 0; i < temp_col_nme.Count; i++)
                {
                    var tmp_column_name = temp_col_nme[i].column_name.ToString();
                    ExcelWorkSheet.Cells[0, i].Style.FillPattern.SetPattern(FillPatternStyle.Solid, SpreadsheetColor.FromName(ColorName.Yellow), SpreadsheetColor.FromName(ColorName.Yellow));
                    ExcelWorkSheet.Cells[0, i].Value = tmp_column_name;
                }
                string webRootPath = _webHostEnvironment.WebRootPath;
                string contentRootPath = _webHostEnvironment.ContentRootPath;
                string folderName = "uploadedXLFiles";
                string fileLocation = Path.Combine(webRootPath, folderName);

                string Clientpath = Path.Combine("/uploadedXLFiles/" + template_name + ".xls" + "");
                string path = Path.Combine(fileLocation + template_name + ".xls" + "");
                // string fileLocation = Server.MapPath("~/uploadedXLFiles/" + template_name + ".xls" + "");


                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }

                //workbook.Save(fileLocation);

                //string ipAddress = _configuration.GetSection("AppSettings")["helpUrl"].ToString();
                //string[] fileArr = ipAddress.Split(new string[] { "help" }, StringSplitOptions.None);
                //ipAddress = fileArr[0].ToString();
                //tmp_rpt.path = ipAddress + "/uploadedXLFiles/" + template_name + ".xls";
                tmp_rpt.path = Clientpath;
            }
            catch (Exception ex)
            {
                tmp_rpt.msg = ex.Message.ToString();
            }
            return JsonConvert.SerializeObject(tmp_rpt);
        }


        public OdsSaveOptions XlsxDefault { get; set; }


    }


    //fetch template history Function Input Parameters 22-04-2020
    public class retrieveExcelTemplatelist
    {
        public string excel_upload_code { get; set; }
        public string userId { get; set; }
        public string orgnId { get; set; }
        public string locnId { get; set; }
        public string localeId { get; set; }
        public string templateName { get; set; }
    }
    //venkat end 

    //save Excelvector Function Input 
    #region
    public class savevectorHeader
    {
        public string In_farmer_code { get; set; }
        public int In_version_no { get; set; }
        public string In_farmer_name { get; set; }
        public string In_sur_name { get; set; }
        public string detail_formatted { get; set; }

    }
    public class savevectorDetail
    {
        public string In_entitygrp_code { get; set; }
        public string In_entity_code { get; set; }
        public string In_row_slno { get; set; }
        public string In_entity_value { get; set; }


    }
    public class savevectorContext
    {
        public string orgnId { get; set; }
        public string locnId { get; set; }
        public string userId { get; set; }
        public string localeId { get; set; }
        public savevectorHeader Header { get; set; }
        public IList<savevectorDetail> Detail { get; set; }

    }
    public class savevectorDocument1
    {
        public savevectorContext context { get; set; }

    }
    public class vectorApplication
    {
        public savevectorDocument1 document { get; set; }

    }

    //save Excelvector Function Output 

    public class savevectoroutput
    {
        public string Out_tran_status_desc { get; set; }

    }
    public class savevectorContextRes
    {
        public string orgnId { get; set; }
        public string locnId { get; set; }
        public string userId { get; set; }
        public string localeId { get; set; }
        public savevectoroutput Header { get; set; }

    }
    public class savevectorApplicationException
    {
        public string errorNumber { get; set; }
        public string errorDescription { get; set; }

    }
    public class savevectorApplicationouput
    {
        public savevectorContextRes context { get; set; }
        public savevectorApplicationException ApplicationException { get; set; }

    }
    #endregion



    //save Scaler Function Input Parameters 24-04-2020 
    #region

    public class ScalerHeader
    {
        public string option_type { get; set; }
        public string parameters { get; set; }

    }
    public class ScalerContext
    {
        public string orgnId { get; set; }
        public string locnId { get; set; }
        public string userId { get; set; }
        public string localeId { get; set; }
        public ScalerHeader header { get; set; }

    }
    public class ScalerDocument
    {
        public ScalerContext context { get; set; }

    }
    public class ScalerApplication
    {
        public ScalerDocument document { get; set; }

    }



    //venk end 24-04-2020



    //Save Scaler Function  Output Response start 24-04-2020

    public class Headerouput
    {
        public string tran_status_desc { get; set; }

    }
    public class ScalerContextRes
    {
        public string orgnId { get; set; }
        public string locnId { get; set; }
        public string userId { get; set; }
        public string localeId { get; set; }
        public Headerouput headerouput { get; set; }

    }
    public class ScalerApplicationExceptionRes
    {
        public string errorNumber { get; set; }
        public string errorDescription { get; set; }

    }
    public class ScalerApplicationRes
    {
        public ScalerContextRes context { get; set; }
        public ScalerApplicationExceptionRes ApplicationException { get; set; }

    }



    #endregion

    //save insert_excel_history_log Function Input 
    #region
    public class SaveExcelHistory
    {
        public string excel_upload_code { get; set; }
        public string excel_filename { get; set; }
        public string status_code { get; set; }
        public string uploaded_by { get; set; }
        public string uploaded_datetime { get; set; }

    }
    public class SaveHistoryContext
    {
        public string orgnId { get; set; }
        public string locnId { get; set; }
        public string userId { get; set; }
        public string localeId { get; set; }
        public SaveExcelHistory excelHistory { get; set; }

    }
    public class SaveHistoryDocument
    {
        public SaveHistoryContext context { get; set; }

    }
    public class SaveHistoryApplication
    {
        public SaveHistoryDocument document { get; set; }

    }

    //save insert_excel_history_log Function output 


    public class SaveHistoryContextRes
    {
        public string orgnId { get; set; }
        public string locnId { get; set; }
        public string userId { get; set; }
        public string localeId { get; set; }

    }
    public class SaveHistoryApplicationExceptionRes
    {
        public string errorNumber { get; set; }
        public string errorDescription { get; set; }

    }
    public class SaveHistoryApplicationRes
    {
        public SaveHistoryContextRes context { get; set; }
        public SaveHistoryApplicationExceptionRes ApplicationExceptionRes { get; set; }

    }
    #endregion
}