function retrieve_Invoice_list(FilterrequestObject) {
    Invoice_Invoice_master_getInvoiceList.invoke(FilterrequestObject, retrieve_Invoice_listAPI_ResponseHandler);
}

function retrieve_Invoice_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Invoice_list(responseJSON.context.List);
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

function retrieve_Invoice_details(HeaderrequestObject) {
    Invoice_Invoice_master_getInvoice.invoke(HeaderrequestObject, retrieve_InvoicescreenAPI_ResponseHandler);
}


function retrieve_InvoicescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Invoice_header(responseJSON.context.Header);
                generate_Invoice_InvoiceDetail(responseJSON.context.InvoiceDetail);
                generate_Invoice_InvoiceTax(responseJSON.context.InvoiceTax);
                generate_Invoice_PaymentCollection(responseJSON.context.PaymentCollection);              
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

function retrieve_Invoice_payment_details(HeaderrequestObject) {
    Invoice_Invoice_master_getPaymentCollection_invoice.invoke(HeaderrequestObject, retrieve_InvoicepaymentscreenAPI_ResponseHandler);
}

function retrieve_InvoicepaymentscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Invoice_payment_Detail(responseJSON.context.Detail)
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


function save_Invoice_details(HeaderrequestObject) {
    Invoice_Invoice_master_saveInvoice.invoke(HeaderrequestObject, save_InvoiceAPI_ResponseHandler)
}

function save_InvoiceAPI_ResponseHandler(data, textStatus) {
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
                bind_InvoiceAPI_Response(responseJSON);
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

function save_Invoicepayment_details(HeaderrequestObject) {
    Invoice_Invoice_master_savePaymentCollection_invoice.invoke(HeaderrequestObject, save_InvoicepaymentAPI_ResponseHandler)
}

function save_InvoicepaymentAPI_ResponseHandler(data, textStatus) {
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
                bind_InvoicepaymentAPI_Response(responseJSON);
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
function bind_InvoiceAPI_Response(responseJSON) {
    debugger;
    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Invoice Details saved successfully");
        get_Invoice_details(responseJSON.context.Header.invoice_rowid, responseJSON.context.Header.invoice_no);
    }
    else if (mode == "D") {
        kendoAlert("Invoice  Details inactivate successfully");
        get_Invoice_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Invoice  Details saved successfully");
        get_Invoice_details(responseJSON.context.Header);
    }

}
function bind_InvoicepaymentAPI_Response(responseJSON) {

    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Payment Details saved successfully");
        get_Invoicepaymen_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Payment Details inactivate successfully");
        get_Invoicepaymen_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Payment  Details saved successfully");
        get_Invoicepaymen_details(responseJSON.context.Header);
    }

}

function retrieve_Invoiceproduct_list(FilterrequestObject) {
    Invoice_Invoice_master_getProductSearch.invoke(FilterrequestObject, retrieve_Invoiceproduct_listAPI_ResponseHandler);
}

function retrieve_Invoiceproduct_listAPI_ResponseHandler(data, textStatus) {
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
                generate_TaxInvoiceproduct_list(responseJSON.context.InvoiceTax);
                generate_Invoiceproduct_list(responseJSON.context.Detail);
            
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