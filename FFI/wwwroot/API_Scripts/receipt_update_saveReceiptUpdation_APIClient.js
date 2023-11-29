var ReceiptUpdation_receipt_update_saveReceiptUpdation = {
    /*
     Function to invoke API
     Notes:
     Resource: receipt_update
     Description: saveReceiptUpdation
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveReceiptUpdation_Request, callbackHandler)
    {
        var request = new saveReceiptUpdationRequest(saveReceiptUpdation_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReceiptUpdation/newReceiptUpdation";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ReceiptUpdation_receipt_update_saveReceiptUpdation.saveReceiptUpdation_ResponseHandler);
        return true;
    },
    
    saveReceiptUpdation_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveReceiptUpdation_ResponseObject = new saveReceiptUpdationResponse(responseData, "JSON");
            ReceiptUpdation_receipt_update_saveReceiptUpdation.callbackfunction(saveReceiptUpdation_ResponseObject, textStatus);
        }
        else {
            ReceiptUpdation_receipt_update_saveReceiptUpdation.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, Receipt_UpdationrequestObjectArray, Terms_and_ConditionsrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveReceiptUpdationRequestcontext();
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
        contextrequestObject.Receipt_Updation = Receipt_UpdationrequestObjectArray;
        contextrequestObject.Terms_and_Conditions = Terms_and_ConditionsrequestObjectArray;
        
        var request = new saveReceiptUpdationRequest();
        request.context = new saveReceiptUpdationRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReceiptUpdation/newReceiptUpdation";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
