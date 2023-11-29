using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;


namespace FFI.Controllers
{
    public class PAWHSProductMasterController : Controller
    {
        private IConfiguration _configuration;
        public PAWHSProductMasterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        private MySqlConnection con;
        string urlstring = "";
        string dbstring = "";
        public IActionResult PAWHSProductMasterList()
        {
            return View();
        }
        public ActionResult PAWHSProductMasterForm()
        {
            return View();
        }
        public ActionResult master()
        {
            return View();
        }
        #region
        /* Item Master List Loaded 18-05-2020 */
        public class PAWHSProductmasterList
        {
            public int Out_product_rowid { get; set; }
            public string Out_pawhs_code { get; set; }
            public string Out_agg_code { get; set; }
            public string Out_product_code { get; set; }
            public string Out_product_name { get; set; }
            public string Out_product_name_mst { get; set; }
            public string Out_product_category_mst { get; set; }
            public string Out_product_subcategory_mst { get; set; }
            public string Out_crop_variety { get; set; }
            public string Out_crop_variety_mst { get; set; }
            public string Out_product_category { get; set; }
            public string Out_product_subcategory { get; set; }
            public string Out_hsn_code { get; set; }
            public string Out_hsn_desctiption { get; set; }
            public string Out_uomtype_code { get; set; }
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
            public IList<PAWHSProductmasterList> List { get; set; }
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

        #region Save


        public class PAWHSProductmasterSApplication
        {
            public PAWHSProductmasterSDocument document { get; set; }

        }
        public class PAWHSProductmasterSDocument
        {
            public PAWHSProductmasterSContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }

        }

        public class PAWHSProductmasterSContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            //  public PAWHSProductmasteSFilter Filter { get; set; }
            public IList<PAWHSProductmastersDetail> Detail { get; set; }

            public PAWHSProductmasterSHeader Header { get; set; }

        }

        public class PAWHSProductmasterSHeader
        {
          
            public int IOU_product_rowid { get; set; }
            public string In_agg_code { get; set; }
            public string IOU_pawhs_code { get; set; }
            public string In_product_code { get; set; }
            public string In_product_category { get; set; }
            public string In_product_subcategory { get; set; }
            public string In_cmb_season { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_description { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_crop_variety { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_valuewithtax { get; set; }
        }


        public class PAWHSProductmastersDetail
        {
            public int In_product_dtl_rowid { get; set; }
            public string In_pawhs_code { get; set; }
            public int In_row_slno { get; set; }
            public string In_maize_code { get; set; }
            public string In_maize_name { get; set; }
            public double In_min_value { get; set; }
            public double In_max_value { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public int IOU_product_rowid { get; set; }

        }
        #endregion


        #region Fetch 

        public class PAWHSProductmasterFApplication
        {
            //public PAWHSProductmasterFDocument document { get; set; }
            public PAWHSProductmasterFContext context { get; set; }

        }


        public class PAWHSProductmasterFContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHSProductmasterFHeader Header { get; set; }
            public IList<PAWHSProductmasterFDetail> Detail { get; set; }
        }

        public class PAWHSProductmasterFHeader
        {
            public int IOU_product_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_pawhs_code { get; set; }
            public string In_product_code { get; set; }
            public string In_cmb_season { get; set; }
            public string In_cmb_season_mst { get; set; }
            public string In_product_name { get; set; }
            public string In_product_name_mst { get; set; }
            public string In_crop_variety { get; set; }
            public string In_crop_variety_mst { get; set; }
            public string In_product_category { get; set; }
            public string In_product_subcategory { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_description { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_uomtype_code_mst { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_valuewithtax { get; set; }
        }

        public class PAWHSProductmasterFDetail
        {
            public int In_product_dtl_rowid { get; set; }
            public string In_pawhs_code { get; set; }
            public int In_row_slno { get; set; }
            public string In_maize_code { get; set; }
            public string In_maize_name { get; set; }
            public string In_range { get; set; }
            public string In_maize_interval { get; set; }
            public string In_maize_unit { get; set; }
            public double In_min_value { get; set; }
            public double In_max_value { get; set; }

            public double In_temp_min_value { get; set; }
            public double In_temp_max_value { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }

        #endregion

        [HttpPost]
        public ActionResult GetMasterList([FromBody] Context objContext)
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
                //string Urlcon = "/allitem_master?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.FilterBy_Option + "&filterby_code=" + objContext.FilterBy_Code + "&filterby_fromvalue=" + objContext.FilterBy_FromValue + "&filterby_tovalue=" + objContext.FilterBy_ToValue + "";
                //client.BaseAddress = new Uri(urlstring + Urlcon);
             
                string Urlcon = "PAWHSProductMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("new_pawhs_ProductMaster_allproduct", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            return Json(objList);
        }

        [HttpPost]
        public ActionResult ProductMasterSave([FromBody] PAWHSProductmasterSContext objContext)
        {
            PAWHSProductmasterSApplication objRoot = new PAWHSProductmasterSApplication();
            PAWHSProductmasterSDocument objDoc = new PAWHSProductmasterSDocument();
            PAWHSProductmasterSContext objContextsave = new PAWHSProductmasterSContext();
            PAWHSProductmasterSHeader objheader = new PAWHSProductmasterSHeader();
            PAWHSProductmastersDetail objDetail = new PAWHSProductmastersDetail();
            objContextsave.userId = objContext.userId;
            objContextsave.locnId = objContext.locnId;
            objContextsave.localeId = objContext.localeId;
            objContextsave.orgnId = objContext.orgnId;
            objContextsave.Header = objContext.Header;
            objContextsave.Detail = objContext.Detail;
            objDoc.context = objContextsave;
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
                string Urlcon = "PAWHSProductMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_pawhs_Product_Master_save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (PAWHSProductmasterSDocument)JsonConvert.DeserializeObject(post_data, typeof(PAWHSProductmasterSDocument));
            }
            return Json(objDoc);
        }

        [HttpPost]
        public ActionResult ProductMasterfetch([FromBody] PAWHSProductmasterFContext objContext)
        {
            PAWHSProductmasterFApplication objout = new PAWHSProductmasterFApplication();
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
                //string Urlcon = "/item_master?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&item_rowid=" + objContext.item_rowid + "&agg_code=" + objContext.agg_code + "&item_code=" + objContext.item_code;
                //client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://169.38.77.190:101/api/PAWHSItemMaster/");
                string Urlcon = "PAWHSProductMaster/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("new_pawhs_Single_ProductMaster", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSProductmasterFApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSProductmasterFApplication));
            }
            return Json(objout);
        }
        //Prema Included//
        public ActionResult CropMasterSave([FromBody] ContextSave objContext)
        {
            Root objRoot = new Root();
            Document objDoc = new Document();
            ContextSave objContextDetails = new ContextSave();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.header = objContext.header;
            objContextDetails.detail = objContext.detail;


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
                string Urlcon = "MasterDefinition/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("MasterDefinition_Save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }


        #region Save master
        public class Header
        {
            public string in_parent_code { get; set; }
        }

        public class DetailSave
        {
            public int out_master_rowid { get; set; }
           
            public int out_row_slno { get; set; }
         
            public string out_master_code { get; set; }
         
            public string out_master_description { get; set; }
          
            public string out_master_ll_description { get; set; }
        
            public string out_depend_code { get; set; }
            
            public string out_locallang_flag { get; set; }
         
            public string out_status_code { get; set; }
     
            public string out_row_timestamp { get; set; }
   
            public string out_mode_flag { get; set; }
        }

        public class ContextSave
        {
            public string orgnId { get; set; }
          
            public string locnId { get; set; }
          
            public string userId { get; set; }
         
            public string localeId { get; set; }
       
            public Header header { get; set; }
         
            public List<DetailSave> detail { get; set; }
        }

        public class Document
        {
            public ContextSave context { get; set; }
            public ApplicationExceptionsave ApplicationException { get; set; }
        }

        public class Root
        {
            public Document document { get; set; }
        }

        public class ApplicationExceptionsave
        {
            public string errorNumber { get; set; }

            public string errorDescription { get; set; }
        }
        #endregion

        [HttpPost]
        public string GetSeasonList(string State_code)
        {
            DataTable dt = new DataTable();

            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
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
                    _configuration.GetSection("Api_dev")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_uat")["api_url"] = _configuration.GetSection("odUat")["api_url"];
                }
                else
                {
                    _configuration.GetSection("Api_pro")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Product_Season_List", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_state_code", State_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }
        public string GetProductCatList(string Season_code)
        {
            DataTable dt = new DataTable();

            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
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
                    _configuration.GetSection("Api_dev")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_uat")["api_url"] = _configuration.GetSection("odUat")["api_url"];
                }
                else
                {
                    _configuration.GetSection("Api_pro")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Product_Category_List", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_season_code", Season_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }
        public string GetProductSUBCatList(string prdcat_code)
        {
            DataTable dt = new DataTable();

            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
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
                    _configuration.GetSection("Api_dev")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeODUat")["mysqlcon"].ToString();
                    _configuration.GetSection("Api_uat")["api_url"] = _configuration.GetSection("odUat")["api_url"];
                }
                else
                {
                    _configuration.GetSection("Api_pro")["api_url"] = _configuration.GetSection("od")["api_url"];
                }
            }
            else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
            {
                dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
            }
            con = new MySqlConnection(dbstring);
            con.Open();
            MySqlCommand cmd = new MySqlCommand("Product_SUBCategory_List", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("in_Prodcat_code", prdcat_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            //return Json(dt);
            return JsonConvert.SerializeObject(dt);
        }
    }
}