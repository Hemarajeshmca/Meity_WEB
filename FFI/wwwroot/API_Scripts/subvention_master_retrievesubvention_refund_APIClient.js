var SubventionMaster_subvention_master_retrievesubvention_refund = {
    /*
     Function to invoke API
     Notes:
     Resource: subvention_master
     Description: retrievesubvention_refund
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrievesubvention_refund_Request, callbackHandler)
    {
        var param_orgnid = (retrievesubvention_refund_Request.context && retrievesubvention_refund_Request.context.hasOwnProperty('orgnId')) ? retrievesubvention_refund_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrievesubvention_refund_Request.context && retrievesubvention_refund_Request.context.hasOwnProperty('locnId')) ? retrievesubvention_refund_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrievesubvention_refund_Request.context && retrievesubvention_refund_Request.context.hasOwnProperty('userId')) ? retrievesubvention_refund_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrievesubvention_refund_Request.context && retrievesubvention_refund_Request.context.hasOwnProperty('localeId')) ? retrievesubvention_refund_Request.context["localeId"] : null; //Unicode string(100)
        var param_refund_status_code = (retrievesubvention_refund_Request.context.Header && retrievesubvention_refund_Request.context.Header.hasOwnProperty('refund_status_code')) ? retrievesubvention_refund_Request.context.Header["refund_status_code"] : null; //Unicode string(50)
        var param_run_date = (retrievesubvention_refund_Request.context.Header && retrievesubvention_refund_Request.context.Header.hasOwnProperty('run_date')) ? retrievesubvention_refund_Request.context.Header["run_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/refund?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&refund_status_code=" + param_refund_status_code + "&run_date=" + param_run_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, SubventionMaster_subvention_master_retrievesubvention_refund.retrievesubvention_refund_ResponseHandler);
        return true;
    },
    
    retrievesubvention_refund_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrievesubvention_refund_ResponseObject = new retrievesubvention_refundResponse(responseData, "JSON");
            SubventionMaster_subvention_master_retrievesubvention_refund.callbackfunction(retrievesubvention_refund_ResponseObject, textStatus);
        }
        else {
            SubventionMaster_subvention_master_retrievesubvention_refund.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrievesubvention_refundRequestcontext();
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
        var param_run_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('run_date')) ? HeaderrequestObject["run_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/refund?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&refund_status_code=" + param_refund_status_code + "&run_date=" + param_run_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
