using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;

namespace FFI.Controllers
{
    public class DashboardDefinitionController : Controller
    {
        // GET: DashboardDefinition
        public ActionResult DashboardDefinition()
        {
            return View();
        }
        #region Role Information(GetXml Role ID and Name)

        public string RoleInfo()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("org_level", typeof(string));
            dt.Columns.Add("description", typeof(string));
            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "OrglevelXml.xml"));
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlRoleFullPath);
            XmlNodeList RoleNodelist = xmlobject.SelectNodes("/root/row");
            foreach (XmlNode RoleData in RoleNodelist)
            {
                XmlElement getidname = (XmlElement)RoleData;
                DataRow dr = dt.NewRow();
                dr["org_level"] = getidname.GetElementsByTagName("org")[0].InnerText;
                dr["description"] = getidname.GetElementsByTagName("description")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }

        #endregion
    }
}