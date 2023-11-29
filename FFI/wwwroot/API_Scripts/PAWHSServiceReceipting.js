function retrieve_Service_list(FilterrequestObject) {
    ServiceReceipting_Service_Receipting_PAWHS_getServiceReceiptList.invoke(FilterrequestObject, retrieve_Serivce_listAPI_ResponseHandler);
}

function retrieve_Serivce_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ServiceRecpt_list(responseJSON.context.List);
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

function retrieve_ServiceReceiptEdit(HeaderrequestObject) {
    ServiceReceipting_Service_Receipting_PAWHS_getServiceReceipt.invoke(HeaderrequestObject, retrieve_ServiceReceipt_ResponseHandler);
}

function retrieve_ServiceReceipt_ResponseHandler(data, textStatus) {
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
                generate_ServiceReceipt_header(responseJSON.context.Header);
                generate_ServiceReceipt_list(responseJSON.context.Detail);
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

function SaveSeriveReceiptList(HeaderrequestObject) {
    ServiceReceipting_Service_Receipting_PAWHS_saveServiceReceipt.invoke(HeaderrequestObject, save_ServiceReceipt_ResponseHandler)
}

function save_ServiceReceipt_ResponseHandler(data, textStatus) {
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
                bind_ServiceReceipt_Response(responseJSON);
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

function bind_ServiceReceipt_Response(responseJSON) {
    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Service Receipt Details Saved Successfully");
        Get_ServiceReceipt_details(responseJSON.context.Header);
    }
    else if (mode == "U") {
        kendoAlert("Service Receipt Details Saved Successfully");
        Get_ServiceReceipt_details(responseJSON.context.Header);
    }
    else if (mode == "R") {
        kendoAlert("Service Receipt Generated Successfully");
        Get_ServiceReceipt_details(responseJSON.context.Header);
    }
}

function retrieve_PaymentCollection(HeaderrequestObject) {
    WarehouseReceipting_Warehouse_Receipting_PAWHS_getPaymentCollection.invoke(HeaderrequestObject, retrieve_PaymentCollection_ResponseHandler);
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

function SaveWhsReceiptPayment(HeaderrequestObject) {
    WarehouseReceipting_Warehouse_Receipting_PAWHS_savePaymentCollection.invoke(HeaderrequestObject, save_WhsReceiptPayment_ResponseHandler)
}

function save_WhsReceiptPayment_ResponseHandler(data, textStatus) {
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
                bind_WhsReceiptPayment_Response(responseJSON);
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

function bind_WhsReceiptPayment_Response(responseJSON) {
    fetch_Invoice_payment();
    kendoAlert("Warehouse Receipt Saved Successfully");
}

function retrieve_PayDetails(HeaderrequestObject) {
    WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceiptList.invoke(HeaderrequestObject, retrieve_PayDetails_ResponseHandler);
}

function retrieve_PayDetails_ResponseHandler(data, textStatus) {
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
                generate_Receipt_list(responseJSON.context.Header);
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




