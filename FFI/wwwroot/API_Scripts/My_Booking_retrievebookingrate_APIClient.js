var MyBooking_My_Booking_retrievebookingrate = {
    /*
     Function to invoke API
     Notes:
     Resource: My_Booking
     Description: retrievebookingrate
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrievebookingrate_Request, callbackHandler)
    {
        var param_orgnid = (retrievebookingrate_Request.context && retrievebookingrate_Request.context.hasOwnProperty('orgnId')) ? retrievebookingrate_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrievebookingrate_Request.context && retrievebookingrate_Request.context.hasOwnProperty('locnId')) ? retrievebookingrate_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrievebookingrate_Request.context && retrievebookingrate_Request.context.hasOwnProperty('userId')) ? retrievebookingrate_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrievebookingrate_Request.context && retrievebookingrate_Request.context.hasOwnProperty('localeId')) ? retrievebookingrate_Request.context["localeId"] : null; //Unicode string(100)
        var param_uom_type = (retrievebookingrate_Request.context.Header && retrievebookingrate_Request.context.Header.hasOwnProperty('uom_type')) ? retrievebookingrate_Request.context.Header["uom_type"] : null; //Unicode string(50)
        var param_esp_code = (retrievebookingrate_Request.context.Header && retrievebookingrate_Request.context.Header.hasOwnProperty('esp_code')) ? retrievebookingrate_Request.context.Header["esp_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MyBooking/booking_rate?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&uom_type=" + param_uom_type + "&esp_code=" + param_esp_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MyBooking_My_Booking_retrievebookingrate.retrievebookingrate_ResponseHandler);
        return true;
    },
    
    retrievebookingrate_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrievebookingrate_ResponseObject = new retrievebookingrateResponse(responseData, "JSON");
            MyBooking_My_Booking_retrievebookingrate.callbackfunction(retrievebookingrate_ResponseObject, textStatus);
        }
        else {
            MyBooking_My_Booking_retrievebookingrate.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrievebookingrateRequestcontext();
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
        var param_uom_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('uom_type')) ? HeaderrequestObject["uom_type"] : null; //Unicode string(50)
        var param_esp_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('esp_code')) ? HeaderrequestObject["esp_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MyBooking/booking_rate?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&uom_type=" + param_uom_type + "&esp_code=" + param_esp_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
