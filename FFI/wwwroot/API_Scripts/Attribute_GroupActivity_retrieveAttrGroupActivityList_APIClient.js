var AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivityList = {
    /*
     Function to invoke API
     Notes:
     Resource: Attribute_GroupActivity
     Description: retrieveAttrGroupActivityList
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveAttrGroupActivityList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveAttrGroupActivityList_Request.context && retrieveAttrGroupActivityList_Request.context.hasOwnProperty('orgnId')) ? retrieveAttrGroupActivityList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveAttrGroupActivityList_Request.context && retrieveAttrGroupActivityList_Request.context.hasOwnProperty('locnId')) ? retrieveAttrGroupActivityList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveAttrGroupActivityList_Request.context && retrieveAttrGroupActivityList_Request.context.hasOwnProperty('userId')) ? retrieveAttrGroupActivityList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveAttrGroupActivityList_Request.context && retrieveAttrGroupActivityList_Request.context.hasOwnProperty('localeId')) ? retrieveAttrGroupActivityList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveAttrGroupActivityList_Request.context.Filter && retrieveAttrGroupActivityList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveAttrGroupActivityList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveAttrGroupActivityList_Request.context.Filter && retrieveAttrGroupActivityList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveAttrGroupActivityList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveAttrGroupActivityList_Request.context.Filter && retrieveAttrGroupActivityList_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? retrieveAttrGroupActivityList_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveAttrGroupActivityList_Request.context.Filter && retrieveAttrGroupActivityList_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? retrieveAttrGroupActivityList_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroupActivity/all_attribute_activity?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivityList.retrieveAttrGroupActivityList_ResponseHandler);
        return true;
    },
    
    retrieveAttrGroupActivityList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveAttrGroupActivityList_ResponseObject = new retrieveAttrGroupActivityListResponse(responseData, "JSON");
            AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivityList.callbackfunction(retrieveAttrGroupActivityList_ResponseObject, textStatus);
        }
        else {
            AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivityList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveAttrGroupActivityListRequestcontext();
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
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroupActivity/all_attribute_activity?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
