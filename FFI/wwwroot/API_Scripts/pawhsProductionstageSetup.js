function retrieve_ProductionStageSetup_list(FilterrequestObject) {
    ProductionStageSetup_Production_StageSetup_PAWHS_getProductionStageSetupList.invoke(FilterrequestObject, retrieve_ProductionStageSetup_listAPI_ResponseHandler);
}
function retrieve_ProductionStageSetup_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ProductionStageSetup_list(responseJSON.context.List);
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
function retrieve_ProductionStageSetup_details(HeaderrequestObject) {
    ProductionStageSetup_Production_StageSetup_PAWHS_getProductionStageSetup.invoke(HeaderrequestObject, retrieve_ProductionStageSetupscreenAPI_ResponseHandler);
}
function retrieve_ProductionStageSetupscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_ProductionStageSetup_header(responseJSON.context.Header)
                generate_ProductionStageSetup_Stage(responseJSON.context.Stage);             
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

function save_ProductionStageSetup_details(HeaderrequestObject) {
    ProductionStageSetup_Production_StageSetup_PAWHS_saveProductionStageSetup.invoke(HeaderrequestObject, save_ProductionStageSetupAPI_ResponseHandler)
}
function save_ProductionStageSetupAPI_ResponseHandler(data, textStatus) {
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
                bind_ProductionStageSetupAPI_Response(responseJSON);
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
function bind_ProductionStageSetupAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Production Stage Setup  Details saved successfully");
        get_ProductionStageSetup_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Production Stage Setup Details inactivate successfully");
        get_ProductionStageSetup_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Production Stage Setup Details Updated successfully");
        // retrieve_ProductionStageSetup_list();
        get_ProductionStageSetup_details(responseJSON.context.Header);
    }

}
