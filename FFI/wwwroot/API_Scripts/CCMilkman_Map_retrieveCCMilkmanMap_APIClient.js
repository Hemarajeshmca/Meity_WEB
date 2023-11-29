var CCMilkmanMap_CCMilkman_Map_retrieveCCMilkmanMap = {
    /*
     Function to invoke API
     Notes:
     Resource: CCMilkman_Map
     Description: retrieveCCMilkmanMap
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCCMilkmanMap_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCCMilkmanMap_Request.context && retrieveCCMilkmanMap_Request.context.hasOwnProperty('orgnId')) ? retrieveCCMilkmanMap_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCCMilkmanMap_Request.context && retrieveCCMilkmanMap_Request.context.hasOwnProperty('locnId')) ? retrieveCCMilkmanMap_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCCMilkmanMap_Request.context && retrieveCCMilkmanMap_Request.context.hasOwnProperty('userId')) ? retrieveCCMilkmanMap_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCCMilkmanMap_Request.context && retrieveCCMilkmanMap_Request.context.hasOwnProperty('localeId')) ? retrieveCCMilkmanMap_Request.context["localeId"] : null; //Unicode string(100)
        var param_aggrorgn_type = (retrieveCCMilkmanMap_Request.context.Header && retrieveCCMilkmanMap_Request.context.Header.hasOwnProperty('aggrorgn_type')) ? retrieveCCMilkmanMap_Request.context.Header["aggrorgn_type"] : null; //Unicode string(50)
        var param_aggrorgn_code = (retrieveCCMilkmanMap_Request.context.Header && retrieveCCMilkmanMap_Request.context.Header.hasOwnProperty('aggrorgn_code')) ? retrieveCCMilkmanMap_Request.context.Header["aggrorgn_code"] : null; //Unicode string(50)
        var param_cc_aggrloc_code = (retrieveCCMilkmanMap_Request.context.Header && retrieveCCMilkmanMap_Request.context.Header.hasOwnProperty('cc_aggrloc_code')) ? retrieveCCMilkmanMap_Request.context.Header["cc_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CCMilkmanMap/cc_milkmanmap?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&aggrorgn_type=" + param_aggrorgn_type + "&aggrorgn_code=" + param_aggrorgn_code + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CCMilkmanMap_CCMilkman_Map_retrieveCCMilkmanMap.retrieveCCMilkmanMap_ResponseHandler);
        return true;
    },
    
    retrieveCCMilkmanMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCCMilkmanMap_ResponseObject = new retrieveCCMilkmanMapResponse(responseData, "JSON");
            CCMilkmanMap_CCMilkman_Map_retrieveCCMilkmanMap.callbackfunction(retrieveCCMilkmanMap_ResponseObject, textStatus);
        }
        else {
            CCMilkmanMap_CCMilkman_Map_retrieveCCMilkmanMap.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCCMilkmanMapRequestcontext();
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
        var param_cc_aggrloc_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cc_aggrloc_code')) ? HeaderrequestObject["cc_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CCMilkmanMap/cc_milkmanmap?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&aggrorgn_type=" + param_aggrorgn_type + "&aggrorgn_code=" + param_aggrorgn_code + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
