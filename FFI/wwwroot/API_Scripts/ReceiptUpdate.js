function retrieve_Reciptupdation_list(FilterrequestObject) {
    ReceiptUpdation_receipt_update_retrieveReceiptUpdationList.invoke(FilterrequestObject, retrieve_Reciptupdation_listAPI_ResponseHandler);
}
function retrieve_Reciptupdation_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Reciptupdation_list(responseJSON.context.List);
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
function retrieve_Reciptupdation_details(HeaderrequestObject) {
    ReceiptUpdation_receipt_update_retrieveReceiptUpdation.invoke(HeaderrequestObject, retrieve_ReciptupdationscreenAPI_ResponseHandler);
}
function retrieve_ReciptupdationscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Reciptupdation_header(responseJSON.context.Header)
                generate_Reciptupdation_Receipt_Updation(responseJSON.context.Receipt_Updation);
                generate_Reciptupdation_Terms_and_Conditions(responseJSON.context.Terms_and_Conditions);
                generate_Reciptupdation_History(responseJSON.context.History);
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

function save_Reciptupdation_details(HeaderrequestObject) {
    ReceiptUpdation_receipt_update_saveReceiptUpdation.invoke(HeaderrequestObject, save_ReciptupdationAPI_ResponseHandler)
}
function save_ReciptupdationAPI_ResponseHandler(data, textStatus) {
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
                bind_ReciptupdationAPI_Response(responseJSON);
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
function bind_ReciptupdationAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Receipt updation completed successfully");
        get_Reciptupdation_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Receipt Updation Details inactivate successfully");
        get_Reciptupdation_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Receipt Updation Details Updated successfully");
        // retrieve_Reciptupdation_list();
        get_Reciptupdation_details(responseJSON.context.Header);
    }

}
