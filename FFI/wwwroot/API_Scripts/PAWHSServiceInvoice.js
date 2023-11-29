function retrieve_ServiceInvoice_list(FilterrequestObject) {
    ServiceInvoice_Service_Invoice_PAWHS_getServiceInvoiceList.invoke(FilterrequestObject, retrieve_ServiceInvoice_listAPI_ResponseHandler);
}

function retrieve_ServiceInvoice_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ServiceInvoice_list(responseJSON.context.List);
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

function retrieve_ServiceInvoice_details(HeaderrequestObject) {
    ServiceInvoice_Service_Invoice_PAWHS_getServiceInvoice.invoke(HeaderrequestObject, retrieve_ServiceInvoicescreenAPI_ResponseHandler);
}


function retrieve_ServiceInvoicescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_ServiceInvoice_header(responseJSON.context.Header);
                generate_ServiceInvoice_InvoiceDetail(responseJSON.context.InvoiceDetails);
                generate_ServiceInvoice_InvoiceTax(responseJSON.context.TaxDetails);
               
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



function save_ServiceInvoice_details(HeaderrequestObject) {
    ServiceInvoice_Service_Invoice_PAWHS_saveServiceInvoice.invoke(HeaderrequestObject, save_ServiceInvoiceAPI_ResponseHandler)
}

function save_ServiceInvoiceAPI_ResponseHandler(data, textStatus) {
    debugger;
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
                bind_InvoicegenAPI_Response(responseJSON);
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

function bind_InvoicegenAPI_Response(responseJSON) {
    debugger;
    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("ServiceInvoice Details inserted successfully");
        get_ServiceInvoice_details(responseJSON.context.Header);
    }
    else if (mode == "U") {
        kendoAlert("ServiceInvoice  Details saved successfully");
        get_ServiceInvoice_details(responseJSON.context.Header);
    }
}



