var ExpenseAccount_Expense_Account_saveExpenseAccount = {
    /*
     Function to invoke API
     Notes:
     Resource: Expense_Account
     Description: saveExpenseAccount
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveExpenseAccount_Request, callbackHandler)
    {
        var request = new saveExpenseAccountRequest(saveExpenseAccount_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExpenseAccount/newexpenseaccount";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ExpenseAccount_Expense_Account_saveExpenseAccount.saveExpenseAccount_ResponseHandler);
        return true;
    },
    
    saveExpenseAccount_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveExpenseAccount_ResponseObject = new saveExpenseAccountResponse(responseData, "JSON");
            ExpenseAccount_Expense_Account_saveExpenseAccount.callbackfunction(saveExpenseAccount_ResponseObject, textStatus);
        }
        else {
            ExpenseAccount_Expense_Account_saveExpenseAccount.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveExpenseAccountRequestcontext();
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
        contextrequestObject.Detail = DetailrequestObjectArray;
        
        var request = new saveExpenseAccountRequest();
        request.context = new saveExpenseAccountRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExpenseAccount/newexpenseaccount";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
