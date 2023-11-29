var ProcessShareApplication_ProcessShareApp_retrieveProcessShareAppList = {
    /*
     Function to invoke API
     Notes:
     Resource: ProcessShareApp
     Description: retrieveProcessShareAppList
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveProcessShareAppList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveProcessShareAppList_Request.context && retrieveProcessShareAppList_Request.context.hasOwnProperty('orgnId')) ? retrieveProcessShareAppList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveProcessShareAppList_Request.context && retrieveProcessShareAppList_Request.context.hasOwnProperty('locnId')) ? retrieveProcessShareAppList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveProcessShareAppList_Request.context && retrieveProcessShareAppList_Request.context.hasOwnProperty('userId')) ? retrieveProcessShareAppList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveProcessShareAppList_Request.context && retrieveProcessShareAppList_Request.context.hasOwnProperty('localeId')) ? retrieveProcessShareAppList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveProcessShareAppList_Request.context.Filter && retrieveProcessShareAppList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveProcessShareAppList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveProcessShareAppList_Request.context.Filter && retrieveProcessShareAppList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveProcessShareAppList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveProcessShareAppList_Request.context.Filter && retrieveProcessShareAppList_Request.context.Filter.hasOwnProperty('FilterBy_Fromvalue')) ? retrieveProcessShareAppList_Request.context.Filter["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveProcessShareAppList_Request.context.Filter && retrieveProcessShareAppList_Request.context.Filter.hasOwnProperty('FilterBy_Tovalue')) ? retrieveProcessShareAppList_Request.context.Filter["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProcessShareApplication/all_process?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ProcessShareApplication_ProcessShareApp_retrieveProcessShareAppList.retrieveProcessShareAppList_ResponseHandler);
        return true;
    },
    
    retrieveProcessShareAppList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveProcessShareAppList_ResponseObject = new retrieveProcessShareAppListResponse(JSON.parse(responseData), "JSON");
            ProcessShareApplication_ProcessShareApp_retrieveProcessShareAppList.callbackfunction(retrieveProcessShareAppList_ResponseObject, textStatus);
        }
        else {
            ProcessShareApplication_ProcessShareApp_retrieveProcessShareAppList.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, FilterrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveProcessShareAppListRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (retrieveProcessShareAppList_Request.context && retrieveProcessShareAppList_Request.context.hasOwnProperty('orgnId')) ? retrieveProcessShareAppList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveProcessShareAppList_Request.context && retrieveProcessShareAppList_Request.context.hasOwnProperty('locnId')) ? retrieveProcessShareAppList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveProcessShareAppList_Request.context && retrieveProcessShareAppList_Request.context.hasOwnProperty('userId')) ? retrieveProcessShareAppList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveProcessShareAppList_Request.context && retrieveProcessShareAppList_Request.context.hasOwnProperty('localeId')) ? retrieveProcessShareAppList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveProcessShareAppList_Request.context.Filter && retrieveProcessShareAppList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveProcessShareAppList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveProcessShareAppList_Request.context.Filter && retrieveProcessShareAppList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveProcessShareAppList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveProcessShareAppList_Request.context.Filter && retrieveProcessShareAppList_Request.context.Filter.hasOwnProperty('FilterBy_Fromvalue')) ? retrieveProcessShareAppList_Request.context.Filter["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveProcessShareAppList_Request.context.Filter && retrieveProcessShareAppList_Request.context.Filter.hasOwnProperty('FilterBy_Tovalue')) ? retrieveProcessShareAppList_Request.context.Filter["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProcessShareApplication/all_process?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
