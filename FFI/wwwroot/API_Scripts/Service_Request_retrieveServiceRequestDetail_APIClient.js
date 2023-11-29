var ServiceRequest_Service_Request_retrieveServiceRequestDetail = {
    /*
     * Resource: Service_Request
     * Description: retrieveServiceRequestDetail
     * Http verb: GET
     * Request format: NOT APPLICABLE
     * Response format: JSON
     * Requires authorization: No
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, callbackHandler)
    {
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveSRMemberDetailRequestcontext();
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
        var param_fpomember_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpomember_code')) ? HeaderrequestObject["fpomember_code"] : null; //Unicode string(100)
        var param_request_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('request_type')) ? HeaderrequestObject["request_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpomember_code=" + param_fpomember_code + "&request_type=" + param_request_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
