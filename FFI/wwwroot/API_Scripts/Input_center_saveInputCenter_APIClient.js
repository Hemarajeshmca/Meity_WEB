var InputCenter_Input_center_saveInputCenter = {
    /*
     Function to invoke API
     Notes:
     Resource: Input_center
     Description: saveInputCenter
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveInputCenter_Request, callbackHandler)
    {
        var request = new saveInputCenterRequest(saveInputCenter_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenter/newsaveInputCenter";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, InputCenter_Input_center_saveInputCenter.saveInputCenter_ResponseHandler);
        return true;
    },
    
    saveInputCenter_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveInputCenter_ResponseObject = new saveInputCenterResponse(responseData, "JSON");
            InputCenter_Input_center_saveInputCenter.callbackfunction(saveInputCenter_ResponseObject, textStatus);
        }
        else {
            InputCenter_Input_center_saveInputCenter.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, AddressrequestObjectArray, BankrequestObjectArray, UserrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveInputCenterRequestcontext();
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
        contextrequestObject.Bank = BankrequestObjectArray;
        contextrequestObject.User = UserrequestObjectArray;
        
        var request = new saveInputCenterRequest();
        request.context = new saveInputCenterRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenter/newsaveInputCenter";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
