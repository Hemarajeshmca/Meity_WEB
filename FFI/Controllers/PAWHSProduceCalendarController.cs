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
    public class PAWHSProduceCalendarController : Controller
    {
        // GET: PAWHSProduceCalendar
        public ActionResult PAWHSProduceCalendarList()
        {
            return View();
        }
        public ActionResult PAWHSProduceCalendarForm()
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
        public PAWHSProduceCalendarController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        public JsonResult PAWHSProduceCalendarListfetch([FromBody]Context context)
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

                //string Urlcon = "/allproduce_calendar?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSProduceCal/");
                string Urlcon = "PAWHSProduceCal/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("allproduce_calendar", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        public ActionResult PAWHSProduceCalendarfetch([FromBody] Contextfetch objContext)
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
                //string Urlcon = "/produce_calendar?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&producecal_rowid=" + objContext.producecal_rowid + "&pac_no=" + objContext.pac_no;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSProduceCal/");
                string Urlcon = "PAWHSProduceCal/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("produce_calendar", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (Applicationfetch)JsonConvert.DeserializeObject(post_data, typeof(Applicationfetch));
            }
            return Json(objout);
        }
        public ActionResult PAWHSProduceCalendarSave([FromBody] Contextsave objContextS)
        {
            Applicationsave objRoot = new Applicationsave();
            Documentsave objDoc = new Documentsave();
            Contextsave objContextDetails = new Contextsave();
            objContextDetails.userId = objContextS.userId;
            objContextDetails.locnId = objContextS.locnId;
            objContextDetails.localeId = objContextS.localeId;
            objContextDetails.orgnId = objContextS.orgnId;
            objContextDetails.Header = objContextS.Header;
            objContextDetails.List = objContextS.List;

            objDoc.context = objContextDetails;
            objRoot.document = objDoc;

            //if (objContextDetails.Header.In_mode_flag == "")
            //{
            //    objContextDetails.Header.In_mode_flag = "U";
            //}

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

                //string Urlcon = "/new_produce_calendar";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSProduceCal/");
                string Urlcon = "PAWHSProduceCal/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_produce_calendar", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (Documentsave)JsonConvert.DeserializeObject(post_data, typeof(Documentsave));
            }
            return Json(objDoc);
        }
        #region list
        public class List
        {
            public int Out_producecal_rowid { get; set; }
            public string Out_pac_no { get; set; }
            public string Out_pac_year { get; set; }
            public string Out_pac_date { get; set; }
            public string Out_agg_code { get; set; }
            public string Out_farmer_code { get; set; }
            public string Out_item_code { get; set; }
            public int Out_jan { get; set; }
            public int Out_feb { get; set; }
            public int Out_mar { get; set; }
            public int Out_apr { get; set; }
            public int Out_may { get; set; }
            public int Out_jun { get; set; }
            public int Out_jul { get; set; }
            public int Out_aug { get; set; }
            public int Out_sep { get; set; }
            public int Out_oct { get; set; }
            public int Out_nov { get; set; }
            public int Out_dec { get; set; }
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
        #region fetch
        public class Headerfetch
        {
            public int IOU_producecal_rowid { get; set; }
            public string IOU_pac_no { get; set; }
            public string In_pac_date { get; set; }
            public string In_pac_year { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Listfetch
        {
            public int In_item_rowid { get; set; }
            public string In_item_code { get; set; }
            public string In_item_desc { get; set; }
            public string In_uom { get; set; }
            public int In_jan { get; set; }
            public int In_feb { get; set; }
            public int In_mar { get; set; }
            public int In_apr { get; set; }
            public int In_may { get; set; }
            public int In_jun { get; set; }
            public int In_jul { get; set; }
            public int In_aug { get; set; }
            public int In_sep { get; set; }
            public int In_oct { get; set; }
            public int In_nov { get; set; }
            public int In_dec { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Contextfetch
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Headerfetch Header { get; set; }
            public IList<Listfetch> List { get; set; }
            public int producecal_rowid { get; set; }
            public string pac_no { get; set; }

        }
        public class ApplicationExceptionfetch
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class Applicationfetch
        {
            public Contextfetch context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }
        #endregion
        #region Save
        public class Headersave
        {
            public int IOU_producecal_rowid { get; set; }
            public string IOU_pac_no { get; set; }
            public string In_pac_date { get; set; }
            public string In_pac_year { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Listsave
        {
            public int In_item_rowid { get; set; }
            public string In_item_code { get; set; }
            public string In_item_desc { get; set; }
            public string In_uom { get; set; }
            public int In_jan { get; set; }
            public int In_feb { get; set; }
            public int In_mar { get; set; }
            public int In_apr { get; set; }
            public int In_may { get; set; }
            public int In_jun { get; set; }
            public int In_jul { get; set; }
            public int In_aug { get; set; }
            public int In_sep { get; set; }
            public int In_oct { get; set; }
            public int In_nov { get; set; }
            public int In_dec { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class Contextsave
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Headersave Header { get; set; }
            public IList<Listsave> List { get; set; }

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