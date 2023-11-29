var Register_FIS_Register_saveAllotmentRegister = {
    /*
     Function to invoke API
     Notes:
     Resource: FIS_Register
     Description: saveAllotmentRegister
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveAllotmentRegister_Request, callbackHandler)
    {
        var request = new saveAllotmentRegisterRequest(saveAllotmentRegister_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Register/newAllotmentRegister";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Register_FIS_Register_saveAllotmentRegister.saveAllotmentRegister_ResponseHandler);
        return true;
    },
    
    saveAllotmentRegister_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveAllotmentRegister_ResponseObject = new saveAllotmentRegisterResponse(responseData, "JSON");
            Register_FIS_Register_saveAllotmentRegister.callbackfunction(saveAllotmentRegister_ResponseObject, textStatus);
        }
        else {
            Register_FIS_Register_saveAllotmentRegister.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveAllotmentRegisterRequestcontext();
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
        
        var request = new saveAllotmentRegisterRequest();
        request.context = new saveAllotmentRegisterRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Register/newAllotmentRegister";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
