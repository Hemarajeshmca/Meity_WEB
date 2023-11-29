var CollectionCenterMap_CCMap_saveCCMap = {
    /*
     Function to invoke API
     Notes:
     Resource: CCMap
     Description: saveCCMap
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCCMap_Request, callbackHandler)
    {
        var request = new saveCCMapRequest(saveCCMap_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CollectionCenterMap/newcc_map";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CollectionCenterMap_CCMap_saveCCMap.saveCCMap_ResponseHandler);
        return true;
    },
    
    saveCCMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCCMap_ResponseObject = new saveCCMapResponse(responseData, "JSON");
            CollectionCenterMap_CCMap_saveCCMap.callbackfunction(saveCCMap_ResponseObject, textStatus);
        }
        else {
            CollectionCenterMap_CCMap_saveCCMap.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, CCVillagerequestObjectArray, CCCPrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveCCMapRequestcontext();
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
        contextrequestObject.CCVillage = CCVillagerequestObjectArray;
        contextrequestObject.CCCP = CCCPrequestObjectArray;
        
        var request = new saveCCMapRequest();
        request.context = new saveCCMapRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CollectionCenterMap/newcc_map";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
