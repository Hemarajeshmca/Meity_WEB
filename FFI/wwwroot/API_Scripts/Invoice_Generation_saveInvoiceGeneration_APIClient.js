var InvoiceGeneration_Invoice_Generation_saveInvoiceGeneration = {
    /*
     Function to invoke API
     Notes:
     Resource: Invoice_Generation
     Description: saveInvoiceGeneration
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveInvoiceGeneration_Request, callbackHandler)
    {
        var request = new saveInvoiceGenerationRequest(saveInvoiceGeneration_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InvoiceGeneration/newsaveInputCenter";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, InvoiceGeneration_Invoice_Generation_saveInvoiceGeneration.saveInvoiceGeneration_ResponseHandler);
        return true;
    },
    
    saveInvoiceGeneration_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveInvoiceGeneration_ResponseObject = new saveInvoiceGenerationResponse(responseData, "JSON");
            InvoiceGeneration_Invoice_Generation_saveInvoiceGeneration.callbackfunction(saveInvoiceGeneration_ResponseObject, textStatus);
        }
        else {
            InvoiceGeneration_Invoice_Generation_saveInvoiceGeneration.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, GeneraterequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveInvoiceGenerationRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Generate = GeneraterequestObjectArray;
        
        var request = new saveInvoiceGenerationRequest();
        request.context = new saveInvoiceGenerationRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InvoiceGeneration/newsaveInputCenter";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
