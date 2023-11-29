var StockAdjustment_stockAdjustment_master_getStockAdjustment = {
    /*
     Function to invoke API
     Notes:
     Resource: stockAdjustment_master
     Description: getStockAdjustment
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getStockAdjustment_Request, callbackHandler)
    {
        var param_orgnid = (getStockAdjustment_Request.context && getStockAdjustment_Request.context.hasOwnProperty('orgnId')) ? getStockAdjustment_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (getStockAdjustment_Request.context && getStockAdjustment_Request.context.hasOwnProperty('locnId')) ? getStockAdjustment_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (getStockAdjustment_Request.context && getStockAdjustment_Request.context.hasOwnProperty('userId')) ? getStockAdjustment_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (getStockAdjustment_Request.context && getStockAdjustment_Request.context.hasOwnProperty('localeId')) ? getStockAdjustment_Request.context["localeId"] : null; //Unicode string(100)
        var param_taxrate_rowid = (getStockAdjustment_Request.context.Header && getStockAdjustment_Request.context.Header.hasOwnProperty('adjustment_rowid')) ? getStockAdjustment_Request.context.Header["adjustment_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StockAdjustment/stockAdjustment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&taxrate_rowid=" + param_taxrate_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, StockAdjustment_stockAdjustment_master_getStockAdjustment.getStockAdjustment_ResponseHandler);
        return true;
    },
    
    getStockAdjustment_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getStockAdjustment_ResponseObject = new getStockAdjustmentResponse(responseData, "JSON");
            StockAdjustment_stockAdjustment_master_getStockAdjustment.callbackfunction(getStockAdjustment_ResponseObject, textStatus);
        }
        else {
            StockAdjustment_stockAdjustment_master_getStockAdjustment.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new getStockAdjustmentRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (contextrequestObject && contextrequestObject.hasOwnProperty('orgnId')) ? contextrequestObject["orgnId"] : null; //Unicode string(100)
        var param_locnid = (contextrequestObject && contextrequestObject.hasOwnProperty('locnId')) ? contextrequestObject["locnId"] : null; //Unicode string(100)
        var param_userid = (contextrequestObject && contextrequestObject.hasOwnProperty('userId')) ? contextrequestObject["userId"] : null; //Unicode string(128)
        var param_localeid = (contextrequestObject && contextrequestObject.hasOwnProperty('localeId')) ? contextrequestObject["localeId"] : null; //Unicode string(100)
        var param_taxrate_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('adjustment_rowid')) ? HeaderrequestObject["adjustment_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StockAdjustment/stockAdjustment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&taxrate_rowid=" + param_taxrate_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
