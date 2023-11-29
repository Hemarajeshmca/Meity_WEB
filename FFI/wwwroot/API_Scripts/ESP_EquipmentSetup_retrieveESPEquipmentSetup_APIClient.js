var ESPEquipmentSetup_ESP_EquipmentSetup_retrieveESPEquipmentSetup = {
    /*
     Function to invoke API
     Notes:
     Resource: ESP_EquipmentSetup
     Description: retrieveESPEquipmentSetup
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveESPEquipmentSetup_Request, callbackHandler)
    {
        var param_orgnid = (retrieveESPEquipmentSetup_Request.context && retrieveESPEquipmentSetup_Request.context.hasOwnProperty('orgnId')) ? retrieveESPEquipmentSetup_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveESPEquipmentSetup_Request.context && retrieveESPEquipmentSetup_Request.context.hasOwnProperty('locnId')) ? retrieveESPEquipmentSetup_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveESPEquipmentSetup_Request.context && retrieveESPEquipmentSetup_Request.context.hasOwnProperty('userId')) ? retrieveESPEquipmentSetup_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveESPEquipmentSetup_Request.context && retrieveESPEquipmentSetup_Request.context.hasOwnProperty('localeId')) ? retrieveESPEquipmentSetup_Request.context["localeId"] : null; //Unicode string(100)
        var param_espequipment_rowid = (retrieveESPEquipmentSetup_Request.context.Header && retrieveESPEquipmentSetup_Request.context.Header.hasOwnProperty('espequipment_rowid')) ? retrieveESPEquipmentSetup_Request.context.Header["espequipment_rowid"] : null; //Integer(32)
        var param_esp_code = (retrieveESPEquipmentSetup_Request.context.Header && retrieveESPEquipmentSetup_Request.context.Header.hasOwnProperty('esp_code')) ? retrieveESPEquipmentSetup_Request.context.Header["esp_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ESPEquipmentSetup/esp_eqipment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&espequipment_rowid=" + param_espequipment_rowid + "&esp_code=" + param_esp_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ESPEquipmentSetup_ESP_EquipmentSetup_retrieveESPEquipmentSetup.retrieveESPEquipmentSetup_ResponseHandler);
        return true;
    },
    
    retrieveESPEquipmentSetup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveESPEquipmentSetup_ResponseObject = new retrieveESPEquipmentSetupResponse(responseData, "JSON");
            ESPEquipmentSetup_ESP_EquipmentSetup_retrieveESPEquipmentSetup.callbackfunction(retrieveESPEquipmentSetup_ResponseObject, textStatus);
        }
        else {
            ESPEquipmentSetup_ESP_EquipmentSetup_retrieveESPEquipmentSetup.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveESPEquipmentSetupRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (contextrequestObject && contextrequestObject.hasOwnProperty('orgnId')) ? contextrequestObject["orgnId"] : null; //Unicode string(100)
        var param_locnid = (contextrequestObject && contextrequestObject.hasOwnProperty('locnId')) ? contextrequestObject["locnId"] : null; //Unicode string(100)
        var param_userid = (contextrequestObject && contextrequestObject.hasOwnProperty('userId')) ? contextrequestObject["userId"] : null; //Unicode string(128)
        var param_localeid = (contextrequestObject && contextrequestObject.hasOwnProperty('localeId')) ? contextrequestObject["localeId"] : null; //Unicode string(100)
        var param_espequipment_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('espequipment_rowid')) ? HeaderrequestObject["espequipment_rowid"] : null; //Integer(32)
        var param_esp_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('esp_code')) ? HeaderrequestObject["esp_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ESPEquipmentSetup/esp_eqipment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&espequipment_rowid=" + param_espequipment_rowid + "&esp_code=" + param_esp_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
