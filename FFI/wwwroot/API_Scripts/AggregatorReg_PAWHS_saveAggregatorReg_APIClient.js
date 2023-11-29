var AggregatorRegistration_AggregatorReg_PAWHS_saveAggregatorReg = {
    /*
     Function to invoke API
     Notes:
     Resource: AggregatorReg
     Description: PAWHS_saveAggregatorReg
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveAggregatorReg_Request, callbackHandler)
    {
        var request = new PAWHS_saveAggregatorRegRequest(PAWHS_saveAggregatorReg_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorRegistration/new_aggregator_registration";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, AggregatorRegistration_AggregatorReg_PAWHS_saveAggregatorReg.PAWHS_saveAggregatorReg_ResponseHandler);
        return true;
    },
    
    PAWHS_saveAggregatorReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveAggregatorReg_ResponseObject = new PAWHS_saveAggregatorRegResponse(responseData, "JSON");
            AggregatorRegistration_AggregatorReg_PAWHS_saveAggregatorReg.callbackfunction(PAWHS_saveAggregatorReg_ResponseObject, textStatus);
        }
        else {
            AggregatorRegistration_AggregatorReg_PAWHS_saveAggregatorReg.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, AddressrequestObjectArray, BankrequestObjectArray, FIGrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_saveAggregatorRegRequestcontext();
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
        contextrequestObject.Address = AddressrequestObjectArray;
        contextrequestObject.Bank = BankrequestObjectArray;
        contextrequestObject.FIG = FIGrequestObjectArray;
        
        var request = new PAWHS_saveAggregatorRegRequest();
        request.context = new PAWHS_saveAggregatorRegRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorRegistration/new_aggregator_registration";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
