var InvoiceToCM_Invoice_To_CM_saveInvoiceToCM = {
    /*
     Function to invoke API
     Notes:
     Resource: Invoice_To_CM
     Description: saveInvoiceToCM
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveInvoiceToCM_Request, callbackHandler)
    {
        var request = new saveInvoiceToCMRequest(saveInvoiceToCM_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InvoiceToCM/newInvoiceToCM";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, InvoiceToCM_Invoice_To_CM_saveInvoiceToCM.saveInvoiceToCM_ResponseHandler);
        return true;
    },
    
    saveInvoiceToCM_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveInvoiceToCM_ResponseObject = new saveInvoiceToCMResponse(responseData, "JSON");
            InvoiceToCM_Invoice_To_CM_saveInvoiceToCM.callbackfunction(saveInvoiceToCM_ResponseObject, textStatus);
        }
        else {
            InvoiceToCM_Invoice_To_CM_saveInvoiceToCM.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, SendInvoicerequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveInvoiceToCMRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.SendInvoice = SendInvoicerequestObjectArray;
        
        var request = new saveInvoiceToCMRequest();
        request.context = new saveInvoiceToCMRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InvoiceToCM/newInvoiceToCM";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
