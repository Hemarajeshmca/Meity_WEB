var ReadyToPickup_ReadyTo_pickup_PAWHS_saveReadyToPickup = {
    /*
     Function to invoke API
     Notes:
     Resource: ReadyTo_pickup
     Description: PAWHS_saveReadyToPickup
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveReadyToPickup_Request, callbackHandler)
    {
        var request = new PAWHS_saveReadyToPickupRequest(PAWHS_saveReadyToPickup_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReadyToPickup/new_readyto_pickup";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ReadyToPickup_ReadyTo_pickup_PAWHS_saveReadyToPickup.PAWHS_saveReadyToPickup_ResponseHandler);
        return true;
    },
    
    PAWHS_saveReadyToPickup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveReadyToPickup_ResponseObject = new PAWHS_saveReadyToPickupResponse(responseData, "JSON");
            ReadyToPickup_ReadyTo_pickup_PAWHS_saveReadyToPickup.callbackfunction(PAWHS_saveReadyToPickup_ResponseObject, textStatus);
        }
        else {
            ReadyToPickup_ReadyTo_pickup_PAWHS_saveReadyToPickup.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveReadyToPickupRequestcontext();
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
        
        var request = new PAWHS_saveReadyToPickupRequest();
        request.context = new PAWHS_saveReadyToPickupRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReadyToPickup/new_readyto_pickup";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
