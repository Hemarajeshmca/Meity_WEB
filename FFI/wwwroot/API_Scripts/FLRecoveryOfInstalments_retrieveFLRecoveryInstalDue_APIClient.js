var FLRecovery_Of_Instalments_FLRecoveryOfInstalments_retrieveFLRecoveryInstalDue = {
    /*
     Function to invoke API
     Notes:
     Resource: FLRecoveryOfInstalments
     Description: retrieveFLRecoveryInstalDue
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFLRecoveryInstalDue_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFLRecoveryInstalDue_Request.context && retrieveFLRecoveryInstalDue_Request.context.hasOwnProperty('orgnId')) ? retrieveFLRecoveryInstalDue_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFLRecoveryInstalDue_Request.context && retrieveFLRecoveryInstalDue_Request.context.hasOwnProperty('locnId')) ? retrieveFLRecoveryInstalDue_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFLRecoveryInstalDue_Request.context && retrieveFLRecoveryInstalDue_Request.context.hasOwnProperty('userId')) ? retrieveFLRecoveryInstalDue_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFLRecoveryInstalDue_Request.context && retrieveFLRecoveryInstalDue_Request.context.hasOwnProperty('localeId')) ? retrieveFLRecoveryInstalDue_Request.context["localeId"] : null; //Unicode string(100)
        var param_fig_short_name = (retrieveFLRecoveryInstalDue_Request.context.Header && retrieveFLRecoveryInstalDue_Request.context.Header.hasOwnProperty('fig_short_name')) ? retrieveFLRecoveryInstalDue_Request.context.Header["fig_short_name"] : null; //Unicode string(50)
        var param_loanrecovery_type = (retrieveFLRecoveryInstalDue_Request.context.Header && retrieveFLRecoveryInstalDue_Request.context.Header.hasOwnProperty('loanrecovery_type')) ? retrieveFLRecoveryInstalDue_Request.context.Header["loanrecovery_type"] : null; //Unicode string(50)
        var param_run_date = (retrieveFLRecoveryInstalDue_Request.context.Header && retrieveFLRecoveryInstalDue_Request.context.Header.hasOwnProperty('run_date')) ? retrieveFLRecoveryInstalDue_Request.context.Header["run_date"] : null; //Unicode string(20)
        var param_instalment_month = (retrieveFLRecoveryInstalDue_Request.context.Header && retrieveFLRecoveryInstalDue_Request.context.Header.hasOwnProperty('instalment_month')) ? retrieveFLRecoveryInstalDue_Request.context.Header["instalment_month"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRecovery_Of_Instalments/flrecoveryinstaldue?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fig_short_name=" + param_fig_short_name + "&loanrecovery_type=" + param_loanrecovery_type + "&run_date=" + param_run_date + "&instalment_month=" + param_instalment_month + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FLRecovery_Of_Instalments_FLRecoveryOfInstalments_retrieveFLRecoveryInstalDue.retrieveFLRecoveryInstalDue_ResponseHandler);
        return true;
    },
    
    retrieveFLRecoveryInstalDue_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFLRecoveryInstalDue_ResponseObject = new retrieveFLRecoveryInstalDueResponse(responseData, "JSON");
            FLRecovery_Of_Instalments_FLRecoveryOfInstalments_retrieveFLRecoveryInstalDue.callbackfunction(retrieveFLRecoveryInstalDue_ResponseObject, textStatus);
        }
        else {
            FLRecovery_Of_Instalments_FLRecoveryOfInstalments_retrieveFLRecoveryInstalDue.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFLRecoveryInstalDueRequestcontext();
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
        var param_fig_short_name = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fig_short_name')) ? HeaderrequestObject["fig_short_name"] : null; //Unicode string(50)
        var param_loanrecovery_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loanrecovery_type')) ? HeaderrequestObject["loanrecovery_type"] : null; //Unicode string(50)
        var param_run_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('run_date')) ? HeaderrequestObject["run_date"] : null; //Unicode string(20)
        var param_instalment_month = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('instalment_month')) ? HeaderrequestObject["instalment_month"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRecovery_Of_Instalments/flrecoveryinstaldue?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fig_short_name=" + param_fig_short_name + "&loanrecovery_type=" + param_loanrecovery_type + "&run_date=" + param_run_date + "&instalment_month=" + param_instalment_month + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
