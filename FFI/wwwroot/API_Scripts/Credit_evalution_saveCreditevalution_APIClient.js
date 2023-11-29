var Creditevalution_Credit_evalution_saveCreditevalution = {
    /*
     Function to invoke API
     Notes:
     Resource: Credit_evalution
     Description: saveCreditevalution
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCreditevalution_Request, callbackHandler)
    {
        var request = new saveCreditevalutionRequest(saveCreditevalution_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Creditevalution/newsaveCreditevalution";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Creditevalution_Credit_evalution_saveCreditevalution.saveCreditevalution_ResponseHandler);
        return true;
    },
    
    saveCreditevalution_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCreditevalution_ResponseObject = new saveCreditevalutionResponse(responseData, "JSON");
            Creditevalution_Credit_evalution_saveCreditevalution.callbackfunction(saveCreditevalution_ResponseObject, textStatus);
        }
        else {
            Creditevalution_Credit_evalution_saveCreditevalution.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveCreditevalutionRequestcontext();
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
        
        var request = new saveCreditevalutionRequest();
        request.context = new saveCreditevalutionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Creditevalution/newsaveCreditevalution";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
