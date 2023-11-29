var LRS_LRS_LOAN_saveProcessFarmerLoanApp = {
    /*
     Function to invoke API
     Notes:
     Resource: LRS_LOAN
     Description: saveProcessFarmerLoanApp
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveProcessFarmerLoanApp_Request, callbackHandler)
    {
        var request = new saveProcessFarmerLoanAppRequest(saveProcessFarmerLoanApp_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LRS/newProcessFarmerLoanApp";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, LRS_LRS_LOAN_saveProcessFarmerLoanApp.saveProcessFarmerLoanApp_ResponseHandler);
        return true;
    },
    
    saveProcessFarmerLoanApp_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveProcessFarmerLoanApp_ResponseObject = new saveProcessFarmerLoanAppResponse(JSON.parse(responseData), "JSON");
            LRS_LRS_LOAN_saveProcessFarmerLoanApp.callbackfunction(saveProcessFarmerLoanApp_ResponseObject, textStatus);
        }
        else {
            LRS_LRS_LOAN_saveProcessFarmerLoanApp.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveProcessFarmerLoanAppRequestcontext();
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
        
        var request = new saveProcessFarmerLoanAppRequest();
        request.context = new saveProcessFarmerLoanAppRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/LRS/newProcessFarmerLoanApp";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
