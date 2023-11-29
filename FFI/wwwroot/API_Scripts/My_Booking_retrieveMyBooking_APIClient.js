var MyBooking_My_Booking_retrieveMyBooking = {
    /*
     Function to invoke API
     Notes:
     Resource: My_Booking
     Description: retrieveMyBooking
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveMyBooking_Request, callbackHandler)
    {
        var param_orgnid = (retrieveMyBooking_Request.context && retrieveMyBooking_Request.context.hasOwnProperty('orgnId')) ? retrieveMyBooking_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveMyBooking_Request.context && retrieveMyBooking_Request.context.hasOwnProperty('locnId')) ? retrieveMyBooking_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveMyBooking_Request.context && retrieveMyBooking_Request.context.hasOwnProperty('userId')) ? retrieveMyBooking_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveMyBooking_Request.context && retrieveMyBooking_Request.context.hasOwnProperty('localeId')) ? retrieveMyBooking_Request.context["localeId"] : null; //Unicode string(100)
        var param_booking_rowid = (retrieveMyBooking_Request.context.Header && retrieveMyBooking_Request.context.Header.hasOwnProperty('booking_rowid')) ? retrieveMyBooking_Request.context.Header["booking_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MyBooking/my_booking?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&booking_rowid=" + param_booking_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MyBooking_My_Booking_retrieveMyBooking.retrieveMyBooking_ResponseHandler);
        return true;
    },
    
    retrieveMyBooking_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveMyBooking_ResponseObject = new retrieveMyBookingResponse(responseData, "JSON");
            MyBooking_My_Booking_retrieveMyBooking.callbackfunction(retrieveMyBooking_ResponseObject, textStatus);
        }
        else {
            MyBooking_My_Booking_retrieveMyBooking.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveMyBookingRequestcontext();
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
        var param_booking_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('booking_rowid')) ? HeaderrequestObject["booking_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MyBooking/my_booking?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&booking_rowid=" + param_booking_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
