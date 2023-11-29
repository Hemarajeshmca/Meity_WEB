function retrieve_SerReqDuplicate_list(FilterrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestList.invoke(FilterrequestObject, retrieve_SerReqDuplicate_listAPI_ResponseHandler);
}
function retrieve_SerReqDuplicate_listAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqDuplicate_list(responseJSON.context.List);
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
function retrieve_SerReqDuplicate_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestDuplicate.invoke(HeaderrequestObject, retrieve_SerReqDuplicatescreenAPI_ResponseHandler);
}
function retrieve_SerReqDuplicatescreenAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        responseJSON = data;
        //responseJSON = jQuery.parseJSON(data);
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
                generate_SerReqDuplicate_header(responseJSON.context.Header)
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
function retrieve_SerReqDuplicatedetail_details(HeaderrequestObject) {  
    ServiceRequest_Service_Request_retrieveSRMemberDetail.invoke(HeaderrequestObject, retrieve_SerReqDuplicatedetailscreenAPI_ResponseHandler);
}
function retrieve_SerReqDuplicatedetailscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqDuplicate_Header(responseJSON.context.Header)
                generate_SerReqDuplicate_share_certificate(responseJSON.context.share_certificate);
                generate_SerReqDuplicate_request_history(responseJSON.context.request_history);
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
function save_SerReqDuplicate_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_saveServiceRequestDuplicate.invoke(HeaderrequestObject, save_SerReqDuplicateAPI_ResponseHandler)
}

function save_SerReqDuplicateAPI_ResponseHandler(data, textStatus) {
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
                bind_SerReqDuplicateAPI_Response(responseJSON);
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

function bind_SerReqDuplicateAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Duplicate  Details saved successfully");
        get_SerReqDuplicate_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Duplicate  Details inactivate successfully");
        get_SerReqDuplicate_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Duplicate  Details saved successfully");
        get_SerReqDuplicate_details(responseJSON.context.Header);
    }

}