var ExcelTemplate_Excel_Template_uploadExcelScaler = {
    /*
     Function to invoke API
     Notes:
     Resource: Excel_Template
     Description: uploadExcelScaler
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (uploadExcelScalar_Request, callbackHandler)
    {
        var request = new uploadExcelScalarRequest(uploadExcelScalar_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExcelTemplate/newexcelscaler";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ExcelTemplate_Excel_Template_uploadExcelScaler.uploadExcelScaler_ResponseHandler);
        return true;
    },
    
    uploadExcelScaler_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var uploadExcelScalar_ResponseObject = new uploadExcelScalarResponse(responseData, "JSON");
            ExcelTemplate_Excel_Template_uploadExcelScaler.callbackfunction(uploadExcelScalar_ResponseObject, textStatus);
        }
        else {
            ExcelTemplate_Excel_Template_uploadExcelScaler.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, headerrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new uploadExcelScalarRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.header = headerrequestObject;
        
        var request = new uploadExcelScalarRequest();
        request.context = new uploadExcelScalarRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ExcelTemplate/newexcelscaler";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
