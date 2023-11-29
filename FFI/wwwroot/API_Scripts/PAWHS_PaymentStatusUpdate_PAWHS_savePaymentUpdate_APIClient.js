var PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_savePaymentUpdate = {
    /*
     Function to invoke API
     Notes:
     Resource: PAWHS_PaymentStatusUpdate
     Description: PAWHS_savePaymentUpdate
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_savePaymentUpdate_Request, callbackHandler)
    {
        var request = new PAWHS_savePaymentUpdateRequest(PAWHS_savePaymentUpdate_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSPaymentStatusUpdate/new_pawhs_payment_update";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_savePaymentUpdate.PAWHS_savePaymentUpdate_ResponseHandler);
        return true;
    },
    
    PAWHS_savePaymentUpdate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_savePaymentUpdate_ResponseObject = new PAWHS_savePaymentUpdateResponse(responseData, "JSON");
            PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_savePaymentUpdate.callbackfunction(PAWHS_savePaymentUpdate_ResponseObject, textStatus);
        }
        else {
            PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_savePaymentUpdate.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, PaymentDtlrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_savePaymentUpdateRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.PaymentDtl = PaymentDtlrequestObjectArray;
        
        var request = new PAWHS_savePaymentUpdateRequest();
        request.context = new PAWHS_savePaymentUpdateRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSPaymentStatusUpdate/new_pawhs_payment_update";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
