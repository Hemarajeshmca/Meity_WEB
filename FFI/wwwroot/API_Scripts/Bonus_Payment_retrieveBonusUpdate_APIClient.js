var BonusPayment_Bonus_Payment_retrieveBonusUpdate = {
    /*
     Function to invoke API
     Notes:
     Resource: Bonus_Payment
     Description: retrieveBonusUpdate
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveBonusUpdate_Request, callbackHandler)
    {
        var param_orgnid = (retrieveBonusUpdate_Request.context && retrieveBonusUpdate_Request.context.hasOwnProperty('orgnId')) ? retrieveBonusUpdate_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveBonusUpdate_Request.context && retrieveBonusUpdate_Request.context.hasOwnProperty('locnId')) ? retrieveBonusUpdate_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveBonusUpdate_Request.context && retrieveBonusUpdate_Request.context.hasOwnProperty('userId')) ? retrieveBonusUpdate_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveBonusUpdate_Request.context && retrieveBonusUpdate_Request.context.hasOwnProperty('localeId')) ? retrieveBonusUpdate_Request.context["localeId"] : null; //Unicode string(100)
        var param_bonus_status = (retrieveBonusUpdate_Request.context.Header && retrieveBonusUpdate_Request.context.Header.hasOwnProperty('bonus_status')) ? retrieveBonusUpdate_Request.context.Header["bonus_status"] : null; //Unicode string(50)
        var param_bonus_for = (retrieveBonusUpdate_Request.context.Header && retrieveBonusUpdate_Request.context.Header.hasOwnProperty('bonus_for')) ? retrieveBonusUpdate_Request.context.Header["bonus_for"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BonusPayment/bonus_status_update?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&bonus_status=" + param_bonus_status + "&bonus_for=" + param_bonus_for + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, BonusPayment_Bonus_Payment_retrieveBonusUpdate.retrieveBonusUpdate_ResponseHandler);
        return true;
    },
    
    retrieveBonusUpdate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveBonusUpdate_ResponseObject = new retrieveBonusUpdateResponse(responseData, "JSON");
            BonusPayment_Bonus_Payment_retrieveBonusUpdate.callbackfunction(retrieveBonusUpdate_ResponseObject, textStatus);
        }
        else {
            BonusPayment_Bonus_Payment_retrieveBonusUpdate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveBonusUpdateRequestcontext();
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
        var param_bonus_status = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('bonus_status')) ? HeaderrequestObject["bonus_status"] : null; //Unicode string(50)
        var param_bonus_for = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('bonus_for')) ? HeaderrequestObject["bonus_for"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BonusPayment/bonus_status_update?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&bonus_status=" + param_bonus_status + "&bonus_for=" + param_bonus_for + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
