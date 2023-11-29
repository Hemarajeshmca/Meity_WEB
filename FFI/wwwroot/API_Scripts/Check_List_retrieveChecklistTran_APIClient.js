var CheckList_Check_List_retrieveChecklistTran = {
    /*
     Function to invoke API
     Notes:
     Resource: Check_List
     Description: retrieveChecklistTran
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveChecklistTran_Request, callbackHandler)
    {
        var param_orgnid = (retrieveChecklistTran_Request.context && retrieveChecklistTran_Request.context.hasOwnProperty('orgnId')) ? retrieveChecklistTran_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveChecklistTran_Request.context && retrieveChecklistTran_Request.context.hasOwnProperty('locnId')) ? retrieveChecklistTran_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveChecklistTran_Request.context && retrieveChecklistTran_Request.context.hasOwnProperty('userId')) ? retrieveChecklistTran_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveChecklistTran_Request.context && retrieveChecklistTran_Request.context.hasOwnProperty('localeId')) ? retrieveChecklistTran_Request.context["localeId"] : null; //Unicode string(100)
        var param_doc_rowid = (retrieveChecklistTran_Request.context.Header && retrieveChecklistTran_Request.context.Header.hasOwnProperty('doc_rowid')) ? retrieveChecklistTran_Request.context.Header["doc_rowid"] : null; //Integer(32)
        var param_doc_no = (retrieveChecklistTran_Request.context.Header && retrieveChecklistTran_Request.context.Header.hasOwnProperty('doc_no')) ? retrieveChecklistTran_Request.context.Header["doc_no"] : null; //Unicode string(50)
        var param_doc_type = (retrieveChecklistTran_Request.context.Header && retrieveChecklistTran_Request.context.Header.hasOwnProperty('doc_type')) ? retrieveChecklistTran_Request.context.Header["doc_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/checklist_tran?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&doc_rowid=" + param_doc_rowid + "&doc_no=" + param_doc_no + "&doc_type=" + param_doc_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CheckList_Check_List_retrieveChecklistTran.retrieveChecklistTran_ResponseHandler);
        return true;
    },
    
    retrieveChecklistTran_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveChecklistTran_ResponseObject = new retrieveChecklistTranResponse(responseData, "JSON");
            CheckList_Check_List_retrieveChecklistTran.callbackfunction(retrieveChecklistTran_ResponseObject, textStatus);
        }
        else {
            CheckList_Check_List_retrieveChecklistTran.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveChecklistTranRequestcontext();
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
        var param_doc_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('doc_rowid')) ? HeaderrequestObject["doc_rowid"] : null; //Integer(32)
        var param_doc_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('doc_no')) ? HeaderrequestObject["doc_no"] : null; //Unicode string(50)
        var param_doc_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('doc_type')) ? HeaderrequestObject["doc_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CheckList/checklist_tran?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&doc_rowid=" + param_doc_rowid + "&doc_no=" + param_doc_no + "&doc_type=" + param_doc_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
