var SubventionMaster_subvention_master_get_subvention_loantype = {
    /*
     Function to invoke API
     Notes:
     Resource: subvention_master
     Description: get_subvention_loantype
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (get_subvention_loantype_Request, callbackHandler)
    {
        var param_orgnid = (get_subvention_loantype_Request.context && get_subvention_loantype_Request.context.hasOwnProperty('orgnId')) ? get_subvention_loantype_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (get_subvention_loantype_Request.context && get_subvention_loantype_Request.context.hasOwnProperty('locnId')) ? get_subvention_loantype_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (get_subvention_loantype_Request.context && get_subvention_loantype_Request.context.hasOwnProperty('userId')) ? get_subvention_loantype_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (get_subvention_loantype_Request.context && get_subvention_loantype_Request.context.hasOwnProperty('localeId')) ? get_subvention_loantype_Request.context["localeId"] : null; //Unicode string(100)
        var param_loan_type = (get_subvention_loantype_Request.context.Header && get_subvention_loantype_Request.context.Header.hasOwnProperty('loan_type')) ? get_subvention_loantype_Request.context.Header["loan_type"] : null; //Unicode string(50)
        var param_Interest_Paid_From = (get_subvention_loantype_Request.context.Header && get_subvention_loantype_Request.context.Header.hasOwnProperty('Interest_Paid_From')) ? get_subvention_loantype_Request.context.Header["Interest_Paid_From"] : null; //Unicode string(20)
        var param_Interest_Paid_To = (get_subvention_loantype_Request.context.Header && get_subvention_loantype_Request.context.Header.hasOwnProperty('Interest_Paid_To')) ? get_subvention_loantype_Request.context.Header["Interest_Paid_To"] : null; //Unicode string(20)
        var param_Loan_Disb_From = (get_subvention_loantype_Request.context.Header && get_subvention_loantype_Request.context.Header.hasOwnProperty('Loan_Disb_From')) ? get_subvention_loantype_Request.context.Header["Loan_Disb_From"] : null; //Unicode string(20)
        var param_Loan_Disb_To = (get_subvention_loantype_Request.context.Header && get_subvention_loantype_Request.context.Header.hasOwnProperty('Loan_Disb_to')) ? get_subvention_loantype_Request.context.Header["Loan_Disb_to"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/loan_type?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_type=" + param_loan_type + "&Interest_Paid_From=" + param_Interest_Paid_From + "&Interest_Paid_To=" + param_Interest_Paid_To + "&Loan_Disb_From=" + param_Loan_Disb_From + "&Loan_Disb_To=" + param_Loan_Disb_To + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, SubventionMaster_subvention_master_get_subvention_loantype.get_subvention_loantype_ResponseHandler);
        return true;
    },
    
    get_subvention_loantype_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var get_subvention_loantype_ResponseObject = new get_subvention_loantypeResponse(responseData, "JSON");
            SubventionMaster_subvention_master_get_subvention_loantype.callbackfunction(get_subvention_loantype_ResponseObject, textStatus);
        }
        else {
            SubventionMaster_subvention_master_get_subvention_loantype.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new get_subvention_loantypeRequestcontext();
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
        var param_loan_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loan_type')) ? HeaderrequestObject["loan_type"] : null; //Unicode string(50)
        var param_Interest_Paid_From = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('Interest_Paid_From')) ? HeaderrequestObject["Interest_Paid_From"] : null; //Unicode string(20)
        var param_Interest_Paid_To = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('Interest_Paid_To')) ? HeaderrequestObject["Interest_Paid_To"] : null; //Unicode string(20)
        var param_Loan_Disb_From = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('Loan_Disb_From')) ? HeaderrequestObject["Loan_Disb_From"] : null; //Unicode string(20)
        var param_Loan_Disb_To = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('Loan_Disb_to')) ? HeaderrequestObject["Loan_Disb_to"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/loan_type?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_type=" + param_loan_type + "&Interest_Paid_From=" + param_Interest_Paid_From + "&Interest_Paid_To=" + param_Interest_Paid_To + "&Loan_Disb_From=" + param_Loan_Disb_From + "&Loan_Disb_To=" + param_Loan_Disb_To + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
