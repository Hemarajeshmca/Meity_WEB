var ItemMaster_Item_Master_PAWHS_getItemMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: Item_Master
     Description: PAWHS_getItemMaster
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getItemMaster_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getItemMaster_Request.context && PAWHS_getItemMaster_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getItemMaster_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getItemMaster_Request.context && PAWHS_getItemMaster_Request.context.hasOwnProperty('locnId')) ? PAWHS_getItemMaster_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getItemMaster_Request.context && PAWHS_getItemMaster_Request.context.hasOwnProperty('userId')) ? PAWHS_getItemMaster_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getItemMaster_Request.context && PAWHS_getItemMaster_Request.context.hasOwnProperty('localeId')) ? PAWHS_getItemMaster_Request.context["localeId"] : null; //Unicode string(100)
        var param_item_rowid = (PAWHS_getItemMaster_Request.context.Header && PAWHS_getItemMaster_Request.context.Header.hasOwnProperty('item_rowid')) ? PAWHS_getItemMaster_Request.context.Header["item_rowid"] : null; //Integer(32)
        var param_agg_code = (PAWHS_getItemMaster_Request.context.Header && PAWHS_getItemMaster_Request.context.Header.hasOwnProperty('agg_code')) ? PAWHS_getItemMaster_Request.context.Header["agg_code"] : null; //Unicode string(50)
        var param_item_code = (PAWHS_getItemMaster_Request.context.Header && PAWHS_getItemMaster_Request.context.Header.hasOwnProperty('item_code')) ? PAWHS_getItemMaster_Request.context.Header["item_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ItemMaster/item_master?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&item_rowid=" + param_item_rowid + "&agg_code=" + param_agg_code + "&item_code=" + param_item_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ItemMaster_Item_Master_PAWHS_getItemMaster.PAWHS_getItemMaster_ResponseHandler);
        return true;
    },
    
    PAWHS_getItemMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getItemMaster_ResponseObject = new PAWHS_getItemMasterResponse(responseData, "JSON");
            ItemMaster_Item_Master_PAWHS_getItemMaster.callbackfunction(PAWHS_getItemMaster_ResponseObject, textStatus);
        }
        else {
            ItemMaster_Item_Master_PAWHS_getItemMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getItemMasterRequestcontext();
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
        var param_item_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('item_rowid')) ? HeaderrequestObject["item_rowid"] : null; //Integer(32)
        var param_agg_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('agg_code')) ? HeaderrequestObject["agg_code"] : null; //Unicode string(50)
        var param_item_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('item_code')) ? HeaderrequestObject["item_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ItemMaster/item_master?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&item_rowid=" + param_item_rowid + "&agg_code=" + param_agg_code + "&item_code=" + param_item_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
