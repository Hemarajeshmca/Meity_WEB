function retrieve_ServiceReqBank_list(FilterrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestList.invoke(FilterrequestObject, retrieve_ServiceReqBank_listAPI_ResponseHandler);
}

function retrieve_ServiceReqBank_listAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqBank_list(responseJSON.context.List);
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


function retrieve_SerReqBank_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestBank.invoke(HeaderrequestObject, retrieve_SerReqBankscreenAPI_ResponseHandler);
}
function retrieve_SerReqBankscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqBank_header(responseJSON.context.Header)
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
function retrieve_SerReqBankdetail_details(HeaderrequestObject) {
    //ServiceRequest_Service_Request_retrieveServiceRequestDetail.invokeAPI(null, HeaderrequestObject, retrieve_SerReqBankdetailscreenAPI_ResponseHandler);
    ServiceRequest_Service_Request_retrieveSRMemberDetail.invoke(HeaderrequestObject, retrieve_SerReqBankdetailscreenAPI_ResponseHandler);
}
function retrieve_SerReqBankdetailscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SerReqBank_Header(responseJSON.context.Header)
                generate_SerReqBank_share_certificate(responseJSON.context.share_certificate);
                generate_SerReqBank_request_history(responseJSON.context.request_history);
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
function save_SerReqBank_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_saveServiceRequestBank.invoke(HeaderrequestObject , save_SerReqBankAPI_ResponseHandler)
}

function save_SerReqBankAPI_ResponseHandler(data, textStatus) {
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
                bind_SerReqBankAPI_Response(responseJSON);
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

 




function bind_SerReqBankAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        
        kendoAlert("Bank Detail  Changes saved successfully");
        get_SerReqBank_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Bank Detail  Changes inactivate successfully");
        get_SerReqBank_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Bank Detail  Changes saved successfully");
        get_SerReqBank_details(responseJSON.context.Header);
    }

}