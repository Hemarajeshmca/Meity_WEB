function retrieve_FLDisbursement_List(FilterrequestObject) {
    LoanDisbursement_Loan_Disbursement_retrieveFLDisbursementList.invoke(FilterrequestObject, retrieve_FLDisbursement_ListAPI_ResponseHandler);
}

function retrieve_FLDisbursement_ListAPI_ResponseHandler(data, textStatus) {
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
                generate_FLDisbursement_list(responseJSON.context.List);
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


function retrieve_FLDisbursement_details(HeaderrequestObject) {
    LoanDisbursement_Loan_Disbursement_retrieveFLDisbursement.invoke(HeaderrequestObject, retrieve_FLDisbursementAPI_ResponseHandler);
}
function retrieve_FLDisbursementAPI_ResponseHandler(data, textStatus) {
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
                generate_FLD_header(responseJSON.context.Header)
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
 
function save_FLDisbursement_details(HeaderrequestObject) {
    LoanDisbursement_Loan_Disbursement_saveFLDisbursement.invoke(HeaderrequestObject, save_FLDisbursement_ResponseHandler)
}

function save_FLDisbursement_ResponseHandler(data, textStatus) {
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
                bind_FLDisAPI_Response(responseJSON);
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






function bind_FLDisAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {

        kendoAlert("FL Disbursement  Changes saved successfully");
        get_FLDisbursement_details(responseJSON.context.Header);
        //kendoAlert('Loan No :' + responseJSON.context.Header.disb_advice_no);
    }
    else if (mode == "J") {
        kendoAlert("FL Disbursement Changes inactivate successfully");        
        get_FLDisbursement_details(responseJSON.context.Header);
    }
    else if (mode == "R") {
        kendoAlert("FL Disbursement Changes saved successfully");
        get_FLDisbursement_details(responseJSON.context.Header);
    }
    else if (mode == "A") {
        kendoAlert("FL Disbursement Changes saved successfully");
        get_FLDisbursement_details(responseJSON.context.Header);
        kendoAlert('Loan No :' + responseJSON.context.Header.disb_advice_no);
    }
    else {
        kendoAlert("FL Disbursement  Changes saved successfully");
        get_FLDisbursement_details(responseJSON.context.Header);

    }

}