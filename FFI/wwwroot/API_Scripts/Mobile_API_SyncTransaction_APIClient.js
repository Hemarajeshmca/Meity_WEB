var Mobile_Mobile_API_SyncTransaction = {
    /*
     Function to invoke API
     Notes:
     Resource: Mobile_API
     Description: SyncTransaction
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (SyncTransaction_Request, callbackHandler)
    {
        var request = new SyncTransactionRequest(SyncTransaction_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Mobile/synctransaction";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Mobile_Mobile_API_SyncTransaction.SyncTransaction_ResponseHandler);
        return true;
    },
    
    SyncTransaction_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var SyncTransaction_ResponseObject = new SyncTransactionResponse(responseData, "JSON");
            Mobile_Mobile_API_SyncTransaction.callbackfunction(SyncTransaction_ResponseObject, textStatus);
        }
        else {
            Mobile_Mobile_API_SyncTransaction.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, ListrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new SyncTransactionRequestcontext();
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
        contextrequestObject.List = ListrequestObjectArray;
        
        var request = new SyncTransactionRequest();
        request.context = new SyncTransactionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Mobile/synctransaction";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
