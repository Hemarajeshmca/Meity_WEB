var Revenue_Revenue_Master_getRevenue = {
    /*
     Function to invoke API
     Notes:
     Resource: Revenue_Master
     Description: getRevenue
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getRevenue_Request, callbackHandler)
    {
        var param_orgnid = (getRevenue_Request.context && getRevenue_Request.context.hasOwnProperty('orgnId')) ? getRevenue_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (getRevenue_Request.context && getRevenue_Request.context.hasOwnProperty('locnId')) ? getRevenue_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (getRevenue_Request.context && getRevenue_Request.context.hasOwnProperty('userId')) ? getRevenue_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (getRevenue_Request.context && getRevenue_Request.context.hasOwnProperty('localeId')) ? getRevenue_Request.context["localeId"] : null; //Unicode string(100)
        var param_revenue_rowid = (getRevenue_Request.context.Header && getRevenue_Request.context.Header.hasOwnProperty('revenue_rowid')) ? getRevenue_Request.context.Header["revenue_rowid"] : null; //Integer(32)
        var param_revenue_id = (getRevenue_Request.context.Header && getRevenue_Request.context.Header.hasOwnProperty('revenue_id')) ? getRevenue_Request.context.Header["revenue_id"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Revenue/revenue?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&revenue_rowid=" + param_revenue_rowid + "&revenue_id=" + param_revenue_id + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Revenue_Revenue_Master_getRevenue.getRevenue_ResponseHandler);
        return true;
    },
    
    getRevenue_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getRevenue_ResponseObject = new getRevenueResponse(responseData, "JSON");
            Revenue_Revenue_Master_getRevenue.callbackfunction(getRevenue_ResponseObject, textStatus);
        }
        else {
            Revenue_Revenue_Master_getRevenue.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new getRevenueRequestcontext();
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
        var param_revenue_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('revenue_rowid')) ? HeaderrequestObject["revenue_rowid"] : null; //Integer(32)
        var param_revenue_id = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('revenue_id')) ? HeaderrequestObject["revenue_id"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Revenue/revenue?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&revenue_rowid=" + param_revenue_rowid + "&revenue_id=" + param_revenue_id + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
