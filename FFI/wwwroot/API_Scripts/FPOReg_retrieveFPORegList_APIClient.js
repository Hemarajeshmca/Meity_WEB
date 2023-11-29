var FPORegistration_FPOReg_retrieveFPORegList = {
    /*
     Function to invoke API
     Notes:
     Resource: FPOReg
     Description: retrieveFPORegList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFPORegList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFPORegList_Request.context && retrieveFPORegList_Request.context.hasOwnProperty('orgnId')) ? retrieveFPORegList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFPORegList_Request.context && retrieveFPORegList_Request.context.hasOwnProperty('locnId')) ? retrieveFPORegList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFPORegList_Request.context && retrieveFPORegList_Request.context.hasOwnProperty('userId')) ? retrieveFPORegList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFPORegList_Request.context && retrieveFPORegList_Request.context.hasOwnProperty('localeId')) ? retrieveFPORegList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveFPORegList_Request.context.Filter && retrieveFPORegList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveFPORegList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveFPORegList_Request.context.Filter && retrieveFPORegList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveFPORegList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveFPORegList_Request.context.Filter && retrieveFPORegList_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? retrieveFPORegList_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveFPORegList_Request.context.Filter && retrieveFPORegList_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? retrieveFPORegList_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPORegistration/allfpo_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FPORegistration_FPOReg_retrieveFPORegList.retrieveFPORegList_ResponseHandler);
        return true;
    },
    
    retrieveFPORegList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFPORegList_ResponseObject = new retrieveFPORegListResponse(responseData, "JSON");
            FPORegistration_FPOReg_retrieveFPORegList.callbackfunction(retrieveFPORegList_ResponseObject, textStatus);
        }
        else {
            FPORegistration_FPOReg_retrieveFPORegList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFPORegListRequestcontext();
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
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPORegistration/allfpo_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
