var FLFore_Closure_FLForeClosure_saveFLFore_Closure = {
    /*
     Function to invoke API
     Notes:
     Resource: FLForeClosure
     Description: saveFLFore_Closure
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLFore_Closure_Request, callbackHandler)
    {
        var request = new saveFLFore_ClosureRequest(saveFLFore_Closure_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLFore_Closure/newFLFore_Closure";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FLFore_Closure_FLForeClosure_saveFLFore_Closure.saveFLFore_Closure_ResponseHandler);
        return true;
    },
    
    saveFLFore_Closure_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLFore_Closure_ResponseObject = new saveFLFore_ClosureResponse(responseData, "JSON");
            FLFore_Closure_FLForeClosure_saveFLFore_Closure.callbackfunction(saveFLFore_Closure_ResponseObject, textStatus);
        }
        else {
            FLFore_Closure_FLForeClosure_saveFLFore_Closure.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailrequestObject, ForeClosureDtlrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFLFore_ClosureRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Header = HeaderrequestObject;
        contextrequestObject.Detail = DetailrequestObject;
        contextrequestObject.ForeClosureDtl = ForeClosureDtlrequestObject;
        
        var request = new saveFLFore_ClosureRequest();
        request.context = new saveFLFore_ClosureRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLFore_Closure/newFLFore_Closure";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
