var FPORegistration_FPOReg_retrieveFPOReg = {
    /*
     Function to invoke API
     Notes:
     Resource: FPOReg
     Description: retrieveFPOReg
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFPOReg_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFPOReg_Request.context && retrieveFPOReg_Request.context.hasOwnProperty('orgnId')) ? retrieveFPOReg_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFPOReg_Request.context && retrieveFPOReg_Request.context.hasOwnProperty('locnId')) ? retrieveFPOReg_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFPOReg_Request.context && retrieveFPOReg_Request.context.hasOwnProperty('userId')) ? retrieveFPOReg_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFPOReg_Request.context && retrieveFPOReg_Request.context.hasOwnProperty('localeId')) ? retrieveFPOReg_Request.context["localeId"] : null; //Unicode string(100)
        var param_orgn_rowid = (retrieveFPOReg_Request.context.Header && retrieveFPOReg_Request.context.Header.hasOwnProperty('orgn_rowid')) ? retrieveFPOReg_Request.context.Header["orgn_rowid"] : null; //Integer(32)
        var param_orgn_code = (retrieveFPOReg_Request.context.Header && retrieveFPOReg_Request.context.Header.hasOwnProperty('orgn_code')) ? retrieveFPOReg_Request.context.Header["orgn_code"] : null; //Unicode string(50)
        var param_version_no = (retrieveFPOReg_Request.context.Header && retrieveFPOReg_Request.context.Header.hasOwnProperty('version_no')) ? retrieveFPOReg_Request.context.Header["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPORegistration/Fpo_reg_orgn?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&orgn_rowid=" + param_orgn_rowid + "&orgn_code=" + param_orgn_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FPORegistration_FPOReg_retrieveFPOReg.retrieveFPOReg_ResponseHandler);
        return true;
    },
    
    retrieveFPOReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFPOReg_ResponseObject = new retrieveFPORegResponse(responseData, "JSON");
            FPORegistration_FPOReg_retrieveFPOReg.callbackfunction(retrieveFPOReg_ResponseObject, textStatus);
        }
        else {
            FPORegistration_FPOReg_retrieveFPOReg.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFPORegRequestcontext();
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
        var param_orgn_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('orgn_rowid')) ? HeaderrequestObject["orgn_rowid"] : null; //Integer(32)
        var param_orgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('orgn_code')) ? HeaderrequestObject["orgn_code"] : null; //Unicode string(50)
        var param_version_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('version_no')) ? HeaderrequestObject["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPORegistration/Fpo_reg_orgn?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&orgn_rowid=" + param_orgn_rowid + "&orgn_code=" + param_orgn_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
