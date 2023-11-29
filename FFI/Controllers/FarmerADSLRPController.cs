using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class FarmerADSLRPController : Controller
    {
        private IConfiguration _configuration;
        private MySqlConnection con;
        string urlstring = "";
        string dbstring = "";
        public FarmerADSLRPController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IActionResult FarmerADSLRP()
        {
            return View();
        }
        [HttpPost]
        public string LoadLRPBasedADS()
        {
            DataTable dt = new DataTable();
            try
            {
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
                MySqlCommand cmd = new MySqlCommand("Report_FarmerLRPWiseCount", con);
                cmd.CommandType = CommandType.StoredProcedure;
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
            }
            catch (Exception ex)
            {

            }
            return JsonConvert.SerializeObject(dt);
        }
    }
}
