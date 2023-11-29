function retrieve_FLRecoveryStatusUpdate_list(FilterrequestObject) {
    FLRecovery_Status_Update_FLRecoveryStatusUpdate_retrieveFLRecovery_Status_Update.invoke(FilterrequestObject, retrieve_FLRecoveryStatusUpdate_listAPI_ResponseHandler);
}

function retrieve_FLRecoveryStatusUpdate_listAPI_ResponseHandler(data, textStatus) {
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
                //generate_FLRecoveryStatusUpdate_Header(responseJSON.context.Header)
                generate_FLRecoveryStatusUpdate_Dtl(responseJSON.context.Detail);
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
function save_FLRecoveryStatusUpdate_details(HeaderrequestObject) {
    FLRecovery_Status_Update_FLRecoveryStatusUpdate_saveFLRecovery_Status_Update.invoke(HeaderrequestObject, save_FLRecoveryStatusUpdateAPI_ResponseHandler)
}

function save_FLRecoveryStatusUpdateAPI_ResponseHandler(data, textStatus) {
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
                bind_save_FLRecoveryStatusUpdateAPI_Response(responseJSON);
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
function bind_save_FLRecoveryStatusUpdateAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Repayment Maintenance Details saved successfully");
        get_FLRecoveryStatusUpdate_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Repayment Maintenance Details inactivate successfully");
        get_FLRecoveryStatusUpdate_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Repayment Maintenance Details saved successfully");
        get_FLRecoveryStatusUpdate_details(responseJSON.context.Header);
    }

}
function save_FLRepayment_Mode_details(HeaderrequestObject) {
    FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Mode.invoke(HeaderrequestObject, save_FLRepayment_ModeAPI_ResponseHandler)
}

function save_FLRepayment_ModeAPI_ResponseHandler(data, textStatus) {
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
                bind_FLRepayment_ModeAPI_Response(responseJSON);
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
function bind_FLRepayment_ModeAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Repayment Mode Details saved successfully");
        get_SerReqNominee_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Repayment Mode Details inactivate successfully");
        get_SerReqNominee_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Repayment Mode Details saved successfully");
        get_SerReqNominee_details(responseJSON.context.Header);
    }

}

