var ServiceMaster_Service_Master_PAWHS_getServiceMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: Service_Master
     Description: PAWHS_getServiceMaster
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getServiceMaster_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getServiceMaster_Request.context && PAWHS_getServiceMaster_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getServiceMaster_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getServiceMaster_Request.context && PAWHS_getServiceMaster_Request.context.hasOwnProperty('locnId')) ? PAWHS_getServiceMaster_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getServiceMaster_Request.context && PAWHS_getServiceMaster_Request.context.hasOwnProperty('userId')) ? PAWHS_getServiceMaster_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getServiceMaster_Request.context && PAWHS_getServiceMaster_Request.context.hasOwnProperty('localeId')) ? PAWHS_getServiceMaster_Request.context["localeId"] : null; //Unicode string(100)
        var param_service_rowid = (PAWHS_getServiceMaster_Request.context.Header && PAWHS_getServiceMaster_Request.context.Header.hasOwnProperty('service_rowid')) ? PAWHS_getServiceMaster_Request.context.Header["service_rowid"] : null; //Integer(32)
        var param_agg_code = (PAWHS_getServiceMaster_Request.context.Header && PAWHS_getServiceMaster_Request.context.Header.hasOwnProperty('agg_code')) ? PAWHS_getServiceMaster_Request.context.Header["agg_code"] : null; //Unicode string(50)
        var param_service_code = (PAWHS_getServiceMaster_Request.context.Header && PAWHS_getServiceMaster_Request.context.Header.hasOwnProperty('service_code')) ? PAWHS_getServiceMaster_Request.context.Header["service_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceMaster/pawhs_service_master?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&service_rowid=" + param_service_rowid + "&agg_code=" + param_agg_code + "&service_code=" + param_service_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ServiceMaster_Service_Master_PAWHS_getServiceMaster.PAWHS_getServiceMaster_ResponseHandler);
        return true;
    },
    
    PAWHS_getServiceMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getServiceMaster_ResponseObject = new PAWHS_getServiceMasterResponse(responseData, "JSON");
            ServiceMaster_Service_Master_PAWHS_getServiceMaster.callbackfunction(PAWHS_getServiceMaster_ResponseObject, textStatus);
        }
        else {
            ServiceMaster_Service_Master_PAWHS_getServiceMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getServiceMasterRequestcontext();
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
        var param_service_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('service_rowid')) ? HeaderrequestObject["service_rowid"] : null; //Integer(32)
        var param_agg_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('agg_code')) ? HeaderrequestObject["agg_code"] : null; //Unicode string(50)
        var param_service_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('service_code')) ? HeaderrequestObject["service_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ServiceMaster/pawhs_service_master?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&service_rowid=" + param_service_rowid + "&agg_code=" + param_agg_code + "&service_code=" + param_service_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
