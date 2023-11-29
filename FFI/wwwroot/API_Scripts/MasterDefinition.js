function retrieve_masteractivity_list(HeaderrequestObject) {
    MasterDefinition_Master_retrievemastercode_list.invoke( HeaderrequestObject, retrieve_masteractivity_listAPI_ResponseHandler);
    //MasterDefinition_Master_retrievemastercode_list.invokeAPI(null, HeaderrequestObject, retrieve_masteractivity_listAPI_ResponseHandler);
}

function retrieve_masteractivity_listAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //  responseJSON = jQuery.parseJSON(data);
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
                generate_masteractivity_list(responseJSON.context.Detail);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function retrieve_masteractivity_details(HeaderrequestObject) {
    MasterDefinition_Master_retrievemastercode.invoke( HeaderrequestObject, retrieve_masteractivityscreenAPI_ResponseHandler);
}

function retrieve_masteractivityscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_masteractivity_header(responseJSON.context.Header)
                generate_masteractivity_detail(responseJSON.context.Detail);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function save_masteractivity_details(HeaderrequestObject) {
    MasterDefinition_Master_savemaster_code.invoke( HeaderrequestObject, save_masteractivityAPI_ResponseHandler)
}

function save_masteractivityAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //   responseJSON = jQuery.parseJSON(data);
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
                bind_masteractivityAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function bind_masteractivityAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Master Definition  Details saved successfully");
        var data = {};
        data.context = WebAPIProxy.getContext();
        retrieve_masteractivity_list();
        clear_val();
    }
    else if (mode == "D") {
        kendoAlert("Master Definition  Details inactivated successfully");
        get_master_details($("#txtcode").val());
    }
    else {
        kendoAlert("Master Definition  Details saved successfully");     
        get_master_details($("#txtcode").val());
    }

}