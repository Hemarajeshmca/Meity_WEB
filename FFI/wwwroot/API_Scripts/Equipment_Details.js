function retrieve_Equipmentdetails_list(FilterrequestObject) {
    ESPEquipmentSetup_ESP_EquipmentSetup_retrieveESPEquipmentSetupList.invoke(FilterrequestObject, retrieve_Equipmentdetails_listAPI_ResponseHandler);
}

function retrieve_Equipmentdetails_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Equipmentdetails_list(responseJSON.context.List);
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

function retrieve_EQPdetails_details(HeaderrequestObject) {
    ESPEquipmentSetup_ESP_EquipmentSetup_retrieveESPEquipmentSetup.invoke(HeaderrequestObject, retrieve_EQPdetailsAPI_ResponseHandler);
}

function retrieve_EQPdetailsAPI_ResponseHandler(data, textStatus) {
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
                generate_EQPdetails_header(responseJSON.context.Header);
                generate_EQPdetails_ESPRate(responseJSON.context.ESPRate);
                generate_EQPdetails_Terms_and_Condition(responseJSON.context.Terms_and_Condition);
                generate_EQPdetails_EquipmentDetailsHistory(responseJSON.context.EquipmentDetailsHistory);
                generate_EQPdetails_RateHistory(responseJSON.context.RateHistory);
                generate_EQPdetails_TermsAndConditionsHistory(responseJSON.context.TermsAndConditionsHistory);

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

function save_EQP_details(HeaderrequestObject) {
    ESPEquipmentSetup_ESP_EquipmentSetup_saveESPEquipmentSetup.invoke(HeaderrequestObject, save_EQP_API_ResponseHandler)
}
function save_EQP_API_ResponseHandler(data, textStatus) {
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
                bind_EQPAPI_Response(responseJSON);
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
function bind_EQPAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Equipment Details saved successfully");
        get_EQP_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Equipment Details inactivate successfully");
        //get_InputCenter_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Equipment Details Updated successfully");
        // retrieve_AggregatorOrgs_list();
        get_EQP_details(responseJSON.context.Header);
    }

}

