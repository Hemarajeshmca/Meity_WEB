function retrieve_FLInvoiceGeneration_list(FilterrequestObject) {
    InvoiceGeneration_Invoice_Generation_getInvoiceGenerationList.invoke(FilterrequestObject, retrieve_FLInvoiceGeneration_listAPI_ResponseHandler);
}

function retrieve_FLInvoiceGeneration_listAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //responseJSON = jQuery.parseJSON(data);
        responseJSON = data;
        if (responseJSON.ApplicationException != null) {
            //Response contains error
            var errorNumber = "", errorDescription = "";

            var exception = responseJSON.ApplicationException;
            errorDescription = exception.errorDescription;

            if (exception.errorNumber != null)
                errorNumber = exception.errorNumber;
            if (errorNumber != "")
                errorNumber += ": ";
            kendoAlert(errorNumber + errorDescription);
            return false;
        }
        else {
            try {               
                generate_FLInvoiceGeneration_Dtl(responseJSON.context.List);
                return true;
            }
            catch (e) {
                javascript_log4j_root(arguments.callee.name, e);

            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}
function save_InvoiceGeneration_details(HeaderrequestObject) {
    InvoiceGeneration_Invoice_Generation_saveInvoiceGeneration.invoke(HeaderrequestObject, save_FLInvoiceGenerationAPI_ResponseHandler)
}

function save_FLInvoiceGenerationAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //responseJSON = jQuery.parseJSON(data);
        responseJSON = data;
        if (responseJSON.ApplicationException != null) {
            //Response contains error
            var errorNumber = "", errorDescription = "";

            var exception = responseJSON.ApplicationException;
            errorDescription = exception.errorDescription;

            if (exception.errorNumber != null)
                errorNumber = exception.errorNumber;
            if (errorNumber != "")
                errorNumber += ": ";
            kendoAlert(errorNumber + errorDescription);
            return false;
        }
        else {
            try {
                bind_save_FLInvoiceGenerationAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                javascript_log4j_root(arguments.callee.name, e);
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}
function bind_save_FLInvoiceGenerationAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Invoice generated successfully");
        get_FLInvoiceGeneration_details(responseJSON.context.Header);
    }
  
    else {
        kendoAlert("Invoice generated successfully");
        get_FLInvoiceGeneration_details(responseJSON.context.Header);
    }

}


