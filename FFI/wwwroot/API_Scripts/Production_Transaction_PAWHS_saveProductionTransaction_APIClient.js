var ProductionTransaction_Production_Transaction_PAWHS_saveProductionTransaction = {
    /*
     Function to invoke API
     Notes:
     Resource: Production_Transaction
     Description: PAWHS_saveProductionTransaction
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveProductionTransaction_Request, callbackHandler)
    {
        var request = new PAWHS_saveProductionTransactionRequest(PAWHS_saveProductionTransaction_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProductionTransaction/new_production_transaction";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ProductionTransaction_Production_Transaction_PAWHS_saveProductionTransaction.PAWHS_saveProductionTransaction_ResponseHandler);
        return true;
    },
    
    PAWHS_saveProductionTransaction_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveProductionTransaction_ResponseObject = new PAWHS_saveProductionTransactionResponse(responseData, "JSON");
            ProductionTransaction_Production_Transaction_PAWHS_saveProductionTransaction.callbackfunction(PAWHS_saveProductionTransaction_ResponseObject, textStatus);
        }
        else {
            ProductionTransaction_Production_Transaction_PAWHS_saveProductionTransaction.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, ListrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_saveProductionTransactionRequestcontext();
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
        contextrequestObject.List = ListrequestObjectArray;
        
        var request = new PAWHS_saveProductionTransactionRequest();
        request.context = new PAWHS_saveProductionTransactionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProductionTransaction/new_production_transaction";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
