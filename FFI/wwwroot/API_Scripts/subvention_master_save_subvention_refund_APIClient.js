var SubventionMaster_subvention_master_save_subvention_refund = {
    /*
     Function to invoke API
     Notes:
     Resource: subvention_master
     Description: save_subvention_refund
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (save_subvention_refund_Request, callbackHandler)
    {
        var request = new save_subvention_refundRequest(save_subvention_refund_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/newsubventionrefund";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, SubventionMaster_subvention_master_save_subvention_refund.save_subvention_refund_ResponseHandler);
        return true;
    },
    
    save_subvention_refund_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var save_subvention_refund_ResponseObject = new save_subvention_refundResponse(responseData, "JSON");
            SubventionMaster_subvention_master_save_subvention_refund.callbackfunction(save_subvention_refund_ResponseObject, textStatus);
        }
        else {
            SubventionMaster_subvention_master_save_subvention_refund.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new save_subvention_refundRequestcontext();
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
        
        var request = new save_subvention_refundRequest();
        request.context = new save_subvention_refundRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SubventionMaster/newsubventionrefund";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
