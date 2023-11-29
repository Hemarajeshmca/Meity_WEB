var FLClosure_Letter_NDC_FLClosureLetterNDC_saveFLClosure_Letter_NDC = {
    /*
     Function to invoke API
     Notes:
     Resource: FLClosureLetterNDC
     Description: saveFLClosure_Letter_NDC
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLClosure_Letter_NDC_Request, callbackHandler)
    {
        var request = new saveFLClosure_Letter_NDCRequest(saveFLClosure_Letter_NDC_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLClosure_Letter_NDC/newFLClosure_Letter_NDC";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FLClosure_Letter_NDC_FLClosureLetterNDC_saveFLClosure_Letter_NDC.saveFLClosure_Letter_NDC_ResponseHandler);
        return true;
    },
    
    saveFLClosure_Letter_NDC_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLClosure_Letter_NDC_ResponseObject = new saveFLClosure_Letter_NDCResponse(responseData, "JSON");
            FLClosure_Letter_NDC_FLClosureLetterNDC_saveFLClosure_Letter_NDC.callbackfunction(saveFLClosure_Letter_NDC_ResponseObject, textStatus);
        }
        else {
            FLClosure_Letter_NDC_FLClosureLetterNDC_saveFLClosure_Letter_NDC.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFLClosure_Letter_NDCRequestcontext();
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
        contextrequestObject.Detail = DetailrequestObjectArray;
        
        var request = new saveFLClosure_Letter_NDCRequest();
        request.context = new saveFLClosure_Letter_NDCRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLClosure_Letter_NDC/newFLClosure_Letter_NDC";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
