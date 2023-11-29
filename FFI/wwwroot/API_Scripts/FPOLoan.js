function retrieve_FPOLoan_list(FilterrequestObject) {
    FPO_Loan_FPOLoan_retrieveFPOLoanList.invoke(FilterrequestObject, retrieve_FPOLoan_listAPI_ResponseHandler);
}

function retrieve_FPOLoan_listAPI_ResponseHandler(data, textStatus) {
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
                generate_FPOLoan_list(responseJSON.context.List);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function retrieve_FPOLoan_details(HeaderrequestObject) {
    FPO_Loan_FPOLoan_retrieveFPOLoan.invoke(HeaderrequestObject, retrieve_FPOLoanscreenAPI_ResponseHandler);
}

function retrieve_FPOLoanscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FPOLoan_header(responseJSON.context.Header)
                generate_FPOLoan_Tranche(responseJSON.context.Tranche);
                generate_FPOLoan_Repayment(responseJSON.context.Repayment);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}
function save_FPOLoan_details(HeaderrequestObject) {
    FPO_Loan_FPOLoan_saveFPOLoan.invoke(HeaderrequestObject, save_FPOLoanAPI_ResponseHandler)
}

function save_FPOLoanAPI_ResponseHandler(data, textStatus) {
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
                bind_FPOLoanAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function bind_FPOLoanAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("FPOLoan Details saved successfully");
        get_FPOLoan_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("FPOLoan Details inactivate successfully");
        get_FPOLoan_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("FPOLoan Details saved successfully");
        get_FPOLoan_details(responseJSON.context.Header);
    }

}




