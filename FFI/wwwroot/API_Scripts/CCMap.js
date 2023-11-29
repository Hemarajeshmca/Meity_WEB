
function retrieve_CCMap_details(HeaderrequestObject) {
    CollectionCenterMap_CCMap_retrieveCCMap.invoke(HeaderrequestObject, retrieve_CCMapscreenAPI_ResponseHandler);
}

function retrieve_CCMapscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_CCMap_CCVillage(responseJSON.context.CCVillage);
                generate_CCMap_CCCP(responseJSON.context.CCCP);
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


function save_CCMap_details(HeaderrequestObject) {
    CollectionCenterMap_CCMap_saveCCMap.invoke(HeaderrequestObject,save_CCMapAPI_ResponseHandler)
}

function save_CCMapAPI_ResponseHandler(data, textStatus) {
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
                bind_CCMapAPI_Response(responseJSON);
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

function bind_CCMapAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("CC Map Details saved successfully");
        retrieve_CCMap_details();
        //clear_val();
    }
    else if (mode == "D") {
        kendoAlert("CC Map Details inactivate successfully");
        //get_role_details(responseJSON.context.Header.role_rowid);
    }
    else {
        kendoAlert("CC Map Details saved successfully");
        retrieve_CCMap_details();
        //get_role_details(responseJSON.context.Header.role_rowid);
    }

}

