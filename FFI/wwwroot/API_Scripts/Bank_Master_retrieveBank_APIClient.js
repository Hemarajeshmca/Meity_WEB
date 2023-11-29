var Bank_Bank_Master_retrieveBank = {
    /*
     Function to invoke API
     Notes:
     Resource: Bank_Master
     Description: retrieveBank
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveBank_Request, callbackHandler)
    {
        var param_orgnid = (retrieveBank_Request.context && retrieveBank_Request.context.hasOwnProperty('orgnId')) ? retrieveBank_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveBank_Request.context && retrieveBank_Request.context.hasOwnProperty('locnId')) ? retrieveBank_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveBank_Request.context && retrieveBank_Request.context.hasOwnProperty('userId')) ? retrieveBank_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveBank_Request.context && retrieveBank_Request.context.hasOwnProperty('localeId')) ? retrieveBank_Request.context["localeId"] : null; //Unicode string(100)
        var param_bank_rowid = (retrieveBank_Request.context.Header && retrieveBank_Request.context.Header.hasOwnProperty('bank_rowid')) ? retrieveBank_Request.context.Header["bank_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Bank/bank?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&bank_rowid=" + param_bank_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Bank_Bank_Master_retrieveBank.retrieveBank_ResponseHandler);
        return true;
    },
    
    retrieveBank_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveBank_ResponseObject = new retrieveBankResponse(responseData, "JSON");
            Bank_Bank_Master_retrieveBank.callbackfunction(retrieveBank_ResponseObject, textStatus);
        }
        else {
            Bank_Bank_Master_retrieveBank.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveBankRequestcontext();
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
        var param_bank_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('bank_rowid')) ? HeaderrequestObject["bank_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Bank/bank?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&bank_rowid=" + param_bank_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
