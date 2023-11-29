var LocalizationDefinition_Localization_retrieveLocalizationDefinition = {
    /*
     Function to invoke API
     Notes:
     Resource: Localization
     Description: retrieveLocalizationDefinition
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveLocalizationDefinition_Request, callbackHandler)
    {
        var param_orgnid = (retrieveLocalizationDefinition_Request.context && retrieveLocalizationDefinition_Request.context.hasOwnProperty('orgnId')) ? retrieveLocalizationDefinition_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveLocalizationDefinition_Request.context && retrieveLocalizationDefinition_Request.context.hasOwnProperty('locnId')) ? retrieveLocalizationDefinition_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveLocalizationDefinition_Request.context && retrieveLocalizationDefinition_Request.context.hasOwnProperty('userId')) ? retrieveLocalizationDefinition_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveLocalizationDefinition_Request.context && retrieveLocalizationDefinition_Request.context.hasOwnProperty('localeId')) ? retrieveLocalizationDefinition_Request.context["localeId"] : null; //Unicode string(100)
        var param_activity_code = (retrieveLocalizationDefinition_Request.context.Header && retrieveLocalizationDefinition_Request.context.Header.hasOwnProperty('activity_code')) ? retrieveLocalizationDefinition_Request.context.Header["activity_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LocalizationDefinition/localization?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&activity_code=" + param_activity_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, LocalizationDefinition_Localization_retrieveLocalizationDefinition.retrieveLocalizationDefinition_ResponseHandler);
        return true;
    },
    
    retrieveLocalizationDefinition_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveLocalizationDefinition_ResponseObject = new retrieveLocalizationDefinitionResponse(responseData, "JSON");
            LocalizationDefinition_Localization_retrieveLocalizationDefinition.callbackfunction(retrieveLocalizationDefinition_ResponseObject, textStatus);
        }
        else {
            LocalizationDefinition_Localization_retrieveLocalizationDefinition.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveLocalizationDefinitionRequestcontext();
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
        var param_activity_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('activity_code')) ? HeaderrequestObject["activity_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LocalizationDefinition/localization?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&activity_code=" + param_activity_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
