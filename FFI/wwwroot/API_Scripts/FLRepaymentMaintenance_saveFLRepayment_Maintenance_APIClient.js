var FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Maintenance = {
    /*
     Function to invoke API
     Notes:
     Resource: FLRepaymentMaintenance
     Description: saveFLRepayment_Maintenance
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveFLRepayment_Maintenance_Request, callbackHandler)
    {
        var request = new saveFLRepayment_MaintenanceRequest(saveFLRepayment_Maintenance_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRepayment_Maintenance/newsaveFLRepayment_Maintenance";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Maintenance.saveFLRepayment_Maintenance_ResponseHandler);
        return true;
    },
    
    saveFLRepayment_Maintenance_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveFLRepayment_Maintenance_ResponseObject = new saveFLRepayment_MaintenanceResponse(responseData, "JSON");
            FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Maintenance.callbackfunction(saveFLRepayment_Maintenance_ResponseObject, textStatus);
        }
        else {
            FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Maintenance.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, RepaymentDtlrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveFLRepayment_MaintenanceRequestcontext();
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
        contextrequestObject.RepaymentDtl = RepaymentDtlrequestObjectArray;
        
        var request = new saveFLRepayment_MaintenanceRequest();
        request.context = new saveFLRepayment_MaintenanceRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FLRepayment_Maintenance/newsaveFLRepayment_Maintenance";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
