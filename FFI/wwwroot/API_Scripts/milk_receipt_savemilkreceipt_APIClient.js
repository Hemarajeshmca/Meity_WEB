var MilkReciptsCP_milk_receipt_savemilkreceipt = {
    /*
     Function to invoke API
     Notes:
     Resource: milk_receipt
     Description: savemilkreceipt
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (savemilkreceipt_Request, callbackHandler)
    {
        var request = new savemilkreceiptRequest(savemilkreceipt_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkReciptsCP/newmilkreceipt";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, MilkReciptsCP_milk_receipt_savemilkreceipt.savemilkreceipt_ResponseHandler);
        return true;
    },
    
    savemilkreceipt_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var savemilkreceipt_ResponseObject = new savemilkreceiptResponse(responseData, "JSON");
            MilkReciptsCP_milk_receipt_savemilkreceipt.callbackfunction(savemilkreceipt_ResponseObject, textStatus);
        }
        else {
            MilkReciptsCP_milk_receipt_savemilkreceipt.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, DetailrequestObjectArray, summaryrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new savemilkreceiptRequestcontext();
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
        contextrequestObject.Detail = DetailrequestObjectArray;
        contextrequestObject.summary = summaryrequestObjectArray;
        
        var request = new savemilkreceiptRequest();
        request.context = new savemilkreceiptRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkReciptsCP/newmilkreceipt";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
