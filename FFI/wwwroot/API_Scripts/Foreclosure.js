function retrieve_Foreclosure_list(FilterrequestObject) {
    FLFore_Closure_FLForeClosure_retrieveFLFore_ClosureList.invoke(FilterrequestObject, retrieve_Foreclosure_listAPI_ResponseHandler);
}

function retrieve_Foreclosure_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Foreclosure_list(responseJSON.context.Detail);
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

function retrieve_Foreclosure_details(HeaderrequestObject) {
    FLFore_Closure_FLForeClosure_retrieveFLFore_Closure.invoke(HeaderrequestObject, retrieve_ForeclosurescreenAPI_ResponseHandler);
}

function retrieve_ForeclosurescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Foreclosure_header(responseJSON.context.Header);
                generate_Foreclosure_Loandetail(responseJSON.context.Detail);
                generate_Foreclosure_detail(responseJSON.context.ForeClosureDtl);
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
function save_Foreclosure_details(HeaderrequestObject) {
    FLFore_Closure_FLForeClosure_saveFLFore_Closure.invoke(HeaderrequestObject, save_ForeclosureAPI_ResponseHandler)
}

function save_ForeclosureAPI_ResponseHandler(data, textStatus) {
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
                bind_ForeclosureAPI_Response(responseJSON);
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

function bind_ForeclosureAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Foreclosure Details saved successfully");
        get_Foreclosure_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Foreclosure Details inactivate successfully");
        get_Foreclosure_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Foreclosure Details saved successfully");
        get_Foreclosure_details(responseJSON.context.Header);
    }

}




