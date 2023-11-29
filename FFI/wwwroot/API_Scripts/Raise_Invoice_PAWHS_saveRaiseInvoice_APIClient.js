var RaiseInvoice_Raise_Invoice_PAWHS_saveRaiseInvoice = {
    /*
     Function to invoke API
     Notes:
     Resource: Raise_Invoice
     Description: PAWHS_saveRaiseInvoice
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveRaiseInvoice_Request, callbackHandler)
    {
        var request = new PAWHS_saveRaiseInvoiceRequest(PAWHS_saveRaiseInvoice_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RaiseInvoice/new_raise_invoice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, RaiseInvoice_Raise_Invoice_PAWHS_saveRaiseInvoice.PAWHS_saveRaiseInvoice_ResponseHandler);
        return true;
    },
    
    PAWHS_saveRaiseInvoice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveRaiseInvoice_ResponseObject = new PAWHS_saveRaiseInvoiceResponse(responseData, "JSON");
            RaiseInvoice_Raise_Invoice_PAWHS_saveRaiseInvoice.callbackfunction(PAWHS_saveRaiseInvoice_ResponseObject, textStatus);
        }
        else {
            RaiseInvoice_Raise_Invoice_PAWHS_saveRaiseInvoice.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, InvoiceDetailsrequestObjectArray, TaxDetailsrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_saveRaiseInvoiceRequestcontext();
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
        contextrequestObject.InvoiceDetails = InvoiceDetailsrequestObjectArray;
        contextrequestObject.TaxDetails = TaxDetailsrequestObjectArray;
        
        var request = new PAWHS_saveRaiseInvoiceRequest();
        request.context = new PAWHS_saveRaiseInvoiceRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RaiseInvoice/new_raise_invoice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
