var Mobile_Mobile_API_UserValidation = {
    /*
     Function to invoke API
     Notes:
     Resource: Mobile_API
     Description: UserValidation
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (UserValidation_Request, callbackHandler)
    {
        var param_orgnid = (UserValidation_Request.context && UserValidation_Request.context.hasOwnProperty('orgnId')) ? UserValidation_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (UserValidation_Request.context && UserValidation_Request.context.hasOwnProperty('locnId')) ? UserValidation_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (UserValidation_Request.context && UserValidation_Request.context.hasOwnProperty('userId')) ? UserValidation_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (UserValidation_Request.context && UserValidation_Request.context.hasOwnProperty('localeId')) ? UserValidation_Request.context["localeId"] : null; //Unicode string(100)
        var param_user_code = (UserValidation_Request.context.Header && UserValidation_Request.context.Header.hasOwnProperty('user_code')) ? UserValidation_Request.context.Header["user_code"] : null; //Unicode string(128)
        var param_user_pwd = (UserValidation_Request.context.Header && UserValidation_Request.context.Header.hasOwnProperty('user_pwd')) ? UserValidation_Request.context.Header["user_pwd"] : null; //Unicode string(-1)
        var param_mobile_no = (UserValidation_Request.context.Header && UserValidation_Request.context.Header.hasOwnProperty('mobile_no')) ? UserValidation_Request.context.Header["mobile_no"] : null; //Unicode string(256)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Mobile/user_validation?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&user_code=" + param_user_code + "&user_pwd=" + param_user_pwd + "&mobile_no=" + param_mobile_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Mobile_Mobile_API_UserValidation.UserValidation_ResponseHandler);
        return true;
    },
    
    UserValidation_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var UserValidation_ResponseObject = new UserValidationResponse(responseData, "JSON");
            Mobile_Mobile_API_UserValidation.callbackfunction(UserValidation_ResponseObject, textStatus);
        }
        else {
            Mobile_Mobile_API_UserValidation.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new UserValidationRequestcontext();
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
        var param_user_pwd = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('user_pwd')) ? HeaderrequestObject["user_pwd"] : null; //Unicode string(-1)
        var param_mobile_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('mobile_no')) ? HeaderrequestObject["mobile_no"] : null; //Unicode string(256)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Mobile/user_validation?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&user_code=" + param_user_code + "&user_pwd=" + param_user_pwd + "&mobile_no=" + param_mobile_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
