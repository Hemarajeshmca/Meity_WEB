var FPORegistration_FPOReg_saveFPOReg = {
    /*
     Function to invoke API
     Notes:
     Resource: FPOReg
     Description: saveFPOReg
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFPOReg_Request, callbackHandler)
    {
        var request = new saveFPORegRequest(saveFPOReg_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPORegistration/newfporeg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FPORegistration_FPOReg_saveFPOReg.saveFPOReg_ResponseHandler);
        return true;
    },
    
    saveFPOReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFPOReg_ResponseObject = new saveFPORegResponse(responseData, "JSON");
            FPORegistration_FPOReg_saveFPOReg.callbackfunction(saveFPOReg_ResponseObject, textStatus);
        }
        else {
            FPORegistration_FPOReg_saveFPOReg.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, AddressrequestObjectArray, FigrequestObjectArray, BearersrequestObjectArray, BankrequestObjectArray, UserrequestObjectArray, TaxrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFPORegRequestcontext();
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
        contextrequestObject.Address = AddressrequestObjectArray;
        contextrequestObject.Fig = FigrequestObjectArray;
        contextrequestObject.Bearers = BearersrequestObjectArray;
        contextrequestObject.Bank = BankrequestObjectArray;
        contextrequestObject.User = UserrequestObjectArray;
        contextrequestObject.Tax = TaxrequestObjectArray;
        
        var request = new saveFPORegRequest();
        request.context = new saveFPORegRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPORegistration/newfporeg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
