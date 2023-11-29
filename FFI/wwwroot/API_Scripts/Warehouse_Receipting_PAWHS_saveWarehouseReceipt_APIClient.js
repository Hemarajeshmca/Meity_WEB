var WarehouseReceipting_Warehouse_Receipting_PAWHS_saveWarehouseReceipt = {
    /*
     Function to invoke API
     Notes:
     Resource: Warehouse_Receipting
     Description: PAWHS_saveWarehouseReceipt
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveWarehouseReceipt_Request, callbackHandler)
    {
        var request = new PAWHS_saveWarehouseReceiptRequest(PAWHS_saveWarehouseReceipt_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseReceipting/new_warehouse_receipt";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, WarehouseReceipting_Warehouse_Receipting_PAWHS_saveWarehouseReceipt.PAWHS_saveWarehouseReceipt_ResponseHandler);
        return true;
    },
    
    PAWHS_saveWarehouseReceipt_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveWarehouseReceipt_ResponseObject = new PAWHS_saveWarehouseReceiptResponse(responseData, "JSON");
            WarehouseReceipting_Warehouse_Receipting_PAWHS_saveWarehouseReceipt.callbackfunction(PAWHS_saveWarehouseReceipt_ResponseObject, textStatus);
        }
        else {
            WarehouseReceipting_Warehouse_Receipting_PAWHS_saveWarehouseReceipt.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveWarehouseReceiptRequestcontext();
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
        
        var request = new PAWHS_saveWarehouseReceiptRequest();
        request.context = new PAWHS_saveWarehouseReceiptRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseReceipting/new_warehouse_receipt";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
