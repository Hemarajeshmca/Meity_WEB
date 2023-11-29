function retrieve_AggregatorOrgs_list(FilterrequestObject) {
    AggregatorOrgs_AggregatorOrg_retrieveAggregatorOrgnList.invoke(FilterrequestObject, retrieve_AggregatorOrgs_listAPI_ResponseHandler);
}
function retrieve_AggregatorOrgs_listAPI_ResponseHandler(data, textStatus) {
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
                generate_AggregatorOrgs_list(responseJSON.context.List);
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
function retrieve_AggregatorOrgs_details(HeaderrequestObject) {
    AggregatorOrgs_AggregatorOrg_retrieveAggregatorOrgn.invoke(HeaderrequestObject, retrieve_AggregatorOrgsscreenAPI_ResponseHandler);
}
function retrieve_AggregatorOrgsscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_AggregatorOrgs_header(responseJSON.context.Header)
                generate_AggregatorOrgs_Address(responseJSON.context.Address);
                generate_AggregatorOrgs_Bank(responseJSON.context.Bank);
                generate_AggregatorOrgs_User(responseJSON.context.User);
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

function save_AggregatorOrgs_details(HeaderrequestObject) {
    AggregatorOrgs_AggregatorOrg_saveAggregatorOrgn.invoke(HeaderrequestObject,save_AggregatorOrgsAPI_ResponseHandler)
}
function save_AggregatorOrgsAPI_ResponseHandler(data, textStatus) {
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
                bind_AggregatorOrgsAPI_Response(responseJSON);
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
function bind_AggregatorOrgsAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Aggregator  Details saved successfully");
        get_AggregatorOrgs_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Aggregator Details inactivate successfully");
        get_AggregatorOrgs_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Aggregator Details Updated successfully");
        // retrieve_AggregatorOrgs_list();
        get_AggregatorOrgs_details(responseJSON.context.Header);
    }

}
