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
    public class AudittrailqueryController : Controller
    {
        // GET: Audittrailquery
        public ActionResult Audittrailquery()
        {
            return View();
        }

        //[HttpPost]
        //public string fetch_audit_trail_details(string receiveData)
        //{
        //    dynamic fetch_audit_log = new JObject();
        //    try
        //    {
        //        string rec_count = "";
        //        dynamic receive_data = JObject.Parse(receiveData);
        //        var tableid = receive_data.table_id;
        //        var fromdate = receive_data.from_date;
        //        var todate = receive_data.to_date;
        //        var auditUserid = receive_data.audit_userid;               
        //        var orgnID = receive_data.orgnid;
        //        var locnId = receive_data.locnid;
        //        var userId = receive_data.userid;
        //        var localeId = receive_data.localeid;
        //        var start_index = receive_data.startIndex;
        //        var end_index = receive_data.endIndex;
        //        var record_count = receive_data.recordCount;
        //        sqlwebservice.ContextVO context = new sqlwebservice.ContextVO();
        //        sqlwebservice.Sql_WebService_Content wbs = new sqlwebservice.Sql_WebService_Content();

        //        if (ConfigurationManager.AppSettings.Count > 0)
        //        {
        //            ConfigurationManager.AppSettings["userId"] = userId;
        //            context.dbServer = ConfigurationManager.AppSettings["dbServer"].ToString();
        //            var Dbtype = ConfigurationManager.AppSettings["Instance"].ToString();
        //            if (Dbtype == "bh") { context.dbName = ConfigurationManager.AppSettings["dbNameBh"].ToString(); }
        //            else if (Dbtype == "up") { context.dbName = ConfigurationManager.AppSettings["dbNameUP"].ToString(); }
        //            else if (Dbtype == "od") { context.dbName = ConfigurationManager.AppSettings["dbNameOD"].ToString(); }
        //            else { context.dbName = ConfigurationManager.AppSettings["dbNameTA"].ToString(); }                   
        //            context.userID = ConfigurationManager.AppSettings["dbUser"].ToString();
        //            context.password = ConfigurationManager.AppSettings["dbPwd"].ToString();
        //        }

        //        wbs.obj_Sql_Service = audit_comboscreen(tableid.Value, fromdate.Value, todate.Value, auditUserid.Value, orgnID.Value, locnId.Value, userId.Value, localeId.Value, start_index.Value, end_index.Value, record_count.Value);

        //        sqlwebservice.Sql_WebService_Response response = new sqlwebservice.Sql_WebService_Response();
        //        sqlwebservice.SqlWebServicesSoapClient soap = new sqlwebservice.SqlWebServicesSoapClient();

        //        //response = soap.Sql_Service(context, "FFI", wbs);



        //        if (response.errorList != null)
        //        {
        //            string errmsg = response.errorList[0].errorDescription.ToString();
        //            string encoded_msg = Common.Util.Html_Encode(errmsg);
        //            throw new Exception(encoded_msg);                  
        //        }
        //        else
        //        {

        //            XDocument doc = new XDocument();
        //            string obj = "<root>" + response.arr_resultList + "</root>";
        //            doc = XDocument.Parse(obj);

        //            if (response.arr_resultList != null)
        //            {

        //                DataTable dt = new DataTable();
        //                XElement setup = (from set1 in doc.Descendants("set1") select set1).First();

        //                foreach (XElement xe in setup.Descendants("Record"))
        //                    dt.Columns.Add(xe.Value.ToString(), typeof(string)); // add columns to your dt

        //                var set2rec = (from set2 in doc.Descendants("set2") select set2);
        //                if (set2rec.Count() > 0)
        //                {
        //                    XElement setup1 = (from set2 in doc.Descendants("set2") select set2).First();
        //                    foreach (XElement xe2 in setup1.Descendants("Record"))
        //                    {
        //                        DataRow dr = dt.NewRow();
        //                        int i = 0;
        //                        foreach (XElement xe in xe2.Descendants())
        //                        {

        //                            dr[i] = xe.Value.ToString(); //add in the values
        //                            i = i + 1;
        //                        }
        //                        dt.Rows.Add(dr);
        //                    }
        //                }
        //                else
        //                {
        //                    DataRow dr = dt.NewRow();
        //                    dt.Rows.Add(dr);
        //                }

        //                XElement setup3 = (from set3 in doc.Descendants("set3") select set3).First();
        //                //var RecordDetail = from Record in doc.Descendants("Record") select Record;
        //                foreach (XElement xe2 in setup3.Descendants("Record"))
        //                    {
        //                        rec_count = xe2.Element("record_count").Value;
        //                    break;
        //                }
        //                fetch_audit_log.set1 = JsonConvert.SerializeObject(dt);
        //                fetch_audit_log.set2 = JsonConvert.SerializeObject(rec_count);
        //                fetch_audit_log.success = true;
        //            }
        //            else {
        //                fetch_audit_log.set1 = JsonConvert.SerializeObject(response.arr_resultList);
        //                fetch_audit_log.success = true;
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
               
        //        fetch_audit_log.success = false;
        //        fetch_audit_log.msg = ex.Message;

        //    }
        //    return JsonConvert.SerializeObject(fetch_audit_log);
        //}

        //public sqlwebservice.Sql_WebService[] audit_comboscreen(string tableid, string fromdate, string todate, string audituserid, string orgnid, string locnid, string userid, string localeid, long start_index, long end_index, string record_count)
        //{

                                              
        //    List<sqlwebservice.Sql_WebService> qryAc = new List<sqlwebservice.Sql_WebService>();
        //    sqlwebservice.Sql_WebService arrDtl = new sqlwebservice.Sql_WebService();
        //    arrDtl.execString = "exec fetch_audit_trial '" + tableid + "', '" + fromdate + "', '" + todate + "','" + audituserid + "','" + orgnid + "','" + locnid + "','" + userid + "','" + localeid + "','" + start_index + "','" + end_index + "','" + record_count + "' "; 
        //    qryAc.Add(arrDtl);
        //    return qryAc.ToArray();
        //}

        //public XName record { get; set; }

        //public IEnumerable<object> xml { get; set; }

        //public XDocument data { get; set; }


        //[HttpPost]
        //public string Export_Excel(string griddata)
        //{
        //    dynamic excel_export = new JObject();
        //    //try
        //    //{

        //    //    Boolean chkall = true;
        //    //    Boolean chkfilter = true;
        //    //    Boolean chktemp = true;
        //    //    string combovalue = "";
        //    //    string TreeId = "";
        //    //    string SubTreeId = "AUDIT";
        //    //    string filepath = "xlsx";
        //    //    var result = new DataTable();
        //    //    var jArray = JArray.Parse(griddata);
        //    //    foreach (var row in jArray)
        //    //    {
        //    //        foreach (var jToken in row)
        //    //        {
        //    //            var jproperty = jToken as JProperty;
        //    //            if (jproperty == null) continue;
        //    //            if (result.Columns[jproperty.Name] == null)
        //    //                result.Columns.Add(jproperty.Name, typeof(string));
        //    //        }
        //    //    }
        //    //    foreach (var row in jArray)
        //    //    {
        //    //        var datarow = result.NewRow();
        //    //        foreach (var jToken in row)
        //    //        {
        //    //            var jProperty = jToken as JProperty;
        //    //            if (jProperty == null) continue;
        //    //            datarow[jProperty.Name] = jProperty.Value.ToString();
        //    //        }
        //    //        result.Rows.Add(datarow);
        //    //    }
        //    //    Guid guid = Guid.NewGuid();


        //    //    var Excel_name = "Audit Trial";
        //    //    string path2 = "";


        //    //    SpreadsheetInfo.SetLicense("FREE-LIMITED-KEY");
        //    //    var workbook = new ExcelFile();
        //    //    var ExcelWorkSheet = workbook.Worksheets.Add(SubTreeId);

        //    //    path2 = Server.MapPath("~/Common_Excel/" + SubTreeId + "." + filepath);
        //    //    if (System.IO.File.Exists(path2))
        //    //    {
        //    //        System.IO.File.Delete(path2);
        //    //    }

        //    //    workbook.Save(path2);


        //    //    string Clientpath = "/Downloaded_Excel/" + SubTreeId + "_" + guid + "." + filepath;
        //    //    string remoteUri = path2;
        //    //    string fileDownload = Server.MapPath("~/Downloaded_Excel/" + SubTreeId + "_" + guid + "." + filepath);
        //    //    string fileDownload12 = Server.MapPath("~/Downloaded_Excel");

        //    //    if (System.IO.File.Exists(fileDownload12))
        //    //    {
        //    //        System.IO.File.OpenWrite(fileDownload12);
        //    //    }
        //    //    else
        //    //    {
        //    //        DirectoryInfo di = Directory.CreateDirectory(fileDownload12);
        //    //        WebClient myWebClient = new WebClient();
        //    //        myWebClient.DownloadFile(remoteUri, fileDownload);

        //    //        var workbookFileInfo = new FileInfo(@fileDownload);
        //    //        using (ExcelPackage excel = new ExcelPackage(workbookFileInfo))
        //    //        {

        //    //            ExcelWorkbook workBook = excel.Workbook;
        //    //            var firstWorksheet = workBook.Worksheets.First();
        //    //            excel.Workbook.Worksheets.Delete(firstWorksheet);
        //    //            var objWorksheet = excel.Workbook.Worksheets.Add("Data");
        //    //            objWorksheet.Cells["A1"].LoadFromDataTable(result, true);
        //    //            objWorksheet.Cells.AutoFitColumns();

        //    //            using (ExcelRange objRange = objWorksheet.Cells["A1:XFD1"])
        //    //            {
        //    //                objRange.Style.Font.Bold = true;

        //    //            }

        //    //            ExcelRange range = objWorksheet.Cells["A1:I3264"];

        //    //            ExcelAddress valueAddress = new ExcelAddress(15, 1, 25, 15);

        //    //            excel.Save();
        //    //            excel_export.msg = "" + Excel_name + " Exported Successfully";
        //    //            excel_export.path = Clientpath;
        //    //            excel_export.success = true;
        //    //        }
        //    //    }
        //    //}
        //    //catch (Exception ex)
        //    //{
        //    //    excel_export.msg = ex.Message;
        //    //    excel_export.success = false;

        //    //}
        //    return JsonConvert.SerializeObject(excel_export);


        //}
    }
}