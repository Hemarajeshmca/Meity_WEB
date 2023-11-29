var BillEntry_Bill_Entry_saveBillEntry = {
    /*
     Function to invoke API
     Notes:
     Resource: Bill_Entry
     Description: saveBillEntry
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveBillEntry_Request, callbackHandler)
    {
        var request = new saveBillEntryRequest(saveBillEntry_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BillEntry/newbillentry";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, BillEntry_Bill_Entry_saveBillEntry.saveBillEntry_ResponseHandler);
        return true;
    },
    
    saveBillEntry_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveBillEntry_ResponseObject = new saveBillEntryResponse(responseData, "JSON");
            BillEntry_Bill_Entry_saveBillEntry.callbackfunction(saveBillEntry_ResponseObject, textStatus);
        }
        else {
            BillEntry_Bill_Entry_saveBillEntry.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, BillDtlrequestObjectArray, BillSessionrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveBillEntryRequestcontext();
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
        contextrequestObject.BillDtl = BillDtlrequestObjectArray;
        contextrequestObject.BillSession = BillSessionrequestObjectArray;
        
        var request = new saveBillEntryRequest();
        request.context = new saveBillEntryRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/BillEntry/newbillentry";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
