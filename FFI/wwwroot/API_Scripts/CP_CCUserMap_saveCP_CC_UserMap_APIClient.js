var CP_CC_UserMap_CP_CCUserMap_saveCP_CC_UserMap = {
    /*
     Function to invoke API
     Notes:
     Resource: CP_CCUserMap
     Description: saveCP_CC_UserMap
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCP_CC_UserMap_Request, callbackHandler)
    {
        var request = new saveCP_CC_UserMapRequest(saveCP_CC_UserMap_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CP_CC_UserMap/newcp_cc_usermap";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CP_CC_UserMap_CP_CCUserMap_saveCP_CC_UserMap.saveCP_CC_UserMap_ResponseHandler);
        return true;
    },
    
    saveCP_CC_UserMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCP_CC_UserMap_ResponseObject = new saveCP_CC_UserMapResponse(responseData, "JSON");
            CP_CC_UserMap_CP_CCUserMap_saveCP_CC_UserMap.callbackfunction(saveCP_CC_UserMap_ResponseObject, textStatus);
        }
        else {
            CP_CC_UserMap_CP_CCUserMap_saveCP_CC_UserMap.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveCP_CC_UserMapRequestcontext();
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
        
        var request = new saveCP_CC_UserMapRequest();
        request.context = new saveCP_CC_UserMapRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CP_CC_UserMap/newcp_cc_usermap";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
