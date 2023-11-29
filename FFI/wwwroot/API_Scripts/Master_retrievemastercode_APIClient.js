var MasterDefinition_Master_retrievemastercode = {
    /*
     Function to invoke API
     Notes:
     Resource: Master
     Description: Retrieve Mastercode Details
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveMasterDefinition_Request, callbackHandler)
    {
        var param_orgnid = (retrieveMasterDefinition_Request.context && retrieveMasterDefinition_Request.context.hasOwnProperty('orgnId')) ? retrieveMasterDefinition_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveMasterDefinition_Request.context && retrieveMasterDefinition_Request.context.hasOwnProperty('locnId')) ? retrieveMasterDefinition_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveMasterDefinition_Request.context && retrieveMasterDefinition_Request.context.hasOwnProperty('userId')) ? retrieveMasterDefinition_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveMasterDefinition_Request.context && retrieveMasterDefinition_Request.context.hasOwnProperty('localeId')) ? retrieveMasterDefinition_Request.context["localeId"] : null; //Unicode string(100)
        var param_parent_code = (retrieveMasterDefinition_Request.context.Header && retrieveMasterDefinition_Request.context.Header.hasOwnProperty('parent_code')) ? retrieveMasterDefinition_Request.context.Header["parent_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/mastercode?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&parent_code=" + param_parent_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MasterDefinition_Master_retrievemastercode.retrievemastercode_ResponseHandler);
        return true;
    },
    
    retrievemastercode_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveMasterDefinition_ResponseObject = new retrieveMasterDefinitionResponse(responseData, "JSON");
            MasterDefinition_Master_retrievemastercode.callbackfunction(retrieveMasterDefinition_ResponseObject, textStatus);
        }
        else {
            MasterDefinition_Master_retrievemastercode.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveMasterDefinitionRequestcontext();
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
        var param_parent_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('parent_code')) ? HeaderrequestObject["parent_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/mastercode?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&parent_code=" + param_parent_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
