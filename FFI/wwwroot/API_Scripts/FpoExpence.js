function retrieve_fpoexpence_list(FilterrequestObject) {
    FPOExpense_Fpo_expense_retrieveFPOExpenseList.invoke(FilterrequestObject, retrieve_fpoexpence_listAPI_ResponseHandler);
}

function retrieve_fpoexpence_listAPI_ResponseHandler(data, textStatus) {
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
                generate_fpoexpence_list(responseJSON.context.FpoExpenseDtl);
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

function retrieve_fpoexpence_details(HeaderrequestObject) {
    FPOExpense_Fpo_expense_retrieveFPOExpense.invoke(HeaderrequestObject, retrieve_fpoexpencescreenAPI_ResponseHandler);
}

function retrieve_fpoexpencescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_fpoexpence_header(responseJSON.context.Header)
                generate_fpoexpence_detail(responseJSON.context.FPOExpenseDtl);
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
function save_fpoexpence_details(HeaderrequestObject) {
    FPOExpense_Fpo_expense_saveFPOExpense.invoke(HeaderrequestObject, save_fpoexpenceAPI_ResponseHandler)
}

function save_fpoexpenceAPI_ResponseHandler(data, textStatus) {
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
                bind_fpoexpenceAPI_Response(responseJSON);
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

function bind_fpoexpenceAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("FPO Expence  Details saved successfully");
        get_fpoexpence_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("FPO Expence  Details inactivate successfully");
        get_fpoexpence_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("FPO Expence  Details Updated  successfully");
        get_fpoexpence_details(responseJSON.context.Header);
    }

}




