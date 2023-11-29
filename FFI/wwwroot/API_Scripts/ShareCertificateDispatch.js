
function retrieve_Share_dispatch_details(HeaderrequestObject) {
    ShareApplication_Share_App_retrieveShareDespatch.invoke(HeaderrequestObject, retrieve_Share_dispatchscreenAPI_ResponseHandler);
}

function retrieve_Share_dispatchscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Share_dispatch_detail(responseJSON.context.Detail);
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
function save_Share_dispatch_details(HeaderrequestObject) {
    ShareApplication_Share_App_saveShareDespatch.invoke(HeaderrequestObject, save_Share_dispatchAPI_ResponseHandler)
}

function save_Share_dispatchAPI_ResponseHandler(data, textStatus) {
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
                bind_Share_dispatchAPI_Response(responseJSON);
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

function bind_Share_dispatchAPI_Response(responseJSON) {

    //var mode = $("#txtMode").val();
    //if (mode == "I") {
    //    kendoAlert("Dispatch Details saved successfully");
    //    get_dispatch_details();
    //}
    //else if (mode == "D") {
    //    kendoAlert("Dispatch Details inactivate successfully");
    //    get_dispatch_details();
    //}
    //else {
    kendoAlert("Dispatch Details saved successfully");
    get_Share_dispatch_details();
    //}

}




