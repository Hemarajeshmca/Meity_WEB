using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;

namespace FFI.Controllers.Mapping
{
    public class AggregatorOrgsController : Controller
    {
        // GET: AggregatorOrgs
        public ActionResult AggregatorOrgsList()
        {
            return View();
        }
       public ActionResult AggregatorOrgForm()
        {
            return View();
        }
       
        #region User Information
        public string RoleInfo()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("location_code", typeof(string));
            dt.Columns.Add("location_name", typeof(string));
            dt.Columns.Add("user_id", typeof(string));
            dt.Columns.Add("user_name", typeof(string));
            dt.Columns.Add("email", typeof(string));
            dt.Columns.Add("mobile_no", typeof(string));
            dt.Columns.Add("valid_till", typeof(string));
            dt.Columns.Add("status", typeof(string));
            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "FpoUser.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlRoleFullPath);
            XmlNodeList RoleNodelist = xmlobject.SelectNodes("/root/row");
            foreach (XmlNode RoleData in RoleNodelist)
            {
                XmlElement getidname = (XmlElement)RoleData;
                DataRow dr = dt.NewRow();
                dr["location_code"] = getidname.GetElementsByTagName("location_code")[0].InnerText;
                dr["location_name"] = getidname.GetElementsByTagName("location_name")[0].InnerText;
                dr["user_id"] = getidname.GetElementsByTagName("id")[0].InnerText;
                dr["user_name"] = getidname.GetElementsByTagName("user_name")[0].InnerText;
                dr["email"] = getidname.GetElementsByTagName("email")[0].InnerText;
                dr["mobile_no"] = getidname.GetElementsByTagName("mobile_no")[0].InnerText;
                dr["valid_till"] = getidname.GetElementsByTagName("valid_till")[0].InnerText;
                dr["status"] = getidname.GetElementsByTagName("status")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion
    }
}