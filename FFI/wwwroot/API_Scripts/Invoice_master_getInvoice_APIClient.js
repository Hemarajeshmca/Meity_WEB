var Invoice_Invoice_master_getInvoice = {
    /*
     Function to invoke API
     Notes:
     Resource: Invoice_master
     Description: getInvoice
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (getInvoice_Request, callbackHandler)
    {
        var param_orgnid = (getInvoice_Request.context && getInvoice_Request.context.hasOwnProperty('orgnId')) ? getInvoice_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (getInvoice_Request.context && getInvoice_Request.context.hasOwnProperty('locnId')) ? getInvoice_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (getInvoice_Request.context && getInvoice_Request.context.hasOwnProperty('userId')) ? getInvoice_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (getInvoice_Request.context && getInvoice_Request.context.hasOwnProperty('localeId')) ? getInvoice_Request.context["localeId"] : null; //Unicode string(100)
        var param_invoice_rowid = (getInvoice_Request.context.Header && getInvoice_Request.context.Header.hasOwnProperty('invoice_rowid')) ? getInvoice_Request.context.Header["invoice_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/invoice?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&invoice_rowid=" + param_invoice_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Invoice_Invoice_master_getInvoice.getInvoice_ResponseHandler);
        return true;
    },
    
    getInvoice_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var getInvoice_ResponseObject = new getInvoiceResponse(responseData, "JSON");
            Invoice_Invoice_master_getInvoice.callbackfunction(getInvoice_ResponseObject, textStatus);
        }
        else {
            Invoice_Invoice_master_getInvoice.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new getInvoiceRequestcontext();
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
        var param_invoice_rowid = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('invoice_rowid')) ? HeaderrequestObject["invoice_rowid"] : null; //Integer(32)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Invoice/invoice?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&invoice_rowid=" + param_invoice_rowid + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
