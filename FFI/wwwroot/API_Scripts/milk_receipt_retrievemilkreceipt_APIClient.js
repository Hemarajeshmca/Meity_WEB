var MilkReciptsCP_milk_receipt_retrievemilkreceipt = {
    /*
     Function to invoke API
     Notes:
     Resource: milk_receipt
     Description: retrievemilkreceipt
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrievemilkreceipt_Request, callbackHandler)
    {
        var param_orgnid = (retrievemilkreceipt_Request.context && retrievemilkreceipt_Request.context.hasOwnProperty('orgnId')) ? retrievemilkreceipt_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrievemilkreceipt_Request.context && retrievemilkreceipt_Request.context.hasOwnProperty('locnId')) ? retrievemilkreceipt_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrievemilkreceipt_Request.context && retrievemilkreceipt_Request.context.hasOwnProperty('userId')) ? retrievemilkreceipt_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrievemilkreceipt_Request.context && retrievemilkreceipt_Request.context.hasOwnProperty('localeId')) ? retrievemilkreceipt_Request.context["localeId"] : null; //Unicode string(100)
        var param_cpsession_rowid = (retrievemilkreceipt_Request.context.Header && retrievemilkreceipt_Request.context.Header.hasOwnProperty('cpsession_rowid')) ? retrievemilkreceipt_Request.context.Header["cpsession_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkReciptsCP/receipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cpsession_rowid=" + param_cpsession_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MilkReciptsCP_milk_receipt_retrievemilkreceipt.retrievemilkreceipt_ResponseHandler);
        return true;
    },
    
    retrievemilkreceipt_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrievemilkreceipt_ResponseObject = new retrievemilkreceiptResponse(responseData, "JSON");
            MilkReciptsCP_milk_receipt_retrievemilkreceipt.callbackfunction(retrievemilkreceipt_ResponseObject, textStatus);
        }
        else {
            MilkReciptsCP_milk_receipt_retrievemilkreceipt.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrievemilkreceiptRequestcontext();
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
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkReciptsCP/receipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cpsession_rowid=" + param_cpsession_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
