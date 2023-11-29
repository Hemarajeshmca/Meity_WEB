var ShareApplication_Share_App_retrieveShareDespatch = {
    /*
     Function to invoke API
     Notes:
     Resource: Share_App
     Description: retrieveShareDespatch
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveShareDespatch_Request, callbackHandler)
    {
        var param_orgnid = (retrieveShareDespatch_Request.context && retrieveShareDespatch_Request.context.hasOwnProperty('orgnId')) ? retrieveShareDespatch_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveShareDespatch_Request.context && retrieveShareDespatch_Request.context.hasOwnProperty('locnId')) ? retrieveShareDespatch_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveShareDespatch_Request.context && retrieveShareDespatch_Request.context.hasOwnProperty('userId')) ? retrieveShareDespatch_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveShareDespatch_Request.context && retrieveShareDespatch_Request.context.hasOwnProperty('localeId')) ? retrieveShareDespatch_Request.context["localeId"] : null; //Unicode string(100)
        var param_fpoorgn_code = (retrieveShareDespatch_Request.context.Header && retrieveShareDespatch_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveShareDespatch_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        var param_despatch_status = (retrieveShareDespatch_Request.context.Header && retrieveShareDespatch_Request.context.Header.hasOwnProperty('despatch_status')) ? retrieveShareDespatch_Request.context.Header["despatch_status"] : null; //Unicode string(50)
        var param_despatch_date = (retrieveShareDespatch_Request.context.Header && retrieveShareDespatch_Request.context.Header.hasOwnProperty('despatch_date')) ? retrieveShareDespatch_Request.context.Header["despatch_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/sharedespatch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "&despatch_status=" + param_despatch_status + "&despatch_date=" + param_despatch_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ShareApplication_Share_App_retrieveShareDespatch.retrieveShareDespatch_ResponseHandler);
        return true;
    },
    
    retrieveShareDespatch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveShareDespatch_ResponseObject = new retrieveShareDespatchResponse(responseData, "JSON");
            ShareApplication_Share_App_retrieveShareDespatch.callbackfunction(retrieveShareDespatch_ResponseObject, textStatus);
        }
        else {
            ShareApplication_Share_App_retrieveShareDespatch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveShareDespatchRequestcontext();
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
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        var param_despatch_status = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('despatch_status')) ? HeaderrequestObject["despatch_status"] : null; //Unicode string(50)
        var param_despatch_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('despatch_date')) ? HeaderrequestObject["despatch_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/sharedespatch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "&despatch_status=" + param_despatch_status + "&despatch_date=" + param_despatch_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
