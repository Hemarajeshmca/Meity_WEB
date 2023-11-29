var InputCenterDemandGeneration_ICDGen_retrieveICDGEN = {
    /*
     Function to invoke API
     Notes:
     Resource: ICDGen
     Description: retrieveICDGEN
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveICDGEN_Request, callbackHandler)
    {
        var param_orgnid = (retrieveICDGEN_Request.context && retrieveICDGEN_Request.context.hasOwnProperty('orgnId')) ? retrieveICDGEN_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveICDGEN_Request.context && retrieveICDGEN_Request.context.hasOwnProperty('locnId')) ? retrieveICDGEN_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveICDGEN_Request.context && retrieveICDGEN_Request.context.hasOwnProperty('userId')) ? retrieveICDGEN_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveICDGEN_Request.context && retrieveICDGEN_Request.context.hasOwnProperty('localeId')) ? retrieveICDGEN_Request.context["localeId"] : null; //Unicode string(100)
        var param_icddemand_rowid = (retrieveICDGEN_Request.context.Header && retrieveICDGEN_Request.context.Header.hasOwnProperty('icdemand_rowid')) ? retrieveICDGEN_Request.context.Header["icdemand_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenterDemandGeneration/ICDGen?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&icddemand_rowid=" + param_icddemand_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, InputCenterDemandGeneration_ICDGen_retrieveICDGEN.retrieveICDGEN_ResponseHandler);
        return true;
    },
    
    retrieveICDGEN_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveICDGEN_ResponseObject = new retrieveICDGENResponse(responseData, "JSON");
            InputCenterDemandGeneration_ICDGen_retrieveICDGEN.callbackfunction(retrieveICDGEN_ResponseObject, textStatus);
        }
        else {
            InputCenterDemandGeneration_ICDGen_retrieveICDGEN.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveICDGENRequestcontext();
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
        var param_icddemand_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('icdemand_rowid')) ? HeaderrequestObject["icdemand_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/InputCenterDemandGeneration/ICDGen?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&icddemand_rowid=" + param_icddemand_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
