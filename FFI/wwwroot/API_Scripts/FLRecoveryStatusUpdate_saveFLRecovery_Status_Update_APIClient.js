var FLRecovery_Status_Update_FLRecoveryStatusUpdate_saveFLRecovery_Status_Update = {
    /*
     Function to invoke API
     Notes:
     Resource: FLRecoveryStatusUpdate
     Description: saveFLRecovery_Status_Update
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLRecovery_Status_Update_Request, callbackHandler)
    {
        var request = new saveFLRecovery_Status_UpdateRequest(saveFLRecovery_Status_Update_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRecovery_Status_Update/newFLRecovery_Status_Update";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FLRecovery_Status_Update_FLRecoveryStatusUpdate_saveFLRecovery_Status_Update.saveFLRecovery_Status_Update_ResponseHandler);
        return true;
    },
    
    saveFLRecovery_Status_Update_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLRecovery_Status_Update_ResponseObject = new saveFLRecovery_Status_UpdateResponse(responseData, "JSON");
            FLRecovery_Status_Update_FLRecoveryStatusUpdate_saveFLRecovery_Status_Update.callbackfunction(saveFLRecovery_Status_Update_ResponseObject, textStatus);
        }
        else {
            FLRecovery_Status_Update_FLRecoveryStatusUpdate_saveFLRecovery_Status_Update.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveFLRecovery_Status_UpdateRequestcontext();
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
        
        var request = new saveFLRecovery_Status_UpdateRequest();
        request.context = new saveFLRecovery_Status_UpdateRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRecovery_Status_Update/newFLRecovery_Status_Update";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
