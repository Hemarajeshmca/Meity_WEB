var ServiceReceipting_Service_Receipting_PAWHS_getServiceReceipt = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Receipting
     Description: PAWHS_getServiceReceipt
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getServiceReceipt_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getServiceReceipt_Request.context && PAWHS_getServiceReceipt_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getServiceReceipt_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getServiceReceipt_Request.context && PAWHS_getServiceReceipt_Request.context.hasOwnProperty('locnId')) ? PAWHS_getServiceReceipt_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getServiceReceipt_Request.context && PAWHS_getServiceReceipt_Request.context.hasOwnProperty('userId')) ? PAWHS_getServiceReceipt_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getServiceReceipt_Request.context && PAWHS_getServiceReceipt_Request.context.hasOwnProperty('localeId')) ? PAWHS_getServiceReceipt_Request.context["localeId"] : null; //Unicode string(100)
        var param_receipt_rowid = (PAWHS_getServiceReceipt_Request.context.Header && PAWHS_getServiceReceipt_Request.context.Header.hasOwnProperty('receipt_rowid')) ? PAWHS_getServiceReceipt_Request.context.Header["receipt_rowid"] : null; //Integer(32)
        var param_service_receipt_no = (PAWHS_getServiceReceipt_Request.context.Header && PAWHS_getServiceReceipt_Request.context.Header.hasOwnProperty('service_receipt_no')) ? PAWHS_getServiceReceipt_Request.context.Header["service_receipt_no"] : null; //Unicode string(100)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceReceipting/service_receipting?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&receipt_rowid=" + param_receipt_rowid + "&service_receipt_no=" + param_service_receipt_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ServiceReceipting_Service_Receipting_PAWHS_getServiceReceipt.PAWHS_getServiceReceipt_ResponseHandler);
        return true;
    },
    
    PAWHS_getServiceReceipt_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getServiceReceipt_ResponseObject = new PAWHS_getServiceReceiptResponse(responseData, "JSON");
            ServiceReceipting_Service_Receipting_PAWHS_getServiceReceipt.callbackfunction(PAWHS_getServiceReceipt_ResponseObject, textStatus);
        }
        else {
            ServiceReceipting_Service_Receipting_PAWHS_getServiceReceipt.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getServiceReceiptRequestcontext();
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
        var param_receipt_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('receipt_rowid')) ? HeaderrequestObject["receipt_rowid"] : null; //Integer(32)
        var param_service_receipt_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('service_receipt_no')) ? HeaderrequestObject["service_receipt_no"] : null; //Unicode string(100)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceReceipting/service_receipting?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&receipt_rowid=" + param_receipt_rowid + "&service_receipt_no=" + param_service_receipt_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
