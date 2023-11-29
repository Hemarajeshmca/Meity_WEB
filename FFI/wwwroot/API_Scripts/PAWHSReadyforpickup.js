function retrieve_ReadyForPickup_list(FilterrequestObject) {
    ReadyToPickup_ReadyTo_pickup_PAWHS_getReadyToPickupList.invoke(FilterrequestObject, retrieve_ReadyForPickup_listAPI_ResponseHandler);
}
function retrieve_ReadyForPickup_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ReadyForPickup_list(responseJSON.context.List);
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
function retrieve_ReadyForPickup_details(HeaderrequestObject) {
    ReadyToPickup_ReadyTo_pickup_PAWHS_getReadyToPickup.invoke(HeaderrequestObject, retrieve_ReadyForPickupscreenAPI_ResponseHandler);
}
function retrieve_ReadyForPickupscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_ReadyForPickup_header(responseJSON.context.Header)               
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

function save_ReadyForPickup_details(HeaderrequestObject) {
    ReadyToPickup_ReadyTo_pickup_PAWHS_saveReadyToPickup.invoke(HeaderrequestObject, save_ReadyForPickupAPI_ResponseHandler)
}
function save_ReadyForPickupAPI_ResponseHandler(data, textStatus) {
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
                bind_ReadyForPickupAPI_Response(responseJSON);
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
function bind_ReadyForPickupAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Manage Pick-up  Details saved successfully");
        get_ReadyForPickup_details(responseJSON.context.Header);
    }
    else if (mode == "R") {
        kendoAlert("This Request Cancelled successfully");
        get_ReadyForPickup_details(responseJSON.context.Header);

    }
    else  {
        kendoAlert("Manage Pick-up Details Updated successfully");
        get_ReadyForPickup_details(responseJSON.context.Header);

    }
    
    
}
