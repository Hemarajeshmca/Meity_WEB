var StageItemDefinition_StageItem_Definition_PAWHS_saveStageItemDefinition = {
    /*
     Function to invoke API
     Notes:
     Resource: StageItem_Definition
     Description: PAWHS_saveStageItemDefinition
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveStageItemDefinition_Request, callbackHandler)
    {
        var request = new PAWHS_saveStageItemDefinitionRequest(PAWHS_saveStageItemDefinition_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StageItemDefinition/new_stage_item_definition";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, StageItemDefinition_StageItem_Definition_PAWHS_saveStageItemDefinition.PAWHS_saveStageItemDefinition_ResponseHandler);
        return true;
    },
    
    PAWHS_saveStageItemDefinition_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveStageItemDefinition_ResponseObject = new PAWHS_saveStageItemDefinitionResponse(responseData, "JSON");
            StageItemDefinition_StageItem_Definition_PAWHS_saveStageItemDefinition.callbackfunction(PAWHS_saveStageItemDefinition_ResponseObject, textStatus);
        }
        else {
            StageItemDefinition_StageItem_Definition_PAWHS_saveStageItemDefinition.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, StagerequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_saveStageItemDefinitionRequestcontext();
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
        contextrequestObject.Stage = StagerequestObjectArray;
        
        var request = new PAWHS_saveStageItemDefinitionRequest();
        request.context = new PAWHS_saveStageItemDefinitionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StageItemDefinition/new_stage_item_definition";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
