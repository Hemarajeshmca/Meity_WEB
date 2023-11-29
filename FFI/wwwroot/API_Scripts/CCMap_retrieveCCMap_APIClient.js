var CollectionCenterMap_CCMap_retrieveCCMap = {
    /*
     Function to invoke API
     Notes:
     Resource: CCMap
     Description: retrieveCCMap
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCCMap_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCCMap_Request.context && retrieveCCMap_Request.context.hasOwnProperty('orgnId')) ? retrieveCCMap_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCCMap_Request.context && retrieveCCMap_Request.context.hasOwnProperty('locnId')) ? retrieveCCMap_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCCMap_Request.context && retrieveCCMap_Request.context.hasOwnProperty('userId')) ? retrieveCCMap_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCCMap_Request.context && retrieveCCMap_Request.context.hasOwnProperty('localeId')) ? retrieveCCMap_Request.context["localeId"] : null; //Unicode string(100)
        var param_cc_aggrloc_code = (retrieveCCMap_Request.context.Header && retrieveCCMap_Request.context.Header.hasOwnProperty('cc_aggrloc_code')) ? retrieveCCMap_Request.context.Header["cc_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CollectionCenterMap/cc_map?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CollectionCenterMap_CCMap_retrieveCCMap.retrieveCCMap_ResponseHandler);
        return true;
    },
    
    retrieveCCMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCCMap_ResponseObject = new retrieveCCMapResponse(responseData, "JSON");
            CollectionCenterMap_CCMap_retrieveCCMap.callbackfunction(retrieveCCMap_ResponseObject, textStatus);
        }
        else {
            CollectionCenterMap_CCMap_retrieveCCMap.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCCMapRequestcontext();
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
        var param_cc_aggrloc_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cc_aggrloc_code')) ? HeaderrequestObject["cc_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CollectionCenterMap/cc_map?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
