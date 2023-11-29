using FFI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Security.Cryptography;
using Newtonsoft.Json.Linq;
using Grpc.Core;
using System.Xml;
using System.Configuration;
using System.Data;
using FFI_Datamodel;
using Microsoft.AspNetCore.Hosting;

namespace FFI.Controllers
{
    public class ListViewMakerController : Controller
    {
        private IConfiguration _configuration;
        private IHostingEnvironment _hostingEnvironment;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public ListViewMakerController(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
            _hostingEnvironment = hostingEnvironment;           
        }
        string urlstring = "";
        // GET: ListViewMaker
        public ActionResult ListViewMakerList()
        {
            return View();
        }
        public ActionResult ListViewMakerForm()
        {
            return View();
        }      
        [HttpPost]
        public ActionResult GetFarmersList([FromBody]FarmerContext objContext)
        {
            FarmerRootObject objList = new FarmerRootObject();
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
                //  string Urlcon = "/allfarmer_reg?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&filterby_option=" + objContext.Filter.FilterBy_Option + "&filterby_code=" + objContext.Filter.FilterBy_Code + "&filterby_fromvalue=" + objContext.Filter.FilterBy_FromValue + "&filterby_tovalue=" + objContext.Filter.FilterBy_ToValue + "&from_index=" + objContext.Filter.from_index + "&to_index=" + objContext.Filter.to_index + "&record_count=" + objContext.Filter.record_count + "";
                string Urlcon = "FarmerReg/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                
                var response = client.PostAsync("allfarmer_reg", content).Result;
                //var response = client.GetAsync("").Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (FarmerRootObject)JsonConvert.DeserializeObject(post_data, typeof(FarmerRootObject));
            }
            return Json(objList);
        }
        public class QrCodeContxt
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string FarmerCode { get; set; }
        }

        [HttpPost]
        public ActionResult FarmerQRcode([FromBody] QrCodeContxt Objcontext)
        {

            // var decrypted = DecryptString(encrypted, key);

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
                string Urlcon = "FarmerReg/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(Objcontext), UTF8Encoding.UTF8, "application/json");
                //var response = client.GetAsync("").Result;
                var response = client.PostAsync("new_farmer_qrcode", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
            }
            return Json(post_data);
        }

        [HttpPost]
        public ActionResult SaveFarmer([FromBody] SFarmerContext objContext)
        {
            SFarmerRootObject objRoot = new SFarmerRootObject();
            SFarmerDocument objDoc = new SFarmerDocument();
            SFarmerContext objContextDetails = new SFarmerContext();
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.userId = objContext.userId;
            objContextDetails.localeId = objContext.localeId;            

            objContextDetails.Bank = objContext.Bank;
            objContextDetails.KYC = objContext.KYC;
            
            objContextDetails.Header = objContext.Header;

            objDoc.context = objContextDetails;
            objRoot.document = objDoc;

                     // var decrypted = DecryptString(encrypted, key);

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
                string Urlcon = "FarmerReg/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("new_farmer_reg", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc= (SFarmerDocument)JsonConvert.DeserializeObject(post_data, typeof(SFarmerDocument));
            }
            return Json(objDoc);
        }
        [HttpPost]
        public ActionResult GetFarmer([FromBody] SFarmerContext objContext)
        {
            FRootObject objout = new FRootObject();
            string post_data = "";

            //var content1 = "E1N2sygrFOx8QRdY6AQnJBhvBtb3NSL6/mGPVVCHvKM=";
            //var key = "E546C8DF278CD5931069B522E695D4F2";
            //var decrypted = DecryptString(content1, key);
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
                //string Urlcon = "/farmer_reg?org=" + objContext.orgnId + "&locn=" + objContext.locnId + "&user=" + objContext.userId + "&lang=" + objContext.localeId + "&farmer_rowid=" + objContext.Header.in_farmer_rowid + "&farmer_code=" + objContext.Header.in_farmer_code + "&version_no=" + objContext.Header.in_version_no + "";
                string Urlcon = "FarmerReg/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("farmer_reg", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objout = (FRootObject)JsonConvert.DeserializeObject(post_data, typeof(FRootObject));
                
            }

            //if(objout.context.KYC.Count >= 0)
            //{
            //    for (int j = 0; j < objout.context.KYC.Count; j++)
            //    {
            //        var addno = objout.context.KYC[j].in_proof_doc_adharno;
            //        var key = "E546C8DF278CD5931069B522E695D4F2";
            //        var decrypted = DecryptString(addno, key);
            //        objout.context.KYC[j].in_proof_doc_adharno = decrypted;
            //        objout.context.KYC[j].in_proof_doc_no = decrypted;
            //    }
            //}
            
            
            return Json(post_data);
        }


        #region FarmerFetch
        public class FHeader
        {
            public int in_farmer_rowid { get; set; }
            public string in_farmer_code { get; set; }
            public int in_version_no { get; set; }
            public string in_photo_farmer { get; set; }
            //Prema added for meity demo changes on may 16
            public string in_member_id { get; set; }
            public string in_fpo_name { get; set; }
            //END
            public string in_farmer_name { get; set; }
            public string in_sur_name { get; set; }
            public string in_fhw_name { get; set; }
            public string in_farmer_dob { get; set; }
            public string in_farmer_addr1 { get; set; }
            public string in_farmer_addr2 { get; set; }
            public string in_farmer_ll_name { get; set; }
            public string in_sur_ll_name { get; set; }
            public string in_fhw_ll_name { get; set; }
            public string in_farmer_ll_addr1 { get; set; }
            public string in_farmer_ll_addr2 { get; set; }
            public string in_farmer_country { get; set; }
            public string in_farmer_country_desc { get; set; }
            public string in_farmer_country_ll_desc { get; set; }
            public string in_farmer_state { get; set; }
            public string in_farmer_state_desc { get; set; }
            public string in_farmer_state_ll_desc { get; set; }
            public string in_farmer_dist { get; set; }
            public string in_farmer_dist_desc { get; set; }
            public string in_farmer_dist_ll_desc { get; set; }
            public string in_farmer_taluk { get; set; }
            public string in_farmer_taluk_desc { get; set; }
            public string in_farmer_taluk_ll_desc { get; set; }
            public string in_farmer_panchayat { get; set; }
            public string in_farmer_panchayat_desc { get; set; }
            public string in_farmer_panchayat_ll_desc { get; set; }
            public string in_farmer_village { get; set; }
            public string in_farmer_village_desc { get; set; }
            public string in_farmer_village_ll_desc { get; set; }
            public string in_farmer_pincode { get; set; }
            public string in_farmer_pincode_desc { get; set; }
            public string in_marital_status { get; set; }
            public string in_marital_status_desc { get; set; }
            public string in_gender_flag { get; set; }
            public string in_gender_flag_desc { get; set; }
            public string in_reg_mobile_no { get; set; }
            public string in_reg_note { get; set; }
            public string in_status_code { get; set; }
            public string in_status_desc { get; set; }
            public string in_mode_flag { get; set; }
            public string in_row_timestamp { get; set; }
        }

        public class FKyc
        {
            public int in_farmerkyc_rowid { get; set; }
            public string in_proof_type { get; set; }
            public string in_proof_type_desc { get; set; }
            public string in_proof_doc { get; set; }
            public string in_proof_doc_desc { get; set; }
            public string in_proof_doc_no { get; set; }
            public string in_proof_doc_adharno { get; set; }
            public string in_proof_valid_till { get; set; }
            public string in_status_code { get; set; }
            public string in_status_desc { get; set; }
            public string in_mode_flag { get; set; }
            public string in_photo_kyc { get; set; }
        }

        public class FBank
        {
            public int in_farmerbank_rowid { get; set; }
            public string in_bank_acc_no { get; set; }
            public string in_bank_acc_type { get; set; }
            public string in_bank_acc_type_desc { get; set; }
            public string in_bank_code { get; set; }
            public string in_bank_desc { get; set; }
            public string in_branch_code { get; set; }
            public string in_branch_desc { get; set; }
            public string in_ifsc_code { get; set; }
            public string in_dflt_dr_acc { get; set; }
            public string in_dflt_dr_acc_desc { get; set; }
            public string in_dflt_cr_acc { get; set; }
            public string in_dflt_cr_acc_desc { get; set; }
            public string in_status_code { get; set; }
            public string in_status_desc { get; set; }
            public string in_mode_flag { get; set; }
        }
        public class constentDtl
        {
            public int in_farmerconsent_rowid { get; set; }
            public string in_template_id { get; set; }
            public string in_consent_owner_id { get; set; }
            public string in_consent_to { get; set; }
            public string in_lang_code { get; set; }
            public string template_consent { get; set; }
            public string in_otp_flag { get; set; }
            public string in_isverified { get; set; }
            public string in_isverified_code { get; set; }
            public string in_attach_consent { get; set; }
            public string in_attachment_flag { get; set; }
            public string in_mobile_no { get; set; }
            public string in_attach_type { get; set; }
            public string in_verified_date { get; set; }
        }
        public class FContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FHeader Header { get; set; }
            public List<FKyc> KYC { get; set; }
            public List<FBank> Bank { get; set; }
            public List<constentDtl> consent { get; set; }
        }

        public class FRootObject
        {
            public FContext context { get; set; }
            public object ApplicationException { get; set; }
        }
        #endregion

        #region GetFarmersList
        public class FarmerFilter
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

        public class FarmerList
        {
            public int out_farmer_rowid { get; set; }
            public string out_farmer_code { get; set; }
            public int out_version_no { get; set; }
            public string out_photo_farmer { get; set; }
            //Prema added for meity demo changes on may 16
            public string out_member_id { get; set; }
            public string out_fpo_name { get; set; }
         //END
            public string out_farmer_name { get; set; } 
            public string out_sur_name { get; set; }
            public string out_fhw_name { get; set; }
            public string out_farmer_dob { get; set; }
            public string out_farmer_addr1 { get; set; }
             public string Hamlet { get; set; }
            public string out_farmer_ll_name { get; set; }
            public string out_sur_ll_name { get; set; }
            public string out_fhw_ll_name { get; set; }
            public string out_farmer_ll_addr1 { get; set; }
            public string out_farmer_ll_addr2 { get; set; }
            public string out_farmer_country { get; set; }
            public string out_farmer_country_desc { get; set; }
            public string out_farmer_state { get; set; }
            public string out_farmer_state_desc { get; set; }
            public string out_farmer_dist { get; set; }
            public string out_farmer_dist_desc { get; set; }
            public string out_farmer_taluk { get; set; }
            public string out_farmer_taluk_desc { get; set; }
            public string out_farmer_panchayat { get; set; }
            public string out_farmer_panchayat_desc { get; set; }
            public string out_farmer_village { get; set; }
            public string out_farmer_village_desc { get; set; }
            public string out_farmer_pincode { get; set; }
            public string out_farmer_pincode_desc { get; set; }
            public string out_marital_status { get; set; }
            public string out_marital_status_desc { get; set; }
            public string out_gender_flag { get; set; }
            public string out_gender_flag_desc { get; set; }
            public string out_reg_mobile_no { get; set; }
            public string out_reg_note { get; set; }
            public string out_status_code { get; set; }
            public string out_status_desc { get; set; }
            public string out_row_timestamp { get; set; }
        }

        public class FarmerContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public FarmerFilter Filter { get; set; }
            public List<FarmerList> List { get; set; }
        }

        public class FarmerApplicationException
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }

        public class FarmerRootObject
        {
            public FarmerContext context { get; set; }
            public FarmerApplicationException ApplicationException { get; set; }
        }

        #endregion

        #region SaveFarmer
        public class SFarmerHeaderSegment
        {
            public int in_farmer_rowid { get; set; }
            public string in_farmer_code { get; set; }
            public string in_fpo_orgncode { get; set; }//Prema Added for farmer mapping on apr12 2022
            public int in_version_no { get; set; }
            public string in_photo_farmer { get; set; }
            public string in_farmer_name { get; set; }
            public string in_sur_name { get; set; }
            public string in_fhw_name { get; set; }
            public string in_farmer_dob { get; set; }
            public string in_farmer_addr1 { get; set; }
            public string in_farmer_addr2 { get; set; }
            public string in_farmer_ll_name { get; set; }
            public string in_sur_ll_name { get; set; }
            public string in_fhw_ll_name { get; set; }
            public string in_farmer_ll_addr1 { get; set; }
            public string in_farmer_ll_addr2 { get; set; }
            public string in_farmer_country { get; set; }
            public string in_farmer_state { get; set; }
            public string in_farmer_dist { get; set; }
            public string in_farmer_taluk { get; set; }
            public string in_farmer_panchayat { get; set; }
            public string in_farmer_village { get; set; }
            public string in_farmer_pincode { get; set; }
            public string in_marital_status { get; set; }
            public string in_gender_flag { get; set; }
            public string in_reg_mobile_no { get; set; }
            public string in_reg_note { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
            public string in_row_timestamp { get; set; }
            public string in_dup_flag { get; set; }
        }

        public class SFarmerKycSegment
        {
            public int in_farmerkyc_rowid { get; set; }
            public string in_proof_type { get; set; }
            public string in_proof_doc { get; set; }
            public string in_proof_doc_no { get; set; }
            public string in_proof_doc_adharno { get; set; }
            public string in_proof_valid_till { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }

        public class SFarmerBankSegment
        {
            public int in_farmerbank_rowid { get; set; }
            public string in_bank_acc_no { get; set; }
            public string in_bank_acc_type { get; set; }
            public string in_bank_code { get; set; }
            public string in_branch_code { get; set; }
            public string in_ifsc_code { get; set; }
            public string in_dflt_dr_acc { get; set; }
            public string in_dflt_cr_acc { get; set; }
            public string in_status_code { get; set; }
            public string in_mode_flag { get; set; }
        }

        public class SFarmerContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SFarmerHeaderSegment Header { get; set; }
            public List<SFarmerKycSegment> KYC { get; set; }
            public List<SFarmerBankSegment> Bank { get; set; }
        }

        public class SFarmerDocument
        {
            public SFarmerContext context { get; set; }
            public ApplicationExceptionlist ApplicationException { get; set; }
        }
        public class ApplicationExceptionlist
        {
            public string errorNumber { get; set; }
            public string errorDescription { get; set; }
        }
        public class SFarmerRootObject
        {
            public SFarmerDocument document { get; set; }
        }

        #endregion

        #region Translator
        [HttpGet]
        public JsonResult Foo(string id)
        {
            //  Translate trans = new Translate();
            //  trans.engText = "";
            //  trans.tmText = "";
            //// var langpair = "en%7Cta#en/ta/" + id;
            //  var langpair = "en%7Chi#en/hi/" + id;
            //  string url = String.Format("http://www.google.com/translate_t?hl=en&ie=UTF8&text={0}&langpair={1}", id, langpair);

            //  WebClient webClient = new WebClient();
            //  webClient.Encoding = System.Text.Encoding.UTF8;
            //  string result = webClient.DownloadString(url);
            //  result = result.Substring(result.IndexOf("<span title=\"") + "<span title=\"".Length);
            //  result = result.Substring(result.IndexOf(">") + 1);
            //  result = result.Substring(0, result.IndexOf("</span>"));           
            //  return Json(result, JsonRequestBehavior.AllowGet);
            var toLanguage = "";
            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                toLanguage = "ta";//tamil
            }
            else
            {
                toLanguage = "hi";//hindi
            }
            var fromLanguage = "en";//english
            var url = string.Format("https://translate.googleapis.com/translate_a/single?client=gtx&sl={0}&tl={1}&dt=t&q={2}", fromLanguage, toLanguage, System.Web.HttpUtility.UrlEncode(id));
            var webClient = new WebClient
            {
                Encoding = System.Text.Encoding.UTF8
            };
            var result = webClient.DownloadString(url);
            try
            {
                result = result.Substring(4, result.IndexOf("\"", 4, StringComparison.Ordinal) - 4);

            }
            catch
            {
                return Json("Error");
            }
            return Json(result);

        }

        public JsonResult Vijay(string id)
        {
            Translate trans = new Translate();
            trans.engText = "";
            trans.tmText = "";
            var langpair = "";
            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                langpair = "en%7Cta#en/ta/" + id;
            }
            else
            {
                langpair = "en%7Chi#en/hi/" + id;
            }
            string url = String.Format("https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&source=en&target=hi&q={0}", id);
            WebClient webClient = new WebClient();
            webClient.Encoding = System.Text.Encoding.UTF8;
            string result = webClient.DownloadString(url);
            result = result.Substring(result.IndexOf("<span title=\"") + "<span title=\"".Length);
            result = result.Substring(result.IndexOf(">") + 1);
            result = result.Substring(0, result.IndexOf("</span>"));
            //string tRes = HttpUtility.HtmlDecode(result).ToString();
            //result = UnescapeHex(result);
            return Json(result);
        }

        public static string UnescapeHex(string data)
        {
            UTF8Encoding utf8 = new UTF8Encoding();
            Byte[] encodedBytes = utf8.GetBytes(data);
            String decodedString = utf8.GetString(encodedBytes);
            return decodedString;
        }
        #endregion



        public static string EncryptString(string text, string keyString)
        {
            
            var key = Encoding.UTF8.GetBytes(keyString);

            using (var aesAlg = Aes.Create())
            {
                using (var encryptor = aesAlg.CreateEncryptor(key, aesAlg.IV))
                {
                    using (var msEncrypt = new MemoryStream())
                    {
                        using (var csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                        using (var swEncrypt = new StreamWriter(csEncrypt))
                        {
                            swEncrypt.Write(text);
                        }

                        var iv = aesAlg.IV;

                        var decryptedContent = msEncrypt.ToArray();

                        var result = new byte[iv.Length + decryptedContent.Length];

                        Buffer.BlockCopy(iv, 0, result, 0, iv.Length);
                        Buffer.BlockCopy(decryptedContent, 0, result, iv.Length, decryptedContent.Length);

                        return Convert.ToBase64String(result);
                    }
                }
            }
        }

        public static string DecryptString(string cipherText, string keyString)
        {
            var fullCipher = Convert.FromBase64String(cipherText);

            var iv = new byte[16];
            var cipher = new byte[16];

            Buffer.BlockCopy(fullCipher, 0, iv, 0, iv.Length);
            Buffer.BlockCopy(fullCipher, iv.Length, cipher, 0, iv.Length);
            var key = Encoding.UTF8.GetBytes(keyString);

            using (var aesAlg = Aes.Create())
            {
                using (var decryptor = aesAlg.CreateDecryptor(key, iv))
                {
                    string result;
                    using (var msDecrypt = new MemoryStream(cipher))
                    {
                        using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                        {
                            using (var srDecrypt = new StreamReader(csDecrypt))
                            {
                                result = srDecrypt.ReadToEnd();
                            }
                        }
                    }

                    return result;
                }
            }
        }

        #region consent List
        public class tempalteContextDtl
        {
            public int template_id { get; set; }
            public string template_consent { get; set; }
            public string effective_From { get; set; }
            public string effective_to { get; set; }
            public string lang_code { get; set; }
            public string status_code { get; set; }
            public string status_desc { get; set; }
        }

        public class tempalteContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string instance { get; set; }
            public List<tempalteContextDtl> tempalteContextDtl { get; set; }
        }

        public class tempalteList
        {
            public tempalteContext context { get; set; }
            public ApplicationException ApplicationException { get; set; }
        }
        #endregion

        public ActionResult GetconstenttemplateList([FromBody] tempalteContext objContext)
        {
            tempalteList objList = new tempalteList();
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
                string Urlcon = "FDR_Constent/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("FarmerConstenttemplatefetch", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objList = (tempalteList)JsonConvert.DeserializeObject(post_data, typeof(tempalteList));
            }
            return Json(objList);
        }

        [HttpPost]
        public ActionResult Getsmsconsent([FromBody] smsContext objContext)
        {
            smsContextresponse obj = new smsContextresponse();            

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
                string Urlcon = "SendSMS/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objContext), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("SendSMS", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                obj = (smsContextresponse)JsonConvert.DeserializeObject(post_data, typeof(smsContextresponse));
            }
            return Json(obj);
        }
        public class smsContext
        {
            public string senderid { get; set; }
            public string mobile_no { get; set; }
            public string msg_desc { get; set; }          
        }
        public class smsContextresponse
        {
            public string errorCode { get; set; }
            public string errorMessage { get; set; }
            public string send_sms { get; set; }
        }
        [HttpPost]
        public ActionResult consentsave([FromBody] fdrconstentContext objContext)
        {
            fdrconstentroot objRoot = new fdrconstentroot();
            fdrconstentDocument objDoc = new fdrconstentDocument();
            fdrconstentContext objContextDetails = new fdrconstentContext();
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.userId = objContext.userId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.Header = objContext.Header;
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
                string Urlcon = "FDR_Constent/";
                client.BaseAddress = new Uri(urlstring + Urlcon);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpContent content = new StringContent(JsonConvert.SerializeObject(objRoot), UTF8Encoding.UTF8, "application/json");
                var response = client.PostAsync("FarmerConstentsave", content).Result;
                Stream data = response.Content.ReadAsStreamAsync().Result;
                StreamReader reader = new StreamReader(data);
                post_data = reader.ReadToEnd();
                objDoc = (fdrconstentDocument)JsonConvert.DeserializeObject(post_data, typeof(fdrconstentDocument));
            }
            return Json(objDoc);
        }
        #region save
        public class fdrconstentDetail
        {
            public int In_farmerconsent_rowid { get; set; }
            public string In_template_id { get; set; }
            public string In_consent_owner_id { get; set; }
            public string In_consent_to { get; set; }
            public string In_lang_code { get; set; }
            public string In_otp { get; set; }
            public string In_otp_flag { get; set; }
            public string In_isverified { get; set; }
            public string In_attach_consent { get; set; }
            public string In_attachment_flag { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }
            public string In_mobile_no { get; set; }
            public string In_attach_type { get; set; }
            public string In_verified_date { get; set; }
        }

        public class fdrconstentContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public string instance { get; set; }
            public fdrconstentDetail Header { get; set; }
        }

        public class fdrconstentDocument
        {
            public fdrconstentContext context { get; set; }
        }

        public class fdrconstentroot
        {
            public fdrconstentDocument document { get; set; }
        }
        #endregion


        #region view local
        public string Home_db(string id, string langcode)
        {
            DataTable response = new DataTable();           
                string filname = "";
                //ramya added on 03 Nov 21
                if (langcode == null)
                {
                    langcode = "en_US";
                }
                string lang = langcode.Replace("_", "-");
                //Response.Cookies.Append(CookieRequestCultureProvider.DefaultCookieName, CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(lang)), new CookieOptions { Expires = DateTimeOffset.Now.AddDays(30) });
                //string nedd = _stringLocalizer["lblfarmernam"].Value;
                response.Columns.Add("control_code", typeof(string));
                response.Columns.Add("control_value", typeof(string));
                response.Columns.Add("data_field", typeof(string));
                //var resourceSet = _stringLocalizer.GetAllStrings();
                XmlDocument doc = new XmlDocument();
                string contentRootPath = _hostingEnvironment.ContentRootPath;
                string folderName = "wwwroot";
                string filePath = Path.Combine(contentRootPath, folderName);
                string folderName1 = "Resources";
                if (langcode == "en_US")
                {
                    filname = "Global.en-US.resx";
                }
                else
                {
                    filname = "Global.hi-IN.resx";
                }
                string filePathloc = Path.Combine(filePath, folderName1, filname);
                //"F:\\Arul\\1-6-2021 fin\\FrontEnd\\fintantra-product-frontend\\FFI\\Resources\\Controllers.ListViewMakerController.en-US.resx";
                doc.Load(filePathloc);
                XmlNodeList nodevalue = doc.SelectNodes("//root//data");
                for (int i = 0; i < nodevalue.Count; i++)
                {
                    var finalscreen = nodevalue[i]["comment"].InnerXml.Split("-");
                    if (finalscreen[1] == id)
                    {
                        DataRow dr = response.NewRow();
                        var datastr = nodevalue[i].OuterXml.Substring(12);
                        var datastr1 = datastr.Split("xml");
                        var datastr2 = datastr1[0].Split('"');
                        dr["control_code"] = datastr2[0].ToString();
                        dr["control_value"] = nodevalue[i]["value"].InnerXml;
                        dr["data_field"] = nodevalue[i]["comment"].InnerXml;
                        response.Rows.Add(dr);
                    }
                }           
            //ViewBag.local = response;
            return JsonConvert.SerializeObject(response);
        }
        #endregion


    }
}