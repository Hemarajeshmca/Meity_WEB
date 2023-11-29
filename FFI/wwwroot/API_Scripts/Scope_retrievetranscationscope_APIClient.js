var TransactionScope_Scope_retrievetranscationscope = {
    /*
     Function to invoke API
     Notes:
     Resource: Scope
     Description: Retrieve the Transaction Scope
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveTranscationScope_Request, callbackHandler)
    {
        var param_orgnid = (retrieveTranscationScope_Request.context && retrieveTranscationScope_Request.context.hasOwnProperty('orgnId')) ? retrieveTranscationScope_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveTranscationScope_Request.context && retrieveTranscationScope_Request.context.hasOwnProperty('locnId')) ? retrieveTranscationScope_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveTranscationScope_Request.context && retrieveTranscationScope_Request.context.hasOwnProperty('userId')) ? retrieveTranscationScope_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveTranscationScope_Request.context && retrieveTranscationScope_Request.context.hasOwnProperty('localeId')) ? retrieveTranscationScope_Request.context["localeId"] : null; //Unicode string(100)
        var param_option_type = (retrieveTranscationScope_Request.context.Header && retrieveTranscationScope_Request.context.Header.hasOwnProperty('option_type')) ? retrieveTranscationScope_Request.context.Header["option_type"] : null; //Unicode string(256)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/TransactionScope/transactionscope?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&option_type=" + param_option_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, TransactionScope_Scope_retrievetranscationscope.retrievetranscationscope_ResponseHandler);
        return true;
    },
    
    retrievetranscationscope_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveTranscationScope_ResponseObject = new retrieveTranscationScopeResponse(responseData, "JSON");
            TransactionScope_Scope_retrievetranscationscope.callbackfunction(retrieveTranscationScope_ResponseObject, textStatus);
        }
        else {
            TransactionScope_Scope_retrievetranscationscope.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveTranscationScopeRequestcontext();
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
        var param_option_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('option_type')) ? HeaderrequestObject["option_type"] : null; //Unicode string(256)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/TransactionScope/transactionscope?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&option_type=" + param_option_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
