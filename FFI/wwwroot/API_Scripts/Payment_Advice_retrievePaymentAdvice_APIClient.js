var PaymentAdvice_Payment_Advice_retrievePaymentAdvice = {
    /*
     Function to invoke API
     Notes:
     Resource: Payment_Advice
     Description: retrievePaymentAdvice
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrievePaymentAdvice_Request, callbackHandler)
    {
        var param_orgnid = (retrievePaymentAdvice_Request.context && retrievePaymentAdvice_Request.context.hasOwnProperty('orgnId')) ? retrievePaymentAdvice_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrievePaymentAdvice_Request.context && retrievePaymentAdvice_Request.context.hasOwnProperty('locnId')) ? retrievePaymentAdvice_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrievePaymentAdvice_Request.context && retrievePaymentAdvice_Request.context.hasOwnProperty('userId')) ? retrievePaymentAdvice_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrievePaymentAdvice_Request.context && retrievePaymentAdvice_Request.context.hasOwnProperty('localeId')) ? retrievePaymentAdvice_Request.context["localeId"] : null; //Unicode string(100)
        var param_paymenthead_rowid = (retrievePaymentAdvice_Request.context.Header && retrievePaymentAdvice_Request.context.Header.hasOwnProperty('paymenthead_rowid')) ? retrievePaymentAdvice_Request.context.Header["paymenthead_rowid"] : null; //Integer(32)
        var param_payment_no = (retrievePaymentAdvice_Request.context.Header && retrievePaymentAdvice_Request.context.Header.hasOwnProperty('payment_no')) ? retrievePaymentAdvice_Request.context.Header["payment_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentAdvice/payment_advice?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&paymenthead_rowid=" + param_paymenthead_rowid + "&payment_no=" + param_payment_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, PaymentAdvice_Payment_Advice_retrievePaymentAdvice.retrievePaymentAdvice_ResponseHandler);
        return true;
    },
    
    retrievePaymentAdvice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrievePaymentAdvice_ResponseObject = new retrievePaymentAdviceResponse(responseData, "JSON");
            PaymentAdvice_Payment_Advice_retrievePaymentAdvice.callbackfunction(retrievePaymentAdvice_ResponseObject, textStatus);
        }
        else {
            PaymentAdvice_Payment_Advice_retrievePaymentAdvice.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, OverAllBillEntryrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrievePaymentAdviceRequestcontext();
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
        var param_paymenthead_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('paymenthead_rowid')) ? HeaderrequestObject["paymenthead_rowid"] : null; //Integer(32)
        var param_payment_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('payment_no')) ? HeaderrequestObject["payment_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentAdvice/payment_advice?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&paymenthead_rowid=" + param_paymenthead_rowid + "&payment_no=" + param_payment_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
