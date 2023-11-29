var CreditIssue_CreditIssue_master_savePaymentCollection_CreditIssue = {
    /*
     Function to invoke API
     Notes:
     Resource: CreditIssue_master
     Description: savePaymentCollection_CreditIssue
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (savePaymentCollection_CreditIssue_Request, callbackHandler)
    {
        var request = new savePaymentCollection_CreditIssueRequest(savePaymentCollection_CreditIssue_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CreditIssue/newsavePaymentCollection";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CreditIssue_CreditIssue_master_savePaymentCollection_CreditIssue.savePaymentCollection_CreditIssue_ResponseHandler);
        return true;
    },
    
    savePaymentCollection_CreditIssue_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var savePaymentCollection_CreditIssue_ResponseObject = new savePaymentCollection_CreditIssueResponse(responseData, "JSON");
            CreditIssue_CreditIssue_master_savePaymentCollection_CreditIssue.callbackfunction(savePaymentCollection_CreditIssue_ResponseObject, textStatus);
        }
        else {
            CreditIssue_CreditIssue_master_savePaymentCollection_CreditIssue.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new savePaymentCollection_CreditIssueRequestcontext();
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
        
        var request = new savePaymentCollection_CreditIssueRequest();
        request.context = new savePaymentCollection_CreditIssueRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CreditIssue/newsavePaymentCollection";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
