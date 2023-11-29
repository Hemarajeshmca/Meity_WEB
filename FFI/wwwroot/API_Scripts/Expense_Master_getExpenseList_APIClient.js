var Expense_Expense_Master_getExpenseList = {
    /*
     Function to invoke API
     Notes:
     Resource: Expense_Master
     Description: getExpenseList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getExpenseList_Request, callbackHandler)
    {
        var param_orgnid = (getExpenseList_Request.context && getExpenseList_Request.context.hasOwnProperty('orgnId')) ? getExpenseList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (getExpenseList_Request.context && getExpenseList_Request.context.hasOwnProperty('locnId')) ? getExpenseList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (getExpenseList_Request.context && getExpenseList_Request.context.hasOwnProperty('userId')) ? getExpenseList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (getExpenseList_Request.context && getExpenseList_Request.context.hasOwnProperty('localeId')) ? getExpenseList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (getExpenseList_Request.context.Filter && getExpenseList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? getExpenseList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (getExpenseList_Request.context.Filter && getExpenseList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? getExpenseList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (getExpenseList_Request.context.Filter && getExpenseList_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? getExpenseList_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (getExpenseList_Request.context.Filter && getExpenseList_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? getExpenseList_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Expense/allexpense_list?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Expense_Expense_Master_getExpenseList.getExpenseList_ResponseHandler);
        return true;
    },
    
    getExpenseList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getExpenseList_ResponseObject = new getExpenseListResponse(responseData, "JSON");
            Expense_Expense_Master_getExpenseList.callbackfunction(getExpenseList_ResponseObject, textStatus);
        }
        else {
            Expense_Expense_Master_getExpenseList.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, FilterrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new getExpenseListRequestcontext();
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
        var param_filterby_option = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Option')) ? FilterrequestObject["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Code')) ? FilterrequestObject["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_FromValue')) ? FilterrequestObject["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_ToValue')) ? FilterrequestObject["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Expense/allexpense_list?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
