var CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap_List = {
    /*
     Function to invoke API
     Notes:
     Resource: CP_CCUserMap
     Description: retrieveCP_CC_UserMap_List
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCP_CC_UserMap_List_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCP_CC_UserMap_List_Request.context && retrieveCP_CC_UserMap_List_Request.context.hasOwnProperty('orgnId')) ? retrieveCP_CC_UserMap_List_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCP_CC_UserMap_List_Request.context && retrieveCP_CC_UserMap_List_Request.context.hasOwnProperty('locnId')) ? retrieveCP_CC_UserMap_List_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCP_CC_UserMap_List_Request.context && retrieveCP_CC_UserMap_List_Request.context.hasOwnProperty('userId')) ? retrieveCP_CC_UserMap_List_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCP_CC_UserMap_List_Request.context && retrieveCP_CC_UserMap_List_Request.context.hasOwnProperty('localeId')) ? retrieveCP_CC_UserMap_List_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveCP_CC_UserMap_List_Request.context.Filter && retrieveCP_CC_UserMap_List_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveCP_CC_UserMap_List_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveCP_CC_UserMap_List_Request.context.Filter && retrieveCP_CC_UserMap_List_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveCP_CC_UserMap_List_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveCP_CC_UserMap_List_Request.context.Filter && retrieveCP_CC_UserMap_List_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? retrieveCP_CC_UserMap_List_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveCP_CC_UserMap_List_Request.context.Filter && retrieveCP_CC_UserMap_List_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? retrieveCP_CC_UserMap_List_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CP_CC_UserMap/allcp_cc_usermap?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap_List.retrieveCP_CC_UserMap_List_ResponseHandler);
        return true;
    },
    
    retrieveCP_CC_UserMap_List_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCP_CC_UserMap_List_ResponseObject = new retrieveCP_CC_UserMap_ListResponse(responseData, "JSON");
            CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap_List.callbackfunction(retrieveCP_CC_UserMap_List_ResponseObject, textStatus);
        }
        else {
            CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap_List.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCP_CC_UserMap_ListRequestcontext();
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
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CP_CC_UserMap/allcp_cc_usermap?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
