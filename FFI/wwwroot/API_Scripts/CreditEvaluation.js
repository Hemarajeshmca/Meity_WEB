function retrieve_creditevaluation_details(HeaderrequestObject) {
    Creditevalution_Credit_evalution_retrieveCreditevalution.invoke(HeaderrequestObject, retrieve_creditevaluationscreenAPI_ResponseHandler);
}

function retrieve_creditevaluationscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_creditevaluation_header(responseJSON.context.Header);
                generate_creditevaluation_detail(responseJSON.context.Detail);
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

function save_creditevaluation_details(HeaderrequestObject) {
    Creditevalution_Credit_evalution_saveCreditevalution.invoke(HeaderrequestObject, save_creditevaluationAPI_ResponseHandler)
}

function save_creditevaluationAPI_ResponseHandler(data, textStatus) {
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
        get_creditevaluation_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Farmer Loan Details inactivate successfully");
        get_creditevaluation_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Farmer Loan Details saved successfully");
        get_creditevaluation_details(responseJSON.context.Header);
    }

}




