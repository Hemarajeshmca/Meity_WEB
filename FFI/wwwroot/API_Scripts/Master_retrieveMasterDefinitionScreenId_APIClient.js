var MasterDefinition_Master_retrieveMasterDefinitionScreenId = {
    /*
     Function to invoke API
     Notes:
     Resource: Master
     Description: retrieveMasterDefinitionScreenId
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveMasterDefinitionScreenId_Request, callbackHandler)
    {
        var param_orgnid = (retrieveMasterDefinitionScreenId_Request.context && retrieveMasterDefinitionScreenId_Request.context.hasOwnProperty('orgnId')) ? retrieveMasterDefinitionScreenId_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveMasterDefinitionScreenId_Request.context && retrieveMasterDefinitionScreenId_Request.context.hasOwnProperty('locnId')) ? retrieveMasterDefinitionScreenId_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveMasterDefinitionScreenId_Request.context && retrieveMasterDefinitionScreenId_Request.context.hasOwnProperty('userId')) ? retrieveMasterDefinitionScreenId_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveMasterDefinitionScreenId_Request.context && retrieveMasterDefinitionScreenId_Request.context.hasOwnProperty('localeId')) ? retrieveMasterDefinitionScreenId_Request.context["localeId"] : null; //Unicode string(100)
        var param_screen_code = (retrieveMasterDefinitionScreenId_Request.context.Header && retrieveMasterDefinitionScreenId_Request.context.Header.hasOwnProperty('screen_code')) ? retrieveMasterDefinitionScreenId_Request.context.Header["screen_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/mastercode_screenid?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&screen_code=" + param_screen_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MasterDefinition_Master_retrieveMasterDefinitionScreenId.retrieveMasterDefinitionScreenId_ResponseHandler);
        return true;
    },
    
    retrieveMasterDefinitionScreenId_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveMasterDefinitionScreenId_ResponseObject = new retrieveMasterDefinitionScreenIdResponse(responseData, "JSON");
            MasterDefinition_Master_retrieveMasterDefinitionScreenId.callbackfunction(retrieveMasterDefinitionScreenId_ResponseObject, textStatus);
        }
        else {
            MasterDefinition_Master_retrieveMasterDefinitionScreenId.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveMasterDefinitionScreenIdRequestcontext();
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
        var param_screen_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('screen_code')) ? HeaderrequestObject["screen_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/mastercode_screenid?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&screen_code=" + param_screen_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
