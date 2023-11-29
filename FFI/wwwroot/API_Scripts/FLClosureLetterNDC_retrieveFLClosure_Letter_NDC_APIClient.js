var FLClosure_Letter_NDC_FLClosureLetterNDC_retrieveFLClosure_Letter_NDC = {
    /*
     Function to invoke API
     Notes:
     Resource: FLClosureLetterNDC
     Description: retrieveFLClosure_Letter_NDC
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFLClosure_Letter_NDC_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFLClosure_Letter_NDC_Request.context && retrieveFLClosure_Letter_NDC_Request.context.hasOwnProperty('orgnId')) ? retrieveFLClosure_Letter_NDC_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFLClosure_Letter_NDC_Request.context && retrieveFLClosure_Letter_NDC_Request.context.hasOwnProperty('locnId')) ? retrieveFLClosure_Letter_NDC_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFLClosure_Letter_NDC_Request.context && retrieveFLClosure_Letter_NDC_Request.context.hasOwnProperty('userId')) ? retrieveFLClosure_Letter_NDC_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFLClosure_Letter_NDC_Request.context && retrieveFLClosure_Letter_NDC_Request.context.hasOwnProperty('localeId')) ? retrieveFLClosure_Letter_NDC_Request.context["localeId"] : null; //Unicode string(100)
        var param_select_option = (retrieveFLClosure_Letter_NDC_Request.context.Header && retrieveFLClosure_Letter_NDC_Request.context.Header.hasOwnProperty('select_option')) ? retrieveFLClosure_Letter_NDC_Request.context.Header["select_option"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLClosure_Letter_NDC/flclosure_letter_ndc_detail?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&select_option=" + param_select_option + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FLClosure_Letter_NDC_FLClosureLetterNDC_retrieveFLClosure_Letter_NDC.retrieveFLClosure_Letter_NDC_ResponseHandler);
        return true;
    },
    
    retrieveFLClosure_Letter_NDC_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFLClosure_Letter_NDC_ResponseObject = new retrieveFLClosure_Letter_NDCResponse(responseData, "JSON");
            FLClosure_Letter_NDC_FLClosureLetterNDC_retrieveFLClosure_Letter_NDC.callbackfunction(retrieveFLClosure_Letter_NDC_ResponseObject, textStatus);
        }
        else {
            FLClosure_Letter_NDC_FLClosureLetterNDC_retrieveFLClosure_Letter_NDC.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFLClosure_Letter_NDCRequestcontext();
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
        var param_select_option = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('select_option')) ? HeaderrequestObject["select_option"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLClosure_Letter_NDC/flclosure_letter_ndc_detail?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&select_option=" + param_select_option + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
