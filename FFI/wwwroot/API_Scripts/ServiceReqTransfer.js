function retrieve_SerReqtrans_list(FilterrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestList.invoke(FilterrequestObject, retrieve_SerReqTransfer_listAPI_ResponseHandler);
}
function retrieve_SerReqTransfer_listAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqtrans_list(responseJSON.context.List);
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
function retrieve_SerReqtrans_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestTransfer.invoke(HeaderrequestObject, retrieve_SerReqTransscreenAPI_ResponseHandler);
}
function retrieve_SerReqTransscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqTran_header(responseJSON.context.Header)
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
function retrieve_SerReqTransdetail_details(HeaderrequestObject) {
    //ServiceRequest_Service_Request_retrieveServiceRequestDetail.invokeAPI(null, HeaderrequestObject, retrieve_SerReqTransdetailscreenAPI_ResponseHandler);
    ServiceRequest_Service_Request_retrieveSRMemberDetail.invoke(HeaderrequestObject, retrieve_SerReqTransdetailscreenAPI_ResponseHandler);
}
function retrieve_SerReqTransdetailscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqTran_Header(responseJSON.context.Header)
                generate_SerReqTran_share_certificate(responseJSON.context.share_certificate);
                generate_SerReqTran_request_history(responseJSON.context.request_history);
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
function save_SerReqTrans_details(HeaderrequestObject, DetailrequestObjectArray) {
    ServiceRequest_Service_Request_saveServiceRequestTransfer.invoke(HeaderrequestObject, save_SerReqTransAPI_ResponseHandler)
}

function save_SerReqTransAPI_ResponseHandler(data, textStatus) {
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
                bind_SerReqTransAPI_Response(responseJSON);
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

function bind_SerReqTransAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Transfer Request Details saved successfully");
        get_SerReqTran_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Transfer Request Details inactivate successfully");
        get_SerReqTran_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Transfer Request Details saved successfully");
        get_SerReqTran_details(responseJSON.context.Header);
    }

}