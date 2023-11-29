var FarmerRegistration_Farmer_Registration_retrieveFarmerReg = {
    /*
     Function to invoke API
     Notes:
     Resource: Farmer_Registration
     Description: Retrieve  Farmer Registration
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFarmerReg_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFarmerReg_Request.context && retrieveFarmerReg_Request.context.hasOwnProperty('orgnId')) ? retrieveFarmerReg_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFarmerReg_Request.context && retrieveFarmerReg_Request.context.hasOwnProperty('locnId')) ? retrieveFarmerReg_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFarmerReg_Request.context && retrieveFarmerReg_Request.context.hasOwnProperty('userId')) ? retrieveFarmerReg_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFarmerReg_Request.context && retrieveFarmerReg_Request.context.hasOwnProperty('localeId')) ? retrieveFarmerReg_Request.context["localeId"] : null; //Unicode string(100)
        var param_farmer_rowid = (retrieveFarmerReg_Request.context.Header && retrieveFarmerReg_Request.context.Header.hasOwnProperty('farmer_rowid')) ? retrieveFarmerReg_Request.context.Header["farmer_rowid"] : null; //Integer(32)
        var param_farmer_code = (retrieveFarmerReg_Request.context.Header && retrieveFarmerReg_Request.context.Header.hasOwnProperty('farmer_code')) ? retrieveFarmerReg_Request.context.Header["farmer_code"] : null; //Unicode string(50)
        var param_version_no = (retrieveFarmerReg_Request.context.Header && retrieveFarmerReg_Request.context.Header.hasOwnProperty('version_no')) ? retrieveFarmerReg_Request.context.Header["version_no"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerRegistration/farmer_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&farmer_rowid=" + param_farmer_rowid + "&farmer_code=" + param_farmer_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FarmerRegistration_Farmer_Registration_retrieveFarmerReg.retrieveFarmerReg_ResponseHandler);
        return true;
    },
    
    retrieveFarmerReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFarmerReg_ResponseObject = new retrieveFarmerRegResponse(responseData, "JSON");
            FarmerRegistration_Farmer_Registration_retrieveFarmerReg.callbackfunction(retrieveFarmerReg_ResponseObject, textStatus);
        }
        else {
            FarmerRegistration_Farmer_Registration_retrieveFarmerReg.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFarmerRegRequestcontext();
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
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerRegistration/farmer_reg?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&farmer_rowid=" + param_farmer_rowid + "&farmer_code=" + param_farmer_code + "&version_no=" + param_version_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
