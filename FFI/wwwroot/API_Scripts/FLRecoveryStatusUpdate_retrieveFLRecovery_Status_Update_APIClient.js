var FLRecovery_Status_Update_FLRecoveryStatusUpdate_retrieveFLRecovery_Status_Update = {
    /*
     Function to invoke API
     Notes:
     Resource: FLRecoveryStatusUpdate
     Description: retrieveFLRecovery_Status_Update
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFLRecovery_Status_Update_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFLRecovery_Status_Update_Request.context && retrieveFLRecovery_Status_Update_Request.context.hasOwnProperty('orgnId')) ? retrieveFLRecovery_Status_Update_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFLRecovery_Status_Update_Request.context && retrieveFLRecovery_Status_Update_Request.context.hasOwnProperty('locnId')) ? retrieveFLRecovery_Status_Update_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFLRecovery_Status_Update_Request.context && retrieveFLRecovery_Status_Update_Request.context.hasOwnProperty('userId')) ? retrieveFLRecovery_Status_Update_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFLRecovery_Status_Update_Request.context && retrieveFLRecovery_Status_Update_Request.context.hasOwnProperty('localeId')) ? retrieveFLRecovery_Status_Update_Request.context["localeId"] : null; //Unicode string(100)
        var param_payment_mode = (retrieveFLRecovery_Status_Update_Request.context.Header && retrieveFLRecovery_Status_Update_Request.context.Header.hasOwnProperty('payment_mode')) ? retrieveFLRecovery_Status_Update_Request.context.Header["payment_mode"] : null; //Unicode string(50)
        var param_payment_status = (retrieveFLRecovery_Status_Update_Request.context.Header && retrieveFLRecovery_Status_Update_Request.context.Header.hasOwnProperty('payment_status')) ? retrieveFLRecovery_Status_Update_Request.context.Header["payment_status"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRecovery_Status_Update/flrecovery_status_update?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&payment_mode=" + param_payment_mode + "&payment_status=" + param_payment_status + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FLRecovery_Status_Update_FLRecoveryStatusUpdate_retrieveFLRecovery_Status_Update.retrieveFLRecovery_Status_Update_ResponseHandler);
        return true;
    },
    
    retrieveFLRecovery_Status_Update_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFLRecovery_Status_Update_ResponseObject = new retrieveFLRecovery_Status_UpdateResponse(responseData, "JSON");
            FLRecovery_Status_Update_FLRecoveryStatusUpdate_retrieveFLRecovery_Status_Update.callbackfunction(retrieveFLRecovery_Status_Update_ResponseObject, textStatus);
        }
        else {
            FLRecovery_Status_Update_FLRecoveryStatusUpdate_retrieveFLRecovery_Status_Update.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFLRecovery_Status_UpdateRequestcontext();
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
        var param_payment_mode = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('payment_mode')) ? HeaderrequestObject["payment_mode"] : null; //Unicode string(50)
        var param_payment_status = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('payment_status')) ? HeaderrequestObject["payment_status"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRecovery_Status_Update/flrecovery_status_update?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&payment_mode=" + param_payment_mode + "&payment_status=" + param_payment_status + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
