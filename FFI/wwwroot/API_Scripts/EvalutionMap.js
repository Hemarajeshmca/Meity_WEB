function retrieve_CreditevalutionSetup_list(FilterrequestObject) {
    Creditevalution_Credit_evalution_retrieveCreditevalutionSetupList.invoke(FilterrequestObject, retrieve_CreditevalutionSetup_listAPI_ResponseHandler);
}

function retrieve_CreditevalutionSetup_listAPI_ResponseHandler(data, textStatus) {
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
                generate_CreditevalutionSetup_list(responseJSON.context.Header);
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

function retrieve_CreditevalutionSetup_details(HeaderrequestObject) {
    Creditevalution_Credit_evalution_retrieveCreditevalutionSetup.invoke(HeaderrequestObject, retrieve_CreditevalutionSetupscreenAPI_ResponseHandler);
}

function retrieve_CreditevalutionSetupscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_CreditevalutionSetup_header(responseJSON.context.Header);
                generate_CreditevalutionSetup_detail(responseJSON.context.Detail);
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

function save_Credit_evalutionSetup_details(HeaderrequestObject) {
    Creditevalution_Credit_evalution_saveCreditevalutionSetup.invoke(HeaderrequestObject, save_evalutionSetupAPI_ResponseHandler)
   
}

function save_evalutionSetupAPI_ResponseHandler(data, textStatus) {
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
                bind_evalutionSetupAPI_Response(responseJSON);
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

function bind_evalutionSetupAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Farmer Loan Details saved successfully");
        get_evalutionSetup_details(responseJSON.context.Header.loanapp_rowid);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Farmer Loan Details inactivate successfully");
        get_evalutionSetup_details(responseJSON.context.Header.loanapp_rowid);
    }
    else {
        kendoAlert("Farmer Loan Details saved successfully");
        get_evalutionSetup_details(responseJSON.context.Header.loanapp_rowid);
    }

}




