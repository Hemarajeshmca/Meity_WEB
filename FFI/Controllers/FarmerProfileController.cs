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
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.IO;
using FFI_Datamodel;

namespace FFI.Controllers
{
    public class FarmerProfileController : Controller
    {
        private IConfiguration _configuration;
        public FarmerProfileController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        string dbstring = "";
        //
        // GET: /FarmerProfile/
        public ActionResult FarmerProfile_Form()
        {
            return View();
        }

        public ActionResult FarmerProfile_List()
        {
            return View();
        }
        public ActionResult FarmerProfileEdit()
        {
            return View();
        }
        public ActionResult FarmerProfileView()
        {
            return View();
        }
        [HttpPost]
        public ActionResult GetFarmersList([FromBody]Context objContext)
        {
            RootObject objList = new RootObject();
            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {
                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            using (var client = new HttpClient())
            {
                string Urlcon = "FDR_FarmerProfile/allfarmerpro?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "&from_index=" + objContext.Filter.from_index + "&to_index=" + objContext.Filter.to_index + "&record_count=" + objContext.Filter.record_count + "";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (RootObject)JsonConvert.DeserializeObject(post_data, typeof(RootObject));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult GetFarmer([FromBody] saveContext objContext)
        {
            fetchContext objout = new fetchContext();
            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {
                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            using (var client = new HttpClient())
            {
                string Urlcon = "FDR_FarmerProfile/farmer_profile?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&farmer_rowid=" + objContext.Header.inout_farmer_rowid + "&farmer_code=" + objContext.Header.inout_farmer_code + "&version_no=" + objContext.Header.inout_version_no + "";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (fetchContext)JsonConvert.DeserializeObject(post_data, typeof(fetchContext));
            }
            return Json(post_data);
        }

        public ActionResult SaveFarmer([FromBody] saveContext objContext)
        {
            saveRootObject objRoot = new saveRootObject();
            Document objDoc = new Document();
            saveContext objContextDetails = new saveContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Detail = objContext.Detail;
            objContextDetails.Header = objContext.Header;

            objDoc.context = objContextDetails;
            objRoot.document = objDoc;

            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {
                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                 urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            using (var client = new HttpClient())
            {
                string Urlcon = "FDR_FarmerProfile/newfarmerprofile";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        public class recdtaa
        {
            public receiveData receiveData { get; set; }
        }
        [HttpPost]
        public string profiledetails([FromBody] receiveData send)
        {
            string data_string = "";
            string obj = "";
            var activity_code = send.activity_code;
            var orgnid = send.orgnid;
            var locnid = send.locnid;
            var userid = send.userid;
            var localeid = send.localeid;
            int farmer_rowid = send.farmer_rowid;
            var farmer_code = send.farmer_code;
            int version_no = send.version_no;


            XDocument doc = new XDocument(); //XDocument.Load(XMLLoadfullPath);

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
            response = objproduct1.profile_dtl(orgnid, locnid, userid, localeid, activity_code, farmer_rowid, farmer_code, version_no, dbstring);
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
                obj = arr_resultList;
                document = XDocument.Parse(obj);

                XElement setup = (from NewDataSet in document.Descendants("NewDataSet") select NewDataSet).First();

                foreach (XElement xe in setup.Descendants("Table"))
                    data_string = xe.Value.ToString(); // add columns to your dt
            }

            return obj;

        }
        public static string ToStringAsXml(DataTable ds)
        {
            StringWriter sw = new StringWriter();
            ds.WriteXml(sw, XmlWriteMode.IgnoreSchema);
            string s = sw.ToString();
            return s;
        }

        #region list
        public class Filter
        {
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public int out_record_count { get; set; }
            public int from_index { get; set; }
            public int to_index { get; set; }
            public int record_count { get; set; }
        }

        public class List
        {
            public int out_farmer_rowid { get; set; }
            public string out_farmer_code { get; set; }
            public int out_version_no { get; set; }
            public string out_photo_farmer { get; set; }
            public string out_farmer_name { get; set; }
            public string out_sur_name { get; set; }
            public string out_fhw_name { get; set; }
            public string out_farmer_dob { get; set; }
            public string out_farmer_addr1 { get; set; }
            public string out_farmer_addr2 { get; set; }
            public string out_farmer_ll_name { get; set; }
            public string out_sur_ll_name { get; set; }
            public string out_fhw_ll_name { get; set; }
            public string out_farmer_ll_addr1 { get; set; }
            public string out_farmer_ll_addr2 { get; set; }
            public string out_farmer_country { get; set; }
            public string out_farmer_country_desc { get; set; }
            public string out_farmer_state { get; set; }
            public string out_farmer_state_desc { get; set; }
            public string out_farmer_dist { get; set; }
            public string out_farmer_dist_desc { get; set; }
            public string out_farmer_taluk { get; set; }
            public string out_farmer_taluk_desc { get; set; }
            public string out_farmer_panchayat { get; set; }
            public string out_farmer_panchayat_desc { get; set; }
            public string out_farmer_village { get; set; }
            public string out_farmer_village_desc { get; set; }
            public string out_farmer_pincode { get; set; }
            public string out_farmer_pincode_desc { get; set; }
            public string out_marital_status { get; set; }
            public string out_marital_status_desc { get; set; }
            public string out_gender_flag { get; set; }
            public string out_gender_flag_desc { get; set; }
            public string out_reg_mobile_no { get; set; }
            public string out_reg_note { get; set; }
            public string out_status_code { get; set; }
            public string out_status_desc { get; set; }
            public string out_row_timestamp { get; set; }
            //Prema added for meity demo changes on May 13
            public string out_member_id { get; set; }
            public string out_fpo_name { get; set; }
            //Prema end
        }

        public class Context
        {
            public string userId { get; set; }
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string localeId { get; set; }
            public Filter Filter { get; set; }
            public List<List> List { get; set; }
        }

        public class ApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }

        public class RootObject
        {
            public Context context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }
        #endregion
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
        }
        #endregion
        #region fetch
        public class Header
        {
            public int inout_farmer_rowid { get; set; }
            public string inout_farmer_code { get; set; }
            public int inout_version_no { get; set; }
            public string out_photo_farmer { get; set; }
            public string out_farmer_name { get; set; }
            public string out_sur_name { get; set; }
            public string out_fhw_name { get; set; }
            public string out_farmer_dob { get; set; }
            public string out_farmer_addr1 { get; set; }
            public string out_farmer_addr2 { get; set; }
            public string out_farmer_ll_name { get; set; }
            public string out_sur_ll_name { get; set; }
            public string out_fhw_ll_name { get; set; }
            public string out_farmer_ll_addr1 { get; set; }
            public string out_farmer_ll_addr2 { get; set; }
            public string out_farmer_country { get; set; }
            public string out_farmer_country_desc { get; set; }
            public string out_farmer_state { get; set; }
            public string out_farmer_state_desc { get; set; }
            public string out_farmer_dist { get; set; }
            public string out_farmer_dist_desc { get; set; }
            public string out_farmer_taluk { get; set; }
            public string out_farmer_taluk_desc { get; set; }
            public string out_farmer_panchayat { get; set; }
            public string out_farmer_panchayat_desc { get; set; }
            public string out_farmer_village { get; set; }
            public string out_farmer_village_desc { get; set; }
            public string out_farmer_pincode { get; set; }
            public string out_farmer_pincode_desc { get; set; }
            public string out_marital_status { get; set; }
            public string out_marital_status_desc { get; set; }
            public string out_gender_flag { get; set; }
            public string out_gender_flag_desc { get; set; }
            public string out_reg_mobile_no { get; set; }
            public string out_reg_note { get; set; }
            public string out_status_code { get; set; }
            public string out_status_desc { get; set; }
            public string out_mode_flag { get; set; }
            public string out_row_timestamp { get; set; }
            //Prema added for meity demo changes on May 13
            public string out_member_id { get; set; }
            public string out_fpo_name { get; set; }
            //Prema end
            public string out_detail { get; set; }
        }

        public class Dynamic
        {
            public int out_sl_no { get; set; }
            public string out_dynamic_list { get; set; }
        }

        public class fetchContext
        {
            public string userId { get; set; }
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string localeId { get; set; }
            public Header header { get; set; }
            public List<Dynamic> dynamic { get; set; }
        }

        public class fetchApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }

        public class RootObjectfetch
        {
            public Context context { get; set; }
            public fetchApplicationException ApplicationException { get; set; }
        }
        #endregion
        #region save
        public class saveHeader
        {
            public int inout_farmer_rowid { get; set; }
            public string inout_farmer_code { get; set; }
            public int inout_version_no { get; set; }
            public string in_photo_farmer { get; set; }
            public string in_farmer_name { get; set; }
            public string in_sur_name { get; set; }
            public string in_fhw_name { get; set; }
            public string in_farmer_dob { get; set; }
            public string in_farmer_addr1 { get; set; }
            public string in_farmer_addr2 { get; set; }
            public string in_farmer_ll_name { get; set; }
            public string in_sur_ll_name { get; set; }
            public string in_fhw_ll_name { get; set; }
            public string in_farmer_ll_addr1 { get; set; }
            public string in_farmer_ll_addr2 { get; set; }
            public string in_farmer_country { get; set; }
            public string in_farmer_state { get; set; }
            public string in_farmer_dist { get; set; }
            public string in_farmer_taluk { get; set; }
            public string in_farmer_panchayat { get; set; }
            public string in_farmer_village { get; set; }
            public string in_farmer_pincode { get; set; }
            public string in_marital_status { get; set; }
            public string in_gender_flag { get; set; }
            public string in_reg_mobile_no { get; set; }
            public string in_reg_note { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
            public string in_row_timestamp { get; set; }

            //Prema added for meity demo changes on May 13
            public string in_member_id { get; set; }
            public string in_fpo_name { get; set; }
            //Prema end
        }

        public class Detail
        {
            public int in_farmerdetail_rowid { get; set; }
            public string in_entitygrp_code { get; set; }
            public string in_entity_code { get; set; }
            public string in_row_slno { get; set; }
            public string in_entity_value { get; set; }
            public string in_mode_flag { get; set; }
        }

        public class saveContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public saveHeader Header { get; set; }
            public List<Detail> Detail { get; set; }
        }

        public class Document
        {
            public saveContext context { get; set; }
        }

        public class saveRootObject
        {
            public Document document { get; set; }
        }
        #endregion
    }
}
