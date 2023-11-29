function retrieve_DocNumberactivity_list(FilterrequestObject) {
    DocumentNumber_DocNumber_retrieveDocumentNumberList.invoke( FilterrequestObject, retrieve_DocNumberactivity_listAPI_ResponseHandler);
}
function retrieve_DocNumberactivity_listAPI_ResponseHandler(data, textStatus) {
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
                generate_DocNumberactivity_list(responseJSON.context.List);
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
function retrieve__DocNumberactivity_details(HeaderrequestObject) {
    DocumentNumber_DocNumber_retrieveDocumentNumber.invoke( HeaderrequestObject, retrieve_DocNumberActivityscreenAPI_ResponseHandler);
}
function retrieve_DocNumberActivityscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_DocNumberActivity_header(responseJSON.context.Header)
                generate_DocNumberActivity_detail(responseJSON.context.Detail);
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

function save_DocNumberActivity_details(HeaderrequestObject) {
    DocumentNumber_DocNumber_saveDocumentNumber.invoke( HeaderrequestObject, save_DocNumberActivityAPI_ResponseHandler)
}
function save_DocNumberActivityAPI_ResponseHandler(data, textStatus) {
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
                bind_DocNumberActivityAPI_Response(responseJSON);
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
function bind_DocNumberActivityAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Document Numbering Details saved successfully");
        get_DocNumberActivity_details(responseJSON.context.Header.docnum_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Document Numbering Details inactivate successfully");
        get_DocNumbercActivity_details(responseJSON.context.Header.docnum_rowid);
    }
    else {
        kendoAlert("Document Numbering Details saved successfully");
        get_DocNumberActivity_details(responseJSON.context.Header.docnum_rowid);
    }

}
