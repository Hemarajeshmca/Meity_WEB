var ServiceRequest_Service_Request_saveServiceRequestAddress = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: saveServiceRequestAddress
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveServiceRequestAddress_Request, callbackHandler)
    {
        var request = new saveServiceRequestAddressRequest(saveServiceRequestAddress_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newServiceRequestAddress";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ServiceRequest_Service_Request_saveServiceRequestAddress.saveServiceRequestAddress_ResponseHandler);
        return true;
    },
    
    saveServiceRequestAddress_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveServiceRequestAddress_ResponseObject = new saveServiceRequestAddressResponse(responseData, "JSON");
            ServiceRequest_Service_Request_saveServiceRequestAddress.callbackfunction(saveServiceRequestAddress_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_saveServiceRequestAddress.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveServiceRequestAddressRequestcontext();
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
        
        var request = new saveServiceRequestAddressRequest();
        request.context = new saveServiceRequestAddressRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newServiceRequestAddress";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
