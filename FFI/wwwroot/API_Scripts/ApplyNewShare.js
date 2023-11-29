function retrieve_ProcessShareApp_list(FilterrequestObject) {
    ShareApplication_Share_App_retrieveProcessShareAppList.invoke(FilterrequestObject, retrieve_ProcessShareApp_listAPI_ResponseHandler);
}
function retrieve_ProcessShareApp_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ProcessShareApp_list(responseJSON.context.List);
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
function retrieve_ProcessShareApp_details(HeaderrequestObject) {
    ShareApplication_Share_App_retrieveProcessShareApp.invoke(HeaderrequestObject, retrieve_ProcessShareAppAPI_ResponseHandler);
}
function retrieve_ProcessShareAppAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
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
                generate_ProcessShareApp_header(responseJSON.context.Header)
                return true;
            }
            catch (e) {
               // retrieve_SerReqAddsdetail_details();
                javascript_log4j_root(arguments.callee.name, e);

            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function save_ProcessShareApp_details(HeaderrequestObject) {
    ShareApplication_Share_App_saveProcessShareApp.invoke(HeaderrequestObject, save_ProcessShareAppAPI_ResponseHandler)
}

function save_ProcessShareAppAPI_ResponseHandler(data, textStatus) {
   
    if (textStatus == "success") {
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
            $('#divCreate #btnSave').prop('disabled', false);
            $('#divCreate #review').prop('disabled', true);
            return false;
        }
        else {
            try {
                bind_ProcessShareAppAPI_Response(responseJSON);
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

function bind_ProcessShareAppAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Share Details saved successfully");
        get_ProcessShareApp_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Share Details inactivate successfully");
        get_ProcessShareApp_details(responseJSON.context.Header);
    }
    else if (mode == "R") {
        kendoAlert("Submitted for review");
        get_ProcessShareApp_details(responseJSON.context.Header);
    }
    else if (mode == "I") {
        kendoAlert("Share Details saved successfully");
        get_ProcessShareApp_details(responseJSON.context.Header);
    }
    else if (mode == "U") {
        kendoAlert("Share Details saved successfully");
        get_ProcessShareApp_details(responseJSON.context.Header);
    }
    else if (mode == "J") {
        kendoAlert("Application Rejected");
        get_ProcessShareApp_details(responseJSON.context.Header);
    }
    else if (mode == "A") {
        kendoAlert("Application approved");
        get_ProcessShareApp_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Share Details saved successfully");
        get_ProcessShareApp_details(responseJSON.context.Header);
    }

}