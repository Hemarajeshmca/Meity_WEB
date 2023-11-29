var InputCenterDemandGeneration_ICDGen_saveICDGen = {
    /*
     Function to invoke API
     Notes:
     Resource: ICDGen
     Description: saveICDGen
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveICDGen_Request, callbackHandler)
    {
        var request = new saveICDGenRequest(saveICDGen_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenterDemandGeneration/newICDGen";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, InputCenterDemandGeneration_ICDGen_saveICDGen.saveICDGen_ResponseHandler);
        return true;
    },
    
    saveICDGen_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveICDGen_ResponseObject = new saveICDGenResponse(responseData, "JSON");
            InputCenterDemandGeneration_ICDGen_saveICDGen.callbackfunction(saveICDGen_ResponseObject, textStatus);
        }
        else {
            InputCenterDemandGeneration_ICDGen_saveICDGen.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, ICDGenDtlrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveICDGenRequestcontext();
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
        contextrequestObject.ICDGenDtl = ICDGenDtlrequestObjectArray;
        
        var request = new saveICDGenRequest();
        request.context = new saveICDGenRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenterDemandGeneration/newICDGen";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
