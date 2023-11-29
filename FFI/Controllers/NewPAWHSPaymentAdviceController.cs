using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System.Web;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.Drawing;


namespace FFI.Controllers
{
    public class NewPAWHSPaymentAdviceController : Controller
    {
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        string dbstring = "";
        private IConfiguration _configuration;
        public NewPAWHSPaymentAdviceController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        public IActionResult NewPAWHSPaymentAdviceList()
        {
            return View();
        }
        public IActionResult NewPAWHSPaymentAdviceForm()
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
      
        string urlstring = "";
        [HttpPost]
        public ActionResult NEWPAWHSPaymentAdviceListfetch([FromBody]PAWHS_New_PaymentAdvice_ALL_Context context)
        {
            PAWHS_New_PaymentAdvice_List_Application objList = new PAWHS_New_PaymentAdvice_List_Application();
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
                string Urlcon = "PAWHS_New_PaymentAdvice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("pawhs_new_paymentadvice_list", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PAWHS_New_PaymentAdvice_List_Application)JsonConvert.DeserializeObject(post_data, typeof(PAWHS_New_PaymentAdvice_List_Application));

            }
            return Json(objList);
        }
        [HttpPost]
        public ActionResult NEWPAWHSPaymentAdviceFetch([FromBody]PAWHS_New_PaymentAdvice_Single_FContext objcontext)
        {
            PAWHS_New_PaymentAdvice_Single_FApplication objfetch = new PAWHS_New_PaymentAdvice_Single_FApplication();
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
                string Urlcon = "PAWHS_New_PaymentAdvice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objcontext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("PAWHS_New_PaymentAdvice_Single", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (PAWHS_New_PaymentAdvice_Single_FApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHS_New_PaymentAdvice_Single_FApplication));
            }
            return Json(objfetch);
        }
        public ActionResult NEWPAWHSPaymentAdviceLoad([FromBody]PAWHS_New_PaymentAdvice_fetchgrid_FContext objcontext)
        {
            PAWHS_New_PaymentAdvice_fetchgrid_FApplication objfetch = new PAWHS_New_PaymentAdvice_fetchgrid_FApplication();
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
                string Urlcon = "PAWHS_New_PaymentAdvice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objcontext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("PAWHS_New_PaymentAdvice_Fetch_Gridvalue", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objfetch = (PAWHS_New_PaymentAdvice_fetchgrid_FApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHS_New_PaymentAdvice_fetchgrid_FApplication));
            }
            return Json(objfetch);
        }
        public ActionResult SavePAWHSNewPaymentAdvice([FromBody] PAWHS_New_PaymentAdvice_SContext objContext)
        {

            PAWHS_New_PaymentAdvice_SApplication objRoot = new PAWHS_New_PaymentAdvice_SApplication();
            PAWHS_New_PaymentAdvice_SDocument objDoc = new PAWHS_New_PaymentAdvice_SDocument();
            PAWHS_New_PaymentAdvice_SContext objContextDetails = new PAWHS_New_PaymentAdvice_SContext();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;
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
                string Urlcon = "PAWHS_New_PaymentAdvice/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("PAWHS_New_PaymentAdvice_Save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (PAWHS_New_PaymentAdvice_SDocument)JsonConvert.DeserializeObject(post_data, typeof(PAWHS_New_PaymentAdvice_SDocument));
                HttpContext.Session.SetString("orgnId", objContext.orgnId);
                HttpContext.Session.SetString("locnId", objContext.locnId);
                HttpContext.Session.SetString("userId", objContext.userId);
                HttpContext.Session.SetString("localeId", objContext.localeId);
                HttpContext.Session.SetInt32("IOU_payment_rowid", objDoc.context.Header.IOU_payment_rowid);
                HttpContext.Session.SetString("IOU_payment_no1", objDoc.context.Header.IOU_payment_no);
            }
            return Json(post_data);
        }
        public ActionResult downloadpdf()
        {
            var sptver = "PaymentAdvice";
            var file_ext = ".pdf";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string folderName = "DownloadXLFiles";
            string fileLocation = Path.Combine(webRootPath, folderName);

            //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
            string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + file_ext);
            string path = Path.Combine(fileLocation, sptver + file_ext);

            if (System.IO.File.Exists(path))
            {

                System.IO.File.Delete(path);
            }

            string contentType = "application/pdf";

            byte[] filecontent = exportpdf();
            string filename = "Payment_Advice_" + DateTime.Now.ToString("MMddyyyyhhmmss") + ".pdf";
            return File(filecontent, contentType, filename);
        }
        public byte[] exportpdf()
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
           

            DataSet table_data = new DataSet();
            DataTable temp = new DataTable();
            con = new MySqlConnection(dbstring);
            con.Open();
            string[] returnvalues = { };

            int patmentid = Convert.ToInt32(HttpContext.Session.GetInt32("IOU_payment_rowid"));
            string paymentno = HttpContext.Session.GetString("IOU_payment_no1");

            MySqlCommand cmd = new MySqlCommand("New_PAWHS_fetch_PaymentAdvice_Pdf", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("orgnId", HttpContext.Session.GetString("orgId"));
            cmd.Parameters.AddWithValue("locnId", HttpContext.Session.GetString("locnId"));
            cmd.Parameters.AddWithValue("userId", HttpContext.Session.GetString("userId"));
            cmd.Parameters.AddWithValue("localeId", HttpContext.Session.GetString("localeId"));
            cmd.Parameters.AddWithValue("IOU_payment_rowid", HttpContext.Session.GetInt32("IOU_payment_rowid"));
            cmd.Parameters.AddWithValue("IOU_payment_no", HttpContext.Session.GetString("IOU_payment_no1"));          
          
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(table_data);
            con.Close();

            var Account = table_data.Tables[0];
            var total = table_data.Tables[1];

            System.IO.MemoryStream ms = new System.IO.MemoryStream();
            iTextSharp.text.Rectangle rec = new iTextSharp.text.Rectangle(PageSize.A4);
            rec.BackgroundColor = new BaseColor(System.Drawing.Color.Olive);
            Document doc = new Document(rec);
            doc.SetPageSize(iTextSharp.text.PageSize.A4);
            PdfWriter writer = PdfWriter.GetInstance(doc, ms);
            doc.Open();
            PdfContentByte content = writer.DirectContent;
            iTextSharp.text.Rectangle rectangle = new iTextSharp.text.Rectangle(doc.PageSize);
            
            //Creating paragraph for header
            iTextSharp.text.Font mainFont = new iTextSharp.text.Font();
            iTextSharp.text.Font boldFont = new iTextSharp.text.Font();
            boldFont = FontFactory.GetFont("Arial", 12, iTextSharp.text.Font.BOLD);
            iTextSharp.text.Font NormalFont = iTextSharp.text.FontFactory.GetFont("Arial", 11, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font NormalFont1 = iTextSharp.text.FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font NormalFontheader = iTextSharp.text.FontFactory.GetFont("Arial", 14, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLUE);
            iTextSharp.text.Font NormalAnx = iTextSharp.text.FontFactory.GetFont("Arial", 12, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLUE);

            BaseFont bfntHead = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.EMBEDDED);
            iTextSharp.text.Font fntHead = new iTextSharp.text.Font(bfntHead, 9, 1, iTextSharp.text.BaseColor.BLACK);
            BaseFont bfntHead1 = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.EMBEDDED);
            iTextSharp.text.Font fntblack = new iTextSharp.text.Font(bfntHead1, 10, 1, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font fntblue = new iTextSharp.text.Font(bfntHead1, 10, 1, iTextSharp.text.BaseColor.BLUE);
            Paragraph prgHeading = new Paragraph();
            prgHeading.Alignment = Element.ALIGN_CENTER;
            prgHeading.Add(new Chunk("Payment Advice Covering Letter".ToUpper(), NormalFontheader));
            doc.Add(prgHeading);
          
            Paragraph prgGeneratedBY = new Paragraph();
            BaseFont btnAuthor = BaseFont.CreateFont(BaseFont.COURIER, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
            iTextSharp.text.Font fntAuthor = new iTextSharp.text.Font(btnAuthor, 10, 1, iTextSharp.text.BaseColor.BLACK);
            prgGeneratedBY.Alignment = Element.ALIGN_RIGHT;
            prgGeneratedBY.Add(new Chunk("Date : " + DateTime.Parse(DateTime.Now.ToShortDateString()).ToString("dd/MM/yyyy"), NormalFont));
            prgGeneratedBY.Add(new Chunk("\nMemo No : " + HttpContext.Session.GetString("IOU_payment_no1").ToUpper(), NormalFont));
            //prgGeneratedBY.Add(new Chunk("\nMemo No : PAYNO/00051", NormalFont));
            doc.Add(prgGeneratedBY);

            Paragraph prgtoaddr = new Paragraph();
            prgtoaddr.Alignment = Element.ALIGN_LEFT;
            prgtoaddr.Add(new Chunk("To " , NormalFont));
            prgtoaddr.Add(new Chunk("\n  The Branch Manager" , NormalFont));
            doc.Add(prgtoaddr);

            Paragraph prgtodear = new Paragraph();
            prgtodear.Alignment = Element.ALIGN_LEFT;
            prgtodear.Add(new Chunk("\n ", NormalFont)); 
            prgtodear.Add(new Chunk("\n ", NormalFont));
            prgtodear.Add(new Chunk(" Dear Sir/ Madam, ", NormalFont));           
            doc.Add(prgtodear);

            Paragraph prgtosub = new Paragraph();
            prgtosub.Alignment = Element.ALIGN_CENTER;
            prgtosub.Add(new Chunk("\n ", NormalFont));         
            prgtosub.Add(new Chunk("Sub: Produce Aggregation Payment ", NormalFont));
            doc.Add(prgtosub);

            Paragraph prgtodetails = new Paragraph();
            prgtodetails.Alignment = Element.ALIGN_LEFT;
            prgtodetails.Add(new Chunk("\n ", NormalFont));           
            prgtodetails.Add(new Chunk("We would like to make payment for Produce Aggregation.Please debit our account no. "+Account.Rows[0]["Account No"]+" ", NormalFont));
            prgtodetails.Add(new Chunk("for a total sum of Rs. " + total.Rows[0]["Amount"] + "  and credit the Farmer accounts as per the annexure attached. ", NormalFont));
            prgtodetails.Add(new Chunk("\n ", NormalFont));
            prgtodetails.Add(new Chunk("\nWe certify that the account numbers, amount and names of the beneficiaries mentioned in the annexure and the soft copy are same and the Bank will not be responsible for any mismatch between the hard copy and the data in the soft copy and/ or any error in credit arising out of such mismatch ", NormalFont));
            prgtodetails.Add(new Chunk("\n ", NormalFont));
            prgtodetails.Add(new Chunk("\nThanking You, ", NormalFont));
            prgtodetails.Add(new Chunk("\n ", NormalFont));
            prgtodetails.Add(new Chunk("\nYours faithfully, ", NormalFont));
            doc.Add(prgtodetails);
            doc.Add(new Chunk(new iTextSharp.text.pdf.draw.LineSeparator(0.0F, 101.0F, iTextSharp.text.BaseColor.BLACK, Element.ALIGN_LEFT, 1)));

            Paragraph prgAnx = new Paragraph();
            prgAnx.Alignment = Element.ALIGN_CENTER;
            prgAnx.Add(new Chunk("Annexure", NormalAnx));          
            doc.Add(prgAnx);
            doc.Add(new Chunk("\n ", NormalFont));

            PdfPTable tabledata = new PdfPTable(7);
            tabledata.WidthPercentage = 100;
            int[] tabledataCellWidth1 = {5,20,23,13,24,20,20 };
            tabledata.SetWidths(tabledataCellWidth1);


            tabledata.AddCell(new PdfPCell(new Phrase("Sl.", NormalFont1)) { BackgroundColor = BaseColor.LIGHT_GRAY });
            tabledata.AddCell(new PdfPCell(new Phrase("Beneficiary Name", NormalFont1)) { HorizontalAlignment = Element.ALIGN_CENTER, BackgroundColor = BaseColor.LIGHT_GRAY });
            tabledata.AddCell(new PdfPCell(new Phrase("Bank Name", NormalFont1)) { HorizontalAlignment = Element.ALIGN_CENTER, BackgroundColor = BaseColor.LIGHT_GRAY });
            tabledata.AddCell(new PdfPCell(new Phrase("Account Type", NormalFont1)) { HorizontalAlignment = Element.ALIGN_CENTER, BackgroundColor = BaseColor.LIGHT_GRAY });
            tabledata.AddCell(new PdfPCell(new Phrase("Account No", NormalFont1)) { HorizontalAlignment = Element.ALIGN_CENTER, BackgroundColor = BaseColor.LIGHT_GRAY });
            tabledata.AddCell(new PdfPCell(new Phrase("IFSC", NormalFont1)) { HorizontalAlignment = Element.ALIGN_CENTER, BackgroundColor = BaseColor.LIGHT_GRAY });
            tabledata.AddCell(new PdfPCell(new Phrase("Amount", NormalFont1)) { HorizontalAlignment = Element.ALIGN_CENTER, BackgroundColor = BaseColor.LIGHT_GRAY });

            for (int rows = 0; rows < Account.Rows.Count; rows++)
            {
            
                tabledata.AddCell(new PdfPCell(new Phrase(new Chunk((rows + 1).ToString()))));
                tabledata.AddCell(new PdfPCell(new Phrase(Account.Rows[rows]["Beneficiary Name"].ToString(), NormalFont1)));
                tabledata.AddCell(new PdfPCell(new Phrase(Account.Rows[rows]["Bank Name"].ToString(), NormalFont1)));
                tabledata.AddCell(new PdfPCell(new Phrase(Account.Rows[rows]["Account Type"].ToString(), NormalFont1)));
                tabledata.AddCell(new PdfPCell(new Phrase(Account.Rows[rows]["Account No"].ToString(), NormalFont1)));
                tabledata.AddCell(new PdfPCell(new Phrase(Account.Rows[rows]["IFSC "].ToString(), NormalFont1)));
                tabledata.AddCell(new PdfPCell(new Phrase(Account.Rows[rows]["Amount"].ToString(), NormalFont1)) { HorizontalAlignment = Element.ALIGN_RIGHT });

            }
            doc.Add(tabledata);
            //PdfPTable table = new PdfPTable(table_data.Tables[0].Columns.Count);
            ////table.HorizontalAlignment = Element.ALIGN_LEFT;
            //table.DefaultCell.FixedHeight = 30f;
            //float[] columnWidths = new float[table_data.Tables[0].Columns.Count];

            //for (int i = 0; i < table_data.Tables[0].Columns.Count; i++)
            //{
            //    if (i == 0)
            //    {
            //        columnWidths[i] = 30f;

            //    }
            //    if (i == 1)
            //    {
            //        columnWidths[i] = 120f;
            //    }
            //    if (i == 2)
            //    {
            //        columnWidths[i] = 100f;
            //    }
            //    if (i == 3)
            //    {
            //        columnWidths[i] = 100f;
            //    }
            //    if (i == 4)
            //    {
            //        columnWidths[i] = 100f;
            //    }
            //    if (i == 5)
            //    {
            //        columnWidths[i] = 100f;
            //    }
            //    if (i == 6)
            //    {
            //        columnWidths[i] = 100f;
            //    }

            //    table.SetWidths(columnWidths);
            //    table.AddCell(table_data.Tables[0].Columns[i].ColumnName.ToString());




            //}
            ////  writing table Data

            //for (int i = 0; i < table_data.Tables[0].Rows.Count; i++)
            //{
            //    for (int j = 0; j < table_data.Tables[0].Columns.Count; j++)
            //    {
            //        if (j >= 6)
            //        {
            //            PdfPCell cell = new PdfPCell();
            //            cell.HorizontalAlignment = Element.ALIGN_RIGHT;
            //            cell.VerticalAlignment = Element.ALIGN_RIGHT;
            //            cell.Phrase = new Phrase(table_data.Tables[0].Rows[i][j].ToString());
            //            table.AddCell(cell);
            //        }
            //        else
            //        {
            //            table.AddCell(table_data.Tables[0].Rows[i][j].ToString());
            //        }
            //    }
            //}
          //  doc.Add(table);
            doc.Add(new Chunk("\n ", NormalFont));
            Paragraph p1 = new Paragraph();
            p1.Alignment = Element.ALIGN_RIGHT;
            p1.Add(new Chunk("\n Total Amount : Rs. "+ total.Rows[0]["Amount"]+" ", NormalFont));
            doc.Add(p1);

           

            doc.Close();
            byte[] result = ms.ToArray();
            return result;
        }
        #region list
        public class PAWHS_New_PaymentAdvice_List
        {
            public int Out_payment_rowid { get; set; }
            public string Out_payment_id { get; set; }
            public string Out_date { get; set; }
            public string Out_period_from { get; set; }
            public string Out_period_to { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_ALL_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<PAWHS_New_PaymentAdvice_List> List { get; set; }

            public string filterby_option { get; set; }
            public string filterby_code { get; set; }
            public string filterby_fromvalue { get; set; }
            public string filterby_tovalue { get; set; }


        }
        public class PAWHS_New_PaymentAdvice_ALL_ApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_List_Application
        {
            public PAWHS_New_PaymentAdvice_ALL_Context context { get; set; }
            public PAWHS_New_PaymentAdvice_ALL_ApplicationException ApplicationException { get; set; }

        }

        #endregion

        #region fetch
        public class PAWHS_New_PaymentAdvice_Single_FHeader
        {
            public int IOU_payment_rowid { get; set; }
            public string IOU_payment_id { get; set; }
            public string IOU_from_date { get; set; }
            public string IOU_to_date { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_Single_FDetail
        {
            public int In_paymentdtl_rowid { get; set; }
            public string In_lot_no { get; set; }
            public string In_farmer_code { get; set; }
            public string In_farmer_name { get; set; }
            public string In_procurment_date { get; set; }
            public decimal In_qty { get; set; }
            public decimal In_price { get; set; }
            public decimal In_amount_paid { get; set; }
            public decimal In_total_othercost { get; set; }
            public decimal In_advance { get; set; }
            public decimal In_balance { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_Single_FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHS_New_PaymentAdvice_Single_FHeader Header { get; set; }
            public IList<PAWHS_New_PaymentAdvice_Single_FDetail> Detail { get; set; }
            public Int32 payment_rowid { get; set; }
            public string payment_id { get; set; }
            public string from_date { get; set; }
            public string to_date { get; set; }


        }
        public class PAWHS_New_PaymentAdvice_Single_FApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_Single_FApplication
        {
            public PAWHS_New_PaymentAdvice_Single_FContext context { get; set; }
            public PAWHS_New_PaymentAdvice_Single_FApplicationException ApplicationException { get; set; }

        }
        #endregion

        #region save
        public class PAWHS_New_PaymentAdvice_SHeader
        {
            public int IOU_payment_rowid { get; set; }
            public string IOU_payment_no { get; set; }
            public string In_payment_advice_no { get; set; }
            public string In_from_date { get; set; }
            public string In_to_date { get; set; }
            public string In_bank_name { get; set; }
          
            public string In_status_code { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_SDetail
        {
            public int In_paymentdtl_rowid { get; set; }
            public string In_req_no { get; set; }
            public string In_farmer_code { get; set; }
           
            public decimal In_balance { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_payment_remark { get; set; }
            public string In_lot_no { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_SContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public PAWHS_New_PaymentAdvice_SHeader Header { get; set; }
            public IList<PAWHS_New_PaymentAdvice_SDetail> Detail { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_SDocument
        {
            public PAWHS_New_PaymentAdvice_SContext context { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_SApplication
        {
            public PAWHS_New_PaymentAdvice_SDocument document { get; set; }

        }
        #endregion

        #region From date and Todate 
        //public class PAWHS_New_PaymentAdvice_Single_FHeader
        //{
        //    public int IOU_payment_rowid { get; set; }
        //    public string IOU_payment_id { get; set; }
        //    public string IOU_from_date { get; set; }
        //    public string IOU_to_date { get; set; }
        //    public string In_status_code { get; set; }
        //    public string In_status_desc { get; set; }
        //    public string In_row_timestamp { get; set; }
        //    public string In_mode_flag { get; set; }

        //}
        public class PAWHS_New_PaymentAdvice_fetchgrid_FDetail
        {
            public int In_paymentdtl_rowid { get; set; }

            public string In_farmer_code { get; set; }
            public string In_lot_no { get; set; }
            public string In_farmer_name { get; set; }
            public string In_procurment_date { get; set; }
            public decimal In_qty { get; set; }
            public decimal In_price { get; set; }
            public decimal In_amount_paid { get; set; }
            public decimal In_total_othercost { get; set; }
            public decimal In_advance { get; set; }
            public decimal In_balance { get; set; }
            public string In_status_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class PAWHS_New_PaymentAdvice_fetchgrid_FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            // public PAWHS_New_PaymentAdvice_Single_FHeader Header { get; set; }
            public IList<PAWHS_New_PaymentAdvice_fetchgrid_FDetail> Detail { get; set; }
            public string from_date { get; set; }
            public string to_date { get; set; }


        }
        //public class PAWHS_New_PaymentAdvice_fetchgrid_FApplicationException
        //{
        //    public string errorNumber { get; set; }
        //    public string errorDescription { get; set; }

        //}
        public class PAWHS_New_PaymentAdvice_fetchgrid_FApplication
        {
            public PAWHS_New_PaymentAdvice_fetchgrid_FContext context { get; set; }
            // public PAWHS_New_PaymentAdvice_fetchgrid_FApplicationException ApplicationException { get; set; }

        }
        #endregion
    }
}