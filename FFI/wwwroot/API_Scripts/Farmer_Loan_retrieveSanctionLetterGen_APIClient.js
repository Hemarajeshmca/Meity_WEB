var FarmerLoan_Farmer_Loan_retrieveSanctionLetterGen = {
    /*
     Function to invoke API
     Notes:
     Resource: Farmer_Loan
     Description: retrieveSanctionLetterGen
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveSanctionLetterGen_Request, callbackHandler)
    {
        var param_orgnid = (retrieveSanctionLetterGen_Request.context && retrieveSanctionLetterGen_Request.context.hasOwnProperty('orgnId')) ? retrieveSanctionLetterGen_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveSanctionLetterGen_Request.context && retrieveSanctionLetterGen_Request.context.hasOwnProperty('locnId')) ? retrieveSanctionLetterGen_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveSanctionLetterGen_Request.context && retrieveSanctionLetterGen_Request.context.hasOwnProperty('userId')) ? retrieveSanctionLetterGen_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveSanctionLetterGen_Request.context && retrieveSanctionLetterGen_Request.context.hasOwnProperty('localeId')) ? retrieveSanctionLetterGen_Request.context["localeId"] : null; //Unicode string(100)
        var param_status_option = (retrieveSanctionLetterGen_Request.context.Filter && retrieveSanctionLetterGen_Request.context.Filter.hasOwnProperty('status_option')) ? retrieveSanctionLetterGen_Request.context.Filter["status_option"] : null; //Unicode string(50)
        var param_fpoorgn_code = (retrieveSanctionLetterGen_Request.context.Filter && retrieveSanctionLetterGen_Request.context.Filter.hasOwnProperty('fpoorgn_code')) ? retrieveSanctionLetterGen_Request.context.Filter["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/sanc_letter_gen?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&status_option=" + param_status_option + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FarmerLoan_Farmer_Loan_retrieveSanctionLetterGen.retrieveSanctionLetterGen_ResponseHandler);
        return true;
    },
    
    retrieveSanctionLetterGen_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveSanctionLetterGen_ResponseObject = new retrieveSanctionLetterGenResponse(responseData, "JSON");
            FarmerLoan_Farmer_Loan_retrieveSanctionLetterGen.callbackfunction(retrieveSanctionLetterGen_ResponseObject, textStatus);
        }
        else {
            FarmerLoan_Farmer_Loan_retrieveSanctionLetterGen.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveSanctionLetterGenRequestcontext();
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
        var param_status_option = (FilterrequestObject && FilterrequestObject.hasOwnProperty('status_option')) ? FilterrequestObject["status_option"] : null; //Unicode string(50)
        var param_fpoorgn_code = (FilterrequestObject && FilterrequestObject.hasOwnProperty('fpoorgn_code')) ? FilterrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/sanc_letter_gen?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&status_option=" + param_status_option + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
