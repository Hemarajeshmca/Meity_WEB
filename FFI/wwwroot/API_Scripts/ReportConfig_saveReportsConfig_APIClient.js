var ReportsConfig_ReportConfig_saveReportsConfig = {
    /*
     Function to invoke API
     Notes:
     Resource: ReportConfig
     Description: saveReportsConfig
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveReportsConfig_Request, callbackHandler)
    {
        var request = new saveReportsConfigRequest(saveReportsConfig_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReportsConfig/newreportsconfig";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ReportsConfig_ReportConfig_saveReportsConfig.saveReportsConfig_ResponseHandler);
        return true;
    },
    
    saveReportsConfig_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveReportsConfig_ResponseObject = new saveReportsConfigResponse(responseData, "JSON");
            ReportsConfig_ReportConfig_saveReportsConfig.callbackfunction(saveReportsConfig_ResponseObject, textStatus);
        }
        else {
            ReportsConfig_ReportConfig_saveReportsConfig.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, Param_detailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveReportsConfigRequestcontext();
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
        contextrequestObject.Param_detail = Param_detailrequestObjectArray;
        
        var request = new saveReportsConfigRequest();
        request.context = new saveReportsConfigRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReportsConfig/newreportsconfig";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
