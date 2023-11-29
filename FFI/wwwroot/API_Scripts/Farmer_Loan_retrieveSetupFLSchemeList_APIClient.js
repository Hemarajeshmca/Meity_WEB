var FarmerLoan_Farmer_Loan_retrieveSetupFLSchemeList = {
    /*
     Function to invoke API
     Notes:
     Resource: Farmer_Loan
     Description: retrieveSetupFLSchemeList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveSetupFarmerLoanSchemeList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveSetupFarmerLoanSchemeList_Request.context && retrieveSetupFarmerLoanSchemeList_Request.context.hasOwnProperty('orgnId')) ? retrieveSetupFarmerLoanSchemeList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveSetupFarmerLoanSchemeList_Request.context && retrieveSetupFarmerLoanSchemeList_Request.context.hasOwnProperty('locnId')) ? retrieveSetupFarmerLoanSchemeList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveSetupFarmerLoanSchemeList_Request.context && retrieveSetupFarmerLoanSchemeList_Request.context.hasOwnProperty('userId')) ? retrieveSetupFarmerLoanSchemeList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveSetupFarmerLoanSchemeList_Request.context && retrieveSetupFarmerLoanSchemeList_Request.context.hasOwnProperty('localeId')) ? retrieveSetupFarmerLoanSchemeList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveSetupFarmerLoanSchemeList_Request.context.Filter && retrieveSetupFarmerLoanSchemeList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveSetupFarmerLoanSchemeList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveSetupFarmerLoanSchemeList_Request.context.Filter && retrieveSetupFarmerLoanSchemeList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveSetupFarmerLoanSchemeList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveSetupFarmerLoanSchemeList_Request.context.Filter && retrieveSetupFarmerLoanSchemeList_Request.context.Filter.hasOwnProperty('FilterBy_Fromvalue')) ? retrieveSetupFarmerLoanSchemeList_Request.context.Filter["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveSetupFarmerLoanSchemeList_Request.context.Filter && retrieveSetupFarmerLoanSchemeList_Request.context.Filter.hasOwnProperty('FilterBy_Tovalue')) ? retrieveSetupFarmerLoanSchemeList_Request.context.Filter["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/allsetup_loan_scheme?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FarmerLoan_Farmer_Loan_retrieveSetupFLSchemeList.retrieveSetupFLSchemeList_ResponseHandler);
        return true;
    },
    
    retrieveSetupFLSchemeList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveSetupFarmerLoanSchemeList_ResponseObject = new retrieveSetupFarmerLoanSchemeListResponse(responseData, "JSON");
            FarmerLoan_Farmer_Loan_retrieveSetupFLSchemeList.callbackfunction(retrieveSetupFarmerLoanSchemeList_ResponseObject, textStatus);
        }
        else {
            FarmerLoan_Farmer_Loan_retrieveSetupFLSchemeList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveSetupFarmerLoanSchemeListRequestcontext();
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
        var param_filterby_fromvalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Fromvalue')) ? FilterrequestObject["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Tovalue')) ? FilterrequestObject["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/allsetup_loan_scheme?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
