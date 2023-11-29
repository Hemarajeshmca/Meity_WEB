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
    public class DownloadableTemplateController : Controller
    {
        // GET: DownloadableTemplate
        public ActionResult DownloadableTemplateList()
        {
            return View();
        }


        public ActionResult DownloadableTemplateForm()
        {
            return View();
        }

        //[HttpPost]
        //public string fetch_TemlateList(string receiveData)
        //{
        //    dynamic Temp_list = new JObject();
        //    try
        //    {
        //        dynamic receive_data = JObject.Parse(receiveData);
                

        //        common.getTemplateListRequestcontext context = new common.getTemplateListRequestcontext();
        //        common.getTemplateListRequestFilter filter = new common.getTemplateListRequestFilter();
        //        common.getTemplateListRequest doc = new common.getTemplateListRequest();

        //        context = (common.getTemplateListRequestcontext)FFI.Common.Util.setDbContext(context);

        //        filter.FilterBy_code = "";
        //        filter.FilterBy_FromValue = (Common.Global.filter_condition != null ? Common.Global.filter_condition : "");
        //        filter.FilterBy_Option = receive_data.status == null ? "" : receive_data.status; ;
        //        filter.FilterBy_ToValue = "";

        //        context.Filter = filter;
        //        doc.context = context;

        //        common.getTemplateListResponse response = new common.getTemplateListResponse();
        //        common.WsTemplatesSoapClient soap = new common.WsTemplatesSoapClient();

        //        response = soap.getTemplateList(doc);


        //        if (response.ApplicationException != null)
        //        {
        //            string errmsg = response.ApplicationException.errorDescription.ToString();
        //            string encoded_msg = Common.Util.Html_Encode(errmsg);
        //            throw new Exception(encoded_msg);
        //        }
        //        else
        //        {
        //            Temp_list.success = true;
        //            Temp_list.result = JsonConvert.SerializeObject(response.context.List);
        //            Common.Global.filter_condition = "";
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        Temp_list.msg = ex.Message;
        //        Temp_list.success = false;
        //        Common.LogTest.TestClass.getLogError(
        //               Request.RequestContext.RouteData.Values["controller"].ToString(),
        //               MethodBase.GetCurrentMethod().Name, ex.Message);
        //    }
        //    return JsonConvert.SerializeObject(Temp_list);
        //}


        //[HttpPost]
        //public string fetch_DownloadDetails(string receiveData)
        //{
        //    dynamic Temp_list = new JObject();
        //    try
        //    {
        //        dynamic receive_data = JObject.Parse(receiveData);
        //        common.getTemplateRequestcontext context = new common.getTemplateRequestcontext();
        //        common.getTemplateRequestHeader header = new common.getTemplateRequestHeader();
        //        common.getTemplateRequest doc = new common.getTemplateRequest();

        //        context = (common.getTemplateRequestcontext)FFI.Common.Util.setDbContext(context);
        //        var menu = receive_data.tmpl_rowid;
        //        header.menu_rowid = menu.Value;
                
        //        context.Header = header;
        //        doc.context = context;

        //        common.getTemplateResponse response = new common.getTemplateResponse();
        //        common.WsTemplatesSoapClient soap = new common.WsTemplatesSoapClient();

        //        response = soap.getTemplate(doc);
        //        if (response.ApplicationException != null)
        //        {
        //            string errmsg = response.ApplicationException.errorDescription.ToString();
        //            string encoded_msg = Common.Util.Html_Encode(errmsg);
        //            throw new Exception(encoded_msg);
        //        }
        //        else
        //        {
        //            Temp_list.success = true;
        //            Temp_list.template = JsonConvert.SerializeObject(response.context.Template);
        //            Common.Global.filter_condition = "";
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        Temp_list.msg = ex.Message;
        //        Temp_list.success = false;
        //        Common.LogTest.TestClass.getLogError(
        //               Request.RequestContext.RouteData.Values["controller"].ToString(),
        //               MethodBase.GetCurrentMethod().Name, ex.Message);
        //    }


        //    return JsonConvert.SerializeObject(Temp_list);
        //}

        //[HttpPost]
        //public string save_Template(HttpPostedFileBase upFiles, string formval, string userId, string mode, string down_temp)
        //{
        //    dynamic Doc_save_detail = new JObject();
        //    try
        //    {
        //        dynamic form_val = JObject.Parse(formval);
        //        string name = form_val.tempName;
        //        string ipAddress = "";
        //        string fileExtension = "";
        //        string fileLocation = "";

        //        if (ConfigurationManager.AppSettings.Count > 0)
        //        {
        //            ipAddress = ConfigurationManager.AppSettings["helpUrl"].ToString();
        //            string[] fileArr = ipAddress.Split(new string[] { "help" }, StringSplitOptions.None);
        //            ipAddress = fileArr[0].ToString();
        //        }
        //        if (upFiles != null && upFiles.ContentLength > 0)
        //        {
        //            if (Request.Files["upFiles"].ContentLength > 0)
        //            {
        //                fileExtension = System.IO.Path.GetExtension(Request.Files["upFiles"].FileName);
        //                fileLocation = Server.MapPath("/ws/FFI/") + name + fileExtension;
        //                if (System.IO.File.Exists(fileLocation))
        //                {
        //                    System.IO.File.Delete(fileLocation);
        //                }
        //                Request.Files["upFiles"].SaveAs(fileLocation);
        //            }
        //        }

        //        string file_path = ipAddress + "/ws/FFI/" + name + fileExtension;
        //        Doc_save_detail.result = ipAddress + "/ws/FFI/" + name + fileExtension;

        //        common.downloadableTemplateRequestcontext context = new common.downloadableTemplateRequestcontext();
        //        common.downloadableTemplateRequestHeader header = new common.downloadableTemplateRequestHeader();
        //        common.downloadableTemplateRequestTemplate template = new common.downloadableTemplateRequestTemplate();
        //        common.downloadableTemplateRequest doc = new common.downloadableTemplateRequest();

        //        context = (common.downloadableTemplateRequestcontext)FFI.Common.Util.setDbContext(context);

        //        if (mode == "New Mode")
        //        {
        //            header.menu_rowid = form_val.menu_id;
        //            context.Header = header;
        //            template.tmpl_rowid = 0;
        //            template.type_code = form_val.tempType;
        //            template.seq_no = 0;
        //            template.template_name = form_val.tempName;
        //            template.note = form_val.notes;
        //            template.file_path = file_path;
        //            template.mode_flag = "I";
        //            context.Template = template;

        //            doc.context = context;

        //            common.downloadableTemplateResponse response = new common.downloadableTemplateResponse();
        //            common.WsTemplatesSoapClient soap = new common.WsTemplatesSoapClient();

        //            response = soap.downloadableTemplate(doc);

        //            if (response.ApplicationException != null)
        //            {
        //                string errmsg = response.ApplicationException.errorDescription.ToString();
        //                string encoded_msg = Common.Util.Html_Encode(errmsg);
        //                throw new Exception(encoded_msg);
        //            }
        //            else
        //            {
        //                Doc_save_detail.success = true;
        //                Doc_save_detail.msg = "Template details saved successfully..";
        //            }
        //        }
        //        else
        //        {
        //            dynamic grid_val = JsonConvert.DeserializeObject(down_temp);
        //            //ArrayList tmp = new ArrayList();
        //            foreach (var item in grid_val)
        //            {
        //                header.menu_rowid = form_val.menu_id;
        //                context.Header = header;
        //                template.tmpl_rowid = (item.row_id == "" ? 0 : Convert.ToInt16(item.tmpl_rowid));
        //                template.type_code = item.type_code;
        //                template.seq_no = 0; //(item.seq_no == "" ? 0 : Convert.ToInt16(item.seq_no));
        //                template.template_name = item.template_name;
        //                template.note = item.note;
        //                template.file_path = item.file_path;
        //                template.mode_flag = (item.mode_flag == "S") ? "U" : item.mode_flag;
        //                //tmp.Add(template);                        
        //                context.Template = template;

        //                doc.context = context;
        //                common.downloadableTemplateResponse response = new common.downloadableTemplateResponse();
        //                common.WsTemplatesSoapClient soap = new common.WsTemplatesSoapClient();
        //                response = soap.downloadableTemplate(doc);
                       
        //                if (response.ApplicationException != null)
        //                {
        //                    string errmsg = response.ApplicationException.errorDescription.ToString();
        //                    string encoded_msg = Common.Util.Html_Encode(errmsg);
        //                    throw new Exception(encoded_msg);
        //                }
        //            }
        //        }
        //        Doc_save_detail.success = true;
        //        Doc_save_detail.msg = "Template details saved successfully..";
        //    }
        //    catch (Exception ex)
        //    {
        //        Doc_save_detail.msg = ex.Message;
        //        Doc_save_detail.success = false;
        //        Common.LogTest.TestClass.getLogError(
        //               Request.RequestContext.RouteData.Values["controller"].ToString(),
        //               MethodBase.GetCurrentMethod().Name, ex.Message);
        //    }

        //    return JsonConvert.SerializeObject(Doc_save_detail);
        //}

        //[HttpPost]
        //public string delete_template(string receiveData)
        //{
        //    dynamic upload_save_detail = new JObject();
        //    try
        //    {
        //        dynamic receive_data = JObject.Parse(receiveData);
        //        var row_id = receive_data.rowId;
        //        var rowID = row_id.Value;
        //        var temp_name = receive_data.tempname;
        //        var tempName = temp_name.Value;
        //        var file_path = receive_data.filepath;
        //        var filepath = file_path.Value;

        //        common.downloadableTemplateRequestcontext context = new common.downloadableTemplateRequestcontext();
        //        common.downloadableTemplateRequestHeader header = new common.downloadableTemplateRequestHeader();
        //        common.downloadableTemplateRequestTemplate template = new common.downloadableTemplateRequestTemplate();
        //        common.downloadableTemplateRequest doc = new common.downloadableTemplateRequest();

        //        context = (common.downloadableTemplateRequestcontext)FFI.Common.Util.setDbContext(context);

        //        // dynamic form_val = JsonConvert.DeserializeObject(form.Value);
        //        header.menu_rowid = "";
        //        context.Header = header;
        //        template.tmpl_rowid = rowID;
        //        template.type_code = "";
        //        template.seq_no = 0;
        //        template.template_name = tempName;
        //        template.note = "";
        //        template.file_path = file_path;
        //        template.mode_flag = "D";
        //        context.Template = template;
        //        doc.context = context;

        //        common.downloadableTemplateResponse response = new common.downloadableTemplateResponse();
        //        common.WsTemplatesSoapClient soap = new common.WsTemplatesSoapClient();

        //        response = soap.downloadableTemplate(doc);

        //        if (response.ApplicationException != null)
        //        {
        //            string errmsg = response.ApplicationException.errorDescription.ToString();
        //            string encoded_msg = Common.Util.Html_Encode(errmsg);
        //            throw new Exception(encoded_msg);
        //        }
        //        else
        //        {
        //            upload_save_detail.success = true;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        upload_save_detail.msg = ex.Message;
        //        upload_save_detail.success = false;
        //        Common.LogTest.TestClass.getLogError(
        //               Request.RequestContext.RouteData.Values["controller"].ToString(),
        //               MethodBase.GetCurrentMethod().Name, ex.Message);
        //    }

        //    return JsonConvert.SerializeObject(upload_save_detail);
        //}

      


    }
}