var BillEntry_Bill_Entry_retrieveBillSessionDtl = {
    /*
     Function to invoke API
     Notes:
     Resource: Bill_Entry
     Description: retrieveBillSessionDtl
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveBillSessionDtl_Request, callbackHandler)
    {
        var param_orgnid = (retrieveBillSessionDtl_Request.context && retrieveBillSessionDtl_Request.context.hasOwnProperty('orgnId')) ? retrieveBillSessionDtl_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveBillSessionDtl_Request.context && retrieveBillSessionDtl_Request.context.hasOwnProperty('locnId')) ? retrieveBillSessionDtl_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveBillSessionDtl_Request.context && retrieveBillSessionDtl_Request.context.hasOwnProperty('userId')) ? retrieveBillSessionDtl_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveBillSessionDtl_Request.context && retrieveBillSessionDtl_Request.context.hasOwnProperty('localeId')) ? retrieveBillSessionDtl_Request.context["localeId"] : null; //Unicode string(100)
        var param_cc_bill_rowid = (retrieveBillSessionDtl_Request.context.Header && retrieveBillSessionDtl_Request.context.Header.hasOwnProperty('ccbill_rowid')) ? retrieveBillSessionDtl_Request.context.Header["ccbill_rowid"] : null; //Integer(32)
        var param_ccbill_no = (retrieveBillSessionDtl_Request.context.Header && retrieveBillSessionDtl_Request.context.Header.hasOwnProperty('ccbill_no')) ? retrieveBillSessionDtl_Request.context.Header["ccbill_no"] : null; //Unicode string(100)
        var param_cc_aggrloc_code = (retrieveBillSessionDtl_Request.context.Header && retrieveBillSessionDtl_Request.context.Header.hasOwnProperty('cc_aggrloc_code')) ? retrieveBillSessionDtl_Request.context.Header["cc_aggrloc_code"] : null; //Unicode string(50)
        var param_period_from = (retrieveBillSessionDtl_Request.context.Header && retrieveBillSessionDtl_Request.context.Header.hasOwnProperty('period_from')) ? retrieveBillSessionDtl_Request.context.Header["period_from"] : null; //Unicode string(20)
        var param_period_to = (retrieveBillSessionDtl_Request.context.Header && retrieveBillSessionDtl_Request.context.Header.hasOwnProperty('period_to')) ? retrieveBillSessionDtl_Request.context.Header["period_to"] : null; //Unicode string(20)
        var param_cp_aggrloc_code = (retrieveBillSessionDtl_Request.context.Header && retrieveBillSessionDtl_Request.context.Header.hasOwnProperty('cp_aggrloc_code')) ? retrieveBillSessionDtl_Request.context.Header["cp_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BillEntry/bill_entry_session?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cc_bill_rowid=" + param_cc_bill_rowid + "&ccbill_no=" + param_ccbill_no + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "&period_from=" + param_period_from + "&period_to=" + param_period_to + "&cp_aggrloc_code=" + param_cp_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, BillEntry_Bill_Entry_retrieveBillSessionDtl.retrieveBillSessionDtl_ResponseHandler);
        return true;
    },
    
    retrieveBillSessionDtl_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveBillSessionDtl_ResponseObject = new retrieveBillSessionDtlResponse(responseData, "JSON");
            BillEntry_Bill_Entry_retrieveBillSessionDtl.callbackfunction(retrieveBillSessionDtl_ResponseObject, textStatus);
        }
        else {
            BillEntry_Bill_Entry_retrieveBillSessionDtl.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveBillSessionDtlRequestcontext();
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
        var param_cc_bill_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('ccbill_rowid')) ? HeaderrequestObject["ccbill_rowid"] : null; //Integer(32)
        var param_ccbill_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('ccbill_no')) ? HeaderrequestObject["ccbill_no"] : null; //Unicode string(100)
        var param_cc_aggrloc_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cc_aggrloc_code')) ? HeaderrequestObject["cc_aggrloc_code"] : null; //Unicode string(50)
        var param_period_from = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('period_from')) ? HeaderrequestObject["period_from"] : null; //Unicode string(20)
        var param_period_to = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('period_to')) ? HeaderrequestObject["period_to"] : null; //Unicode string(20)
        var param_cp_aggrloc_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('cp_aggrloc_code')) ? HeaderrequestObject["cp_aggrloc_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BillEntry/bill_entry_session?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cc_bill_rowid=" + param_cc_bill_rowid + "&ccbill_no=" + param_ccbill_no + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "&period_from=" + param_period_from + "&period_to=" + param_period_to + "&cp_aggrloc_code=" + param_cp_aggrloc_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
