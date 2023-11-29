var PAWHSStockAdjustment_PAWHS_StockAdjustment_PAWHS_saveStockAdjustment = {
    /*
     Function to invoke API
     Notes:
     Resource: PAWHS_StockAdjustment
     Description: PAWHS_saveStockAdjustment
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveStockAdjustment_Request, callbackHandler)
    {
        var request = new PAWHS_saveStockAdjustmentRequest(PAWHS_saveStockAdjustment_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSStockAdjustment/new_pawhs_stock_adjustment";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, PAWHSStockAdjustment_PAWHS_StockAdjustment_PAWHS_saveStockAdjustment.PAWHS_saveStockAdjustment_ResponseHandler);
        return true;
    },
    
    PAWHS_saveStockAdjustment_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveStockAdjustment_ResponseObject = new PAWHS_saveStockAdjustmentResponse(responseData, "JSON");
            PAWHSStockAdjustment_PAWHS_StockAdjustment_PAWHS_saveStockAdjustment.callbackfunction(PAWHS_saveStockAdjustment_ResponseObject, textStatus);
        }
        else {
            PAWHSStockAdjustment_PAWHS_StockAdjustment_PAWHS_saveStockAdjustment.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveStockAdjustmentRequestcontext();
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
        
        var request = new PAWHS_saveStockAdjustmentRequest();
        request.context = new PAWHS_saveStockAdjustmentRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSStockAdjustment/new_pawhs_stock_adjustment";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
