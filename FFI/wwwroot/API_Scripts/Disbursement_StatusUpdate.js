function retrieve_FLDisbursementStatusUpdate_List(FilterrequestObject) {
    LoanDisbursement_Loan_Disbursement_retrieveFLDisbursementStatusUpdate.invoke(FilterrequestObject, retrieve_FLDisbursementStatusUpdate_ListAPI_ResponseHandler);
}

function retrieve_FLDisbursementStatusUpdate_ListAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
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
                generate_FLDisbursementStatusUpdate_list(responseJSON.context.List);
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


function save_FLDisbursementStatusUpdate_details(HeaderrequestObject) {
    LoanDisbursement_Loan_Disbursement_saveFLDisbursementStatusUpdate.invoke(HeaderrequestObject, save_FLDisbursementStatusUpdate_ResponseHandler)
}

function save_FLDisbursementStatusUpdate_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
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
                bind_FLDisbursementStatusUpdate_Response(responseJSON);
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


function bind_FLDisbursementStatusUpdate_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("FL Disbursement status updated successfully");
        get_FLDisbursementStatusUpdate_details();
    }
    else if (mode == "D") {
        kendoAlert("FL Disbursement status updated successfully");
        get_FLDisbursementStatusUpdate_details();
    }
    else {
        kendoAlert("FL Disbursement  status updated successfully");
        get_FLDisbursementStatusUpdate_details();
    }

}