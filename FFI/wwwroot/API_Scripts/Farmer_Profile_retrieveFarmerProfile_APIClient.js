var FarmerProfile_Farmer_Profile_retrieveFarmerProfile = {
    /*
     Function to invoke API
     Notes:
     Resource: Farmer_Profile
     Description: retrieveFarmerProfile
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFarmerProfile_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFarmerProfile_Request.context && retrieveFarmerProfile_Request.context.hasOwnProperty('orgnId')) ? retrieveFarmerProfile_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFarmerProfile_Request.context && retrieveFarmerProfile_Request.context.hasOwnProperty('locnId')) ? retrieveFarmerProfile_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFarmerProfile_Request.context && retrieveFarmerProfile_Request.context.hasOwnProperty('userId')) ? retrieveFarmerProfile_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFarmerProfile_Request.context && retrieveFarmerProfile_Request.context.hasOwnProperty('localeId')) ? retrieveFarmerProfile_Request.context["localeId"] : null; //Unicode string(100)
        var param_farmer_rowid = (retrieveFarmerProfile_Request.context.Header && retrieveFarmerProfile_Request.context.Header.hasOwnProperty('farmer_rowid')) ? retrieveFarmerProfile_Request.context.Header["farmer_rowid"] : null; //Integer(32)
        var param_farmer_code = (retrieveFarmerProfile_Request.context.Header && retrieveFarmerProfile_Request.context.Header.hasOwnProperty('farmer_code')) ? retrieveFarmerProfile_Request.context.Header["farmer_code"] : null; //Unicode string(50)
        var param_version_no = (retrieveFarmerProfile_Request.context.Header && retrieveFarmerProfile_Request.context.Header.hasOwnProperty('version_no')) ? retrieveFarmerProfile_Request.context.Header["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerProfile/farmer_profile?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&farmer_rowid=" + param_farmer_rowid + "&farmer_code=" + param_farmer_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FarmerProfile_Farmer_Profile_retrieveFarmerProfile.retrieveFarmerProfile_ResponseHandler);
        return true;
    },
    
    retrieveFarmerProfile_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFarmerProfile_ResponseObject = new retrieveFarmerProfileResponse(responseData, "JSON");
            FarmerProfile_Farmer_Profile_retrieveFarmerProfile.callbackfunction(retrieveFarmerProfile_ResponseObject, textStatus);
        }
        else {
            FarmerProfile_Farmer_Profile_retrieveFarmerProfile.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFarmerProfileRequestcontext();
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
        var param_farmer_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('farmer_rowid')) ? HeaderrequestObject["farmer_rowid"] : null; //Integer(32)
        var param_farmer_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('farmer_code')) ? HeaderrequestObject["farmer_code"] : null; //Unicode string(50)
        var param_version_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('version_no')) ? HeaderrequestObject["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerProfile/farmer_profile?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&farmer_rowid=" + param_farmer_rowid + "&farmer_code=" + param_farmer_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
