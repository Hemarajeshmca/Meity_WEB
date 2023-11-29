var FLDeposit_Slip_Generation_FLDepositSlipGeneration_saveFLDeposit_Slip_Generation = {
    /*
     Function to invoke API
     Notes:
     Resource: FLDepositSlipGeneration
     Description: saveFLDeposit_Slip_Generation
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLDeposit_Slip_Generation_Request, callbackHandler)
    {
        var request = new saveFLDeposit_Slip_GenerationRequest(saveFLDeposit_Slip_Generation_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLDeposit_Slip_Generation/newFLDeposit_Slip_Generation";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FLDeposit_Slip_Generation_FLDepositSlipGeneration_saveFLDeposit_Slip_Generation.saveFLDeposit_Slip_Generation_ResponseHandler);
        return true;
    },
    
    saveFLDeposit_Slip_Generation_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLDeposit_Slip_Generation_ResponseObject = new saveFLDeposit_Slip_GenerationResponse(responseData, "JSON");
            FLDeposit_Slip_Generation_FLDepositSlipGeneration_saveFLDeposit_Slip_Generation.callbackfunction(saveFLDeposit_Slip_Generation_ResponseObject, textStatus);
        }
        else {
            FLDeposit_Slip_Generation_FLDepositSlipGeneration_saveFLDeposit_Slip_Generation.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveFLDeposit_Slip_GenerationRequestcontext();
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
        
        var request = new saveFLDeposit_Slip_GenerationRequest();
        request.context = new saveFLDeposit_Slip_GenerationRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLDeposit_Slip_Generation/newFLDeposit_Slip_Generation";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
