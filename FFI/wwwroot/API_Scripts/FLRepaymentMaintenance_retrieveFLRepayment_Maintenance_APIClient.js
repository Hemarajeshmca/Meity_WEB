var FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Maintenance = {
    /*
     Function to invoke API
     Notes:
     Resource: FLRepaymentMaintenance
     Description: retrieveFLRepayment_Maintenance
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFLRepayment_Maintenance_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFLRepayment_Maintenance_Request.context && retrieveFLRepayment_Maintenance_Request.context.hasOwnProperty('orgnId')) ? retrieveFLRepayment_Maintenance_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFLRepayment_Maintenance_Request.context && retrieveFLRepayment_Maintenance_Request.context.hasOwnProperty('locnId')) ? retrieveFLRepayment_Maintenance_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFLRepayment_Maintenance_Request.context && retrieveFLRepayment_Maintenance_Request.context.hasOwnProperty('userId')) ? retrieveFLRepayment_Maintenance_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFLRepayment_Maintenance_Request.context && retrieveFLRepayment_Maintenance_Request.context.hasOwnProperty('localeId')) ? retrieveFLRepayment_Maintenance_Request.context["localeId"] : null; //Unicode string(100)
        var param_loan_no = (retrieveFLRepayment_Maintenance_Request.context.Header && retrieveFLRepayment_Maintenance_Request.context.Header.hasOwnProperty('loan_no')) ? retrieveFLRepayment_Maintenance_Request.context.Header["loan_no"] : null; //Unicode string(50)
        var param_loanrepayment_rowid = (retrieveFLRepayment_Maintenance_Request.context.Header && retrieveFLRepayment_Maintenance_Request.context.Header.hasOwnProperty('loanrepayment_rowid')) ? retrieveFLRepayment_Maintenance_Request.context.Header["loanrepayment_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRepayment_Maintenance/flrepaymentmaint?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_no=" + param_loan_no + "&loanrepayment_rowid=" + param_loanrepayment_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Maintenance.retrieveFLRepayment_Maintenance_ResponseHandler);
        return true;
    },
    
    retrieveFLRepayment_Maintenance_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFLRepayment_Maintenance_ResponseObject = new retrieveFLRepayment_MaintenanceResponse(responseData, "JSON");
            FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Maintenance.callbackfunction(retrieveFLRepayment_Maintenance_ResponseObject, textStatus);
        }
        else {
            FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Maintenance.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFLRepayment_MaintenanceRequestcontext();
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
        var param_loan_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loan_no')) ? HeaderrequestObject["loan_no"] : null; //Unicode string(50)
        var param_loanrepayment_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loanrepayment_rowid')) ? HeaderrequestObject["loanrepayment_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRepayment_Maintenance/flrepaymentmaint?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_no=" + param_loan_no + "&loanrepayment_rowid=" + param_loanrepayment_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
