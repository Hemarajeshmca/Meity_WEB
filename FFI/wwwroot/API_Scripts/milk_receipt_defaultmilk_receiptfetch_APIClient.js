var MilkReciptsCP_milk_receipt_defaultmilk_receiptfetch = {
    /*
     Function to invoke API
     Notes:
     Resource: milk_receipt
     Description: defaultmilk_receiptfetch
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (defaultmilk_receiptfetch_Request, callbackHandler)
    {
        var param_orgnid = (defaultmilk_receiptfetch_Request.context && defaultmilk_receiptfetch_Request.context.hasOwnProperty('orgnId')) ? defaultmilk_receiptfetch_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (defaultmilk_receiptfetch_Request.context && defaultmilk_receiptfetch_Request.context.hasOwnProperty('locnId')) ? defaultmilk_receiptfetch_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (defaultmilk_receiptfetch_Request.context && defaultmilk_receiptfetch_Request.context.hasOwnProperty('userId')) ? defaultmilk_receiptfetch_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (defaultmilk_receiptfetch_Request.context && defaultmilk_receiptfetch_Request.context.hasOwnProperty('localeId')) ? defaultmilk_receiptfetch_Request.context["localeId"] : null; //Unicode string(100)
        var param_cpsession_rowid = (defaultmilk_receiptfetch_Request.context.Header && defaultmilk_receiptfetch_Request.context.Header.hasOwnProperty('cpsession_rowid')) ? defaultmilk_receiptfetch_Request.context.Header["cpsession_rowid"] : null; //Integer(32)
        var param_cp_aggrloc_code = (defaultmilk_receiptfetch_Request.context.Header && defaultmilk_receiptfetch_Request.context.Header.hasOwnProperty('cp_aggrloc_code')) ? defaultmilk_receiptfetch_Request.context.Header["cp_aggrloc_code"] : null; //Unicode string(50)
        var param_cc_aggrloc_code = (defaultmilk_receiptfetch_Request.context.Header && defaultmilk_receiptfetch_Request.context.Header.hasOwnProperty('cc_aggrloc_code')) ? defaultmilk_receiptfetch_Request.context.Header["cc_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkReciptsCP/defaultmilk_receiptfetch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cpsession_rowid=" + param_cpsession_rowid + "&cp_aggrloc_code=" + param_cp_aggrloc_code + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MilkReciptsCP_milk_receipt_defaultmilk_receiptfetch.defaultmilk_receiptfetch_ResponseHandler);
        return true;
    },
    
    defaultmilk_receiptfetch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var defaultmilk_receiptfetch_ResponseObject = new defaultmilk_receiptfetchResponse(responseData, "JSON");
            MilkReciptsCP_milk_receipt_defaultmilk_receiptfetch.callbackfunction(defaultmilk_receiptfetch_ResponseObject, textStatus);
        }
        else {
            MilkReciptsCP_milk_receipt_defaultmilk_receiptfetch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new defaultmilk_receiptfetchRequestcontext();
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
        var param_cpsession_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cpsession_rowid')) ? HeaderrequestObject["cpsession_rowid"] : null; //Integer(32)
        var param_cp_aggrloc_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cp_aggrloc_code')) ? HeaderrequestObject["cp_aggrloc_code"] : null; //Unicode string(50)
        var param_cc_aggrloc_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cc_aggrloc_code')) ? HeaderrequestObject["cc_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkReciptsCP/defaultmilk_receiptfetch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cpsession_rowid=" + param_cpsession_rowid + "&cp_aggrloc_code=" + param_cp_aggrloc_code + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
