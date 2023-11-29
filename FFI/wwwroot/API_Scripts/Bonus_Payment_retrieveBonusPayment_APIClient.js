var BonusPayment_Bonus_Payment_retrieveBonusPayment = {
    /*
     Function to invoke API
     Notes:
     Resource: Bonus_Payment
     Description: retrieveBonusPayment
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveBonusPayment_Request, callbackHandler)
    {
        var param_orgnid = (retrieveBonusPayment_Request.context && retrieveBonusPayment_Request.context.hasOwnProperty('orgnId')) ? retrieveBonusPayment_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveBonusPayment_Request.context && retrieveBonusPayment_Request.context.hasOwnProperty('locnId')) ? retrieveBonusPayment_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveBonusPayment_Request.context && retrieveBonusPayment_Request.context.hasOwnProperty('userId')) ? retrieveBonusPayment_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveBonusPayment_Request.context && retrieveBonusPayment_Request.context.hasOwnProperty('localeId')) ? retrieveBonusPayment_Request.context["localeId"] : null; //Unicode string(100)
        var param_bonus_rowid = (retrieveBonusPayment_Request.context.Header && retrieveBonusPayment_Request.context.Header.hasOwnProperty('bonus_rowid')) ? retrieveBonusPayment_Request.context.Header["bonus_rowid"] : null; //Integer(32)
        var param_aggrorgn_type = (retrieveBonusPayment_Request.context.Header && retrieveBonusPayment_Request.context.Header.hasOwnProperty('aggrorgn_type')) ? retrieveBonusPayment_Request.context.Header["aggrorgn_type"] : null; //Unicode string(50)
        var param_aggrorgn_code = (retrieveBonusPayment_Request.context.Header && retrieveBonusPayment_Request.context.Header.hasOwnProperty('aggrorgn_code')) ? retrieveBonusPayment_Request.context.Header["aggrorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BonusPayment/bonuspayment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&bonus_rowid=" + param_bonus_rowid + "&aggrorgn_type=" + param_aggrorgn_type + "&aggrorgn_code=" + param_aggrorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, BonusPayment_Bonus_Payment_retrieveBonusPayment.retrieveBonusPayment_ResponseHandler);
        return true;
    },
    
    retrieveBonusPayment_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveBonusPayment_ResponseObject = new retrieveBonusPaymentResponse(responseData, "JSON");
            BonusPayment_Bonus_Payment_retrieveBonusPayment.callbackfunction(retrieveBonusPayment_ResponseObject, textStatus);
        }
        else {
            BonusPayment_Bonus_Payment_retrieveBonusPayment.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveBonusPaymentRequestcontext();
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
        var param_bonus_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('bonus_rowid')) ? HeaderrequestObject["bonus_rowid"] : null; //Integer(32)
        var param_aggrorgn_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('aggrorgn_type')) ? HeaderrequestObject["aggrorgn_type"] : null; //Unicode string(50)
        var param_aggrorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('aggrorgn_code')) ? HeaderrequestObject["aggrorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BonusPayment/bonuspayment?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&bonus_rowid=" + param_bonus_rowid + "&aggrorgn_type=" + param_aggrorgn_type + "&aggrorgn_code=" + param_aggrorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
