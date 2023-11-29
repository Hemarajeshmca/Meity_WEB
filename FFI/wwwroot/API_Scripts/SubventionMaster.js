function retrieve_SubventionMaster_list(FilterrequestObject) {
    SubventionMaster_subvention_master_retrieve_subvention_List.invoke(FilterrequestObject, retrieve_SubventionMaster_listAPI_ResponseHandler);
}
function retrieve_SubventionMaster_listAPI_ResponseHandler(data, textStatus) {
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
                generate_SubventionMaster_list(responseJSON.context.subventiondtl);
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
function retrieve_SubventionMaster_details(HeaderrequestObject) {
    SubventionMaster_subvention_master_retrieveSubventionMaster.invoke(HeaderrequestObject, retrieve_SubventionMasterscreenAPI_ResponseHandler);
}
function retrieve_SubventionMasterscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_SubventionMaster_header(responseJSON.context.Header)
                generate_SubventionMaster_Detail(responseJSON.context.Detail);
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
function retrieve_SubventionMaster_loantype(HeaderrequestObject) {
    SubventionMaster_subvention_master_get_subvention_loantype.invoke(HeaderrequestObject, retrieve_SubventionloantypescreenAPI_ResponseHandler);
}
function retrieve_SubventionloantypescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Subventionloantype_header(responseJSON.context.Header)
                generate_SubventionMaster_Detail(responseJSON.context.Detail);
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

function save_SubventionMaster_details(HeaderrequestObject) {
    SubventionMaster_subvention_master_save_maintain_subvention.invoke(HeaderrequestObject, save_SubventionMasterAPI_ResponseHandler)
}
function save_SubventionMasterAPI_ResponseHandler(data, textStatus) {
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
                bind_SubventionMasterAPI_Response(responseJSON);
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
function bind_SubventionMasterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Subvention Master Details saved successfully");
        //get_AggregatorOrgs_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Subvention Master inactivate successfully");
        //get_AggregatorOrgs_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Subvention Master Details Updated successfully");       
        //get_AggregatorOrgs_details(responseJSON.context.Header);
    }

}