var PaymentAdvice_Payment_Advice_retrievePaymentAdviceBillDetail = {
    /*
     Function to invoke API
     Notes:
     Resource: Payment_Advice
     Description: retrievePaymentAdviceBillDetail
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrievePaymentAdviceBillDetail_Request, callbackHandler)
    {
        var param_orgnid = (retrievePaymentAdviceBillDetail_Request.context && retrievePaymentAdviceBillDetail_Request.context.hasOwnProperty('orgnId')) ? retrievePaymentAdviceBillDetail_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrievePaymentAdviceBillDetail_Request.context && retrievePaymentAdviceBillDetail_Request.context.hasOwnProperty('locnId')) ? retrievePaymentAdviceBillDetail_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrievePaymentAdviceBillDetail_Request.context && retrievePaymentAdviceBillDetail_Request.context.hasOwnProperty('userId')) ? retrievePaymentAdviceBillDetail_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrievePaymentAdviceBillDetail_Request.context && retrievePaymentAdviceBillDetail_Request.context.hasOwnProperty('localeId')) ? retrievePaymentAdviceBillDetail_Request.context["localeId"] : null; //Unicode string(100)
        var param_ccbill_no = (retrievePaymentAdviceBillDetail_Request.context.Header && retrievePaymentAdviceBillDetail_Request.context.Header.hasOwnProperty('ccbill_no')) ? retrievePaymentAdviceBillDetail_Request.context.Header["ccbill_no"] : null; //Unicode string(100)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentAdvice/payment_advice_bill?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&ccbill_no=" + param_ccbill_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, PaymentAdvice_Payment_Advice_retrievePaymentAdviceBillDetail.retrievePaymentAdviceBillDetail_ResponseHandler);
        return true;
    },
    
    retrievePaymentAdviceBillDetail_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrievePaymentAdviceBillDetail_ResponseObject = new retrievePaymentAdviceBillDetailResponse(responseData, "JSON");
            PaymentAdvice_Payment_Advice_retrievePaymentAdviceBillDetail.callbackfunction(retrievePaymentAdviceBillDetail_ResponseObject, textStatus);
        }
        else {
            PaymentAdvice_Payment_Advice_retrievePaymentAdviceBillDetail.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrievePaymentAdviceBillDetailRequestcontext();
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
        var param_ccbill_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('ccbill_no')) ? HeaderrequestObject["ccbill_no"] : null; //Unicode string(100)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PaymentAdvice/payment_advice_bill?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&ccbill_no=" + param_ccbill_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
