var LoanDisbursement_Loan_Disbursement_saveFLDisbursement = {
    /*
     Function to invoke API
     Notes:
     Resource: Loan_Disbursement
     Description: saveFLDisbursement
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLDisbursement_Request, callbackHandler)
    {
        var request = new saveFLDisbursementRequest(saveFLDisbursement_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LoanDisbursement/newFLDisbursement";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, LoanDisbursement_Loan_Disbursement_saveFLDisbursement.saveFLDisbursement_ResponseHandler);
        return true;
    },
    
    saveFLDisbursement_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLDisbursement_ResponseObject = new saveFLDisbursementResponse(responseData, "JSON");
            LoanDisbursement_Loan_Disbursement_saveFLDisbursement.callbackfunction(saveFLDisbursement_ResponseObject, textStatus);
        }
        else {
            LoanDisbursement_Loan_Disbursement_saveFLDisbursement.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveFLDisbursementRequestcontext();
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
        
        var request = new saveFLDisbursementRequest();
        request.context = new saveFLDisbursementRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LoanDisbursement/newFLDisbursement";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
