var AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_saveAggregatorVsFarMap = {
    /*
     Function to invoke API
     Notes:
     Resource: Aggr_Vs_FarmerMapping
     Description: PAWHS_saveAggregatorVsFarMap
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveAggregatorVsFarMap_Request, callbackHandler)
    {
        var request = new PAWHS_saveAggregatorVsFarMapRequest(PAWHS_saveAggregatorVsFarMap_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorVsFarmerMapping/new_aggr_vs_farmer_mapping";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_saveAggregatorVsFarMap.PAWHS_saveAggregatorVsFarMap_ResponseHandler);
        return true;
    },
    
    PAWHS_saveAggregatorVsFarMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveAggregatorVsFarMap_ResponseObject = new PAWHS_saveAggregatorVsFarMapResponse(responseData, "JSON");
            AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_saveAggregatorVsFarMap.callbackfunction(PAWHS_saveAggregatorVsFarMap_ResponseObject, textStatus);
        }
        else {
            AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_saveAggregatorVsFarMap.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, FarmersMappedrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_saveAggregatorVsFarMapRequestcontext();
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
        contextrequestObject.FarmersMapped = FarmersMappedrequestObjectArray;
        
        var request = new PAWHS_saveAggregatorVsFarMapRequest();
        request.context = new PAWHS_saveAggregatorVsFarMapRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorVsFarmerMapping/new_aggr_vs_farmer_mapping";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
