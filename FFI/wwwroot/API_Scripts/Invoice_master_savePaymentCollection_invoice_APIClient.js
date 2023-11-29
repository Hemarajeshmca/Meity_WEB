var Invoice_Invoice_master_savePaymentCollection_invoice = {
    /*
     Function to invoke API
     Notes:
     Resource: Invoice_master
     Description: savePaymentCollection_invoice
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (savePaymentCollection_invoice_Request, callbackHandler)
    {
        var request = new savePaymentCollection_invoiceRequest(savePaymentCollection_invoice_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/newsavePaymentCollection";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Invoice_Invoice_master_savePaymentCollection_invoice.savePaymentCollection_invoice_ResponseHandler);
        return true;
    },
    
    savePaymentCollection_invoice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var savePaymentCollection_invoice_ResponseObject = new savePaymentCollection_invoiceResponse(responseData, "JSON");
            Invoice_Invoice_master_savePaymentCollection_invoice.callbackfunction(savePaymentCollection_invoice_ResponseObject, textStatus);
        }
        else {
            Invoice_Invoice_master_savePaymentCollection_invoice.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new savePaymentCollection_invoiceRequestcontext();
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
        
        var request = new savePaymentCollection_invoiceRequest();
        request.context = new savePaymentCollection_invoiceRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/newsavePaymentCollection";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
