function retrieve_expense_list(FilterrequestObject) {
    ExpenseAccount_Expense_Account_retrieveExpenseAccountList.invoke( FilterrequestObject, retrieve_expense_listAPI_ResponseHandler);
}

function retrieve_expense_listAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //   responseJSON = jQuery.parseJSON(data);
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
                generate_expense_list(responseJSON.context.List);
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

function retrieve_expense_details(HeaderrequestObject) {
    ExpenseAccount_Expense_Account_retrieveExpenseAccount.invoke( HeaderrequestObject, retrieve_expensescreenAPI_ResponseHandler);
}

function retrieve_expensescreenAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //     responseJSON = jQuery.parseJSON(data);
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
                generate_expense_header(responseJSON.context.Header)
                generate_expense_detail(responseJSON.context.Detail);
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
function save_expense_details(HeaderrequestObject) {
    ExpenseAccount_Expense_Account_saveExpenseAccount.invoke( HeaderrequestObject, save_expenseAPI_ResponseHandler)
}

function save_expenseAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //  responseJSON = jQuery.parseJSON(data);
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
                bind_attribute_groupAPI_Response(responseJSON);
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

function bind_attribute_groupAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Expense Details saved successfully");
        get_expense_details(responseJSON.context.Header.expense_rowid);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Expense Details inactivate successfully");
        get_expense_details(responseJSON.context.Header.expense_rowid);
    }
    else {
        kendoAlert("Expense Details saved successfully");
        get_expense_details(responseJSON.context.Header.expense_rowid);
    }

}




