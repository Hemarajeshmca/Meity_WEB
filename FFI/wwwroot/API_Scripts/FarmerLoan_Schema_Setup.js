function retrieve_farmer_loan_schema_list(FilterrequestObject) {
    FarmerLoan_Farmer_Loan_retrieveSetupFLSchemeList.invoke(FilterrequestObject, retrieve_farmer_loan_schema_listAPI_ResponseHandler);
}
function retrieve_farmer_loan_schema_listAPI_ResponseHandler(data, textStatus) {
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
                generate_farmer_loan_schema_list(responseJSON.context.List);
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
function retrieve_farmer_loan_schema_details(HeaderrequestObject) {
    FarmerLoan_Farmer_Loan_retrieveSetupFLScheme.invoke(HeaderrequestObject, retrieve_farmer_loan_schemascreenAPI_ResponseHandler);
}
function retrieve_farmer_loan_schemascreenAPI_ResponseHandler(data, textStatus) {
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
                generate_farmer_loan_schema_header(responseJSON.context.Header);
                generate_farmer_loan_schema_subvention(responseJSON.context.Subvention);
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

function save_farmer_loan_schema_details(HeaderrequestObject) {
    FarmerLoan_Farmer_Loan_saveSetupFLScheme.invoke(HeaderrequestObject, save_farmer_loan_schemaAPI_ResponseHandler)
}
function save_farmer_loan_schemaAPI_ResponseHandler(data, textStatus) {
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
                bind_farmer_loan_schemaAPI_Response(responseJSON);
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

function bind_farmer_loan_schemaAPI_Response(responseJSON) {

    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Farmer Loan Scheme Details saved successfully");
        get_farmer_loan_schema_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Farmer Loan Scheme  Details Inactivate successfully");
        get_farmer_loan_schema_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Farmer Loan Scheme Details updated successfully");
        get_farmer_loan_schema_details(responseJSON.context.Header);
    }

}