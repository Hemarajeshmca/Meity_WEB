function retrieve_FarmerLoan_list(FilterrequestObject) {
    FarmerLoan_Farmer_Loan_retrieveProcessFLAppList.invoke(FilterrequestObject, retrieve_FarmerLoan_listAPI_ResponseHandler);
}

function retrieve_FarmerLoan_listAPI_ResponseHandler(data, textStatus) {
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
                generate_FarmerLoan_list(responseJSON.context.List);
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

function retrieve_FarmerLoan_details(HeaderrequestObject) {
    FarmerLoan_Farmer_Loan_retrieveProcessFLApp.invoke(HeaderrequestObject, retrieve_FarmerLoanscreenAPI_ResponseHandler);
}

function retrieve_FarmerLoanscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Farmer_header(responseJSON.context.Header);
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
function retrieve_FarmerLoanScheme_details(HeaderrequestObject) {
    FarmerLoan_Farmer_Loan_retrieveFarmerLoanScheme.invoke(HeaderrequestObject, retrieve_FarmerLoanSchemeAPI_ResponseHandler);
}

function retrieve_FarmerLoanSchemeAPI_ResponseHandler(data, textStatus) {
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
                generate_LoanScheme_header(responseJSON.context.Header);
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
function save_FarmerLoan_details(HeaderrequestObject) {
    FarmerLoan_Farmer_Loan_saveProcessFLApp.invoke(HeaderrequestObject, save_FarmerLoanAPI_ResponseHandler)
}

function save_FarmerLoanAPI_ResponseHandler(data, textStatus) {
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
                bind_FarmerLoanAPI_Response(responseJSON);
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

function bind_FarmerLoanAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Farmer Loan Details saved successfully");
        get_FarmerLoan_details(responseJSON.context.Header.loanapp_rowid);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Farmer Loan Details inactivate successfully");
        get_FarmerLoan_details(responseJSON.context.Header.loanapp_rowid);
    }
    else {
        kendoAlert("Farmer Loan Details updated successfully");
        get_FarmerLoan_details(responseJSON.context.Header.loanapp_rowid);
    }

}




