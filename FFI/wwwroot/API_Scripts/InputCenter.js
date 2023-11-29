function retrieve_InputCenter_list(FilterrequestObject) {
    InputCenter_Input_center_retrieveInputCenterList.invoke(FilterrequestObject, retrieve_InputCenter_listAPI_ResponseHandler);
}
function retrieve_InputCenter_listAPI_ResponseHandler(data, textStatus) {
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
                generate_InputCenter_list(responseJSON.context.List);
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
function retrieve_InputCenter_details(HeaderrequestObject) {
    InputCenter_Input_center_retrieveInputCenter.invoke(HeaderrequestObject, retrieve_InputCenterscreenAPI_ResponseHandler);
}
function retrieve_InputCenterscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_InputCenter_header(responseJSON.context.Header)
                generate_InputCenter_Address(responseJSON.context.Address);
                generate_InputCenter_Bank(responseJSON.context.Bank);
                generate_InputCenter_User(responseJSON.context.User);
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

function save_InputCenter_details(HeaderrequestObject) {
    InputCenter_Input_center_saveInputCenter.invoke(HeaderrequestObject, save_InputCenterAPI_ResponseHandler)
}
function save_InputCenterAPI_ResponseHandler(data, textStatus) {
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
                bind_InputCenterAPI_Response(responseJSON);
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
function bind_InputCenterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Input Center  Details saved successfully");
        get_InputCenter_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Input Center Details inactivate successfully");
        //get_InputCenter_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Input Center Details Updated successfully");
        // retrieve_AggregatorOrgs_list();
        get_InputCenter_details(responseJSON.context.Header);
    }

}
