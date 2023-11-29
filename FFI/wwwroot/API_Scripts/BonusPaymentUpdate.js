function retrieve_BonuspaymentUpdate_list(FilterrequestObject) {
    BonusPayment_Bonus_Payment_retrieveBonusUpdate.invoke(FilterrequestObject, retrieve_BonuspaymentUpdateApp_listAPI_ResponseHandler);
}
function retrieve_BonuspaymentUpdateApp_listAPI_ResponseHandler(data, textStatus) {
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
                generate_BonuspaymentUpdateApp_listHeader(responseJSON.context.Header);
                generate_BonuspaymentUpdateApp_listDetail(responseJSON.context.bonusDtl);
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

function save_BonuspaymentUpdateApp_details(HeaderrequestObject) {
    BonusPayment_Bonus_Payment_saveBonusUpdate.invoke(HeaderrequestObject, save_BonuspaymentUpdateAppAPI_ResponseHandler)
}

function save_BonuspaymentUpdateAppAPI_ResponseHandler(data, textStatus) {
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
                bind_BonuspaymentUpdateAppAPI_Response(responseJSON);
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

function bind_BonuspaymentUpdateAppAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Bonus payment details updated successfully");
        get_ProcessShareApp_Header(responseJSON.context.Header);
        get_ProcessShareApp_Details(responseJSON.context.bonusDtl);
    }
    else if (mode == "D") {
        kendoAlert("Bonus payment details updated successfully");
        get_ProcessShareApp_Header(responseJSON.context.Header);
        get_ProcessShareApp_Details(responseJSON.context.bonusDtl);
    }
    else {
        kendoAlert("Bonus payment details updated successfully");
        get_ProcessShareApp_Header(responseJSON.context.Header);
        get_ProcessShareApp_Details(responseJSON.context.bonusDtl);
    }

}