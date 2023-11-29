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
    public class ModuleController : Controller
    {
        // GET: Module
        public ActionResult Modulelist()
        {
            return View();
        }
        public ActionResult ModuleForm()
        {
            return View();
        }
        public ActionResult ModuleEdit()
        {
            return View();
        }
        //form grid load
        #region xml User GRId Details
        public string Moduleformgrid()
        {

            DataTable dt = new DataTable();
            dt.Columns.Add("seq_no", typeof(int));
            dt.Columns.Add("menu_name", typeof(string));

            var XmlUserFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "moduleXml.xml"));
          
            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlUserFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/root/grid");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["seq_no"] = Convert.ToInt32(getidname.GetElementsByTagName("id")[0].InnerText);
                dr["menu_name"] = getidname.GetElementsByTagName("name")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion
        //list View grid
        #region xml User GRId Details
        public string Modulegrid()
        {

            DataTable dt = new DataTable();
            dt.Columns.Add("module_id", typeof(string));
            dt.Columns.Add("module_name", typeof(string));
            dt.Columns.Add("created_date", typeof(string));
            dt.Columns.Add("status_code", typeof(string));
            var XmlUserFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "moduleXml.xml"));

            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlUserFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/root/list");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["module_id"] = getidname.GetElementsByTagName("id")[0].InnerText;
                dr["module_name"] = getidname.GetElementsByTagName("ser")[0].InnerText;
                dr["created_date"] = getidname.GetElementsByTagName("date")[0].InnerText;
                dr["status_code"] = getidname.GetElementsByTagName("status")[0].InnerText;                
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion
        //edit
        #region xml User GRId Details
        public string Moduleform1()
        {

            DataTable dt = new DataTable();
            dt.Columns.Add("seq_no", typeof(int));
            dt.Columns.Add("menu_name", typeof(string));

            var XmlUserFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "moduleXml.xml"));

            XmlDocument xmlobject = new XmlDocument();
            xmlobject.Load(XmlUserFullPath);
            XmlNodeList UserNodelist = xmlobject.SelectNodes("/root/grid");
            foreach (XmlNode UserData in UserNodelist)
            {
                XmlElement getidname = (XmlElement)UserData;
                DataRow dr = dt.NewRow();
                dr["seq_no"] = Convert.ToInt32(getidname.GetElementsByTagName("id")[0].InnerText);
                dr["menu_name"] = getidname.GetElementsByTagName("name")[0].InnerText;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }
        #endregion
    }
}