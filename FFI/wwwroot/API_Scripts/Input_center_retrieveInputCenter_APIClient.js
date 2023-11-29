var InputCenter_Input_center_retrieveInputCenter = {
    /*
     Function to invoke API
     Notes:
     Resource: Input_center
     Description: retrieveInputCenter
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveInputCenter_Request, callbackHandler)
    {
        var param_orgnid = (retrieveInputCenter_Request.context && retrieveInputCenter_Request.context.hasOwnProperty('orgnId')) ? retrieveInputCenter_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveInputCenter_Request.context && retrieveInputCenter_Request.context.hasOwnProperty('locnId')) ? retrieveInputCenter_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveInputCenter_Request.context && retrieveInputCenter_Request.context.hasOwnProperty('userId')) ? retrieveInputCenter_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveInputCenter_Request.context && retrieveInputCenter_Request.context.hasOwnProperty('localeId')) ? retrieveInputCenter_Request.context["localeId"] : null; //Unicode string(100)
        var param_ic_rowid = (retrieveInputCenter_Request.context.Header && retrieveInputCenter_Request.context.Header.hasOwnProperty('ic_rowid')) ? retrieveInputCenter_Request.context.Header["ic_rowid"] : null; //Integer(32)
        var param_orgn_code = (retrieveInputCenter_Request.context.Header && retrieveInputCenter_Request.context.Header.hasOwnProperty('orgn_code')) ? retrieveInputCenter_Request.context.Header["orgn_code"] : null; //Unicode string(50)
        var param_version_no = (retrieveInputCenter_Request.context.Header && retrieveInputCenter_Request.context.Header.hasOwnProperty('version_no')) ? retrieveInputCenter_Request.context.Header["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenter/inputcenter?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&ic_rowid=" + param_ic_rowid + "&orgn_code=" + param_orgn_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, InputCenter_Input_center_retrieveInputCenter.retrieveInputCenter_ResponseHandler);
        return true;
    },
    
    retrieveInputCenter_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveInputCenter_ResponseObject = new retrieveInputCenterResponse(responseData, "JSON");
            InputCenter_Input_center_retrieveInputCenter.callbackfunction(retrieveInputCenter_ResponseObject, textStatus);
        }
        else {
            InputCenter_Input_center_retrieveInputCenter.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveInputCenterRequestcontext();
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
        var param_ic_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('ic_rowid')) ? HeaderrequestObject["ic_rowid"] : null; //Integer(32)
        var param_orgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('orgn_code')) ? HeaderrequestObject["orgn_code"] : null; //Unicode string(50)
        var param_version_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('version_no')) ? HeaderrequestObject["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenter/inputcenter?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&ic_rowid=" + param_ic_rowid + "&orgn_code=" + param_orgn_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
