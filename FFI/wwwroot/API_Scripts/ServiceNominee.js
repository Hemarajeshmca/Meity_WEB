function retrieve_SerReqNominee_list(FilterrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestList.invoke(FilterrequestObject, retrieve_SerReqNominee_listAPI_ResponseHandler);
}
function retrieve_SerReqNominee_listAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqNominee_list(responseJSON.context.List);
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
function retrieve_SerReqNominee_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestNominee.invoke(HeaderrequestObject, retrieve_SerReqNomineescreenAPI_ResponseHandler);
}
function retrieve_SerReqNomineescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqNominee_header(responseJSON.context.Header)
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
function retrieve_SerReqNomineedetail_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_retrieveSRMemberDetail.invoke(HeaderrequestObject, retrieve_SerReqNomineedetailscreenAPI_ResponseHandler);
}
function retrieve_SerReqNomineedetailscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqNominee_Header(responseJSON.context.Header)
                generate_SerReqNominee_share_certificate(responseJSON.context.share_certificate);
                generate_SerReqNominee_request_history(responseJSON.context.request_history);
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
function save_SerReqNominee_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_saveServiceRequestNomiee.invoke(HeaderrequestObject, save_SerReqNomineeAPI_ResponseHandler)
}

function save_SerReqNomineeAPI_ResponseHandler(data, textStatus) {
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
                bind_SerReqNomineeAPI_Response(responseJSON);
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

function bind_SerReqNomineeAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Nominee Change Details saved successfully");
        get_SerReqNominee_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Nominee Change Details inactivate successfully");
        get_SerReqNominee_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Nominee Change Details saved successfully");
        get_SerReqNominee_details(responseJSON.context.Header);
    }

}