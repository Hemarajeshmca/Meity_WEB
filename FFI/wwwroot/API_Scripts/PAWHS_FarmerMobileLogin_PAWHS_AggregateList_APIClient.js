var PAWHSFarmerLogin_PAWHS_FarmerMobileLogin_PAWHS_AggregateList = {
    /*
     Function to invoke API
     Notes:
     Resource: PAWHS_FarmerMobileLogin
     Description: PAWHS_AggregateList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_AggregateList_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_AggregateList_Request.context && PAWHS_AggregateList_Request.context.hasOwnProperty('orgnId')) ? PAWHS_AggregateList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_AggregateList_Request.context && PAWHS_AggregateList_Request.context.hasOwnProperty('locnId')) ? PAWHS_AggregateList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_AggregateList_Request.context && PAWHS_AggregateList_Request.context.hasOwnProperty('userId')) ? PAWHS_AggregateList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_AggregateList_Request.context && PAWHS_AggregateList_Request.context.hasOwnProperty('localeId')) ? PAWHS_AggregateList_Request.context["localeId"] : null; //Unicode string(100)
        var param_farmer_code = (PAWHS_AggregateList_Request.context.Header && PAWHS_AggregateList_Request.context.Header.hasOwnProperty('farmer_code')) ? PAWHS_AggregateList_Request.context.Header["farmer_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSFarmerLogin/pawhs_aggr_list?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&farmer_code=" + param_farmer_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, PAWHSFarmerLogin_PAWHS_FarmerMobileLogin_PAWHS_AggregateList.PAWHS_AggregateList_ResponseHandler);
        return true;
    },
    
    PAWHS_AggregateList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_AggregateList_ResponseObject = new PAWHS_AggregateListResponse(responseData, "JSON");
            PAWHSFarmerLogin_PAWHS_FarmerMobileLogin_PAWHS_AggregateList.callbackfunction(PAWHS_AggregateList_ResponseObject, textStatus);
        }
        else {
            PAWHSFarmerLogin_PAWHS_FarmerMobileLogin_PAWHS_AggregateList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_AggregateListRequestcontext();
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
        var param_farmer_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('farmer_code')) ? HeaderrequestObject["farmer_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/PAWHSFarmerLogin/pawhs_aggr_list?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&farmer_code=" + param_farmer_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
