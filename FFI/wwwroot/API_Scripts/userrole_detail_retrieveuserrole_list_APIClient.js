var UserRole_userrole_detail_retrieveuserrole_list = {
    /*
     Function to invoke API
     Notes:
     Resource: userrole_detail
     Description: Retrieve  User Role list
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveUserRoleList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveUserRoleList_Request.context && retrieveUserRoleList_Request.context.hasOwnProperty('orgnId')) ? retrieveUserRoleList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveUserRoleList_Request.context && retrieveUserRoleList_Request.context.hasOwnProperty('locnId')) ? retrieveUserRoleList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveUserRoleList_Request.context && retrieveUserRoleList_Request.context.hasOwnProperty('userId')) ? retrieveUserRoleList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveUserRoleList_Request.context && retrieveUserRoleList_Request.context.hasOwnProperty('localeId')) ? retrieveUserRoleList_Request.context["localeId"] : null; //Unicode string(100)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/UserRole/alluserrole_list?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, UserRole_userrole_detail_retrieveuserrole_list.retrieveuserrole_list_ResponseHandler);
        return true;
    },
    
    retrieveuserrole_list_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveUserRoleList_ResponseObject = new retrieveUserRoleListResponse(responseData, "JSON");
            UserRole_userrole_detail_retrieveuserrole_list.callbackfunction(retrieveUserRoleList_ResponseObject, textStatus);
        }
        else {
            UserRole_userrole_detail_retrieveuserrole_list.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveUserRoleListRequestcontext();
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
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/UserRole/alluserrole_list?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
