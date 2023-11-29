var DividendManagement_Dividend_Management_retrieveDividendRegister = {
    /*
     Function to invoke API
     Notes:
     Resource: Dividend_Management
     Description: retrieveDividendRegister
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveDividendRegister_Request, callbackHandler)
    {
        var param_orgnid = (retrieveDividendRegister_Request.context && retrieveDividendRegister_Request.context.hasOwnProperty('orgnId')) ? retrieveDividendRegister_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveDividendRegister_Request.context && retrieveDividendRegister_Request.context.hasOwnProperty('locnId')) ? retrieveDividendRegister_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveDividendRegister_Request.context && retrieveDividendRegister_Request.context.hasOwnProperty('userId')) ? retrieveDividendRegister_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveDividendRegister_Request.context && retrieveDividendRegister_Request.context.hasOwnProperty('localeId')) ? retrieveDividendRegister_Request.context["localeId"] : null; //Unicode string(100)
        var param_register_rowid = (retrieveDividendRegister_Request.context.Header && retrieveDividendRegister_Request.context.Header.hasOwnProperty('register_rowid')) ? retrieveDividendRegister_Request.context.Header["register_rowid"] : null; //Integer(16)
        var param_register_no = (retrieveDividendRegister_Request.context.Header && retrieveDividendRegister_Request.context.Header.hasOwnProperty('register_no')) ? retrieveDividendRegister_Request.context.Header["register_no"] : null; //Unicode string(50)
        var param_register_name = (retrieveDividendRegister_Request.context.Header && retrieveDividendRegister_Request.context.Header.hasOwnProperty('register_name')) ? retrieveDividendRegister_Request.context.Header["register_name"] : null; //Unicode string(50)
        var param_report_date = (retrieveDividendRegister_Request.context.Header && retrieveDividendRegister_Request.context.Header.hasOwnProperty('report_date')) ? retrieveDividendRegister_Request.context.Header["report_date"] : null; //Unicode string(20)
        var param_declared_date = (retrieveDividendRegister_Request.context.Header && retrieveDividendRegister_Request.context.Header.hasOwnProperty('declared_date')) ? retrieveDividendRegister_Request.context.Header["declared_date"] : null; //Unicode string(20)
        var param_finyear_code = (retrieveDividendRegister_Request.context.Header && retrieveDividendRegister_Request.context.Header.hasOwnProperty('dividendstru_rowid')) ? retrieveDividendRegister_Request.context.Header["dividendstru_rowid"] : null; //Integer(32)
        var param_payor_bank_code = (retrieveDividendRegister_Request.context.Header && retrieveDividendRegister_Request.context.Header.hasOwnProperty('payor_bank_code')) ? retrieveDividendRegister_Request.context.Header["payor_bank_code"] : null; //Unicode string(50)
        var param_fpoorgn_code = (retrieveDividendRegister_Request.context.Header && retrieveDividendRegister_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveDividendRegister_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/divident_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&register_rowid=" + param_register_rowid + "&register_no=" + param_register_no + "&register_name=" + param_register_name + "&report_date=" + param_report_date + "&declared_date=" + param_declared_date + "&finyear_code=" + param_finyear_code + "&payor_bank_code=" + param_payor_bank_code + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, DividendManagement_Dividend_Management_retrieveDividendRegister.retrieveDividendRegister_ResponseHandler);
        return true;
    },
    
    retrieveDividendRegister_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveDividendRegister_ResponseObject = new retrieveDividendRegisterResponse(responseData, "JSON");
            DividendManagement_Dividend_Management_retrieveDividendRegister.callbackfunction(retrieveDividendRegister_ResponseObject, textStatus);
        }
        else {
            DividendManagement_Dividend_Management_retrieveDividendRegister.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveDividendRegisterRequestcontext();
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
        var param_register_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('register_rowid')) ? HeaderrequestObject["register_rowid"] : null; //Integer(16)
        var param_register_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('register_no')) ? HeaderrequestObject["register_no"] : null; //Unicode string(50)
        var param_register_name = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('register_name')) ? HeaderrequestObject["register_name"] : null; //Unicode string(50)
        var param_report_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('report_date')) ? HeaderrequestObject["report_date"] : null; //Unicode string(20)
        var param_declared_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('declared_date')) ? HeaderrequestObject["declared_date"] : null; //Unicode string(20)
        var param_finyear_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('dividendstru_rowid')) ? HeaderrequestObject["dividendstru_rowid"] : null; //Integer(32)
        var param_payor_bank_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('payor_bank_code')) ? HeaderrequestObject["payor_bank_code"] : null; //Unicode string(50)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/DividendManagement/divident_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&register_rowid=" + param_register_rowid + "&register_no=" + param_register_no + "&register_name=" + param_register_name + "&report_date=" + param_report_date + "&declared_date=" + param_declared_date + "&finyear_code=" + param_finyear_code + "&payor_bank_code=" + param_payor_bank_code + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
