var FarmerRegistration_Farmer_Registration_saveFarmerReg = {
    /*
     Function to invoke API
     Notes:
     Resource: Farmer_Registration
     Description: Save Farmer Registration
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFarmerReg_Request, callbackHandler)
    {
        var request = new saveFarmerRegRequest(saveFarmerReg_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerRegistration/new_farmer_reg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FarmerRegistration_Farmer_Registration_saveFarmerReg.saveFarmerReg_ResponseHandler);
        return true;
    },
    
    saveFarmerReg_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFarmerReg_ResponseObject = new saveFarmerRegResponse(responseData, "JSON");
            FarmerRegistration_Farmer_Registration_saveFarmerReg.callbackfunction(saveFarmerReg_ResponseObject, textStatus);
        }
        else {
            FarmerRegistration_Farmer_Registration_saveFarmerReg.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, KYCrequestObjectArray, BankrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFarmerRegRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Header = HeaderrequestObject;
        contextrequestObject.KYC = KYCrequestObjectArray;
        contextrequestObject.Bank = BankrequestObjectArray;
        
        var request = new saveFarmerRegRequest();
        request.context = new saveFarmerRegRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerRegistration/new_farmer_reg";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
