var CheckList_Check_List_saveChecklistTran = {
    /*
     Function to invoke API
     Notes:
     Resource: Check_List
     Description: saveChecklistTran
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveChecklistTran_Request, callbackHandler)
    {
        var request = new saveChecklistTranRequest(saveChecklistTran_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/newChecklistTran";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CheckList_Check_List_saveChecklistTran.saveChecklistTran_ResponseHandler);
        return true;
    },
    
    saveChecklistTran_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveChecklistTran_ResponseObject = new saveChecklistTranResponse(responseData, "JSON");
            CheckList_Check_List_saveChecklistTran.callbackfunction(saveChecklistTran_ResponseObject, textStatus);
        }
        else {
            CheckList_Check_List_saveChecklistTran.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, ElementrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveChecklistTranRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Element = ElementrequestObjectArray;
        
        var request = new saveChecklistTranRequest();
        request.context = new saveChecklistTranRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/newChecklistTran";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
