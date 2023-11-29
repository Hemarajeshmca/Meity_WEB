var SubventionMaster_subvention_master_retrieveSubvention_advice = {
    /*
     Function to invoke API
     Notes:
     Resource: subvention_master
     Description: retrieveSubvention_advice
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveSubvention_advice_Request, callbackHandler)
    {
        var param_orgnid = (retrieveSubvention_advice_Request.context && retrieveSubvention_advice_Request.context.hasOwnProperty('orgnId')) ? retrieveSubvention_advice_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveSubvention_advice_Request.context && retrieveSubvention_advice_Request.context.hasOwnProperty('locnId')) ? retrieveSubvention_advice_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveSubvention_advice_Request.context && retrieveSubvention_advice_Request.context.hasOwnProperty('userId')) ? retrieveSubvention_advice_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveSubvention_advice_Request.context && retrieveSubvention_advice_Request.context.hasOwnProperty('localeId')) ? retrieveSubvention_advice_Request.context["localeId"] : null; //Unicode string(100)
        var param_refund_status_code = (retrieveSubvention_advice_Request.context.Header && retrieveSubvention_advice_Request.context.Header.hasOwnProperty('refund_status_code')) ? retrieveSubvention_advice_Request.context.Header["refund_status_code"] : null; //Unicode string(50)
        var param_subvention_code = (retrieveSubvention_advice_Request.context.Header && retrieveSubvention_advice_Request.context.Header.hasOwnProperty('subvention_code')) ? retrieveSubvention_advice_Request.context.Header["subvention_code"] : null; //Unicode string(50)
        var param_run_date = (retrieveSubvention_advice_Request.context.Header && retrieveSubvention_advice_Request.context.Header.hasOwnProperty('run_date')) ? retrieveSubvention_advice_Request.context.Header["run_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/advice?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&refund_status_code=" + param_refund_status_code + "&subvention_code=" + param_subvention_code + "&run_date=" + param_run_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, SubventionMaster_subvention_master_retrieveSubvention_advice.retrieveSubvention_advice_ResponseHandler);
        return true;
    },
    
    retrieveSubvention_advice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveSubvention_advice_ResponseObject = new retrieveSubvention_adviceResponse(responseData, "JSON");
            SubventionMaster_subvention_master_retrieveSubvention_advice.callbackfunction(retrieveSubvention_advice_ResponseObject, textStatus);
        }
        else {
            SubventionMaster_subvention_master_retrieveSubvention_advice.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveSubvention_adviceRequestcontext();
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
        var param_refund_status_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('refund_status_code')) ? HeaderrequestObject["refund_status_code"] : null; //Unicode string(50)
        var param_subvention_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('subvention_code')) ? HeaderrequestObject["subvention_code"] : null; //Unicode string(50)
        var param_run_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('run_date')) ? HeaderrequestObject["run_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/advice?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&refund_status_code=" + param_refund_status_code + "&subvention_code=" + param_subvention_code + "&run_date=" + param_run_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
