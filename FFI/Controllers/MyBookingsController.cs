using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class MyBookingsController : Controller
    {
        // GET: MyBookings
        public ActionResult MyBookingsList()
        {
            return View();
        }
        public ActionResult MyBookingsForm()
        {
            return View();
        }
        //#region Comman Grid List and Field
        //[HttpPost]
        //public string CommanGridField(string GetName)
        //{
        //    DataTable dt = new DataTable();
        //    dt.Columns.Add("ifsc_code", typeof(string));
        //    dt.Columns.Add("branch_name", typeof(string));
        //    dt.Columns.Add("status_code", typeof(string));
        //    var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
        //        Path.Combine("Common_Xml_File", "bankifsc.xml"));
        //    XmlDocument xmlload = new XmlDocument();
        //    xmlload.Load(XmlRoleFullPath);
        //    XmlNodeList nodevalue = xmlload.SelectNodes("//root//row[bank_code='" + GetName + "']");
        //    for (int i = 0; i < nodevalue.Count; i++)
        //    {
        //        DataRow dr = dt.NewRow();
        //        dr["ifsc_code"] = nodevalue[i]["ifsc_code"].InnerXml;
        //        dr["branch_name"] = nodevalue[i]["branch_name"].InnerXml;
        //        dr["status_code"] = nodevalue[i]["status_code"].InnerXml;
        //        dt.Rows.Add(dr);
        //    }
        //    return JsonConvert.SerializeObject(dt);
        //}
        //#endregion
        //#region Comman Grid List and Field
        //[HttpPost]
        //public string CommanGridlist()
        //{
        //    DataTable dt = new DataTable();
        //    dt.Columns.Add("bank_code", typeof(string));
        //    dt.Columns.Add("bank_name", typeof(string));
        //    dt.Columns.Add("status_code", typeof(string));
        //    dt.Columns.Add("created_date", typeof(string));
        //    var XmlBankFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
        //        Path.Combine("Common_Xml_File", "bank.xml"));
        //    XmlDocument xmlobject = new XmlDocument();
        //    xmlobject.Load(XmlBankFullPath);
        //    XmlNodeList UserNodelist = xmlobject.SelectNodes("/root/row");
        //    foreach (XmlNode UserData in UserNodelist)
        //    {
        //        XmlElement getidname = (XmlElement)UserData;
        //        DataRow dr = dt.NewRow();
        //        dr["bank_code"] = getidname.GetElementsByTagName("bank_code")[0].InnerText;
        //        dr["bank_name"] = getidname.GetElementsByTagName("bank_name")[0].InnerText;
        //        dr["status_code"] = getidname.GetElementsByTagName("status_code")[0].InnerText;
        //        dr["created_date"] = getidname.GetElementsByTagName("created_date")[0].InnerText;
        //        dt.Rows.Add(dr);
        //    }
        //    return JsonConvert.SerializeObject(dt);
        //}
        //#endregion
    }
}