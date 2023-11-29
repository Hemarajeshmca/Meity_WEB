var StockAdjustment_stockAdjustment_master_saveStockAdjustment = {
    /*
     Function to invoke API
     Notes:
     Resource: stockAdjustment_master
     Description: saveStockAdjustment
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveStockAdjustment_Request, callbackHandler)
    {
        var request = new saveStockAdjustmentRequest(saveStockAdjustment_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StockAdjustment/newSaveStockAdjustmen";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, StockAdjustment_stockAdjustment_master_saveStockAdjustment.saveStockAdjustment_ResponseHandler);
        return true;
    },
    
    saveStockAdjustment_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveStockAdjustment_ResponseObject = new saveStockAdjustmentResponse(responseData, "JSON");
            StockAdjustment_stockAdjustment_master_saveStockAdjustment.callbackfunction(saveStockAdjustment_ResponseObject, textStatus);
        }
        else {
            StockAdjustment_stockAdjustment_master_saveStockAdjustment.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveStockAdjustmentRequestcontext();
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
        
        var request = new saveStockAdjustmentRequest();
        request.context = new saveStockAdjustmentRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StockAdjustment/newSaveStockAdjustmen";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
