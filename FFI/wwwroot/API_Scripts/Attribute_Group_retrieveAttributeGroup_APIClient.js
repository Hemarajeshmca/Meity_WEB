var AttributeGroup_Attribute_Group_retrieveAttributeGroup = {
    /*
     Function to invoke API
     Notes:
     Resource: Attribute_Group
     Description: retrieveAttributeGroup
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveAttributeGroup_Request, callbackHandler)
    {
        var param_orgnid = (retrieveAttributeGroup_Request.context && retrieveAttributeGroup_Request.context.hasOwnProperty('orgnId')) ? retrieveAttributeGroup_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveAttributeGroup_Request.context && retrieveAttributeGroup_Request.context.hasOwnProperty('locnId')) ? retrieveAttributeGroup_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveAttributeGroup_Request.context && retrieveAttributeGroup_Request.context.hasOwnProperty('userId')) ? retrieveAttributeGroup_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveAttributeGroup_Request.context && retrieveAttributeGroup_Request.context.hasOwnProperty('localeId')) ? retrieveAttributeGroup_Request.context["localeId"] : null; //Unicode string(100)
        var param_entitygrp_rowid = (retrieveAttributeGroup_Request.context.Header && retrieveAttributeGroup_Request.context.Header.hasOwnProperty('entitygrp_rowid')) ? retrieveAttributeGroup_Request.context.Header["entitygrp_rowid"] : null; //Integer(32)
        var param_entitygrp_code = (retrieveAttributeGroup_Request.context.Header && retrieveAttributeGroup_Request.context.Header.hasOwnProperty('entitygrp_code')) ? retrieveAttributeGroup_Request.context.Header["entitygrp_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroup/attr_group?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&entitygrp_rowid=" + param_entitygrp_rowid + "&entitygrp_code=" + param_entitygrp_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, AttributeGroup_Attribute_Group_retrieveAttributeGroup.retrieveAttributeGroup_ResponseHandler);
        return true;
    },
    
    retrieveAttributeGroup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveAttributeGroup_ResponseObject = new retrieveAttributeGroupResponse(responseData, "JSON");
            AttributeGroup_Attribute_Group_retrieveAttributeGroup.callbackfunction(retrieveAttributeGroup_ResponseObject, textStatus);
        }
        else {
            AttributeGroup_Attribute_Group_retrieveAttributeGroup.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveAttributeGroupRequestcontext();
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
        var param_entitygrp_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('entitygrp_rowid')) ? HeaderrequestObject["entitygrp_rowid"] : null; //Integer(32)
        var param_entitygrp_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('entitygrp_code')) ? HeaderrequestObject["entitygrp_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AttributeGroup/attr_group?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&entitygrp_rowid=" + param_entitygrp_rowid + "&entitygrp_code=" + param_entitygrp_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
