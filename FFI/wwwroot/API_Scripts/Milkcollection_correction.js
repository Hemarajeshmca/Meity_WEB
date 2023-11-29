function retrieve_milkcollection_correction_list(FilterrequestObject) {
    MilkCollectionCorrection_MilkCollection_Correction_reieveMilkCollectionCorrectionList.invoke(FilterrequestObject, retrieve_milkcollection_correction_listAPI_ResponseHandler);
}

function retrieve_milkcollection_correction_listAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        responseJSON = data;
        if (responseJSON.ApplicationException != null) {
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
                generate_milkcollection_correction_list(responseJSON.context.List);
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

function retrieve_milkcollection_correction_details(HeaderrequestObject) {
    MilkCollectionCorrection_MilkCollection_Correction_reteieveMilkCollectionCorrection.invoke(HeaderrequestObject, retrieve_milkcollection_correctionscreenAPI_ResponseHandler);
}

function retrieve_milkcollection_correctionscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_milkcollection_correction_header(responseJSON.context.Header)
                generate_milkcollection_correction_Collection(responseJSON.context.Collection);
                generate_milkcollection_correction_Transfer(responseJSON.context.Transfer);
                generate_milkcollection_correction_RetailSales(responseJSON.context.RetailSales);
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
function save_milkcollection_correction_details(HeaderrequestObject) {
    MilkCollectionCorrection_MilkCollection_Correction_saveMilkCollectionCorrection.invoke(HeaderrequestObject, save_milkcollection_correctionAPI_ResponseHandler)
}

function save_milkcollection_correctionAPI_ResponseHandler(data, textStatus) {
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
                bind_milkcollection_correctionAPI_Response(responseJSON);
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

function bind_milkcollection_correctionAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("milk receipts saved successfully");
        get_milkcollection_correction_details(responseJSON.context.Header);

    }
    else if (mode == "D") {
        kendoAlert("milk receipts inactivate successfully");
        get_milkcollection_correction_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("milk receipts saved successfully");
        get_milkcollection_correction_details(responseJSON.context.Header);
    }

}