var ProduceAggregation_Produce_Aggregation_PAWHS_getProduceAggregation = {
    /*
     Function to invoke API
     Notes:
     Resource: Produce_Aggregation
     Description: PAWHS_getProduceAggregation
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getProduceAggregation_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getProduceAggregation_Request.context && PAWHS_getProduceAggregation_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getProduceAggregation_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getProduceAggregation_Request.context && PAWHS_getProduceAggregation_Request.context.hasOwnProperty('locnId')) ? PAWHS_getProduceAggregation_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getProduceAggregation_Request.context && PAWHS_getProduceAggregation_Request.context.hasOwnProperty('userId')) ? PAWHS_getProduceAggregation_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getProduceAggregation_Request.context && PAWHS_getProduceAggregation_Request.context.hasOwnProperty('localeId')) ? PAWHS_getProduceAggregation_Request.context["localeId"] : null; //Unicode string(100)
        var param_produce_agg_rowid = (PAWHS_getProduceAggregation_Request.context.Header && PAWHS_getProduceAggregation_Request.context.Header.hasOwnProperty('produce_agg_rowid')) ? PAWHS_getProduceAggregation_Request.context.Header["produce_agg_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProduceAggregation/aggregator_registration?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&produce_agg_rowid=" + param_produce_agg_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ProduceAggregation_Produce_Aggregation_PAWHS_getProduceAggregation.PAWHS_getProduceAggregation_ResponseHandler);
        return true;
    },
    
    PAWHS_getProduceAggregation_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getProduceAggregation_ResponseObject = new PAWHS_getProduceAggregationResponse(responseData, "JSON");
            ProduceAggregation_Produce_Aggregation_PAWHS_getProduceAggregation.callbackfunction(PAWHS_getProduceAggregation_ResponseObject, textStatus);
        }
        else {
            ProduceAggregation_Produce_Aggregation_PAWHS_getProduceAggregation.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getProduceAggregationRequestcontext();
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
        var param_produce_agg_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('produce_agg_rowid')) ? HeaderrequestObject["produce_agg_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProduceAggregation/aggregator_registration?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&produce_agg_rowid=" + param_produce_agg_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
