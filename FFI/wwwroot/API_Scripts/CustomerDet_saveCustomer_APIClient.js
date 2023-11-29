var Customer_CustomerDet_saveCustomer = {
    /*
     Function to invoke API
     Notes:
     Resource: CustomerDet
     Description: Save customer details
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCustomer_Request, callbackHandler)
    {
        var request = new saveCustomerRequest(saveCustomer_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Customer/newCustomerReg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Customer_CustomerDet_saveCustomer.saveCustomer_ResponseHandler);
        return true;
    },
    
    saveCustomer_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCustomer_ResponseObject = new saveCustomerResponse(responseData, "JSON");
            Customer_CustomerDet_saveCustomer.callbackfunction(saveCustomer_ResponseObject, textStatus);
        }
        else {
            Customer_CustomerDet_saveCustomer.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveCustomerRequestcontext();
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
        
        var request = new saveCustomerRequest();
        request.context = new saveCustomerRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Customer/newCustomerReg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
