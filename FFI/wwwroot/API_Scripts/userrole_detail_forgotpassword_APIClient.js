var UserRole_userrole_detail_forgotpassword = {
    /*
     Function to invoke API
     Notes:
     Resource: userrole_detail
     Description: Forgot Password detail
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (forgotPassword_Request, callbackHandler)
    {
        var request = new forgotPasswordRequest(forgotPassword_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/UserRole/forgotpassword";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, UserRole_userrole_detail_forgotpassword.forgotpassword_ResponseHandler);
        return true;
    },
    
    forgotpassword_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var forgotPassword_ResponseObject = new forgotPasswordResponse(responseData, "JSON");
            UserRole_userrole_detail_forgotpassword.callbackfunction(forgotPassword_ResponseObject, textStatus);
        }
        else {
            UserRole_userrole_detail_forgotpassword.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new forgotPasswordRequestcontext();
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
        
        var request = new forgotPasswordRequest();
        request.context = new forgotPasswordRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/UserRole/forgotpassword";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
