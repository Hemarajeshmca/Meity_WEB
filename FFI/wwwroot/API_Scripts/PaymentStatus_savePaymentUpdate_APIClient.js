var PaymentStatusUpdate_PaymentStatus_savePaymentUpdate = {
    /*
     Function to invoke API
     Notes:
     Resource: PaymentStatus
     Description: savePaymentUpdate
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (savePaymentUpdate_Request, callbackHandler)
    {
        var request = new savePaymentUpdateRequest(savePaymentUpdate_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentStatusUpdate/newpaymentupdate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, PaymentStatusUpdate_PaymentStatus_savePaymentUpdate.savePaymentUpdate_ResponseHandler);
        return true;
    },
    
    savePaymentUpdate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var savePaymentUpdate_ResponseObject = new savePaymentUpdateResponse(responseData, "JSON");
            PaymentStatusUpdate_PaymentStatus_savePaymentUpdate.callbackfunction(savePaymentUpdate_ResponseObject, textStatus);
        }
        else {
            PaymentStatusUpdate_PaymentStatus_savePaymentUpdate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new savePaymentUpdateRequestcontext();
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
        
        var request = new savePaymentUpdateRequest();
        request.context = new savePaymentUpdateRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentStatusUpdate/newpaymentupdate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
