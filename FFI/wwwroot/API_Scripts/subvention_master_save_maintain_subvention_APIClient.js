var SubventionMaster_subvention_master_save_maintain_subvention = {
    /*
     Function to invoke API
     Notes:
     Resource: subvention_master
     Description: save_maintain_subvention
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (save_maintain_subvention_Request, callbackHandler)
    {
        var request = new save_maintain_subventionRequest(save_maintain_subvention_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/newmaintainsubvention";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, SubventionMaster_subvention_master_save_maintain_subvention.save_maintain_subvention_ResponseHandler);
        return true;
    },
    
    save_maintain_subvention_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var save_maintain_subvention_ResponseObject = new save_maintain_subventionResponse(responseData, "JSON");
            SubventionMaster_subvention_master_save_maintain_subvention.callbackfunction(save_maintain_subvention_ResponseObject, textStatus);
        }
        else {
            SubventionMaster_subvention_master_save_maintain_subvention.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new save_maintain_subventionRequestcontext();
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
        contextrequestObject.Detail = DetailrequestObjectArray;
        
        var request = new save_maintain_subventionRequest();
        request.context = new save_maintain_subventionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/newmaintainsubvention";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
