using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using FFI_Datamodel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace FFI.Controllers
{
    public class NotesController : Controller
    {
        //
        // GET: /Notes/
        public ActionResult Notes()
        {
            return View();
        }

        private readonly IWebHostEnvironment _webHostEnvironment;
        private IConfiguration _configuration;

        public NotesController(IWebHostEnvironment webHostEnvironment, IConfiguration configuration)
        {
            _webHostEnvironment = webHostEnvironment;
            _configuration = configuration;
        }
        public string file_name = "";
        string dbstring = "";
        [HttpPost]
        public string getNotes([FromBody]notes_model receive_data)
        {
            dynamic notes_list = new JObject();

            try
            {
                //if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
                //{
                //    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                //}
                //else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "bh")
                //{
                //    dbstring = _configuration.GetSection("dbtypeBA")["mysqlcon"].ToString();
                //}
                //else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
                //{
                //    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                //}
                //else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
                //{
                //    dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
                //}
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
                DataSet response = new DataSet();
                notes_datamodel objproduct1 = new notes_datamodel();
                response = objproduct1.fetch_notes(receive_data.menu_id, receive_data.doc_number, receive_data.doc_rowid, receive_data.orgnId, receive_data.locnid, receive_data.userId, dbstring);

                
               
                    notes_list.success = true;                   
                    notes_list.list = JsonConvert.SerializeObject(response.Tables[0]);
               
            }
            catch (Exception ex)
            {
                var execute = ex.Message.ToString();
                string exe = Common.Util.Html_Encode(execute);
                notes_list.msg = exe;
                notes_list.success = false;
            }

            return JsonConvert.SerializeObject(notes_list);
        }

        [HttpPost]
        public string saveNotes([FromBody]notes_model receive_data)
        {

            dynamic Notes_save_detail = new JObject();
            try
            {
                var user = receive_data.userId;               
                var Menu_Id = receive_data.menu_id;
                var Doc_Row_id = receive_data.doc_rowid;               
                var Doc_No = receive_data.doc_number;              
                var Notes = receive_data.notes;
                var orgnId = receive_data.orgnId;
                var localeid = receive_data.localeid;
                var userId = receive_data.userid;
                var locnId = receive_data.userid;
                var mode_flag = "I";
                //if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
                //{
                //    dbstring = _configuration.GetSection("dbtypeTA")["mysqlcon"].ToString();
                //}
                //else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "bh")
                //{
                //    dbstring = _configuration.GetSection("dbtypeBA")["mysqlcon"].ToString();
                //}
                //else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "od")
                //{
                //    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();
                //}
                //else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "up")
                //{
                //    dbstring = _configuration.GetSection("dbtypeUP")["mysqlcon"].ToString();
                //}
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
                DataSet response = new DataSet();
                notes_datamodel objproduct1 = new notes_datamodel();
                response = objproduct1.saveNotes(Menu_Id, Doc_Row_id, Doc_No, Notes,mode_flag, orgnId, locnId, userId, dbstring);
                
                    Notes_save_detail.success = true;
                    Notes_save_detail.msg = "Comments Details Saved Successfully..";
               
            }
            catch (Exception ex)
            {
                var execute = ex.Message.ToString();
                string exe = Common.Util.Html_Encode(execute);
                Notes_save_detail.msg = exe;
                Notes_save_detail.success = false;
            }

            return JsonConvert.SerializeObject(Notes_save_detail);
        }

        public class notes_model
        {
            public string userId { get; set; }
            public string menu_id { get; set; }
            public string doc_rowid { get; set; }
            public string doc_number { get; set; }
            public string notes { get; set; }
            public string mode_flag { get; set; }
            public string locnid { get; set; }
            public string userid { get; set; }
            public string localeid { get; set; }           
            public string orgnId { get; set; }
        }
    }
}