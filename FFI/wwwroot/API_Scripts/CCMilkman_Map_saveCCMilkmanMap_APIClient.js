var CCMilkmanMap_CCMilkman_Map_saveCCMilkmanMap = {
    /*
     Function to invoke API
     Notes:
     Resource: CCMilkman_Map
     Description: saveCCMilkmanMap
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCCMilkmanMap_Request, callbackHandler)
    {
        var request = new saveCCMilkmanMapRequest(saveCCMilkmanMap_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CCMilkmanMap/newcc_milkman_map";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CCMilkmanMap_CCMilkman_Map_saveCCMilkmanMap.saveCCMilkmanMap_ResponseHandler);
        return true;
    },
    
    saveCCMilkmanMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCCMilkmanMap_ResponseObject = new saveCCMilkmanMapResponse(responseData, "JSON");
            CCMilkmanMap_CCMilkman_Map_saveCCMilkmanMap.callbackfunction(saveCCMilkmanMap_ResponseObject, textStatus);
        }
        else {
            CCMilkmanMap_CCMilkman_Map_saveCCMilkmanMap.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveCCMilkmanMapRequestcontext();
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
        
        var request = new saveCCMilkmanMapRequest();
        request.context = new saveCCMilkmanMapRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CCMilkmanMap/newcc_milkman_map";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
