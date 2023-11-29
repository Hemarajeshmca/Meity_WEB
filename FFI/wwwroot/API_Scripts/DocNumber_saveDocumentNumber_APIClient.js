var DocumentNumber_DocNumber_saveDocumentNumber = {
    /*
     Function to invoke API
     Notes:
     Resource: DocNumber
     Description: saveDocumentNumber
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveDocumentNumber_Request, callbackHandler)
    {
        var request = new saveDocumentNumberRequest(saveDocumentNumber_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DocumentNumber/newdocnumber";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, DocumentNumber_DocNumber_saveDocumentNumber.saveDocumentNumber_ResponseHandler);
        return true;
    },
    
    saveDocumentNumber_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveDocumentNumber_ResponseObject = new saveDocumentNumberResponse(responseData, "JSON");
            DocumentNumber_DocNumber_saveDocumentNumber.callbackfunction(saveDocumentNumber_ResponseObject, textStatus);
        }
        else {
            DocumentNumber_DocNumber_saveDocumentNumber.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveDocumentNumberRequestcontext();
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
        
        var request = new saveDocumentNumberRequest();
        request.context = new saveDocumentNumberRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DocumentNumber/newdocnumber";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
