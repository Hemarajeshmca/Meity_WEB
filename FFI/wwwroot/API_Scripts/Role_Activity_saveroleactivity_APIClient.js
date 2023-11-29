var RoleActivity_Role_Activity_saveroleactivity = {
    /*
     Function to invoke API
     Notes:
     Resource: Role_Activity
     Description: Save Role Activity
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveRoleActivity_Request, callbackHandler)
    {
        var request = new saveRoleActivityRequest(saveRoleActivity_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RoleActivity/newroleactivity";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, RoleActivity_Role_Activity_saveroleactivity.saveroleactivity_ResponseHandler);
        return true;
    },
    
    saveroleactivity_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveRoleActivity_ResponseObject = new saveRoleActivityResponse(responseData, "JSON");
            RoleActivity_Role_Activity_saveroleactivity.callbackfunction(saveRoleActivity_ResponseObject, textStatus);
        }
        else {
            RoleActivity_Role_Activity_saveroleactivity.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveRoleActivityRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Header = HeaderrequestObject;
        contextrequestObject.Detail = DetailrequestObjectArray;
        
        var request = new saveRoleActivityRequest();
        request.context = new saveRoleActivityRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RoleActivity/newroleactivity";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
