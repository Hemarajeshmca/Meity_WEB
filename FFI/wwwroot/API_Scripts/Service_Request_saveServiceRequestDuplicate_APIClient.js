var ServiceRequest_Service_Request_saveServiceRequestDuplicate = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: saveServiceRequestDuplicate
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveServiceRequestDuplicate_Request, callbackHandler)
    {
        var request = new saveServiceRequestDuplicateRequest(saveServiceRequestDuplicate_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newServiceRequestDuplicate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ServiceRequest_Service_Request_saveServiceRequestDuplicate.saveServiceRequestDuplicate_ResponseHandler);
        return true;
    },
    
    saveServiceRequestDuplicate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveServiceRequestDuplicate_ResponseObject = new saveServiceRequestDuplicateResponse(responseData, "JSON");
            ServiceRequest_Service_Request_saveServiceRequestDuplicate.callbackfunction(saveServiceRequestDuplicate_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_saveServiceRequestDuplicate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveServiceRequestDuplicateRequestcontext();
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
        
        var request = new saveServiceRequestDuplicateRequest();
        request.context = new saveServiceRequestDuplicateRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newServiceRequestDuplicate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
