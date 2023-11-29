function retrieve_FarmerLoanDisbursement_details(FilterrequestObject) {
    LoanDisbursement_Loan_Disbursement_retrieveFLDisbursementAdviceGen.invoke(FilterrequestObject, retrieve_FLDisbursementAdviceGen_DetailsAPI_ResponseHandler);
}

function retrieve_FLDisbursementAdviceGen_DetailsAPI_ResponseHandler(data, textStatus) {
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
                generate_FLDisbursementAdviceGen_list(responseJSON.context.List);
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

function save_FLDisbursementAdviceGen_details(HeaderrequestObject) {
    LoanDisbursement_Loan_Disbursement_saveFLDisbursementAdviceGen.invoke(HeaderrequestObject, save_FLDisbursementAdviceGenAPI_ResponseHandler)
}

function save_FLDisbursementAdviceGenAPI_ResponseHandler(data, textStatus) {
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
                bind_FLDisbursementAdviceGenAPI_Response(responseJSON);
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

function bind_FLDisbursementAdviceGenAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Farmer Loan Disbursement generated successfully");
        get_FLDisbursementAdviceGen_details();
    }
    else if (mode == "D") {
        kendoAlert("Farmer Loan Disbursement inactivate successfully");
        get_FLDisbursementAdviceGen_details();
    }
    else {
        kendoAlert("Farmer Loan Disbursement saved successfully");
        get_FLDisbursementAdviceGen_details();
    }

}




