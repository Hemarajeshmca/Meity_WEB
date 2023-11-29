function retrieve_FlRepaymentmaintance_list(HeaderrequestObject) {
    FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Maintenance.invoke(HeaderrequestObject, retrieve_FlRepaymentmaintance_listAPI_ResponseHandler);
}

function retrieve_FlRepaymentmaintance_listAPI_ResponseHandler(data, textStatus) {
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
                generate_FlRepaymentmaintance_Header(responseJSON.context.Header)
                generate_FlRepaymentmaintance_RepaymentDtl(responseJSON.context.RepaymentDtl);
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
function retrieve_FLRepayment_Mode_details(HeaderrequestObject) {
    FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Mode.invoke(HeaderrequestObject, retrieve_FLRepayment_ModescreenAPI_ResponseHandler);
}
function retrieve_FLRepayment_ModescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FLRepayment_Mode_header(responseJSON.context.Header)             
                generate_FLRepayment_Mode_Detail(responseJSON.context.Detail);
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
function retrieve_FLRepayment_Schedule_details(HeaderrequestObject) {
    FLRepayment_Maintenance_FLRepaymentMaintenance_retrieveFLRepayment_Schedule.invoke(HeaderrequestObject, retrieve_FLRepayment_SchedulescreenAPI_ResponseHandler);
}
function retrieve_FLRepayment_SchedulescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FLRepayment_Schedule_header(responseJSON.context.Header)
                generate_FLRepayment_Schedule_Details(responseJSON.context.Details);
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
function save_FLRepayment_Maintenance_details(HeaderrequestObject) {
    FLRepayment_Maintenance_FLRepaymentMaintenance_saveFLRepayment_Maintenance.invoke(HeaderrequestObject, save_FLRepayment_MaintenanceAPI_ResponseHandler)
}

function save_FLRepayment_MaintenanceAPI_ResponseHandler(data, textStatus) {
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
                bind_FLRepayment_MaintenanceAPI_Response(responseJSON);
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
function bind_FLRepayment_MaintenanceAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Repayment Maintenance Details saved successfully");
        get_repay_maintain_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Repayment Maintenance Details inactivate successfully");
        get_repay_maintain_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Repayment Maintenance Details saved successfully");
        get_repay_maintain_details(responseJSON.context.Header);
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
        get_repay_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Repayment Mode Details inactivate successfully");
        get_repay_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Repayment Mode Details saved successfully");
        get_repay_details(responseJSON.context.Header);
    }

}

