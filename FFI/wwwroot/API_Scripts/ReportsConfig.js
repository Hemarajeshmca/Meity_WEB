function retrieve_ReportsConfig_list(FilterrequestObject) {
    ReportsConfig_ReportConfig_retrieveReportsConfigList.invoke( FilterrequestObject, retrieve_ReportsConfig_listAPI_ResponseHandler);
}

function retrieve_ReportsConfig_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ReportsConfig_list(responseJSON.context.List);
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

function retrieve_ReportConfig_details(HeaderrequestObject) {
    ReportsConfig_ReportConfig_retrieveReportsConfig.invoke( HeaderrequestObject, retrieve_ReportsConfigscreenAPI_ResponseHandler);
}

function retrieve_ReportsConfigscreenAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        ///   responseJSON = jQuery.parseJSON(data);
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
                generate_ReportConfig_header(responseJSON.context.Header)
                generate_ReportConfig_detail(responseJSON.context.Param_detail);
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
function save_ReportConfig_details(HeaderrequestObject) {
    ReportsConfig_ReportConfig_saveReportsConfig.invoke( HeaderrequestObject, save__ReportConfigAPI_ResponseHandler)
}

function save__ReportConfigAPI_ResponseHandler(data, textStatus) {
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
                bind_ReportConfigAPI_Response(responseJSON);
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

function bind_ReportConfigAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Report Configuration  Details saved successfully");
        // get_ReportsForm_details(responseJSON.context.Header); 
    }
    else if (mode == "D") {
        kendoAlert("Report Configuration  Details inactivate successfully");
        get_ReportsForm_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Report Configuration Details Updated Successfully");
        get_ReportsForm_details(responseJSON.context.Header);
    }

}




