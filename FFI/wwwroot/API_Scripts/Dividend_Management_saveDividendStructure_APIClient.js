var DividendManagement_Dividend_Management_saveDividendStructure = {
    /*
     Function to invoke API
     Notes:
     Resource: Dividend_Management
     Description: saveDividendStructure
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveDividendStructure_Request, callbackHandler)
    {
        var request = new saveDividendStructureRequest(saveDividendStructure_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/newDividendStructure";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, DividendManagement_Dividend_Management_saveDividendStructure.saveDividendStructure_ResponseHandler);
        return true;
    },
    
    saveDividendStructure_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveDividendStructure_ResponseObject = new saveDividendStructureResponse(responseData, "JSON");
            DividendManagement_Dividend_Management_saveDividendStructure.callbackfunction(saveDividendStructure_ResponseObject, textStatus);
        }
        else {
            DividendManagement_Dividend_Management_saveDividendStructure.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveDividendStructureRequestcontext();
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
        
        var request = new saveDividendStructureRequest();
        request.context = new saveDividendStructureRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/newDividendStructure";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
