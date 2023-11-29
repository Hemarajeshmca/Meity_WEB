var RevenueReport_Revenue_Report_retrieveRevenueReport = {
    /*
     Function to invoke API
     Notes:
     Resource: Revenue_Report
     Description: retrieveRevenueReport
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveRevenueReport_Request, callbackHandler)
    {
        var param_orgnid = (retrieveRevenueReport_Request.context && retrieveRevenueReport_Request.context.hasOwnProperty('orgnId')) ? retrieveRevenueReport_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveRevenueReport_Request.context && retrieveRevenueReport_Request.context.hasOwnProperty('locnId')) ? retrieveRevenueReport_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveRevenueReport_Request.context && retrieveRevenueReport_Request.context.hasOwnProperty('userId')) ? retrieveRevenueReport_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveRevenueReport_Request.context && retrieveRevenueReport_Request.context.hasOwnProperty('localeId')) ? retrieveRevenueReport_Request.context["localeId"] : null; //Unicode string(100)
        var param_from_date = (retrieveRevenueReport_Request.context.Header && retrieveRevenueReport_Request.context.Header.hasOwnProperty('from_date')) ? retrieveRevenueReport_Request.context.Header["from_date"] : null; //Unicode string(20)
        var param_to_date = (retrieveRevenueReport_Request.context.Header && retrieveRevenueReport_Request.context.Header.hasOwnProperty('to_date')) ? retrieveRevenueReport_Request.context.Header["to_date"] : null; //Unicode string(20)
        var param_status_code = (retrieveRevenueReport_Request.context.Header && retrieveRevenueReport_Request.context.Header.hasOwnProperty('status_code')) ? retrieveRevenueReport_Request.context.Header["status_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RevenueReport/revenue_report?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&from_date=" + param_from_date + "&to_date=" + param_to_date + "&status_code=" + param_status_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, RevenueReport_Revenue_Report_retrieveRevenueReport.retrieveRevenueReport_ResponseHandler);
        return true;
    },
    
    retrieveRevenueReport_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveRevenueReport_ResponseObject = new retrieveRevenueReportResponse(responseData, "JSON");
            RevenueReport_Revenue_Report_retrieveRevenueReport.callbackfunction(retrieveRevenueReport_ResponseObject, textStatus);
        }
        else {
            RevenueReport_Revenue_Report_retrieveRevenueReport.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveRevenueReportRequestcontext();
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
        var param_from_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('from_date')) ? HeaderrequestObject["from_date"] : null; //Unicode string(20)
        var param_to_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('to_date')) ? HeaderrequestObject["to_date"] : null; //Unicode string(20)
        var param_status_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('status_code')) ? HeaderrequestObject["status_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RevenueReport/revenue_report?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&from_date=" + param_from_date + "&to_date=" + param_to_date + "&status_code=" + param_status_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
