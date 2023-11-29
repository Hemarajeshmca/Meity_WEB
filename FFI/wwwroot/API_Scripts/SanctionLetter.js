function retrieve_SanctionList_details(HeaderrequestObject) {
    FarmerLoan_Farmer_Loan_retrieveSanctionLetterGen.invoke(HeaderrequestObject, retrieve_Sanction_listAPI_ResponseHandler);
}
function retrieve_Sanction_listAPI_ResponseHandler(data, textStatus) {
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
                generate_SanctionLetter_detail(responseJSON.context.List);
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
function Save_SanctionLetter_details(HeaderrequestObject) {
    FarmerLoan_Farmer_Loan_saveSanctionLetterGen.invoke(HeaderrequestObject, save_SanctionLeter_ResponseHandler)
}

function save_SanctionLeter_ResponseHandler(data, textStatus) {
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
                bind_RefundAPI_Response(responseJSON);
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

function bind_RefundAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Sanction List saved successfully");
        get_Share_dispatch_details();
    }
    else if (mode == "D") {
        kendoAlert("Sanction List successfully");
        get_Share_dispatch_details();
    }
    else {
        kendoAlert("Sanction List successfully");
        get_Share_dispatch_details();
    }

}