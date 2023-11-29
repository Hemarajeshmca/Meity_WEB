var RoleActivity_Role_Activity_retrieveroleactivity = {
    /*
     Function to invoke API
     Notes:
     Resource: Role_Activity
     Description: Retrieve Role Activity
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveRoleActivity_Request, callbackHandler)
    {
        var param_orgnid = (retrieveRoleActivity_Request.context && retrieveRoleActivity_Request.context.hasOwnProperty('orgnId')) ? retrieveRoleActivity_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveRoleActivity_Request.context && retrieveRoleActivity_Request.context.hasOwnProperty('locnId')) ? retrieveRoleActivity_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveRoleActivity_Request.context && retrieveRoleActivity_Request.context.hasOwnProperty('userId')) ? retrieveRoleActivity_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveRoleActivity_Request.context && retrieveRoleActivity_Request.context.hasOwnProperty('localeId')) ? retrieveRoleActivity_Request.context["localeId"] : null; //Unicode string(100)
        var param_role_rowid = (retrieveRoleActivity_Request.context.Header && retrieveRoleActivity_Request.context.Header.hasOwnProperty('role_rowid')) ? retrieveRoleActivity_Request.context.Header["role_rowid"] : null; //Integer(32)
        var param_orgn_level = (retrieveRoleActivity_Request.context.Header && retrieveRoleActivity_Request.context.Header.hasOwnProperty('orgn_level')) ? retrieveRoleActivity_Request.context.Header["orgn_level"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RoleActivity/roleactivity?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&role_rowid=" + param_role_rowid + "&orgn_level=" + param_orgn_level + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, RoleActivity_Role_Activity_retrieveroleactivity.retrieveroleactivity_ResponseHandler);
        return true;
    },
    
    retrieveroleactivity_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveRoleActivity_ResponseObject = new retrieveRoleActivityResponse(responseData, "JSON");
            RoleActivity_Role_Activity_retrieveroleactivity.callbackfunction(retrieveRoleActivity_ResponseObject, textStatus);
        }
        else {
            RoleActivity_Role_Activity_retrieveroleactivity.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveRoleActivityRequestcontext();
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
        var param_role_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('role_rowid')) ? HeaderrequestObject["role_rowid"] : null; //Integer(32)
        var param_orgn_level = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('orgn_level')) ? HeaderrequestObject["orgn_level"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RoleActivity/roleactivity?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&role_rowid=" + param_role_rowid + "&orgn_level=" + param_orgn_level + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
