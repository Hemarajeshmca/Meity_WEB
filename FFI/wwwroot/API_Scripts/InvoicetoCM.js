function retrieve_InvoicetoCM_details(FilterrequestObject) {
    InvoiceToCM_Invoice_To_CM_getInvoiceToCMList.invoke(FilterrequestObject, retrieve_InvoicetoCMAPI_ResponseHandler);
}

function retrieve_InvoicetoCMAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        // responseJSON = jQuery.parseJSON(data);
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
                generate_InvoicetoCM_list(responseJSON.context.List);
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

function save_InvoicetoCM_details(HeaderrequestObject) {
    InvoiceToCM_Invoice_To_CM_saveInvoiceToCM.invoke(HeaderrequestObject, save_InvoicetoCMAPI_ResponseHandler)
}

function save_InvoicetoCMAPI_ResponseHandler(data, textStatus) {
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
                bind_InvoicetoCMAPI_Response(responseJSON);
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

function bind_InvoicetoCMAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Invoice generated successfully");
        //get_InvoicetoCM_details();
    }
    else if (mode == "D") {
        kendoAlert("Invoice inactivate successfully");
        //get_InvoicetoCM_details();
    }
    else {
        kendoAlert("Invoice saved successfully");
        //get_InvoicetoCM_details();
    }

}