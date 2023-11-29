var LoanDisbursement_Loan_Disbursement_saveFLDisbursementStatusUpdate = {
    /*
     Function to invoke API
     Notes:
     Resource: Loan_Disbursement
     Description: saveFLDisbursementStatusUpdate
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLDisbursementStatusUpdate_Request, callbackHandler)
    {
        var request = new saveFLDisbursementStatusUpdateRequest(saveFLDisbursementStatusUpdate_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LoanDisbursement/newFLDisbursementStatusUpdate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, LoanDisbursement_Loan_Disbursement_saveFLDisbursementStatusUpdate.saveFLDisbursementStatusUpdate_ResponseHandler);
        return true;
    },
    
    saveFLDisbursementStatusUpdate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLDisbursementStatusUpdate_ResponseObject = new saveFLDisbursementStatusUpdateResponse(responseData, "JSON");
            LoanDisbursement_Loan_Disbursement_saveFLDisbursementStatusUpdate.callbackfunction(saveFLDisbursementStatusUpdate_ResponseObject, textStatus);
        }
        else {
            LoanDisbursement_Loan_Disbursement_saveFLDisbursementStatusUpdate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveFLDisbursementStatusUpdateRequestcontext();
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
        
        var request = new saveFLDisbursementStatusUpdateRequest();
        request.context = new saveFLDisbursementStatusUpdateRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LoanDisbursement/newFLDisbursementStatusUpdate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
