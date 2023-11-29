var ShareApplication_Share_App_retrieveShareCertificatePrint = {
    /*
     Function to invoke API
     Notes:
     Resource: Share_App
     Description: retrieveShareCertificatePrint
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveShareCertificatePrint_Request, callbackHandler)
    {
        var param_orgnid = (retrieveShareCertificatePrint_Request.context && retrieveShareCertificatePrint_Request.context.hasOwnProperty('orgnId')) ? retrieveShareCertificatePrint_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveShareCertificatePrint_Request.context && retrieveShareCertificatePrint_Request.context.hasOwnProperty('locnId')) ? retrieveShareCertificatePrint_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveShareCertificatePrint_Request.context && retrieveShareCertificatePrint_Request.context.hasOwnProperty('userId')) ? retrieveShareCertificatePrint_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveShareCertificatePrint_Request.context && retrieveShareCertificatePrint_Request.context.hasOwnProperty('localeId')) ? retrieveShareCertificatePrint_Request.context["localeId"] : null; //Unicode string(100)
        var param_share_certificate = (retrieveShareCertificatePrint_Request.context.Header && retrieveShareCertificatePrint_Request.context.Header.hasOwnProperty('share_certificate')) ? retrieveShareCertificatePrint_Request.context.Header["share_certificate"] : null; //Unicode string(50)
        var param_fpoorgn_code = (retrieveShareCertificatePrint_Request.context.Header && retrieveShareCertificatePrint_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveShareCertificatePrint_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/sharecertificate_print?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&share_certificate=" + param_share_certificate + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ShareApplication_Share_App_retrieveShareCertificatePrint.retrieveShareCertificatePrint_ResponseHandler);
        return true;
    },
    
    retrieveShareCertificatePrint_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveShareCertificatePrint_ResponseObject = new retrieveShareCertificatePrintResponse(responseData, "JSON");
            ShareApplication_Share_App_retrieveShareCertificatePrint.callbackfunction(retrieveShareCertificatePrint_ResponseObject, textStatus);
        }
        else {
            ShareApplication_Share_App_retrieveShareCertificatePrint.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveShareCertificatePrintRequestcontext();
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
        var param_share_certificate = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('share_certificate')) ? HeaderrequestObject["share_certificate"] : null; //Unicode string(50)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/sharecertificate_print?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&share_certificate=" + param_share_certificate + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
