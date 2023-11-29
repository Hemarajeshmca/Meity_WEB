function retrieve_mobile_list(FilterrequestObject) {
    Mobile_Mobile_API_SyncMaster.invoke(FilterrequestObject, retrieve_mobile_listAPI_ResponseHandler);
}
function retrieve_mobile_listAPI_ResponseHandler(data, textStatus) {
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
                generate_mobile_list(responseJSON.context.List);
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
function retrieve_mobile_details(HeaderrequestObject) {
    Mobile_Mobile_API_UserValidation.invoke(HeaderrequestObject, retrieve_mobilescreenAPI_ResponseHandler);
}
function retrieve_mobilescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_mobile_header(responseJSON.context.Header)
                generate_mobile_List(responseJSON.context.List);
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

function save_mobile_details(HeaderrequestObject) {
    Mobile_Mobile_API_SyncTransaction.invoke(HeaderrequestObject, save_mobileAPI_ResponseHandler)
}
function save_mobileAPI_ResponseHandler(data, textStatus) {
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
                bind_mobileAPI_Response(responseJSON);
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
function bind_mobileAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("All MIlk Transfered");
        //get_AttrGroupActivity_details($('#cmb_menu').data("kendoComboBox").value());
    }
    else if (mode == "D") {
        kendoAlert("Attributes Group Mapping  Details inactivate successfully");
        //get_AttrGroupActivity_details($('#cmb_menu').data("kendoComboBox").value());
    }
    else {
        kendoAlert("Attributes Group Mapping Details saved successfully");
        //retrieve_AttrGroupactivity_list();
        //get_AttrGroupActivity_details($('#cmb_menu').data("kendoComboBox").value());
    }

}
