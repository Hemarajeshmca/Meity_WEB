var FPO_Loan_FPOLoan_saveFPOLoan = {
    /*
     Function to invoke API
     Notes:
     Resource: FPOLoan
     Description: saveFPOLoan
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFPOLoan_Request, callbackHandler)
    {
        var request = new saveFPOLoanRequest(saveFPOLoan_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPO_Loan/newFPOLoan";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FPO_Loan_FPOLoan_saveFPOLoan.saveFPOLoan_ResponseHandler);
        return true;
    },
    
    saveFPOLoan_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFPOLoan_ResponseObject = new saveFPOLoanResponse(responseData, "JSON");
            FPO_Loan_FPOLoan_saveFPOLoan.callbackfunction(saveFPOLoan_ResponseObject, textStatus);
        }
        else {
            FPO_Loan_FPOLoan_saveFPOLoan.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, TrancherequestObjectArray, RepaymentrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFPOLoanRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Header = HeaderrequestObject;
        contextrequestObject.Tranche = TrancherequestObjectArray;
        contextrequestObject.Repayment = RepaymentrequestObjectArray;
        
        var request = new saveFPOLoanRequest();
        request.context = new saveFPOLoanRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPO_Loan/newFPOLoan";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
