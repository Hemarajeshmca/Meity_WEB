//using Microsoft.Reporting.WebForms;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using iTextSharp.text;
using iTextSharp.text.pdf;

using System.Drawing;
using System.Drawing.Configuration;
using System.Drawing.Printing;
using Rectangle = System.Drawing.Rectangle;
using iTextSharp.text.pdf.draw;
using iText.Layout.Properties;
using System.Buffers.Text;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
using FFI_Datamodel;



//using System.Web.UI.WebControls;

namespace FFI.Controllers
{
    public class ReportlistController : Controller
    {
        private IConfiguration _configuration;
        private MySqlConnection con;
        private IHostingEnvironment _hostingEnvironment;
        dynamic excel_msg = new JObject();
        string dbstring = "";
        log4net.ILog logger = log4net.LogManager.GetLogger(typeof(ReportlistController));
        public ReportlistController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }

        string urlstring = "";

        string reportsolupath = "";
        private PdfPCell cell;
        private string alignment;

        // GET: Reportlist
        public ActionResult Reportlist()
        {
            return View();
        }
        public ActionResult ReportForm()
        {
            return View();
        }
        public ActionResult RptStockAdjustment()
        {
            return View();
        }
        public ActionResult Report()
        {
            //ReportViewer reportViewer = new ReportViewer();
            //ViewBag.ReportViewer = reportViewer;
            return View();
        }

        #region Barcode PDF
        public string downloadbarcodepdf(ReportName ObjCmbRptName)
        {
            var sptver = "FPOBARCODEFile";
            var file_ext = ".pdf";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string folderName = "DownloadXLFiles";
            string fileLocation = Path.Combine(webRootPath, folderName);
            string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + "_" + file_ext);
            string path = Path.Combine(fileLocation, sptver + "_" + file_ext);
            if (System.IO.File.Exists(path))
            {

                System.IO.File.Delete(path);
            }
            string contentType = "application/pdf";
            exportbarcodepdf(path, ObjCmbRptName);
            return path;
        }
        public string exportbarcodepdf(string path, ReportName ObjCmbRptName)
        {
            // creating document object
            try
            {
                DataTable Dt = new DataTable();

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
                else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "ju")
                {
                    if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                    {
                        dbstring = _configuration.GetSection("dbtypeJU")["mysqlcon"].ToString();

                    }
                    else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                    {
                        dbstring = _configuration.GetSection("dbtypeJUUAt")["mysqlcon"].ToString();

                    }
                    else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "PRO")
                    {
                        dbstring = _configuration.GetSection("dbtypeJUPRO")["mysqlcon"].ToString();

                    }

                }
                con = new MySqlConnection(dbstring);
                con.Open();
                MySqlCommand cmd = new MySqlCommand("FPO_Fetch_Finyear_List", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("In_Orgn_code", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                cmd.Parameters.Add("In_Finyearcode", MySqlDbType.VarChar).Value = ObjCmbRptName.cmbparam;
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(Dt);
                con.Close();

                string Orgncode = Dt.Rows[0]["In_Orgn_code"].ToString();
                string Fromdate = Dt.Rows[0]["finyear_start_date"].ToString();
                string Todate = Dt.Rows[0]["finyear_end_date"].ToString();
                DateTime From_dateTime = Convert.ToDateTime(Fromdate);
                DateTime To_datetime = Convert.ToDateTime(Todate);
                int Total_days = (To_datetime.Date - From_dateTime.Date).Days;

                System.IO.MemoryStream ms = new System.IO.MemoryStream();
                iTextSharp.text.Rectangle rec = new iTextSharp.text.Rectangle(PageSize.A4);
                //rec.BackgroundColor = new BaseColor(System.Drawing.Color.Olive);
                Document pdfdoc = new Document(rec);

                //iTextSharp.text.Rectangle pagesize = new iTextSharp.text.Rectangle(350, 160, 10, 0);
                pdfdoc.SetPageSize(iTextSharp.text.PageSize.A4);
                //pdfdoc = new Document(pagesize, 0, 0, 0, 0);
                PdfWriter writer = PdfWriter.GetInstance(pdfdoc, new FileStream(path, FileMode.Create));
                PdfPTable tbl = new PdfPTable(3) { WidthPercentage = 100 };
                //tbl.SpacingBefore = 2;
                //tbl.SpacingAfter = 2;
                //float[] widths = { 40f, 50f, 40f };
                //tbl.SetWidths(widths);
                //tbl.DefaultCell.Border = iTextSharp.text.Rectangle.NO_BORDER;
                //tbl.DefaultCell.HorizontalAlignment = Element.ALIGN_CENTER;
                //tbl.DefaultCell.VerticalAlignment = Element.ALIGN_MIDDLE;
                pdfdoc.Open();
                string frmt = "00000";
                //Total_days;
                int Total_day = 86400 * Total_days;
                for (int i = 0; i < Total_day; i++)
                {
                    var inner_table = new PdfPTable(1) { WidthPercentage = 100 };
                    //int DaysCount = 86400;

                    DateTime Adddatetime = From_dateTime.AddDays(1);
                    int year_vl = Adddatetime.Year;
                    int date_vl = Adddatetime.Day;
                    int month_vl = Adddatetime.Month;

                    //for (int j = 0; j < DaysCount; j++)
                    //{
                    int j = i + 1;
                    string increment = j.ToString(frmt);
                    string barcodeid = Orgncode + year_vl + increment;
                    string strcode = barcodeid;
                    PdfContentByte pdtcb = writer.DirectContent;
                    Barcode128 code128 = new Barcode128();
                    code128.Code = strcode;
                    code128.Extended = true;
                    code128.ChecksumText = true;
                    code128.StartStopText = true;
                    code128.CodeType = iTextSharp.text.pdf.Barcode.CODE128;
                    code128.BarHeight = 30.00F;
                    code128.Size = 10;
                    code128.X = 0.8F;
                    code128.Baseline = 10.0F;
                    code128.TextAlignment = Element.ALIGN_CENTER;
                    iTextSharp.text.Image image128 = code128.CreateImageWithBarcode(pdtcb, null, null);
                    image128.ScaleAbsolute(75f, 60f);
                    BaseFont bf = BaseFont.CreateFont(BaseFont.TIMES_BOLD, BaseFont.CP1252, false);
                    iTextSharp.text.Font tbf = new iTextSharp.text.Font(bf, 7, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);

                    PdfPCell cell1 = new PdfPCell(new Phrase(System.Environment.NewLine, tbf));
                    cell1.Border = 0;
                    cell1.Padding = 15;
                    cell1.HorizontalAlignment = Element.ALIGN_LEFT;
                    cell1.VerticalAlignment = Element.ALIGN_MIDDLE;

                    //inner_table.AddCell(cell1);
                    //tbl.AddCell(cell1); 
                    //tbl.AddCell(cell1);
                    //inner_table.AddCell(new Phrase(new Chunk(image128, 75, -30)));
                    //tbl.AddCell(cell1); 
                    //tbl.AddCell(cell1);
                    //tbl.AddCell(cell1);
                    ////tbl.AddCell(cell2);
                    //tbl.AddCell(cell1);
                    //}
                    PdfPCell Cellimagewithqr = new PdfPCell(image128);
                    Cellimagewithqr.Border = 0;
                    Cellimagewithqr.HorizontalAlignment = Element.ALIGN_CENTER;
                    inner_table.AddCell(Cellimagewithqr);
                    PdfPCell labelCell = new PdfPCell(inner_table)
                    {
                        //CellEvent = new RoundRectangle(),
                        Border = 0,
                        Padding = 3,
                        HorizontalAlignment = Element.ALIGN_LEFT
                    };
                    tbl.AddCell(labelCell);
                    //}
                }
                pdfdoc.Add(tbl);
                pdfdoc.Close();
                writer.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return path;
        }
        #endregion

        #region
        public string downloadpdf()
        {
            var sptver = "FarmerIDCard";
            var file_ext = ".pdf";
            string webRootPath = _hostingEnvironment.WebRootPath;
            string folderName = "DownloadXLFiles";
            //  Guid guid = Guid.NewGuid();
            string fileLocation = Path.Combine(webRootPath, folderName);

            //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
            string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + "_" + file_ext);
            string path = Path.Combine(fileLocation, sptver + "_" + file_ext);

            if (System.IO.File.Exists(path))
            {

                System.IO.File.Delete(path);
            }

            string contentType = "application/pdf";
            exportpdf(path);
            //byte[] filecontent = exportpdf();
            //string filename = "Sample_PDF_" + DateTime.Now.ToString("MMddyyyyhhmmss") + ".pdf";
            //return File(filecontent, contentType, path);
            return path;
        }

        public class FarmerQrContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FarmerCode { get; set; }
        }
        public string exportpdf(string path)
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
            MySqlCommand cmd = new MySqlCommand("report_odishaFarmerA4", con);
            /*  cmd.CommandType = CommandType.StoredProcedure;
              cmd.Parameters.AddWithValue("in_orgnId", HttpContext.Session.GetString("orgId"));
              cmd.Parameters.AddWithValue("in_userId", HttpContext.Session.GetString("userId"));
              cmd.Parameters.AddWithValue("in_invoice_no", HttpContext.Session.GetString("Invoiceno"));*/
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(table_data);
            con.Close();

            // creating document object

            System.IO.MemoryStream ms = new System.IO.MemoryStream();
            iTextSharp.text.Rectangle rec = new iTextSharp.text.Rectangle(PageSize.A4);
            //rec.BackgroundColor = new BaseColor(System.Drawing.Color.Olive);
            Document doc = new Document(rec);
            doc.SetPageSize(iTextSharp.text.PageSize.A4);
            //PdfWriter writer = PdfWriter.GetInstance(doc, ms);
            PdfWriter writer = PdfWriter.GetInstance(doc, new FileStream(path, FileMode.Create));
            doc.Open();

            iTextSharp.text.Font boldFont = new iTextSharp.text.Font();
            boldFont = FontFactory.GetFont("Calibri", 10, iTextSharp.text.Font.BOLD);
            iTextSharp.text.Font boldFontsmall = new iTextSharp.text.Font();
            boldFontsmall = FontFactory.GetFont("Calibri", 9, iTextSharp.text.Font.BOLD);
            iTextSharp.text.Font NormalFont = iTextSharp.text.FontFactory.GetFont("Calibri", 10, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font NormalFont1 = iTextSharp.text.FontFactory.GetFont("Calibri", 8, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);

            doc.NewPage();

            var table = new PdfPTable(2) { WidthPercentage = 100 };

            for (int i = 0; i < table_data.Tables[0].Rows.Count; i++)
            {


                // Inner table: First cell for QR code and second cell for book's informations.
                var inner_table = new PdfPTable(1) { WidthPercentage = 100 };
                inner_table.DefaultCell.Border = 0;
                var inner_measurements = new[] { 60f };
                inner_table.SetWidths(inner_measurements);

                PdfPCell CellTwoHdr = new PdfPCell(new Phrase("MANDI", boldFont));
                CellTwoHdr.Border = PdfPCell.TOP_BORDER | PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                CellTwoHdr.HorizontalAlignment = Element.ALIGN_CENTER;
                // table.AddCell(CellTwoHdr);
                inner_table.AddCell(CellTwoHdr);

                PdfPCell CellTreeHdr = new PdfPCell(new Phrase("Mainstreaming Agri-producers through Network & Development Initiatives", boldFontsmall));
                CellTreeHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                CellTreeHdr.HorizontalAlignment = Element.ALIGN_CENTER;
                //  table.AddCell(CellTreeHdr);
                inner_table.AddCell(CellTreeHdr);

                if (table_data.Tables[0].Rows[i]["ID"].ToString() != null)
                {
                    if (table_data.Tables[0].Rows[i]["lenghtpho"].ToString() != "0")
                    {
                        string base64photo = table_data.Tables[0].Rows[i]["Photo"].ToString();
                        byte[] imageBytesphoto = Convert.FromBase64String(base64photo);
                        iTextSharp.text.Image imagephoto = iTextSharp.text.Image.GetInstance(imageBytesphoto);
                        imagephoto.ScaleAbsolute(50f, 50f);
                        //PdfPCell CellimageHdr = new PdfPCell(imagephoto);
                        //CellimageHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                        //CellimageHdr.HorizontalAlignment = Element.ALIGN_CENTER;
                        // table.AddCell(CellimageHdr);
                        //inner_table.AddCell(CellimageHdr);
                        FarmerQrContext Obj_FarmerQrContext = new FarmerQrContext();
                        Obj_FarmerQrContext.FarmerCode = table_data.Tables[0].Rows[i]["ID"].ToString();
                        String base64 = new_farmer_qr(Obj_FarmerQrContext);
                        // var response = base64.Substring(1, base64.Length - 2).Replace(@"\/", "/");
                        string string64 = base64.Replace(@"""", string.Empty);
                        byte[] imageBytes = Convert.FromBase64String(string64);
                        //Convert.FromBase64String("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");
                        iTextSharp.text.Image image = iTextSharp.text.Image.GetInstance(imageBytes);
                        image.ScaleAbsolute(50f, 50f);

                        Paragraph p = new Paragraph();
                        // imagephoto.scalePercent(30);
                        p.Add(new Chunk(imagephoto, 0, 0, true));
                        p.Add(new Chunk(image, 0, 0, true));
                        cell = new PdfPCell();
                        cell.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                        cell.HorizontalAlignment = Element.ALIGN_CENTER;
                        p.Alignment = Element.ALIGN_CENTER;
                        cell.AddElement(p);
                        inner_table.AddCell(cell);



                        //image.ScaleAbsolute(50f, 50f);
                        //PdfPCell Cellimagewithqr = new PdfPCell(image);
                        // Cellimagewithqr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                        //Cellimagewithqr.HorizontalAlignment = Element.ALIGN_CENTER;
                        //inner_table.AddCell(CellimageHdr);
                        //inner_table.AddCell(Cellimagewithqr);
                    }
                    else
                    {

                        FarmerQrContext Obj_FarmerQrContext = new FarmerQrContext();
                        Obj_FarmerQrContext.FarmerCode = table_data.Tables[0].Rows[i]["ID"].ToString();
                        String base64 = new_farmer_qr(Obj_FarmerQrContext);
                        // var response = base64.Substring(1, base64.Length - 2).Replace(@"\/", "/");
                        string string64 = base64.Replace(@"""", string.Empty);
                        byte[] imageBytes = Convert.FromBase64String(string64);
                        //Convert.FromBase64String("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");
                        iTextSharp.text.Image image = iTextSharp.text.Image.GetInstance(imageBytes);
                        image.ScaleAbsolute(50f, 50f);
                        PdfPCell Cellimagewithqr = new PdfPCell(image);
                        Cellimagewithqr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                        Cellimagewithqr.HorizontalAlignment = Element.ALIGN_CENTER;
                        // table.AddCell(CellimageHdr);
                        inner_table.AddCell(Cellimagewithqr);



                    }
                }


                //if (table_data.Tables[0].Rows[i]["lenghtpho"].ToString() != "0")
                //{
                //    string base64 = table_data.Tables[0].Rows[i]["Photo"].ToString();
                //    byte[] imageBytes = Convert.FromBase64String(base64);
                //    iTextSharp.text.Image image = iTextSharp.text.Image.GetInstance(imageBytes);
                //    image.ScaleAbsolute(50f, 50f);
                //    PdfPCell CellimageHdr = new PdfPCell(image);
                //    CellimageHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                //    CellimageHdr.HorizontalAlignment = Element.ALIGN_CENTER;
                //    // table.AddCell(CellimageHdr);
                //    inner_table.AddCell(CellimageHdr);

                //}

                PdfPCell CellFourHdr = new PdfPCell(new Phrase("ID                        : " + table_data.Tables[0].Rows[i]["ID"].ToString(), boldFontsmall));
                CellFourHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                CellFourHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                //table.AddCell(CellFourHdr);
                inner_table.AddCell(CellFourHdr);


                PdfPCell CellFiveHdr = new PdfPCell(new Phrase("Name                  : " + table_data.Tables[0].Rows[i]["Name"].ToString(), boldFontsmall));
                CellFiveHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                CellFiveHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                //table.AddCell(CellFiveHdr);
                inner_table.AddCell(CellFiveHdr);

                PdfPCell CellsixHdr = new PdfPCell(new Phrase("F/H Name         : " + table_data.Tables[0].Rows[i]["Father_Name"].ToString(), NormalFont));
                CellsixHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                CellsixHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                //table.AddCell(CellsixHdr);
                inner_table.AddCell(CellsixHdr);

                PdfPCell CellsevenHdr = new PdfPCell(new Phrase("Mobile No         : " + table_data.Tables[0].Rows[i]["MobileNo"].ToString(), NormalFont));
                CellsevenHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                CellsevenHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                // table.AddCell(CellsevenHdr);
                inner_table.AddCell(CellsevenHdr);
                string address = table_data.Tables[0].Rows[i]["Address"].ToString();
                int addrlen = 0;
                addrlen = address.Length;
                int addrlen2 = 0;
                string addr1 = "";
                string addr2 = "";
                if (addrlen >= 25)
                {
                    addr1 = address.Substring(0, 25);
                    addrlen2 = addrlen - 26;
                }
                else
                {
                    addr1 = address.Substring(0, addrlen);
                }
                if (addrlen2 > 1)
                {
                    addr2 = address.Substring(26, addrlen2);
                }

                if (addrlen > 1 && addrlen2 > 1)
                {
                    PdfPCell CelleightHdr = new PdfPCell(new Phrase("Address            : " + addr1, NormalFont));
                    CelleightHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                    CelleightHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                    // table.AddCell(CelleightHdr);
                    inner_table.AddCell(CelleightHdr);

                    PdfPCell CelladdHdr = new PdfPCell(new Phrase("                           " + addr2, NormalFont));
                    CelladdHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                    CelladdHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                    // table.AddCell(CelleightHdr);
                    inner_table.AddCell(CelladdHdr);
                }
                else
                {
                    PdfPCell CelleightHdr = new PdfPCell(new Phrase("Address            : " + addr1, NormalFont));
                    CelleightHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                    CelleightHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                    // table.AddCell(CelleightHdr);
                    inner_table.AddCell(CelleightHdr);
                }


                PdfPCell CellnineHdr = new PdfPCell(new Phrase("Village&PIN      : " + table_data.Tables[0].Rows[i]["village"].ToString(), NormalFont));
                CellnineHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                CellnineHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                //table.AddCell(CellnineHdr);
                inner_table.AddCell(CellnineHdr);

                //FPO Name Wrap Text 

                string fponame = table_data.Tables[0].Rows[i]["orgn_code"].ToString();
                int fpolen = 0;
                fpolen = fponame.Length;
                int fpolen2 = 0;
                string fpo1 = "";
                string fpo2 = "";
                if (fpolen >= 25)
                {
                    fpo1 = fponame.Substring(0, 25);
                    fpolen2 = fpolen - 25;
                }
                else
                {
                    fpo1 = fponame.Substring(0, addrlen);
                }
                if (fpolen2 > 1)
                {
                    fpo2 = fponame.Substring(25, fpolen2);
                }


                PdfPCell CellTenHdr = new PdfPCell(new Phrase("FBG                         : " + fpo1, NormalFont1));
                CellTenHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER;
                CellTenHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                // table.AddCell(CellTenHdr);
                inner_table.AddCell(CellTenHdr);

                PdfPCell CellFbgHdr = new PdfPCell(new Phrase("                                 " + fpo2, NormalFont1));
                CellFbgHdr.Border = PdfPCell.LEFT_BORDER | PdfPCell.RIGHT_BORDER | PdfPCell.BOTTOM_BORDER;
                CellFbgHdr.HorizontalAlignment = Element.ALIGN_LEFT;
                // table.AddCell(CellTenHdr);
                inner_table.AddCell(CellFbgHdr);



                PdfPCell labelCell = new PdfPCell(inner_table)
                {
                    //CellEvent = new RoundRectangle(),
                    Border = 0,
                    Padding = 2,
                    HorizontalAlignment = Element.ALIGN_LEFT
                };

                table.AddCell(labelCell);
            }

            doc.Add(table);
            doc.Close();



            return path;
        }
        private string new_farmer_qr(FarmerQrContext Obj_FarmerQrContext)
        {
            String post_data = "";
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
                string Urlcon = "FarmerReg/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(Obj_FarmerQrContext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("new_farmer_qrcode", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();

            }
            return post_data;


        }
        #endregion


        [HttpPost]
        public string GetReport([FromBody] ReportName ObjCmbRptName)
        {

            try
            {
                string pdfpath = string.Empty;
                DataSet Dset = new DataSet();

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
                else if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "ju")
                {
                    if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                    {
                        dbstring = _configuration.GetSection("dbtypeJU")["mysqlcon"].ToString();

                    }
                    else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                    {
                        dbstring = _configuration.GetSection("dbtypeJUUAt")["mysqlcon"].ToString();

                    }
                    else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "PRO")
                    {
                        dbstring = _configuration.GetSection("dbtypeJUPRO")["mysqlcon"].ToString();

                    }

                }
                con = new MySqlConnection(dbstring);
                con.Open();
                if (ObjCmbRptName.cmbrptname == "RPTPRG")
                {
                    MySqlCommand cmd = new MySqlCommand("report_ProgressAllreports", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    Dset.Tables[0].TableName = "ICD";
                    Dset.Tables[1].TableName = "IMAP CC";
                    Dset.Tables[2].TableName = "IMAP Payment";
                    Dset.Tables[3].TableName = "LRS";
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "FarmerRegistration")
                {
                    MySqlCommand cmd = new MySqlCommand("report_FarmerRegistration", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    Dset.Tables[0].TableName = "FarmersDetails";
                    Dset.Tables[1].TableName = "KYCDetails";
                    Dset.Tables[2].TableName = "BankDetails";
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTADS")
                {
                    MySqlCommand cmd = new MySqlCommand("report_FarmerAdsDescription", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    Dset.Tables[0].TableName = "ADS DESCRIPTION";
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTADSPR")
                {
                    MySqlCommand cmd = new MySqlCommand("SP_ADSWithLRP", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    if (ObjCmbRptName.locnId == "up")
                    {
                        Dset.Tables[1].TableName = "UPPRO PROGRESS";
                        Dset.Tables[0].TableName = "UPPRO PROGRESS SUMMARY";
                    }
                    else
                    {
                        Dset.Tables[1].TableName = "ADS PROGRESS";
                        Dset.Tables[0].TableName = "ADS PROGRESS SUMMARY";
                    }

                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "FarmerProf")
                {
                     MySqlCommand cmd = new MySqlCommand("report_farmer_profile_detail", con);
                     cmd.CommandType = CommandType.StoredProcedure;
                     MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                     da.Fill(Dset);
                     Dset.Tables[0].TableName = "PersonalDetails";
                     Dset.Tables[1].TableName = "AddressDetails";
                     Dset.Tables[2].TableName = "FamilyDetails";
                     Dset.Tables[3].TableName = "LoanDetails";
                     Dset.Tables[4].TableName = "loanRepaymentDetails";
                     Dset.Tables[5].TableName = "LandDetails";
                     Dset.Tables[6].TableName = "LivestockDetails";
                     Dset.Tables[7].TableName = "AssetDetails";
                     Dset.Tables[8].TableName = "InsuranceDetails";
                     Dset.Tables[9].TableName = "CropDetails";
                     Dset.Tables[10].TableName = "SowingDetails";
                     Dset.Tables[11].TableName = "InputsDetails";
                     Dset.Tables[12].TableName = "ProductionDetails";
                     Dset.Tables[13].TableName = "SaleDetails";
                     Dset.Tables[14].TableName = "StockDetails";
                     Dset.Tables[15].TableName = "TrainingDetails";
                     Dset.Tables[16].TableName = "ShareHoldingDetails";
                     Dset.Tables[17].TableName = "BusinessDetails";
                     con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPT_odishadbFarmerID")
                {

                    pdfpath = downloadpdf();

                }
                else if (ObjCmbRptName.cmbrptname == "RPTALLOTREG")
                {
                    MySqlCommand cmd = new MySqlCommand("report_AllotmentRegister", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("p_localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTADR")
                {
                    MySqlCommand cmd = new MySqlCommand("report_ANNUAL_DIVIDEND_REGISTER", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("p_localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    cmd.Parameters.Add("p_FinancialYear", MySqlDbType.VarChar).Value = ObjCmbRptName.cmbparam;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTARM")
                {
                    MySqlCommand cmd = new MySqlCommand("report_ANNUAL_RETURNS_MEMBERS", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("p_localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    cmd.Parameters.Add("p_FinancialYear", MySqlDbType.VarChar).Value = ObjCmbRptName.cmbparam;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTART")
                {
                    MySqlCommand cmd = new MySqlCommand("report_ANNUAL_RETURNS_TRANSFERS", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("p_localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    cmd.Parameters.Add("p_FinancialYear", MySqlDbType.VarChar).Value = ObjCmbRptName.cmbparam;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTCERTISSREG")
                {
                    MySqlCommand cmd = new MySqlCommand("report_CertificateRegister", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("p_localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTINDMEM")
                {
                    MySqlCommand cmd = new MySqlCommand("report_IndextoMembers", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("p_localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTINDMEM")
                {
                    MySqlCommand cmd = new MySqlCommand("report_IndextoMembers", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("p_localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTTRNR")
                {
                    MySqlCommand cmd = new MySqlCommand("report_TransferRegister", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("p_localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "STOCKADJ")
                {
                    MySqlCommand cmd = new MySqlCommand("ICDRPT_StockAdjustment", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("orgnId", MySqlDbType.VarChar).Value = ObjCmbRptName.orgnId;
                    cmd.Parameters.Add("locnId", MySqlDbType.VarChar).Value = ObjCmbRptName.locnId;
                    cmd.Parameters.Add("userId", MySqlDbType.VarChar).Value = ObjCmbRptName.userId;
                    cmd.Parameters.Add("localeId", MySqlDbType.VarChar).Value = ObjCmbRptName.localeId;
                    cmd.Parameters.Add("In_parent_code", MySqlDbType.VarChar).Value = ObjCmbRptName.parent_code;
                    cmd.Parameters.Add("In_user", MySqlDbType.VarChar).Value = ObjCmbRptName.User;
                    MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                    da.Fill(Dset);
                    con.Close();
                }
                else if (ObjCmbRptName.cmbrptname == "RPTBARCODE")
                {
                    String Finyear = ObjCmbRptName.cmbparam;
                    pdfpath = downloadbarcodepdf(ObjCmbRptName);
                    var sptver1 = "FPOBARCODEFile";
                    var file_ex1t = ".pdf";
                    string Clientpath1 = Path.Combine("/DownloadXLFiles/" + sptver1 + "_" + file_ex1t);
                    excel_msg.path = Clientpath1;
                    return JsonConvert.SerializeObject(excel_msg);
                }

                if (ObjCmbRptName.cmbrptname != "RPT_odishadbFarmerID")
                {
                    if (Dset.Tables.Count > 0)
                    {
                        HttpContext.Session.SetString("dtDownload", JsonConvert.SerializeObject(Dset));
                    }
                }

                var sptver = ObjCmbRptName.cmbrptname;
                if (sptver == "RPTALLOTREG")
                {
                    sptver = "Allotment Register";
                }
                if (sptver == "RPTARM")
                {
                    sptver = "Annual Returns Members";
                }
                if (sptver == "RPTCERTISSREG")
                {
                    sptver = "Certificate Register";
                }
                if (sptver == "RPTINDMEM")
                {
                    sptver = "Index of Members";
                }
                var file_ext = ".xls";
                string webRootPath = _hostingEnvironment.WebRootPath;
                string folderName = "DownloadXLFiles";
                string fileLocation = Path.Combine(webRootPath, folderName);
                Guid guid = Guid.NewGuid();
                //string path = Server.MapPath("~/uploadedXLFiles/") + sptver + file_ext;
                // string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + "_" + guid + file_ext);
                string Clientpath = Path.Combine("/DownloadXLFiles/" + sptver + file_ext);
                // string path = Path.Combine(fileLocation, sptver + "_" + guid + file_ext);
                string path = Path.Combine(fileLocation, sptver + file_ext);

                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }
                if (ObjCmbRptName.cmbrptname != "RPT_odishadbFarmerID")
                {
                    CreateCSVFile(path);
                    excel_msg.path = Clientpath;
                }
                else
                {
                    var sptver1 = "FarmerIDCard";
                    var file_ex1t = ".pdf";
                    string Clientpath1 = Path.Combine("/DownloadXLFiles/" + sptver1 + "_" + file_ex1t);
                    excel_msg.path = Clientpath1;
                }

                //string ipAddress = ConfigurationManager.AppSettings["helpUrl"].ToString();
                //string ipAddress = _configuration.GetSection("AppSettings")["helpUrl"].ToString();
                //string[] fileArr = ipAddress.Split(new string[] { "help" }, StringSplitOptions.None);
                //ipAddress = fileArr[0].ToString();
                //excel_msg.path = ipAddress + "/uploadedXLFiles/" + sptver + file_ext;

                //excel_msg.path = path

            }
            catch (Exception ex)
            {
                // throw ex;
                logger.Error(ex);
            }
            return JsonConvert.SerializeObject(excel_msg);
        }

        private byte[] exportpdfInvoice()
        {
            throw new NotImplementedException();
        }

        public void CreateCSVFile(string strFilePath)
        {
            try
            {
                DataSet dsfarmer = JsonConvert.DeserializeObject<DataSet>(HttpContext.Session.GetString("dtDownload"));

                using (ExcelPackage pck = new ExcelPackage())
                {
                    foreach (DataTable dataTable in dsfarmer.Tables)
                    {
                        ExcelWorksheet workSheet = pck.Workbook.Worksheets.Add(dataTable.TableName);
                        workSheet.Cells["A1"].LoadFromDataTable(dataTable, true);
                        workSheet.Cells["A1:XFD1"].Style.Font.Bold = true;
                    }

                    pck.SaveAs(new FileInfo(strFilePath));
                }

                //using (SpreadsheetDocument document = SpreadsheetDocument.Create(strFilePath, SpreadsheetDocumentType.Workbook))
                //{


                // WorkbookPart workbookPart = document.AddWorkbookPart();
                // workbookPart.Workbook = new Workbook();

                // WorksheetPart worksheetPart = workbookPart.AddNewPart<WorksheetPart>();
                // var sheetData = new DocumentFormat.OpenXml.Spreadsheet.SheetData();
                // worksheetPart.Worksheet = new Worksheet(sheetData);


                // Sheets sheets = workbookPart.Workbook.AppendChild(new Sheets());
                // for (int i = 0; i < dsfarmer.Tables.Count; i++)
                // {

                // Sheet sheet = new Sheet() { Id = workbookPart.GetIdOfPart(worksheetPart), SheetId = 1, Name = dsfarmer.Tables[i].TableName };
                // sheets.Append(sheet);
                // }


                // Row headerRow = new Row();

                // for (int j = 0; j < dsfarmer.Tables.Count; j++)
                // {
                // List<String> columns = new List<string>();

                // foreach (System.Data.DataColumn column in dsfarmer.Tables[j].Columns)
                // {


                // columns.Add(column.ColumnName);
                // Cell cell = new Cell();
                // cell.DataType = CellValues.String;
                // cell.CellValue = new CellValue(column.ColumnName);
                // headerRow.AppendChild(cell);
                // }
                // sheetData.AppendChild(headerRow);
                // foreach (DataRow dsrow in dsfarmer.Tables[j].Rows)
                // {
                // Row newRow = new Row();
                // foreach (String col in columns)
                // {
                // Cell cell1 = new Cell();
                // cell1.DataType = CellValues.String;
                // cell1.CellValue = new CellValue(dsrow[col].ToString());
                // newRow.AppendChild(cell1);
                // }

                // sheetData.AppendChild(newRow);
                // }
                // // }
                // }
                // workbookPart.Workbook.Save();
                //}

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        [HttpPost]
        public ActionResult fetchReportlist([FromBody] Context objContext)
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
                // string Urlcon = "allreport?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.filterby_option + "&filterby_code=" + objContext.filterby_code + "&filterby_fromvalue=" + objContext.filterby_fromvalue + "&filterby_tovalue=" + objContext.filterby_tovalue + "";
                string Urlcon = "Admin_Reportconfig/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
                var response = client.GetAsync("allreport?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.filterby_option + "&filterby_code=" + objContext.filterby_code + "&filterby_fromvalue=" + objContext.filterby_fromvalue + "&filterby_tovalue=" + objContext.filterby_tovalue + "").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            }
            //using (var client = new HttpClient())
            //{
            //    string Urlcon = "/allreport?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.filterby_option + "&filterby_code=" + objContext.filterby_code + "&filterby_fromvalue=" + objContext.filterby_fromvalue + "&filterby_tovalue=" + objContext.filterby_tovalue + "";
            //    client.BaseAddress = new Uri(urlstring + Urlcon);
            //    client.DefaultRequestHeaders.Accept.Clear();
            //    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            //    HttpContent content = new StringContent(JsonConvert.SerializeObject(""), UTF8Encoding.UTF8, "application/json");
            //    var response = client.GetAsync("").Result;
            //    Stream data = response.Content.ReadAsStreamAsync().Result;
            //    StreamReader reader = new StreamReader(data);
            //    post_data = reader.ReadToEnd();
            //    objList = (Application)JsonConvert.DeserializeObject(post_data, typeof(Application));
            //}
            return Json(objList);
        }

        public ActionResult finyear()
        {
            using (var client = new HttpClient())
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
                string searchSql = "";
                string Where_condition = "";
                searchSql = "select distinct finyear_rowid,finyear_code, master_description('STATUS', status_code, 'en_US') as status" +
                            " from core_mst_tfinyear where status_code = 'A'";
                Where_condition = "where status_code = 'A'";
                DataTable dt = new DataTable();
                con = new MySqlConnection(dbstring);
                con.Open();
                string[] returnvalues = { };
                MySqlCommand cmd = new MySqlCommand(searchSql, con);
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(dt);
                con.Close();
                return Json(dt);
            }

        }

        #region

        public class ReportName
        {
            public string cmbrptname { get; set; }
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string cmbparam { get; set; }
            public string parent_code { get; set; }
            public string User { get; set; }
            
        }

        #endregion


        #region list 
        public class List
        {
            public int Out_report_rowid { get; set; }
            public string Out_module_code { get; set; }
            public string Out_module_name { get; set; }
            public string Out_report_code { get; set; }
            public string Out_report_name { get; set; }
            public string Out_report_type { get; set; }
            public string Out_report_type_desc { get; set; }
            public string out_report_source { get; set; }
            public string Out_status_code { get; set; }
            public string Out_status_desc { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<List> List { get; set; }
            public string filterby_option { get; set; }
            public string filterby_code { get; set; }
            public string filterby_fromvalue { get; set; }
            public string filterby_tovalue { get; set; }
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
        public ActionResult ExportExcelDownload(string report_name, string input_string, string flag, string userid)
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
            response = objproduct1.DownloadExcelExport(report_name, input_string, flag, userid, dbstring);
            return Json(response);
        }
    }
}