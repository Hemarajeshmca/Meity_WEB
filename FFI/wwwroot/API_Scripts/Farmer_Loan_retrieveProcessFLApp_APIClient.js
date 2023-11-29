var FarmerLoan_Farmer_Loan_retrieveProcessFLApp = {
    /*
     Function to invoke API
     Notes:
     Resource: Farmer_Loan
     Description: retrieveProcessFLApp
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveProcessFarmerLoanApp_Request, callbackHandler)
    {
        var param_orgnid = (retrieveProcessFarmerLoanApp_Request.context && retrieveProcessFarmerLoanApp_Request.context.hasOwnProperty('orgnId')) ? retrieveProcessFarmerLoanApp_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveProcessFarmerLoanApp_Request.context && retrieveProcessFarmerLoanApp_Request.context.hasOwnProperty('locnId')) ? retrieveProcessFarmerLoanApp_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveProcessFarmerLoanApp_Request.context && retrieveProcessFarmerLoanApp_Request.context.hasOwnProperty('userId')) ? retrieveProcessFarmerLoanApp_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveProcessFarmerLoanApp_Request.context && retrieveProcessFarmerLoanApp_Request.context.hasOwnProperty('localeId')) ? retrieveProcessFarmerLoanApp_Request.context["localeId"] : null; //Unicode string(100)
        var param_loanapp_rowid = (retrieveProcessFarmerLoanApp_Request.context.Header && retrieveProcessFarmerLoanApp_Request.context.Header.hasOwnProperty('loanapp_rowid')) ? retrieveProcessFarmerLoanApp_Request.context.Header["loanapp_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveProcessFarmerLoanApp_Request.context.Header && retrieveProcessFarmerLoanApp_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveProcessFarmerLoanApp_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/process_farmer_loan?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loanapp_rowid=" + param_loanapp_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FarmerLoan_Farmer_Loan_retrieveProcessFLApp.retrieveProcessFLApp_ResponseHandler);
        return true;
    },
    
    retrieveProcessFLApp_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveProcessFarmerLoanApp_ResponseObject = new retrieveProcessFarmerLoanAppResponse(responseData, "JSON");
            FarmerLoan_Farmer_Loan_retrieveProcessFLApp.callbackfunction(retrieveProcessFarmerLoanApp_ResponseObject, textStatus);
        }
        else {
            FarmerLoan_Farmer_Loan_retrieveProcessFLApp.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveProcessFarmerLoanAppRequestcontext();
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
        var param_loanapp_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loanapp_rowid')) ? HeaderrequestObject["loanapp_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/process_farmer_loan?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loanapp_rowid=" + param_loanapp_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
