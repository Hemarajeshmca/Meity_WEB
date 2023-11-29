var ServiceRequest_Service_Request_saveServiceRequestName = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: saveServiceRequestName
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveServiceRequestName_Request, callbackHandler)
    {
        var request = new saveServiceRequestNameRequest(saveServiceRequestName_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newservicerequestname";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ServiceRequest_Service_Request_saveServiceRequestName.saveServiceRequestName_ResponseHandler);
        return true;
    },
    
    saveServiceRequestName_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveServiceRequestName_ResponseObject = new saveServiceRequestNameResponse(responseData, "JSON");
            ServiceRequest_Service_Request_saveServiceRequestName.callbackfunction(saveServiceRequestName_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_saveServiceRequestName.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveServiceRequestNameRequestcontext();
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
        
        var request = new saveServiceRequestNameRequest();
        request.context = new saveServiceRequestNameRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newservicerequestname";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
