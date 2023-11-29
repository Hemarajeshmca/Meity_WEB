function retrieve_FpoMap_list(FilterrequestObject) {
    FPOFarmerMap_FPOFarmersMap_retrieveFpoFarmerlist.invoke(FilterrequestObject, retrieve_FpoMap_listAPI_ResponseHandler);
}
function retrieve_FpoMap_listAPI_ResponseHandler(data, textStatus) {
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
                generate_FPOMap_list(responseJSON.context.List);
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
function retrieve_FpoMap_details(HeaderrequestObject) {
    FPOFarmerMap_FPOFarmersMap_retrieveFpoFarmerMap.invoke(HeaderrequestObject, retrieve_FpoMapscreenAPI_ResponseHandler);
}
function retrieve_FpoMapscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FpoMap_header(responseJSON.context.Header);
                generate_FpoMap_Map(responseJSON.context.Map);
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

function save_FpoMap_details(HeaderrequestObject) {
    FPOFarmerMap_FPOFarmersMap_saveFPOFarmerMap.invoke(HeaderrequestObject, save_FpoMapAPI_ResponseHandler)
}

function save_FpoMapAPI_ResponseHandler(data, textStatus) {
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
                bind_FpoMapAPI_Response(responseJSON);
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

function bind_FpoMapAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("FPO Farmer Mapping  Details saved successfully");
        get_FpoMap_details();
    }
    else if (mode == "D") {
        kendoAlert("FPO Farmer Mapping  Details inactivate successfully");
        get_FpoMap_details();
    }
    else {
        kendoAlert("FPO Farmer Mapping  Details saved successfully");
        get_FpoMap_details();
    }

}