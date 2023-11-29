var Revenue_Revenue_Master_saveRevenue = {
    /*
     Function to invoke API
     Notes:
     Resource: Revenue_Master
     Description: saveRevenue
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveRevenue_Request, callbackHandler)
    {
        var request = new saveRevenueRequest(saveRevenue_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Revenue/new_revenue";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Revenue_Revenue_Master_saveRevenue.saveRevenue_ResponseHandler);
        return true;
    },
    
    saveRevenue_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveRevenue_ResponseObject = new saveRevenueResponse(responseData, "JSON");
            Revenue_Revenue_Master_saveRevenue.callbackfunction(saveRevenue_ResponseObject, textStatus);
        }
        else {
            Revenue_Revenue_Master_saveRevenue.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailsrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveRevenueRequestcontext();
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
        contextrequestObject.Details = DetailsrequestObjectArray;
        
        var request = new saveRevenueRequest();
        request.context = new saveRevenueRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Revenue/new_revenue";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
