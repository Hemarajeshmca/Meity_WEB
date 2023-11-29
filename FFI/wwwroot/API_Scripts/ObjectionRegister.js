function retrieve_ObjectionRegister_list(FilterrequestObject) {
    Register_FIS_Register_retrieveRegisterList.invoke(FilterrequestObject, retrieve_ObjectionRegister_listAPI_ResponseHandler);
}

function retrieve_ObjectionRegister_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ObjectionRegister_list(responseJSON.context.List);
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

function retrieve_ObjectionRegister_details(HeaderrequestObject) {
    Register_FIS_Register_retrieveObjectionRegister.invoke(HeaderrequestObject, retrieve_ObjectionRegisterscreenAPI_ResponseHandler);
}

function retrieve_ObjectionRegisterscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_ObjectionRegister_header(responseJSON.context.Header)
                generate_ObjectionRegister_detail(responseJSON.context.Detail);
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
function save_ObjectionRegister_details(HeaderrequestObject) {
    Register_FIS_Register_saveObjectionRegister.invoke(HeaderrequestObject, save_ObjectionRegisterAPI_ResponseHandler)
}

function save_ObjectionRegisterAPI_ResponseHandler(data, textStatus) {
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
                bind_ObjectionRegisterAPI_Response(responseJSON);
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

function bind_ObjectionRegisterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("ObjectionRegister saved successfully");
        get_ObjectionRegister_details(responseJSON.context.Header.bank_rowid);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("ObjectionRegister inactivate successfully");
        get_ObjectionRegister_details(responseJSON.context.Header.bank_rowid);
    }
    else {
        kendoAlert("ObjectionRegister saved successfully");
        get_ObjectionRegister_details(responseJSON.context.Header.bank_rowid);
    }

}




