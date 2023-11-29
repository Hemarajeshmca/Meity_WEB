using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data;
using System.Xml.Linq;
using System.Configuration;



namespace FFI.Controllers
{
    public class MilkAdvRptController : Controller
    {
        // GET: MilkAdvRpt
        public ActionResult Mlkadvreport()
        {
            return View();
        }

        //public sqlwebservice.Sql_WebService[] Milkrpt(string fromdate, string todate, string usrid)
        //{

        //    List<sqlwebservice.Sql_WebService> qryAc = new List<sqlwebservice.Sql_WebService>();

        //    sqlwebservice.Sql_WebService arrDtl = new sqlwebservice.Sql_WebService();
        //    //arrDtl.execString = "exec fetch_weighdata '" + localip + "', '" + publicip + "'";            
        //    arrDtl.execString = "exec MilkAdvanceRpt '" + fromdate + "', '" + todate + "','" + usrid + "'";
        //    qryAc.Add(arrDtl);
        //    return qryAc.ToArray();
        //}
        //public string MILKADVReport(string fromdate, string todate, string usrid)
        //{
        //    dynamic fetch_dashboard_log = new JObject();
        //    dynamic sale_report = new JObject();
        //    string message = string.Empty;
        //    string last_data = string.Empty;
        //    string[] myList = new string[] { };
        //    DataTable dt_set1 = new DataTable();

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

        //    wbs.obj_Sql_Service = Milkrpt(fromdate, todate, usrid);

        //    sqlwebservice.Sql_WebService_Response response = new sqlwebservice.Sql_WebService_Response();
        //    sqlwebservice.SqlWebServicesSoapClient soap = new sqlwebservice.SqlWebServicesSoapClient();

        //    response = soap.Sql_Service(context, "FFI", wbs);
        //    if (response.arr_resultList == null)
        //    {

        //    }
        //    else
        //    {
        //        XDocument doc = new XDocument();
        //        string obj = "<root>" + response.arr_resultList + "</root>";
        //        doc = XDocument.Parse(obj);
        //        var set1rec = (from set1 in doc.Descendants("set1") select set1);
        //        if (set1rec.Count() > 0)
        //        {
        //            var set2_first = set1rec.Descendants("Record").First();
        //            foreach (XElement xe in set2_first.Descendants())
        //                dt_set1.Columns.Add(xe.Name.ToString(), typeof(string));

        //            XElement setup1 = (from set1 in doc.Descendants("set1") select set1).First();
        //            foreach (XElement xe2 in setup1.Descendants("Record"))
        //            {
        //                DataRow dr = dt_set1.NewRow();
        //                int i = 0;
        //                foreach (XElement xe in xe2.Descendants())
        //                {
        //                    dr[i] = xe.Value.ToString();
        //                    i = i + 1;
        //                }
        //                dt_set1.Rows.Add(dr);
        //            }

        //        }


        //    }
        //    return JsonConvert.SerializeObject(dt_set1);
        //}
    }
}