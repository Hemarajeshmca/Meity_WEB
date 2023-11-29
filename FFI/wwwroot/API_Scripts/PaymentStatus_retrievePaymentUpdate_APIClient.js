var PaymentStatusUpdate_PaymentStatus_retrievePaymentUpdate = {
    /*
     Function to invoke API
     Notes:
     Resource: PaymentStatus
     Description: retrievePaymentUpdate
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrievePaymentUpdate_Request, callbackHandler)
    {
        var param_orgnid = (retrievePaymentUpdate_Request.context && retrievePaymentUpdate_Request.context.hasOwnProperty('orgnId')) ? retrievePaymentUpdate_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrievePaymentUpdate_Request.context && retrievePaymentUpdate_Request.context.hasOwnProperty('locnId')) ? retrievePaymentUpdate_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrievePaymentUpdate_Request.context && retrievePaymentUpdate_Request.context.hasOwnProperty('userId')) ? retrievePaymentUpdate_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrievePaymentUpdate_Request.context && retrievePaymentUpdate_Request.context.hasOwnProperty('localeId')) ? retrievePaymentUpdate_Request.context["localeId"] : null; //Unicode string(100)
        var param_payment_status = (retrievePaymentUpdate_Request.context.Header && retrievePaymentUpdate_Request.context.Header.hasOwnProperty('payment_status')) ? retrievePaymentUpdate_Request.context.Header["payment_status"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentStatusUpdate/payment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&payment_status=" + param_payment_status + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, PaymentStatusUpdate_PaymentStatus_retrievePaymentUpdate.retrievePaymentUpdate_ResponseHandler);
        return true;
    },
    
    retrievePaymentUpdate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrievePaymentUpdate_ResponseObject = new retrievePaymentUpdateResponse(responseData, "JSON");
            PaymentStatusUpdate_PaymentStatus_retrievePaymentUpdate.callbackfunction(retrievePaymentUpdate_ResponseObject, textStatus);
        }
        else {
            PaymentStatusUpdate_PaymentStatus_retrievePaymentUpdate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrievePaymentUpdateRequestcontext();
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
        var param_payment_status = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('payment_status')) ? HeaderrequestObject["payment_status"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentStatusUpdate/payment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&payment_status=" + param_payment_status + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
