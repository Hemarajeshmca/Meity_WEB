var BonusPayment_Bonus_Payment_saveBonusPayment = {
    /*
     Function to invoke API
     Notes:
     Resource: Bonus_Payment
     Description: saveBonusPayment
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveBonusPayment_Request, callbackHandler)
    {
        var request = new saveBonusPaymentRequest(saveBonusPayment_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BonusPayment/newBonusPayment";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, BonusPayment_Bonus_Payment_saveBonusPayment.saveBonusPayment_ResponseHandler);
        return true;
    },
    
    saveBonusPayment_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveBonusPayment_ResponseObject = new saveBonusPaymentResponse(responseData, "JSON");
            BonusPayment_Bonus_Payment_saveBonusPayment.callbackfunction(saveBonusPayment_ResponseObject, textStatus);
        }
        else {
            BonusPayment_Bonus_Payment_saveBonusPayment.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveBonusPaymentRequestcontext();
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
        
        var request = new saveBonusPaymentRequest();
        request.context = new saveBonusPaymentRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BonusPayment/newBonusPayment";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
