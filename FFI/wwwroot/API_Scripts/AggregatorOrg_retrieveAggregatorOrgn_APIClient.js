var AggregatorOrgs_AggregatorOrg_retrieveAggregatorOrgn = {
    /*
     Function to invoke API
     Notes:
     Resource: AggregatorOrg
     Description: retrieveAggregatorOrgn
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveAggregatorOrgs_Request, callbackHandler)
    {
        var param_orgnid = (retrieveAggregatorOrgs_Request.context && retrieveAggregatorOrgs_Request.context.hasOwnProperty('orgnId')) ? retrieveAggregatorOrgs_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveAggregatorOrgs_Request.context && retrieveAggregatorOrgs_Request.context.hasOwnProperty('locnId')) ? retrieveAggregatorOrgs_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveAggregatorOrgs_Request.context && retrieveAggregatorOrgs_Request.context.hasOwnProperty('userId')) ? retrieveAggregatorOrgs_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveAggregatorOrgs_Request.context && retrieveAggregatorOrgs_Request.context.hasOwnProperty('localeId')) ? retrieveAggregatorOrgs_Request.context["localeId"] : null; //Unicode string(100)
        var param_orgn_rowid = (retrieveAggregatorOrgs_Request.context.Header && retrieveAggregatorOrgs_Request.context.Header.hasOwnProperty('orgn_rowid')) ? retrieveAggregatorOrgs_Request.context.Header["orgn_rowid"] : null; //Integer(32)
        var param_orgn_code = (retrieveAggregatorOrgs_Request.context.Header && retrieveAggregatorOrgs_Request.context.Header.hasOwnProperty('orgn_code')) ? retrieveAggregatorOrgs_Request.context.Header["orgn_code"] : null; //Unicode string(50)
        var param_version_no = (retrieveAggregatorOrgs_Request.context.Header && retrieveAggregatorOrgs_Request.context.Header.hasOwnProperty('version_no')) ? retrieveAggregatorOrgs_Request.context.Header["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorOrgs/aggregator_orgn?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&orgn_rowid=" + param_orgn_rowid + "&orgn_code=" + param_orgn_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, AggregatorOrgs_AggregatorOrg_retrieveAggregatorOrgn.retrieveAggregatorOrgn_ResponseHandler);
        return true;
    },
    
    retrieveAggregatorOrgn_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveAggregatorOrgs_ResponseObject = new retrieveAggregatorOrgsResponse(responseData, "JSON");
            AggregatorOrgs_AggregatorOrg_retrieveAggregatorOrgn.callbackfunction(retrieveAggregatorOrgs_ResponseObject, textStatus);
        }
        else {
            AggregatorOrgs_AggregatorOrg_retrieveAggregatorOrgn.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveAggregatorOrgsRequestcontext();
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
        var param_orgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('orgn_code')) ? HeaderrequestObject["orgn_code"] : null; //Unicode string(50)
        var param_version_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('version_no')) ? HeaderrequestObject["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorOrgs/aggregator_orgn?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&orgn_rowid=" + param_orgn_rowid + "&orgn_code=" + param_orgn_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
