using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using FFI_Datamodel;
using Microsoft.Extensions.Configuration;

namespace FFI.Controllers
{
    public class DynamicGridController : Controller
    {
        private IConfiguration _configuration;
        public DynamicGridController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
       
        string dbstring = "";
        //
        // GET: /DynamicGrid/
        public ActionResult DynamicGrid()
        {
            return View();
        }

        [HttpPost]
        public string tabdetails([FromBody] receiveData receive_data)
        {
            
            string xml_id = receive_data.xml_name;
            var activity_code = receive_data.activity_code;
            var orgnid = receive_data.orgnid;
            var locnid = receive_data.locnid;
            var userid = receive_data.userid;
            var localeid = receive_data.localeid;
            //var XMLLoadfullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
            // Path.Combine("CommonXml", xml_id));

            XDocument doc = new XDocument(); //XDocument.Load(XMLLoadfullPath);

            if(_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
                {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeTAUAt")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
            }
                else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "bh")
            {
                dbstring = _configuration.GetSection("dbtypeBA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "ju")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeJU")["mysqlcon"].ToString();

                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeJUUAt")["mysqlcon"].ToString();

                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "PRO")
                {
                    dbstring = _configuration.GetSection("dbtypeJUPRO")["mysqlcon"].ToString();

                }

            }

            DataSet response = new DataSet();
            farmer_profile_datamodel objproduct1 = new farmer_profile_datamodel();
            response = objproduct1.tab_create(orgnid, locnid, userid, localeid, activity_code, dbstring);
            DataTable dt = response.Tables[0];
            string arr_resultList = ToStringAsXml(dt);
            if (response.Tables[0].Rows.Count == 0)
            {
                string errmsg = "";
                string encoded_msg = Common.Util.Html_Encode(errmsg);
                throw new Exception(encoded_msg);
            }
            else
            {

                XDocument document = new XDocument();
                string obj = arr_resultList;                
                doc = XDocument.Parse(obj);

            }



            DataTable dt_InputColumn = new DataTable();

            dt_InputColumn.Columns.Add("activity_code", typeof(string));
            dt_InputColumn.Columns.Add("entitygrp_code", typeof(string));
            dt_InputColumn.Columns.Add("row_slno", typeof(string));
            dt_InputColumn.Columns.Add("description", typeof(string));
            dt_InputColumn.Columns.Add("multiline_flag", typeof(string));

            var fldDtl = from flds in doc.Descendants("Table") select flds;

            foreach (XElement fld in fldDtl)
            {
                var flds = from fl in fld.Elements() select fl;
                DataRow dr = dt_InputColumn.NewRow();
                foreach (XElement ele in flds)
                {
                    dr[ele.Name.ToString()] = Convert.ToString(ele.Value);
                }
                dt_InputColumn.Rows.Add(dr);
            }

            return JsonConvert.SerializeObject(dt_InputColumn);

        }
        public static string ToStringAsXml(DataTable ds)
        {
            StringWriter sw = new StringWriter();
            ds.WriteXml(sw, XmlWriteMode.IgnoreSchema);
            string s = sw.ToString();
            return s;
        }
        [HttpPost]
        public string gridCreation([FromBody] receiveData receive_data)
        {
            dynamic grid_Datalist = new JObject();
            string grid_id = receive_data.grid_id;
            string xml_id = receive_data.xml_name;
            string value = receive_data.grid_data;
            var activity_code = receive_data.activity_code;
            var orgnid = receive_data.orgnid;
            var locnid = receive_data.locnid;
            var userid = receive_data.userid;
            var localeid = receive_data.localeid;
            //var XMLLoadfullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
            // Path.Combine("CommonXml", xml_id));


            //  var doc = XDocument.Load(XMLLoadfullPath);

            XDocument doc = new XDocument();


            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeTAUAt")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "bh")
            {
                dbstring = _configuration.GetSection("dbtypeBA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "ju")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeJU")["mysqlcon"].ToString();

                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeJUUAt")["mysqlcon"].ToString();

                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "PRO")
                {
                    dbstring = _configuration.GetSection("dbtypeJUPRO")["mysqlcon"].ToString();

                }

            }

            DataSet response = new DataSet();
            farmer_profile_datamodel objproduct1 = new farmer_profile_datamodel();
            response = objproduct1.grid_create(orgnid, locnid, userid, localeid, activity_code, dbstring);
            DataTable dt = response.Tables[0];
            string arr_resultList = ToStringAsXml(dt);
            if (response.Tables[0].Rows.Count == 0)
            {
                string errmsg = "";
                string encoded_msg = Common.Util.Html_Encode(errmsg);
                throw new Exception(encoded_msg);
            }
            else
            {

                XDocument document = new XDocument();
                string obj = arr_resultList;
                
                doc = XDocument.Parse(obj);

            }





            DataTable dt_InputColumn = new DataTable();
            DataTable dt_GridData = new DataTable();

            dt_InputColumn.Columns.Add("activity_code", typeof(string));
            dt_InputColumn.Columns.Add("entitygrp_code", typeof(string));
            dt_InputColumn.Columns.Add("entity_code", typeof(string));
            dt_InputColumn.Columns.Add("row_slno", typeof(string));
            dt_InputColumn.Columns.Add("description", typeof(string));
            dt_InputColumn.Columns.Add("lang_code", typeof(string));
            dt_InputColumn.Columns.Add("entity_type", typeof(string));
            dt_InputColumn.Columns.Add("entity_length", typeof(string));
            dt_InputColumn.Columns.Add("entity_width", typeof(string));
            dt_InputColumn.Columns.Add("mandatory_flag", typeof(string));
            dt_InputColumn.Columns.Add("default_value", typeof(string));

            var fldDtl = from flds in doc.Descendants("Table").Where(flds => (string)flds.Element("entitygrp_code") == grid_id) select flds;

            foreach (XElement fld in fldDtl)
            {
                var flds = from fl in fld.Elements() select fl;
                DataRow dr = dt_InputColumn.NewRow();
                foreach (XElement ele in flds)
                {
                    dr[ele.Name.ToString()] = Convert.ToString(ele.Value);
                    if (ele.Name.ToString() == "entity_code")
                        dt_GridData.Columns.Add(Convert.ToString(ele.Value), typeof(string));
                }
                dt_InputColumn.Rows.Add(dr);
            }

            XDocument dataDoc = new XDocument();
            if (value != "")
            {
                dataDoc = XDocument.Parse(value);
                var colDtl = from cols in dataDoc.Descendants("Table").Where(cols => (string)cols.Element("entitygrp_code") == grid_id) select cols;

                var arrayNames = (from DataColumn x in dt_GridData.Columns select x.ColumnName).ToArray();

                int col_num = 0;

                string _fColumn = "";

                //DataRow dr = dt_GridData.N

                int row = 0;
                foreach (XElement clm in colDtl)
                {
                    var clms = from cl in clm.Descendants("entity_code") select cl;
                    var clmss = from cls in clm.Descendants("entity_value") select cls;
                    int count = 0;

                    foreach (XElement c in clms)
                    {
                        foreach (XElement d in clmss)
                        {
                            if (_fColumn == "")
                            {
                                row = 0;
                                _fColumn = c.Value;
                                // dt_GridData.NewRow();
                                dt_GridData.Rows.Add();
                            }
                            else if (_fColumn == c.Value)
                            {
                                row += 1;
                                // dt_GridData.NewRow();
                                dt_GridData.Rows.Add();


                            }
                            else if (_fColumn != c.Value)
                            {
                                break;
                            }
                        }
                        if (_fColumn != c.Value)
                        {
                            break;
                        }
                    }



                }

                int i = 0;
                foreach (XElement clm in colDtl)
                {
                    var clms = from cl in clm.Descendants("entity_code") select cl;
                    var clmss = from cls in clm.Descendants("entity_value") select cls;
                    var rws = from clrs in clm.Descendants("row_slno") select clrs;
                    foreach (XElement c in clms)
                    {
                        foreach (XElement d in clmss)
                        {

                            // foreach (XElement e in rws)
                            //{
                            // int srow = Convert.ToInt16(e.Value);
                            dt_GridData.Rows[i][c.Value] = Convert.ToString(d.Value);
                            if (i == row)
                            {
                                i = 0;
                            }
                            else
                            {
                                i += 1;
                            }
                            // }
                        }
                    }
                }




            }
            grid_Datalist.grid_data = JsonConvert.SerializeObject(dt_GridData);
            grid_Datalist.column_list = JsonConvert.SerializeObject(dt_InputColumn);
            return JsonConvert.SerializeObject(grid_Datalist);

        }
        [HttpPost]
        public string gridListCreation([FromBody] receiveData receive_data)
        {
            string grid_id = receive_data.grid_id;
            string screen_id = receive_data.screen_id;

            var activity_code = receive_data.activity_code;
            var orgnid = receive_data.orgnid;
            var locnid = receive_data.locnid;
            var userid = receive_data.userid;
            var localeid = receive_data.localeid;
            string xml_id = receive_data.xml_name;
            dynamic fldDtl = "";

            //var XMLLoadfullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
            // Path.Combine("CommonXml", xml_id));


            // var doc = XDocument.Load(XMLLoadfullPath);

            XDocument doc = new XDocument();

            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeTAUAt")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "bh")
            {
                dbstring = _configuration.GetSection("dbtypeBA")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                }
                else
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "ju")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeJU")["mysqlcon"].ToString();

                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeJUUAt")["mysqlcon"].ToString();

                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "PRO")
                {
                    dbstring = _configuration.GetSection("dbtypeJUPRO")["mysqlcon"].ToString();

                }

            }
            DataSet response = new DataSet();
            farmer_profile_datamodel objproduct1 = new farmer_profile_datamodel();
            response = objproduct1.grid_locale(orgnid, locnid, userid, localeid, activity_code, dbstring);
            DataTable dt = response.Tables[0];
            string arr_resultList = ToStringAsXml(dt);
            if (response.Tables[0].Rows.Count == 0)
            {
                string errmsg = "";
                string encoded_msg = Common.Util.Html_Encode(errmsg);
                throw new Exception(encoded_msg);
            }
            else
            {

                XDocument document = new XDocument();
                string obj = arr_resultList;                
                doc = XDocument.Parse(obj);

            }

            DataTable dt_InputColumn = new DataTable();

            dt_InputColumn.Columns.Add("screen_id", typeof(string));
            dt_InputColumn.Columns.Add("control_type", typeof(string));
            dt_InputColumn.Columns.Add("control_id", typeof(string));
            dt_InputColumn.Columns.Add("control_code", typeof(string));
            dt_InputColumn.Columns.Add("control_defdesc", typeof(string));
            dt_InputColumn.Columns.Add("control_desc", typeof(string));
            dt_InputColumn.Columns.Add("language", typeof(string));

            if (grid_id.Length > 0)
                fldDtl = from flds in doc.Descendants("Table").Where(flds => (string)flds.Element("screen_id") == screen_id && (string)flds.Element("control_id") == grid_id) select flds;
            else
                fldDtl = from flds in doc.Descendants("Table").Where(flds => (string)flds.Element("screen_id") == screen_id) select flds;


            foreach (XElement fld in fldDtl)
            {
                var flds = from fl in fld.Elements() select fl;
                DataRow dr = dt_InputColumn.NewRow();
                foreach (XElement ele in flds)
                {
                    dr[ele.Name.ToString()] = Convert.ToString(ele.Value);
                }
                dt_InputColumn.Rows.Add(dr);
            }

            return JsonConvert.SerializeObject(dt_InputColumn);

        }
        #region tab model
        public class receiveData
        {
            public string activity_code { get; set; }
            public string orgnid { get; set; }
            public string locnid { get; set; }
            public string userid { get; set; }
            public string localeid { get; set; }
            public int farmer_rowid { get; set; }
            public string farmer_code { get; set; }
            public int version_no { get; set; }
            public string xml_name { get; set; }
            public string grid_id { get; set; }
            public string grid_data { get; set; }
            public string screen_id { get; set; }
        }
        #endregion
    }
}