var UserRole_userrole_detail_retrieveuserrole = {
    /*
     Function to invoke API
     Notes:
     Resource: userrole_detail
     Description: Retrieve  the user role detail
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveUserRole_Request, callbackHandler)
    {
        var param_orgnid = (retrieveUserRole_Request.context && retrieveUserRole_Request.context.hasOwnProperty('orgnId')) ? retrieveUserRole_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveUserRole_Request.context && retrieveUserRole_Request.context.hasOwnProperty('locnId')) ? retrieveUserRole_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveUserRole_Request.context && retrieveUserRole_Request.context.hasOwnProperty('userId')) ? retrieveUserRole_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveUserRole_Request.context && retrieveUserRole_Request.context.hasOwnProperty('localeId')) ? retrieveUserRole_Request.context["localeId"] : null; //Unicode string(100)
        var param_user_code = (retrieveUserRole_Request.context.Header && retrieveUserRole_Request.context.Header.hasOwnProperty('user_code')) ? retrieveUserRole_Request.context.Header["user_code"] : null; //Unicode string(128)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/UserRole/userrole?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&user_code=" + param_user_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, UserRole_userrole_detail_retrieveuserrole.retrieveuserrole_ResponseHandler);
        return true;
    },
    
    retrieveuserrole_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveUserRole_ResponseObject = new retrieveUserRoleResponse(responseData, "JSON");
            UserRole_userrole_detail_retrieveuserrole.callbackfunction(retrieveUserRole_ResponseObject, textStatus);
        }
        else {
            UserRole_userrole_detail_retrieveuserrole.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveUserRoleRequestcontext();
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
        var param_user_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('user_code')) ? HeaderrequestObject["user_code"] : null; //Unicode string(128)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/UserRole/userrole?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&user_code=" + param_user_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
