var GST_gst_master_getGST = {
    /*
     Function to invoke API
     Notes:
     Resource: gst_master
     Description: getGST
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getGST_Request, callbackHandler)
    {
        var param_orgnid = (getGST_Request.context && getGST_Request.context.hasOwnProperty('orgnId')) ? getGST_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (getGST_Request.context && getGST_Request.context.hasOwnProperty('locnId')) ? getGST_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (getGST_Request.context && getGST_Request.context.hasOwnProperty('userId')) ? getGST_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (getGST_Request.context && getGST_Request.context.hasOwnProperty('localeId')) ? getGST_Request.context["localeId"] : null; //Unicode string(100)
        var param_taxrate_rowid = (getGST_Request.context.Header && getGST_Request.context.Header.hasOwnProperty('taxrate_rowid')) ? getGST_Request.context.Header["taxrate_rowid"] : null; //Integer(32)
        var param_provider_location = (getGST_Request.context.Header && getGST_Request.context.Header.hasOwnProperty('provider_location')) ? getGST_Request.context.Header["provider_location"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/GST/gst?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&taxrate_rowid=" + param_taxrate_rowid + "&provider_location=" + param_provider_location + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, GST_gst_master_getGST.getGST_ResponseHandler);
        return true;
    },
    
    getGST_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getGST_ResponseObject = new getGSTResponse(responseData, "JSON");
            GST_gst_master_getGST.callbackfunction(getGST_ResponseObject, textStatus);
        }
        else {
            GST_gst_master_getGST.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new getGSTRequestcontext();
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
        var param_taxrate_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('taxrate_rowid')) ? HeaderrequestObject["taxrate_rowid"] : null; //Integer(32)
        var param_provider_location = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('provider_location')) ? HeaderrequestObject["provider_location"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/GST/gst?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&taxrate_rowid=" + param_taxrate_rowid + "&provider_location=" + param_provider_location + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
