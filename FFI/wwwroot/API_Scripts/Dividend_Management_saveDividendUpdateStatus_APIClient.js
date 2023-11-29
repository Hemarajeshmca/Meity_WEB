var DividendManagement_Dividend_Management_saveDividendUpdateStatus = {
    /*
     Function to invoke API
     Notes:
     Resource: Dividend_Management
     Description: saveDividendUpdateStatus
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveDividendUpdateStatus_Request, callbackHandler)
    {
        var request = new saveDividendUpdateStatusRequest(saveDividendUpdateStatus_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/newDividendUpdateStatus";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, DividendManagement_Dividend_Management_saveDividendUpdateStatus.saveDividendUpdateStatus_ResponseHandler);
        return true;
    },
    
    saveDividendUpdateStatus_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveDividendUpdateStatus_ResponseObject = new saveDividendUpdateStatusResponse(responseData, "JSON");
            DividendManagement_Dividend_Management_saveDividendUpdateStatus.callbackfunction(saveDividendUpdateStatus_ResponseObject, textStatus);
        }
        else {
            DividendManagement_Dividend_Management_saveDividendUpdateStatus.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveDividendUpdateStatusRequestcontext();
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
        
        var request = new saveDividendUpdateStatusRequest();
        request.context = new saveDividendUpdateStatusRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/newDividendUpdateStatus";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
