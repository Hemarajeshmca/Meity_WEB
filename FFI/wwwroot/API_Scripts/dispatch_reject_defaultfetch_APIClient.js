var dispatchrejects_dispatch_reject_defaultfetch = {
    /*
     Function to invoke API
     Notes:
     Resource: dispatch_reject
     Description: defaultfetch
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (defaultfetch_Request, callbackHandler)
    {
        var param_orgnid = (defaultfetch_Request.context && defaultfetch_Request.context.hasOwnProperty('orgnId')) ? defaultfetch_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (defaultfetch_Request.context && defaultfetch_Request.context.hasOwnProperty('locnId')) ? defaultfetch_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (defaultfetch_Request.context && defaultfetch_Request.context.hasOwnProperty('userId')) ? defaultfetch_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (defaultfetch_Request.context && defaultfetch_Request.context.hasOwnProperty('localeId')) ? defaultfetch_Request.context["localeId"] : null; //Unicode string(100)
        var param_cpdespatch_rowid = (defaultfetch_Request.context.Header && defaultfetch_Request.context.Header.hasOwnProperty('cpdespatch_rowid')) ? defaultfetch_Request.context.Header["cpdespatch_rowid"] : null; //Integer(32)
        var param_cp_aggrloc_code = (defaultfetch_Request.context.Header && defaultfetch_Request.context.Header.hasOwnProperty('cp_aggrloc_code')) ? defaultfetch_Request.context.Header["cp_aggrloc_code"] : null; //Unicode string(50)
        var param_cc_aggrloc_code = (defaultfetch_Request.context.Header && defaultfetch_Request.context.Header.hasOwnProperty('cc_aggrloc_code')) ? defaultfetch_Request.context.Header["cc_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/dispatchrejects/defaultdispatch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cpdespatch_rowid=" + param_cpdespatch_rowid + "&cp_aggrloc_code=" + param_cp_aggrloc_code + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, dispatchrejects_dispatch_reject_defaultfetch.defaultfetch_ResponseHandler);
        return true;
    },
    
    defaultfetch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var defaultfetch_ResponseObject = new defaultfetchResponse(responseData, "JSON");
            dispatchrejects_dispatch_reject_defaultfetch.callbackfunction(defaultfetch_ResponseObject, textStatus);
        }
        else {
            dispatchrejects_dispatch_reject_defaultfetch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new defaultfetchRequestcontext();
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
        var param_cpdespatch_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cpdespatch_rowid')) ? HeaderrequestObject["cpdespatch_rowid"] : null; //Integer(32)
        var param_cp_aggrloc_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cp_aggrloc_code')) ? HeaderrequestObject["cp_aggrloc_code"] : null; //Unicode string(50)
        var param_cc_aggrloc_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cc_aggrloc_code')) ? HeaderrequestObject["cc_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/dispatchrejects/defaultdispatch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cpdespatch_rowid=" + param_cpdespatch_rowid + "&cp_aggrloc_code=" + param_cp_aggrloc_code + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
