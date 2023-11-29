function retrieve_DividendStructure_list(FilterrequestObject) {
    DividendManagement_Dividend_Management_retrieveDividendStructureList.invoke(FilterrequestObject, retrieve_DividendStructure_listAPI_ResponseHandler);
}

function retrieve_DividendStructure_listAPI_ResponseHandler(data, textStatus) {
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
                generate_DividendStructure_list(responseJSON.context.List);
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

function retrieve_DividendStructure_details(HeaderrequestObject) {
    DividendManagement_Dividend_Management_retrieveDividendStructure.invoke(HeaderrequestObject, retrieve_DividendStructurescreenAPI_ResponseHandler);
}

function retrieve_DividendStructurescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_DividendStructure_header(responseJSON.context.Header)
                //generate_DividendStructure_detail(responseJSON.context.BankDtl);
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
function save_DividendStructure_details(HeaderrequestObject) {
    DividendManagement_Dividend_Management_saveDividendStructure.invoke(HeaderrequestObject, save_DividendStructureAPI_ResponseHandler)
}

function save_DividendStructureAPI_ResponseHandler(data, textStatus) {
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
                bind_DividendStructureAPI_Response(responseJSON);
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

function bind_DividendStructureAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Dividend Structure saved successfully");
        get_div_struct_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Dividend Structure inactivate successfully");
        get_div_struct_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Dividend Structure saved successfully");
        get_div_struct_details(responseJSON.context.Header);
    }

}




