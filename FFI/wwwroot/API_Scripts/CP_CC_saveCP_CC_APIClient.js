var ChillingPlant_CollectionCenter_CP_CC_saveCP_CC = {
    /*
     Function to invoke API
     Notes:
     Resource: CP_CC
     Description: saveCP_CC
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCP_CC_Request, callbackHandler)
    {
        var request = new saveCP_CCRequest(saveCP_CC_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ChillingPlant_CollectionCenter/newcp_cc";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ChillingPlant_CollectionCenter_CP_CC_saveCP_CC.saveCP_CC_ResponseHandler);
        return true;
    },
    
    saveCP_CC_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCP_CC_ResponseObject = new saveCP_CCResponse(responseData, "JSON");
            ChillingPlant_CollectionCenter_CP_CC_saveCP_CC.callbackfunction(saveCP_CC_ResponseObject, textStatus);
        }
        else {
            ChillingPlant_CollectionCenter_CP_CC_saveCP_CC.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveCP_CCRequestcontext();
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
        
        var request = new saveCP_CCRequest();
        request.context = new saveCP_CCRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ChillingPlant_CollectionCenter/newcp_cc";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
