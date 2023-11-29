var PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_getPaymentUpdate = {
    /*
     Function to invoke API
     Notes:
     Resource: PAWHS_PaymentStatusUpdate
     Description: PAWHS_getPaymentUpdate
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getPaymentUpdate_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getPaymentUpdate_Request.context && PAWHS_getPaymentUpdate_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getPaymentUpdate_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getPaymentUpdate_Request.context && PAWHS_getPaymentUpdate_Request.context.hasOwnProperty('locnId')) ? PAWHS_getPaymentUpdate_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getPaymentUpdate_Request.context && PAWHS_getPaymentUpdate_Request.context.hasOwnProperty('userId')) ? PAWHS_getPaymentUpdate_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getPaymentUpdate_Request.context && PAWHS_getPaymentUpdate_Request.context.hasOwnProperty('localeId')) ? PAWHS_getPaymentUpdate_Request.context["localeId"] : null; //Unicode string(100)
        var param_payment_status = (PAWHS_getPaymentUpdate_Request.context.Header && PAWHS_getPaymentUpdate_Request.context.Header.hasOwnProperty('payment_status')) ? PAWHS_getPaymentUpdate_Request.context.Header["payment_status"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSPaymentStatusUpdate/pawhs_payment_update?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&payment_status=" + param_payment_status + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_getPaymentUpdate.PAWHS_getPaymentUpdate_ResponseHandler);
        return true;
    },
    
    PAWHS_getPaymentUpdate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getPaymentUpdate_ResponseObject = new PAWHS_getPaymentUpdateResponse(responseData, "JSON");
            PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_getPaymentUpdate.callbackfunction(PAWHS_getPaymentUpdate_ResponseObject, textStatus);
        }
        else {
            PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_getPaymentUpdate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getPaymentUpdateRequestcontext();
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
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSPaymentStatusUpdate/pawhs_payment_update?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&payment_status=" + param_payment_status + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
