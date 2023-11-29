var VehicleMaster_Vehicle_Master_PAWHS_getVehicle = {
    /*
     Function to invoke API
     Notes:
     Resource: Vehicle_Master
     Description: PAWHS_getVehicle
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getVehicle_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getVehicle_Request.context && PAWHS_getVehicle_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getVehicle_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getVehicle_Request.context && PAWHS_getVehicle_Request.context.hasOwnProperty('locnId')) ? PAWHS_getVehicle_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getVehicle_Request.context && PAWHS_getVehicle_Request.context.hasOwnProperty('userId')) ? PAWHS_getVehicle_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getVehicle_Request.context && PAWHS_getVehicle_Request.context.hasOwnProperty('localeId')) ? PAWHS_getVehicle_Request.context["localeId"] : null; //Unicode string(100)
        var param_vehicle_rowid = (PAWHS_getVehicle_Request.context.Header && PAWHS_getVehicle_Request.context.Header.hasOwnProperty('vehicle_rowid')) ? PAWHS_getVehicle_Request.context.Header["vehicle_rowid"] : null; //Integer(32)
        var param_aggregator_code = (PAWHS_getVehicle_Request.context.Header && PAWHS_getVehicle_Request.context.Header.hasOwnProperty('agg_code')) ? PAWHS_getVehicle_Request.context.Header["agg_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/VehicleMaster/vehicle?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&vehicle_rowid=" + param_vehicle_rowid + "&agg_code=" + param_aggregator_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, VehicleMaster_Vehicle_Master_PAWHS_getVehicle.PAWHS_getVehicle_ResponseHandler);
        return true;
    },
    
    PAWHS_getVehicle_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getVehicle_ResponseObject = new PAWHS_getVehicleResponse(responseData, "JSON");
            VehicleMaster_Vehicle_Master_PAWHS_getVehicle.callbackfunction(PAWHS_getVehicle_ResponseObject, textStatus);
        }
        else {
            VehicleMaster_Vehicle_Master_PAWHS_getVehicle.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getVehicleRequestcontext();
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
        var param_vehicle_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('vehicle_rowid')) ? HeaderrequestObject["vehicle_rowid"] : null; //Integer(32)
        var param_aggregator_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('agg_code')) ? HeaderrequestObject["agg_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/VehicleMaster/vehicle?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&vehicle_rowid=" + param_vehicle_rowid + "&agg_code=" + param_aggregator_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
