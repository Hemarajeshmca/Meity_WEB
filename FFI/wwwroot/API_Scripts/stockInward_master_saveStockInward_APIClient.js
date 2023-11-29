var StockInward_stockInward_master_saveStockInward = {
    /*
     Function to invoke API
     Notes:
     Resource: stockInward_master
     Description: saveStockInward
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveStockInward_Request, callbackHandler)
    {
        var request = new saveStockInwardRequest(saveStockInward_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StockInward/newSaveStockInward";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, StockInward_stockInward_master_saveStockInward.saveStockInward_ResponseHandler);
        return true;
    },
    
    saveStockInward_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveStockInward_ResponseObject = new saveStockInwardResponse(responseData, "JSON");
            StockInward_stockInward_master_saveStockInward.callbackfunction(saveStockInward_ResponseObject, textStatus);
        }
        else {
            StockInward_stockInward_master_saveStockInward.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveStockInwardRequestcontext();
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
        
        var request = new saveStockInwardRequest();
        request.context = new saveStockInwardRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StockInward/newSaveStockInward";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
