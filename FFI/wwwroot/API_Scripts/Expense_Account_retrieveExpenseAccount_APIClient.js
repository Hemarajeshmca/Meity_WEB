var ExpenseAccount_Expense_Account_retrieveExpenseAccount = {
    /*
     Function to invoke API
     Notes:
     Resource: Expense_Account
     Description: retrieveExpenseAccount
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveExpenseAccount_Request, callbackHandler)
    {
        var param_orgnid = (retrieveExpenseAccount_Request.context && retrieveExpenseAccount_Request.context.hasOwnProperty('orgnId')) ? retrieveExpenseAccount_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveExpenseAccount_Request.context && retrieveExpenseAccount_Request.context.hasOwnProperty('locnId')) ? retrieveExpenseAccount_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveExpenseAccount_Request.context && retrieveExpenseAccount_Request.context.hasOwnProperty('userId')) ? retrieveExpenseAccount_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveExpenseAccount_Request.context && retrieveExpenseAccount_Request.context.hasOwnProperty('localeId')) ? retrieveExpenseAccount_Request.context["localeId"] : null; //Unicode string(100)
        var param_expense_rowid = (retrieveExpenseAccount_Request.context.Header && retrieveExpenseAccount_Request.context.Header.hasOwnProperty('expense_rowid')) ? retrieveExpenseAccount_Request.context.Header["expense_rowid"] : null; //Integer(32)
        var param_expense_no = (retrieveExpenseAccount_Request.context.Header && retrieveExpenseAccount_Request.context.Header.hasOwnProperty('expense_no')) ? retrieveExpenseAccount_Request.context.Header["expense_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExpenseAccount/Expense_detail?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&expense_rowid=" + param_expense_rowid + "&expense_no=" + param_expense_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ExpenseAccount_Expense_Account_retrieveExpenseAccount.retrieveExpenseAccount_ResponseHandler);
        return true;
    },
    
    retrieveExpenseAccount_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveExpenseAccount_ResponseObject = new retrieveExpenseAccountResponse(responseData, "JSON");
            ExpenseAccount_Expense_Account_retrieveExpenseAccount.callbackfunction(retrieveExpenseAccount_ResponseObject, textStatus);
        }
        else {
            ExpenseAccount_Expense_Account_retrieveExpenseAccount.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveExpenseAccountRequestcontext();
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
        var param_expense_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('expense_rowid')) ? HeaderrequestObject["expense_rowid"] : null; //Integer(32)
        var param_expense_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('expense_no')) ? HeaderrequestObject["expense_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExpenseAccount/Expense_detail?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&expense_rowid=" + param_expense_rowid + "&expense_no=" + param_expense_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
