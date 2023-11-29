function retrieve_SerReqaddress_list(FilterrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestList.invoke(FilterrequestObject, retrieve_SerReqAddress_listAPI_ResponseHandler);
}
function retrieve_SerReqAddress_listAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqAddress_list(responseJSON.context.List);
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
function retrieve_SerReqAdd_details(HeaderrequestObject){
    ServiceRequest_Service_Request_retrieveServiceRequestAddress.invoke(HeaderrequestObject, retrieve_SerReqAddressscreenAPI_ResponseHandler);    
}
function retrieve_SerReqAddressscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqAddress_header(responseJSON.context.Header)
                return true;
            }
            catch (e) {
                //retrieve_SerReqAddsdetail_details();
                javascript_log4j_root(arguments.callee.name, e);
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}
function retrieve_SerReqAddsdetail_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_retrieveSRMemberDetail.invoke(HeaderrequestObject, retrieve_SerReqadddetailscreenAPI_ResponseHandler);
}
function retrieve_SerReqadddetailscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqAddress_Header(responseJSON.context.Header)
                generate_SerReqAddress_share_certificate(responseJSON.context.share_certificate);
                generate_SerReqAddress_request_history(responseJSON.context.request_history);
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
function save_SerReqAdd_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_saveServiceRequestAddress.invoke(HeaderrequestObject, save_SerAddAPI_ResponseHandler)
}

function save_SerAddAPI_ResponseHandler(data, textStatus) {
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
                bind_SerReqAddAPI_Response(responseJSON);
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

function bind_SerReqAddAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Service Request Address Details saved successfully");
        get_SerReqaddress_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Service Request Address inactivate successfully");
        get_SerReqaddress_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Service Request Address saved successfully");
        get_SerReqaddress_details(responseJSON.context.Header);
    }

}