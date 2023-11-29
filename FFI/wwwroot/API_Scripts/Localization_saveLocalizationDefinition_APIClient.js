var LocalizationDefinition_Localization_saveLocalizationDefinition = {
    /*
     Function to invoke API
     Notes:
     Resource: Localization
     Description: saveLocalizationDefinition
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveLocalizationDefinition_Request, callbackHandler)
    {
        var request = new saveLocalizationDefinitionRequest(saveLocalizationDefinition_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LocalizationDefinition/newlocalization";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, LocalizationDefinition_Localization_saveLocalizationDefinition.saveLocalizationDefinition_ResponseHandler);
        return true;
    },
    
    saveLocalizationDefinition_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveLocalizationDefinition_ResponseObject = new saveLocalizationDefinitionResponse(responseData, "JSON");
            LocalizationDefinition_Localization_saveLocalizationDefinition.callbackfunction(saveLocalizationDefinition_ResponseObject, textStatus);
        }
        else {
            LocalizationDefinition_Localization_saveLocalizationDefinition.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, DetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveLocalizationDefinitionRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Detail = DetailrequestObjectArray;
        
        var request = new saveLocalizationDefinitionRequest();
        request.context = new saveLocalizationDefinitionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LocalizationDefinition/newlocalization";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
