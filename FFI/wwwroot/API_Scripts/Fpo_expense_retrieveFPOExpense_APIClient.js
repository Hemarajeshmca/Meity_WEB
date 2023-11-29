var FPOExpense_Fpo_expense_retrieveFPOExpense = {
    /*
     Function to invoke API
     Notes:
     Resource: Fpo_expense
     Description: retrieveFPOExpense
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFPOExpense_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFPOExpense_Request.context && retrieveFPOExpense_Request.context.hasOwnProperty('orgnId')) ? retrieveFPOExpense_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFPOExpense_Request.context && retrieveFPOExpense_Request.context.hasOwnProperty('locnId')) ? retrieveFPOExpense_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFPOExpense_Request.context && retrieveFPOExpense_Request.context.hasOwnProperty('userId')) ? retrieveFPOExpense_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFPOExpense_Request.context && retrieveFPOExpense_Request.context.hasOwnProperty('localeId')) ? retrieveFPOExpense_Request.context["localeId"] : null; //Unicode string(100)
        var param_expense_rowid = (retrieveFPOExpense_Request.context.Header && retrieveFPOExpense_Request.context.Header.hasOwnProperty('expense_rowid')) ? retrieveFPOExpense_Request.context.Header["expense_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOExpense/fpoexpense?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&expense_rowid=" + param_expense_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FPOExpense_Fpo_expense_retrieveFPOExpense.retrieveFPOExpense_ResponseHandler);
        return true;
    },
    
    retrieveFPOExpense_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFPOExpense_ResponseObject = new retrieveFPOExpenseResponse(responseData, "JSON");
            FPOExpense_Fpo_expense_retrieveFPOExpense.callbackfunction(retrieveFPOExpense_ResponseObject, textStatus);
        }
        else {
            FPOExpense_Fpo_expense_retrieveFPOExpense.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFPOExpenseRequestcontext();
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
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOExpense/fpoexpense?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&expense_rowid=" + param_expense_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
