using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace FFI.Controllers
{
    public class AdvancedFilterController : Controller
    {
        //
        // GET: /AdvancedFilter/
        public ActionResult AdvancedFilter()
        {
            return View();
        }
        public string filterID;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private IConfiguration _configuration;
        public AdvancedFilterController(IWebHostEnvironment webHostEnvironment, IConfiguration configuration)
        {
            _webHostEnvironment = webHostEnvironment;
            _configuration = configuration;
        }
        public class advancefiltermodel
        {
            public string filterID { get; set; }
            public string fltercond { get; set; }           
        }
        [HttpPost]
        public string filterdetails([FromBody] advancefiltermodel filterID)
        {            
            string webRootPath = _webHostEnvironment.WebRootPath;
            var XMLLoadfullPath = webRootPath + "/CommonXml/Filter.xml";
             //   Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
             //Path.Combine("CommonXml", "Filter.xml"));

            var doc = XDocument.Load(XMLLoadfullPath);

            DataTable dt_InputColumn = new DataTable();

            dt_InputColumn.Columns.Add("coldesc", typeof(string));
            dt_InputColumn.Columns.Add("colname", typeof(string));
            dt_InputColumn.Columns.Add("datatype", typeof(string));
            dt_InputColumn.Columns.Add("mstcode", typeof(string));
            dt_InputColumn.Columns.Add("defcondt", typeof(string));
            dt_InputColumn.Columns.Add("defval", typeof(string));
            var clmDtl = from clm in doc.Descendants("filter").Where(clm => (string)clm.Attribute("id").Value == filterID.filterID) select clm;

            foreach (XElement clm in clmDtl)
            {
                var clms = from cl in clm.Descendants("item") select cl;
                foreach (XElement c in clms)
                {
                    DataRow dr = dt_InputColumn.NewRow();
                    dr["coldesc"] = Convert.ToString(c.Attribute("coldesc").Value);
                    dr["colname"] = Convert.ToString(c.Attribute("colname").Value);
                    dr["datatype"] = Convert.ToString(c.Attribute("datatype").Value);
                    dr["mstcode"] = Convert.ToString(c.Attribute("mstcode").Value);
                    dr["defcondt"] = Convert.ToString(c.Attribute("defcondt").Value);
                    dr["defval"] = Convert.ToString(c.Attribute("defval").Value);
                    dt_InputColumn.Rows.Add(dr);
                }
            }

            return JsonConvert.SerializeObject(dt_InputColumn);

        }
       
        [HttpPost]
        public void setFilter_condition([FromBody] advancefiltermodel filterID)
        {
            Common.Global.filter_condition = filterID.fltercond;
        }
    }
}