var SupportTicket_Support_Ticket_saveSupportTicket = {
    /*
     Function to invoke API
     Notes:
     Resource: Support_Ticket
     Description: saveSupportTicket
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveSupportTicket_Request, callbackHandler)
    {
        var request = new saveSupportTicketRequest(saveSupportTicket_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SupportTicket/newSupportTicket";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, SupportTicket_Support_Ticket_saveSupportTicket.saveSupportTicket_ResponseHandler);
        return true;
    },
    
    saveSupportTicket_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveSupportTicket_ResponseObject = new saveSupportTicketResponse(responseData, "JSON");
            SupportTicket_Support_Ticket_saveSupportTicket.callbackfunction(saveSupportTicket_ResponseObject, textStatus);
        }
        else {
            SupportTicket_Support_Ticket_saveSupportTicket.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new saveSupportTicketRequestcontext();
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
        
        var request = new saveSupportTicketRequest();
        request.context = new saveSupportTicketRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/SupportTicket/newSupportTicket";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
