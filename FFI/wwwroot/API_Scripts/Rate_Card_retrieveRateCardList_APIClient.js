var RateCard_Rate_Card_retrieveRateCardList = {
    /*
     Function to invoke API
     Notes:
     Resource: Rate_Card
     Description: retrieveRateCardList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveRateCardList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveRateCardList_Request.context && retrieveRateCardList_Request.context.hasOwnProperty('orgnId')) ? retrieveRateCardList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveRateCardList_Request.context && retrieveRateCardList_Request.context.hasOwnProperty('locnId')) ? retrieveRateCardList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveRateCardList_Request.context && retrieveRateCardList_Request.context.hasOwnProperty('userId')) ? retrieveRateCardList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveRateCardList_Request.context && retrieveRateCardList_Request.context.hasOwnProperty('localeId')) ? retrieveRateCardList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveRateCardList_Request.context.Filter && retrieveRateCardList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveRateCardList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveRateCardList_Request.context.Filter && retrieveRateCardList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveRateCardList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveRateCardList_Request.context.Filter && retrieveRateCardList_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? retrieveRateCardList_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveRateCardList_Request.context.Filter && retrieveRateCardList_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? retrieveRateCardList_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RateCard/allrate_card?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, RateCard_Rate_Card_retrieveRateCardList.retrieveRateCardList_ResponseHandler);
        return true;
    },
    
    retrieveRateCardList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveRateCardList_ResponseObject = new retrieveRateCardListResponse(responseData, "JSON");
            RateCard_Rate_Card_retrieveRateCardList.callbackfunction(retrieveRateCardList_ResponseObject, textStatus);
        }
        else {
            RateCard_Rate_Card_retrieveRateCardList.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, FilterrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveRateCardListRequestcontext();
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
        var param_filterby_option = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Option')) ? FilterrequestObject["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Code')) ? FilterrequestObject["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_FromValue')) ? FilterrequestObject["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_ToValue')) ? FilterrequestObject["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/RateCard/allrate_card?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
