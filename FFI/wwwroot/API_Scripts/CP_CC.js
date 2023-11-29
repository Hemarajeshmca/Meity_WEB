function retrieve_Cpccactivity_list(FilterrequestObject) {
    ChillingPlant_CollectionCenter_CP_CC_retrieve_CP_CC_List.invoke(FilterrequestObject, retrieve_Cpccactivity_listAPI_ResponseHandler);
}
function retrieve_Cpccactivity_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Cpccactivity_list(responseJSON.context.Detail);
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
function retrieve__Cpccactivity_details(HeaderrequestObject) {
    ChillingPlant_CollectionCenter_CP_CC_retrieveCP_CC.invoke(HeaderrequestObject, retrieve_CpccActivityscreenAPI_ResponseHandler);
}
function retrieve_CpccActivityscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_CpccActivity_header(responseJSON.context.Header)
                generate_CpccActivity_detail(responseJSON.context.Detail);
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

function save_CpccActivity_details(HeaderrequestObject) {
    ChillingPlant_CollectionCenter_CP_CC_saveCP_CC.invoke(HeaderrequestObject,save_CpccActivityAPI_ResponseHandler)
}
function save_CpccActivityAPI_ResponseHandler(data, textStatus) {
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
                bind_CpccActivityAPI_Response(responseJSON);
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
function bind_CpccActivityAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    var type = $("#location_type").val();
    if (mode == "I" ) {
        kendoAlert(type+" Details saved successfully");
        retrieve_Cpccactivity_list();
        clear_val();
    }
    else if (mode == "D") {
        kendoAlert(type + " Details inactivated successfully");
        get_CpccActivity_details(responseJSON.context.Header.aggrloc_rowid);
    }
    else {
        kendoAlert(type + " Details saved successfully");
        get_CpccActivity_details(responseJSON.context.Header);
    }

}
