var EquipmentReport_equipmentReports_retrieveEquipmentReports = {
    /*
     Function to invoke API
     Notes:
     Resource: equipmentReports
     Description: retrieveEquipmentReports
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveEquipmentReport_Request, callbackHandler)
    {
        var param_orgnid = (retrieveEquipmentReport_Request.context && retrieveEquipmentReport_Request.context.hasOwnProperty('orgnId')) ? retrieveEquipmentReport_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveEquipmentReport_Request.context && retrieveEquipmentReport_Request.context.hasOwnProperty('locnId')) ? retrieveEquipmentReport_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveEquipmentReport_Request.context && retrieveEquipmentReport_Request.context.hasOwnProperty('userId')) ? retrieveEquipmentReport_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveEquipmentReport_Request.context && retrieveEquipmentReport_Request.context.hasOwnProperty('localeId')) ? retrieveEquipmentReport_Request.context["localeId"] : null; //Unicode string(100)
        var param_from_date = (retrieveEquipmentReport_Request.context.Header && retrieveEquipmentReport_Request.context.Header.hasOwnProperty('from_date')) ? retrieveEquipmentReport_Request.context.Header["from_date"] : null; //Unicode string(20)
        var param_to_date = (retrieveEquipmentReport_Request.context.Header && retrieveEquipmentReport_Request.context.Header.hasOwnProperty('to_date')) ? retrieveEquipmentReport_Request.context.Header["to_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/EquipmentReport/equipment_report?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&from_date=" + param_from_date + "&to_date=" + param_to_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, EquipmentReport_equipmentReports_retrieveEquipmentReports.retrieveEquipmentReports_ResponseHandler);
        return true;
    },
    
    retrieveEquipmentReports_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveEquipmentReport_ResponseObject = new retrieveEquipmentReportResponse(responseData, "JSON");
            EquipmentReport_equipmentReports_retrieveEquipmentReports.callbackfunction(retrieveEquipmentReport_ResponseObject, textStatus);
        }
        else {
            EquipmentReport_equipmentReports_retrieveEquipmentReports.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveEquipmentReportRequestcontext();
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
        var param_from_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('from_date')) ? HeaderrequestObject["from_date"] : null; //Unicode string(20)
        var param_to_date = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('to_date')) ? HeaderrequestObject["to_date"] : null; //Unicode string(20)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/EquipmentReport/equipment_report?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&from_date=" + param_from_date + "&to_date=" + param_to_date + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
