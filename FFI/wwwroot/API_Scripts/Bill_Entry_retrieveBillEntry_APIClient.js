var BillEntry_Bill_Entry_retrieveBillEntry = {
    /*
     Function to invoke API
     Notes:
     Resource: Bill_Entry
     Description: retrieveBillEntry
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveBillEntry_Request, callbackHandler)
    {
        var param_orgnid = (retrieveBillEntry_Request.context && retrieveBillEntry_Request.context.hasOwnProperty('orgnId')) ? retrieveBillEntry_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveBillEntry_Request.context && retrieveBillEntry_Request.context.hasOwnProperty('locnId')) ? retrieveBillEntry_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveBillEntry_Request.context && retrieveBillEntry_Request.context.hasOwnProperty('userId')) ? retrieveBillEntry_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveBillEntry_Request.context && retrieveBillEntry_Request.context.hasOwnProperty('localeId')) ? retrieveBillEntry_Request.context["localeId"] : null; //Unicode string(100)
        var param_cc_bill_rowid = (retrieveBillEntry_Request.context.Header && retrieveBillEntry_Request.context.Header.hasOwnProperty('ccbill_rowid')) ? retrieveBillEntry_Request.context.Header["ccbill_rowid"] : null; //Integer(32)
        var param_ccbill_no = (retrieveBillEntry_Request.context.Header && retrieveBillEntry_Request.context.Header.hasOwnProperty('ccbill_no')) ? retrieveBillEntry_Request.context.Header["ccbill_no"] : null; //Unicode string(100)
        var param_cc_aggrloc_code = (retrieveBillEntry_Request.context.Header && retrieveBillEntry_Request.context.Header.hasOwnProperty('cc_aggrloc_code')) ? retrieveBillEntry_Request.context.Header["cc_aggrloc_code"] : null; //Unicode string(50)
        var param_period_from = (retrieveBillEntry_Request.context.Header && retrieveBillEntry_Request.context.Header.hasOwnProperty('period_from')) ? retrieveBillEntry_Request.context.Header["period_from"] : null; //Unicode string(20)
        var param_period_to = (retrieveBillEntry_Request.context.Header && retrieveBillEntry_Request.context.Header.hasOwnProperty('period_to')) ? retrieveBillEntry_Request.context.Header["period_to"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BillEntry/bill_entry?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cc_bill_rowid=" + param_cc_bill_rowid + "&ccbill_no=" + param_ccbill_no + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "&period_from=" + param_period_from + "&period_to=" + param_period_to + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, BillEntry_Bill_Entry_retrieveBillEntry.retrieveBillEntry_ResponseHandler);
        return true;
    },
    
    retrieveBillEntry_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveBillEntry_ResponseObject = new retrieveBillEntryResponse(responseData, "JSON");
            BillEntry_Bill_Entry_retrieveBillEntry.callbackfunction(retrieveBillEntry_ResponseObject, textStatus);
        }
        else {
            BillEntry_Bill_Entry_retrieveBillEntry.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveBillEntryRequestcontext();
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
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BillEntry/bill_entry?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&cc_bill_rowid=" + param_cc_bill_rowid + "&ccbill_no=" + param_ccbill_no + "&cc_aggrloc_code=" + param_cc_aggrloc_code + "&period_from=" + param_period_from + "&period_to=" + param_period_to + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
