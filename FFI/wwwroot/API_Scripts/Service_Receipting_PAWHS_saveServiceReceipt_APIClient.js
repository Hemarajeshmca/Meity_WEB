var ServiceReceipting_Service_Receipting_PAWHS_saveServiceReceipt = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Receipting
     Description: PAWHS_saveServiceReceipt
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveServiceReceipt_Request, callbackHandler)
    {
        var request = new PAWHS_saveServiceReceiptRequest(PAWHS_saveServiceReceipt_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceReceipting/new_pawhs_service_receipting";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ServiceReceipting_Service_Receipting_PAWHS_saveServiceReceipt.PAWHS_saveServiceReceipt_ResponseHandler);
        return true;
    },
    
    PAWHS_saveServiceReceipt_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveServiceReceipt_ResponseObject = new PAWHS_saveServiceReceiptResponse(responseData, "JSON");
            ServiceReceipting_Service_Receipting_PAWHS_saveServiceReceipt.callbackfunction(PAWHS_saveServiceReceipt_ResponseObject, textStatus);
        }
        else {
            ServiceReceipting_Service_Receipting_PAWHS_saveServiceReceipt.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveServiceReceiptRequestcontext();
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
        
        var request = new PAWHS_saveServiceReceiptRequest();
        request.context = new PAWHS_saveServiceReceiptRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceReceipting/new_pawhs_service_receipting";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
