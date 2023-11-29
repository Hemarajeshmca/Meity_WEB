var PAWHSStockAdjustment_PAWHS_StockAdjustment_PAWHS_getStockAdjustment = {
    /*
     Function to invoke API
     Notes:
     Resource: PAWHS_StockAdjustment
     Description: PAWHS_getStockAdjustment
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getStockAdjustment_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getStockAdjustment_Request.context && PAWHS_getStockAdjustment_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getStockAdjustment_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getStockAdjustment_Request.context && PAWHS_getStockAdjustment_Request.context.hasOwnProperty('locnId')) ? PAWHS_getStockAdjustment_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getStockAdjustment_Request.context && PAWHS_getStockAdjustment_Request.context.hasOwnProperty('userId')) ? PAWHS_getStockAdjustment_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getStockAdjustment_Request.context && PAWHS_getStockAdjustment_Request.context.hasOwnProperty('localeId')) ? PAWHS_getStockAdjustment_Request.context["localeId"] : null; //Unicode string(100)
        var param_adjustment_rowid = (PAWHS_getStockAdjustment_Request.context.Header && PAWHS_getStockAdjustment_Request.context.Header.hasOwnProperty('adjustment_rowid')) ? PAWHS_getStockAdjustment_Request.context.Header["adjustment_rowid"] : null; //Integer(32)
        var param_adjustment_no = (PAWHS_getStockAdjustment_Request.context.Header && PAWHS_getStockAdjustment_Request.context.Header.hasOwnProperty('adjustment_no')) ? PAWHS_getStockAdjustment_Request.context.Header["adjustment_no"] : null; //Unicode string(100)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSStockAdjustment/stock_adjustment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&adjustment_rowid=" + param_adjustment_rowid + "&adjustment_no=" + param_adjustment_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, PAWHSStockAdjustment_PAWHS_StockAdjustment_PAWHS_getStockAdjustment.PAWHS_getStockAdjustment_ResponseHandler);
        return true;
    },
    
    PAWHS_getStockAdjustment_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getStockAdjustment_ResponseObject = new PAWHS_getStockAdjustmentResponse(responseData, "JSON");
            PAWHSStockAdjustment_PAWHS_StockAdjustment_PAWHS_getStockAdjustment.callbackfunction(PAWHS_getStockAdjustment_ResponseObject, textStatus);
        }
        else {
            PAWHSStockAdjustment_PAWHS_StockAdjustment_PAWHS_getStockAdjustment.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getStockAdjustmentRequestcontext();
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
        var param_adjustment_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('adjustment_rowid')) ? HeaderrequestObject["adjustment_rowid"] : null; //Integer(32)
        var param_adjustment_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('adjustment_no')) ? HeaderrequestObject["adjustment_no"] : null; //Unicode string(100)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSStockAdjustment/stock_adjustment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&adjustment_rowid=" + param_adjustment_rowid + "&adjustment_no=" + param_adjustment_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
