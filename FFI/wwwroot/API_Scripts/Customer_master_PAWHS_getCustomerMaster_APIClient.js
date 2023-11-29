var CustomerMaster_Customer_master_PAWHS_getCustomerMaster = {
    /*
     Function to invoke API
     Notes:
     Resource: Customer_master
     Description: PAWHS_getCustomerMaster
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getCustomerMaster_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getCustomerMaster_Request.context && PAWHS_getCustomerMaster_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getCustomerMaster_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getCustomerMaster_Request.context && PAWHS_getCustomerMaster_Request.context.hasOwnProperty('locnId')) ? PAWHS_getCustomerMaster_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getCustomerMaster_Request.context && PAWHS_getCustomerMaster_Request.context.hasOwnProperty('userId')) ? PAWHS_getCustomerMaster_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getCustomerMaster_Request.context && PAWHS_getCustomerMaster_Request.context.hasOwnProperty('localeId')) ? PAWHS_getCustomerMaster_Request.context["localeId"] : null; //Unicode string(100)
        var param_customer_rowid = (PAWHS_getCustomerMaster_Request.context.Header && PAWHS_getCustomerMaster_Request.context.Header.hasOwnProperty('customer_rowid')) ? PAWHS_getCustomerMaster_Request.context.Header["customer_rowid"] : null; //Integer(32)
        var param_customer_code = (PAWHS_getCustomerMaster_Request.context.Header && PAWHS_getCustomerMaster_Request.context.Header.hasOwnProperty('customer_code')) ? PAWHS_getCustomerMaster_Request.context.Header["customer_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CustomerMaster/customer_master?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&customer_rowid=" + param_customer_rowid + "&aggregator_code=" + param_customer_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CustomerMaster_Customer_master_PAWHS_getCustomerMaster.PAWHS_getCustomerMaster_ResponseHandler);
        return true;
    },
    
    PAWHS_getCustomerMaster_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getCustomerMaster_ResponseObject = new PAWHS_getCustomerMasterResponse(responseData, "JSON");
            CustomerMaster_Customer_master_PAWHS_getCustomerMaster.callbackfunction(PAWHS_getCustomerMaster_ResponseObject, textStatus);
        }
        else {
            CustomerMaster_Customer_master_PAWHS_getCustomerMaster.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getCustomerMasterRequestcontext();
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
        var param_customer_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('customer_rowid')) ? HeaderrequestObject["customer_rowid"] : null; //Integer(32)
        var param_customer_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('customer_code')) ? HeaderrequestObject["customer_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CustomerMaster/customer_master?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&customer_rowid=" + param_customer_rowid + "&aggregator_code=" + param_customer_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
