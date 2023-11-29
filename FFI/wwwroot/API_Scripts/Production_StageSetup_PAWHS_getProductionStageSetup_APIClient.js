var ProductionStageSetup_Production_StageSetup_PAWHS_getProductionStageSetup = {
    /*
     Function to invoke API
     Notes:
     Resource: Production_StageSetup
     Description: PAWHS_getProductionStageSetup
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getProductionStageSetup_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getProductionStageSetup_Request.context && PAWHS_getProductionStageSetup_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getProductionStageSetup_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getProductionStageSetup_Request.context && PAWHS_getProductionStageSetup_Request.context.hasOwnProperty('locnId')) ? PAWHS_getProductionStageSetup_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getProductionStageSetup_Request.context && PAWHS_getProductionStageSetup_Request.context.hasOwnProperty('userId')) ? PAWHS_getProductionStageSetup_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getProductionStageSetup_Request.context && PAWHS_getProductionStageSetup_Request.context.hasOwnProperty('localeId')) ? PAWHS_getProductionStageSetup_Request.context["localeId"] : null; //Unicode string(100)
        var param_production_rowid = (PAWHS_getProductionStageSetup_Request.context.Header && PAWHS_getProductionStageSetup_Request.context.Header.hasOwnProperty('production_rowid')) ? PAWHS_getProductionStageSetup_Request.context.Header["production_rowid"] : null; //Integer(32)
        var param_agg_code = (PAWHS_getProductionStageSetup_Request.context.Header && PAWHS_getProductionStageSetup_Request.context.Header.hasOwnProperty('agg_code')) ? PAWHS_getProductionStageSetup_Request.context.Header["agg_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProductionStageSetup/production_stagesetup?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&production_rowid=" + param_production_rowid + "&agg_code=" + param_agg_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ProductionStageSetup_Production_StageSetup_PAWHS_getProductionStageSetup.PAWHS_getProductionStageSetup_ResponseHandler);
        return true;
    },
    
    PAWHS_getProductionStageSetup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getProductionStageSetup_ResponseObject = new PAWHS_getProductionStageSetupResponse(responseData, "JSON");
            ProductionStageSetup_Production_StageSetup_PAWHS_getProductionStageSetup.callbackfunction(PAWHS_getProductionStageSetup_ResponseObject, textStatus);
        }
        else {
            ProductionStageSetup_Production_StageSetup_PAWHS_getProductionStageSetup.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getProductionStageSetupRequestcontext();
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
        var param_production_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('production_rowid')) ? HeaderrequestObject["production_rowid"] : null; //Integer(32)
        var param_agg_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('agg_code')) ? HeaderrequestObject["agg_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProductionStageSetup/production_stagesetup?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&production_rowid=" + param_production_rowid + "&agg_code=" + param_agg_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
