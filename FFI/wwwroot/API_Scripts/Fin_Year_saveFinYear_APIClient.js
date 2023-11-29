var FinYear_Fin_Year_saveFinYear = {
    /*
     Function to invoke API
     Notes:
     Resource: Fin_Year
     Description: saveFinYear
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFinYear_Request, callbackHandler)
    {
        var request = new saveFinYearRequest(saveFinYear_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FinYear/newfinyear";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FinYear_Fin_Year_saveFinYear.saveFinYear_ResponseHandler);
        return true;
    },
    
    saveFinYear_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFinYear_ResponseObject = new saveFinYearResponse(responseData, "JSON");
            FinYear_Fin_Year_saveFinYear.callbackfunction(saveFinYear_ResponseObject, textStatus);
        }
        else {
            FinYear_Fin_Year_saveFinYear.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveFinYearRequestcontext();
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
        
        var request = new saveFinYearRequest();
        request.context = new saveFinYearRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FinYear/newfinyear";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
