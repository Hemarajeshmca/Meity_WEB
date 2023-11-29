function retrieve_DividendUpdateStatus_details(HeaderrequestObject) {
    DividendManagement_Dividend_Management_retrieveDividendUpdateStatus.invoke(HeaderrequestObject, retrieve_DividendUpdatescreenAPI_ResponseHandler);
}

function retrieve_DividendUpdatescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Dividend_StatusUpdateStatus_detail(responseJSON.context.Detail);
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
function save_DividendUpdateStatus_details(HeaderrequestObject) {
    DividendManagement_Dividend_Management_saveDividendUpdateStatus.invoke(HeaderrequestObject, save_DividendUpdateStatusAPI_ResponseHandler);
}

function save_DividendUpdateStatusAPI_ResponseHandler(data, textStatus) {
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
                bind_DividendUpdateStatusAPI_Response(responseJSON);
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

function bind_DividendUpdateStatusAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Dividend Register saved successfully");
        get_UpdateStatus_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Dividend Register inactivate successfully");
        get_UpdateStatus_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Dividend Register saved successfully");
        get_UpdateStatus_details(responseJSON.context.Header);
    }

}




