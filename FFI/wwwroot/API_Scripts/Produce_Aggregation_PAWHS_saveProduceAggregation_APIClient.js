var ProduceAggregation_Produce_Aggregation_PAWHS_saveProduceAggregation = {
    /*
     Function to invoke API
     Notes:
     Resource: Produce_Aggregation
     Description: PAWHS_saveProduceAggregation
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveProduceAggregation_Request, callbackHandler)
    {
        var request = new PAWHS_saveProduceAggregationRequest(PAWHS_saveProduceAggregation_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProduceAggregation/new_produce_aggregation";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ProduceAggregation_Produce_Aggregation_PAWHS_saveProduceAggregation.PAWHS_saveProduceAggregation_ResponseHandler);
        return true;
    },
    
    PAWHS_saveProduceAggregation_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveProduceAggregation_ResponseObject = new PAWHS_saveProduceAggregationResponse(responseData, "JSON");
            ProduceAggregation_Produce_Aggregation_PAWHS_saveProduceAggregation.callbackfunction(PAWHS_saveProduceAggregation_ResponseObject, textStatus);
        }
        else {
            ProduceAggregation_Produce_Aggregation_PAWHS_saveProduceAggregation.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_saveProduceAggregationRequestcontext();
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
        
        var request = new PAWHS_saveProduceAggregationRequest();
        request.context = new PAWHS_saveProduceAggregationRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProduceAggregation/new_produce_aggregation";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
