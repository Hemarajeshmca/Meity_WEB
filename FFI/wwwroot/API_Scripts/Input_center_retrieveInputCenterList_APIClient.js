var InputCenter_Input_center_retrieveInputCenterList = {
    /*
     Function to invoke API
     Notes:
     Resource: Input_center
     Description: retrieveInputCenterList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveInputCenterList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveInputCenterList_Request.context && retrieveInputCenterList_Request.context.hasOwnProperty('orgnId')) ? retrieveInputCenterList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveInputCenterList_Request.context && retrieveInputCenterList_Request.context.hasOwnProperty('locnId')) ? retrieveInputCenterList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveInputCenterList_Request.context && retrieveInputCenterList_Request.context.hasOwnProperty('userId')) ? retrieveInputCenterList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveInputCenterList_Request.context && retrieveInputCenterList_Request.context.hasOwnProperty('localeId')) ? retrieveInputCenterList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveInputCenterList_Request.context.Filter && retrieveInputCenterList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveInputCenterList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveInputCenterList_Request.context.Filter && retrieveInputCenterList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveInputCenterList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveInputCenterList_Request.context.Filter && retrieveInputCenterList_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? retrieveInputCenterList_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveInputCenterList_Request.context.Filter && retrieveInputCenterList_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? retrieveInputCenterList_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenter/allipcenter?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, InputCenter_Input_center_retrieveInputCenterList.retrieveInputCenterList_ResponseHandler);
        return true;
    },
    
    retrieveInputCenterList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveInputCenterList_ResponseObject = new retrieveInputCenterListResponse(responseData, "JSON");
            InputCenter_Input_center_retrieveInputCenterList.callbackfunction(retrieveInputCenterList_ResponseObject, textStatus);
        }
        else {
            InputCenter_Input_center_retrieveInputCenterList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveInputCenterListRequestcontext();
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
        var param_filterby_option = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Option')) ? FilterrequestObject["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Code')) ? FilterrequestObject["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_FromValue')) ? FilterrequestObject["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_ToValue')) ? FilterrequestObject["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenter/allipcenter?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
