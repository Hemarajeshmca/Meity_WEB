var ServiceMaster_Service_Master_PAWHS_saveServiceMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Master
     Description: PAWHS_saveServiceMaster
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveServiceMaster_Request, callbackHandler)
    {
        var request = new PAWHS_saveServiceMasterRequest(PAWHS_saveServiceMaster_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceMaster/pawhs_new_service_master";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ServiceMaster_Service_Master_PAWHS_saveServiceMaster.PAWHS_saveServiceMaster_ResponseHandler);
        return true;
    },
    
    PAWHS_saveServiceMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveServiceMaster_ResponseObject = new PAWHS_saveServiceMasterResponse(responseData, "JSON");
            ServiceMaster_Service_Master_PAWHS_saveServiceMaster.callbackfunction(PAWHS_saveServiceMaster_ResponseObject, textStatus);
        }
        else {
            ServiceMaster_Service_Master_PAWHS_saveServiceMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveServiceMasterRequestcontext();
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
        
        var request = new PAWHS_saveServiceMasterRequest();
        request.context = new PAWHS_saveServiceMasterRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceMaster/pawhs_new_service_master";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
