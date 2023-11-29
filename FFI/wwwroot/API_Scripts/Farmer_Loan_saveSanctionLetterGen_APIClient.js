var FarmerLoan_Farmer_Loan_saveSanctionLetterGen = {
    /*
     Function to invoke API
     Notes:
     Resource: Farmer_Loan
     Description: saveSanctionLetterGen
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (saveSanctionLetterGen_Request, callbackHandler)
    {
        var request = new saveSanctionLetterGenRequest(saveSanctionLetterGen_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/newSanctionLetterGen";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, FarmerLoan_Farmer_Loan_saveSanctionLetterGen.saveSanctionLetterGen_ResponseHandler);
        return true;
    },
    
    saveSanctionLetterGen_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var saveSanctionLetterGen_ResponseObject = new saveSanctionLetterGenResponse(responseData, "JSON");
            FarmerLoan_Farmer_Loan_saveSanctionLetterGen.callbackfunction(saveSanctionLetterGen_ResponseObject, textStatus);
        }
        else {
            FarmerLoan_Farmer_Loan_saveSanctionLetterGen.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, FilterrequestObject, DetailrequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new saveSanctionLetterGenRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.Filter = FilterrequestObject;
        contextrequestObject.Detail = DetailrequestObjectArray;
        
        var request = new saveSanctionLetterGenRequest();
        request.context = new saveSanctionLetterGenRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/FarmerLoan/newSanctionLetterGen";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
