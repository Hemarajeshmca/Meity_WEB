function retrieve_PAWHSPaymentAdvice_list(FilterrequestObject) {
    PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_getPaymentAdviceList.invoke(FilterrequestObject, retrieve_PAWHSPaymentAdvice_listAPI_ResponseHandler);
}
function retrieve_PAWHSPaymentAdvice_listAPI_ResponseHandler(data, textStatus) {
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
                generate_PAWHSPaymentAdvice_list(responseJSON.context.List);
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
function retrieve_PAWHSPaymentAdvice_details(HeaderrequestObject) {
    PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_getPaymentAdvice.invoke(HeaderrequestObject, retrieve_PAWHSPaymentAdvicescreenAPI_ResponseHandler);
}
function retrieve_PAWHSPaymentAdvicescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_PAWHSPaymentAdvice_header(responseJSON.context.Header)
                generate_PAWHSPaymentAdvice_Detail(responseJSON.context.Detail);
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
function retrieve_PAWHSPA_details(HeaderrequestObject) {
    PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_getPaymentAdvice.invoke(HeaderrequestObject, retrieve_PAWHSPAscreenAPI_ResponseHandler);
}
function retrieve_PAWHSPAscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_PAWHSPA_header(responseJSON.context.Header)
                generate_PAWHSPA_Detail(responseJSON.context.Detail);
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
function save_PAWHSPaymentAdvice_details(HeaderrequestObject) {
    PAWHSPaymentAdvice_PAWHS_PaymentAdvice_PAWHS_savePaymentAdvice.invoke(HeaderrequestObject, save_PAWHSPaymentAdviceAPI_ResponseHandler)
}
function save_PAWHSPaymentAdviceAPI_ResponseHandler(data, textStatus) {
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
                bind_PAWHSPaymentAdviceAPI_Response(responseJSON);
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
function bind_PAWHSPaymentAdviceAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Payment Advice Details saved successfully");
        get_PAWHSPaymentAdvice_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Payment Advice Details inactivate successfully");
        get_PAWHSPaymentAdvice_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Payment Advice Details Updated successfully");
        // retrieve_PAWHSPaymentAdvice_list();
        get_PAWHSPaymentAdvice_details(responseJSON.context.Header);
    }

}