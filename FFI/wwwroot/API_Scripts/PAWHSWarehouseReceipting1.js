function retrieve_WarehouseRecpt_list(FilterrequestObject) {
    WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceiptList.invoke(FilterrequestObject, retrieve_WhsRecpt_listAPI_ResponseHandler);
}

function retrieve_WhsRecpt_listAPI_ResponseHandler(data, textStatus) {
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
                generate_WhsRecpt_list(responseJSON.context.List);
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

function retrieve_WhsMasterEdit(HeaderrequestObject) {
    WarehouseReceipting_Warehouse_Receipting_PAWHS_getWarehouseReceipt.invoke(HeaderrequestObject, retrieve_WhsReceipt_ResponseHandler);
}

function retrieve_WhsReceipt_ResponseHandler(data, textStatus) {
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
                generate_WhsReceipt_header(responseJSON.context.Header);
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

function SaveWhsReceiptList(HeaderrequestObject) {
    WarehouseReceipting_Warehouse_Receipting_PAWHS_saveWarehouseReceipt.invoke(HeaderrequestObject, save_WhsReceipt_ResponseHandler)
}

function save_WhsReceipt_ResponseHandler(data, textStatus) {
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
                bind_WhsReceipt_Response(responseJSON);
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

function bind_WhsReceipt_Response(responseJSON) {

    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Warehouse Receipt Saved Successfully");
        Get_WhsReceipt_details(responseJSON.context.Header);
    }
    else if (mode == "U") {
        kendoAlert("Warehouse Receipt Updated Successfully");
        Get_WhsReceipt_details(responseJSON.context.Header);
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
    WarehouseReceipting_Warehouse_Receipting_PAWHS_savePaymentCollection.invoke(HeaderrequestObject, save_WhsReceipt_ResponseHandler)
}

function save_WhsReceipt_ResponseHandler(data, textStatus) {
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
                bind_WhsReceipt_Response(responseJSON);
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






