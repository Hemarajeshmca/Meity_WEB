var Customer_CustomerDet_retrieveCustomerList = {
    /*
     Function to invoke API
     Notes:
     Resource: CustomerDet
     Description: Retrieve customer list based on the filter condition
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCustomerList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCustomerList_Request.context && retrieveCustomerList_Request.context.hasOwnProperty('orgnId')) ? retrieveCustomerList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCustomerList_Request.context && retrieveCustomerList_Request.context.hasOwnProperty('locnId')) ? retrieveCustomerList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCustomerList_Request.context && retrieveCustomerList_Request.context.hasOwnProperty('userId')) ? retrieveCustomerList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCustomerList_Request.context && retrieveCustomerList_Request.context.hasOwnProperty('localeId')) ? retrieveCustomerList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveCustomerList_Request.context.Filter && retrieveCustomerList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveCustomerList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveCustomerList_Request.context.Filter && retrieveCustomerList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveCustomerList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveCustomerList_Request.context.Filter && retrieveCustomerList_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? retrieveCustomerList_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveCustomerList_Request.context.Filter && retrieveCustomerList_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? retrieveCustomerList_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        var param_from_index = (retrieveCustomerList_Request.context.Filter && retrieveCustomerList_Request.context.Filter.hasOwnProperty('from_index')) ? retrieveCustomerList_Request.context.Filter["from_index"] : null; //Integer(16)
        var param_to_index = (retrieveCustomerList_Request.context.Filter && retrieveCustomerList_Request.context.Filter.hasOwnProperty('to_index')) ? retrieveCustomerList_Request.context.Filter["to_index"] : null; //Integer(16)
        var param_record_count = (retrieveCustomerList_Request.context.Filter && retrieveCustomerList_Request.context.Filter.hasOwnProperty('record_count')) ? retrieveCustomerList_Request.context.Filter["record_count"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Customer/allcustomer_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "&from_index=" + param_from_index + "&to_index=" + param_to_index + "&record_count=" + param_record_count + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Customer_CustomerDet_retrieveCustomerList.retrieveCustomerList_ResponseHandler);
        return true;
    },
    
    retrieveCustomerList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCustomerList_ResponseObject = new retrieveCustomerListResponse(responseData, "JSON");
            Customer_CustomerDet_retrieveCustomerList.callbackfunction(retrieveCustomerList_ResponseObject, textStatus);
        }
        else {
            Customer_CustomerDet_retrieveCustomerList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCustomerListRequestcontext();
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
        var param_from_index = (FilterrequestObject && FilterrequestObject.hasOwnProperty('from_index')) ? FilterrequestObject["from_index"] : null; //Integer(16)
        var param_to_index = (FilterrequestObject && FilterrequestObject.hasOwnProperty('to_index')) ? FilterrequestObject["to_index"] : null; //Integer(16)
        var param_record_count = (FilterrequestObject && FilterrequestObject.hasOwnProperty('record_count')) ? FilterrequestObject["record_count"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Customer/allcustomer_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "&from_index=" + param_from_index + "&to_index=" + param_to_index + "&record_count=" + param_record_count + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
