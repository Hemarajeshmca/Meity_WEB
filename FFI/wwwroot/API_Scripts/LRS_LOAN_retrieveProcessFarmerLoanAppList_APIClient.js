var LRS_LRS_LOAN_retrieveProcessFarmerLoanAppList = {
    /*
     Function to invoke API
     Notes:
     Resource: LRS_LOAN
     Description: retrieveProcessFarmerLoanAppList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveProcessFarmerLoanAppList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveProcessFarmerLoanAppList_Request.context && retrieveProcessFarmerLoanAppList_Request.context.hasOwnProperty('orgnId')) ? retrieveProcessFarmerLoanAppList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveProcessFarmerLoanAppList_Request.context && retrieveProcessFarmerLoanAppList_Request.context.hasOwnProperty('locnId')) ? retrieveProcessFarmerLoanAppList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveProcessFarmerLoanAppList_Request.context && retrieveProcessFarmerLoanAppList_Request.context.hasOwnProperty('userId')) ? retrieveProcessFarmerLoanAppList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveProcessFarmerLoanAppList_Request.context && retrieveProcessFarmerLoanAppList_Request.context.hasOwnProperty('localeId')) ? retrieveProcessFarmerLoanAppList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveProcessFarmerLoanAppList_Request.context.Filter && retrieveProcessFarmerLoanAppList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveProcessFarmerLoanAppList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveProcessFarmerLoanAppList_Request.context.Filter && retrieveProcessFarmerLoanAppList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveProcessFarmerLoanAppList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveProcessFarmerLoanAppList_Request.context.Filter && retrieveProcessFarmerLoanAppList_Request.context.Filter.hasOwnProperty('FilterBy_Fromvalue')) ? retrieveProcessFarmerLoanAppList_Request.context.Filter["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveProcessFarmerLoanAppList_Request.context.Filter && retrieveProcessFarmerLoanAppList_Request.context.Filter.hasOwnProperty('FilterBy_Tovalue')) ? retrieveProcessFarmerLoanAppList_Request.context.Filter["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LRS/allprocess_farmer_loan?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, LRS_LRS_LOAN_retrieveProcessFarmerLoanAppList.retrieveProcessFarmerLoanAppList_ResponseHandler);
        return true;
    },
    
    retrieveProcessFarmerLoanAppList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveProcessFarmerLoanAppList_ResponseObject = new retrieveProcessFarmerLoanAppListResponse(JSON.parse(responseData), "JSON");
            LRS_LRS_LOAN_retrieveProcessFarmerLoanAppList.callbackfunction(retrieveProcessFarmerLoanAppList_ResponseObject, textStatus);
        }
        else {
            LRS_LRS_LOAN_retrieveProcessFarmerLoanAppList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveProcessFarmerLoanAppListRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (retrieveProcessFarmerLoanAppList_Request.context && retrieveProcessFarmerLoanAppList_Request.context.hasOwnProperty('orgnId')) ? retrieveProcessFarmerLoanAppList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveProcessFarmerLoanAppList_Request.context && retrieveProcessFarmerLoanAppList_Request.context.hasOwnProperty('locnId')) ? retrieveProcessFarmerLoanAppList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveProcessFarmerLoanAppList_Request.context && retrieveProcessFarmerLoanAppList_Request.context.hasOwnProperty('userId')) ? retrieveProcessFarmerLoanAppList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveProcessFarmerLoanAppList_Request.context && retrieveProcessFarmerLoanAppList_Request.context.hasOwnProperty('localeId')) ? retrieveProcessFarmerLoanAppList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveProcessFarmerLoanAppList_Request.context.Filter && retrieveProcessFarmerLoanAppList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveProcessFarmerLoanAppList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveProcessFarmerLoanAppList_Request.context.Filter && retrieveProcessFarmerLoanAppList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveProcessFarmerLoanAppList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveProcessFarmerLoanAppList_Request.context.Filter && retrieveProcessFarmerLoanAppList_Request.context.Filter.hasOwnProperty('FilterBy_Fromvalue')) ? retrieveProcessFarmerLoanAppList_Request.context.Filter["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveProcessFarmerLoanAppList_Request.context.Filter && retrieveProcessFarmerLoanAppList_Request.context.Filter.hasOwnProperty('FilterBy_Tovalue')) ? retrieveProcessFarmerLoanAppList_Request.context.Filter["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LRS/allprocess_farmer_loan?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
