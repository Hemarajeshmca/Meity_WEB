var PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_getPaymentAdvice = {
    /*
     Function to invoke API
     Notes:
     Resource: PAWHS_PaymentAdvice
     Description: PAWHS_getPaymentAdvice
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getPaymentAdvice_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getPaymentAdvice_Request.context && PAWHS_getPaymentAdvice_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getPaymentAdvice_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getPaymentAdvice_Request.context && PAWHS_getPaymentAdvice_Request.context.hasOwnProperty('locnId')) ? PAWHS_getPaymentAdvice_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getPaymentAdvice_Request.context && PAWHS_getPaymentAdvice_Request.context.hasOwnProperty('userId')) ? PAWHS_getPaymentAdvice_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getPaymentAdvice_Request.context && PAWHS_getPaymentAdvice_Request.context.hasOwnProperty('localeId')) ? PAWHS_getPaymentAdvice_Request.context["localeId"] : null; //Unicode string(100)
        var param_payment_rowid = (PAWHS_getPaymentAdvice_Request.context.Header && PAWHS_getPaymentAdvice_Request.context.Header.hasOwnProperty('payment_rowid')) ? PAWHS_getPaymentAdvice_Request.context.Header["payment_rowid"] : null; //Integer(32)
        var param_payment_id = (PAWHS_getPaymentAdvice_Request.context.Header && PAWHS_getPaymentAdvice_Request.context.Header.hasOwnProperty('payment_id')) ? PAWHS_getPaymentAdvice_Request.context.Header["payment_id"] : null; //Unicode string(100)
        var param_from_date = (PAWHS_getPaymentAdvice_Request.context.Header && PAWHS_getPaymentAdvice_Request.context.Header.hasOwnProperty('from_date')) ? PAWHS_getPaymentAdvice_Request.context.Header["from_date"] : null; //Unicode string(20)
        var param_to_date = (PAWHS_getPaymentAdvice_Request.context.Header && PAWHS_getPaymentAdvice_Request.context.Header.hasOwnProperty('to_date')) ? PAWHS_getPaymentAdvice_Request.context.Header["to_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSPaymentAdvice/aggregator_registration?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&payment_rowid=" + param_payment_rowid + "&payment_id=" + param_payment_id + "&from_date=" + param_from_date + "&to_date=" + param_to_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_getPaymentAdvice.PAWHS_getPaymentAdvice_ResponseHandler);
        return true;
    },
    
    PAWHS_getPaymentAdvice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getPaymentAdvice_ResponseObject = new PAWHS_getPaymentAdviceResponse(responseData, "JSON");
            PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_getPaymentAdvice.callbackfunction(PAWHS_getPaymentAdvice_ResponseObject, textStatus);
        }
        else {
            PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_getPaymentAdvice.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getPaymentAdviceRequestcontext();
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
        var param_payment_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('payment_rowid')) ? HeaderrequestObject["payment_rowid"] : null; //Integer(32)
        var param_payment_id = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('payment_id')) ? HeaderrequestObject["payment_id"] : null; //Unicode string(100)
        var param_from_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('from_date')) ? HeaderrequestObject["from_date"] : null; //Unicode string(20)
        var param_to_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('to_date')) ? HeaderrequestObject["to_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSPaymentAdvice/aggregator_registration?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&payment_rowid=" + param_payment_rowid + "&payment_id=" + param_payment_id + "&from_date=" + param_from_date + "&to_date=" + param_to_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
