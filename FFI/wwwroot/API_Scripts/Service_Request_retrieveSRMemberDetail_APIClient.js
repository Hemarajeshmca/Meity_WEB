var ServiceRequest_Service_Request_retrieveSRMemberDetail = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Request
     Description: retrieveSRMemberDetail
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveSRMemberDetail_Request, callbackHandler)
    {
        var param_orgnid = (retrieveSRMemberDetail_Request.context && retrieveSRMemberDetail_Request.context.hasOwnProperty('orgnId')) ? retrieveSRMemberDetail_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveSRMemberDetail_Request.context && retrieveSRMemberDetail_Request.context.hasOwnProperty('locnId')) ? retrieveSRMemberDetail_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveSRMemberDetail_Request.context && retrieveSRMemberDetail_Request.context.hasOwnProperty('userId')) ? retrieveSRMemberDetail_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveSRMemberDetail_Request.context && retrieveSRMemberDetail_Request.context.hasOwnProperty('localeId')) ? retrieveSRMemberDetail_Request.context["localeId"] : null; //Unicode string(100)
        var param_fpomember_code = (retrieveSRMemberDetail_Request.context.Header && retrieveSRMemberDetail_Request.context.Header.hasOwnProperty('fpomember_code')) ? retrieveSRMemberDetail_Request.context.Header["fpomember_code"] : null; //Unicode string(50)
        var param_request_type = (retrieveSRMemberDetail_Request.context.Header && retrieveSRMemberDetail_Request.context.Header.hasOwnProperty('request_type')) ? retrieveSRMemberDetail_Request.context.Header["request_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpomember_code=" + param_fpomember_code + "&request_type=" + param_request_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ServiceRequest_Service_Request_retrieveSRMemberDetail.retrieveSRMemberDetail_ResponseHandler);
        return true;
    },
    
    retrieveSRMemberDetail_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveSRMemberDetail_ResponseObject = new retrieveSRMemberDetailResponse(responseData, "JSON");
            ServiceRequest_Service_Request_retrieveSRMemberDetail.callbackfunction(retrieveSRMemberDetail_ResponseObject, textStatus);
        }
        else {
            ServiceRequest_Service_Request_retrieveSRMemberDetail.callbackfunction(responseData, textStatus);
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
        var param_fpomember_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpomember_code')) ? HeaderrequestObject["fpomember_code"] : null; //Unicode string(50)
        var param_request_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('request_type')) ? HeaderrequestObject["request_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceRequest/service_req?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpomember_code=" + param_fpomember_code + "&request_type=" + param_request_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
