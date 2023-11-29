using GemBox.Spreadsheet;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace FFI.Controllers
{
    public class MilkPaymentAdviceController : Controller
    {
        // GET: MilkPaymentAdvice
        public ActionResult MilkPaymentAdviceList()
        {
            return View();
        }
        public ActionResult MilkPaymentAdviceForm()
        {
            return View();
        }
        [HttpPost]
        public string Export_Excel(string griddata)
        {
            dynamic excel_export = new JObject();
            //try
            //{
              
            //    Boolean chkall = true;
            //    Boolean chkfilter = true;
            //    Boolean chktemp = true;
            //    string combovalue = "";
            //    string TreeId = "";
            //    string SubTreeId = "MLKADVICE";
            //    string filepath = "xlsx";
            //    var result = new DataTable();
            //   var jArray = JArray.Parse(griddata);
            //    foreach (var row in jArray)
            //    {
            //        foreach (var jToken in row)
            //        {
            //            var jproperty = jToken as JProperty;
            //            if (jproperty == null) continue;
            //            if (result.Columns[jproperty.Name] == null)
            //                result.Columns.Add(jproperty.Name, typeof(string));
            //        }
            //    }
            //    foreach (var row in jArray)
            //    {
            //        var datarow = result.NewRow();
            //        foreach (var jToken in row)
            //        {
            //            var jProperty = jToken as JProperty;
            //            if (jProperty == null) continue;
            //            datarow[jProperty.Name] = jProperty.Value.ToString();
            //        }
            //        result.Rows.Add(datarow);
            //    }
            //    Guid guid = Guid.NewGuid();


            //    var Excel_name = "Milk Payment Advice";
            //    string path2 = "";

              
            //        SpreadsheetInfo.SetLicense("FREE-LIMITED-KEY");
            //        var workbook = new ExcelFile();
            //        var ExcelWorkSheet = workbook.Worksheets.Add(SubTreeId);
                   
            //        path2 = Server.MapPath("~/Common_Excel/" + SubTreeId + "." + filepath);                  
            //        if (System.IO.File.Exists(path2))
            //        {
            //            System.IO.File.Delete(path2);
            //        }

            //        workbook.Save(path2);                    
                

            //    string Clientpath = "/Downloaded_Excel/" + SubTreeId + "_" + guid + "." + filepath;
            //    string remoteUri = path2;
            //    string fileDownload = Server.MapPath("~/Downloaded_Excel/" + SubTreeId + "_" + guid + "." + filepath);
            //    string fileDownload12 = Server.MapPath("~/Downloaded_Excel");

            //    if (System.IO.File.Exists(fileDownload12))
            //    {
            //        System.IO.File.OpenWrite(fileDownload12);
            //    }
            //    else
            //    {
            //        DirectoryInfo di = Directory.CreateDirectory(fileDownload12);
            //        WebClient myWebClient = new WebClient();
            //        myWebClient.DownloadFile(remoteUri, fileDownload);

            //        var workbookFileInfo = new FileInfo(@fileDownload);
            //        using (ExcelPackage excel = new ExcelPackage(workbookFileInfo))
            //        {

            //            ExcelWorkbook workBook = excel.Workbook;
            //            var firstWorksheet = workBook.Worksheets.First();
            //            excel.Workbook.Worksheets.Delete(firstWorksheet);
            //            var objWorksheet = excel.Workbook.Worksheets.Add("Data");
            //            objWorksheet.Cells["A1"].LoadFromDataTable(result, true);
            //            objWorksheet.Cells.AutoFitColumns();

            //            using (ExcelRange objRange = objWorksheet.Cells["A1:XFD1"])
            //            {
            //                objRange.Style.Font.Bold = true;

            //            }

            //            ExcelRange range = objWorksheet.Cells["A1:I3264"];

            //            ExcelAddress valueAddress = new ExcelAddress(15, 1, 25, 15);

            //            excel.Save();
            //            excel_export.msg = "" + Excel_name + " Exported Successfully";
            //            excel_export.path = Clientpath;
            //            excel_export.success = true;
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    excel_export.msg = ex.Message;
            //    excel_export.success = false;

            //}
            return JsonConvert.SerializeObject(excel_export);


        }
        public ActionResult MilkPaymentAdviceview()
        {
            return View();
        }
        public ActionResult MilkPaymentAdviceerror()
        {
            return View();
        }

        //  public string Milk_rate_report(string frm_code, string frm_name, string fromdate)
        //{
        //    dynamic Taxreport = new Newtonsoft.Json.Linq.JObject();
        //    string last_data = string.Empty;
        //    string[] myList = new string[] { };
        //    DataTable dt_set3 = new DataTable();
        //    sqlwebservice.ContextVO context = new sqlwebservice.ContextVO();
        //    sqlwebservice.Sql_WebService_Content wbs = new sqlwebservice.Sql_WebService_Content();

        //    if (ConfigurationManager.AppSettings.Count > 0)
        //    {
        //        context.dbServer = ConfigurationManager.AppSettings["dbServer"].ToString();
        //        var Dbtype = ConfigurationManager.AppSettings["Instance"].ToString();
        //        if (Dbtype == "bh") { context.dbName = ConfigurationManager.AppSettings["dbNameBh"].ToString(); }
        //        else if (Dbtype == "up") { context.dbName = ConfigurationManager.AppSettings["dbNameUP"].ToString(); }
        //        else if (Dbtype == "od") { context.dbName = ConfigurationManager.AppSettings["dbNameOD"].ToString(); }
        //        else { context.dbName = ConfigurationManager.AppSettings["dbNameTA"].ToString(); }  
        //        context.userID = ConfigurationManager.AppSettings["dbUser"].ToString();
        //        context.password = ConfigurationManager.AppSettings["dbPwd"].ToString();
        //    }

        //    wbs.obj_Sql_Service = CreditIssue_sp(frm_code, frm_name);

        //    sqlwebservice.Sql_WebService_Response response = new sqlwebservice.Sql_WebService_Response();
        //    sqlwebservice.SqlWebServicesSoapClient soap = new sqlwebservice.SqlWebServicesSoapClient();

        //    response = soap.Sql_Service(context, "FFI", wbs);
        //    if (response.arr_resultList == null)
        //    {
        //        //ValidUser_detail.result = "User ID is not Valid";
        //        // throw new Exception(encoded_msg);
        //    }
        //    else
        //    {
        //        XDocument doc = new XDocument();
        //        string obj = response.arr_resultList;
        //        doc = XDocument.Parse(obj);


        //        var set1rec = (from set1 in doc.Descendants("set1") select set1);

        //        if (set1rec.Count() > 0)
        //        {
        //            var set2_first = set1rec.Descendants("Record").First();
        //            foreach (XElement xe in set2_first.Descendants())
        //                dt_set3.Columns.Add(xe.Name.ToString(), typeof(string));

        //            XElement setup1 = (from set1 in doc.Descendants("set1") select set1).First();
        //            foreach (XElement xe2 in setup1.Descendants("Record"))
        //            {
        //                DataRow dr = dt_set3.NewRow();
        //                int i = 0;
        //                foreach (XElement xe in xe2.Descendants())
        //                {
        //                    dr[i] = xe.Value.ToString();
        //                    i = i + 1;
        //                }
        //                dt_set3.Rows.Add(dr);
        //            }

        //        }

        //    }
        //    return JsonConvert.SerializeObject(dt_set3);

        //}
        //  public string Milk_rate_report1(string frm_code, string frm_name, string fromdate)
        //  {
        //      dynamic Taxreport = new Newtonsoft.Json.Linq.JObject();
        //      string last_data = string.Empty;
        //      string[] myList = new string[] { };
        //      DataTable dt_set3 = new DataTable();
        //      sqlwebservice.ContextVO context = new sqlwebservice.ContextVO();
        //      sqlwebservice.Sql_WebService_Content wbs = new sqlwebservice.Sql_WebService_Content();

        //      if (ConfigurationManager.AppSettings.Count > 0)
        //      {
        //          context.dbServer = ConfigurationManager.AppSettings["dbServer"].ToString();
        //          var Dbtype = ConfigurationManager.AppSettings["Instance"].ToString();
        //          if (Dbtype == "bh") { context.dbName = ConfigurationManager.AppSettings["dbNameBh"].ToString(); }
        //          else if (Dbtype == "up") { context.dbName = ConfigurationManager.AppSettings["dbNameUP"].ToString(); }
        //          else if (Dbtype == "od") { context.dbName = ConfigurationManager.AppSettings["dbNameOD"].ToString(); }
        //          else { context.dbName = ConfigurationManager.AppSettings["dbNameTA"].ToString(); }  
        //          context.userID = ConfigurationManager.AppSettings["dbUser"].ToString();
        //          context.password = ConfigurationManager.AppSettings["dbPwd"].ToString();
        //      }

        //      wbs.obj_Sql_Service = CreditIssue_sp(frm_code, frm_name);

        //      sqlwebservice.Sql_WebService_Response response = new sqlwebservice.Sql_WebService_Response();
        //      sqlwebservice.SqlWebServicesSoapClient soap = new sqlwebservice.SqlWebServicesSoapClient();

        //      response = soap.Sql_Service(context, "FFI", wbs);
        //      if (response.arr_resultList == null)
        //      {
        //          //ValidUser_detail.result = "User ID is not Valid";
        //          // throw new Exception(encoded_msg);
        //      }
        //      else
        //      {
        //          XDocument doc = new XDocument();
        //          string obj = response.arr_resultList;
        //          doc = XDocument.Parse(obj);


        //          var set1rec = (from set1 in doc.Descendants("set1") select set1);

        //          if (set1rec.Count() > 0)
        //          {
        //              var set2_first = set1rec.Descendants("Record").First();
        //              foreach (XElement xe in set2_first.Descendants())
        //                  dt_set3.Columns.Add(xe.Name.ToString(), typeof(string));

        //              XElement setup1 = (from set1 in doc.Descendants("set1") select set1).First();
        //              foreach (XElement xe2 in setup1.Descendants("Record"))
        //              {
        //                  DataRow dr = dt_set3.NewRow();
        //                  int i = 0;
        //                  foreach (XElement xe in xe2.Descendants())
        //                  {
        //                      dr[i] = xe.Value.ToString();
        //                      i = i + 1;
        //                  }
        //                  dt_set3.Rows.Add(dr);
        //              }

        //          }

        //      }
        //      return JsonConvert.SerializeObject(dt_set3);

        //  }
        //public sqlwebservice.Sql_WebService[] CreditIssue_sp(string frm_code, string frm_name)
        //{            
        //    List<sqlwebservice.Sql_WebService> qryAc = new List<sqlwebservice.Sql_WebService>();
        //    sqlwebservice.Sql_WebService arrDtl = new sqlwebservice.Sql_WebService();
        //    arrDtl.execString = "exec fetch_milkrate'" + frm_code + "','" + frm_name + "'";
        //    qryAc.Add(arrDtl);
        //    return qryAc.ToArray();
        //}

        //public string Milk_rate_Error(string frm_code, string frm_name, string fromdate)
        //{
        //    dynamic Taxreport = new Newtonsoft.Json.Linq.JObject();
        //    string last_data = string.Empty;
        //    string[] myList = new string[] { };
        //    DataTable dt_set3 = new DataTable();
        //    sqlwebservice.ContextVO context = new sqlwebservice.ContextVO();
        //    sqlwebservice.Sql_WebService_Content wbs = new sqlwebservice.Sql_WebService_Content();

        //    if (ConfigurationManager.AppSettings.Count > 0)
        //    {
        //        context.dbServer = ConfigurationManager.AppSettings["dbServer"].ToString();
        //        var Dbtype = ConfigurationManager.AppSettings["Instance"].ToString();
        //        if (Dbtype == "bh") { context.dbName = ConfigurationManager.AppSettings["dbNameBh"].ToString(); }
        //        else if (Dbtype == "up") { context.dbName = ConfigurationManager.AppSettings["dbNameUP"].ToString(); }
        //        else if (Dbtype == "od") { context.dbName = ConfigurationManager.AppSettings["dbNameOD"].ToString(); }
        //        else { context.dbName = ConfigurationManager.AppSettings["dbNameTA"].ToString(); }  
        //        context.userID = ConfigurationManager.AppSettings["dbUser"].ToString();
        //        context.password = ConfigurationManager.AppSettings["dbPwd"].ToString();
        //    }

        //    wbs.obj_Sql_Service = CreditIssue_sp_error(frm_code, frm_name);

        //    sqlwebservice.Sql_WebService_Response response = new sqlwebservice.Sql_WebService_Response();
        //    sqlwebservice.SqlWebServicesSoapClient soap = new sqlwebservice.SqlWebServicesSoapClient();

        //    response = soap.Sql_Service(context, "FFI", wbs);
        //    if (response.arr_resultList == null)
        //    {
        //        //ValidUser_detail.result = "User ID is not Valid";
        //        // throw new Exception(encoded_msg);
        //    }
        //    else
        //    {
        //        XDocument doc = new XDocument();
        //        string obj = response.arr_resultList;
        //        doc = XDocument.Parse(obj);


        //        var set1rec = (from set1 in doc.Descendants("set1") select set1);

        //        if (set1rec.Count() > 0)
        //        {
        //            var set2_first = set1rec.Descendants("Record").First();
        //            foreach (XElement xe in set2_first.Descendants())
        //                dt_set3.Columns.Add(xe.Name.ToString(), typeof(string));

        //            XElement setup1 = (from set1 in doc.Descendants("set1") select set1).First();
        //            foreach (XElement xe2 in setup1.Descendants("Record"))
        //            {
        //                DataRow dr = dt_set3.NewRow();
        //                int i = 0;
        //                foreach (XElement xe in xe2.Descendants())
        //                {
        //                    dr[i] = xe.Value.ToString();
        //                    i = i + 1;
        //                }
        //                dt_set3.Rows.Add(dr);
        //            }

        //        }

        //    }
        //    return JsonConvert.SerializeObject(dt_set3);

        //}
        //public sqlwebservice.Sql_WebService[] CreditIssue_sp_error(string frm_code, string frm_name)
        //{
        //    List<sqlwebservice.Sql_WebService> qryAc = new List<sqlwebservice.Sql_WebService>();
        //    sqlwebservice.Sql_WebService arrDtl = new sqlwebservice.Sql_WebService();
        //    arrDtl.execString = "exec fetch_milkrate_error'" + frm_code + "','" + frm_name + "'";
        //    qryAc.Add(arrDtl);
        //    return qryAc.ToArray();
        //}

    }
    }
