var FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Mode = {
    /*
     Function to invoke API
     Notes:
     Resource: FLRepaymentMaintenance
     Description: saveFLRepayment_Mode
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLRepayment_Mode_Request, callbackHandler)
    {
        var request = new saveFLRepayment_ModeRequest(saveFLRepayment_Mode_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRepayment_Maintenance/newsaveFLRepayment_Mode";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Mode.saveFLRepayment_Mode_ResponseHandler);
        return true;
    },
    
    saveFLRepayment_Mode_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLRepayment_Mode_ResponseObject = new saveFLRepayment_ModeResponse(responseData, "JSON");
            FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Mode.callbackfunction(saveFLRepayment_Mode_ResponseObject, textStatus);
        }
        else {
            FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Mode.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveFLRepayment_ModeRequestcontext();
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
        
        var request = new saveFLRepayment_ModeRequest();
        request.context = new saveFLRepayment_ModeRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRepayment_Maintenance/newsaveFLRepayment_Mode";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
