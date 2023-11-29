var CheckList_Check_List_saveChecklist = {
    /*
     Function to invoke API
     Notes:
     Resource: Check_List
     Description: saveChecklist
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveChecklist_Request, callbackHandler)
    {
        var request = new saveChecklistRequest(saveChecklist_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/newChecklist";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, CheckList_Check_List_saveChecklist.saveChecklist_ResponseHandler);
        return true;
    },
    
    saveChecklist_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveChecklist_ResponseObject = new saveChecklistResponse(responseData, "JSON");
            CheckList_Check_List_saveChecklist.callbackfunction(saveChecklist_ResponseObject, textStatus);
        }
        else {
            CheckList_Check_List_saveChecklist.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, ElementrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveChecklistRequestcontext();
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
        contextrequestObject.Element = ElementrequestObjectArray;
        
        var request = new saveChecklistRequest();
        request.context = new saveChecklistRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/newChecklist";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
