var ProcessShareApplication_ProcessShareApp_retrieveProcessShareApp = {
    /*
     Function to invoke API
     Notes:
     Resource: ProcessShareApp
     Description: retrieveProcessShareApp
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveProcessShareApp_Request, callbackHandler)
    {
        var param_orgnid = (retrieveProcessShareApp_Request.context && retrieveProcessShareApp_Request.context.hasOwnProperty('orgnId')) ? retrieveProcessShareApp_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveProcessShareApp_Request.context && retrieveProcessShareApp_Request.context.hasOwnProperty('locnId')) ? retrieveProcessShareApp_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveProcessShareApp_Request.context && retrieveProcessShareApp_Request.context.hasOwnProperty('userId')) ? retrieveProcessShareApp_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveProcessShareApp_Request.context && retrieveProcessShareApp_Request.context.hasOwnProperty('localeId')) ? retrieveProcessShareApp_Request.context["localeId"] : null; //Unicode string(100)
        var param_shareapp_rowid = (retrieveProcessShareApp_Request.context.Header && retrieveProcessShareApp_Request.context.Header.hasOwnProperty('shareapp_rowid')) ? retrieveProcessShareApp_Request.context.Header["shareapp_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveProcessShareApp_Request.context.Header && retrieveProcessShareApp_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveProcessShareApp_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProcessShareApplication/process_share?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&shareapp_rowid=" + param_shareapp_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ProcessShareApplication_ProcessShareApp_retrieveProcessShareApp.retrieveProcessShareApp_ResponseHandler);
        return true;
    },
    
    retrieveProcessShareApp_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveProcessShareApp_ResponseObject = new retrieveProcessShareAppResponse(JSON.parse(responseData), "JSON");
            ProcessShareApplication_ProcessShareApp_retrieveProcessShareApp.callbackfunction(retrieveProcessShareApp_ResponseObject, textStatus);
        }
        else {
            ProcessShareApplication_ProcessShareApp_retrieveProcessShareApp.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveProcessShareAppRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (retrieveProcessShareApp_Request.context && retrieveProcessShareApp_Request.context.hasOwnProperty('orgnId')) ? retrieveProcessShareApp_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveProcessShareApp_Request.context && retrieveProcessShareApp_Request.context.hasOwnProperty('locnId')) ? retrieveProcessShareApp_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveProcessShareApp_Request.context && retrieveProcessShareApp_Request.context.hasOwnProperty('userId')) ? retrieveProcessShareApp_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveProcessShareApp_Request.context && retrieveProcessShareApp_Request.context.hasOwnProperty('localeId')) ? retrieveProcessShareApp_Request.context["localeId"] : null; //Unicode string(100)
        var param_shareapp_rowid = (retrieveProcessShareApp_Request.context.Header && retrieveProcessShareApp_Request.context.Header.hasOwnProperty('shareapp_rowid')) ? retrieveProcessShareApp_Request.context.Header["shareapp_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveProcessShareApp_Request.context.Header && retrieveProcessShareApp_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveProcessShareApp_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProcessShareApplication/process_share?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&shareapp_rowid=" + param_shareapp_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
