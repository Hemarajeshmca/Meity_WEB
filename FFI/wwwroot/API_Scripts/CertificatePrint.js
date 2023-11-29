function retrieve_Certificateprint_details(HeaderrequestObject) {
    ShareApplication_Share_App_retrieveShareCertificatePrint.invoke(HeaderrequestObject, retrieve_Certificateprint_listAPI_ResponseHandler);
}
function retrieve_Certificateprint_listAPI_ResponseHandler(data, textStatus) {
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
                generate_certificate_detail(responseJSON.context.Detail);
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
function save_Certificateprint_details(HeaderrequestObject) {
    ShareApplication_Share_App_saveShareCertificatePrint.invoke(HeaderrequestObject, save_Certificateprint_ResponseHandler)
}

function save_Certificateprint_ResponseHandler(data, textStatus) {
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
                bind_CertificateprintAPI_Response(responseJSON);
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

function bind_CertificateprintAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Certificate Print details saved successfully");
         get_certificateprint_details();
    }
    else if (mode == "D") {
        kendoAlert("Certificate Print details inactivate successfully");
        //get_certificateprint_details();
    }
    else {
        kendoAlert("Certificate Print details saved successfully");
         get_certificateprint_details();
    }

}