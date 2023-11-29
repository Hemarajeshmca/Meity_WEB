function retrieve_FlRecoveryInstalmentDue_details(HeaderrequestObject) {
    FLRecovery_Of_Instalments_FLRecoveryOfInstalments_retrieveFLRecoveryInstalDue.invoke(HeaderrequestObject, retrieve_FlRecoveryInstalmentscreenAPI_ResponseHandler);
}

function retrieve_FlRecoveryInstalmentscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FlRecoveryInstalment_ChequeNAch(responseJSON.context.Detail)
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
function retrieve_FlRecoveryInstalmentPDC_details(HeaderrequestObject) {
    FLRecovery_Of_Instalments_FLRecoveryOfInstalments_retrieveFLRecoveryPDC.invoke(HeaderrequestObject, retrieve_FlRecoveryInstalmentPDCscreenAPI_ResponseHandler);
}

function retrieve_FlRecoveryInstalmentPDCscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FlRecoveryInstalment_PDC(responseJSON.context.Detail)
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
function retrieve_FlRecoveryInstalmentNACH_details(HeaderrequestObject) {
    FLRecovery_Of_Instalments_FLRecoveryOfInstalments_retrieveFLRecoveryNACH.invoke(HeaderrequestObject, retrieve_FlRecoveryInstalmentNACHscreenAPI_ResponseHandler);
}

function retrieve_FlRecoveryInstalmentNACHscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FlRecoveryInstalment_NACH(responseJSON.context.Detail)
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
function retrieve_FlRecoveryInstalmentBOUNCE_details(HeaderrequestObject) {
    FLRecovery_Of_Instalments_FLRecoveryOfInstalments_retrieveFLRecoveryBounce.invoke(HeaderrequestObject, retrieve_FlRecoveryInstalmentBOUNCEscreenAPI_ResponseHandler);
}

function retrieve_FlRecoveryInstalmentBOUNCEscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_FlRecoveryInstalment_BOUNCE(responseJSON.context.Detail)
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