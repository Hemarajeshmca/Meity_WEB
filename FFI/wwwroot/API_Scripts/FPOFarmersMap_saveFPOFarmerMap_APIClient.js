var FPOFarmerMap_FPOFarmersMap_saveFPOFarmerMap = {
    /*
     Function to invoke API
     Notes:
     Resource: FPOFarmersMap
     Description: saveFPOFarmerMap
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFPOFarmerMap_Request, callbackHandler)
    {
        var request = new saveFPOFarmerMapRequest(saveFPOFarmerMap_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOFarmerMap/newFPOFarmerMap";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FPOFarmerMap_FPOFarmersMap_saveFPOFarmerMap.saveFPOFarmerMap_ResponseHandler);
        return true;
    },
    
    saveFPOFarmerMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFPOFarmerMap_ResponseObject = new saveFPOFarmerMapResponse(responseData, "JSON");
            FPOFarmerMap_FPOFarmersMap_saveFPOFarmerMap.callbackfunction(saveFPOFarmerMap_ResponseObject, textStatus);
        }
        else {
            FPOFarmerMap_FPOFarmersMap_saveFPOFarmerMap.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, MaprequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFPOFarmerMapRequestcontext();
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
        contextrequestObject.Map = MaprequestObjectArray;
        
        var request = new saveFPOFarmerMapRequest();
        request.context = new saveFPOFarmerMapRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOFarmerMap/newFPOFarmerMap";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
