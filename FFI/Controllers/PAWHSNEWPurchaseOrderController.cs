using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using FFI_Datamodel;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;

namespace FFI.Controllers
{
    public class PAWHSNEWPurchaseOrderController : Controller
    {
        public IActionResult PAWHSNEWPurchaseOrderForm()
        {
            return View();
        }
        public IActionResult PAWHSNEWPurchaseOrderList()
        {
            return View();
        }
        private IHostingEnvironment _hostingEnvironment;
        private MySqlConnection con;
        string dbstring = "";
        private IConfiguration _configuration;
        log4net.ILog logger = log4net.LogManager.GetLogger(typeof(PAWHSNEWPurchaseOrderController));

        public PAWHSNEWPurchaseOrderController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;
        }
        string urlstring = "";
        [HttpPost]
        public JsonResult PurchaseOrderList([FromBody] POContext context)
        {
            PORootObject objList = new PORootObject();
            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                urlstring = _configuration.GetSection("Api_dev")["api_url"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {
                //urlstring = _configuration.GetSection("Api_uat")["api_url"].ToString();
                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                urlstring = _configuration.GetSection("Api_pro")["api_url"].ToString();
            }
            using (var client = new HttpClient())
            {

                //  string Urlcon = "ICD_MOBILEAPP/allinvoice?org=" + context.orgnId + "&locn=" + context.locnId + "&user=" + context.userId + "&lang=" + context.localeId + "&filterby_option=" + context.FilterBy_Option + "&filterby_code=" + context.FilterBy_Code + "&filterby_fromvalue=" + context.FilterBy_FromValue + "&filterby_tovalue=" + context.FilterBy_ToValue + "";
                string Urlcon = "New_PAWHS_PO/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(context), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("allpo_list", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (PORootObject)JsonConvert.DeserializeObject(post_data, typeof(PORootObject));

            }
            return Json(objList);
        }
        #region GetPOList
        public class GetPOParam
        {
            public string org { get; set; }
            public string locn { get; set; }
            public string user { get; set; }
            public string lang { get; set; }
            public string filterby_option { get; set; }
            public string filterby_code { get; set; }
            public string filterby_fromvalue { get; set; }
            public string filterby_tovalue { get; set; }
            public int out_record_count { get; set; }
            public int from_index { get; set; }
            public int to_index { get; set; }
            public int record_count { get; set; }
        }
        public class POFilter
        {
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public int out_record_count { get; set; }
            public int from_index { get; set; }
            public int to_index { get; set; }
            public int record_count { get; set; }
        }
        public class POLIst
        {
            public int Out_po_rowid { get; set; }
            public string Out_agg_code { get; set; }
            public string Out_po_no { get; set; }
            public string Out_po_date { get; set; }
            public string Out_buyer_code { get; set; }
            public string Out_buyer_name { get; set; }
            public string Out_buyer_location { get; set; }
            public string Out_po_remarks { get; set; }
            public string Out_status_code { get; set; }
            public string Out_row_timestamp { get; set; }
            public string Out_GivenBy { get; set; }
            public string Out_GivenByNo { get; set; }
            public string Out_TakenBy { get; set; }
            public string OutTakenByNo { get; set; }
        }
        public class POContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FilterBy_Option { get; set; }
            public string FilterBy_Code { get; set; }
            public string FilterBy_FromValue { get; set; }
            public string FilterBy_ToValue { get; set; }
            public List<POLIst> List { get; set; }
        }

        public class POApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }

        public class PORootObject
        {
            public POContext context { get; set; }
            public POApplicationException ApplicationException { get; set; }
        }
        #endregion

        public ActionResult PurchaseOrderfetch([FromBody] PAWHSPO_FetchContext objContext)
        {
            PAWHSPOFetchApplication objout = new PAWHSPOFetchApplication();
            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                urlstring = _configuration.GetSection("Api_dev")["api_url"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {
                //urlstring = _configuration.GetSection("Api_uat")["api_url"].ToString();
                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                urlstring = _configuration.GetSection("Api_pro")["api_url"].ToString();
            }
            using (var client = new HttpClient())
            {

                //string Urlcon = "ICD_MOBILEAPP/invoice?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&invoice_rowid=" + objContext.invoice_rowid;
                string Urlcon = "New_PAWHS_PO/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                // var response = client.GetAsync("").Result;
                var response = client.PostAsync("new_pawhs_Single_FetchPO", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSPOFetchApplication)JsonConvert.DeserializeObject(post_data, typeof(PAWHSPOFetchApplication));
            }
            return Json(objout);
        }
        #region SingleFetch

        public class PAWHSPOFetchApplication
        {
            public PAWHSPO_FetchContext context { get; set; }
        }
        public class PAWHSPO_FetchContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Int32 IOU_PO_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_PONo { get; set; }
            public PAWHSPO_FetchHeader Header { get; set; }
            public IList<PAWHSPO_Fetch_QtyDetail> QtyDetail { get; set; }
            //public IList<PAWHSPO_Fetch_ShipDetail> ShipDetail { get; set; }
            public IList<PAWHSPO_Fetch_TaxDetail> TaxDetail { get; set; }
            //public IList<PAWHSPO_Fetch_AttchDetail> AttchDetail { get; set; }
        }

        public class PAWHSPO_FetchHeader
        {
            public string In_po_date { get; set; }
            public string In_buyer_code { get; set; }
            public string In_buyer_name { get; set; }
            public string In_buyer_location { get; set; }
            public string In_buyer_location_desc { get; set; }
            public string In_po_remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_bill_attachment { get; set; }
            public Int32 IOU_PO_rowid { get; set; }
            public string IOU_agg_code { get; set; }
            public string IOU_PO_No { get; set; }
            public string In_OrderBy { get; set; }
            public string In_OrderByNO { get; set; }
            public string In_TakenBy { get; set; }
            public string In_TakenByNo { get; set; }

        }
        public class PAWHSPO_Fetch_QtyDetail
        {
            public Int32 In_podtl_rowid { get; set; }
            public string In_po_no { get; set; }
            public Int32 In_sln_no { get; set; }
            public string In_product_code { get; set; }
            public string In_product_Type { get; set; }
            public string In_product_Name { get; set; }
            public string In_product_Variety { get; set; }
            public string In_hsn_code { get; set; }
            public double In_qty { get; set; }
            public double In_rate { get; set; }
            public double In_product_amount { get; set; }
            public double In_discount { get; set; }
            public double In_othercharges { get; set; }
            public double In_tax { get; set; }
            public double In_gross_amount { get; set; }
            public double In_Stock_Qty { get; set; }
            public string In_remarks { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class PAWHSPO_Fetch_TaxDetail
        {
            public int In_potax_rowid { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public int In_taxdetails_rowid { get; set; }
            public string In_po_no { get; set; }
            public string In_state { get; set; }
            public double In_taxable_amount { get; set; }
            public double In_tax { get; set; }
            public double In_cgst_rate { get; set; }
            public double In_sgst_rate { get; set; }
            public double In_igst_rate { get; set; }
            public double In_ugst_rate { get; set; }
            public string In_status_code { get; set; }
            public string In_hsn_code { get; set; }
            public string In_status_desc { get; set; }
            public string In_hsn_desc { get; set; }
            public double In_tax_rate { get; set; }
            public string In_mode_flag { get; set; }
        }

        public class PAWHSPO_Fetch_AttchDetail
        {
            public int In_attch_rowid { get; set; }
            public string In_po_no { get; set; }
            public string In_filename { get; set; }
            public string In_document { get; set; }
            public string In_description { get; set; }
            public string In_attch_date { get; set; }
            public string In_attch_upload { get; set; }
            public string In_mode_flag { get; set; }
        }

        #endregion

        [HttpPost]
        public ActionResult POSave([FromBody] PAWHSPO_Save_Context objContextsave)
        {
            logger.Error("PAWHS-PO Save-start");
            PAWHSPO_Save_Application objApp = new PAWHSPO_Save_Application();
            PAWHSPO_Save_Document objTestDocShare = new PAWHSPO_Save_Document();
            PAWHSPO_Save_Context objTestContextDetailsShare = new PAWHSPO_Save_Context();

            PAWHSPO_Save_Header ObjTestHeader = new PAWHSPO_Save_Header();
            ObjTestHeader.IOU_po_rowid = objContextsave.Header.IOU_po_rowid;
            ObjTestHeader.In_po_rowid = objContextsave.Header.In_po_rowid;
            ObjTestHeader.IOU_PO_No = objContextsave.Header.IOU_PO_No;
            ObjTestHeader.IOU_ErroNo = objContextsave.Header.IOU_ErroNo;
            ObjTestHeader.In_agg_code = objContextsave.orgnId;
            ObjTestHeader.In_po_no = objContextsave.Header.In_po_no;
            ObjTestHeader.In_buyer_code = objContextsave.Header.In_buyer_code;
            ObjTestHeader.In_po_date = objContextsave.Header.In_po_date;
            ObjTestHeader.In_buyer_name = objContextsave.Header.In_buyer_name;
            ObjTestHeader.In_buyer_location = objContextsave.Header.In_buyer_location;
            ObjTestHeader.In_po_remarks = objContextsave.Header.In_po_remarks;
            ObjTestHeader.In_status_code = objContextsave.Header.In_status_code;
            ObjTestHeader.In_row_timestamp = objContextsave.Header.In_row_timestamp;
            ObjTestHeader.In_bill_attachment = objContextsave.Header.In_bill_attachment;
            ObjTestHeader.In_OrderBy = objContextsave.Header.In_OrderBy;
            ObjTestHeader.In_OrderByNO = objContextsave.Header.In_OrderByNO;
            ObjTestHeader.In_TakenBy = objContextsave.Header.In_TakenBy;
            ObjTestHeader.In_TakenByNo = objContextsave.Header.In_TakenByNo;
            ObjTestHeader.In_mode_flag = objContextsave.Header.In_mode_flag;
            logger.Error("PAWHS-PO Save-start" + "'" + objContextsave.Header.IOU_PO_No + "'" + "'" + objContextsave.Header.In_po_no + "'");
            List<PAWHSPO_Save_PODetail> objTestList = new List<PAWHSPO_Save_PODetail>();

            for (int i = 0; i < objContextsave.QtyDetail.Count; i++)
            {
                PAWHSPO_Save_PODetail objtest = new PAWHSPO_Save_PODetail();
                objtest.In_podtl_rowid = objContextsave.QtyDetail[i].In_podtl_rowid;
                objtest.In_sln_no = objContextsave.QtyDetail[i].In_sln_no;
                objtest.In_product_code = objContextsave.QtyDetail[i].In_product_code;
                objtest.In_tax = objContextsave.QtyDetail[i].In_tax;
                objtest.In_qty = objContextsave.QtyDetail[i].In_qty;
                objtest.In_hsn_code = objContextsave.QtyDetail[i].In_hsn_code;
                objtest.In_rate = objContextsave.QtyDetail[i].In_rate;
                objtest.In_product_amount = objContextsave.QtyDetail[i].In_product_amount;
                objtest.In_discount = objContextsave.QtyDetail[i].In_discount;
                objtest.In_gross_amount = objContextsave.QtyDetail[i].In_gross_amount;
                objtest.In_othercharges = objContextsave.QtyDetail[i].In_othercharges;
                objtest.In_remarks = objContextsave.QtyDetail[i].In_remarks;
                objtest.In_mode_flag = objContextsave.QtyDetail[i].In_mode_flag;
                objtest.ShipDetail = objContextsave.QtyDetail[i].ShipDetail;
                objtest.IOU_podtl_rowid = objContextsave.QtyDetail[i].IOU_podtl_rowid;
                objtest.IOU_po_no = objContextsave.QtyDetail[i].IOU_po_no;
                objtest.IOU_Error = objContextsave.QtyDetail[i].IOU_Error;
                objTestList.Add(objtest);
            }

            ////List<PAWHSPO_Save_POAttchDtl> objTestListattach = new List<PAWHSPO_Save_POAttchDtl>();

            ////for (int i = 0; i < objContextsave.AttchDetail.Count; i++)
            ////{
            ////    PAWHSPO_Save_POAttchDtl objtestattach = new PAWHSPO_Save_POAttchDtl();
            ////    objtestattach.In_attch_rowid = objContextsave.AttchDetail[i].In_attch_rowid;
            ////    objtestattach.In_attch_date = objContextsave.AttchDetail[i].In_attch_date;
            ////    objtestattach.In_document = objContextsave.AttchDetail[i].In_document;
            ////    objtestattach.In_description = objContextsave.AttchDetail[i].In_description;
            ////    objtestattach.In_filename = objContextsave.AttchDetail[i].In_filename;
            ////    objtestattach.In_attch_upload = objContextsave.AttchDetail[i].In_attch_upload;
            ////    objtestattach.In_mode_flag = objContextsave.AttchDetail[i].In_mode_flag;
            ////    objtestattach.IOU_attch_rowid = objContextsave.AttchDetail[i].IOU_attch_rowid;
            ////    objtestattach.In_po_no = objContextsave.AttchDetail[i].In_po_no;
            ////    objtestattach.IOU_Error = objContextsave.AttchDetail[i].IOU_Error;
            ////    objTestListattach.Add(objtestattach);
            ////}

            objTestContextDetailsShare.userId = objContextsave.userId;
            objTestContextDetailsShare.locnId = objContextsave.locnId;
            objTestContextDetailsShare.localeId = objContextsave.localeId;
            objTestContextDetailsShare.orgnId = objContextsave.orgnId;
            objTestContextDetailsShare.QtyDetail = objTestList;
            //objTestContextDetailsShare.AttchDetail = objTestListattach;
            objTestContextDetailsShare.Header = ObjTestHeader;

            objTestDocShare.context = objTestContextDetailsShare;
            objApp.document = objTestDocShare;

            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                urlstring = _configuration.GetSection("Api_dev")["api_url"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {
                //urlstring = _configuration.GetSection("Api_uat")["api_url"].ToString();
                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                urlstring = _configuration.GetSection("Api_pro")["api_url"].ToString();
            }
            using (var client = new HttpClient())
            {
                logger.Error("PAWHS-PO Save_method " + "'" + objContextsave.Header.IOU_PO_No + "'" + "'" + objContextsave.Header.In_po_no + "'");
                string Urlcon = "New_PAWHS_PO/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objApp), UTF8Encoding.UTF8, "application/json");
                //  var response = client.PostAsync("", content).Result;
                var response = client.PostAsync("new_pawhs_PO_save", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                logger.Error("PAWHS-PO Result " + "'" + objContextsave.Header.IOU_PO_No + "'" + "'" + objContextsave.Header.In_po_no + "'");
            }
            return Json(post_data);

        }
        #region Save

        public class PAWHSPO_Save_Application
        {
            public PAWHSPO_Save_Document document { get; set; }

        }
        public class PAWHSPO_Save_Document
        {
            public PAWHSPO_Save_Context context { get; set; }
            public POApplicationException ApplicationException { get; set; }

        }
        public class PAWHSPO_Save_Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public IList<PAWHSPO_Save_PODetail> QtyDetail { get; set; }
            // public IList<PAWHSPO_Save_POAttchDtl> AttchDetail { get; set; }
            public PAWHSPO_Save_Header Header { get; set; }

        }

        public class PAWHSPO_Save_Header
        {

            public Int32 In_po_rowid { get; set; }
            public string In_agg_code { get; set; }
            public string In_po_no { get; set; }
            public string In_po_date { get; set; }
            public string In_buyer_code { get; set; }
            public string In_buyer_name { get; set; }
            public string In_buyer_location { get; set; }
            public string In_po_remarks { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_bill_attachment { get; set; }
            public Int32 IOU_po_rowid { get; set; }
            public string IOU_PO_No { get; set; }
            public string IOU_ErroNo { get; set; }
            public string In_OrderBy { get; set; }
            public string In_OrderByNO { get; set; }
            public string In_TakenBy { get; set; }
            public string In_TakenByNo { get; set; }
        }
        public class PAWHSPO_Save_PODetail
        {
            public Int32 In_podtl_rowid { get; set; }
            public Int32 In_sln_no { get; set; }
            public string In_product_code { get; set; }

            public string In_hsn_code { get; set; }
            public double In_qty { get; set; }
            public double In_rate { get; set; }
            public double In_product_amount { get; set; }
            public double In_discount { get; set; }
            public double In_othercharges { get; set; }
            public double In_tax { get; set; }
            public double In_gross_amount { get; set; }
            public string In_remarks { get; set; }
            public string In_mode_flag { get; set; }
            public Int32 IOU_podtl_rowid { get; set; }
            public string IOU_po_no { get; set; }
            public string IOU_Error { get; set; }
            public IList<PAWHSPO_Save_POShipDtl> ShipDetail { get; set; }

        }

        public class PAWHSPO_Save_POShipDtl
        {
            public int In_shipment_rowid { get; set; }
            public int In_podtl_rowid { get; set; }
            public int In_sl_no { get; set; }
            public string In_address { get; set; }
            public double In_qty { get; set; }
            public string In_product_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_po_no { get; set; }
            public string IOU_Error { get; set; }
        }

        //public class PAWHSPO_Save_POAttchDtl
        //{
        //    public Int32 In_attch_rowid { get; set; }
        //    public string In_filename { get; set; }
        //    public string In_document { get; set; }
        //    public string In_description { get; set; }
        //    public string In_attch_date { get; set; }
        //    public string In_mode_flag { get; set; }
        //    public Int32 IOU_attch_rowid { get; set; }
        //    public string In_attch_upload { get; set; }
        //    public string In_po_no { get; set; }
        //    public string IOU_Error { get; set; }
        //}


        #endregion

        public ActionResult location_searchPO(string In_buyer_code, string In_agg_code)
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
            response = objproduct1.locationsearchPO(In_buyer_code, In_agg_code, dbstring);
            return Json(response);
        }


        public ActionResult POshipmentFetch([FromBody] PAWHSPurchaseOrderShipmentContext objContext)
        {
            PAWHSPurchaseOrderShipment objout = new PAWHSPurchaseOrderShipment();
            string post_data = "";
            if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
            {
                urlstring = _configuration.GetSection("Api_dev")["api_url"].ToString();
            }
            else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
            {

                urlstring = _configuration.GetSection("Appsettings")["api_url_final"].ToString();
            }
            else
            {
                urlstring = _configuration.GetSection("Api_pro")["api_url"].ToString();
            }
            using (var client = new HttpClient())
            {

                string Urlcon = "New_PAWHS_PO/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("shipmentfetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (PAWHSPurchaseOrderShipment)JsonConvert.DeserializeObject(post_data, typeof(PAWHSPurchaseOrderShipment));
            }
            return Json(objout);
        }

        #region shipmentfetch
        public class PAWHSPurchaseOrderShipmentContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public int In_podtl_rowid { get; set; }
            public IList<PAWHSPO_Fetch_ShipDetail> ShipDetail { get; set; }

        }
        public class PAWHSPO_Fetch_ShipDetail
        {
            public int In_shipment_rowid { get; set; }
            public int In_podtl_rowid { get; set; }
            public string In_po_no { get; set; }
            public int In_sl_no { get; set; }
            public string In_address { get; set; }
            public double In_qty { get; set; }
            public string In_product_code { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class PAWHSPurchaseOrderShipment
        {
            public PAWHSPurchaseOrderShipmentContext context { get; set; }
        }
        #endregion

        
    }
}