var FLDeposit_Slip_Generation_FLDepositSlipGeneration_retrieveFLDeposit_Slip_Generation = {
    /*
     Function to invoke API
     Notes:
     Resource: FLDepositSlipGeneration
     Description: retrieveFLDeposit_Slip_Generation
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFLDeposit_Slip_Generation_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFLDeposit_Slip_Generation_Request.context && retrieveFLDeposit_Slip_Generation_Request.context.hasOwnProperty('orgnId')) ? retrieveFLDeposit_Slip_Generation_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFLDeposit_Slip_Generation_Request.context && retrieveFLDeposit_Slip_Generation_Request.context.hasOwnProperty('locnId')) ? retrieveFLDeposit_Slip_Generation_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFLDeposit_Slip_Generation_Request.context && retrieveFLDeposit_Slip_Generation_Request.context.hasOwnProperty('userId')) ? retrieveFLDeposit_Slip_Generation_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFLDeposit_Slip_Generation_Request.context && retrieveFLDeposit_Slip_Generation_Request.context.hasOwnProperty('localeId')) ? retrieveFLDeposit_Slip_Generation_Request.context["localeId"] : null; //Unicode string(100)
        var param_select_option = (retrieveFLDeposit_Slip_Generation_Request.context.Header && retrieveFLDeposit_Slip_Generation_Request.context.Header.hasOwnProperty('select_option')) ? retrieveFLDeposit_Slip_Generation_Request.context.Header["select_option"] : null; //Unicode string(50)
        var param_run_date = (retrieveFLDeposit_Slip_Generation_Request.context.Header && retrieveFLDeposit_Slip_Generation_Request.context.Header.hasOwnProperty('run_date')) ? retrieveFLDeposit_Slip_Generation_Request.context.Header["run_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLDeposit_Slip_Generation/fldeposit_slip_gen?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&select_option=" + param_select_option + "&run_date=" + param_run_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FLDeposit_Slip_Generation_FLDepositSlipGeneration_retrieveFLDeposit_Slip_Generation.retrieveFLDeposit_Slip_Generation_ResponseHandler);
        return true;
    },
    
    retrieveFLDeposit_Slip_Generation_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFLDeposit_Slip_Generation_ResponseObject = new retrieveFLDeposit_Slip_GenerationResponse(responseData, "JSON");
            FLDeposit_Slip_Generation_FLDepositSlipGeneration_retrieveFLDeposit_Slip_Generation.callbackfunction(retrieveFLDeposit_Slip_Generation_ResponseObject, textStatus);
        }
        else {
            FLDeposit_Slip_Generation_FLDepositSlipGeneration_retrieveFLDeposit_Slip_Generation.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFLDeposit_Slip_GenerationRequestcontext();
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
        var param_select_option = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('select_option')) ? HeaderrequestObject["select_option"] : null; //Unicode string(50)
        var param_run_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('run_date')) ? HeaderrequestObject["run_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLDeposit_Slip_Generation/fldeposit_slip_gen?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&select_option=" + param_select_option + "&run_date=" + param_run_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
