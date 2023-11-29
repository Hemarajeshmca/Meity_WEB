var CreditIssue_CreditIssue_master_getPaymentCollection_CreditIssue = {
    /*
     Function to invoke API
     Notes:
     Resource: CreditIssue_master
     Description: getPaymentCollection_CreditIssue
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getPaymentCollection_CreditIssue_Request, callbackHandler)
    {
        var param_orgnid = (getPaymentCollection_CreditIssue_Request.context && getPaymentCollection_CreditIssue_Request.context.hasOwnProperty('orgnId')) ? getPaymentCollection_CreditIssue_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (getPaymentCollection_CreditIssue_Request.context && getPaymentCollection_CreditIssue_Request.context.hasOwnProperty('locnId')) ? getPaymentCollection_CreditIssue_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (getPaymentCollection_CreditIssue_Request.context && getPaymentCollection_CreditIssue_Request.context.hasOwnProperty('userId')) ? getPaymentCollection_CreditIssue_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (getPaymentCollection_CreditIssue_Request.context && getPaymentCollection_CreditIssue_Request.context.hasOwnProperty('localeId')) ? getPaymentCollection_CreditIssue_Request.context["localeId"] : null; //Unicode string(100)
        var param_creditissue_rowid = (getPaymentCollection_CreditIssue_Request.context.Header && getPaymentCollection_CreditIssue_Request.context.Header.hasOwnProperty('creditissue_rowid')) ? getPaymentCollection_CreditIssue_Request.context.Header["creditissue_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CreditIssue/creditissue_payment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&creditissue_rowid=" + param_creditissue_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CreditIssue_CreditIssue_master_getPaymentCollection_CreditIssue.getPaymentCollection_CreditIssue_ResponseHandler);
        return true;
    },
    
    getPaymentCollection_CreditIssue_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getPaymentCollection_CreditIssue_ResponseObject = new getPaymentCollection_CreditIssueResponse(responseData, "JSON");
            CreditIssue_CreditIssue_master_getPaymentCollection_CreditIssue.callbackfunction(getPaymentCollection_CreditIssue_ResponseObject, textStatus);
        }
        else {
            CreditIssue_CreditIssue_master_getPaymentCollection_CreditIssue.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new getPaymentCollection_CreditIssueRequestcontext();
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
        var param_creditissue_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('creditissue_rowid')) ? HeaderrequestObject["creditissue_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CreditIssue/creditissue_payment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&creditissue_rowid=" + param_creditissue_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
