var Register_FIS_Register_retrieveObjectionRegister = {
    /*
     Function to invoke API
     Notes:
     Resource: FIS_Register
     Description: retrieveObjectionRegister
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveObjectionRegister_Request, callbackHandler)
    {
        var param_orgnid = (retrieveObjectionRegister_Request.context && retrieveObjectionRegister_Request.context.hasOwnProperty('orgnId')) ? retrieveObjectionRegister_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveObjectionRegister_Request.context && retrieveObjectionRegister_Request.context.hasOwnProperty('locnId')) ? retrieveObjectionRegister_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveObjectionRegister_Request.context && retrieveObjectionRegister_Request.context.hasOwnProperty('userId')) ? retrieveObjectionRegister_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveObjectionRegister_Request.context && retrieveObjectionRegister_Request.context.hasOwnProperty('localeId')) ? retrieveObjectionRegister_Request.context["localeId"] : null; //Unicode string(100)
        var param_register_rowid = (retrieveObjectionRegister_Request.context.Header && retrieveObjectionRegister_Request.context.Header.hasOwnProperty('register_rowid')) ? retrieveObjectionRegister_Request.context.Header["register_rowid"] : null; //Integer(16)
        var param_fpoorgn_code = (retrieveObjectionRegister_Request.context.Header && retrieveObjectionRegister_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveObjectionRegister_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Register/objection_register?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&register_rowid=" + param_register_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Register_FIS_Register_retrieveObjectionRegister.retrieveObjectionRegister_ResponseHandler);
        return true;
    },
    
    retrieveObjectionRegister_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveObjectionRegister_ResponseObject = new retrieveObjectionRegisterResponse(responseData, "JSON");
            Register_FIS_Register_retrieveObjectionRegister.callbackfunction(retrieveObjectionRegister_ResponseObject, textStatus);
        }
        else {
            Register_FIS_Register_retrieveObjectionRegister.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveObjectionRegisterRequestcontext();
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
        var param_register_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('register_rowid')) ? HeaderrequestObject["register_rowid"] : null; //Integer(16)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Register/objection_register?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&register_rowid=" + param_register_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
