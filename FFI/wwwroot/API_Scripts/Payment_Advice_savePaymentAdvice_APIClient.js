var PaymentAdvice_Payment_Advice_savePaymentAdvice = {
    /*
     Function to invoke API
     Notes:
     Resource: Payment_Advice
     Description: savePaymentAdvice
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (savePaymentAdvice_Request, callbackHandler)
    {
        var request = new savePaymentAdviceRequest(savePaymentAdvice_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentAdvice/newpayment_advice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, PaymentAdvice_Payment_Advice_savePaymentAdvice.savePaymentAdvice_ResponseHandler);
        return true;
    },
    
    savePaymentAdvice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var savePaymentAdvice_ResponseObject = new savePaymentAdviceResponse(responseData, "JSON");
            PaymentAdvice_Payment_Advice_savePaymentAdvice.callbackfunction(savePaymentAdvice_ResponseObject, textStatus);
        }
        else {
            PaymentAdvice_Payment_Advice_savePaymentAdvice.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, summaryrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new savePaymentAdviceRequestcontext();
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
        contextrequestObject.summary = summaryrequestObject;
        
        var request = new savePaymentAdviceRequest();
        request.context = new savePaymentAdviceRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentAdvice/newpayment_advice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
