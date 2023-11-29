var ReceiptUpdation_receipt_update_retrieveReceiptUpdation = {
    /*
     Function to invoke API
     Notes:
     Resource: receipt_update
     Description: retrieveReceiptUpdation
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveReceiptUpdation_Request, callbackHandler)
    {
        var param_orgnid = (retrieveReceiptUpdation_Request.context && retrieveReceiptUpdation_Request.context.hasOwnProperty('orgnId')) ? retrieveReceiptUpdation_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveReceiptUpdation_Request.context && retrieveReceiptUpdation_Request.context.hasOwnProperty('locnId')) ? retrieveReceiptUpdation_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveReceiptUpdation_Request.context && retrieveReceiptUpdation_Request.context.hasOwnProperty('userId')) ? retrieveReceiptUpdation_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveReceiptUpdation_Request.context && retrieveReceiptUpdation_Request.context.hasOwnProperty('localeId')) ? retrieveReceiptUpdation_Request.context["localeId"] : null; //Unicode string(100)
        var param_booking_rowid = (retrieveReceiptUpdation_Request.context.Header && retrieveReceiptUpdation_Request.context.Header.hasOwnProperty('booking_rowid')) ? retrieveReceiptUpdation_Request.context.Header["booking_rowid"] : null; //Integer(32)
        var param_booking_no = (retrieveReceiptUpdation_Request.context.Header && retrieveReceiptUpdation_Request.context.Header.hasOwnProperty('booking_no')) ? retrieveReceiptUpdation_Request.context.Header["booking_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReceiptUpdation/receipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&booking_rowid=" + param_booking_rowid + "&booking_no=" + param_booking_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ReceiptUpdation_receipt_update_retrieveReceiptUpdation.retrieveReceiptUpdation_ResponseHandler);
        return true;
    },
    
    retrieveReceiptUpdation_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveReceiptUpdation_ResponseObject = new retrieveReceiptUpdationResponse(responseData, "JSON");
            ReceiptUpdation_receipt_update_retrieveReceiptUpdation.callbackfunction(retrieveReceiptUpdation_ResponseObject, textStatus);
        }
        else {
            ReceiptUpdation_receipt_update_retrieveReceiptUpdation.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveReceiptUpdationRequestcontext();
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
        var param_booking_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('booking_rowid')) ? HeaderrequestObject["booking_rowid"] : null; //Integer(32)
        var param_booking_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('booking_no')) ? HeaderrequestObject["booking_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ReceiptUpdation/receipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&booking_rowid=" + param_booking_rowid + "&booking_no=" + param_booking_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
