var ExcelTemplate_Excel_Template_uploadExcelVector = {
    /*
     Function to invoke API
     Notes:
     Resource: Excel_Template
     Description: uploadExcelVector
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (uploadExcelVector_Request, callbackHandler)
    {
        var request = new uploadExcelVectorRequest(uploadExcelVector_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExcelTemplate/newexcelvector";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ExcelTemplate_Excel_Template_uploadExcelVector.uploadExcelVector_ResponseHandler);
        return true;
    },
    
    uploadExcelVector_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var uploadExcelVector_ResponseObject = new uploadExcelVectorResponse(responseData, "JSON");
            ExcelTemplate_Excel_Template_uploadExcelVector.callbackfunction(uploadExcelVector_ResponseObject, textStatus);
        }
        else {
            ExcelTemplate_Excel_Template_uploadExcelVector.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new uploadExcelVectorRequestcontext();
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
        
        var request = new uploadExcelVectorRequest();
        request.context = new uploadExcelVectorRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExcelTemplate/newexcelvector";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
