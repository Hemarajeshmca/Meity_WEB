var RateCard_Rate_Card_retrieveRateCard = {
    /*
     Function to invoke API
     Notes:
     Resource: Rate_Card
     Description: retrieveRateCard
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveRateCard_Request, callbackHandler)
    {
        var param_orgnid = (retrieveRateCard_Request.context && retrieveRateCard_Request.context.hasOwnProperty('orgnId')) ? retrieveRateCard_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveRateCard_Request.context && retrieveRateCard_Request.context.hasOwnProperty('locnId')) ? retrieveRateCard_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveRateCard_Request.context && retrieveRateCard_Request.context.hasOwnProperty('userId')) ? retrieveRateCard_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveRateCard_Request.context && retrieveRateCard_Request.context.hasOwnProperty('localeId')) ? retrieveRateCard_Request.context["localeId"] : null; //Unicode string(100)
        var param_ratecard_rowid = (retrieveRateCard_Request.context.Header && retrieveRateCard_Request.context.Header.hasOwnProperty('ratecard_rowid')) ? retrieveRateCard_Request.context.Header["ratecard_rowid"] : null; //Integer(32)
        var param_ratecard_code = (retrieveRateCard_Request.context.Header && retrieveRateCard_Request.context.Header.hasOwnProperty('ratecard_code')) ? retrieveRateCard_Request.context.Header["ratecard_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RateCard/ratecard?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&ratecard_rowid=" + param_ratecard_rowid + "&ratecard_code=" + param_ratecard_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, RateCard_Rate_Card_retrieveRateCard.retrieveRateCard_ResponseHandler);
        return true;
    },
    
    retrieveRateCard_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveRateCard_ResponseObject = new retrieveRateCardResponse(responseData, "JSON");
            RateCard_Rate_Card_retrieveRateCard.callbackfunction(retrieveRateCard_ResponseObject, textStatus);
        }
        else {
            RateCard_Rate_Card_retrieveRateCard.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveRateCardRequestcontext();
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
        var param_ratecard_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('ratecard_rowid')) ? HeaderrequestObject["ratecard_rowid"] : null; //Integer(32)
        var param_ratecard_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('ratecard_code')) ? HeaderrequestObject["ratecard_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RateCard/ratecard?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&ratecard_rowid=" + param_ratecard_rowid + "&ratecard_code=" + param_ratecard_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
