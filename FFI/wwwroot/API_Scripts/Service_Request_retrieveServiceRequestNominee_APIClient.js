var ServiceRequest_Service_Request_retrieveServiceRequestNominee = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: retrieveServiceRequestNominee
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveServiceRequestNominee_Request, callbackHandler)
    {
        var param_orgnid = (retrieveServiceRequestNominee_Request.context && retrieveServiceRequestNominee_Request.context.hasOwnProperty('orgnId')) ? retrieveServiceRequestNominee_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveServiceRequestNominee_Request.context && retrieveServiceRequestNominee_Request.context.hasOwnProperty('locnId')) ? retrieveServiceRequestNominee_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveServiceRequestNominee_Request.context && retrieveServiceRequestNominee_Request.context.hasOwnProperty('userId')) ? retrieveServiceRequestNominee_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveServiceRequestNominee_Request.context && retrieveServiceRequestNominee_Request.context.hasOwnProperty('localeId')) ? retrieveServiceRequestNominee_Request.context["localeId"] : null; //Unicode string(100)
        var param_servicereq_rowid = (retrieveServiceRequestNominee_Request.context.Header && retrieveServiceRequestNominee_Request.context.Header.hasOwnProperty('servicereq_rowid')) ? retrieveServiceRequestNominee_Request.context.Header["servicereq_rowid"] : null; //Integer(32)
        var param_fpomember_code = (retrieveServiceRequestNominee_Request.context.Header && retrieveServiceRequestNominee_Request.context.Header.hasOwnProperty('fpomember_code')) ? retrieveServiceRequestNominee_Request.context.Header["fpomember_code"] : null; //Unicode string(50)
        var param_servicereq_no = (retrieveServiceRequestNominee_Request.context.Header && retrieveServiceRequestNominee_Request.context.Header.hasOwnProperty('servicereq_no')) ? retrieveServiceRequestNominee_Request.context.Header["servicereq_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req_nominee?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&servicereq_rowid=" + param_servicereq_rowid + "&fpomember_code=" + param_fpomember_code + "&servicereq_no=" + param_servicereq_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ServiceRequest_Service_Request_retrieveServiceRequestNominee.retrieveServiceRequestNominee_ResponseHandler);
        return true;
    },
    
    retrieveServiceRequestNominee_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveServiceRequestNominee_ResponseObject = new retrieveServiceRequestNomineeResponse(responseData, "JSON");
            ServiceRequest_Service_Request_retrieveServiceRequestNominee.callbackfunction(retrieveServiceRequestNominee_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_retrieveServiceRequestNominee.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveServiceRequestNomineeRequestcontext();
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
        var param_servicereq_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('servicereq_rowid')) ? HeaderrequestObject["servicereq_rowid"] : null; //Integer(32)
        var param_fpomember_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpomember_code')) ? HeaderrequestObject["fpomember_code"] : null; //Unicode string(50)
        var param_servicereq_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('servicereq_no')) ? HeaderrequestObject["servicereq_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req_nominee?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&servicereq_rowid=" + param_servicereq_rowid + "&fpomember_code=" + param_fpomember_code + "&servicereq_no=" + param_servicereq_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
