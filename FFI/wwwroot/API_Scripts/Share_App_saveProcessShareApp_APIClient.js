var ShareApplication_Share_App_saveProcessShareApp = {
    /*
     Function to invoke API
     Notes:
     Resource: Share_App
     Description: saveProcessShareApp
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveProcessShareApp_Request, callbackHandler)
    {
        var request = new saveProcessShareAppRequest(saveProcessShareApp_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/newProcessShareApp";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ShareApplication_Share_App_saveProcessShareApp.saveProcessShareApp_ResponseHandler);
        return true;
    },
    
    saveProcessShareApp_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveProcessShareApp_ResponseObject = new saveProcessShareAppResponse(responseData, "JSON");
            ShareApplication_Share_App_saveProcessShareApp.callbackfunction(saveProcessShareApp_ResponseObject, textStatus);
        }
        else {
            ShareApplication_Share_App_saveProcessShareApp.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveProcessShareAppRequestcontext();
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
        
        var request = new saveProcessShareAppRequest();
        request.context = new saveProcessShareAppRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/newProcessShareApp";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
