using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using System.Data;
using FFI_Datamodel;
using System.IO;
using GemBox.Spreadsheet;

namespace FFI.Controllers
{
    public class FileAttachmentController : Controller
    {
        //
        // GET: /FileAttachment/
        public ActionResult FileAttach()
        {
            return View();
        }
        private readonly IWebHostEnvironment _webHostEnvironment;
        private IConfiguration _configuration;
        private IHostingEnvironment _hostingEnvironment;
  log4net.ILog logger = log4net.LogManager.GetLogger(typeof(FileAttachmentController));

        public FileAttachmentController(IWebHostEnvironment webHostEnvironment, IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
            _hostingEnvironment = hostingEnvironment;
            _configuration = configuration;
        }
        public string file_name = "";
        string dbstring = "";
        [HttpPost]
        public string file_load(IFormFile upFiles, string formval, string name)
        {
            dynamic form_val = JObject.Parse(formval);
            dynamic Doc_save_detail = new JObject();


            string fileExtension = "";
            string fileLocation = "";
            dynamic file_detail = new JObject();
            //if (ConfigurationManager.AppSettings.Count > 0)
            //{
            //    ipAddress = ConfigurationManager.AppSettings["helpUrl"].ToString();
            //    string[] fileArr = ipAddress.Split(new string[] { "help" }, StringSplitOptions.None);
            //    ipAddress = fileArr[0].ToString();
            //}
            if (upFiles != null && upFiles.Length > 0)
            {
                if (upFiles.Length > 0)
                {
                    string webRootPath = _hostingEnvironment.WebRootPath;
                    fileExtension = System.IO.Path.GetExtension(upFiles.FileName);
                    // fileLocation = webRootPath + "/Attachment/" + name + fileExtension;
		fileLocation = "/var/www/" + "/upproattachments/" + name + fileExtension;
                    if (System.IO.File.Exists(fileLocation))
                    {
                        System.IO.File.Delete(fileLocation);
                    }
                    upFiles.CopyTo(new FileStream(fileLocation, FileMode.Create));

                }
            }

            string file_path = fileLocation;
            Doc_save_detail.result = file_path;

            return JsonConvert.SerializeObject(Doc_save_detail);

        }
        [HttpPost]
        public string Excel_Template(string template_name)
        {
           
            dynamic tmp_rpt = new JObject();
            try
            {
                string webRootPath = _webHostEnvironment.WebRootPath;
                string contentRootPath = _webHostEnvironment.ContentRootPath;
                string folderName = "attachment";
                string fileLocation = Path.Combine(webRootPath, folderName);

                //string Clientpath = Path.Combine("/Attachment/" + template_name+ "");
                string Clientpath =Path.Combine("/var/www/upproattachments/" + template_name + "");
               string path = Path.Combine(fileLocation + template_name + "");
                // string fileLocation = Server.MapPath("~/uploadedXLFiles/" + template_name + ".xls" + "");


                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }

                //workbook.Save(fileLocation);

                //string ipAddress = _configuration.GetSection("AppSettings")["helpUrl"].ToString();
                //string[] fileArr = ipAddress.Split(new string[] { "help" }, StringSplitOptions.None);
                //ipAddress = fileArr[0].ToString();
                //tmp_rpt.path = ipAddress + "/uploadedXLFiles/" + template_name + ".xls";
                tmp_rpt.path = Clientpath;
            }
            catch (Exception ex)
            {
                tmp_rpt.msg = ex.Message.ToString();
            }
            return JsonConvert.SerializeObject(tmp_rpt);
        }  
        public FileResult Download(string template_name)
        {
            
            string webRootPath = _webHostEnvironment.WebRootPath;
            string contentRootPath = _webHostEnvironment.ContentRootPath;
            string folderName = "Attachment";
            string fileLocation = Path.Combine(webRootPath, folderName);

            string Clientpath = Path.Combine("/Attachment/" + template_name + "");
            string path = Path.Combine("/var/www/upproattachments/" + template_name + "");
           
            byte[] fileBytes = System.IO.File.ReadAllBytes(path);
           
            string fileName = template_name;
            string contenttype = GetContentType(fileName);
            
            return File(fileBytes, contenttype, fileName);
        }
        private string GetContentType(string path)
        {
            var types = GetMimeTypes();
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return types[ext];
        }

        private Dictionary<string, string> GetMimeTypes()
        {
            return new Dictionary<string, string>
            {
                {".txt", "text/plain"},
                {".pdf", "application/pdf"},
                {".doc", "application/vnd.ms-word"},
                {".docx", "application/vnd.ms-word"},
                {".xls", "application/vnd.ms-excel"},
                {".xlsx", "application/vnd.openxmlformats officedocument.spreadsheetml.sheet"},  
                {".png", "image/png"},
                {".jpg", "image/jpeg"},
                {".jpeg", "image/jpeg"},
                {".gif", "image/gif"},
                {".csv", "text/csv"}
            };
        }

        #region attachment model
        public class receiveData
        {
            public string Doc_Type { get; set; }
            public int Doc_No { get; set; }
            public string locnid { get; set; }
            public string userid { get; set; }
            public string localeid { get; set; }
            public string screen_id { get; set; }
            public string orgnId { get; set; }
        }
        #endregion
        [HttpPost]
        public string fetch_docAttach([FromBody] receiveData receiveData)
        {

            dynamic get_doc_det = new JObject();
            try
            {
                var orgnId = receiveData.orgnId;
                var localeid = receiveData.localeid;
                var userId = receiveData.userid;
                var locnId = receiveData.userid;
                var doc_type = receiveData.Doc_Type;
                int Doc_row_id = receiveData.Doc_No;
                var menu_id = receiveData.screen_id;
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
                attachment_datamodel objproduct1 = new attachment_datamodel();
                response = objproduct1.fetch_list_attach(menu_id, doc_type, Doc_row_id, orgnId, locnId, userId, dbstring);

                get_doc_det.filelist = JsonConvert.SerializeObject(response.Tables[0]);
                get_doc_det.success = true;

            }
            catch (Exception ex)
            {
                get_doc_det.msg = ex.Message;
                get_doc_det.success = false;
            }
            return JsonConvert.SerializeObject(get_doc_det); ;
        }


        [HttpPost]
        public string delete_docAttach([FromBody]  formval form_val)
        {

            dynamic Doc_save_detail = new JObject();
            try
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
                var doc_number = form_val.id;
                var menu_id = form_val.menu_id;
                var doc_rowid = Convert.ToInt16(form_val.doc_row_id);
                var filename = form_val.filename;
                var file_version = form_val.Version;
                var attach_rowid = form_val.seq_no;
                var file_size = form_val.Size;
                var attach_group_code = form_val.attr_group;
                var attach_subgroup_code = form_val.attr_subgroup;
                var notes = form_val.Remarks;
                var file_path = form_val.file_path;
                var mode_flag = "D";
                var orgnId = form_val.orgnId;
                var localeid = form_val.localeid;
                var userId = form_val.userid;
                var locnId = form_val.locnid;
                if (mode_flag == "D")
                {
                    file_path = form_val.filename;
                }
                DataSet response = new DataSet();
                attachment_datamodel objproduct1 = new attachment_datamodel();
                response = objproduct1.saveDocAttachment(doc_number, menu_id, doc_rowid, filename, file_version, attach_rowid, file_size, attach_group_code, attach_subgroup_code, notes, file_path, mode_flag, orgnId, locnId, userId, dbstring);

                Doc_save_detail.success = true;

                if (mode_flag == "D")
                {
                    Doc_save_detail.msg = "Doc Attachment Deleted Successfully..";
                }
                else
                {
                    Doc_save_detail.msg = "Doc Attachment Saved Successfully..";
                }
                //if (response.Tables[0].Rows.Count == 0)
                //{


                //}
                //else
                //{
                //    string errmsg = response.Tables[0].Rows[0].ToString();
                //    string encoded_msg = Common.Util.Html_Encode(errmsg);
                //    throw new Exception(encoded_msg);
                //}
            }
            catch (Exception ex)
            {
                Doc_save_detail.msg = ex.Message;
                Doc_save_detail.success = false;
            }

            return JsonConvert.SerializeObject(Doc_save_detail);
        }
        //}
        #region save model

        public class formval
        {
            public int doc_row_id { get; set; }
            public string id { get; set; }
            public string locnid { get; set; }
            public string userid { get; set; }
            public string localeid { get; set; }
            public string menu_id { get; set; }
            public string orgnId { get; set; }
            public string filename { get; set; }
            public string Version { get; set; }
            public string seq_no { get; set; }
            public string Size { get; set; }
            public string attr_group { get; set; }
            public string attr_subgroup { get; set; }
            public string Remarks { get; set; }
            public string file_path { get; set; }
            public string mode_flag { get; set; }
        }
        #endregion

        [HttpPost]
        public string save_docAttach([FromBody]  formval form_val)
        {

            dynamic Doc_save_detail = new JObject();
            try
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
                var doc_number = form_val.id;
                var menu_id = form_val.menu_id;
                var doc_rowid = Convert.ToInt16(form_val.doc_row_id);
                var filename = form_val.filename;
                var file_version = form_val.Version;
                var attach_rowid = form_val.seq_no;
                var file_size = form_val.Size;
                var attach_group_code = form_val.attr_group;
                var attach_subgroup_code = form_val.attr_subgroup;
                var notes = form_val.Remarks;
                var file_path = form_val.file_path;
                var mode_flag = form_val.mode_flag;
                var orgnId = form_val.orgnId;
                var localeid = form_val.localeid;
                var userId = form_val.userid;
                var locnId = form_val.locnid;
                if (mode_flag == "D")
                {
                    file_path = form_val.filename;
                }
                DataSet response = new DataSet();
                attachment_datamodel objproduct1 = new attachment_datamodel();
                response = objproduct1.saveDocAttachment(doc_number, menu_id, doc_rowid, filename, file_version, attach_rowid, file_size, attach_group_code, attach_subgroup_code, notes, file_path, mode_flag, orgnId, locnId, userId, dbstring);

                Doc_save_detail.success = true;

                if (mode_flag == "D")
                {
                    Doc_save_detail.msg = "Doc Attachment Deleted Successfully..";
                }
                else
                {
                    Doc_save_detail.msg = "Doc Attachment Saved Successfully..";
                }

                //if (response.Tables[0].Rows.Count == 0)
                //{
                    

                //}
                //else
                //{
                //    string errmsg = response.Tables[0].Rows[0].ToString();
                //    string encoded_msg = Common.Util.Html_Encode(errmsg);
                //    throw new Exception(encoded_msg);
                //}
            }
            catch (Exception ex)
            {
                Doc_save_detail.msg = ex.Message;
                Doc_save_detail.success = false;
            }

            return JsonConvert.SerializeObject(Doc_save_detail);
        }
    }
}