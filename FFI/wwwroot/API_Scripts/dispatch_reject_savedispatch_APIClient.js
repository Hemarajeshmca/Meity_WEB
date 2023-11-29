var dispatchrejects_dispatch_reject_savedispatch = {
    /*
     Function to invoke API
     Notes:
     Resource: dispatch_reject
     Description: savedispatch
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (savedispatch_Request, callbackHandler)
    {
        var request = new savedispatchRequest(savedispatch_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/dispatchrejects/newdispatch";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, dispatchrejects_dispatch_reject_savedispatch.savedispatch_ResponseHandler);
        return true;
    },
    
    savedispatch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var savedispatch_ResponseObject = new savedispatchResponse(responseData, "JSON");
            dispatchrejects_dispatch_reject_savedispatch.callbackfunction(savedispatch_ResponseObject, textStatus);
        }
        else {
            dispatchrejects_dispatch_reject_savedispatch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new savedispatchRequestcontext();
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
        
        var request = new savedispatchRequest();
        request.context = new savedispatchRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/dispatchrejects/newdispatch";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
