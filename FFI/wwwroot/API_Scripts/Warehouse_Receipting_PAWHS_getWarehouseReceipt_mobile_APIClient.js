var WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt_mobile = {
    /*
     Function to invoke API
     Notes:
     Resource: Warehouse_Receipting
     Description: PAWHS_getWarehouseReceipt_mobile
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getWarehouseReceipt_mobile_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getWarehouseReceipt_mobile_Request.context && PAWHS_getWarehouseReceipt_mobile_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getWarehouseReceipt_mobile_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getWarehouseReceipt_mobile_Request.context && PAWHS_getWarehouseReceipt_mobile_Request.context.hasOwnProperty('locnId')) ? PAWHS_getWarehouseReceipt_mobile_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getWarehouseReceipt_mobile_Request.context && PAWHS_getWarehouseReceipt_mobile_Request.context.hasOwnProperty('userId')) ? PAWHS_getWarehouseReceipt_mobile_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getWarehouseReceipt_mobile_Request.context && PAWHS_getWarehouseReceipt_mobile_Request.context.hasOwnProperty('localeId')) ? PAWHS_getWarehouseReceipt_mobile_Request.context["localeId"] : null; //Unicode string(100)
        var param_pickup_request_id = (PAWHS_getWarehouseReceipt_mobile_Request.context.Header && PAWHS_getWarehouseReceipt_mobile_Request.context.Header.hasOwnProperty('pickup_request_id')) ? PAWHS_getWarehouseReceipt_mobile_Request.context.Header["pickup_request_id"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseReceipting/pawhs_warehouse_receipting_mob?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&pickup_request_id=" + param_pickup_request_id + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt_mobile.PAWHS_getWarehouseReceipt_mobile_ResponseHandler);
        return true;
    },
    
    PAWHS_getWarehouseReceipt_mobile_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getWarehouseReceipt_mobile_ResponseObject = new PAWHS_getWarehouseReceipt_mobileResponse(responseData, "JSON");
            WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt_mobile.callbackfunction(PAWHS_getWarehouseReceipt_mobile_ResponseObject, textStatus);
        }
        else {
            WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt_mobile.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getWarehouseReceipt_mobileRequestcontext();
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
        var param_pickup_request_id = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('pickup_request_id')) ? HeaderrequestObject["pickup_request_id"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseReceipting/pawhs_warehouse_receipting_mob?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&pickup_request_id=" + param_pickup_request_id + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
