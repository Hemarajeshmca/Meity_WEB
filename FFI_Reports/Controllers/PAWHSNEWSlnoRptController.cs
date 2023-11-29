using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class PAWHSNEWSlnoRptController : Controller
    {
        private IConfiguration _configuration;
        public PAWHSNEWSlnoRptController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        public IActionResult PAWHSNEWSlnoRpt()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ActualProcurementslnofetch([FromBody] PAWHSActualProcurment_SlnoFetchContext objContext)
        {
            PAWHSActualProcurmentSlnoFetchApplication objout = new PAWHSActualProcurmentSlnoFetchApplication();
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
                string Urlcon = "NewPawhsActulProcurment/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("ActualPro_Slno_List", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSActualProcurmentSlnoFetchApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSActualProcurmentSlnoFetchApplication));
            }
            return Json(objout);
        }
        public class PAWHSActualProcurmentSlnoFetchApplication
        {

            public PAWHSActualProcurment_SlnoFetchContext context { get; set; }

        }
        public class PAWHSActualProcurment_SlnoFetchContext
        {

            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }

            public string In_slno { get; set; }
            public IList<PAWHSActualProcurment_Fetch_SlnoLotDt> SlnoLotDetail { get; set; }
        }
        public class PAWHSActualProcurment_Fetch_SlnoLotDt
        {
            public int Out_act_rowid { get; set; }
            public string Out_lotno { get; set; }
            public string Out_farmer_code { get; set; }
            public string Out_farmer_name { get; set; }
            public string Out_item_code { get; set; }
            public string Out_item_name { get; set; }
            public double Out_actual_qty { get; set; }
            public double Out_actual_price { get; set; }
            public double Out_actual_value { get; set; }
            public int Out_no_of_bags { get; set; }
        }
    }
}