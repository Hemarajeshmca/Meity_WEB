var DocumentNumber_DocNumber_retrieveDocumentNumber = {
    /*
     Function to invoke API
     Notes:
     Resource: DocNumber
     Description: retrieveDocumentNumber
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveDocumentNumber_Request, callbackHandler)
    {
        var param_orgnid = (retrieveDocumentNumber_Request.context && retrieveDocumentNumber_Request.context.hasOwnProperty('orgnId')) ? retrieveDocumentNumber_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveDocumentNumber_Request.context && retrieveDocumentNumber_Request.context.hasOwnProperty('locnId')) ? retrieveDocumentNumber_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveDocumentNumber_Request.context && retrieveDocumentNumber_Request.context.hasOwnProperty('userId')) ? retrieveDocumentNumber_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveDocumentNumber_Request.context && retrieveDocumentNumber_Request.context.hasOwnProperty('localeId')) ? retrieveDocumentNumber_Request.context["localeId"] : null; //Unicode string(100)
        var param_activity_code = (retrieveDocumentNumber_Request.context.Header && retrieveDocumentNumber_Request.context.Header.hasOwnProperty('activity_code')) ? retrieveDocumentNumber_Request.context.Header["activity_code"] : null; //Unicode string(50)
        var param_finyear_code = (retrieveDocumentNumber_Request.context.Header && retrieveDocumentNumber_Request.context.Header.hasOwnProperty('finyear_code')) ? retrieveDocumentNumber_Request.context.Header["finyear_code"] : null; //Unicode string(50)
        var param_docnum_rowid = (retrieveDocumentNumber_Request.context.Header && retrieveDocumentNumber_Request.context.Header.hasOwnProperty('docnum_rowid')) ? retrieveDocumentNumber_Request.context.Header["docnum_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DocumentNumber/doc_num?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&activity_code=" + param_activity_code + "&finyear_code=" + param_finyear_code + "&docnum_rowid=" + param_docnum_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, DocumentNumber_DocNumber_retrieveDocumentNumber.retrieveDocumentNumber_ResponseHandler);
        return true;
    },
    
    retrieveDocumentNumber_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveDocumentNumber_ResponseObject = new retrieveDocumentNumberResponse(responseData, "JSON");
            DocumentNumber_DocNumber_retrieveDocumentNumber.callbackfunction(retrieveDocumentNumber_ResponseObject, textStatus);
        }
        else {
            DocumentNumber_DocNumber_retrieveDocumentNumber.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveDocumentNumberRequestcontext();
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
        var param_activity_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('activity_code')) ? HeaderrequestObject["activity_code"] : null; //Unicode string(50)
        var param_finyear_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('finyear_code')) ? HeaderrequestObject["finyear_code"] : null; //Unicode string(50)
        var param_docnum_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('docnum_rowid')) ? HeaderrequestObject["docnum_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DocumentNumber/doc_num?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&activity_code=" + param_activity_code + "&finyear_code=" + param_finyear_code + "&docnum_rowid=" + param_docnum_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
