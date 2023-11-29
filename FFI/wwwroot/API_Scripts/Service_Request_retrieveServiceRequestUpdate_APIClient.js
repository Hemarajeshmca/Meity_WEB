var ServiceRequest_Service_Request_retrieveServiceRequestUpdate = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: retrieveServiceRequestUpdate
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveServiceRequestUpdate_Request, callbackHandler)
    {
        var param_orgnid = (retrieveServiceRequestUpdate_Request.context && retrieveServiceRequestUpdate_Request.context.hasOwnProperty('orgnId')) ? retrieveServiceRequestUpdate_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveServiceRequestUpdate_Request.context && retrieveServiceRequestUpdate_Request.context.hasOwnProperty('locnId')) ? retrieveServiceRequestUpdate_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveServiceRequestUpdate_Request.context && retrieveServiceRequestUpdate_Request.context.hasOwnProperty('userId')) ? retrieveServiceRequestUpdate_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveServiceRequestUpdate_Request.context && retrieveServiceRequestUpdate_Request.context.hasOwnProperty('localeId')) ? retrieveServiceRequestUpdate_Request.context["localeId"] : null; //Unicode string(100)
        var param_fpoorgn_code = (retrieveServiceRequestUpdate_Request.context.Header && retrieveServiceRequestUpdate_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveServiceRequestUpdate_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        var param_process_code = (retrieveServiceRequestUpdate_Request.context.Header && retrieveServiceRequestUpdate_Request.context.Header.hasOwnProperty('process_status')) ? retrieveServiceRequestUpdate_Request.context.Header["process_status"] : null; //Unicode string(50)
        var param_Approval_date = (retrieveServiceRequestUpdate_Request.context.Header && retrieveServiceRequestUpdate_Request.context.Header.hasOwnProperty('Approval_date')) ? retrieveServiceRequestUpdate_Request.context.Header["Approval_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req_update?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "&process_code=" + param_process_code + "&Approval_date=" + param_Approval_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ServiceRequest_Service_Request_retrieveServiceRequestUpdate.retrieveServiceRequestUpdate_ResponseHandler);
        return true;
    },
    
    retrieveServiceRequestUpdate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveServiceRequestUpdate_ResponseObject = new retrieveServiceRequestUpdateResponse(responseData, "JSON");
            ServiceRequest_Service_Request_retrieveServiceRequestUpdate.callbackfunction(retrieveServiceRequestUpdate_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_retrieveServiceRequestUpdate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveServiceRequestUpdateRequestcontext();
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
        var param_process_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('process_status')) ? HeaderrequestObject["process_status"] : null; //Unicode string(50)
        var param_Approval_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('Approval_date')) ? HeaderrequestObject["Approval_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req_update?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "&process_code=" + param_process_code + "&Approval_date=" + param_Approval_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
