using Newtonsoft.Json;
using System;
using System.Data;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using System.Xml;

namespace FFI.Controllers
{
    public class ESPUserDefinitionController : Controller
    {
        // GET: ESPUserDefinition
        public ActionResult ESPUserDefinitionList()
        {
            return View();
        }
        public ActionResult ESPUserDefinitionForm()
        {
            return View();
        }
        #region xml Role DropDown Load
        //public string Xmlcmb_rolebind()
        //{
        //    DataTable DT = new DataTable();
        //    DT.Columns.Add("Orgl", typeof(string));
        //    //var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
        //    //    Path.Combine("CommonXml", "RoleXML.xml"));
        //    var XmlLoadFullPath = Path.Combine(Server.MapPath("~/CommonXml/RoleXML.xml"));
        //    XmlDocument XmlGetLoad = new XmlDocument();
        //    XmlGetLoad.Load(XmlLoadFullPath);
        //    XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/Role/RoleInfo/Name");
        //    foreach (XmlNode RoleNodeGetVal in RoleNodeList)
        //    {
        //        DataRow dr = DT.NewRow();
        //        dr["Orgl"] = RoleNodeGetVal.InnerText;
        //        DT.Rows.Add(dr);
        //    }
        //    return JsonConvert.SerializeObject(DT);
        //}
        #endregion
        #region xml( BElongs to) user DropDown Load
        public string Xmlcmb_Belongbind()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Orgl", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "UserXML.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/UserDetails/belong");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion
        #region xml User GRId Details
        //public string UserDetails()
        //{

        //    DataTable dt = new DataTable();
        //    dt.Columns.Add("user_id", typeof(int));
        //    dt.Columns.Add("user_name", typeof(string));

        //    //var XmlUserFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
        //    //    Path.Combine("CommonXml", "UserXml.xml"));
        //    var XmlUserFullPath = Path.Combine(Server.MapPath("~/CommonXml/UserXml.xml"));
        //    XmlDocument xmlobject = new XmlDocument();
        //    xmlobject.Load(XmlUserFullPath);
        //    XmlNodeList UserNodelist = xmlobject.SelectNodes("/UserDetails/User");
        //    foreach (XmlNode UserData in UserNodelist)
        //    {
        //        XmlElement getidname = (XmlElement)UserData;
        //        DataRow dr = dt.NewRow();
        //        dr["user_id"] = Convert.ToInt32(getidname.GetElementsByTagName("UserId")[0].InnerText);
        //        dr["user_name"] = getidname.GetElementsByTagName("UserName")[0].InnerText;
        //        dt.Rows.Add(dr);
        //    }
        //    return JsonConvert.SerializeObject(dt);
        //}
        #endregion
    }
}