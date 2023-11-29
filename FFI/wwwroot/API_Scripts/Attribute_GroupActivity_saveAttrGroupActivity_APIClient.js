var AttributeGroupActivity_Attribute_GroupActivity_saveAttrGroupActivity = {
    /*
     Function to invoke API
     Notes:
     Resource: Attribute_GroupActivity
     Description: saveAttrGroupActivity
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveAttrGroupActivity_Request, callbackHandler)
    {
        var request = new saveAttrGroupActivityRequest(saveAttrGroupActivity_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroupActivity/newattrgroupactivity";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, AttributeGroupActivity_Attribute_GroupActivity_saveAttrGroupActivity.saveAttrGroupActivity_ResponseHandler);
        return true;
    },
    
    saveAttrGroupActivity_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveAttrGroupActivity_ResponseObject = new saveAttrGroupActivityResponse(responseData, "JSON");
            AttributeGroupActivity_Attribute_GroupActivity_saveAttrGroupActivity.callbackfunction(saveAttrGroupActivity_ResponseObject, textStatus);
        }
        else {
            AttributeGroupActivity_Attribute_GroupActivity_saveAttrGroupActivity.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveAttrGroupActivityRequestcontext();
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
        
        var request = new saveAttrGroupActivityRequest();
        request.context = new saveAttrGroupActivityRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroupActivity/newattrgroupactivity";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
