var FPOIncome_ExpenseReport_incme_exp_rpt_getIncome_ExpenseReport = {
    /*
     Function to invoke API
     Notes:
     Resource: incme_exp_rpt
     Description: getIncome_ExpenseReport
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getIncome_ExpenseReport_Request, callbackHandler)
    {
        var param_orgnid = (getIncome_ExpenseReport_Request.context && getIncome_ExpenseReport_Request.context.hasOwnProperty('orgnId')) ? getIncome_ExpenseReport_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (getIncome_ExpenseReport_Request.context && getIncome_ExpenseReport_Request.context.hasOwnProperty('locnId')) ? getIncome_ExpenseReport_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (getIncome_ExpenseReport_Request.context && getIncome_ExpenseReport_Request.context.hasOwnProperty('userId')) ? getIncome_ExpenseReport_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (getIncome_ExpenseReport_Request.context && getIncome_ExpenseReport_Request.context.hasOwnProperty('localeId')) ? getIncome_ExpenseReport_Request.context["localeId"] : null; //Unicode string(100)
        var param_report_code = (getIncome_ExpenseReport_Request.context.Header && getIncome_ExpenseReport_Request.context.Header.hasOwnProperty('Report_code')) ? getIncome_ExpenseReport_Request.context.Header["Report_code"] : null; //Unicode string(50)
        var param_businessactivity_code = (getIncome_ExpenseReport_Request.context.Header && getIncome_ExpenseReport_Request.context.Header.hasOwnProperty('businessactivity_code')) ? getIncome_ExpenseReport_Request.context.Header["businessactivity_code"] : null; //Unicode string(50)
        var param_report_date = (getIncome_ExpenseReport_Request.context.Header && getIncome_ExpenseReport_Request.context.Header.hasOwnProperty('Report_date')) ? getIncome_ExpenseReport_Request.context.Header["Report_date"] : null; //Unicode string(20)
        var param_frequency_code = (getIncome_ExpenseReport_Request.context.Header && getIncome_ExpenseReport_Request.context.Header.hasOwnProperty('frequency_code')) ? getIncome_ExpenseReport_Request.context.Header["frequency_code"] : null; //Unicode string(50)
        var param_from_date = (getIncome_ExpenseReport_Request.context.Header && getIncome_ExpenseReport_Request.context.Header.hasOwnProperty('from_date')) ? getIncome_ExpenseReport_Request.context.Header["from_date"] : null; //Unicode string(20)
        var param_to_date = (getIncome_ExpenseReport_Request.context.Header && getIncome_ExpenseReport_Request.context.Header.hasOwnProperty('to_date')) ? getIncome_ExpenseReport_Request.context.Header["to_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOIncome_ExpenseReport/inc_exp_rpt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&report_code=" + param_report_code + "&businessactivity_code=" + param_businessactivity_code + "&report_date=" + param_report_date + "&frequency_code=" + param_frequency_code + "&from_date=" + param_from_date + "&to_date=" + param_to_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FPOIncome_ExpenseReport_incme_exp_rpt_getIncome_ExpenseReport.getIncome_ExpenseReport_ResponseHandler);
        return true;
    },
    
    getIncome_ExpenseReport_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getIncome_ExpenseReport_ResponseObject = new getIncome_ExpenseReportResponse(responseData, "JSON");
            FPOIncome_ExpenseReport_incme_exp_rpt_getIncome_ExpenseReport.callbackfunction(getIncome_ExpenseReport_ResponseObject, textStatus);
        }
        else {
            FPOIncome_ExpenseReport_incme_exp_rpt_getIncome_ExpenseReport.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new getIncome_ExpenseReportRequestcontext();
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
        var param_report_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('Report_code')) ? HeaderrequestObject["Report_code"] : null; //Unicode string(50)
        var param_businessactivity_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('businessactivity_code')) ? HeaderrequestObject["businessactivity_code"] : null; //Unicode string(50)
        var param_report_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('Report_date')) ? HeaderrequestObject["Report_date"] : null; //Unicode string(20)
        var param_frequency_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('frequency_code')) ? HeaderrequestObject["frequency_code"] : null; //Unicode string(50)
        var param_from_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('from_date')) ? HeaderrequestObject["from_date"] : null; //Unicode string(20)
        var param_to_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('to_date')) ? HeaderrequestObject["to_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOIncome_ExpenseReport/inc_exp_rpt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&report_code=" + param_report_code + "&businessactivity_code=" + param_businessactivity_code + "&report_date=" + param_report_date + "&frequency_code=" + param_frequency_code + "&from_date=" + param_from_date + "&to_date=" + param_to_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
