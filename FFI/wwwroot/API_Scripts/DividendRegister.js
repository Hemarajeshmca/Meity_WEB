function retrieve_DividendStructure_list(FilterrequestObject) {
    DividendManagement_Dividend_Management_retrieveDividendRegisterList.invoke(FilterrequestObject, retrieve_DividendRegister_listAPI_ResponseHandler);
}

function retrieve_DividendRegister_listAPI_ResponseHandler(data, textStatus) {
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
                generate_DividendRegister_list(responseJSON.context.List);
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

function retrieve_DividendRegister_details(HeaderrequestObject) {
    DividendManagement_Dividend_Management_retrieveDividendRegister.invoke(HeaderrequestObject, retrieve_DividendRegisterscreenAPI_ResponseHandler);
}

function retrieve_DividendRegisterscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_DividendRegister_header(responseJSON.context.Header)
                generate_DividendRegister_detail(responseJSON.context.Detail);
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
function save_DividendRegister_details(HeaderrequestObject) {
    DividendManagement_Dividend_Management_saveDividendRegister.invoke(HeaderrequestObject, save_DividendRegisterAPI_ResponseHandler);
}

function save_DividendRegisterAPI_ResponseHandler(data, textStatus) {
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
                bind_DividendRegisterAPI_Response(responseJSON);
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

function bind_DividendRegisterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Dividend Register saved successfully");
        get_Div_Reg__details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Dividend Register inactivate successfully");
        get_Div_Reg__details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Dividend Register saved successfully");
        get_Div_Reg__details(responseJSON.context.Header);
    }

}




