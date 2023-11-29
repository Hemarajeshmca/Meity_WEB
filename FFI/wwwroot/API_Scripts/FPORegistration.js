function retrieve_FPORegistration_list(FilterrequestObject) {
    FPORegistration_FPOReg_retrieveFPORegList.invoke(FilterrequestObject, retrieve_FPORegistration_listAPI_ResponseHandler);
}

function retrieve_FPORegistration_listAPI_ResponseHandler(data, textStatus) {
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
                generate_FPORegistration_list(responseJSON.context.List);
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
function retrieve_FPORegistration_details(HeaderrequestObject) {
    FPORegistration_FPOReg_retrieveFPOReg.invoke(HeaderrequestObject, retrieve_FPORegistrationscreenAPI_ResponseHandler);
}
function retrieve_FPORegistrationscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FPORegistration_header(responseJSON.context.Header)
                generate_FPORegistration_Address(responseJSON.context.Address);
                generate_FPORegistration_Fig(responseJSON.context.Fig);
                generate_FPORegistration_Bearers(responseJSON.context.Bearers);
                generate_FPORegistration_Bank(responseJSON.context.Bank);
                generate_FPORegistration_tax(responseJSON.context.Tax);
                generate_FPORegistration_User(responseJSON.context.User);
               
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

function save_FPORegistration_details(HeaderrequestObject) {
    FPORegistration_FPOReg_saveFPOReg.invoke(HeaderrequestObject, save_FPORegistrationAPI_ResponseHandler)
}
function save_FPORegistrationAPI_ResponseHandler(data, textStatus) {
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
                bind_FPORegistrationAPI_Response(responseJSON);
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
function bind_FPORegistrationAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("FPORegistration  Details saved successfully");
        get_FPORegistration_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("FPORegistration Details inactivate successfully");
        get_FPORegistration_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("FPORegistrationDetails Updated successfully");
        // retrieve_AggregatorOrgs_list();
        get_FPORegistration_details(responseJSON.context.Header);
    }

}
