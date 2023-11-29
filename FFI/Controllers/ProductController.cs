using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using FFI_Datamodel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class ProductController : Controller
    {
        string dbstring = "";
        // GET: Product
        public ActionResult ProductList()
        {
            return View();
        }
        public ActionResult ProductForm()
        {
            return View();
        }
        private IConfiguration _configuration;
        public ProductController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        private MySqlConnection con;
        string urlstring = "";

        [HttpPost]
        public JsonResult ProductListfetch([FromBody]Context context)
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
                string Urlcon = "ICDProduct/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("ICDProduct_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        #region list
        public class List
        {
            public int Out_product_rowid { get; set; }
            public string Out_product_catg_code { get; set; }
            public string Out_product_catg_desc { get; set; }
            public string Out_product_subcatg_code { get; set; }
            public string Out_product_subcatg_desc { get; set; }
            public string Out_product_code { get; set; }
            public string Out_product_name { get; set; }
            public string Out_product_tax_verified { get; set; }
            public string Out_gstrate_verified { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

            public string Out_base_price { get; set; }
            public string Out_ic_name { get; set; }

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
        [HttpPost]
        public ActionResult Productfetch([FromBody] FContext objContext)
        {
            FApplication objout = new FApplication();
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
                string Urlcon = "ICDProduct/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");               
                var response = client.PostAsync("ICDProduct_SingleFetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FApplication)JsonConvert.DeserializeObject(post_data, typeof(FApplication));
            }
            return Json(objout);
        }
        #region list fetch
        public class Detail
        {
            public int IOU_product_rowid { get; set; }
            public string In_orgn_code { get; set; }
            public string In_ic_code { get; set; }
            public string In_ic_name { get; set; }
            public int In_taxrate_rowid { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_catg_desc { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_subcatg_desc { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_description { get; set; }
            public float In_base_price { get; set; }
            public float In_base_price_extax { get; set; }
            public float In_base_price_intax { get; set; }
            public string In_productwithtax { get; set; }
            public string In_valuewithtax { get; set; }
            public string In_gstrate { get; set; }
            public float In_current_qty { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_uomtype_desc { get; set; }
            public string In_effective_from { get; set; }
            public string In_effective_to { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Detail Detail { get; set; }
            public int product_rowid { get; set; }
            

        }
        public class FApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class FApplication
        {
            public FContext context { get; set; }
            public FApplicationException ApplicationException { get; set; }

        }
        #endregion

        [HttpPost]
        public ActionResult ProductSave([FromBody] SContext objContext)
        {
            SApplication objRoot = new SApplication();
            Document objDoc = new Document();
            SContext objContextDetails = new SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Detail = objContext.Detail;

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
                string Urlcon = "ICDProduct/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("ICDProduct_Save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd(); 
            }
            return Json(post_data);
        }
        #region save
        public class SDetail
        {
            public int IOU_product_rowid { get; set; }
            public string In_orgn_code { get; set; }
            public string In_ic_code { get; set; }
            public int In_taxrate_rowid { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_code { get; set; }
            public int In_current_product { get; set; }
            public string In_hsn_code { get; set; }
            public string In_hsn_description { get; set; }
            public float In_base_price { get; set; }
           public float In_base_price_extax { get; set; }
            public float In_base_price_intax { get; set; }
            public string In_productwithtax { get; set; }
            public string In_valuewithtax { get; set; }
            public string In_gstrate { get; set; }
            public float In_current_qty { get; set; }
            public string In_uomtype_code { get; set; }
            public string In_effective_from { get; set; }
            public string In_effective_to { get; set; }
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
            public string In_product_name { get; set; }
            public string errorNo { get; set; }

        }
        public class SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SDetail Detail { get; set; }

        }
        public class Document
        {
            public SContext context { get; set; }
            public ICDProductSAApplicationException ApplicationException { get; set; }

        }
        public class SApplication
        {
            public Document document { get; set; }

        }
        public class ICDProductSAApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        #endregion
        //ICD center search
        public ActionResult lcdcenter_search(string In_agg_code,string module)
        {
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

            DataTable response = new DataTable();
            Helpdatamodel objproduct1 = new Helpdatamodel();
            response = objproduct1.lcdcentersearch(In_agg_code, module,dbstring);
            return Json(response);
        }

        public ActionResult lcdcenterinv_search(string In_agg_code, string module)
        {
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

            DataTable response = new DataTable();
            Helpdatamodel objproduct1 = new Helpdatamodel();
            response = objproduct1.lcdcentersearchinv(In_agg_code, module, dbstring);
            return Json(response);
        }

        public string GetProductTax(string hsn_code, string state_code)
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
            MySqlCommand cmd = new MySqlCommand("tax_product", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new MySqlParameter("In_Hsn_Code", hsn_code));
            cmd.Parameters.Add(new MySqlParameter("In_State_Code", state_code));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(dt);
            con.Close();
            return JsonConvert.SerializeObject(dt);
        }

    }
}