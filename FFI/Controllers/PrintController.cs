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
using Microsoft.AspNetCore.Hosting;
using MySql.Data.MySqlClient;
using iTextSharp.text;
using iTextSharp.text.pdf;
using Microsoft.AspNetCore.Http;
using Box2DX.Dynamics;
using Grpc.Core;
using Newtonsoft.Json.Linq;

namespace FFI.Controllers
{
    public class PrintController : Controller
    {
        // GET: Print
        public ActionResult Print()
        {
            return View();

        }
        public ActionResult PrintCerificate()
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
            XmlNodeList RoleNodeList = XmlGetLoad.SelectNodes("/root/print");
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
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        string dbstring = "";
        dynamic excel_msg = new JObject();

        public PrintController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult Printfetch([FromBody] Context context)
        {
            Application objList = new Application();
            string post_data = "";
            if (context.share_certificate != null)
            {
                HttpContext.Session.SetString("certificatetype", context.share_certificate);
                HttpContext.Session.SetString("orgId", context.orgnId);
                HttpContext.Session.SetString("locnId", context.locnId);
                HttpContext.Session.SetString("userId", context.userId);
                HttpContext.Session.SetString("localeId", context.localeId);

            }
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
                string Urlcon = "FISPrintShareCertificate/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                //client.BaseAddress = new Uri("http://localhost:60695/api/FISPrintShareCertificate/");
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISPrintShareCertificate/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("sharecertificate_print", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));

            }
            return Json(objList);
        }
        public ActionResult PrintSave([FromBody] Contextsave objContextprint)
        {
            Applicationsave objRootPrint = new Applicationsave();
            Documentsave objDocPrint = new Documentsave();
            Contextsave objContextDetailsPrint = new Contextsave();
            objContextDetailsPrint.userId = objContextprint.userId;
            objContextDetailsPrint.locnId = objContextprint.locnId;
            objContextDetailsPrint.localeId = objContextprint.localeId;
            objContextDetailsPrint.orgnId = objContextprint.orgnId;
            objContextDetailsPrint.Detail = objContextprint.Detail;
            objContextDetailsPrint.Header = objContextprint.Header;

            objDocPrint.context = objContextDetailsPrint;
            objRootPrint.document = objDocPrint;
            if(objContextprint.Detail.In_certificate_no != null || objContextprint.Detail.In_certificate_no !="")
            {
                HttpContext.Session.SetString("in_certificate_no", objContextprint.Detail.In_certificate_no);
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
                string Urlcon = "FISPrintShareCertificate/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
               //client.BaseAddress = new Uri("http://localhost:60695/api/FISPrintShareCertificate/");
               // client.BaseAddress = new Uri("http://169.38.77.190:101/api/FISPrintShareCertificate/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRootPrint), UTF8Encoding.UTF8, "application/json");
                //var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("newShareCertificatePrint", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }

        #region fetch
        public class Detail
        {
            public int In_register_rowid { get; set; }
            public string In_register_date { get; set; }
            public string In_register_no { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_member_name { get; set; }
            public string In_certificate_no { get; set; }
            public string In_folio_no { get; set; }
            public int In_applied_shares { get; set; }
            public int In_approved_shares { get; set; }
            public int In_rejected_shares { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }

        }
        public class Register_History
        {
            public int In_register_rowid { get; set; }
            public string In_register_no { get; set; }
            public string In_certificate_no { get; set; }
            public string In_printed_date { get; set; }
            public string In_register_date { get; set; }

        }
        public class Header
        {
            public string In_printeddate { get; set; }
            public IList<Detail> Detail { get; set; }
            public IList<Register_History> Register_History { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }
            public string share_certificate { get; set; }
            public string fpoorgn_code { get; set; }

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

        #region save
        public class Headersave
        {
            public string IOU_share_certificate { get; set; }
            public string IOU_fpoorgn_code { get; set; }
            public string In_printeddate { get; set; }

        }
        public class Detailsave
        {
            public int In_register_rowid { get; set; }
            public string In_register_no { get; set; }
            public string In_farmer_code { get; set; }
            public string In_fpomember_code { get; set; }
            public string In_certificate_no { get; set; }
            public int In_applied_shares { get; set; }
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
            public Header Header { get; set; }
          //  public IList<Detail> Detail { get; set; }
          public Detail Detail { get; set; }

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
        //Code Introduced by venkat start 12-07-2020
        [HttpPost]
        public string Getpdf()
        {
            var sptver = "Share Certificate";
            var file_ext = ".pdf";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string folderName = "DownloadXLFiles";
            string fileLocation = Path.Combine(webRootPath, folderName);

            //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
            Guid guid = Guid.NewGuid();
            //string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + "_" + guid + file_ext);
            string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + file_ext);
            //string path = Path.Combine(fileLocation, sptver + "_" + guid + file_ext);
            string path = Path.Combine(fileLocation, sptver + file_ext);

            if (System.IO.File.Exists(path))
            {

                System.IO.File.Delete(path);
            }

            // string contentType = "application/pdf";

            exportpdf(path);
            //byte[] filecontent = exportpdf();
            //string filename = "Sample_PDF_" + DateTime.Now.ToString("MMddyyyyhhmmss") + ".pdf";
            // return File(filecontent, contentType, path);

            excel_msg.path = Clientpath;
            return JsonConvert.SerializeObject(excel_msg);

        }
        private void exportpdf(string path)
        {
            try { 

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
            DataSet table_data = new DataSet();
            DataTable temp = new DataTable();
            con = new MySqlConnection(dbstring);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("FIS_report_certificate_print", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("in_certificate_type", HttpContext.Session.GetString("certificatetype"));
            cmd.Parameters.AddWithValue("in_orgnId", HttpContext.Session.GetString("orgId"));
            cmd.Parameters.AddWithValue("in_locnId", HttpContext.Session.GetString("locnId"));
            cmd.Parameters.AddWithValue("in_userId", HttpContext.Session.GetString("userId"));
            cmd.Parameters.AddWithValue("in_localeId", HttpContext.Session.GetString("localeId"));
            cmd.Parameters.AddWithValue("in_certificate_no", HttpContext.Session.GetString("in_certificate_no"));
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(table_data);
            con.Close();
            // DataSet table_data = JsonConvert.DeserializeObject<DataSet>(HttpContext.Session.GetString("dtDownload"));
            // creating document object
            //System.IO.MemoryStream ms = new System.IO.MemoryStream();
            byte[] result = { };

            for (int k = 0; k < table_data.Tables[0].Rows.Count; k++)
            {
                System.IO.MemoryStream ms = new System.IO.MemoryStream();
                iTextSharp.text.Rectangle rec = new iTextSharp.text.Rectangle(PageSize.A4);
                rec.BackgroundColor = new BaseColor(System.Drawing.Color.Olive);
                Document doc = new Document(rec);
                doc.SetPageSize(iTextSharp.text.PageSize.A4);
                PdfWriter writer = PdfWriter.GetInstance(doc, new FileStream(path, FileMode.Create));
                doc.NewPage();
                doc.Open();


                //Creating paragraph for header
                //Add border to page
                PdfContentByte content = writer.DirectContent;
                iTextSharp.text.Rectangle rectangle = new iTextSharp.text.Rectangle(doc.PageSize);
                //customized border sizes
                rectangle.Left += doc.LeftMargin - 5;
                rectangle.Right -= doc.RightMargin - 5;
                rectangle.Top -= doc.TopMargin - 5;
                rectangle.Bottom += doc.BottomMargin - 5;
                content.SetColorStroke(BaseColor.BLACK); // setting the color of the border to black
                content.Rectangle(rectangle.Left, rectangle.Bottom, rectangle.Width, rectangle.Height);
                content.Stroke();
                //create a New Paragraph
                iTextSharp.text.Font mainFont = new iTextSharp.text.Font();
                iTextSharp.text.Font boldFont = new iTextSharp.text.Font();
                boldFont = FontFactory.GetFont("Arial", 12, iTextSharp.text.Font.BOLD);
                iTextSharp.text.Font NormalFont = iTextSharp.text.FontFactory.GetFont("Arial", 12, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);
                iTextSharp.text.Font NormalFont1 = iTextSharp.text.FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);

                Paragraph prgGeneratedBY = new Paragraph();
                BaseFont btnAuthor = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                iTextSharp.text.Font fntAuthor = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
                prgGeneratedBY.Alignment = Element.ALIGN_RIGHT;
                prgGeneratedBY.Add(new Chunk("Form No. SH-1 ", boldFont));
                doc.Add(prgGeneratedBY);
                Paragraph prgHeading = new Paragraph();
                prgHeading.Alignment = Element.ALIGN_CENTER;
                prgHeading.Add(new Chunk("\n" + table_data.Tables[0].Rows[k]["orgnname"], boldFont));
                prgHeading.Add(new Chunk("\n(Incorporated Under Companies Act, 1956 / 2013)", boldFont));
                prgHeading.Add(new Chunk("\nRegistered Office :" + table_data.Tables[0].Rows[k]["Addrs"], boldFont));
                prgHeading.Add(new Chunk("\n", boldFont));
                prgHeading.Add(new Chunk("\nCIN NO : " + table_data.Tables[0].Rows[k]["cin_no"], boldFont));
                prgHeading.Add(new Chunk("\n", boldFont));
                prgHeading.Add(new Chunk("\nSHARE CERTIFICATE ", boldFont));
                doc.Add(prgHeading);
                Paragraph prgGeneratedBY2 = new Paragraph();
                BaseFont btnAuthor2 = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                iTextSharp.text.Font fntAuthor2 = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
                prgGeneratedBY2.Alignment = Element.ALIGN_CENTER;
                prgGeneratedBY2.Add(new Chunk("\nTHIS IS TO CERTIFY that the person named in this Certificate is/are the Registered", NormalFont));
                prgGeneratedBY2.Add(new Chunk("\nHolder of the mentioned share(s) bearing the distinctive number(s) herein specified", NormalFont));
                prgGeneratedBY2.Add(new Chunk("\n    in the above named Company subject to the Memorandum and Articles of Association", NormalFont));
                prgGeneratedBY2.Add(new Chunk("\n  of the Company and the amount endorsed herein has been paid on each such share.", NormalFont));
                doc.Add(prgGeneratedBY2);
                doc.Add(new Chunk("\n", NormalFont));
                doc.Add(new Chunk("\n", NormalFont));
                Paragraph prgGeneratedBY3 = new Paragraph();
                BaseFont btnAuthor3 = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                iTextSharp.text.Font fntAuthor3 = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
                prgGeneratedBY3.Alignment = Element.ALIGN_CENTER;
                prgGeneratedBY3.Add(new Chunk("\nFACE VALUE PER EQUITY SHARE : Rs" + table_data.Tables[0].Rows[k]["share_price"] + "/-", boldFont));
                prgGeneratedBY3.Add(new Chunk("\n", fntAuthor3));
                prgGeneratedBY3.Add(new Chunk("\nPAID-UP VALUE PER EQUITY SHARE : Rs" + table_data.Tables[0].Rows[k]["share_price"] + "/-", boldFont));
                doc.Add(prgGeneratedBY3);
                doc.Add(new Chunk("\n", NormalFont));
                doc.Add(new Chunk("\n                                                   Register Folio No        :  "+ table_data.Tables[0].Rows[k]["folio_no"], NormalFont));
                doc.Add(new Chunk("\n", NormalFont));
                doc.Add(new Chunk("\n                                                   Certificate No              : " + table_data.Tables[0].Rows[k]["certificate_no"], NormalFont));
                doc.Add(new Chunk("\n", NormalFont));
                doc.Add(new Chunk("\n                                                   Name of the Holder    : "  + table_data.Tables[0].Rows[k]["farmer_name"], NormalFont));
                doc.Add(new Chunk("\n", NormalFont));
                doc.Add(new Chunk("\n                                                   No. of shares held      : "  + table_data.Tables[0].Rows[k]["totalshares"], NormalFont));
                doc.Add(new Chunk("\n", NormalFont));
                doc.Add(new Chunk("\n                                                   Distinctive Number(s) : " + table_data.Tables[0].Rows[k]["distfromto"], NormalFont));
                doc.Add(new Chunk("\n", NormalFont));
                doc.Add(new Chunk("\n                                Given under the common seal of the company this " + table_data.Tables[0].Rows[k]["printmonthdate"] + " day Of " + table_data.Tables[0].Rows[k]["printyear"], NormalFont));
                Paragraph prgGeneratedBY1 = new Paragraph();
                BaseFont btnAuthor1 = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                iTextSharp.text.Font fntAuthor1 = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
                prgGeneratedBY1.Alignment = Element.ALIGN_RIGHT;
                prgGeneratedBY1.Add(new Chunk("\nDIRECTOR", boldFont));
                prgGeneratedBY1.Add(new Chunk("\n", boldFont));
                prgGeneratedBY1.Add(new Chunk("\n", boldFont));
                prgGeneratedBY1.Add(new Chunk("\nDIRECTOR", boldFont));
                prgGeneratedBY1.Add(new Chunk("\n", boldFont));
                prgGeneratedBY1.Add(new Chunk("\n", boldFont));
                prgGeneratedBY1.Add(new Chunk("\nAUTHORISED SIGNATORY", boldFont));
                doc.Add(prgGeneratedBY1);
                doc.Add(new Chunk("\n", boldFont));
                doc.Add(new Chunk("\n", boldFont));
                doc.Add(new Chunk("\n                 No transfer of the share(s) compromised in the certificate can be registered unless accompanied by this certificate.", NormalFont1));
                doc.Close();
                result = ms.ToArray();
            }
        }
            catch(Exception ex)
            {
                throw ex;
            }
           // return result;
        }

        //End
    }
}