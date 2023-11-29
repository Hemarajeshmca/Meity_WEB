function retrieve_Expense_list(FilterrequestObject) {
    Expense_Expense_Master_getExpenseList.invoke(FilterrequestObject, retrieve_Expense_listAPI_ResponseHandler);
}

function retrieve_Expense_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Expence_list(responseJSON.context.List);
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

function retrieve_expense_details(HeaderrequestObject) {
    Expense_Expense_Master_getExpense.invoke(HeaderrequestObject, retrieve_ExpensescreenAPI_ResponseHandler);
}

function retrieve_ExpensescreenAPI_ResponseHandler(data, textStatus) {
    debugger;
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
                generate_Expence_header(responseJSON.context.Header);
                generate_Expence_detail(responseJSON.context.Details);
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

function save_Expense_details(HeaderrequestObject) {
    Expense_Expense_Master_saveExpense.invoke(HeaderrequestObject, save_ExpenseAPI_ResponseHandler)
}

function save_ExpenseAPI_ResponseHandler(data, textStatus) {
    debugger;
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
            $('#divUserRole24 #btngen').show();
           
            return false;
        }
        else {
            try {
                bind_ExpenseAPI_Response(responseJSON);
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

function bind_ExpenseAPI_Response(responseJSON) {
    debugger;
    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Expense Details saved successfully");
        get_Expence_details(responseJSON.context.Header);
        //save_disable();
    }
    else if (mode == "D") {
        kendoAlert("Expense  Details inactivate successfully");
        get_Expence_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Expense  Details saved successfully");
        get_Expence_details(responseJSON.context.Header);
        //save_disable();
    }

}
