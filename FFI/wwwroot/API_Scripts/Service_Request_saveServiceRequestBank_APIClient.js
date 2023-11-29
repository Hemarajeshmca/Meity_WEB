var ServiceRequest_Service_Request_saveServiceRequestBank = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: saveServiceRequestBank
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveServiceRequestBank_Request, callbackHandler)
    {
        var request = new saveServiceRequestBankRequest(saveServiceRequestBank_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newServiceRequestBank";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ServiceRequest_Service_Request_saveServiceRequestBank.saveServiceRequestBank_ResponseHandler);
        return true;
    },
    
    saveServiceRequestBank_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveServiceRequestBank_ResponseObject = new saveServiceRequestBankResponse(responseData, "JSON");
            ServiceRequest_Service_Request_saveServiceRequestBank.callbackfunction(saveServiceRequestBank_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_saveServiceRequestBank.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveServiceRequestBankRequestcontext();
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
        
        var request = new saveServiceRequestBankRequest();
        request.context = new saveServiceRequestBankRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newServiceRequestBank";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
