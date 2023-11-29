var GSTMaster_GST_Master_saveGSTMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: GST_Master
     Description: saveGSTMaster
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveGSTMaster_Request, callbackHandler)
    {
        var request = new saveGSTMasterRequest(saveGSTMaster_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/GSTMaster/icd_gst_master_saveGST_APIClient";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, GSTMaster_GST_Master_saveGSTMaster.saveGSTMaster_ResponseHandler);
        return true;
    },
    
    saveGSTMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveGSTMaster_ResponseObject = new saveGSTMasterResponse(responseData, "JSON");
            GSTMaster_GST_Master_saveGSTMaster.callbackfunction(saveGSTMaster_ResponseObject, textStatus);
        }
        else {
            GSTMaster_GST_Master_saveGSTMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveGSTMasterRequestcontext();
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
        
        var request = new saveGSTMasterRequest();
        request.context = new saveGSTMasterRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/GSTMaster/icd_gst_master_saveGST_APIClient";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
