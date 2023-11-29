var ItemMaster_Item_Master_PAWHS_saveItemMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: Item_Master
     Description: PAWHS_saveItemMaster
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveItemMaster_Request, callbackHandler)
    {
        var request = new PAWHS_saveItemMasterRequest(PAWHS_saveItemMaster_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ItemMaster/new_item_master";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ItemMaster_Item_Master_PAWHS_saveItemMaster.PAWHS_saveItemMaster_ResponseHandler);
        return true;
    },
    
    PAWHS_saveItemMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveItemMaster_ResponseObject = new PAWHS_saveItemMasterResponse(responseData, "JSON");
            ItemMaster_Item_Master_PAWHS_saveItemMaster.callbackfunction(PAWHS_saveItemMaster_ResponseObject, textStatus);
        }
        else {
            ItemMaster_Item_Master_PAWHS_saveItemMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveItemMasterRequestcontext();
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
        
        var request = new PAWHS_saveItemMasterRequest();
        request.context = new PAWHS_saveItemMasterRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ItemMaster/new_item_master";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
