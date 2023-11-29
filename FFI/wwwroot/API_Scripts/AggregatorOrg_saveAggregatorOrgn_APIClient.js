var AggregatorOrgs_AggregatorOrg_saveAggregatorOrgn = {
    /*
     Function to invoke API
     Notes:
     Resource: AggregatorOrg
     Description: saveAggregatorOrgn
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveAggregatorOrgs_Request, callbackHandler)
    {
        var request = new saveAggregatorOrgsRequest(saveAggregatorOrgs_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorOrgs/new_aggregator_orgn";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, AggregatorOrgs_AggregatorOrg_saveAggregatorOrgn.saveAggregatorOrgn_ResponseHandler);
        return true;
    },
    
    saveAggregatorOrgn_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveAggregatorOrgs_ResponseObject = new saveAggregatorOrgsResponse(responseData, "JSON");
            AggregatorOrgs_AggregatorOrg_saveAggregatorOrgn.callbackfunction(saveAggregatorOrgs_ResponseObject, textStatus);
        }
        else {
            AggregatorOrgs_AggregatorOrg_saveAggregatorOrgn.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, AddressrequestObjectArray, BankrequestObjectArray, UserrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveAggregatorOrgsRequestcontext();
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
        contextrequestObject.Address = AddressrequestObjectArray;
        contextrequestObject.Bank = BankrequestObjectArray;
        contextrequestObject.User = UserrequestObjectArray;
        
        var request = new saveAggregatorOrgsRequest();
        request.context = new saveAggregatorOrgsRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/AggregatorOrgs/new_aggregator_orgn";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
