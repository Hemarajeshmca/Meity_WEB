var PAWHSFarmerLogin_PAWHS_FarmerMobileLogin_PAWHS_Farmerlogin = {
    /*
     Function to invoke API
     Notes:
     Resource: PAWHS_FarmerMobileLogin
     Description: PAWHS_Farmerlogin
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_Farmerlogin_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_Farmerlogin_Request.context && PAWHS_Farmerlogin_Request.context.hasOwnProperty('orgnId')) ? PAWHS_Farmerlogin_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_Farmerlogin_Request.context && PAWHS_Farmerlogin_Request.context.hasOwnProperty('locnId')) ? PAWHS_Farmerlogin_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_Farmerlogin_Request.context && PAWHS_Farmerlogin_Request.context.hasOwnProperty('userId')) ? PAWHS_Farmerlogin_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_Farmerlogin_Request.context && PAWHS_Farmerlogin_Request.context.hasOwnProperty('localeId')) ? PAWHS_Farmerlogin_Request.context["localeId"] : null; //Unicode string(100)
        var param_login_id = (PAWHS_Farmerlogin_Request.context.Header && PAWHS_Farmerlogin_Request.context.Header.hasOwnProperty('login_id')) ? PAWHS_Farmerlogin_Request.context.Header["login_id"] : null; //Unicode string(50)
        var param_user_pwd = (PAWHS_Farmerlogin_Request.context.Header && PAWHS_Farmerlogin_Request.context.Header.hasOwnProperty('user_pwd')) ? PAWHS_Farmerlogin_Request.context.Header["user_pwd"] : null; //Unicode string(-1)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSFarmerLogin/pawhs_farmerlogin?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&login_id=" + param_login_id + "&user_pwd=" + param_user_pwd + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, PAWHSFarmerLogin_PAWHS_FarmerMobileLogin_PAWHS_Farmerlogin.PAWHS_Farmerlogin_ResponseHandler);
        return true;
    },
    
    PAWHS_Farmerlogin_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_Farmerlogin_ResponseObject = new PAWHS_FarmerloginResponse(responseData, "JSON");
            PAWHSFarmerLogin_PAWHS_FarmerMobileLogin_PAWHS_Farmerlogin.callbackfunction(PAWHS_Farmerlogin_ResponseObject, textStatus);
        }
        else {
            PAWHSFarmerLogin_PAWHS_FarmerMobileLogin_PAWHS_Farmerlogin.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_FarmerloginRequestcontext();
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
        var param_login_id = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('login_id')) ? HeaderrequestObject["login_id"] : null; //Unicode string(50)
        var param_user_pwd = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('user_pwd')) ? HeaderrequestObject["user_pwd"] : null; //Unicode string(-1)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSFarmerLogin/pawhs_farmerlogin?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&login_id=" + param_login_id + "&user_pwd=" + param_user_pwd + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
