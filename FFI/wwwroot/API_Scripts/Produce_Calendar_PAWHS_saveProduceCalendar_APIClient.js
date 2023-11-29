var ProduceCalendar_Produce_Calendar_PAWHS_saveProduceCalendar = {
    /*
     Function to invoke API
     Notes:
     Resource: Produce_Calendar
     Description: PAWHS_getProduceCalendar
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_saveProduceCalendar_Request, callbackHandler)
    {
        var request = new PAWHS_saveProduceCalendarRequest(PAWHS_saveProduceCalendar_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProduceCalendar/new_produce_calendar";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, ProduceCalendar_Produce_Calendar_PAWHS_saveProduceCalendar.PAWHS_saveProduceCalendar_ResponseHandler);
        return true;
    },
    
    PAWHS_saveProduceCalendar_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_saveProduceCalendar_ResponseObject = new PAWHS_saveProduceCalendarResponse(responseData, "JSON");
            ProduceCalendar_Produce_Calendar_PAWHS_saveProduceCalendar.callbackfunction(PAWHS_saveProduceCalendar_ResponseObject, textStatus);
        }
        else {
            ProduceCalendar_Produce_Calendar_PAWHS_saveProduceCalendar.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, ListrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new PAWHS_saveProduceCalendarRequestcontext();
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
        contextrequestObject.List = ListrequestObjectArray;
        
        var request = new PAWHS_saveProduceCalendarRequest();
        request.context = new PAWHS_saveProduceCalendarRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProduceCalendar/new_produce_calendar";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
