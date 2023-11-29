var FLFore_Closure_FLForeClosure_retrieveFLFore_Closure = {
    /*
     Function to invoke API
     Notes:
     Resource: FLForeClosure
     Description: retrieveFLFore_Closure
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFLFore_Closure_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFLFore_Closure_Request.context && retrieveFLFore_Closure_Request.context.hasOwnProperty('orgnId')) ? retrieveFLFore_Closure_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFLFore_Closure_Request.context && retrieveFLFore_Closure_Request.context.hasOwnProperty('locnId')) ? retrieveFLFore_Closure_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFLFore_Closure_Request.context && retrieveFLFore_Closure_Request.context.hasOwnProperty('userId')) ? retrieveFLFore_Closure_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFLFore_Closure_Request.context && retrieveFLFore_Closure_Request.context.hasOwnProperty('localeId')) ? retrieveFLFore_Closure_Request.context["localeId"] : null; //Unicode string(100)
        var param_loan_no = (retrieveFLFore_Closure_Request.context.Header && retrieveFLFore_Closure_Request.context.Header.hasOwnProperty('loan_no')) ? retrieveFLFore_Closure_Request.context.Header["loan_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLFore_Closure/flfore_closure?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_no=" + param_loan_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FLFore_Closure_FLForeClosure_retrieveFLFore_Closure.retrieveFLFore_Closure_ResponseHandler);
        return true;
    },
    
    retrieveFLFore_Closure_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFLFore_Closure_ResponseObject = new retrieveFLFore_ClosureResponse(responseData, "JSON");
            FLFore_Closure_FLForeClosure_retrieveFLFore_Closure.callbackfunction(retrieveFLFore_Closure_ResponseObject, textStatus);
        }
        else {
            FLFore_Closure_FLForeClosure_retrieveFLFore_Closure.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFLFore_ClosureRequestcontext();
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
        var param_loan_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loan_no')) ? HeaderrequestObject["loan_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLFore_Closure/flfore_closure?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_no=" + param_loan_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
