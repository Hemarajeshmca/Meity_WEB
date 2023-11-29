var AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivity = {
    /*
     Function to invoke API
     Notes:
     Resource: Attribute_GroupActivity
     Description: retrieveAttrGroupActivity
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveAttrGroupActivity_Request, callbackHandler)
    {
        var param_orgnid = (retrieveAttrGroupActivity_Request.context && retrieveAttrGroupActivity_Request.context.hasOwnProperty('orgnId')) ? retrieveAttrGroupActivity_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveAttrGroupActivity_Request.context && retrieveAttrGroupActivity_Request.context.hasOwnProperty('locnId')) ? retrieveAttrGroupActivity_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveAttrGroupActivity_Request.context && retrieveAttrGroupActivity_Request.context.hasOwnProperty('userId')) ? retrieveAttrGroupActivity_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveAttrGroupActivity_Request.context && retrieveAttrGroupActivity_Request.context.hasOwnProperty('localeId')) ? retrieveAttrGroupActivity_Request.context["localeId"] : null; //Unicode string(100)
        var param_activity_code = (retrieveAttrGroupActivity_Request.context.Header && retrieveAttrGroupActivity_Request.context.Header.hasOwnProperty('activity_code')) ? retrieveAttrGroupActivity_Request.context.Header["activity_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroupActivity/attr_grp_activity?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&activity_code=" + param_activity_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivity.retrieveAttrGroupActivity_ResponseHandler);
        return true;
    },
    
    retrieveAttrGroupActivity_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveAttrGroupActivity_ResponseObject = new retrieveAttrGroupActivityResponse(responseData, "JSON");
            AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivity.callbackfunction(retrieveAttrGroupActivity_ResponseObject, textStatus);
        }
        else {
            AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivity.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveAttrGroupActivityRequestcontext();
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
        var param_activity_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('activity_code')) ? HeaderrequestObject["activity_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroupActivity/attr_grp_activity?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&activity_code=" + param_activity_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
