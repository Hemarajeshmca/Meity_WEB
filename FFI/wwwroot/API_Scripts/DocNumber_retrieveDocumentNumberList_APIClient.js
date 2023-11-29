var DocumentNumber_DocNumber_retrieveDocumentNumberList = {
    /*
     Function to invoke API
     Notes:
     Resource: DocNumber
     Description: retrieveDocumentNumberList
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveDocumentNumberList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveDocumentNumberList_Request.context && retrieveDocumentNumberList_Request.context.hasOwnProperty('orgnId')) ? retrieveDocumentNumberList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveDocumentNumberList_Request.context && retrieveDocumentNumberList_Request.context.hasOwnProperty('locnId')) ? retrieveDocumentNumberList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveDocumentNumberList_Request.context && retrieveDocumentNumberList_Request.context.hasOwnProperty('userId')) ? retrieveDocumentNumberList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveDocumentNumberList_Request.context && retrieveDocumentNumberList_Request.context.hasOwnProperty('localeId')) ? retrieveDocumentNumberList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveDocumentNumberList_Request.context.Filter && retrieveDocumentNumberList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveDocumentNumberList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveDocumentNumberList_Request.context.Filter && retrieveDocumentNumberList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveDocumentNumberList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveDocumentNumberList_Request.context.Filter && retrieveDocumentNumberList_Request.context.Filter.hasOwnProperty('FiltereBy_Fromvalue')) ? retrieveDocumentNumberList_Request.context.Filter["FiltereBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveDocumentNumberList_Request.context.Filter && retrieveDocumentNumberList_Request.context.Filter.hasOwnProperty('FiltereBy_Tovalue')) ? retrieveDocumentNumberList_Request.context.Filter["FiltereBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DocumentNumber/alldoc_num?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, DocumentNumber_DocNumber_retrieveDocumentNumberList.retrieveDocumentNumberList_ResponseHandler);
        return true;
    },
    
    retrieveDocumentNumberList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveDocumentNumberList_ResponseObject = new retrieveDocumentNumberListResponse(responseData, "JSON");
            DocumentNumber_DocNumber_retrieveDocumentNumberList.callbackfunction(retrieveDocumentNumberList_ResponseObject, textStatus);
        }
        else {
            DocumentNumber_DocNumber_retrieveDocumentNumberList.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, FilterrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveDocumentNumberListRequestcontext();
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
        var param_filterby_option = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Option')) ? FilterrequestObject["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Code')) ? FilterrequestObject["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FiltereBy_Fromvalue')) ? FilterrequestObject["FiltereBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FiltereBy_Tovalue')) ? FilterrequestObject["FiltereBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DocumentNumber/alldoc_num?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
