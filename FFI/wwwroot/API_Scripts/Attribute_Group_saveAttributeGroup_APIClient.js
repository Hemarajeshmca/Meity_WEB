var AttributeGroup_Attribute_Group_saveAttributeGroup = {
    /*
     Function to invoke API
     Notes:
     Resource: Attribute_Group
     Description: saveAttributeGroup
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveAttributeGroup_Request, callbackHandler)
    {
        var request = new saveAttributeGroupRequest(saveAttributeGroup_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroup/newattributegroup";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, AttributeGroup_Attribute_Group_saveAttributeGroup.saveAttributeGroup_ResponseHandler);
        return true;
    },
    
    saveAttributeGroup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveAttributeGroup_ResponseObject = new saveAttributeGroupResponse(responseData, "JSON");
            AttributeGroup_Attribute_Group_saveAttributeGroup.callbackfunction(saveAttributeGroup_ResponseObject, textStatus);
        }
        else {
            AttributeGroup_Attribute_Group_saveAttributeGroup.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveAttributeGroupRequestcontext();
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
        
        var request = new saveAttributeGroupRequest();
        request.context = new saveAttributeGroupRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroup/newattributegroup";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
