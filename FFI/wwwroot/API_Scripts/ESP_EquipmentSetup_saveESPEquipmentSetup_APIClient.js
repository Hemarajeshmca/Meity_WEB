var ESPEquipmentSetup_ESP_EquipmentSetup_saveESPEquipmentSetup = {
    /*
     Function to invoke API
     Notes:
     Resource: ESP_EquipmentSetup
     Description: saveESPEquipmentSetup
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveESPEquipmentSetup_Request, callbackHandler)
    {
        var request = new saveESPEquipmentSetupRequest(saveESPEquipmentSetup_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ESPEquipmentSetup/newESPEquipmentSetup";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ESPEquipmentSetup_ESP_EquipmentSetup_saveESPEquipmentSetup.saveESPEquipmentSetup_ResponseHandler);
        return true;
    },
    
    saveESPEquipmentSetup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveESPEquipmentSetup_ResponseObject = new saveESPEquipmentSetupResponse(responseData, "JSON");
            ESPEquipmentSetup_ESP_EquipmentSetup_saveESPEquipmentSetup.callbackfunction(saveESPEquipmentSetup_ResponseObject, textStatus);
        }
        else {
            ESPEquipmentSetup_ESP_EquipmentSetup_saveESPEquipmentSetup.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, ESPRaterequestObjectArray, Terms_and_ConditionrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveESPEquipmentSetupRequestcontext();
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
        contextrequestObject.ESPRate = ESPRaterequestObjectArray;
        contextrequestObject.Terms_and_Condition = Terms_and_ConditionrequestObjectArray;
        
        var request = new saveESPEquipmentSetupRequest();
        request.context = new saveESPEquipmentSetupRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ESPEquipmentSetup/newESPEquipmentSetup";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
