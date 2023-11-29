var FPOExpense_Fpo_expense_saveFPOExpense = {
    /*
     Function to invoke API
     Notes:
     Resource: Fpo_expense
     Description: saveFPOExpense
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFPOExpense_Request, callbackHandler)
    {
        var request = new saveFPOExpenseRequest(saveFPOExpense_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOExpense/newFPOExpense";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FPOExpense_Fpo_expense_saveFPOExpense.saveFPOExpense_ResponseHandler);
        return true;
    },
    
    saveFPOExpense_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFPOExpense_ResponseObject = new saveFPOExpenseResponse(responseData, "JSON");
            FPOExpense_Fpo_expense_saveFPOExpense.callbackfunction(saveFPOExpense_ResponseObject, textStatus);
        }
        else {
            FPOExpense_Fpo_expense_saveFPOExpense.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, FpoExpenseDtlrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFPOExpenseRequestcontext();
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
        contextrequestObject.FpoExpenseDtl = FpoExpenseDtlrequestObjectArray;
        
        var request = new saveFPOExpenseRequest();
        request.context = new saveFPOExpenseRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOExpense/newFPOExpense";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
