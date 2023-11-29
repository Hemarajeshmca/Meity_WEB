function retrieve_SerReqName_list(FilterrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestList.invoke(FilterrequestObject, retrieve_SerReqName_listAPI_ResponseHandler);
}
function retrieve_SerReqName_listAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqName_list(responseJSON.context.List);
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
function retrieve_SerReqName_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestName.invoke(HeaderrequestObject, retrieve_SerReqNamescreenAPI_ResponseHandler);
}
function retrieve_SerReqNamescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqName_header(responseJSON.context.Header)
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
function retrieve_SerReqNamedetail_details(HeaderrequestObject) {
    //ServiceRequest_Service_Request_retrieveServiceRequestDetail.invokeAPI(null, HeaderrequestObject, retrieve_SerReqNamedetailscreenAPI_ResponseHandler);
    ServiceRequest_Service_Request_retrieveSRMemberDetail.invoke(HeaderrequestObject, retrieve_SerReqNamedetailscreenAPI_ResponseHandler);
}
function retrieve_SerReqNamedetailscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqName_Header(responseJSON.context.Header)
                generate_SerReqName_share_certificate(responseJSON.context.share_certificate);
                generate_SerReqName_request_history(responseJSON.context.request_history);
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
function save_SerReqName_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_saveServiceRequestName.invoke(HeaderrequestObject, save_SerReqNameAPI_ResponseHandler)
}

function save_SerReqNameAPI_ResponseHandler(data, textStatus) {
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
                bind_SerReqNameAPI_Response(responseJSON);
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

function bind_SerReqNameAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Name Change  Details saved successfully");
        get_SerReqName_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Name Change  Details inactivate successfully");
        get_SerReqName_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Name Change  Details saved successfully");
        get_SerReqName_details(responseJSON.context.Header);
    }

}