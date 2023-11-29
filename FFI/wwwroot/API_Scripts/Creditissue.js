function retrieve_Credit_list(FilterrequestObject) {
    CreditIssue_CreditIssue_master_getCreditIssueList.invoke(FilterrequestObject, retrieve_Credit_listAPI_ResponseHandler);
}

function retrieve_Credit_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Credit_list(responseJSON.context.List);
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

function retrieve_Credit_details(HeaderrequestObject) {
    CreditIssue_CreditIssue_master_getCreditIssue.invoke(HeaderrequestObject, retrieve_CreditscreenAPI_ResponseHandler);
}


function retrieve_CreditscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Credit_header(responseJSON.context.Header);
                generate_Credit_CreditIssueDetail(responseJSON.context.CreditIssueDetail);
                generate_Credit_CreditIssueTax(responseJSON.context.CreditIssueTax);
                generate_Credit_PaymentCollection(responseJSON.context.PaymentCollection);
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

function retrieve_Credit_payment_details(HeaderrequestObject) {
    CreditIssue_CreditIssue_master_getPaymentCollection_CreditIssue.invoke(HeaderrequestObject, retrieve_CreditpaymentscreenAPI_ResponseHandler);
}

function retrieve_CreditpaymentscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Credit_payment_header(responseJSON.context.Header);
                generate_Credit_payment_Detail(responseJSON.context.Detail)
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


function save_Credit_details(HeaderrequestObject) {
    CreditIssue_CreditIssue_master_saveCreditIssue.invoke(HeaderrequestObject, save_CreditAPI_ResponseHandler)
}

function save_CreditAPI_ResponseHandler(data, textStatus) {
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
                bind_CreditAPI_Response(responseJSON);
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
function bind_CreditAPI_Response(responseJSON) {

    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Credit Details saved successfully");
        get_Credit_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Credit  Details inactivate successfully");
        //get_Credit_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else {
        kendoAlert("Credit  Details saved successfully");
        get_Credit_details(responseJSON.context.Header);
    }

}
function save_Creditpayment_details(HeaderrequestObject) {
    CreditIssue_CreditIssue_master_savePaymentCollection_CreditIssue.invoke(HeaderrequestObject, save_CreditpaymentAPI_ResponseHandler)
}

function save_CreditpaymentAPI_ResponseHandler(data, textStatus) {
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
                bind_CreditpaymentAPI_Response(responseJSON);
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
function bind_CreditpaymentAPI_Response(responseJSON) {

    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Credit Details saved successfully");
        get_Credit_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Credit  Details inactivate successfully");
        get_Credit_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else {
        kendoAlert("Credit  Details saved successfully");
        get_Credit_details(responseJSON.context.Header);
    }

}