var ServiceRequest_Service_Request_retrieveCertificateDispatch = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: retrieveCertificateDispatch
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCertificateDispatch_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCertificateDispatch_Request.context && retrieveCertificateDispatch_Request.context.hasOwnProperty('orgnId')) ? retrieveCertificateDispatch_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCertificateDispatch_Request.context && retrieveCertificateDispatch_Request.context.hasOwnProperty('locnId')) ? retrieveCertificateDispatch_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCertificateDispatch_Request.context && retrieveCertificateDispatch_Request.context.hasOwnProperty('userId')) ? retrieveCertificateDispatch_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCertificateDispatch_Request.context && retrieveCertificateDispatch_Request.context.hasOwnProperty('localeId')) ? retrieveCertificateDispatch_Request.context["localeId"] : null; //Unicode string(100)
        var param_fpoorgn_code = (retrieveCertificateDispatch_Request.context.Header && retrieveCertificateDispatch_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveCertificateDispatch_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        var param_process_status = (retrieveCertificateDispatch_Request.context.Header && retrieveCertificateDispatch_Request.context.Header.hasOwnProperty('process_status')) ? retrieveCertificateDispatch_Request.context.Header["process_status"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req_Dispatch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "&process_status=" + param_process_status + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ServiceRequest_Service_Request_retrieveCertificateDispatch.retrieveCertificateDispatch_ResponseHandler);
        return true;
    },
    
    retrieveCertificateDispatch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCertificateDispatch_ResponseObject = new retrieveCertificateDispatchResponse(responseData, "JSON");
            ServiceRequest_Service_Request_retrieveCertificateDispatch.callbackfunction(retrieveCertificateDispatch_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_retrieveCertificateDispatch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCertificateDispatchRequestcontext();
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
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        var param_process_status = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('process_status')) ? HeaderrequestObject["process_status"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req_Dispatch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "&process_status=" + param_process_status + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
