var ReadyToPickup_ReadyTo_pickup_PAWHS_getReadyToPickup = {
    /*
     Function to invoke API
     Notes:
     Resource: ReadyTo_pickup
     Description: PAWHS_getReadyToPickup
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getReadyToPickup_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getReadyToPickup_Request.context && PAWHS_getReadyToPickup_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getReadyToPickup_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getReadyToPickup_Request.context && PAWHS_getReadyToPickup_Request.context.hasOwnProperty('locnId')) ? PAWHS_getReadyToPickup_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getReadyToPickup_Request.context && PAWHS_getReadyToPickup_Request.context.hasOwnProperty('userId')) ? PAWHS_getReadyToPickup_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getReadyToPickup_Request.context && PAWHS_getReadyToPickup_Request.context.hasOwnProperty('localeId')) ? PAWHS_getReadyToPickup_Request.context["localeId"] : null; //Unicode string(100)
        var param_pickup_rowid = (PAWHS_getReadyToPickup_Request.context.Header && PAWHS_getReadyToPickup_Request.context.Header.hasOwnProperty('pickup_rowid')) ? PAWHS_getReadyToPickup_Request.context.Header["pickup_rowid"] : null; //Integer(32)
        var param_farmer_code = (PAWHS_getReadyToPickup_Request.context.Header && PAWHS_getReadyToPickup_Request.context.Header.hasOwnProperty('farmer_code')) ? PAWHS_getReadyToPickup_Request.context.Header["farmer_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReadyToPickup/readyto_pickup?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&pickup_rowid=" + param_pickup_rowid + "&farmer_code=" + param_farmer_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ReadyToPickup_ReadyTo_pickup_PAWHS_getReadyToPickup.PAWHS_getReadyToPickup_ResponseHandler);
        return true;
    },
    
    PAWHS_getReadyToPickup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getReadyToPickup_ResponseObject = new PAWHS_getReadyToPickupResponse(responseData, "JSON");
            ReadyToPickup_ReadyTo_pickup_PAWHS_getReadyToPickup.callbackfunction(PAWHS_getReadyToPickup_ResponseObject, textStatus);
        }
        else {
            ReadyToPickup_ReadyTo_pickup_PAWHS_getReadyToPickup.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getReadyToPickupRequestcontext();
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
        var param_pickup_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('pickup_rowid')) ? HeaderrequestObject["pickup_rowid"] : null; //Integer(32)
        var param_farmer_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('farmer_code')) ? HeaderrequestObject["farmer_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReadyToPickup/readyto_pickup?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&pickup_rowid=" + param_pickup_rowid + "&farmer_code=" + param_farmer_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
