var FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Mode = {
    /*
     Function to invoke API
     Notes:
     Resource: FLRepaymentMaintenance
     Description: retrieveFLRepayment_Mode
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFLRepayment_Mode_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFLRepayment_Mode_Request.context && retrieveFLRepayment_Mode_Request.context.hasOwnProperty('orgnId')) ? retrieveFLRepayment_Mode_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFLRepayment_Mode_Request.context && retrieveFLRepayment_Mode_Request.context.hasOwnProperty('locnId')) ? retrieveFLRepayment_Mode_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFLRepayment_Mode_Request.context && retrieveFLRepayment_Mode_Request.context.hasOwnProperty('userId')) ? retrieveFLRepayment_Mode_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFLRepayment_Mode_Request.context && retrieveFLRepayment_Mode_Request.context.hasOwnProperty('localeId')) ? retrieveFLRepayment_Mode_Request.context["localeId"] : null; //Unicode string(100)
        var param_loan_no = (retrieveFLRepayment_Mode_Request.context.Header && retrieveFLRepayment_Mode_Request.context.Header.hasOwnProperty('loan_no')) ? retrieveFLRepayment_Mode_Request.context.Header["loan_no"] : null; //Unicode string(50)
        var param_payment_mode = (retrieveFLRepayment_Mode_Request.context.Header && retrieveFLRepayment_Mode_Request.context.Header.hasOwnProperty('payment_mode')) ? retrieveFLRepayment_Mode_Request.context.Header["payment_mode"] : null; //Unicode string(50)
        var param_start_date = (retrieveFLRepayment_Mode_Request.context.Header && retrieveFLRepayment_Mode_Request.context.Header.hasOwnProperty('start_date')) ? retrieveFLRepayment_Mode_Request.context.Header["start_date"] : null; //Unicode string(20)
        var param_end_date = (retrieveFLRepayment_Mode_Request.context.Header && retrieveFLRepayment_Mode_Request.context.Header.hasOwnProperty('end_date')) ? retrieveFLRepayment_Mode_Request.context.Header["end_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRepayment_Maintenance/flrepaymentmode?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_no=" + param_loan_no + "&payment_mode=" + param_payment_mode + "&start_date=" + param_start_date + "&end_date=" + param_end_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Mode.retrieveFLRepayment_Mode_ResponseHandler);
        return true;
    },
    
    retrieveFLRepayment_Mode_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFLRepayment_Mode_ResponseObject = new retrieveFLRepayment_ModeResponse(responseData, "JSON");
            FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Mode.callbackfunction(retrieveFLRepayment_Mode_ResponseObject, textStatus);
        }
        else {
            FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Mode.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFLRepayment_ModeRequestcontext();
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
        var param_payment_mode = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('payment_mode')) ? HeaderrequestObject["payment_mode"] : null; //Unicode string(50)
        var param_start_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('start_date')) ? HeaderrequestObject["start_date"] : null; //Unicode string(20)
        var param_end_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('end_date')) ? HeaderrequestObject["end_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRepayment_Maintenance/flrepaymentmode?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_no=" + param_loan_no + "&payment_mode=" + param_payment_mode + "&start_date=" + param_start_date + "&end_date=" + param_end_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
