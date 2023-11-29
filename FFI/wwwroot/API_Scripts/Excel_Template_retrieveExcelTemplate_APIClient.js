var ExcelTemplate_Excel_Template_retrieveExcelTemplate = {
    /*
     Function to invoke API
     Notes:
     Resource: Excel_Template
     Description: retrieveExcelTemplate
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveExcelTemplate_Request, callbackHandler)
    {
        var param_orgnid = (retrieveExcelTemplate_Request.context && retrieveExcelTemplate_Request.context.hasOwnProperty('orgnId')) ? retrieveExcelTemplate_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveExcelTemplate_Request.context && retrieveExcelTemplate_Request.context.hasOwnProperty('locnId')) ? retrieveExcelTemplate_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveExcelTemplate_Request.context && retrieveExcelTemplate_Request.context.hasOwnProperty('userId')) ? retrieveExcelTemplate_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveExcelTemplate_Request.context && retrieveExcelTemplate_Request.context.hasOwnProperty('localeId')) ? retrieveExcelTemplate_Request.context["localeId"] : null; //Unicode string(100)
        var param_excel_upload_code = (retrieveExcelTemplate_Request.context.Header && retrieveExcelTemplate_Request.context.Header.hasOwnProperty('excel_upload_code')) ? retrieveExcelTemplate_Request.context.Header["excel_upload_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExcelTemplate/excel_temp?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&excel_upload_code=" + param_excel_upload_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ExcelTemplate_Excel_Template_retrieveExcelTemplate.retrieveExcelTemplate_ResponseHandler);
        return true;
    },
    
    retrieveExcelTemplate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveExcelTemplate_ResponseObject = new retrieveExcelTemplateResponse(responseData, "JSON");
            ExcelTemplate_Excel_Template_retrieveExcelTemplate.callbackfunction(retrieveExcelTemplate_ResponseObject, textStatus);
        }
        else {
            ExcelTemplate_Excel_Template_retrieveExcelTemplate.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveExcelTemplateRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (contextrequestObject && contextrequestObject.hasOwnProperty('orgnId')) ? contextrequestObject["orgnId"] : null; //Unicode string(100)
        var param_locnid = (contextrequestObject && contextrequestObject.hasOwnProperty('locnId')) ? contextrequestObject["locnId"] : null; //Unicode string(100)
        var param_userid = (contextrequestObject && contextrequestObject.hasOwnProperty('userId')) ? contextrequestObject["userId"] : null; //Unicode string(128)
        var param_localeid = (contextrequestObject && contextrequestObject.hasOwnProperty('localeId')) ? contextrequestObject["localeId"] : null; //Unicode string(100)
        var param_excel_upload_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('excel_upload_code')) ? HeaderrequestObject["excel_upload_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExcelTemplate/excel_temp?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&excel_upload_code=" + param_excel_upload_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
