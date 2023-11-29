using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using MasterCodes.Models;
using MasterCode.Models;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.IO;
using FFI_Datamodel;

namespace FFI.Controllers
{
    public class ForgotPasswordController : Controller
    {
        //
        // GET: /ForgotPassword/
        public ActionResult ForgotPassword()
        {
            return View();
        }
        private IConfiguration _configuration;
        public ForgotPasswordController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        string urlstring = "";
        //[HttpPost]
        //public string Forget_Password(string formval)
        //{
        //    dynamic Password_detail = new JObject();
        //    try
        //    {
        //        sqlwebservice.ContextVO context = new sqlwebservice.ContextVO();
        //        sqlwebservice.Sql_WebService_Content wbs = new sqlwebservice.Sql_WebService_Content();

        //        if (ConfigurationManager.AppSettings.Count > 0)
        //        {
        //            context.dbServer = ConfigurationManager.AppSettings["dbServer"].ToString();
        //            var Dbtype = ConfigurationManager.AppSettings["Instance"].ToString();
        //            if (Dbtype == "bh") { context.dbName = ConfigurationManager.AppSettings["dbNameBh"].ToString(); }
        //            else if (Dbtype == "up") { context.dbName = ConfigurationManager.AppSettings["dbNameUP"].ToString(); }
        //            else if (Dbtype == "od") { context.dbName = ConfigurationManager.AppSettings["dbNameOD"].ToString(); }
        //            else { context.dbName = ConfigurationManager.AppSettings["dbNameTA"].ToString(); }
        //            context.userID = ConfigurationManager.AppSettings["dbUser"].ToString();
        //            context.password = ConfigurationManager.AppSettings["dbPwd"].ToString();
        //        }

        //        wbs.obj_Sql_Service = forgetpasswordmenu(formval);

        //        sqlwebservice.Sql_WebService_Response response = new sqlwebservice.Sql_WebService_Response();
        //        sqlwebservice.SqlWebServicesSoapClient soap = new sqlwebservice.SqlWebServicesSoapClient();
        //        response = soap.Sql_Service(context, "ASPIRE", wbs);

        //        if (response.errorList != null)
        //        {
        //            string errmsg = response.errorList[0].errorDescription.ToString();
        //            string encoded_msg = Common.Util.Html_Encode(errmsg);
        //            throw new Exception(encoded_msg);
        //        }
        //        else
        //        {
        //            Password_detail.msg = "Password/ Security Q and A updated successfully <br> Relogin using New Password";
        //            Password_detail.success = true;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Password_detail.msg = ex.Message;
        //        Password_detail.success = false;

        //    }

        //    return JsonConvert.SerializeObject(Password_detail);
        //}

        //public sqlwebservice.Sql_WebService[] forgetpasswordmenu(string formval)
        //{
        //    string mode_flag = "";

        //    dynamic obj = JObject.Parse(formval);
        //    List<sqlwebservice.Sql_WebService> qryAc = new List<sqlwebservice.Sql_WebService>();
        //    sqlwebservice.Sql_WebService arrDtl = new sqlwebservice.Sql_WebService();

        //    if (obj.seq_mode == "")
        //        mode_flag = "C";
        //    else
        //        mode_flag = "F";

        //    string dbLocation = ConfigurationManager.AppSettings["locnId"].ToString();
        //    string orgId = ConfigurationManager.AppSettings["orgId"].ToString();

        //    string sql = "update User_Details set user_password = PWDENCRYPT ('" + Convert.ToString(obj.new_password) + "'), security_ques = '" + Convert.ToString(obj.sec_question) + "', answer = '" + Convert.ToString(obj.answer) + "'  where user_id = '" + Convert.ToString(obj.user_name) + "'";
        //    //arrDtl.execString = "exec change_sec_ques_answer '" + Convert.ToString(obj.user_name) + "' , '" + Convert.ToString(obj.sec_question) + "' , '" + Convert.ToString(obj.answer) + "' , '" + mode_flag + "', '" + orgId + "','" + dbLocation + "', '" + Convert.ToString(obj.user_name) + "'";
        //    qryAc.Add(arrDtl);
        //    return qryAc.ToArray();
        //}

        dynamic retrieveMasterDefinitionList_Detail_response = new MasterCodesModels.retrieveMasterDefinitionListResponseDetail[0];
        dynamic retrieveMasterDefinitionScreenIdResponseDetail = new MasterCodeModels.retrieveMasterDefinitionScreenIdResponseDetail[0];

        public string mastercodelist()
        {
            try
            {
                dynamic master_header = new JObject();
                master_header.parent_code = "ALL";
                MasterDefinition_APIClient mastercode = new MasterDefinition_APIClient();
                mastercode.invokeAPI_Master_retrievemastercode_list(null, master_header, ref retrieveMasterDefinitionList_Detail_response);
                Common.Util.mstlist = retrieveMasterDefinitionList_Detail_response;

            }
            catch (Exception ex)
            {
                //Common.LogTest.TestClass.getLogError(
                //       Request.RequestContext.RouteData.Values["controller"].ToString(),
                //       MethodBase.GetCurrentMethod().Name, ex.Message);
            }
            return JsonConvert.SerializeObject(Common.Util.mstlist);
        }


        [HttpPost]
        public string screenId_mastercodelist(string screen_Id)
        {
            try
            {
                dynamic master_header = new JObject();
                dynamic master_header_response = new JObject();
                master_header.screen_code = screen_Id;
                MasterDefinition_APIClient mastercode = new MasterDefinition_APIClient();
                mastercode.invokeAPI_Master_retrieveMasterDefinitionScreenId(null, master_header, master_header_response, ref retrieveMasterDefinitionScreenIdResponseDetail);
                Common.Util.mstScreenlist = retrieveMasterDefinitionScreenIdResponseDetail;
            }
            catch (Exception ex)
            {
            }
            return JsonConvert.SerializeObject(Common.Util.mstScreenlist);
        }
        public class combo_values
        {
            public string mstcode { get; set; }
        }

        //[HttpPost]
        //public string getScreenIDcode([FromBody] combo_values data)
        //{
        //    DataTable dt = Common.Util.load_ScreenIDmastercodes(data);//,"");
        //    return JsonConvert.SerializeObject(dt);

        //}

        public ActionResult SaveForgotPassword([FromBody] Context objContext)
        {
            Application objRoot = new Application();
            Document objDoc = new Document();
            Context objContextDetails = new Context();
            objContextDetails.userId = objContext.userId;
            objContextDetails.locnId = objContext.locnId;
            objContextDetails.localeId = objContext.localeId;
            objContextDetails.orgnId = objContext.orgnId;
            objContextDetails.Header = objContext.Header;

            objDoc.context = objContextDetails;
            objRoot.document = objDoc;

            string dbstring = "";
            if (_configuration.GetSection("AppSettings")["Instance"].ToString() == "Ta")
            {
                if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "DEV")
                {
                    dbstring = _configuration.GetSection("dbtypeOD")["mysqlcon"].ToString();

                }
                else if (_configuration.GetSection("AppSettings")["Environment"].ToString() == "UAT")
                {
                    dbstring = _configuration.GetSection("dbtypeTAUAt")["mysqlcon"].ToString();

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

            string response = "";
            LoginDatamodel objproduct1 = new LoginDatamodel();
            response = objproduct1.forgotpassword(objRoot.document.context.orgnId, objRoot.document.context.locnId, objRoot.document.context.userId, objRoot.document.context.localeId,
                objRoot.document.context.Header.user_code, objRoot.document.context.Header.secquestion_code,
               objRoot.document.context.Header.secquestion_answer, objRoot.document.context.Header.user_pwd, objRoot.document.context.Header.mode_flag, dbstring);

            return Json(response);
        }


        public static object[] mstlist;

        [HttpPost]
        public string getcode(string mstcode)
        {
            DataTable dt = Common.Util.load_mastercodes(mstcode);
            return JsonConvert.SerializeObject(dt);

        }


        #region save model
        public class Header
        {
            public string user_code { get; set; }
            public string secquestion_code { get; set; }
            public string secquestion_answer { get; set; }
            public string user_pwd { get; set; }
            public string mode_flag { get; set; }

        }
        public class Context
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public Header Header { get; set; }

        }
        public class Document
        {
            public Context context { get; set; }

        }
        public class Application
        {
            public Document document { get; set; }

        }
        #endregion


    }
}