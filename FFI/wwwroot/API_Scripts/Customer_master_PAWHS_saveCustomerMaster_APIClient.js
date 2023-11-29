var CustomerMaster_Customer_master_PAWHS_saveCustomerMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: Customer_master
     Description: PAWHS_saveCustomerMaster
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveCustomerMaster_Request, callbackHandler)
    {
        var request = new PAWHS_saveCustomerMasterRequest(PAWHS_saveCustomerMaster_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CustomerMaster/new_customer_master";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CustomerMaster_Customer_master_PAWHS_saveCustomerMaster.PAWHS_saveCustomerMaster_ResponseHandler);
        return true;
    },
    
    PAWHS_saveCustomerMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveCustomerMaster_ResponseObject = new PAWHS_saveCustomerMasterResponse(responseData, "JSON");
            CustomerMaster_Customer_master_PAWHS_saveCustomerMaster.callbackfunction(PAWHS_saveCustomerMaster_ResponseObject, textStatus);
        }
        else {
            CustomerMaster_Customer_master_PAWHS_saveCustomerMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveCustomerMasterRequestcontext();
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
        
        var request = new PAWHS_saveCustomerMasterRequest();
        request.context = new PAWHS_saveCustomerMasterRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CustomerMaster/new_customer_master";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
