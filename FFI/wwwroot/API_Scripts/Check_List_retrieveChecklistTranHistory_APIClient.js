var CheckList_Check_List_retrieveChecklistTranHistory = {
    /*
     Function to invoke API
     Notes:
     Resource: Check_List
     Description: retrieveChecklistTranHistory
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveChecklistTranHistory_Request, callbackHandler)
    {
        var param_orgnid = (retrieveChecklistTranHistory_Request.context && retrieveChecklistTranHistory_Request.context.hasOwnProperty('orgnId')) ? retrieveChecklistTranHistory_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveChecklistTranHistory_Request.context && retrieveChecklistTranHistory_Request.context.hasOwnProperty('locnId')) ? retrieveChecklistTranHistory_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveChecklistTranHistory_Request.context && retrieveChecklistTranHistory_Request.context.hasOwnProperty('userId')) ? retrieveChecklistTranHistory_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveChecklistTranHistory_Request.context && retrieveChecklistTranHistory_Request.context.hasOwnProperty('localeId')) ? retrieveChecklistTranHistory_Request.context["localeId"] : null; //Unicode string(100)
        var param_row_id = (retrieveChecklistTranHistory_Request.context.History_Header && retrieveChecklistTranHistory_Request.context.History_Header.hasOwnProperty('row_id')) ? retrieveChecklistTranHistory_Request.context.History_Header["row_id"] : null; //Integer(32)
        var param_doc_rowid = (retrieveChecklistTranHistory_Request.context.History_Header && retrieveChecklistTranHistory_Request.context.History_Header.hasOwnProperty('doc_rowid')) ? retrieveChecklistTranHistory_Request.context.History_Header["doc_rowid"] : null; //Integer(32)
        var param_doc_no = (retrieveChecklistTranHistory_Request.context.History_Header && retrieveChecklistTranHistory_Request.context.History_Header.hasOwnProperty('doc_no')) ? retrieveChecklistTranHistory_Request.context.History_Header["doc_no"] : null; //Unicode string(50)
        var param_doc_type = (retrieveChecklistTranHistory_Request.context.History_Header && retrieveChecklistTranHistory_Request.context.History_Header.hasOwnProperty('doc_type')) ? retrieveChecklistTranHistory_Request.context.History_Header["doc_type"] : null; //Unicode string(50)
        var param_edit_date = (retrieveChecklistTranHistory_Request.context.History_Header && retrieveChecklistTranHistory_Request.context.History_Header.hasOwnProperty('edit_date')) ? retrieveChecklistTranHistory_Request.context.History_Header["edit_date"] : null; //Unicode string(20)
        var param_edited_by = (retrieveChecklistTranHistory_Request.context.History_Header && retrieveChecklistTranHistory_Request.context.History_Header.hasOwnProperty('edited_by')) ? retrieveChecklistTranHistory_Request.context.History_Header["edited_by"] : null; //Unicode string(256)
        var param_mode_flag = (retrieveChecklistTranHistory_Request.context.History_Header && retrieveChecklistTranHistory_Request.context.History_Header.hasOwnProperty('mode_flag')) ? retrieveChecklistTranHistory_Request.context.History_Header["mode_flag"] : null; //Unicode string(2)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/checklist_history?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&row_id=" + param_row_id + "&doc_rowid=" + param_doc_rowid + "&doc_no=" + param_doc_no + "&doc_type=" + param_doc_type + "&edit_date=" + param_edit_date + "&edited_by=" + param_edited_by + "&mode_flag=" + param_mode_flag + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CheckList_Check_List_retrieveChecklistTranHistory.retrieveChecklistTranHistory_ResponseHandler);
        return true;
    },
    
    retrieveChecklistTranHistory_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveChecklistTranHistory_ResponseObject = new retrieveChecklistTranHistoryResponse(responseData, "JSON");
            CheckList_Check_List_retrieveChecklistTranHistory.callbackfunction(retrieveChecklistTranHistory_ResponseObject, textStatus);
        }
        else {
            CheckList_Check_List_retrieveChecklistTranHistory.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, History_HeaderrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveChecklistTranHistoryRequestcontext();
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
        var param_row_id = (History_HeaderrequestObject && History_HeaderrequestObject.hasOwnProperty('row_id')) ? History_HeaderrequestObject["row_id"] : null; //Integer(32)
        var param_doc_rowid = (History_HeaderrequestObject && History_HeaderrequestObject.hasOwnProperty('doc_rowid')) ? History_HeaderrequestObject["doc_rowid"] : null; //Integer(32)
        var param_doc_no = (History_HeaderrequestObject && History_HeaderrequestObject.hasOwnProperty('doc_no')) ? History_HeaderrequestObject["doc_no"] : null; //Unicode string(50)
        var param_doc_type = (History_HeaderrequestObject && History_HeaderrequestObject.hasOwnProperty('doc_type')) ? History_HeaderrequestObject["doc_type"] : null; //Unicode string(50)
        var param_edit_date = (History_HeaderrequestObject && History_HeaderrequestObject.hasOwnProperty('edit_date')) ? History_HeaderrequestObject["edit_date"] : null; //Unicode string(20)
        var param_edited_by = (History_HeaderrequestObject && History_HeaderrequestObject.hasOwnProperty('edited_by')) ? History_HeaderrequestObject["edited_by"] : null; //Unicode string(256)
        var param_mode_flag = (History_HeaderrequestObject && History_HeaderrequestObject.hasOwnProperty('mode_flag')) ? History_HeaderrequestObject["mode_flag"] : null; //Unicode string(2)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/checklist_history?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&row_id=" + param_row_id + "&doc_rowid=" + param_doc_rowid + "&doc_no=" + param_doc_no + "&doc_type=" + param_doc_type + "&edit_date=" + param_edit_date + "&edited_by=" + param_edited_by + "&mode_flag=" + param_mode_flag + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
