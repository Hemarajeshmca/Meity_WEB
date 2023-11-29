using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class FPOMappingController : Controller
    {
        // GET: FPOMapping

        private IConfiguration _configuration;
        public FPOMappingController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        public ActionResult FPOMapping()
        {
            return View();
        }


        public ActionResult FPOMappingForm()
        {
            return View();
        }

        public ActionResult FPOMembers()
        {
            return View();
        }
        public class FarmerContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FarmerFilter Filter { get; set; }
            public Header Header { get; set; }
            public List<Map> Map { get; set; }
        }

        public class SFarmerContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }          
            public SHeader Header { get; set; }
            public List<SMap> Map { get; set; }
        }

        public class FarmerFilter
        {
            public string FilterBy_Option { get; set; }
            public string fpoorgn_code { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public int out_record_count { get; set; }
            public int from_index { get; set; }
            public int to_index { get; set; }
            public int record_count { get; set; }
        }
      
        public class FarmerRootObject
        {
            public FarmerContext context { get; set; }
            public FarmerApplicationException ApplicationException { get; set; }
        }

        public class FarmerMapReg
        {
            public SFarmerContext context { get; set; }
        }

        public class FarmerRootMap
        {
            public FarmerMapReg document { get; set; }
        }

        public class AllFarmerList
        {
            public FarmerListContext context { get; set; }
            public FarmerApplicationException ApplicationException { get; set; }
        }
        public class FarmerListContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<List> List { get; set; }
        }
        public class List
        {
            public string In_sel_flag { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_sur_name { get; set; }
            public string In_farmer_dob { get; set; }
            public string In_gender_flag { get; set; }
            public string In_gender_flag_desc { get; set; }
            public string In_reg_mobile_no { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_village { get; set; }

        }

        public class FarmerApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }

        [HttpPost]
        public ActionResult SingleFetchList([FromBody]FarmerContext objContext)
        {
            FarmerRootObject objList = new FarmerRootObject();
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
                string Urlcon = "FISFarmermapping/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISFarmermapping/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("FPOFarmer_map", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (FarmerRootObject)JsonConvert.DeserializeObject(post_data, typeof(FarmerRootObject));

            }
            return Json(objList);
        }

        [HttpPost]
        public ActionResult GetAllFPOFarmerList([FromBody]FarmerContext objContext)
        {
            AllFarmerList objList = new AllFarmerList();
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
                string Urlcon = "FISFarmermapping/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
              //  client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISFarmermapping/");
                client.DefaultRequestHeaders.Accept.Clear(); 
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("allFPOFarmer_map", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (AllFarmerList)JsonConvert.DeserializeObject(post_data, typeof(AllFarmerList));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult SaveFarmerMap([FromBody]SFarmerContext objContext)
        {
            FarmerRootMap ObjRoot = new FarmerRootMap();
            SFarmerContext ObjContext = new SFarmerContext();
            FarmerMapReg ObjMapReg = new FarmerMapReg();
          

            ObjContext.orgnId = objContext.orgnId;
            ObjContext.locnId = objContext.locnId;
            ObjContext.localeId = objContext.localeId;
            ObjContext.Header = objContext.Header;
            ObjContext.Map = objContext.Map;

            ObjMapReg.context = ObjContext;
            ObjRoot.document = ObjMapReg;

            AllFarmerList objList = new AllFarmerList();
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
                string Urlcon = "FISFarmermapping/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISFarmermapping/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(ObjRoot), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newFPOFarmerMap", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }
        

        public class Header
        {
            public string In_fpoorgn_desc { get; set; }
            

        }
        public class SHeader
        {          
            public string In_fpoorgn_code { get; set; }

        }

        public class Map
        {
            public int In_fpomember_rowid { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_farmer_code { get; set; }
            public string In_member_name { get; set; }
            public string In_member_sur_name { get; set; }
            public string In_member_dob { get; set; }
            public string In_member_gender_flag { get; set; }
            public string In_member_gender_flag_desc { get; set; }
            public string In_member_reg_mob_no { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
            public string In_village { get; set; }
        }


        public class SMap
        {
            public int In_fpomember_rowid { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_farmer_code { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
            
           

        }

        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public IList<Map> Map { get; set; }

        }
      


    }
}