var DividendManagement_Dividend_Management_saveDividendRegister = {
    /*
     Function to invoke API
     Notes:
     Resource: Dividend_Management
     Description: saveDividendRegister
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveDividendRegister_Request, callbackHandler)
    {
        var request = new saveDividendRegisterRequest(saveDividendRegister_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/newDividendRegister";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, DividendManagement_Dividend_Management_saveDividendRegister.saveDividendRegister_ResponseHandler);
        return true;
    },
    
    saveDividendRegister_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveDividendRegister_ResponseObject = new saveDividendRegisterResponse(responseData, "JSON");
            DividendManagement_Dividend_Management_saveDividendRegister.callbackfunction(saveDividendRegister_ResponseObject, textStatus);
        }
        else {
            DividendManagement_Dividend_Management_saveDividendRegister.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveDividendRegisterRequestcontext();
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
        
        var request = new saveDividendRegisterRequest();
        request.context = new saveDividendRegisterRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/newDividendRegister";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
