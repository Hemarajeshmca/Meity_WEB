var MasterDefinition_Master_savemaster_code = {
    /*
     Function to invoke API
     Notes:
     Resource: Master
     Description: Save Master Code Detail
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveMasterDefinition_Request, callbackHandler)
    {
        var request = new saveMasterDefinitionRequest(saveMasterDefinition_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/newmaster";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, MasterDefinition_Master_savemaster_code.savemaster_code_ResponseHandler);
        return true;
    },
    
    savemaster_code_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveMasterDefinition_ResponseObject = new saveMasterDefinitionResponse(responseData, "JSON");
            MasterDefinition_Master_savemaster_code.callbackfunction(saveMasterDefinition_ResponseObject, textStatus);
        }
        else {
            MasterDefinition_Master_savemaster_code.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveMasterDefinitionRequestcontext();
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
        
        var request = new saveMasterDefinitionRequest();
        request.context = new saveMasterDefinitionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/newmaster";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
