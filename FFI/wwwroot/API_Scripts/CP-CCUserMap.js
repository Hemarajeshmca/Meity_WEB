function retrieve_CCUserMap_details(HeaderrequestObject) {
    CP_CC_UserMap_CP_CCUserMap_retrieveCP_CC_UserMap.invoke(HeaderrequestObject, retrieve_CCUserMapscreenAPI_ResponseHandler);
}

function retrieve_CCUserMapscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_CCUserMap_header(responseJSON.context.Header)
                generate_CCUserMap_detail(responseJSON.context.Detail);
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


function save_CCUserMap_details(HeaderrequestObject) {
    CP_CC_UserMap_CP_CCUserMap_saveCP_CC_UserMap.invoke(HeaderrequestObject,save_CCUserMapAPI_ResponseHandler)
}

function save_CCUserMapAPI_ResponseHandler(data, textStatus) {
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
                bind_CCUserMapAPI_Response(responseJSON);
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

function bind_CCUserMapAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Role Definition  Details saved successfully");
        get_CCUserMap_details();
        // clear_val();

    }
    else if (mode == "D") {
        kendoAlert("CC User Map  Details inactivate successfully");
        get_CCUserMap_details();
    }
    else {
        kendoAlert("CC User Map  Details saved successfully");
        retrieve_CCUserMap_details();
        get_CCUserMap_details();
        //get_CCUserMap(responseJSON.context.Header);
    }

}
