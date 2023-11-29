var dispatchrejects_dispatch_reject_retrievedispatch = {
    /*
     Function to invoke API
     Notes:
     Resource: dispatch_reject
     Description: retrievedispatch
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrievedispatch_Request, callbackHandler)
    {
        var param_orgnid = (retrievedispatch_Request.context && retrievedispatch_Request.context.hasOwnProperty('orgnId')) ? retrievedispatch_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrievedispatch_Request.context && retrievedispatch_Request.context.hasOwnProperty('locnId')) ? retrievedispatch_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrievedispatch_Request.context && retrievedispatch_Request.context.hasOwnProperty('userId')) ? retrievedispatch_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrievedispatch_Request.context && retrievedispatch_Request.context.hasOwnProperty('localeId')) ? retrievedispatch_Request.context["localeId"] : null; //Unicode string(100)
        var param_cpdispatch_rowid = (retrievedispatch_Request.context.Header && retrievedispatch_Request.context.Header.hasOwnProperty('cpdespatch_rowid')) ? retrievedispatch_Request.context.Header["cpdespatch_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/dispatchrejects/receipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cpdispatch_rowid=" + param_cpdispatch_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, dispatchrejects_dispatch_reject_retrievedispatch.retrievedispatch_ResponseHandler);
        return true;
    },
    
    retrievedispatch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrievedispatch_ResponseObject = new retrievedispatchResponse(responseData, "JSON");
            dispatchrejects_dispatch_reject_retrievedispatch.callbackfunction(retrievedispatch_ResponseObject, textStatus);
        }
        else {
            dispatchrejects_dispatch_reject_retrievedispatch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrievedispatchRequestcontext();
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
        var param_cpdispatch_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cpdespatch_rowid')) ? HeaderrequestObject["cpdespatch_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/dispatchrejects/receipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cpdispatch_rowid=" + param_cpdispatch_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
