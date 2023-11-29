var StageItemDefinition_StageItem_Definition_PAWHS_getStageItemDefinition = {
    /*
     Function to invoke API
     Notes:
     Resource: StageItem_Definition
     Description: PAWHS_getStageItemDefinition
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getStageItemDefinition_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getStageItemDefinition_Request.context && PAWHS_getStageItemDefinition_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getStageItemDefinition_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getStageItemDefinition_Request.context && PAWHS_getStageItemDefinition_Request.context.hasOwnProperty('locnId')) ? PAWHS_getStageItemDefinition_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getStageItemDefinition_Request.context && PAWHS_getStageItemDefinition_Request.context.hasOwnProperty('userId')) ? PAWHS_getStageItemDefinition_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getStageItemDefinition_Request.context && PAWHS_getStageItemDefinition_Request.context.hasOwnProperty('localeId')) ? PAWHS_getStageItemDefinition_Request.context["localeId"] : null; //Unicode string(100)
        var param_stage_rowid = (PAWHS_getStageItemDefinition_Request.context.Header && PAWHS_getStageItemDefinition_Request.context.Header.hasOwnProperty('stage_rowid')) ? PAWHS_getStageItemDefinition_Request.context.Header["stage_rowid"] : null; //Integer(32)
        var param_fg_code = (PAWHS_getStageItemDefinition_Request.context.Header && PAWHS_getStageItemDefinition_Request.context.Header.hasOwnProperty('fg_code')) ? PAWHS_getStageItemDefinition_Request.context.Header["fg_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StageItemDefinition/stageitem_definition?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&stage_rowid=" + param_stage_rowid + "&fg_code=" + param_fg_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, StageItemDefinition_StageItem_Definition_PAWHS_getStageItemDefinition.PAWHS_getStageItemDefinition_ResponseHandler);
        return true;
    },
    
    PAWHS_getStageItemDefinition_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getStageItemDefinition_ResponseObject = new PAWHS_getStageItemDefinitionResponse(responseData, "JSON");
            StageItemDefinition_StageItem_Definition_PAWHS_getStageItemDefinition.callbackfunction(PAWHS_getStageItemDefinition_ResponseObject, textStatus);
        }
        else {
            StageItemDefinition_StageItem_Definition_PAWHS_getStageItemDefinition.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getStageItemDefinitionRequestcontext();
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
        var param_stage_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('stage_rowid')) ? HeaderrequestObject["stage_rowid"] : null; //Integer(32)
        var param_fg_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fg_code')) ? HeaderrequestObject["fg_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/StageItemDefinition/stageitem_definition?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&stage_rowid=" + param_stage_rowid + "&fg_code=" + param_fg_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
