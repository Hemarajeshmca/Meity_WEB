using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace FFI.Controllers
{
    public class ChangePasswordController : Controller
    {
        //
        // GET: /ChangePassword/
        public ActionResult ChangePassword()
        {
            return View();
        }
        //[HttpPost]
        //public string updatePassword(string formval)
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

        //        wbs.obj_Sql_Service = passwordmenu(formval);

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
        //            dynamic obj = JObject.Parse(formval);
        //            if (Convert.ToString(obj.sec_question) == null)
        //            {
        //                Password_detail.msg = "Password Details Saved Successfully..";
        //            }
        //            else
        //            {
        //                Password_detail.msg = "Security Q and A Details Saved Successfully..";
        //            }

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

        //public sqlwebservice.Sql_WebService[] passwordmenu(string formval)
        //{
        //    // dynamic obj = Common.Util.formValue_toJsonString(formval);

        //    dynamic obj = JObject.Parse(formval);

        //    List<sqlwebservice.Sql_WebService> qryAc = new List<sqlwebservice.Sql_WebService>();
        //    sqlwebservice.Sql_WebService arrDtl = new sqlwebservice.Sql_WebService();

        //    var sec_question = Convert.ToString(obj.sec_question);

        //    if (sec_question == null)
        //    {
        //        string sql =
        //         arrDtl.execString = "update User_Details set password = PWDENCRYPT ('" + Convert.ToString(obj.password) + "')  where user_id = '" + Convert.ToString(obj.user_id) + "'";
        //    }
        //    else
        //    {
        //        string sql =
        //       arrDtl.execString = "update User_Details set security_ques = '" + Convert.ToString(obj.sec_question) + "', answer = '" + Convert.ToString(obj.answer) + "'  where user_id = '" + Convert.ToString(obj.user_id_security) + "'";
        //    }


        //    qryAc.Add(arrDtl);
        //    return qryAc.ToArray();
        //}


     

      
	}
}