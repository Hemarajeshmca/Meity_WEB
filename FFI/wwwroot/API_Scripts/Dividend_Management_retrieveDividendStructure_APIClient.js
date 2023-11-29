var DividendManagement_Dividend_Management_retrieveDividendStructure = {
    /*
     Function to invoke API
     Notes:
     Resource: Dividend_Management
     Description: retrieveDividendStructure
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveDividendStructure_Request, callbackHandler)
    {
        var param_orgnid = (retrieveDividendStructure_Request.context && retrieveDividendStructure_Request.context.hasOwnProperty('orgnId')) ? retrieveDividendStructure_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveDividendStructure_Request.context && retrieveDividendStructure_Request.context.hasOwnProperty('locnId')) ? retrieveDividendStructure_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveDividendStructure_Request.context && retrieveDividendStructure_Request.context.hasOwnProperty('userId')) ? retrieveDividendStructure_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveDividendStructure_Request.context && retrieveDividendStructure_Request.context.hasOwnProperty('localeId')) ? retrieveDividendStructure_Request.context["localeId"] : null; //Unicode string(100)
        var param_dividendstru_rowid_code = (retrieveDividendStructure_Request.context.Header && retrieveDividendStructure_Request.context.Header.hasOwnProperty('dividendstru_rowid')) ? retrieveDividendStructure_Request.context.Header["dividendstru_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveDividendStructure_Request.context.Header && retrieveDividendStructure_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveDividendStructure_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/divident?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&dividendstru_rowid_code=" + param_dividendstru_rowid_code + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, DividendManagement_Dividend_Management_retrieveDividendStructure.retrieveDividendStructure_ResponseHandler);
        return true;
    },
    
    retrieveDividendStructure_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveDividendStructure_ResponseObject = new retrieveDividendStructureResponse(responseData, "JSON");
            DividendManagement_Dividend_Management_retrieveDividendStructure.callbackfunction(retrieveDividendStructure_ResponseObject, textStatus);
        }
        else {
            DividendManagement_Dividend_Management_retrieveDividendStructure.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveDividendStructureRequestcontext();
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
        var param_dividendstru_rowid_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('dividendstru_rowid')) ? HeaderrequestObject["dividendstru_rowid"] : null; //Integer(32)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/divident?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&dividendstru_rowid_code=" + param_dividendstru_rowid_code + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
