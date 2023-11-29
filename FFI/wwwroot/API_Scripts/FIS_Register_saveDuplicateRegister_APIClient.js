var Register_FIS_Register_saveDuplicateRegister = {
    /*
     Function to invoke API
     Notes:
     Resource: FIS_Register
     Description: saveDuplicateRegister
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveDuplicateRegister_Request, callbackHandler)
    {
        var request = new saveDuplicateRegisterRequest(saveDuplicateRegister_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Register/newDuplicateRegister";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Register_FIS_Register_saveDuplicateRegister.saveDuplicateRegister_ResponseHandler);
        return true;
    },
    
    saveDuplicateRegister_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveDuplicateRegister_ResponseObject = new saveDuplicateRegisterResponse(responseData, "JSON");
            Register_FIS_Register_saveDuplicateRegister.callbackfunction(saveDuplicateRegister_ResponseObject, textStatus);
        }
        else {
            Register_FIS_Register_saveDuplicateRegister.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveDuplicateRegisterRequestcontext();
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
        
        var request = new saveDuplicateRegisterRequest();
        request.context = new saveDuplicateRegisterRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Register/newDuplicateRegister";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
