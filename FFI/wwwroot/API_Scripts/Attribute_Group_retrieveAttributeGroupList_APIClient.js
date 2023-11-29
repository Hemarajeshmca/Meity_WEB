var AttributeGroup_Attribute_Group_retrieveAttributeGroupList = {
    /*
     Function to invoke API
     Notes:
     Resource: Attribute_Group
     Description: retrieveAttributeGroupList
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveAttributeGroupList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveAttributeGroupList_Request.context && retrieveAttributeGroupList_Request.context.hasOwnProperty('orgnId')) ? retrieveAttributeGroupList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveAttributeGroupList_Request.context && retrieveAttributeGroupList_Request.context.hasOwnProperty('locnId')) ? retrieveAttributeGroupList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveAttributeGroupList_Request.context && retrieveAttributeGroupList_Request.context.hasOwnProperty('userId')) ? retrieveAttributeGroupList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveAttributeGroupList_Request.context && retrieveAttributeGroupList_Request.context.hasOwnProperty('localeId')) ? retrieveAttributeGroupList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveAttributeGroupList_Request.context.Filter && retrieveAttributeGroupList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveAttributeGroupList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveAttributeGroupList_Request.context.Filter && retrieveAttributeGroupList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveAttributeGroupList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveAttributeGroupList_Request.context.Filter && retrieveAttributeGroupList_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? retrieveAttributeGroupList_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveAttributeGroupList_Request.context.Filter && retrieveAttributeGroupList_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? retrieveAttributeGroupList_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroup/all_attribute?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, AttributeGroup_Attribute_Group_retrieveAttributeGroupList.retrieveAttributeGroupList_ResponseHandler);
        return true;
    },
    
    retrieveAttributeGroupList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveAttributeGroupList_ResponseObject = new retrieveAttributeGroupListResponse(responseData, "JSON");
            AttributeGroup_Attribute_Group_retrieveAttributeGroupList.callbackfunction(retrieveAttributeGroupList_ResponseObject, textStatus);
        }
        else {
            AttributeGroup_Attribute_Group_retrieveAttributeGroupList.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveAttributeGroupListRequestcontext();
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
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroup/all_attribute?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
