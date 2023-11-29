var WarehouseRegistration_Warehouse_Registration_PAWHS_getWarehouseReg = {
    /*
     Function to invoke API
     Notes:
     Resource: Warehouse_Registration
     Description: PAWHS_getWarehouseReg
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getWarehouseReg_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getWarehouseReg_Request.context && PAWHS_getWarehouseReg_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getWarehouseReg_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getWarehouseReg_Request.context && PAWHS_getWarehouseReg_Request.context.hasOwnProperty('locnId')) ? PAWHS_getWarehouseReg_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getWarehouseReg_Request.context && PAWHS_getWarehouseReg_Request.context.hasOwnProperty('userId')) ? PAWHS_getWarehouseReg_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getWarehouseReg_Request.context && PAWHS_getWarehouseReg_Request.context.hasOwnProperty('localeId')) ? PAWHS_getWarehouseReg_Request.context["localeId"] : null; //Unicode string(100)
        var param_whs_rowid = (PAWHS_getWarehouseReg_Request.context.Header && PAWHS_getWarehouseReg_Request.context.Header.hasOwnProperty('whs_rowid')) ? PAWHS_getWarehouseReg_Request.context.Header["whs_rowid"] : null; //Integer(32)
        var param_agg_code = (PAWHS_getWarehouseReg_Request.context.Header && PAWHS_getWarehouseReg_Request.context.Header.hasOwnProperty('agg_code')) ? PAWHS_getWarehouseReg_Request.context.Header["agg_code"] : null; //Unicode string(50)
        var param_whs_code = (PAWHS_getWarehouseReg_Request.context.Header && PAWHS_getWarehouseReg_Request.context.Header.hasOwnProperty('whs_code')) ? PAWHS_getWarehouseReg_Request.context.Header["whs_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseRegistration/warehouse_registration?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&whs_rowid=" + param_whs_rowid + "&agg_code=" + param_agg_code + "&whs_code=" + param_whs_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, WarehouseRegistration_Warehouse_Registration_PAWHS_getWarehouseReg.PAWHS_getWarehouseReg_ResponseHandler);
        return true;
    },
    
    PAWHS_getWarehouseReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getWarehouseReg_ResponseObject = new PAWHS_getWarehouseRegResponse(responseData, "JSON");
            WarehouseRegistration_Warehouse_Registration_PAWHS_getWarehouseReg.callbackfunction(PAWHS_getWarehouseReg_ResponseObject, textStatus);
        }
        else {
            WarehouseRegistration_Warehouse_Registration_PAWHS_getWarehouseReg.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getWarehouseRegRequestcontext();
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
        var param_whs_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('whs_rowid')) ? HeaderrequestObject["whs_rowid"] : null; //Integer(32)
        var param_agg_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('agg_code')) ? HeaderrequestObject["agg_code"] : null; //Unicode string(50)
        var param_whs_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('whs_code')) ? HeaderrequestObject["whs_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseRegistration/warehouse_registration?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&whs_rowid=" + param_whs_rowid + "&agg_code=" + param_agg_code + "&whs_code=" + param_whs_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
