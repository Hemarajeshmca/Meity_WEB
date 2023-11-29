using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace FFI.Controllers
{
    public class GridCommanFunctionController : Controller
    {
        // GET: GridCommanFunction
        public ActionResult Index()
        {
            return View();
        }

        #region Comman Grid List and Field
        [HttpPost]
        public string CommanGridField(string GetName)
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("description", typeof(string));
            //xml read
            var XmlRoleFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("Common_Xml_File", "farmer_tabgrid_enUS.xml"));
            var doc = XDocument.Load(XmlRoleFullPath);

            var value = doc.Descendants("row").Where(s => (string)s.Element("entitygrp_code") == GetName)
                .Select(s => s.Element("description")).ToList();
            foreach (XElement c in value)
            {
                var descript = c.FirstNode;
                DataRow dr = dt.NewRow();
                dr["description"] = descript;
                dt.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(dt);
        }

        #endregion


    }
}