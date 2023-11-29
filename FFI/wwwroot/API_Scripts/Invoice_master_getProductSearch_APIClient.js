var Invoice_Invoice_master_getProductSearch = {
    /*
     Function to invoke API
     Notes:
     Resource: Invoice_master
     Description: getProductSearch
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (product_search_Request, callbackHandler)
    {
        var param_orgnid = (product_search_Request.context && product_search_Request.context.hasOwnProperty('orgnId')) ? product_search_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (product_search_Request.context && product_search_Request.context.hasOwnProperty('locnId')) ? product_search_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (product_search_Request.context && product_search_Request.context.hasOwnProperty('userId')) ? product_search_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (product_search_Request.context && product_search_Request.context.hasOwnProperty('localeId')) ? product_search_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (product_search_Request.context.Header && product_search_Request.context.Header.hasOwnProperty('FilterBy_Option')) ? product_search_Request.context.Header["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (product_search_Request.context.Header && product_search_Request.context.Header.hasOwnProperty('FilterBy_Code')) ? product_search_Request.context.Header["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (product_search_Request.context.Header && product_search_Request.context.Header.hasOwnProperty('FilterBy_Fromvalue')) ? product_search_Request.context.Header["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (product_search_Request.context.Header && product_search_Request.context.Header.hasOwnProperty('FilterBy_Tovalue')) ? product_search_Request.context.Header["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/productsearch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + encodeURIComponent(param_filterby_code) + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Invoice_Invoice_master_getProductSearch.getProductSearch_ResponseHandler);
        return true;
    },
    
    getProductSearch_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var product_search_ResponseObject = new product_searchResponse(responseData, "JSON");
            Invoice_Invoice_master_getProductSearch.callbackfunction(product_search_ResponseObject, textStatus);
        }
        else {
            Invoice_Invoice_master_getProductSearch.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new product_searchRequestcontext();
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
        var param_filterby_option = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('FilterBy_Option')) ? HeaderrequestObject["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('FilterBy_Code')) ? HeaderrequestObject["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('FilterBy_Fromvalue')) ? HeaderrequestObject["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('FilterBy_Tovalue')) ? HeaderrequestObject["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/productsearch?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + encodeURIComponent(param_filterby_code) + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
