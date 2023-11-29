var PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_savePaymentAdvice = {
    /*
     Function to invoke API
     Notes:
     Resource: PAWHS_PaymentAdvice
     Description: PAWHS_savePaymentAdvice
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_savePaymentAdvice_Request, callbackHandler)
    {
        var request = new PAWHS_savePaymentAdviceRequest(PAWHS_savePaymentAdvice_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSPaymentAdvice/new_pawhs_payment_advice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_savePaymentAdvice.PAWHS_savePaymentAdvice_ResponseHandler);
        return true;
    },
    
    PAWHS_savePaymentAdvice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_savePaymentAdvice_ResponseObject = new PAWHS_savePaymentAdviceResponse(responseData, "JSON");
            PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_savePaymentAdvice.callbackfunction(PAWHS_savePaymentAdvice_ResponseObject, textStatus);
        }
        else {
            PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_savePaymentAdvice.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_savePaymentAdviceRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Header = HeaderrequestObject;
        contextrequestObject.Detail = DetailrequestObjectArray;
        
        var request = new PAWHS_savePaymentAdviceRequest();
        request.context = new PAWHS_savePaymentAdviceRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSPaymentAdvice/new_pawhs_payment_advice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
