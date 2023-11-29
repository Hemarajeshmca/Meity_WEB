var CustomerRegistration_Customer_Registration_saveCustomerReg = {
    /*
     Function to invoke API
     Notes:
     Resource: Customer_Registration
     Description: saveCustomerReg
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCustomerReg_Request, callbackHandler)
    {
        var request = new saveCustomerRegRequest(saveCustomerReg_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CustomerRegistration/new_customer_reg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CustomerRegistration_Customer_Registration_saveCustomerReg.saveCustomerReg_ResponseHandler);
        return true;
    },
    
    saveCustomerReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCustomerReg_ResponseObject = new saveCustomerRegResponse(responseData, "JSON");
            CustomerRegistration_Customer_Registration_saveCustomerReg.callbackfunction(saveCustomerReg_ResponseObject, textStatus);
        }
        else {
            CustomerRegistration_Customer_Registration_saveCustomerReg.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveCustomerRegRequestcontext();
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
        
        var request = new saveCustomerRegRequest();
        request.context = new saveCustomerRegRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CustomerRegistration/new_customer_reg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
