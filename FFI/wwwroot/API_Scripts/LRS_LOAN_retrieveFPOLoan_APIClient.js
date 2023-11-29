var LRS_LRS_LOAN_retrieveFPOLoan = {
    /*
     Function to invoke API
     Notes:
     Resource: LRS_LOAN
     Description: retrieveFPOLoan
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFPOLoan_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFPOLoan_Request.context && retrieveFPOLoan_Request.context.hasOwnProperty('orgnId')) ? retrieveFPOLoan_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFPOLoan_Request.context && retrieveFPOLoan_Request.context.hasOwnProperty('locnId')) ? retrieveFPOLoan_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFPOLoan_Request.context && retrieveFPOLoan_Request.context.hasOwnProperty('userId')) ? retrieveFPOLoan_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFPOLoan_Request.context && retrieveFPOLoan_Request.context.hasOwnProperty('localeId')) ? retrieveFPOLoan_Request.context["localeId"] : null; //Unicode string(100)
        var param_fpoloan_rowid = (retrieveFPOLoan_Request.context.Header && retrieveFPOLoan_Request.context.Header.hasOwnProperty('fpoloan_rowid')) ? retrieveFPOLoan_Request.context.Header["fpoloan_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveFPOLoan_Request.context.Header && retrieveFPOLoan_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveFPOLoan_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LRS/fpo_loan?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoloan_rowid=" + param_fpoloan_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, LRS_LRS_LOAN_retrieveFPOLoan.retrieveFPOLoan_ResponseHandler);
        return true;
    },
    
    retrieveFPOLoan_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFPOLoan_ResponseObject = new retrieveFPOLoanResponse(JSON.parse(responseData), "JSON");
            LRS_LRS_LOAN_retrieveFPOLoan.callbackfunction(retrieveFPOLoan_ResponseObject, textStatus);
        }
        else {
            LRS_LRS_LOAN_retrieveFPOLoan.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFPOLoanRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (retrieveFPOLoan_Request.context && retrieveFPOLoan_Request.context.hasOwnProperty('orgnId')) ? retrieveFPOLoan_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFPOLoan_Request.context && retrieveFPOLoan_Request.context.hasOwnProperty('locnId')) ? retrieveFPOLoan_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFPOLoan_Request.context && retrieveFPOLoan_Request.context.hasOwnProperty('userId')) ? retrieveFPOLoan_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFPOLoan_Request.context && retrieveFPOLoan_Request.context.hasOwnProperty('localeId')) ? retrieveFPOLoan_Request.context["localeId"] : null; //Unicode string(100)
        var param_fpoloan_rowid = (retrieveFPOLoan_Request.context.Header && retrieveFPOLoan_Request.context.Header.hasOwnProperty('fpoloan_rowid')) ? retrieveFPOLoan_Request.context.Header["fpoloan_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveFPOLoan_Request.context.Header && retrieveFPOLoan_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveFPOLoan_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LRS/fpo_loan?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoloan_rowid=" + param_fpoloan_rowid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
