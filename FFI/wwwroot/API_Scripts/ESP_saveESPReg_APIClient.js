var ESPRegistration_ESP_saveESPReg = {
    /*
     Function to invoke API
     Notes:
     Resource: ESP
     Description: Save ESP Registration
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveESPReg_Request, callbackHandler)
    {
        var request = new saveESPRegRequest(saveESPReg_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ESPRegistration/newESPReg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ESPRegistration_ESP_saveESPReg.saveESPReg_ResponseHandler);
        return true;
    },
    
    saveESPReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveESPReg_ResponseObject = new saveESPRegResponse(responseData, "JSON");
            ESPRegistration_ESP_saveESPReg.callbackfunction(saveESPReg_ResponseObject, textStatus);
        }
        else {
            ESPRegistration_ESP_saveESPReg.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, AddressrequestObjectArray, BearersrequestObjectArray, BankrequestObjectArray, UserrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveESPRegRequestcontext();
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
        contextrequestObject.Bearers = BearersrequestObjectArray;
        contextrequestObject.Bank = BankrequestObjectArray;
        contextrequestObject.User = UserrequestObjectArray;
        
        var request = new saveESPRegRequest();
        request.context = new saveESPRegRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ESPRegistration/newESPReg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
