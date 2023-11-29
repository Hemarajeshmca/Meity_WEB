function retrieve_PAWHSAggregatorOrgs_list(FilterrequestObject) {
    AggregatorRegistration_AggregatorReg_PAWHS_getAggregatorRegList.invoke(FilterrequestObject, retrieve_PAWHSAggregatorOrgs_listAPI_ResponseHandler);
}
function retrieve_PAWHSAggregatorOrgs_listAPI_ResponseHandler(data, textStatus) {
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
                generate_PAWHSAggregatorOrgs_list(responseJSON.context.List);
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
function retrieve_PAWHSAggregatorOrgs_details(HeaderrequestObject) {
    AggregatorRegistration_AggregatorReg_PAWHS_getAggregatorReg.invoke(HeaderrequestObject, retrieve_PAWHSAggregatorOrgsscreenAPI_ResponseHandler);
}
function retrieve_PAWHSAggregatorOrgsscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_PAWHSAggregatorOrgs_header(responseJSON.context.Header)
                generate_PAWHSAggregatorOrgs_Address(responseJSON.context.Address);
                generate_PAWHSAggregatorOrgs_Bank(responseJSON.context.Bank);
                generate_PAWHSAggregatorOrgs_FIG(responseJSON.context.FIG);
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
function retrieve_ESPMember_details(HeaderrequestObject) {
    AggregatorRegistration_AggregatorReg_PAWHS_getMemberReg.invoke(HeaderrequestObject, retrieve_ESPMemberAPI_ResponseHandler);
}

function retrieve_ESPMemberAPI_ResponseHandler(data, textStatus) {
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
                generate_Aggmember_header(responseJSON.context.Header);             
                generate_PAWHSAggregatorOrgs_Address(responseJSON.context.Address);
                generate_PAWHSAggregatorOrgs_Bank(responseJSON.context.Bank);
                generate_PAWHSAggregatorOrgs_FIG(responseJSON.context.FIG);

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
function save_PAWHSAggregatorOrgs_details(HeaderrequestObject) {
    AggregatorRegistration_AggregatorReg_PAWHS_saveAggregatorReg.invoke(HeaderrequestObject, save_PAWHSAggregatorOrgsAPI_ResponseHandler)
}
function save_PAWHSAggregatorOrgsAPI_ResponseHandler(data, textStatus) {
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
                bind_PAWHSAggregatorOrgsAPI_Response(responseJSON);
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
function bind_PAWHSAggregatorOrgsAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Aggregator  Details saved successfully");
        get_PAWHSAggregatorOrgs_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Aggregator Details inactivate successfully");
        get_PAWHSAggregatorOrgs_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Aggregator Details Updated successfully");
        // retrieve_PAWHSAggregatorOrgs_list();
        get_PAWHSAggregatorOrgs_details(responseJSON.context.Header);
    }

}
