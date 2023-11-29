using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Xml;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace FFI.Controllers
{
    public class PAWHSVehicleMasterController : Controller
    {
        // GET: PAWHSVehicleMaster
        public ActionResult PAWHSVehicleMasterList()
        {
            return View();
        }
        public ActionResult PAWHSVehicleMasterForm()
        {
            return View();
        }
        #region xml Local DropDown Load
        public string Xmlcmb_Localbind()
        {
            DataTable DT = new DataTable();
            DT.Columns.Add("Orgl", typeof(string));
            var XmlLoadFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory,
                Path.Combine("CommonXml", "Generatexml.xml"));
            XmlDocument XmlGetLoad = new XmlDocument();
            XmlGetLoad.Load(XmlLoadFullPath);
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/refund");
            foreach (XmlNode RoleNodeGetVal in RoleNodeList)
            {
                DataRow dr = DT.NewRow();
                dr["Orgl"] = RoleNodeGetVal.InnerText;
                DT.Rows.Add(dr);
            }
            return JsonConvert.SerializeObject(DT);
        }
        #endregion
        private IConfiguration _configuration;
        public PAWHSVehicleMasterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult PAWHSVehicleMasterListfetch([FromBody]Context context)
        {
            Application objList = new Application();
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

                //string Urlcon = "/allvehicle?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSVehicleMaster/");
                string Urlcon = "PAWHSVehicleMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("allvehicle", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        public ActionResult PAWHSVehicleMasterfetch([FromBody] Contextfetch objContext)
        {
            Applicationfetch objout = new Applicationfetch();
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

                //string Urlcon = "/vehicle?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&vehicle_rowid=" + objContext.vehicle_rowid + "&agg_code=" + objContext.agg_code;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSVehicleMaster/");
                string Urlcon = "PAWHSVehicleMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("vehicle", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (Applicationfetch)JsonConvert.DeserializeObject(post_data, typeof(Applicationfetch));
            }
            return Json(objout);
        }
        #region list
        public class List
        {
            public int Out_vehicle_rowid { get; set; }
            public string Out_agg_code { get; set; }
            public string Out_vehicle_code { get; set; }
            public string Out_vehicle_regno { get; set; }
            public string Out_vehicle_manf_name { get; set; }
            public string Out_max_carrry_weight { get; set; }
            public string Out_loadspace_height { get; set; }
            public string Out_loadspace_width { get; set; }
            public string Out_loadspace_length { get; set; }
            public string Out_gps_id { get; set; }
            public string Out_imei_no { get; set; }
            public string Out_sim_no { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }
            public string Out_row_timestamp { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<List> List { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }

        }
        public class ApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class Application
        {
            public Context context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion
        #region Singlefetch
        public class Header
        {
            public string In_vehicle_code { get; set; }
            public string In_vehicle_regno { get; set; }
            public string In_vehicle_manf_name { get; set; }
            public string In_max_carrry_weight { get; set; }
            public string In_loadspace_height { get; set; }
            public string In_loadspace_width { get; set; }
            public string In_loadspace_length { get; set; }
            public string In_gps_id { get; set; }
            public string In_imei_no { get; set; }
            public string In_sim_no { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Contextfetch
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public int vehicle_rowid { get; set; }
            public string agg_code { get; set; }

        }
        public class ApplicationExceptionfetch
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class Applicationfetch
        {
            public Contextfetch context { get; set; }
            public ApplicationExceptionfetch ApplicationException { get; set; }

        }
        #endregion
        [HttpPost]
        public ActionResult PAWHSVehicleMasterSave([FromBody] Contextsave objContext)
        {
           
            Applicationsave objRoot = new Applicationsave();
            Documentsave objDoc = new Documentsave();
            Contextsave objContextDetails = new Contextsave();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
           
            objDoc.context = objContextDetails;
            objRoot.document = objDoc;

            if(objContextDetails.Header.In_mode_flag == "")
            {
                objContextDetails.Header.In_mode_flag = "U";
            }

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
                //string Urlcon = "/new_vehicle_master";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSVehicleMaster/");
                string Urlcon = "PAWHSVehicleMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_vehicle_master", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (Documentsave)JsonConvert.DeserializeObject(post_data, typeof(Documentsave));
            }
            return Json(objDoc);
        }
        #region Save
        public class HeaderSave
        {
            public int IOU_vehicle_rowid { get; set; }
            public string In_agg_code { get; set; }
            public string IOU_vehicle_code { get; set; }
            public string In_vehicle_regno { get; set; }
            public string In_vehicle_manf_name { get; set; }
            public string In_max_carrry_weight { get; set; }
            public string In_loadspace_height { get; set; }
            public string In_loadspace_width { get; set; }
            public string In_loadspace_length { get; set; }
            public string In_gps_id { get; set; }
            public string In_imei_no { get; set; }
            public string In_sim_no { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Contextsave
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public HeaderSave Header { get; set; }

        }
        public class Documentsave
        {
            public Contextsave context { get; set; }

        }
        public class Applicationsave
        {
            public Documentsave document { get; set; }

        }
#endregion
    }
}