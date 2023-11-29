var Expense_Expense_Master_saveExpense = {
    /*
     Function to invoke API
     Notes:
     Resource: Expense_Master
     Description: saveExpense
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveExpense_Request, callbackHandler)
    {
        var request = new saveExpenseRequest(saveExpense_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Expense/new_expense";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Expense_Expense_Master_saveExpense.saveExpense_ResponseHandler);
        return true;
    },
    
    saveExpense_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveExpense_ResponseObject = new saveExpenseResponse(responseData, "JSON");
            Expense_Expense_Master_saveExpense.callbackfunction(saveExpense_ResponseObject, textStatus);
        }
        else {
            Expense_Expense_Master_saveExpense.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailsrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveExpenseRequestcontext();
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
        contextrequestObject.Details = DetailsrequestObjectArray;
        
        var request = new saveExpenseRequest();
        request.context = new saveExpenseRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Expense/new_expense";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
