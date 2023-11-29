var WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt = {
    /*
     Function to invoke API
     Notes:
     Resource: Warehouse_Receipting
     Description: PAWHS_getWarehouseReceipt
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getWarehouseReceipt_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getWarehouseReceipt_Request.context && PAWHS_getWarehouseReceipt_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getWarehouseReceipt_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getWarehouseReceipt_Request.context && PAWHS_getWarehouseReceipt_Request.context.hasOwnProperty('locnId')) ? PAWHS_getWarehouseReceipt_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getWarehouseReceipt_Request.context && PAWHS_getWarehouseReceipt_Request.context.hasOwnProperty('userId')) ? PAWHS_getWarehouseReceipt_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getWarehouseReceipt_Request.context && PAWHS_getWarehouseReceipt_Request.context.hasOwnProperty('localeId')) ? PAWHS_getWarehouseReceipt_Request.context["localeId"] : null; //Unicode string(100)
        var param_whs_receipt_rowid = (PAWHS_getWarehouseReceipt_Request.context.Header && PAWHS_getWarehouseReceipt_Request.context.Header.hasOwnProperty('whs_receipt_rowid')) ? PAWHS_getWarehouseReceipt_Request.context.Header["whs_receipt_rowid"] : null; //Integer(32)
        var param_grn_invoice_no = (PAWHS_getWarehouseReceipt_Request.context.Header && PAWHS_getWarehouseReceipt_Request.context.Header.hasOwnProperty('grn_invoice_no')) ? PAWHS_getWarehouseReceipt_Request.context.Header["grn_invoice_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseReceipting/warehouse_receipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&whs_receipt_rowid=" + param_whs_receipt_rowid + "&grn_invoice_no=" + param_grn_invoice_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt.PAWHS_getWarehouseReceipt_ResponseHandler);
        return true;
    },
    
    PAWHS_getWarehouseReceipt_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getWarehouseReceipt_ResponseObject = new PAWHS_getWarehouseReceiptResponse(responseData, "JSON");
            WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt.callbackfunction(PAWHS_getWarehouseReceipt_ResponseObject, textStatus);
        }
        else {
            WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getWarehouseReceiptRequestcontext();
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
        var param_whs_receipt_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('whs_receipt_rowid')) ? HeaderrequestObject["whs_receipt_rowid"] : null; //Integer(32)
        var param_grn_invoice_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('grn_invoice_no')) ? HeaderrequestObject["grn_invoice_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseReceipting/warehouse_receipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&whs_receipt_rowid=" + param_whs_receipt_rowid + "&grn_invoice_no=" + param_grn_invoice_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
