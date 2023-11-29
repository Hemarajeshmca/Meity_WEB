var MasterDefinition_Master_retrievemastercode_list = {
    /*
     Function to invoke API
     Notes:
     Resource: Master
     Description: Retrieve  all the Master code Details
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveMasterDefinitionList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveMasterDefinitionList_Request.context && retrieveMasterDefinitionList_Request.context.hasOwnProperty('orgnId')) ? retrieveMasterDefinitionList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveMasterDefinitionList_Request.context && retrieveMasterDefinitionList_Request.context.hasOwnProperty('locnId')) ? retrieveMasterDefinitionList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveMasterDefinitionList_Request.context && retrieveMasterDefinitionList_Request.context.hasOwnProperty('userId')) ? retrieveMasterDefinitionList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveMasterDefinitionList_Request.context && retrieveMasterDefinitionList_Request.context.hasOwnProperty('localeId')) ? retrieveMasterDefinitionList_Request.context["localeId"] : null; //Unicode string(100)
        var param_parent_code = (retrieveMasterDefinitionList_Request.context.Header && retrieveMasterDefinitionList_Request.context.Header.hasOwnProperty('parent_code')) ? retrieveMasterDefinitionList_Request.context.Header["parent_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/allmasterlist?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&parent_code=" + param_parent_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MasterDefinition_Master_retrievemastercode_list.retrievemastercode_list_ResponseHandler);
        return true;
    },
    
    retrievemastercode_list_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveMasterDefinitionList_ResponseObject = new retrieveMasterDefinitionListResponse(responseData, "JSON");
            MasterDefinition_Master_retrievemastercode_list.callbackfunction(retrieveMasterDefinitionList_ResponseObject, textStatus);
        }
        else {
            MasterDefinition_Master_retrievemastercode_list.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveMasterDefinitionListRequestcontext();
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
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MasterDefinition/allmasterlist?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&parent_code=" + param_parent_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
