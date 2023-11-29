var MyBooking_My_Booking_retrieveMyBookingList = {
    /*
     Function to invoke API
     Notes:
     Resource: My_Booking
     Description: retrieveMyBookingList
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveMyBookingList_Request, callbackHandler)
    {
        var param_orgnid = (retrieveMyBookingList_Request.context && retrieveMyBookingList_Request.context.hasOwnProperty('orgnId')) ? retrieveMyBookingList_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveMyBookingList_Request.context && retrieveMyBookingList_Request.context.hasOwnProperty('locnId')) ? retrieveMyBookingList_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveMyBookingList_Request.context && retrieveMyBookingList_Request.context.hasOwnProperty('userId')) ? retrieveMyBookingList_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveMyBookingList_Request.context && retrieveMyBookingList_Request.context.hasOwnProperty('localeId')) ? retrieveMyBookingList_Request.context["localeId"] : null; //Unicode string(100)
        var param_filterby_option = (retrieveMyBookingList_Request.context.Filter && retrieveMyBookingList_Request.context.Filter.hasOwnProperty('FilterBy_Option')) ? retrieveMyBookingList_Request.context.Filter["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (retrieveMyBookingList_Request.context.Filter && retrieveMyBookingList_Request.context.Filter.hasOwnProperty('FilterBy_Code')) ? retrieveMyBookingList_Request.context.Filter["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (retrieveMyBookingList_Request.context.Filter && retrieveMyBookingList_Request.context.Filter.hasOwnProperty('FilterBy_FromValue')) ? retrieveMyBookingList_Request.context.Filter["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (retrieveMyBookingList_Request.context.Filter && retrieveMyBookingList_Request.context.Filter.hasOwnProperty('FilterBy_ToValue')) ? retrieveMyBookingList_Request.context.Filter["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MyBooking/all_mybooking?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MyBooking_My_Booking_retrieveMyBookingList.retrieveMyBookingList_ResponseHandler);
        return true;
    },
    
    retrieveMyBookingList_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveMyBookingList_ResponseObject = new retrieveMyBookingListResponse(responseData, "JSON");
            MyBooking_My_Booking_retrieveMyBookingList.callbackfunction(retrieveMyBookingList_ResponseObject, textStatus);
        }
        else {
            MyBooking_My_Booking_retrieveMyBookingList.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, FilterrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveMyBookingListRequestcontext();
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
        var param_filterby_option = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Option')) ? FilterrequestObject["FilterBy_Option"] : null; //Unicode string(50)
        var param_filterby_code = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_Code')) ? FilterrequestObject["FilterBy_Code"] : null; //Unicode string(50)
        var param_filterby_fromvalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_FromValue')) ? FilterrequestObject["FilterBy_FromValue"] : null; //Unicode string(1024)
        var param_filterby_tovalue = (FilterrequestObject && FilterrequestObject.hasOwnProperty('FilterBy_ToValue')) ? FilterrequestObject["FilterBy_ToValue"] : null; //Unicode string(1024)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MyBooking/all_mybooking?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&filterby_option=" + param_filterby_option + "&filterby_code=" + param_filterby_code + "&filterby_fromvalue=" + param_filterby_fromvalue + "&filterby_tovalue=" + param_filterby_tovalue + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
