function retrieve_ServiceMaster_list(FilterrequestObject) {
    ServiceMaster_Service_Master_PAWHS_getServiceMasterList.invoke(FilterrequestObject, retrieve_ServiceMaster_listAPI_ResponseHandler);
}
function retrieve_ServiceMaster_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ServiceMaster_list(responseJSON.context.List);
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
function retrieve_ServiceMaster_details(HeaderrequestObject) {
    ServiceMaster_Service_Master_PAWHS_getServiceMaster.invoke(HeaderrequestObject, retrieve_ServiceMasterAPI_ResponseHandler);
}
function retrieve_ServiceMasterAPI_ResponseHandler(data, textStatus) {
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
                generate_ServiceMaster_header(responseJSON.context.Header)
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

function save_ServiceMaster_details(HeaderrequestObject) {
    ServiceMaster_Service_Master_PAWHS_saveServiceMaster.invoke(HeaderrequestObject, save_ServiceMasterAPI_ResponseHandler)
}
          
function save_ServiceMasterAPI_ResponseHandler(data, textStatus) {
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
                bind_ServiceMasterAPI_Response(responseJSON);
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

function bind_ServiceMasterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Service Master saved successfully");
        get_ServiceMaster_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Service Master inactivate successfully");
        get_ServiceMaster_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Service Master saved successfully");
        get_ServiceMaster_details(responseJSON.context.Header);
    }

}