var ShareApplication_Share_App_retrieveShareRefund = {
    /*
     Function to invoke API
     Notes:
     Resource: Share_App
     Description: retrieveShareRefund
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveShareRefund_Request, callbackHandler)
    {
        var param_orgnid = (retrieveShareRefund_Request.context && retrieveShareRefund_Request.context.hasOwnProperty('orgnId')) ? retrieveShareRefund_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveShareRefund_Request.context && retrieveShareRefund_Request.context.hasOwnProperty('locnId')) ? retrieveShareRefund_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveShareRefund_Request.context && retrieveShareRefund_Request.context.hasOwnProperty('userId')) ? retrieveShareRefund_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveShareRefund_Request.context && retrieveShareRefund_Request.context.hasOwnProperty('localeId')) ? retrieveShareRefund_Request.context["localeId"] : null; //Unicode string(100)
        var param_refund_status = (retrieveShareRefund_Request.context.Header && retrieveShareRefund_Request.context.Header.hasOwnProperty('refund_status')) ? retrieveShareRefund_Request.context.Header["refund_status"] : null; //Unicode string(50)
        var param_fpoorgn_code = (retrieveShareRefund_Request.context.Header && retrieveShareRefund_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveShareRefund_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        var param_refund_date = (retrieveShareRefund_Request.context.Header && retrieveShareRefund_Request.context.Header.hasOwnProperty('refund_date')) ? retrieveShareRefund_Request.context.Header["refund_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/sharerefund?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&refund_status=" + param_refund_status + "&fpoorgn_code=" + param_fpoorgn_code + "&refund_date=" + param_refund_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ShareApplication_Share_App_retrieveShareRefund.retrieveShareRefund_ResponseHandler);
        return true;
    },
    
    retrieveShareRefund_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveShareRefund_ResponseObject = new retrieveShareRefundResponse(responseData, "JSON");
            ShareApplication_Share_App_retrieveShareRefund.callbackfunction(retrieveShareRefund_ResponseObject, textStatus);
        }
        else {
            ShareApplication_Share_App_retrieveShareRefund.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveShareRefundRequestcontext();
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
        var param_refund_status = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('refund_status')) ? HeaderrequestObject["refund_status"] : null; //Unicode string(50)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        var param_refund_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('refund_date')) ? HeaderrequestObject["refund_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/sharerefund?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&refund_status=" + param_refund_status + "&fpoorgn_code=" + param_fpoorgn_code + "&refund_date=" + param_refund_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
