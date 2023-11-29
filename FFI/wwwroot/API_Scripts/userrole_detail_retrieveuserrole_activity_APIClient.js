var UserRole_userrole_detail_retrieveuserrole_activity = {
    /*
     Function to invoke API
     Notes:
     Resource: userrole_detail
     Description: Retrieve User Role Activity Details
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retriveUserRoleActivity_Request, callbackHandler)
    {
        var param_orgnid = (retriveUserRoleActivity_Request.context && retriveUserRoleActivity_Request.context.hasOwnProperty('orgnId')) ? retriveUserRoleActivity_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnd = (retriveUserRoleActivity_Request.context && retriveUserRoleActivity_Request.context.hasOwnProperty('locnId')) ? retriveUserRoleActivity_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retriveUserRoleActivity_Request.context && retriveUserRoleActivity_Request.context.hasOwnProperty('userId')) ? retriveUserRoleActivity_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retriveUserRoleActivity_Request.context && retriveUserRoleActivity_Request.context.hasOwnProperty('localeId')) ? retriveUserRoleActivity_Request.context["localeId"] : null; //Unicode string(100)
        var param_user_id = (retriveUserRoleActivity_Request.context.Header && retriveUserRoleActivity_Request.context.Header.hasOwnProperty('user_code')) ? retriveUserRoleActivity_Request.context.Header["user_code"] : null; //Unicode string(128)
        var param_role_code = (retriveUserRoleActivity_Request.context.Header && retriveUserRoleActivity_Request.context.Header.hasOwnProperty('role_code')) ? retriveUserRoleActivity_Request.context.Header["role_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/UserRole/userrole_activity?org=" + param_orgnid + "&locn=" + param_locnd + "&user=" + param_userid + "&lang=" + param_localeid + "&user_id=" + param_user_id + "&role_code=" + param_role_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, UserRole_userrole_detail_retrieveuserrole_activity.retrieveuserrole_activity_ResponseHandler);
        return true;
    },
    
    retrieveuserrole_activity_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retriveUserRoleActivity_ResponseObject = new retriveUserRoleActivityResponse(responseData, "JSON");
            UserRole_userrole_detail_retrieveuserrole_activity.callbackfunction(retriveUserRoleActivity_ResponseObject, textStatus);
        }
        else {
            UserRole_userrole_detail_retrieveuserrole_activity.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retriveUserRoleActivityRequestcontext();
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
        var param_locnd = (contextrequestObject && contextrequestObject.hasOwnProperty('locnId')) ? contextrequestObject["locnId"] : null; //Unicode string(100)
        var param_userid = (contextrequestObject && contextrequestObject.hasOwnProperty('userId')) ? contextrequestObject["userId"] : null; //Unicode string(128)
        var param_localeid = (contextrequestObject && contextrequestObject.hasOwnProperty('localeId')) ? contextrequestObject["localeId"] : null; //Unicode string(100)
        var param_user_id = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('user_code')) ? HeaderrequestObject["user_code"] : null; //Unicode string(128)
        var param_role_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('role_code')) ? HeaderrequestObject["role_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/UserRole/userrole_activity?org=" + param_orgnid + "&locn=" + param_locnd + "&user=" + param_userid + "&lang=" + param_localeid + "&user_id=" + param_user_id + "&role_code=" + param_role_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
