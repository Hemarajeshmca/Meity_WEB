var CreditIssue_CreditIssue_master_saveCreditIssue = {
    /*
     Function to invoke API
     Notes:
     Resource: CreditIssue_master
     Description: saveCreditIssue
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCreditIssue_Request, callbackHandler)
    {
        var request = new saveCreditIssueRequest(saveCreditIssue_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CreditIssue/newsaveCreditIssue";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CreditIssue_CreditIssue_master_saveCreditIssue.saveCreditIssue_ResponseHandler);
        return true;
    },
    
    saveCreditIssue_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCreditIssue_ResponseObject = new saveCreditIssueResponse(responseData, "JSON");
            CreditIssue_CreditIssue_master_saveCreditIssue.callbackfunction(saveCreditIssue_ResponseObject, textStatus);
        }
        else {
            CreditIssue_CreditIssue_master_saveCreditIssue.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, CreditIssueDetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveCreditIssueRequestcontext();
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
        contextrequestObject.CreditIssueDetail = CreditIssueDetailrequestObjectArray;
        
        var request = new saveCreditIssueRequest();
        request.context = new saveCreditIssueRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CreditIssue/newsaveCreditIssue";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
