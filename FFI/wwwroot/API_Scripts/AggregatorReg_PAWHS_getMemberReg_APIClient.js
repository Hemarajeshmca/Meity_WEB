var AggregatorRegistration_AggregatorReg_PAWHS_getMemberReg = {
    /*
     Function to invoke API
     Notes:
     Resource: AggregatorReg
     Description: PAWHS_getMemberReg
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getMemberReg_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getMemberReg_Request.context && PAWHS_getMemberReg_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getMemberReg_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getMemberReg_Request.context && PAWHS_getMemberReg_Request.context.hasOwnProperty('locnId')) ? PAWHS_getMemberReg_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getMemberReg_Request.context && PAWHS_getMemberReg_Request.context.hasOwnProperty('userId')) ? PAWHS_getMemberReg_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getMemberReg_Request.context && PAWHS_getMemberReg_Request.context.hasOwnProperty('localeId')) ? PAWHS_getMemberReg_Request.context["localeId"] : null; //Unicode string(100)
        var param_orgn_rowid = (PAWHS_getMemberReg_Request.context.Header && PAWHS_getMemberReg_Request.context.Header.hasOwnProperty('orgn_rowid')) ? PAWHS_getMemberReg_Request.context.Header["orgn_rowid"] : null; //Integer(32)
        var param_aggregator_code = (PAWHS_getMemberReg_Request.context.Header && PAWHS_getMemberReg_Request.context.Header.hasOwnProperty('aggregator_code')) ? PAWHS_getMemberReg_Request.context.Header["aggregator_code"] : null; //Unicode string(50)
        var param_orgn_code = (PAWHS_getMemberReg_Request.context.Header && PAWHS_getMemberReg_Request.context.Header.hasOwnProperty('orgn_code')) ? PAWHS_getMemberReg_Request.context.Header["orgn_code"] : null; //Unicode string(50)
        var param_fpo_code = (PAWHS_getMemberReg_Request.context.Header && PAWHS_getMemberReg_Request.context.Header.hasOwnProperty('fpo_code')) ? PAWHS_getMemberReg_Request.context.Header["fpo_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorRegistration/Aggr_mem_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&orgn_rowid=" + param_orgn_rowid + "&orgn_code=" + param_orgn_code + "&aggregator_code=" + param_aggregator_code + "&fpo_code=" + param_fpo_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, AggregatorRegistration_AggregatorReg_PAWHS_getMemberReg.PAWHS_getMemberReg_ResponseHandler);
        return true;
    },
    
    PAWHS_getMemberReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getMemberReg_ResponseObject = new PAWHS_getMemberRegResponse(responseData, "JSON");
            AggregatorRegistration_AggregatorReg_PAWHS_getMemberReg.callbackfunction(PAWHS_getMemberReg_ResponseObject, textStatus);
        }
        else {
            AggregatorRegistration_AggregatorReg_PAWHS_getMemberReg.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getMemberRegRequestcontext();
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
        var param_orgn_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('orgn_rowid')) ? HeaderrequestObject["orgn_rowid"] : null; //Integer(32)
        var param_aggregator_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('aggregator_code')) ? HeaderrequestObject["aggregator_code"] : null; //Unicode string(50)
        var param_orgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('orgn_code')) ? HeaderrequestObject["orgn_code"] : null; //Unicode string(50)
        var param_fpo_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpo_code')) ? HeaderrequestObject["fpo_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorRegistration/Aggr_mem_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&orgn_rowid=" + param_orgn_rowid + "&orgn_code=" + param_orgn_code + "&aggregator_code=" + param_aggregator_code + "&fpo_code=" + param_fpo_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
