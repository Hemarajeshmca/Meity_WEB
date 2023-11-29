var ShareApplication_Share_App_saveShareDespatch = {
    /*
     Function to invoke API
     Notes:
     Resource: Share_App
     Description: saveShareDespatch
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveShareDespatch_Request, callbackHandler)
    {
        var request = new saveShareDespatchRequest(saveShareDespatch_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/newShareDespatch";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ShareApplication_Share_App_saveShareDespatch.saveShareDespatch_ResponseHandler);
        return true;
    },
    
    saveShareDespatch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveShareDespatch_ResponseObject = new saveShareDespatchResponse(responseData, "JSON");
            ShareApplication_Share_App_saveShareDespatch.callbackfunction(saveShareDespatch_ResponseObject, textStatus);
        }
        else {
            ShareApplication_Share_App_saveShareDespatch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveShareDespatchRequestcontext();
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
        
        var request = new saveShareDespatchRequest();
        request.context = new saveShareDespatchRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/newShareDespatch";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
