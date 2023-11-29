var ServiceInvoice_Service_Invoice_PAWHS_saveServiceInvoice = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Invoice
     Description: PAWHS_saveServiceInvoice
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveServiceInvoice_Request, callbackHandler)
    {
        var request = new PAWHS_saveServiceInvoiceRequest(PAWHS_saveServiceInvoice_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceInvoice/pawhs_new_service_invoice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ServiceInvoice_Service_Invoice_PAWHS_saveServiceInvoice.PAWHS_saveServiceInvoice_ResponseHandler);
        return true;
    },
    
    PAWHS_saveServiceInvoice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveServiceInvoice_ResponseObject = new PAWHS_saveServiceInvoiceResponse(responseData, "JSON");
            ServiceInvoice_Service_Invoice_PAWHS_saveServiceInvoice.callbackfunction(PAWHS_saveServiceInvoice_ResponseObject, textStatus);
        }
        else {
            ServiceInvoice_Service_Invoice_PAWHS_saveServiceInvoice.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveServiceInvoiceRequestcontext();
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
        
        var request = new PAWHS_saveServiceInvoiceRequest();
        request.context = new PAWHS_saveServiceInvoiceRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceInvoice/pawhs_new_service_invoice";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
