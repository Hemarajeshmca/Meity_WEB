var Invoice_Invoice_master_saveInvoice = {
    /*
     Function to invoke API
     Notes:
     Resource: Invoice_master
     Description: saveInvoice
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveInvoice_Request, callbackHandler)
    {
        var request = new saveInvoiceRequest(saveInvoice_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/newsaveInvoice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Invoice_Invoice_master_saveInvoice.saveInvoice_ResponseHandler);
        return true;
    },
    
    saveInvoice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveInvoice_ResponseObject = new saveInvoiceResponse(responseData, "JSON");
            Invoice_Invoice_master_saveInvoice.callbackfunction(saveInvoice_ResponseObject, textStatus);
        }
        else {
            Invoice_Invoice_master_saveInvoice.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, InvoiceDetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveInvoiceRequestcontext();
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
        contextrequestObject.InvoiceDetail = InvoiceDetailrequestObjectArray;
        
        var request = new saveInvoiceRequest();
        request.context = new saveInvoiceRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/newsaveInvoice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
