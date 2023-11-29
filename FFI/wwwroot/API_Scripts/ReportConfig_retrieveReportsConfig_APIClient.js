var ReportsConfig_ReportConfig_retrieveReportsConfig = {
    /*
     Function to invoke API
     Notes:
     Resource: ReportConfig
     Description: retrieveReportsConfig
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveReportsConfig_Request, callbackHandler)
    {
        var param_orgnid = (retrieveReportsConfig_Request.context && retrieveReportsConfig_Request.context.hasOwnProperty('orgnId')) ? retrieveReportsConfig_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveReportsConfig_Request.context && retrieveReportsConfig_Request.context.hasOwnProperty('locnId')) ? retrieveReportsConfig_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveReportsConfig_Request.context && retrieveReportsConfig_Request.context.hasOwnProperty('userId')) ? retrieveReportsConfig_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveReportsConfig_Request.context && retrieveReportsConfig_Request.context.hasOwnProperty('localeId')) ? retrieveReportsConfig_Request.context["localeId"] : null; //Unicode string(100)
        var param_report_rowid = (retrieveReportsConfig_Request.context.Header && retrieveReportsConfig_Request.context.Header.hasOwnProperty('report_rowid')) ? retrieveReportsConfig_Request.context.Header["report_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReportsConfig/report_config?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&report_rowid=" + param_report_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ReportsConfig_ReportConfig_retrieveReportsConfig.retrieveReportsConfig_ResponseHandler);
        return true;
    },
    
    retrieveReportsConfig_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveReportsConfig_ResponseObject = new retrieveReportsConfigResponse(responseData, "JSON");
            ReportsConfig_ReportConfig_retrieveReportsConfig.callbackfunction(retrieveReportsConfig_ResponseObject, textStatus);
        }
        else {
            ReportsConfig_ReportConfig_retrieveReportsConfig.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveReportsConfigRequestcontext();
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
        var param_report_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('report_rowid')) ? HeaderrequestObject["report_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReportsConfig/report_config?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&report_rowid=" + param_report_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
