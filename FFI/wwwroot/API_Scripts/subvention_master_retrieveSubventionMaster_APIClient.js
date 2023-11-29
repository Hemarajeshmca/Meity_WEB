var SubventionMaster_subvention_master_retrieveSubventionMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: subvention_master
     Description: retrieveSubventionMaster
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveMaintainMaster_Request, callbackHandler)
    {
        var param_orgnid = (retrieveMaintainMaster_Request.context && retrieveMaintainMaster_Request.context.hasOwnProperty('orgnId')) ? retrieveMaintainMaster_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveMaintainMaster_Request.context && retrieveMaintainMaster_Request.context.hasOwnProperty('locnId')) ? retrieveMaintainMaster_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveMaintainMaster_Request.context && retrieveMaintainMaster_Request.context.hasOwnProperty('userId')) ? retrieveMaintainMaster_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveMaintainMaster_Request.context && retrieveMaintainMaster_Request.context.hasOwnProperty('localeId')) ? retrieveMaintainMaster_Request.context["localeId"] : null; //Unicode string(100)
        var param_loan_subvention_rowid = (retrieveMaintainMaster_Request.context.Header && retrieveMaintainMaster_Request.context.Header.hasOwnProperty('loansubvention_rowid')) ? retrieveMaintainMaster_Request.context.Header["loansubvention_rowid"] : null; //Integer(32)
        var param_subvention_code = (retrieveMaintainMaster_Request.context.Header && retrieveMaintainMaster_Request.context.Header.hasOwnProperty('subvention_code')) ? retrieveMaintainMaster_Request.context.Header["subvention_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/master?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_subvention_rowid=" + param_loan_subvention_rowid + "&subvention_code=" + param_subvention_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, SubventionMaster_subvention_master_retrieveSubventionMaster.retrieveSubventionMaster_ResponseHandler);
        return true;
    },
    
    retrieveSubventionMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveMaintainMaster_ResponseObject = new retrieveMaintainMasterResponse(responseData, "JSON");
            SubventionMaster_subvention_master_retrieveSubventionMaster.callbackfunction(retrieveMaintainMaster_ResponseObject, textStatus);
        }
        else {
            SubventionMaster_subvention_master_retrieveSubventionMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveMaintainMasterRequestcontext();
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
        var param_loan_subvention_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loansubvention_rowid')) ? HeaderrequestObject["loansubvention_rowid"] : null; //Integer(32)
        var param_subvention_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('subvention_code')) ? HeaderrequestObject["subvention_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/master?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&loan_subvention_rowid=" + param_loan_subvention_rowid + "&subvention_code=" + param_subvention_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
