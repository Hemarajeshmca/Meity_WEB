var FPOFarmerMap_FPOFarmersMap_retrieveFpoFarmerMap = {
    /*
     Function to invoke API
     Notes:
     Resource: FPOFarmersMap
     Description: retrieveFpoFarmerMap
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveFpoFarmerMap_Request, callbackHandler)
    {
        var param_orgnid = (retrieveFpoFarmerMap_Request.context && retrieveFpoFarmerMap_Request.context.hasOwnProperty('orgnId')) ? retrieveFpoFarmerMap_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveFpoFarmerMap_Request.context && retrieveFpoFarmerMap_Request.context.hasOwnProperty('locnId')) ? retrieveFpoFarmerMap_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveFpoFarmerMap_Request.context && retrieveFpoFarmerMap_Request.context.hasOwnProperty('userId')) ? retrieveFpoFarmerMap_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveFpoFarmerMap_Request.context && retrieveFpoFarmerMap_Request.context.hasOwnProperty('localeId')) ? retrieveFpoFarmerMap_Request.context["localeId"] : null; //Unicode string(100)
        var param_fpoorgn_code = (retrieveFpoFarmerMap_Request.context.Header && retrieveFpoFarmerMap_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveFpoFarmerMap_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOFarmerMap/FPOFarmer_map?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, FPOFarmerMap_FPOFarmersMap_retrieveFpoFarmerMap.retrieveFpoFarmerMap_ResponseHandler);
        return true;
    },
    
    retrieveFpoFarmerMap_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveFpoFarmerMap_ResponseObject = new retrieveFpoFarmerMapResponse(responseData, "JSON");
            FPOFarmerMap_FPOFarmersMap_retrieveFpoFarmerMap.callbackfunction(retrieveFpoFarmerMap_ResponseObject, textStatus);
        }
        else {
            FPOFarmerMap_FPOFarmersMap_retrieveFpoFarmerMap.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveFpoFarmerMapRequestcontext();
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
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FPOFarmerMap/FPOFarmer_map?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&fpoorgn_code=" + param_fpoorgn_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
