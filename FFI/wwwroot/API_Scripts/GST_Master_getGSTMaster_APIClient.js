var GSTMaster_GST_Master_getGSTMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: GST_Master
     Description: getGSTMaster
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getGSTMaster_Request, callbackHandler)
    {
        var param_orgnid = (getGSTMaster_Request.context && getGSTMaster_Request.context.hasOwnProperty('orgnId')) ? getGSTMaster_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (getGSTMaster_Request.context && getGSTMaster_Request.context.hasOwnProperty('locnId')) ? getGSTMaster_Request.context["locnId"] : null; //Unicode string(100)
        var param_localeid = (getGSTMaster_Request.context && getGSTMaster_Request.context.hasOwnProperty('userId')) ? getGSTMaster_Request.context["userId"] : null; //Unicode string(128)
        var param_userid = (getGSTMaster_Request.context && getGSTMaster_Request.context.hasOwnProperty('localeId')) ? getGSTMaster_Request.context["localeId"] : null; //Unicode string(100)
        var param_gstmaster_rowid = (getGSTMaster_Request.context.Header && getGSTMaster_Request.context.Header.hasOwnProperty('gstmaster_rowid')) ? getGSTMaster_Request.context.Header["gstmaster_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/GSTMaster/icd_gst_master_getGST_APIClient?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&gstmaster_rowid=" + param_gstmaster_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, GSTMaster_GST_Master_getGSTMaster.getGSTMaster_ResponseHandler);
        return true;
    },
    
    getGSTMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getGSTMaster_ResponseObject = new getGSTMasterResponse(responseData, "JSON");
            GSTMaster_GST_Master_getGSTMaster.callbackfunction(getGSTMaster_ResponseObject, textStatus);
        }
        else {
            GSTMaster_GST_Master_getGSTMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new getGSTMasterRequestcontext();
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
        var param_localeid = (contextrequestObject && contextrequestObject.hasOwnProperty('userId')) ? contextrequestObject["userId"] : null; //Unicode string(128)
        var param_userid = (contextrequestObject && contextrequestObject.hasOwnProperty('localeId')) ? contextrequestObject["localeId"] : null; //Unicode string(100)
        var param_gstmaster_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('gstmaster_rowid')) ? HeaderrequestObject["gstmaster_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/GSTMaster/icd_gst_master_getGST_APIClient?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&gstmaster_rowid=" + param_gstmaster_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
