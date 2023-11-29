var MilkReciptsCP_milk_receipt_retrievemilkreceiptList = {
    /*
     Function to invoke API
     Notes:
     Resource: milk_receipt
     Description: retrievemilkreceiptList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrievemilkreceiptList_Request, callbackHandler)
    {
        var param_orgnid = (retrievemilkreceiptList_Request.context && retrievemilkreceiptList_Request.context.hasOwnProperty('orgnId')) ? retrievemilkreceiptList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrievemilkreceiptList_Request.context && retrievemilkreceiptList_Request.context.hasOwnProperty('locnId')) ? retrievemilkreceiptList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrievemilkreceiptList_Request.context && retrievemilkreceiptList_Request.context.hasOwnProperty('userId')) ? retrievemilkreceiptList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrievemilkreceiptList_Request.context && retrievemilkreceiptList_Request.context.hasOwnProperty('localeId')) ? retrievemilkreceiptList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrievemilkreceiptList_Request.context.Filter && retrievemilkreceiptList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrievemilkreceiptList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrievemilkreceiptList_Request.context.Filter && retrievemilkreceiptList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrievemilkreceiptList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrievemilkreceiptList_Request.context.Filter && retrievemilkreceiptList_Request.context.Filter.hasOwnProperty('FilterBy_Fromvalue')) ? retrievemilkreceiptList_Request.context.Filter["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrievemilkreceiptList_Request.context.Filter && retrievemilkreceiptList_Request.context.Filter.hasOwnProperty('FilterBy_Tovalue')) ? retrievemilkreceiptList_Request.context.Filter["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkReciptsCP/allreceipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MilkReciptsCP_milk_receipt_retrievemilkreceiptList.retrievemilkreceiptList_ResponseHandler);
        return true;
    },
    
    retrievemilkreceiptList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrievemilkreceiptList_ResponseObject = new retrievemilkreceiptListResponse(responseData, "JSON");
            MilkReciptsCP_milk_receipt_retrievemilkreceiptList.callbackfunction(retrievemilkreceiptList_ResponseObject, textStatus);
        }
        else {
            MilkReciptsCP_milk_receipt_retrievemilkreceiptList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrievemilkreceiptListRequestcontext();
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
        var param_filterby_fromvalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Fromvalue')) ? FilterrequestObject["FilterBy_Fromvalue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Tovalue')) ? FilterrequestObject["FilterBy_Tovalue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkReciptsCP/allreceipt?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
