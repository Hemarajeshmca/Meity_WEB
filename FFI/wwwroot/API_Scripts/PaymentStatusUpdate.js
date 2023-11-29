function retrieve_PaymentStatusUpdate_details(HeaderrequestObject) {
    PaymentStatusUpdate_PaymentStatus_retrievePaymentUpdate.invoke(HeaderrequestObject, retrieve_PaymentStatusUpdate_listAPI_ResponseHandler);
}
function retrieve_PaymentStatusUpdate_listAPI_ResponseHandler(data, textStatus) {
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
                generate_PaymentStatusUpdate_detail(responseJSON.context.PaymentDtl);
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
function save_PaymentStatusUpdate_details(PaymentDtlrequestObjectArray) {
    PaymentStatusUpdate_PaymentStatus_savePaymentUpdate.invoke(PaymentDtlrequestObjectArray, save_PaymentStatusUpdate_ResponseHandler)
}

function save_PaymentStatusUpdate_ResponseHandler(data, textStatus) {
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
                bind_PaymentStatusUpdateAPI_Response(responseJSON);
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

function bind_PaymentStatusUpdateAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Payment Status saved successfully");
        get_PaymentStatusUpdate_details();
    }
    else if (mode == "D") {
        kendoAlert("Payment Status inactivate successfully");
        get_PaymentStatusUpdate_details();
    }
    else {
        kendoAlert("Payment Status saved successfully");
        get_PaymentStatusUpdate_details();
    }

}