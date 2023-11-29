var Vector_test_vector_Retrieve_Vector_Test = {
    /*
     Function to invoke API
     Notes:
     Resource: vector
     Description: Retrieve_Vector_Test
     Http verb: POST
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getvectortest_Request, callbackHandler)
    {
        var request = new getvectortestRequest(getvectortest_Request);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Vector_test/allvectorinputs";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, Vector_test_vector_Retrieve_Vector_Test.Retrieve_Vector_Test_ResponseHandler);
        return true;
    },
    
    Retrieve_Vector_Test_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getvectortest_ResponseObject = new getvectortestResponse(responseData, "JSON");
            Vector_test_vector_Retrieve_Vector_Test.callbackfunction(getvectortest_ResponseObject, textStatus);
        }
        else {
            Vector_test_vector_Retrieve_Vector_Test.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, input_datarequestObjectArray, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new getvectortestRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        contextrequestObject.input_data = input_datarequestObjectArray;
        
        var request = new getvectortestRequest();
        request.context = new getvectortestRequestcontext(contextrequestObject);
        var requestdata = JSON.stringify(request);
        
        var contentType = "application/json";
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Vector_test/allvectorinputs";
        
        WebAPIProxy.invokeAPI("POST", targetURL, requestdata, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
