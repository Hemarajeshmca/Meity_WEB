var FarmerLoan_Farmer_Loan_retrieveFarmerLoanScheme = {
    /*
     Function to invoke API
     Notes:
     Resource: Farmer_Loan
     Description: retrieveFarmerLoanScheme
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFarmerLoanScheme_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFarmerLoanScheme_Request.context && retrieveFarmerLoanScheme_Request.context.hasOwnProperty('orgnId')) ? retrieveFarmerLoanScheme_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFarmerLoanScheme_Request.context && retrieveFarmerLoanScheme_Request.context.hasOwnProperty('locnId')) ? retrieveFarmerLoanScheme_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFarmerLoanScheme_Request.context && retrieveFarmerLoanScheme_Request.context.hasOwnProperty('userId')) ? retrieveFarmerLoanScheme_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFarmerLoanScheme_Request.context && retrieveFarmerLoanScheme_Request.context.hasOwnProperty('localeId')) ? retrieveFarmerLoanScheme_Request.context["localeId"] : null; //Unicode string(100)
        var param_loanscheme_rowid = (retrieveFarmerLoanScheme_Request.context.Header && retrieveFarmerLoanScheme_Request.context.Header.hasOwnProperty('loanscheme_rowid')) ? retrieveFarmerLoanScheme_Request.context.Header["loanscheme_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveFarmerLoanScheme_Request.context.Header && retrieveFarmerLoanScheme_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveFarmerLoanScheme_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/loan_scheme?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loanscheme_rowid=" + param_loanscheme_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FarmerLoan_Farmer_Loan_retrieveFarmerLoanScheme.retrieveFarmerLoanScheme_ResponseHandler);
        return true;
    },
    
    retrieveFarmerLoanScheme_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFarmerLoanScheme_ResponseObject = new retrieveFarmerLoanSchemeResponse(responseData, "JSON");
            FarmerLoan_Farmer_Loan_retrieveFarmerLoanScheme.callbackfunction(retrieveFarmerLoanScheme_ResponseObject, textStatus);
        }
        else {
            FarmerLoan_Farmer_Loan_retrieveFarmerLoanScheme.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFarmerLoanSchemeRequestcontext();
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
        var param_loanscheme_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loanscheme_rowid')) ? HeaderrequestObject["loanscheme_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/loan_scheme?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loanscheme_rowid=" + param_loanscheme_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
