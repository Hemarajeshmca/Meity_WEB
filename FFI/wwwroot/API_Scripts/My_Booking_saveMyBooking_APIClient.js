var MyBooking_My_Booking_saveMyBooking = {
    /*
     Function to invoke API
     Notes:
     Resource: My_Booking
     Description: saveMyBooking
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveMyBooking_Request, callbackHandler)
    {
        var request = new saveMyBookingRequest(saveMyBooking_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MyBooking/newmybooking";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, MyBooking_My_Booking_saveMyBooking.saveMyBooking_ResponseHandler);
        return true;
    },
    
    saveMyBooking_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveMyBooking_ResponseObject = new saveMyBookingResponse(responseData, "JSON");
            MyBooking_My_Booking_saveMyBooking.callbackfunction(saveMyBooking_ResponseObject, textStatus);
        }
        else {
            MyBooking_My_Booking_saveMyBooking.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, Terms_and_ConditionsrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveMyBookingRequestcontext();
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
        contextrequestObject.Terms_and_Conditions = Terms_and_ConditionsrequestObjectArray;
        
        var request = new saveMyBookingRequest();
        request.context = new saveMyBookingRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MyBooking/newmybooking";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
