function retrieve_TransferRegister_list(FilterrequestObject) {
    Register_FIS_Register_retrieveRegisterList.invoke(FilterrequestObject, retrieve_TransferRegister_listAPI_ResponseHandler);
}

function retrieve_TransferRegister_listAPI_ResponseHandler(data, textStatus) {
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
                generate_TransferRegister_list(responseJSON.context.List);
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

function retrieve_TransferRegister_details(HeaderrequestObject) {
    Register_FIS_Register_retrieveTransferRegister.invoke(HeaderrequestObject, retrieve_TransferRegisterscreenAPI_ResponseHandler);
}

function retrieve_TransferRegisterscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_TransferRegister_header(responseJSON.context.Header)
                generate_TransferRegister_detail(responseJSON.context.Detail);
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
function save_TransferRegister_details(HeaderrequestObject) {
    Register_FIS_Register_saveTransferRegister.invoke(HeaderrequestObject, save_TransferRegisterAPI_ResponseHandler)
}

function save_TransferRegisterAPI_ResponseHandler(data, textStatus) {
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
                bind_TransferRegisterAPI_Response(responseJSON);
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

function bind_TransferRegisterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("TransferRegister saved successfully");
        get_TransferRegister_header(responseJSON.context.Header);
        //get_TransferRegister_details(responseJSON.context.Detail);
      
    }
    else if (mode == "D") {
        kendoAlert("TransferRegister inactivate successfully");
        get_TransferRegister_header(responseJSON.context.Header);
        //get_TransferRegister_details(responseJSON.context.Detail);
    }
    else {
        kendoAlert("TransferRegister saved successfully");
        get_TransferRegister_header(responseJSON.context.Header);
        //get_TransferRegister_details(responseJSON.context.Detail);
    }

}




