function retrieve_billentry_list(FilterrequestObject) {
    BillEntry_Bill_Entry_retretrieveBillEntryList.invoke(FilterrequestObject, retrieve_billentry_listAPI_ResponseHandler);
}

function retrieve_billentry_listAPI_ResponseHandler(data, textStatus) {
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
                generate_billentry_list(responseJSON.context.List);
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

function retrieve_billentry_details(HeaderrequestObject) {
    BillEntry_Bill_Entry_retrieveBillEntry.invoke(HeaderrequestObject, retrieve_billentryscreenAPI_ResponseHandler);
}


function retrieve_billentryscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_billentry_header(responseJSON.context.Header);
                generate_billentry_TransferredMilk(responseJSON.context.TransferredMilk);
                generate_billentry_RetailedMilk(responseJSON.context.RetailedMilk);
                generate_billentry_Summary(responseJSON.context.Summary);
                generate_billentry_RetailSales(responseJSON.context.RetailSales);
                generate_billentry_BillDtl(responseJSON.context.BillDtl);
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

function retrieve_billentry_session_details(HeaderrequestObject) {
    BillEntry_Bill_Entry_retrieveBillSessionDtl.invoke(HeaderrequestObject, retrieve_billentrySessionscreenAPI_ResponseHandler);
}

function retrieve_billentrySessionscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_billentry_SessionDtl(responseJSON.context.SessionDtl)
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


function save_billentry_details(HeaderrequestObject) {
    BillEntry_Bill_Entry_saveBillEntry.invoke(HeaderrequestObject,save_billentryAPI_ResponseHandler)
}

function save_billentryAPI_ResponseHandler(data, textStatus) {
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
                bind_billentryAPI_Response(responseJSON);
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
function bind_billentryAPI_Response(responseJSON) {

    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Bill Entry Details saved successfully");
        get_billentry_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Bill Entry  Details inactivate successfully");
        //get_billentry_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else {
        kendoAlert("Bill Entry  Details saved successfully");
        get_billentry_details(responseJSON.context.Header);
    }

}
