var MilkCollectionCorrection_MilkCollection_Correction_saveMilkCollectionCorrection = {
    /*
     Function to invoke API
     Notes:
     Resource: MilkCollection_Correction
     Description: Save Milk collection correction
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveCorrection_Request, callbackHandler)
    {
        var request = new saveCorrectionRequest(saveCorrection_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkCollectionCorrection/newCollectionCorrection";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, MilkCollectionCorrection_MilkCollection_Correction_saveMilkCollectionCorrection.saveMilkCollectionCorrection_ResponseHandler);
        return true;
    },
    
    saveMilkCollectionCorrection_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveCorrection_ResponseObject = new saveCorrectionResponse(responseData, "JSON");
            MilkCollectionCorrection_MilkCollection_Correction_saveMilkCollectionCorrection.callbackfunction(saveCorrection_ResponseObject, textStatus);
        }
        else {
            MilkCollectionCorrection_MilkCollection_Correction_saveMilkCollectionCorrection.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, CollectionrequestObjectArray, TransferrequestObjectArray, RetailSalesrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveCorrectionRequestcontext();
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
        contextrequestObject.Collection = CollectionrequestObjectArray;
        contextrequestObject.Transfer = TransferrequestObjectArray;
        contextrequestObject.RetailSales = RetailSalesrequestObjectArray;
        
        var request = new saveCorrectionRequest();
        request.context = new saveCorrectionRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkCollectionCorrection/newCollectionCorrection";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
