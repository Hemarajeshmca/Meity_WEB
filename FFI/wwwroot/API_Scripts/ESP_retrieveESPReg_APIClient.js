var ESPRegistration_ESP_retrieveESPReg = {
    /*
     Function to invoke API
     Notes:
     Resource: ESP
     Description: retrieveFPORegList
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveESPReg_Request, callbackHandler)
    {
        var param_orgnid = (retrieveESPReg_Request.context && retrieveESPReg_Request.context.hasOwnProperty('orgnId')) ? retrieveESPReg_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveESPReg_Request.context && retrieveESPReg_Request.context.hasOwnProperty('locnId')) ? retrieveESPReg_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveESPReg_Request.context && retrieveESPReg_Request.context.hasOwnProperty('userId')) ? retrieveESPReg_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveESPReg_Request.context && retrieveESPReg_Request.context.hasOwnProperty('localeId')) ? retrieveESPReg_Request.context["localeId"] : null; //Unicode string(100)
        var param_orgn_rowid = (retrieveESPReg_Request.context.Header && retrieveESPReg_Request.context.Header.hasOwnProperty('orgn_rowid')) ? retrieveESPReg_Request.context.Header["orgn_rowid"] : null; //Integer(32)
        var param_orgn_code = (retrieveESPReg_Request.context.Header && retrieveESPReg_Request.context.Header.hasOwnProperty('orgn_code')) ? retrieveESPReg_Request.context.Header["orgn_code"] : null; //Unicode string(50)
        var param_version_no = (retrieveESPReg_Request.context.Header && retrieveESPReg_Request.context.Header.hasOwnProperty('version_no')) ? retrieveESPReg_Request.context.Header["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ESPRegistration/ESP_reg_orgn?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&orgn_rowid=" + param_orgn_rowid + "&orgn_code=" + param_orgn_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ESPRegistration_ESP_retrieveESPReg.retrieveESPReg_ResponseHandler);
        return true;
    },
    
    retrieveESPReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveESPReg_ResponseObject = new retrieveESPRegResponse(responseData, "JSON");
            ESPRegistration_ESP_retrieveESPReg.callbackfunction(retrieveESPReg_ResponseObject, textStatus);
        }
        else {
            ESPRegistration_ESP_retrieveESPReg.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveESPRegRequestcontext();
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
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ESPRegistration/ESP_reg_orgn?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&orgn_rowid=" + param_orgn_rowid + "&orgn_code=" + param_orgn_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
