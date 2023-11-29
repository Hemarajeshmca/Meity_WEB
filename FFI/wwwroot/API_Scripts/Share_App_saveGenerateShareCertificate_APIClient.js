var ShareApplication_Share_App_saveGenerateShareCertificate = {
    /*
     Function to invoke API
     Notes:
     Resource: Share_App
     Description: saveGenerateShareCertificate
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveGenerateShareCertificate_Request, callbackHandler)
    {
        var request = new saveGenerateShareCertificateRequest(saveGenerateShareCertificate_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/newGenerateShareCertificate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ShareApplication_Share_App_saveGenerateShareCertificate.saveGenerateShareCertificate_ResponseHandler);
        return true;
    },
    
    saveGenerateShareCertificate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveGenerateShareCertificate_ResponseObject = new saveGenerateShareCertificateResponse(responseData, "JSON");
            ShareApplication_Share_App_saveGenerateShareCertificate.callbackfunction(saveGenerateShareCertificate_ResponseObject, textStatus);
        }
        else {
            ShareApplication_Share_App_saveGenerateShareCertificate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveGenerateShareCertificateRequestcontext();
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
        
        var request = new saveGenerateShareCertificateRequest();
        request.context = new saveGenerateShareCertificateRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/newGenerateShareCertificate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
