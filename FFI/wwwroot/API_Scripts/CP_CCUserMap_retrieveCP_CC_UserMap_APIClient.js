var CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap = {
    /*
     Function to invoke API
     Notes:
     Resource: CP_CCUserMap
     Description: retrieveCP_CC_UserMap
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCP_CC_UserMap_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCP_CC_UserMap_Request.context && retrieveCP_CC_UserMap_Request.context.hasOwnProperty('orgnId')) ? retrieveCP_CC_UserMap_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCP_CC_UserMap_Request.context && retrieveCP_CC_UserMap_Request.context.hasOwnProperty('locnId')) ? retrieveCP_CC_UserMap_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCP_CC_UserMap_Request.context && retrieveCP_CC_UserMap_Request.context.hasOwnProperty('userId')) ? retrieveCP_CC_UserMap_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCP_CC_UserMap_Request.context && retrieveCP_CC_UserMap_Request.context.hasOwnProperty('localeId')) ? retrieveCP_CC_UserMap_Request.context["localeId"] : null; //Unicode string(100)
        var param_aggrorgn_type = (retrieveCP_CC_UserMap_Request.context.Header && retrieveCP_CC_UserMap_Request.context.Header.hasOwnProperty('aggrorgn_type')) ? retrieveCP_CC_UserMap_Request.context.Header["aggrorgn_type"] : null; //Unicode string(50)
        var param_aggrorgn_code = (retrieveCP_CC_UserMap_Request.context.Header && retrieveCP_CC_UserMap_Request.context.Header.hasOwnProperty('aggrorgn_code')) ? retrieveCP_CC_UserMap_Request.context.Header["aggrorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CP_CC_UserMap/cp_cc_usermap?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&aggrorgn_type=" + param_aggrorgn_type + "&aggrorgn_code=" + param_aggrorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap.retrieveCP_CC_UserMap_ResponseHandler);
        return true;
    },
    
    retrieveCP_CC_UserMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCP_CC_UserMap_ResponseObject = new retrieveCP_CC_UserMapResponse(responseData, "JSON");
            CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap.callbackfunction(retrieveCP_CC_UserMap_ResponseObject, textStatus);
        }
        else {
            CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCP_CC_UserMapRequestcontext();
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
        var param_aggrorgn_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('aggrorgn_type')) ? HeaderrequestObject["aggrorgn_type"] : null; //Unicode string(50)
        var param_aggrorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('aggrorgn_code')) ? HeaderrequestObject["aggrorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CP_CC_UserMap/cp_cc_usermap?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&aggrorgn_type=" + param_aggrorgn_type + "&aggrorgn_code=" + param_aggrorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
