var ProduceCalendar_Produce_Calendar_PAWHS_getProduceCalendar = {
    /*
     Function to invoke API
     Notes:
     Resource: Produce_Calendar
     Description: PAWHS_getProduceCalendar
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (PAWHS_getProduceCalendar_Request, callbackHandler)
    {
        var param_orgnid = (PAWHS_getProduceCalendar_Request.context && PAWHS_getProduceCalendar_Request.context.hasOwnProperty('orgnId')) ? PAWHS_getProduceCalendar_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (PAWHS_getProduceCalendar_Request.context && PAWHS_getProduceCalendar_Request.context.hasOwnProperty('locnId')) ? PAWHS_getProduceCalendar_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (PAWHS_getProduceCalendar_Request.context && PAWHS_getProduceCalendar_Request.context.hasOwnProperty('userId')) ? PAWHS_getProduceCalendar_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (PAWHS_getProduceCalendar_Request.context && PAWHS_getProduceCalendar_Request.context.hasOwnProperty('localeId')) ? PAWHS_getProduceCalendar_Request.context["localeId"] : null; //Unicode string(100)
        var param_producecal_rowid = (PAWHS_getProduceCalendar_Request.context.Header && PAWHS_getProduceCalendar_Request.context.Header.hasOwnProperty('producecal_rowid')) ? PAWHS_getProduceCalendar_Request.context.Header["producecal_rowid"] : null; //Integer(32)
        var param_pac_no = (PAWHS_getProduceCalendar_Request.context.Header && PAWHS_getProduceCalendar_Request.context.Header.hasOwnProperty('pac_no')) ? PAWHS_getProduceCalendar_Request.context.Header["pac_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProduceCalendar/produce_calendar?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&producecal_rowid=" + param_producecal_rowid + "&pac_no=" + param_pac_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, ProduceCalendar_Produce_Calendar_PAWHS_getProduceCalendar.PAWHS_getProduceCalendar_ResponseHandler);
        return true;
    },
    
    PAWHS_getProduceCalendar_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var PAWHS_getProduceCalendar_ResponseObject = new PAWHS_getProduceCalendarResponse(responseData, "JSON");
            ProduceCalendar_Produce_Calendar_PAWHS_getProduceCalendar.callbackfunction(PAWHS_getProduceCalendar_ResponseObject, textStatus);
        }
        else {
            ProduceCalendar_Produce_Calendar_PAWHS_getProduceCalendar.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new PAWHS_getProduceCalendarRequestcontext();
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
        var param_producecal_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('producecal_rowid')) ? HeaderrequestObject["producecal_rowid"] : null; //Integer(32)
        var param_pac_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('pac_no')) ? HeaderrequestObject["pac_no"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/ProduceCalendar/produce_calendar?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&producecal_rowid=" + param_producecal_rowid + "&pac_no=" + param_pac_no + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
