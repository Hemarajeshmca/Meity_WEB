var Invoice_Invoice_master_savePaymentCollection = {
    /*
     Function to invoke API
     Notes:
     Resource: Invoice_master
     Description: savePaymentCollection
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (savePaymentCollection_Request, callbackHandler)
    {
        var request = new savePaymentCollectionRequest(savePaymentCollection_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/newsavePaymentCollection";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Invoice_Invoice_master_savePaymentCollection.savePaymentCollection_ResponseHandler);
        return true;
    },
    
    savePaymentCollection_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var savePaymentCollection_ResponseObject = new savePaymentCollectionResponse(responseData, "JSON");
            Invoice_Invoice_master_savePaymentCollection.callbackfunction(savePaymentCollection_ResponseObject, textStatus);
        }
        else {
            Invoice_Invoice_master_savePaymentCollection.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new savePaymentCollectionRequestcontext();
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
        
        var request = new savePaymentCollectionRequest();
        request.context = new savePaymentCollectionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/newsavePaymentCollection";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
