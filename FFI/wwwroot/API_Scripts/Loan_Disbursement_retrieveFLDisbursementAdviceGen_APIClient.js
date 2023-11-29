var LoanDisbursement_Loan_Disbursement_retrieveFLDisbursementAdviceGen = {
    /*
     Function to invoke API
     Notes:
     Resource: Loan_Disbursement
     Description: retrieveFLDisbursementAdviceGen
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFLDisbursementAdviceGen_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFLDisbursementAdviceGen_Request.context && retrieveFLDisbursementAdviceGen_Request.context.hasOwnProperty('orgnId')) ? retrieveFLDisbursementAdviceGen_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFLDisbursementAdviceGen_Request.context && retrieveFLDisbursementAdviceGen_Request.context.hasOwnProperty('locnId')) ? retrieveFLDisbursementAdviceGen_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFLDisbursementAdviceGen_Request.context && retrieveFLDisbursementAdviceGen_Request.context.hasOwnProperty('userId')) ? retrieveFLDisbursementAdviceGen_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFLDisbursementAdviceGen_Request.context && retrieveFLDisbursementAdviceGen_Request.context.hasOwnProperty('localeId')) ? retrieveFLDisbursementAdviceGen_Request.context["localeId"] : null; //Unicode string(100)
        var param_status_option = (retrieveFLDisbursementAdviceGen_Request.context.Filter && retrieveFLDisbursementAdviceGen_Request.context.Filter.hasOwnProperty('status_option')) ? retrieveFLDisbursementAdviceGen_Request.context.Filter["status_option"] : null; //Unicode string(50)
        var param_fpoorgn_code = (retrieveFLDisbursementAdviceGen_Request.context.Filter && retrieveFLDisbursementAdviceGen_Request.context.Filter.hasOwnProperty('fpoorgn_code')) ? retrieveFLDisbursementAdviceGen_Request.context.Filter["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LoanDisbursement/fl_disb_adv_gen?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&status_option=" + param_status_option + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, LoanDisbursement_Loan_Disbursement_retrieveFLDisbursementAdviceGen.retrieveFLDisbursementAdviceGen_ResponseHandler);
        return true;
    },
    
    retrieveFLDisbursementAdviceGen_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFLDisbursementAdviceGen_ResponseObject = new retrieveFLDisbursementAdviceGenResponse(responseData, "JSON");
            LoanDisbursement_Loan_Disbursement_retrieveFLDisbursementAdviceGen.callbackfunction(retrieveFLDisbursementAdviceGen_ResponseObject, textStatus);
        }
        else {
            LoanDisbursement_Loan_Disbursement_retrieveFLDisbursementAdviceGen.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFLDisbursementAdviceGenRequestcontext();
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
        var param_status_option = (FilterrequestObject && FilterrequestObject.hasOwnProperty('status_option')) ? FilterrequestObject["status_option"] : null; //Unicode string(50)
        var param_fpoorgn_code = (FilterrequestObject && FilterrequestObject.hasOwnProperty('fpoorgn_code')) ? FilterrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LoanDisbursement/fl_disb_adv_gen?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&status_option=" + param_status_option + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
