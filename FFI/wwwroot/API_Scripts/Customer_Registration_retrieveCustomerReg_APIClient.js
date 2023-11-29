var CustomerRegistration_Customer_Registration_retrieveCustomerReg = {
    /*
     Function to invoke API
     Notes:
     Resource: Customer_Registration
     Description: retrieveCustomerReg
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCustomerReg_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCustomerReg_Request.context && retrieveCustomerReg_Request.context.hasOwnProperty('orgnId')) ? retrieveCustomerReg_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCustomerReg_Request.context && retrieveCustomerReg_Request.context.hasOwnProperty('locnId')) ? retrieveCustomerReg_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCustomerReg_Request.context && retrieveCustomerReg_Request.context.hasOwnProperty('userId')) ? retrieveCustomerReg_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCustomerReg_Request.context && retrieveCustomerReg_Request.context.hasOwnProperty('localeId')) ? retrieveCustomerReg_Request.context["localeId"] : null; //Unicode string(100)
        var param_userregistration_rowid = (retrieveCustomerReg_Request.context.Header && retrieveCustomerReg_Request.context.Header.hasOwnProperty('userregistration_rowid')) ? retrieveCustomerReg_Request.context.Header["userregistration_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CustomerRegistration/customer_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&userregistration_rowid=" + param_userregistration_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, CustomerRegistration_Customer_Registration_retrieveCustomerReg.retrieveCustomerReg_ResponseHandler);
        return true;
    },
    
    retrieveCustomerReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCustomerReg_ResponseObject = new retrieveCustomerRegResponse(responseData, "JSON");
            CustomerRegistration_Customer_Registration_retrieveCustomerReg.callbackfunction(retrieveCustomerReg_ResponseObject, textStatus);
        }
        else {
            CustomerRegistration_Customer_Registration_retrieveCustomerReg.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCustomerRegRequestcontext();
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
        var param_userregistration_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('userregistration_rowid')) ? HeaderrequestObject["userregistration_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/CustomerRegistration/customer_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&userregistration_rowid=" + param_userregistration_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
