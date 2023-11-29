function retrieve_ESP_list(FilterrequestObject) {
    ESPRegistration_ESP_retrieveESPRegList.invoke(FilterrequestObject, retrieve_ESP_listAPI_ResponseHandler);
}

function retrieve_ESP_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ESP_list(responseJSON.context.List);
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

function retrieve_ESP_details(HeaderrequestObject) {
    ESPRegistration_ESP_retrieveESPReg.invoke(HeaderrequestObject, retrieve_ESPAPI_ResponseHandler);
}

function retrieve_ESPAPI_ResponseHandler(data, textStatus) {
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
                generate_ESP_header(responseJSON.context.Header);
                generate_ESP_Bearers(responseJSON.context.Bearers);
                generate_ESP_Address(responseJSON.context.Address);
                generate_ESP_Bank(responseJSON.context.Bank);
                generate_ESP_User(responseJSON.context.User);
                
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
function retrieve_ESPMember_details(HeaderrequestObject) {
    ESPRegistration_ESP_retrieveMemberReg.invoke(HeaderrequestObject, retrieve_ESPMemberAPI_ResponseHandler);
}

function retrieve_ESPMemberAPI_ResponseHandler(data, textStatus) {
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
                generate_ESPmember_header(responseJSON.context.Header);
                generate_ESP_Bearers(responseJSON.context.Bearers);
                generate_ESP_Address(responseJSON.context.Address);
                generate_ESP_Bank(responseJSON.context.Bank);
                generate_ESP_User(responseJSON.context.User);

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
function save_ESP_details(HeaderrequestObject) {
    ESPRegistration_ESP_saveESPReg.invoke(HeaderrequestObject, save_ESPAPI_ResponseHandler)
}
function save_ESPAPI_ResponseHandler(data, textStatus) {
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
                bind_ESPAPI_Response(responseJSON);
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
function bind_ESPAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("ESP  Details saved successfully");
        get_ESP_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("ESP Details inactivate successfully");
        //get_InputCenter_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("ESP Details Updated successfully");
        // retrieve_AggregatorOrgs_list();
        get_ESP_details(responseJSON.context.Header);
    }

}

