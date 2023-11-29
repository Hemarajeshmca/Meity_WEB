var ServiceRequest_Service_Request_retrieveServiceRequestName = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: retrieveServiceRequestName
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveServiceRequestName_Request, callbackHandler)
    {
        var param_orgnid = (retrieveServiceRequestName_Request.context && retrieveServiceRequestName_Request.context.hasOwnProperty('orgnId')) ? retrieveServiceRequestName_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveServiceRequestName_Request.context && retrieveServiceRequestName_Request.context.hasOwnProperty('locnId')) ? retrieveServiceRequestName_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveServiceRequestName_Request.context && retrieveServiceRequestName_Request.context.hasOwnProperty('userId')) ? retrieveServiceRequestName_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveServiceRequestName_Request.context && retrieveServiceRequestName_Request.context.hasOwnProperty('localeId')) ? retrieveServiceRequestName_Request.context["localeId"] : null; //Unicode string(100)
        var param_servicereq_rowid = (retrieveServiceRequestName_Request.context.Header && retrieveServiceRequestName_Request.context.Header.hasOwnProperty('servicereq_rowid')) ? retrieveServiceRequestName_Request.context.Header["servicereq_rowid"] : null; //Integer(32)
        var param_fpomember_code = (retrieveServiceRequestName_Request.context.Header && retrieveServiceRequestName_Request.context.Header.hasOwnProperty('fpomember_code')) ? retrieveServiceRequestName_Request.context.Header["fpomember_code"] : null; //Unicode string(50)
        var param_servicereq_no = (retrieveServiceRequestName_Request.context.Header && retrieveServiceRequestName_Request.context.Header.hasOwnProperty('servicereq_no')) ? retrieveServiceRequestName_Request.context.Header["servicereq_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req_name?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&servicereq_rowid=" + param_servicereq_rowid + "&fpomember_code=" + param_fpomember_code + "&servicereq_no=" + param_servicereq_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ServiceRequest_Service_Request_retrieveServiceRequestName.retrieveServiceRequestName_ResponseHandler);
        return true;
    },
    
    retrieveServiceRequestName_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveServiceRequestName_ResponseObject = new retrieveServiceRequestNameResponse(responseData, "JSON");
            ServiceRequest_Service_Request_retrieveServiceRequestName.callbackfunction(retrieveServiceRequestName_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_retrieveServiceRequestName.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveServiceRequestNameRequestcontext();
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
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req_name?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&servicereq_rowid=" + param_servicereq_rowid + "&fpomember_code=" + param_fpomember_code + "&servicereq_no=" + param_servicereq_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
