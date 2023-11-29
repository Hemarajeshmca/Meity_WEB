var BonusPayment_Bonus_Payment_saveBonusUpdate = {
    /*
     Function to invoke API
     Notes:
     Resource: Bonus_Payment
     Description: saveBonusUpdate
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveBonusUpdate_Request, callbackHandler)
    {
        var request = new saveBonusUpdateRequest(saveBonusUpdate_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BonusPayment/newsaveBonusUpdate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, BonusPayment_Bonus_Payment_saveBonusUpdate.saveBonusUpdate_ResponseHandler);
        return true;
    },
    
    saveBonusUpdate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveBonusUpdate_ResponseObject = new saveBonusUpdateResponse(responseData, "JSON");
            BonusPayment_Bonus_Payment_saveBonusUpdate.callbackfunction(saveBonusUpdate_ResponseObject, textStatus);
        }
        else {
            BonusPayment_Bonus_Payment_saveBonusUpdate.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, BonusDtlrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveBonusUpdateRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.BonusDtl = BonusDtlrequestObjectArray;
        
        var request = new saveBonusUpdateRequest();
        request.context = new saveBonusUpdateRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BonusPayment/newsaveBonusUpdate";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
