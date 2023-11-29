using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace FFI.Controllers
{
    public class StockScheduleController : Controller
    {
        // GET: StockSchedule
        public ActionResult StockScheduleForm()
        {
            return View();
        }

        //[HttpPost]
        //public string Stocklist(string receiveData) // rename login1 to Login before hosting
        //{
        //    dynamic login_detail = new JObject();
        //    try
        //    {
        //        dynamic receive_data = JObject.Parse(receiveData);

        //        string month = receive_data.month;
        //        string ic_code = receive_data.ic_code;
        //        string locnId = receive_data.locnid;
        //        string userId = receive_data.userid;
        //        string localeId = receive_data.localeid;

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


        //        wbs.obj_Sql_Service = stocklistquery(month, ic_code, locnId, userId, localeId);

        //        sqlwebservice.Sql_WebService_Response response = new sqlwebservice.Sql_WebService_Response();
        //        sqlwebservice.SqlWebServicesSoapClient soap = new sqlwebservice.SqlWebServicesSoapClient();

        //        response = soap.Sql_Service(context, "FFI", wbs);

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

        //            var set1rec = (from set1 in doc.Descendants("set1") select set1);
        //            DataTable dt_View = new DataTable();
        //            dt_View.Columns.Add("ic_code", typeof(string));
        //            dt_View.Columns.Add("ic_name", typeof(string));
        //            dt_View.Columns.Add("adjustment_month", typeof(string));
        //            dt_View.Columns.Add("adjustment_year", typeof(string));
        //            dt_View.Columns.Add("status_code", typeof(string));
        //            dt_View.Columns.Add("status_desc", typeof(string));

        //            if (set1rec.Count() > 0)
        //            {
        //                XElement setup1 = (from set1 in doc.Descendants("set1") select set1).First();
        //                foreach (XElement xe2 in setup1.Descendants("Record"))
        //                {
        //                    DataRow dr = dt_View.NewRow();
        //                    int i = 0;
        //                    foreach (XElement xe in xe2.Descendants())
        //                    {
        //                        dr[i] = xe.Value.ToString(); //add in the values
        //                        i = i + 1;
        //                    }
        //                    dt_View.Rows.Add(dr);
        //                }
        //                login_detail = JsonConvert.SerializeObject(dt_View);
        //            }
        //            else
        //            {
        //                DataRow dr = dt_View.NewRow();
        //                dt_View.Rows.Add(dr);
        //            }
        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        login_detail.msg = ex.Message;
        //        login_detail.success = false;
        //    }
        //    return JsonConvert.SerializeObject(login_detail);
        //}

        //public sqlwebservice.Sql_WebService[] stocklistquery(string month,string ic_code, string locnId,string userId,string localeId)
        //{
        //    List<sqlwebservice.Sql_WebService> qryAc = new List<sqlwebservice.Sql_WebService>();

        //    sqlwebservice.Sql_WebService arrDtl = new sqlwebservice.Sql_WebService();

        //    arrDtl.execString = "exec fetch_stockledger_list '" + month + "','" + ic_code + "','" + locnId + "','" + userId + "','" + localeId + "'";

        //    qryAc.Add(arrDtl);

        //    return qryAc.ToArray();
        //}

    }
}