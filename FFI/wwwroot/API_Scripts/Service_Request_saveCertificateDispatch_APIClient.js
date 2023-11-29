var ServiceRequest_Service_Request_saveCertificateDispatch = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: saveCertificateDispatch
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCertificateDispatch_Request, callbackHandler)
    {
        var request = new saveCertificateDispatchRequest(saveCertificateDispatch_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newCertificateDispatch";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ServiceRequest_Service_Request_saveCertificateDispatch.saveCertificateDispatch_ResponseHandler);
        return true;
    },
    
    saveCertificateDispatch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCertificateDispatch_ResponseObject = new saveCertificateDispatchResponse(responseData, "JSON");
            ServiceRequest_Service_Request_saveCertificateDispatch.callbackfunction(saveCertificateDispatch_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_saveCertificateDispatch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveCertificateDispatchRequestcontext();
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
        
        var request = new saveCertificateDispatchRequest();
        request.context = new saveCertificateDispatchRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/newCertificateDispatch";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
