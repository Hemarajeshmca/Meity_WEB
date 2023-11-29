var ShareApplication_Share_App_retrieveUpdateShareAllotment = {
    /*
     Function to invoke API
     Notes:
     Resource: Share_App
     Description: retrieveUpdateShareAllotment
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveUpdateShareAllotment_Request, callbackHandler)
    {
        var param_orgnid = (retrieveUpdateShareAllotment_Request.context && retrieveUpdateShareAllotment_Request.context.hasOwnProperty('orgnId')) ? retrieveUpdateShareAllotment_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveUpdateShareAllotment_Request.context && retrieveUpdateShareAllotment_Request.context.hasOwnProperty('locnId')) ? retrieveUpdateShareAllotment_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveUpdateShareAllotment_Request.context && retrieveUpdateShareAllotment_Request.context.hasOwnProperty('userId')) ? retrieveUpdateShareAllotment_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveUpdateShareAllotment_Request.context && retrieveUpdateShareAllotment_Request.context.hasOwnProperty('localeId')) ? retrieveUpdateShareAllotment_Request.context["localeId"] : null; //Unicode string(100)
        var param_fpoorgn_code = (retrieveUpdateShareAllotment_Request.context.Header && retrieveUpdateShareAllotment_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveUpdateShareAllotment_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        var param_alloc_status_code = (retrieveUpdateShareAllotment_Request.context.Header && retrieveUpdateShareAllotment_Request.context.Header.hasOwnProperty('alloc_status_code')) ? retrieveUpdateShareAllotment_Request.context.Header["alloc_status_code"] : null; //Unicode string(50)
        var param_board_approval_date = (retrieveUpdateShareAllotment_Request.context.Header && retrieveUpdateShareAllotment_Request.context.Header.hasOwnProperty('board_approval_date')) ? retrieveUpdateShareAllotment_Request.context.Header["board_approval_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/update_share?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "&alloc_status_code=" + param_alloc_status_code + "&board_approval_date=" + param_board_approval_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ShareApplication_Share_App_retrieveUpdateShareAllotment.retrieveUpdateShareAllotment_ResponseHandler);
        return true;
    },
    
    retrieveUpdateShareAllotment_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveUpdateShareAllotment_ResponseObject = new retrieveUpdateShareAllotmentResponse(responseData, "JSON");
            ShareApplication_Share_App_retrieveUpdateShareAllotment.callbackfunction(retrieveUpdateShareAllotment_ResponseObject, textStatus);
        }
        else {
            ShareApplication_Share_App_retrieveUpdateShareAllotment.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveUpdateShareAllotmentRequestcontext();
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
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        var param_alloc_status_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('alloc_status_code')) ? HeaderrequestObject["alloc_status_code"] : null; //Unicode string(50)
        var param_board_approval_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('board_approval_date')) ? HeaderrequestObject["board_approval_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ShareApplication/update_share?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "&alloc_status_code=" + param_alloc_status_code + "&board_approval_date=" + param_board_approval_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
