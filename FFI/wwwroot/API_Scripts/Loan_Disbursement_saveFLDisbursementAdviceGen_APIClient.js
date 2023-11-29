var LoanDisbursement_Loan_Disbursement_saveFLDisbursementAdviceGen = {
    /*
     Function to invoke API
     Notes:
     Resource: Loan_Disbursement
     Description: saveFLDisbursementAdviceGen
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLDisbursementAdviceGen_Request, callbackHandler)
    {
        var request = new saveFLDisbursementAdviceGenRequest(saveFLDisbursementAdviceGen_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LoanDisbursement/newFLDisbursementAdviceGen";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, LoanDisbursement_Loan_Disbursement_saveFLDisbursementAdviceGen.saveFLDisbursementAdviceGen_ResponseHandler);
        return true;
    },
    
    saveFLDisbursementAdviceGen_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLDisbursementAdviceGen_ResponseObject = new saveFLDisbursementAdviceGenResponse(responseData, "JSON");
            LoanDisbursement_Loan_Disbursement_saveFLDisbursementAdviceGen.callbackfunction(saveFLDisbursementAdviceGen_ResponseObject, textStatus);
        }
        else {
            LoanDisbursement_Loan_Disbursement_saveFLDisbursementAdviceGen.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, FilterrequestObject, ListrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFLDisbursementAdviceGenRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Filter = FilterrequestObject;
        contextrequestObject.List = ListrequestObjectArray;
        
        var request = new saveFLDisbursementAdviceGenRequest();
        request.context = new saveFLDisbursementAdviceGenRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LoanDisbursement/newFLDisbursementAdviceGen";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
