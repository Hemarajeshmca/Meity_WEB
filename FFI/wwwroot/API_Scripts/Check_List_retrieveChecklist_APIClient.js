var CheckList_Check_List_retrieveChecklist = {
    /*
     Function to invoke API
     Notes:
     Resource: Check_List
     Description: retrieveChecklist
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveChecklist_Request, callbackHandler)
    {
        var param_orgnid = (retrieveChecklist_Request.context && retrieveChecklist_Request.context.hasOwnProperty('orgnId')) ? retrieveChecklist_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveChecklist_Request.context && retrieveChecklist_Request.context.hasOwnProperty('locnId')) ? retrieveChecklist_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveChecklist_Request.context && retrieveChecklist_Request.context.hasOwnProperty('userId')) ? retrieveChecklist_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveChecklist_Request.context && retrieveChecklist_Request.context.hasOwnProperty('localeId')) ? retrieveChecklist_Request.context["localeId"] : null; //Unicode string(100)
        var param_chklst_rowid = (retrieveChecklist_Request.context.Header && retrieveChecklist_Request.context.Header.hasOwnProperty('chklst_rowid')) ? retrieveChecklist_Request.context.Header["chklst_rowid"] : null; //Integer(32)
        var param_activity_code = (retrieveChecklist_Request.context.Header && retrieveChecklist_Request.context.Header.hasOwnProperty('activity_code')) ? retrieveChecklist_Request.context.Header["activity_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/checklist?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&chklst_rowid=" + param_chklst_rowid + "&activity_code=" + param_activity_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CheckList_Check_List_retrieveChecklist.retrieveChecklist_ResponseHandler);
        return true;
    },
    
    retrieveChecklist_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveChecklist_ResponseObject = new retrieveChecklistResponse(responseData, "JSON");
            CheckList_Check_List_retrieveChecklist.callbackfunction(retrieveChecklist_ResponseObject, textStatus);
        }
        else {
            CheckList_Check_List_retrieveChecklist.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveChecklistRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (contextrequestObject && contextrequestObject.hasOwnProperty('orgnId')) ? contextrequestObject["orgnId"] : null; //Unicode string(100)
        var param_locnid = (contextrequestObject && contextrequestObject.hasOwnProperty('locnId')) ? contextrequestObject["locnId"] : null; //Unicode string(100)
        var param_userid = (contextrequestObject && contextrequestObject.hasOwnProperty('userId')) ? contextrequestObject["userId"] : null; //Unicode string(128)
        var param_localeid = (contextrequestObject && contextrequestObject.hasOwnProperty('localeId')) ? contextrequestObject["localeId"] : null; //Unicode string(100)
        var param_chklst_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('chklst_rowid')) ? HeaderrequestObject["chklst_rowid"] : null; //Integer(32)
        var param_activity_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('activity_code')) ? HeaderrequestObject["activity_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/checklist?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&chklst_rowid=" + param_chklst_rowid + "&activity_code=" + param_activity_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
