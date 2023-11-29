function retrieve_AllotmentRegister_list(FilterrequestObject) {
    Register_FIS_Register_retrieveRegisterList.invoke(FilterrequestObject, retrieve_AllotmentRegister_listAPI_ResponseHandler);
}

function retrieve_AllotmentRegister_listAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        // responseJSON = jQuery.parseJSON(data);
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
                generate_AllotmentRegister_list(responseJSON.context.List);
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

function retrieve_AllotmentRegister_details(HeaderrequestObject) {
    Register_FIS_Register_retrieveAllotmentRegister.invoke(HeaderrequestObject, retrieve_AllotmentRegisterscreenAPI_ResponseHandler);
}

function retrieve_AllotmentRegisterscreenAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
       // responseJSON = jQuery.parseJSON(data);
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
                generate_AllotmentRegister_header(responseJSON.context.Header)
                generate_AllotmentRegister_detail(responseJSON.context.Detail);
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
function save_AllotmentRegister_details(HeaderrequestObject) {
    Register_FIS_Register_saveAllotmentRegister.invoke(HeaderrequestObject, save_AllotmentRegisterAPI_ResponseHandler)
}

function save_AllotmentRegisterAPI_ResponseHandler(data, textStatus) {
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
                bind_AllotmentRegisterAPI_Response(responseJSON);
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

function bind_AllotmentRegisterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("AllotmentRegister saved successfully");
        get_AllotmentRegister_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("AllotmentRegister inactivate successfully");
        //get_AllotmentRegister_details(responseJSON.context.Header.bank_rowid);
    }
    else {
        kendoAlert("AllotmentRegister Updated successfully");
        get_AllotmentRegister_details(responseJSON.context.Header);
        //get_AllotmentRegister_details(responseJSON.context.Header.bank_rowid);
    }

}




