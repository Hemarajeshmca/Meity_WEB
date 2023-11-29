function retrieve_RaiseInvoice_list(FilterrequestObject) {
    RaiseInvoice_Raise_Invoice_PAWHS_getRaiseInvoiceList.invoke(FilterrequestObject, retrieve_RaiseInvoice_listAPI_ResponseHandler);
}

function retrieve_RaiseInvoice_listAPI_ResponseHandler(data, textStatus) {
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
                generate_RaiseInvoice_list(responseJSON.context.List);
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

function retrieve_RaiseInvoice_details(HeaderrequestObject) {
    RaiseInvoice_Raise_Invoice_PAWHS_getRaiseInvoice.invoke(HeaderrequestObject, retrieve_RaiseInvoicescreenAPI_ResponseHandler);
}


function retrieve_RaiseInvoicescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_RaiseInvoice_header(responseJSON.context.Header);
                generate_RaiseInvoice_InvoiceDetail(responseJSON.context.InvoiceDetails);
                generate_RaiseInvoice_InvoiceTax(responseJSON.context.TaxDetails);
                generate_RaiseInvoice_PaymentCollection(responseJSON.context.PaymentCollection);
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

function retrieve_RaiseInvoice_payment_details(HeaderrequestObject) {
    RaiseInvoice_Raise_Invoice_PAWHS_getPaymentCollection.invoke(HeaderrequestObject, retrieve_RaiseInvoicepaymentscreenAPI_ResponseHandler);
}

function retrieve_RaiseInvoicepaymentscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_RaiseInvoice_payment_header(responseJSON.context.Header);
                generate_RaiseInvoice_payment_Detail(responseJSON.context.Detail)
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


function save_RaiseInvoice_details(HeaderrequestObject) {
    RaiseInvoice_Raise_Invoice_PAWHS_saveRaiseInvoice.invoke(HeaderrequestObject, save_RaiseInvoiceAPI_ResponseHandler)
}

function save_RaiseInvoiceAPI_ResponseHandler(data, textStatus) {
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
        kendoAlert("RaiseInvoice Details inserted successfully");
        get_RaiseInvoice_details(responseJSON.context.Header);
    }
    else if (mode == "U") {
        kendoAlert("RaiseInvoice  Details saved successfully");
        get_RaiseInvoice_details(responseJSON.context.Header);
    }
}
function retrieve_PaymentCollection(HeaderrequestObject) {
    RaiseInvoice_Raise_Invoice_PAWHS_getPaymentCollection.invoke(HeaderrequestObject, retrieve_PaymentCollection_ResponseHandler);
}

function retrieve_PaymentCollection_ResponseHandler(data, textStatus) {
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
                generate_Invoice_payment_header(responseJSON.context.Header);                
                generate_Invoice_payment_Detail(responseJSON.context.Detail);
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

function SaveraiseinvoicePayment(HeaderrequestObject) {
    RaiseInvoice_Raise_Invoice_PAWHS_savePaymentCollection.invoke(HeaderrequestObject, save_raiseinvoice_ResponseHandler)
}

function save_raiseinvoice_ResponseHandler(data, textStatus) {
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
                bind_raisePayment_Response(responseJSON);
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


function bind_raisePayment_Response(responseJSON) {

    var mode = $("#modeflag").val();
    if (mode == "I") {
        kendoAlert("Invoice Payment Saved Successfully");
        generate_Invoice_payment_Detail(responseJSON.context.Header)
    }
    else if (mode == "U") {
        kendoAlert("Invoice Payment Updated Successfully");
        generate_Invoice_payment_Detail(responseJSON.context.Header)
    }
}


