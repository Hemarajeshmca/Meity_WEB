var FinYear_Fin_Year_retrieveFinYear = {
    /*
     Function to invoke API
     Notes:
     Resource: Fin_Year
     Description: retrieveFinYear
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFinYear_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFinYear_Request.context && retrieveFinYear_Request.context.hasOwnProperty('orgnId')) ? retrieveFinYear_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFinYear_Request.context && retrieveFinYear_Request.context.hasOwnProperty('locnId')) ? retrieveFinYear_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFinYear_Request.context && retrieveFinYear_Request.context.hasOwnProperty('userId')) ? retrieveFinYear_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFinYear_Request.context && retrieveFinYear_Request.context.hasOwnProperty('localeId')) ? retrieveFinYear_Request.context["localeId"] : null; //Unicode string(100)
        var param_finyear_rowid = (retrieveFinYear_Request.context.Header && retrieveFinYear_Request.context.Header.hasOwnProperty('finyear_rowid')) ? retrieveFinYear_Request.context.Header["finyear_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FinYear/fin_year?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&finyear_rowid=" + param_finyear_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FinYear_Fin_Year_retrieveFinYear.retrieveFinYear_ResponseHandler);
        return true;
    },
    
    retrieveFinYear_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFinYear_ResponseObject = new retrieveFinYearResponse(responseData, "JSON");
            FinYear_Fin_Year_retrieveFinYear.callbackfunction(retrieveFinYear_ResponseObject, textStatus);
        }
        else {
            FinYear_Fin_Year_retrieveFinYear.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFinYearRequestcontext();
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
        var param_finyear_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('finyear_rowid')) ? HeaderrequestObject["finyear_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FinYear/fin_year?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&finyear_rowid=" + param_finyear_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
