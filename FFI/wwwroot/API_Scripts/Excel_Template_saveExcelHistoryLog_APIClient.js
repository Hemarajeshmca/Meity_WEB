var ExcelTemplate_Excel_Template_saveExcelHistoryLog = {
    /*
     Function to invoke API
     Notes:
     Resource: Excel_Template
     Description: saveExcelHistoryLog
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveExcelHistoryLog_Request, callbackHandler)
    {
        var request = new saveExcelHistoryLogRequest(saveExcelHistoryLog_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExcelTemplate/newhistorylog";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ExcelTemplate_Excel_Template_saveExcelHistoryLog.saveExcelHistoryLog_ResponseHandler);
        return true;
    },
    
    saveExcelHistoryLog_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveExcelHistoryLog_ResponseObject = new saveExcelHistoryLogResponse(responseData, "JSON");
            ExcelTemplate_Excel_Template_saveExcelHistoryLog.callbackfunction(saveExcelHistoryLog_ResponseObject, textStatus);
        }
        else {
            ExcelTemplate_Excel_Template_saveExcelHistoryLog.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, excelHistoryrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveExcelHistoryLogRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.excelHistory = excelHistoryrequestObject;
        
        var request = new saveExcelHistoryLogRequest();
        request.context = new saveExcelHistoryLogRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExcelTemplate/newhistorylog";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
