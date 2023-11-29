var AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_getAggregatorVsFarMap = {
    /*
     Function to invoke API
     Notes:
     Resource: Aggr_Vs_FarmerMapping
     Description: PAWHS_getAggregatorVsFarMap
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getAggregatorVsFarMap_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getAggregatorVsFarMap_Request.context && PAWHS_getAggregatorVsFarMap_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getAggregatorVsFarMap_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getAggregatorVsFarMap_Request.context && PAWHS_getAggregatorVsFarMap_Request.context.hasOwnProperty('locnId')) ? PAWHS_getAggregatorVsFarMap_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getAggregatorVsFarMap_Request.context && PAWHS_getAggregatorVsFarMap_Request.context.hasOwnProperty('userId')) ? PAWHS_getAggregatorVsFarMap_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getAggregatorVsFarMap_Request.context && PAWHS_getAggregatorVsFarMap_Request.context.hasOwnProperty('localeId')) ? PAWHS_getAggregatorVsFarMap_Request.context["localeId"] : null; //Unicode string(100)
        var param_agg_farmer_rowid = (PAWHS_getAggregatorVsFarMap_Request.context.Header && PAWHS_getAggregatorVsFarMap_Request.context.Header.hasOwnProperty('agg_farmer_rowid')) ? PAWHS_getAggregatorVsFarMap_Request.context.Header["agg_farmer_rowid"] : null; //Integer(32)
        var param_aggregator_code = (PAWHS_getAggregatorVsFarMap_Request.context.Header && PAWHS_getAggregatorVsFarMap_Request.context.Header.hasOwnProperty('agg_code')) ? PAWHS_getAggregatorVsFarMap_Request.context.Header["agg_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorVsFarmerMapping/aggr_farmer_map?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&agg_farmer_rowid=" + param_agg_farmer_rowid + "&agg_code=" + param_aggregator_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_getAggregatorVsFarMap.PAWHS_getAggregatorVsFarMap_ResponseHandler);
        return true;
    },
    
    PAWHS_getAggregatorVsFarMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getAggregatorVsFarMap_ResponseObject = new PAWHS_getAggregatorVsFarMapResponse(responseData, "JSON");
            AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_getAggregatorVsFarMap.callbackfunction(PAWHS_getAggregatorVsFarMap_ResponseObject, textStatus);
        }
        else {
            AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_getAggregatorVsFarMap.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getAggregatorVsFarMapRequestcontext();
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
        var param_agg_farmer_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('agg_farmer_rowid')) ? HeaderrequestObject["agg_farmer_rowid"] : null; //Integer(32)
        var param_aggregator_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('agg_code')) ? HeaderrequestObject["agg_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorVsFarmerMapping/aggr_farmer_map?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&agg_farmer_rowid=" + param_agg_farmer_rowid + "&agg_code=" + param_aggregator_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
