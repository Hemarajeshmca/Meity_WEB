function retrieve_DuplicateRegister_list(FilterrequestObject) {
    Register_FIS_Register_retrieveRegisterList.invoke(FilterrequestObject, retrieve_DuplicateRegister_listAPI_ResponseHandler);
}

function retrieve_DuplicateRegister_listAPI_ResponseHandler(data, textStatus) {
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
                generate_DuplicateRegister_list(responseJSON.context.List);
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

function retrieve_DuplicateRegister_details(HeaderrequestObject) {
    Register_FIS_Register_retrieveDuplicateRegister.invoke(HeaderrequestObject, retrieve_DuplicateRegisterscreenAPI_ResponseHandler);
}

function retrieve_DuplicateRegisterscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_DuplicateRegister_header(responseJSON.context.Header)
                generate_DuplicateRegister_detail(responseJSON.context.Detail);
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
function save_DuplicateRegister_details(HeaderrequestObject) {
    Register_FIS_Register_saveDuplicateRegister.invoke(HeaderrequestObject, save_DuplicateRegisterAPI_ResponseHandler)
}

function save_DuplicateRegisterAPI_ResponseHandler(data, textStatus) {
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
                bind_DuplicateRegisterAPI_Response(responseJSON);
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

function bind_DuplicateRegisterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("DuplicateRegister saved successfully");
        get_DuplicateRegister_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("DuplicateRegister inactivate successfully");
        get_DuplicateRegister_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("DuplicateRegister saved successfully");
        get_DuplicateRegister_details(responseJSON.context.Header);
    }

}




