var ProductionStageSetup_Production_StageSetup_PAWHS_saveProductionStageSetup = {
    /*
     Function to invoke API
     Notes:
     Resource: Production_StageSetup
     Description: PAWHS_saveProductionStageSetup
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveProductionStageSetup_Request, callbackHandler)
    {
        var request = new PAWHS_saveProductionStageSetupRequest(PAWHS_saveProductionStageSetup_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProductionStageSetup/new_production_stagesetup";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ProductionStageSetup_Production_StageSetup_PAWHS_saveProductionStageSetup.PAWHS_saveProductionStageSetup_ResponseHandler);
        return true;
    },
    
    PAWHS_saveProductionStageSetup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveProductionStageSetup_ResponseObject = new PAWHS_saveProductionStageSetupResponse(responseData, "JSON");
            ProductionStageSetup_Production_StageSetup_PAWHS_saveProductionStageSetup.callbackfunction(PAWHS_saveProductionStageSetup_ResponseObject, textStatus);
        }
        else {
            ProductionStageSetup_Production_StageSetup_PAWHS_saveProductionStageSetup.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, StagerequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_saveProductionStageSetupRequestcontext();
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
        contextrequestObject.Stage = StagerequestObjectArray;
        
        var request = new PAWHS_saveProductionStageSetupRequest();
        request.context = new PAWHS_saveProductionStageSetupRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProductionStageSetup/new_production_stagesetup";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
