function retrieve_PAWHSPaymentStatusUpdate_details(HeaderrequestObject) {
    PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_getPaymentUpdate.invoke(HeaderrequestObject, retrieve_PAWHSPaymentStatusUpdate_listAPI_ResponseHandler);
}
function retrieve_PAWHSPaymentStatusUpdate_listAPI_ResponseHandler(data, textStatus) {
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
                generate_PAWHSPaymentStatusUpdate_detail(responseJSON.context.PaymentDtl);
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
function save_PAWHSPaymentStatusUpdate_details(PaymentDtlrequestObjectArray) {
    PAWHSPaymentStatusUpdate_PAWHS_PaymentStatusUpdate_PAWHS_savePaymentUpdate.invoke(PaymentDtlrequestObjectArray, save_PAWHSPaymentStatusUpdate_ResponseHandler)
}

function save_PAWHSPaymentStatusUpdate_ResponseHandler(data, textStatus) {
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
        kendoAlert("PAWHSPayment Status saved successfully");
        get_PAWHSPaymentStatusUpdate_details();
    }
    else if (mode == "D") {
        kendoAlert("PAWHSPayment Status inactivate successfully");
        get_PAWHSPaymentStatusUpdate_details();
    }
    else {
        kendoAlert("PAWHSPayment Status saved successfully");
        get_PAWHSPaymentStatusUpdate_details();
    }

}