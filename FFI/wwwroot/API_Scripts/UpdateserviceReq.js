function retrieve_UpdateserviceReq_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_retrieveServiceRequestUpdate.invoke(HeaderrequestObject, retrieve_UpdateserviceReq_listAPI_ResponseHandler);
}
function retrieve_UpdateserviceReq_listAPI_ResponseHandler(data, textStatus) {
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
                generate_UpdateserviceReq_detail(responseJSON.context.Detail);
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
function save_UpdateserviceReq_details(HeaderrequestObject) {
    ServiceRequest_Service_Request_saveservicerequestUpdate.invoke(HeaderrequestObject, save_UpdateserviceReq_ResponseHandler)
}

function save_UpdateserviceReq_ResponseHandler(data, textStatus) {
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
                bind_UpdateserviceReqAPI_Response(responseJSON);
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

function bind_UpdateserviceReqAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Update service Req details saved successfully");
        get_UpdateserviceReq_details();
    }
    else if (mode == "D") {
        kendoAlert("Update service Reqdetails inactivate successfully");
        get_UpdateserviceReq_details();
    }
    else {
        kendoAlert("Update service Req details saved successfully");
       get_UpdateserviceReq_details();
    }

}