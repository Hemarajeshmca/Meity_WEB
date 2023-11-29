var MilkCollectionCorrection_MilkCollection_Correction_reteieveMilkCollectionCorrection = {
    /*
     Function to invoke API
     Notes:
     Resource: MilkCollection_Correction
     Description: Retrieve Milk collection correction
     Http verb: GET
     Request format: JSON
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCorrection_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCorrection_Request.context && retrieveCorrection_Request.context.hasOwnProperty('orgnId')) ? retrieveCorrection_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCorrection_Request.context && retrieveCorrection_Request.context.hasOwnProperty('locnId')) ? retrieveCorrection_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCorrection_Request.context && retrieveCorrection_Request.context.hasOwnProperty('userId')) ? retrieveCorrection_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCorrection_Request.context && retrieveCorrection_Request.context.hasOwnProperty('localeId')) ? retrieveCorrection_Request.context["localeId"] : null; //Unicode string(100)
        var param_milkcorrection_rowid = (retrieveCorrection_Request.context.Header && retrieveCorrection_Request.context.Header.hasOwnProperty('milkcorrection_rowid')) ? retrieveCorrection_Request.context.Header["milkcorrection_rowid"] : null; //Integer(32)
        var param_milkcorrection_code = (retrieveCorrection_Request.context.Header && retrieveCorrection_Request.context.Header.hasOwnProperty('milkcorrection_code')) ? retrieveCorrection_Request.context.Header["milkcorrection_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkCollectionCorrection/collection_correction?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&milkcorrection_rowid=" + param_milkcorrection_rowid + "&milkcorrection_code=" + param_milkcorrection_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, MilkCollectionCorrection_MilkCollection_Correction_reteieveMilkCollectionCorrection.reteieveMilkCollectionCorrection_ResponseHandler);
        return true;
    },
    
    reteieveMilkCollectionCorrection_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCorrection_ResponseObject = new retrieveCorrectionResponse(responseData, "JSON");
            MilkCollectionCorrection_MilkCollection_Correction_reteieveMilkCollectionCorrection.callbackfunction(retrieveCorrection_ResponseObject, textStatus);
        }
        else {
            MilkCollectionCorrection_MilkCollection_Correction_reteieveMilkCollectionCorrection.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCorrectionRequestcontext();
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
        var param_milkcorrection_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('milkcorrection_rowid')) ? HeaderrequestObject["milkcorrection_rowid"] : null; //Integer(32)
        var param_milkcorrection_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('milkcorrection_code')) ? HeaderrequestObject["milkcorrection_code"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/MilkCollectionCorrection/collection_correction?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&milkcorrection_rowid=" + param_milkcorrection_rowid + "&milkcorrection_code=" + param_milkcorrection_code + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
