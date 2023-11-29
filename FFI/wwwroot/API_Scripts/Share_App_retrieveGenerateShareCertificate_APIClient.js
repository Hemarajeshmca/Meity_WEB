var ShareApplication_Share_App_retrieveGenerateShareCertificate = {
    /*
     Function to invoke API
     Notes:
     Resource: Share_App
     Description: retrieveGenerateShareCertificate
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveGenerateShareCertificate_Request, callbackHandler)
    {
        var param_orgnid = (retrieveGenerateShareCertificate_Request.context && retrieveGenerateShareCertificate_Request.context.hasOwnProperty('orgnId')) ? retrieveGenerateShareCertificate_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveGenerateShareCertificate_Request.context && retrieveGenerateShareCertificate_Request.context.hasOwnProperty('locnId')) ? retrieveGenerateShareCertificate_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveGenerateShareCertificate_Request.context && retrieveGenerateShareCertificate_Request.context.hasOwnProperty('userId')) ? retrieveGenerateShareCertificate_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveGenerateShareCertificate_Request.context && retrieveGenerateShareCertificate_Request.context.hasOwnProperty('localeId')) ? retrieveGenerateShareCertificate_Request.context["localeId"] : null; //Unicode string(100)
        var param_register_rowid = (retrieveGenerateShareCertificate_Request.context.Header && retrieveGenerateShareCertificate_Request.context.Header.hasOwnProperty('register_rowid')) ? retrieveGenerateShareCertificate_Request.context.Header["register_rowid"] : null; //Integer(16)
        var param_fpoorgn_code = (retrieveGenerateShareCertificate_Request.context.Header && retrieveGenerateShareCertificate_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveGenerateShareCertificate_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        var param_register_type = (retrieveGenerateShareCertificate_Request.context.Header && retrieveGenerateShareCertificate_Request.context.Header.hasOwnProperty('register_type')) ? retrieveGenerateShareCertificate_Request.context.Header["register_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/allotment_shareregister?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&register_rowid=" + param_register_rowid + "&register_type=" + param_register_type + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ShareApplication_Share_App_retrieveGenerateShareCertificate.retrieveGenerateShareCertificate_ResponseHandler);
        return true;
    },
    
    retrieveGenerateShareCertificate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveGenerateShareCertificate_ResponseObject = new retrieveGenerateShareCertificateResponse(responseData, "JSON");
            ShareApplication_Share_App_retrieveGenerateShareCertificate.callbackfunction(retrieveGenerateShareCertificate_ResponseObject, textStatus);
        }
        else {
            ShareApplication_Share_App_retrieveGenerateShareCertificate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveGenerateShareCertificateRequestcontext();
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
        var param_register_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('register_rowid')) ? HeaderrequestObject["register_rowid"] : null; //Integer(16)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        var param_register_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('register_type')) ? HeaderrequestObject["register_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/allotment_shareregister?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&register_rowid=" + param_register_rowid + "&register_type=" + param_register_type + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
