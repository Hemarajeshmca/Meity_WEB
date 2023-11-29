function retrieve_milkdespatch_list(FilterrequestObject) {
    dispatchrejects_dispatch_reject_retrievedispatchList.invoke(FilterrequestObject, retrieve_milkdespatch_listAPI_ResponseHandler);
}

function retrieve_milkdespatch_listAPI_ResponseHandler(data, textStatus) {
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
                generate_milkdespatch_list(responseJSON.context.Recipt);
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

function retrieve_defaultmilkdespatch_details(HeaderrequestObject) {
    dispatchrejects_dispatch_reject_defaultfetch.invoke(HeaderrequestObject, retrieve_defaultmilkdespatchscreenAPI_ResponseHandler);
}

function retrieve_defaultmilkdespatchscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_defaultmilkdespat_header(responseJSON.context.Header);
                generate_defaultmilkdespat_detail(responseJSON.context.Detail);
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
function retrieve_milkdespatch_details(HeaderrequestObject) {
    dispatchrejects_dispatch_reject_retrievedispatch.invoke(HeaderrequestObject, retrieve_milkdespatchscreenAPI_ResponseHandler);
}

function retrieve_milkdespatchscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_milkdespat_header(responseJSON.context.Header);
                generate_milkdespat_detail(responseJSON.context.Detail);
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
function save_dispatchrejects_details(HeaderrequestObject) {
    dispatchrejects_dispatch_reject_savedispatch.invoke(HeaderrequestObject, save_dispatchrejectsAPI_ResponseHandler)
}

function save_dispatchrejectsAPI_ResponseHandler(data, textStatus) {
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
                bind_dispatchrejectsAPI_Response(responseJSON);
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

function bind_dispatchrejectsAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Despatch reject details saved successfully");
        get_dispatchrejects_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Despatch reject details saved successfully");
        get_dispatchrejects_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Despatch reject details saved successfully");
        get_dispatchrejects_details(responseJSON.context.Header);
    }

}




