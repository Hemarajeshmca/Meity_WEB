var Customer_CustomerDet_retrieveCustomer = {
    /*
     Function to invoke API
     Notes:
     Resource: CustomerDet
     Description: Retrieve Customer details
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCustomer_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCustomer_Request.context && retrieveCustomer_Request.context.hasOwnProperty('orgnId')) ? retrieveCustomer_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCustomer_Request.context && retrieveCustomer_Request.context.hasOwnProperty('locnId')) ? retrieveCustomer_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCustomer_Request.context && retrieveCustomer_Request.context.hasOwnProperty('userId')) ? retrieveCustomer_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCustomer_Request.context && retrieveCustomer_Request.context.hasOwnProperty('localeId')) ? retrieveCustomer_Request.context["localeId"] : null; //Unicode string(100)
        var param_user_code = (retrieveCustomer_Request.context.Header && retrieveCustomer_Request.context.Header.hasOwnProperty('user_code')) ? retrieveCustomer_Request.context.Header["user_code"] : null; //Unicode string(128)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Customer/customer_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&user_code=" + param_user_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Customer_CustomerDet_retrieveCustomer.retrieveCustomer_ResponseHandler);
        return true;
    },
    
    retrieveCustomer_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCustomer_ResponseObject = new retrieveCustomerResponse(responseData, "JSON");
            Customer_CustomerDet_retrieveCustomer.callbackfunction(retrieveCustomer_ResponseObject, textStatus);
        }
        else {
            Customer_CustomerDet_retrieveCustomer.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCustomerRequestcontext();
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
        var param_user_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('user_code')) ? HeaderrequestObject["user_code"] : null; //Unicode string(128)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Customer/customer_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&user_code=" + param_user_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
