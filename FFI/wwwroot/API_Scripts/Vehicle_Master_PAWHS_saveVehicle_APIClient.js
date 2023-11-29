var VehicleMaster_Vehicle_Master_PAWHS_saveVehicle = {
    /*
     Function to invoke API
     Notes:
     Resource: Vehicle_Master
     Description: PAWHS_saveVehicle
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveVehicle_Request, callbackHandler)
    {
        var request = new PAWHS_saveVehicleRequest(PAWHS_saveVehicle_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/VehicleMaster/new_vehicle_master";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, VehicleMaster_Vehicle_Master_PAWHS_saveVehicle.PAWHS_saveVehicle_ResponseHandler);
        return true;
    },
    
    PAWHS_saveVehicle_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveVehicle_ResponseObject = new PAWHS_saveVehicleResponse(responseData, "JSON");
            VehicleMaster_Vehicle_Master_PAWHS_saveVehicle.callbackfunction(PAWHS_saveVehicle_ResponseObject, textStatus);
        }
        else {
            VehicleMaster_Vehicle_Master_PAWHS_saveVehicle.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_saveVehicleRequestcontext();
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
        
        var request = new PAWHS_saveVehicleRequest();
        request.context = new PAWHS_saveVehicleRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/VehicleMaster/new_vehicle_master";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
