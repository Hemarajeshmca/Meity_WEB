var CapitalStructure_Capital_retrieveCaptial = {
    /*
     Function to invoke API
     Notes:
     Resource: Capital
     Description: retrieveCaptial
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCaptial_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCaptial_Request.context && retrieveCaptial_Request.context.hasOwnProperty('orgnId')) ? retrieveCaptial_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCaptial_Request.context && retrieveCaptial_Request.context.hasOwnProperty('locnId')) ? retrieveCaptial_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCaptial_Request.context && retrieveCaptial_Request.context.hasOwnProperty('userId')) ? retrieveCaptial_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCaptial_Request.context && retrieveCaptial_Request.context.hasOwnProperty('localeId')) ? retrieveCaptial_Request.context["localeId"] : null; //Unicode string(100)
        var param_capital_rowid = (retrieveCaptial_Request.context.Header && retrieveCaptial_Request.context.Header.hasOwnProperty('capital_rowid')) ? retrieveCaptial_Request.context.Header["capital_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveCaptial_Request.context.Header && retrieveCaptial_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveCaptial_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CapitalStructure/capital_struct?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&capital_rowid=" + param_capital_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CapitalStructure_Capital_retrieveCaptial.retrieveCaptial_ResponseHandler);
        return true;
    },
    
    retrieveCaptial_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCaptial_ResponseObject = new retrieveCaptialResponse(responseData, "JSON");
            CapitalStructure_Capital_retrieveCaptial.callbackfunction(retrieveCaptial_ResponseObject, textStatus);
        }
        else {
            CapitalStructure_Capital_retrieveCaptial.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCaptialRequestcontext();
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
        var param_capital_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('capital_rowid')) ? HeaderrequestObject["capital_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CapitalStructure/capital_struct?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&capital_rowid=" + param_capital_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
