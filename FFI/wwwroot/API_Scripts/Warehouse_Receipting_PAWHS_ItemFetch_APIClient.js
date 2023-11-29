var WarehouseReceipting_Warehouse_Receipting_PAWHS_ItemFetch = {
    /*
     Function to invoke API
     Notes:
     Resource: Warehouse_Receipting
     Description: PAWHS_ItemFetch
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_ItemFetch_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_ItemFetch_Request.context && PAWHS_ItemFetch_Request.context.hasOwnProperty('orgnId')) ? PAWHS_ItemFetch_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_ItemFetch_Request.context && PAWHS_ItemFetch_Request.context.hasOwnProperty('locnId')) ? PAWHS_ItemFetch_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_ItemFetch_Request.context && PAWHS_ItemFetch_Request.context.hasOwnProperty('userId')) ? PAWHS_ItemFetch_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_ItemFetch_Request.context && PAWHS_ItemFetch_Request.context.hasOwnProperty('localeId')) ? PAWHS_ItemFetch_Request.context["localeId"] : null; //Unicode string(100)
        var param_agg_code = (PAWHS_ItemFetch_Request.context.Header && PAWHS_ItemFetch_Request.context.Header.hasOwnProperty('agg_code')) ? PAWHS_ItemFetch_Request.context.Header["agg_code"] : null; //Unicode string(50)
        var param_item_code = (PAWHS_ItemFetch_Request.context.Header && PAWHS_ItemFetch_Request.context.Header.hasOwnProperty('item_code')) ? PAWHS_ItemFetch_Request.context.Header["item_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseReceipting/item_fetch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&agg_code=" + param_agg_code + "&item_code=" + param_item_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, WarehouseReceipting_Warehouse_Receipting_PAWHS_ItemFetch.PAWHS_ItemFetch_ResponseHandler);
        return true;
    },
    
    PAWHS_ItemFetch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_ItemFetch_ResponseObject = new PAWHS_ItemFetchResponse(responseData, "JSON");
            WarehouseReceipting_Warehouse_Receipting_PAWHS_ItemFetch.callbackfunction(PAWHS_ItemFetch_ResponseObject, textStatus);
        }
        else {
            WarehouseReceipting_Warehouse_Receipting_PAWHS_ItemFetch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_ItemFetchRequestcontext();
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
        var param_agg_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('agg_code')) ? HeaderrequestObject["agg_code"] : null; //Unicode string(50)
        var param_item_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('item_code')) ? HeaderrequestObject["item_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/WarehouseReceipting/item_fetch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&agg_code=" + param_agg_code + "&item_code=" + param_item_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
