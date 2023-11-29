function retrieve_farmer_registration_list(FilterrequestObject) {
    FarmerRegistration_Farmer_Registration_retrieveFarmerRegList.invoke(FilterrequestObject,retrieve_farmer_registration_listAPI_ResponseHandler);
}
function retrieve_farmer_registration_listAPI_ResponseHandler(data, textStatus) {
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
                generate_farmer_registration_list(responseJSON);
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
function retrieve_farmer_registration_details(HeaderrequestObject) {
    FarmerRegistration_Farmer_Registration_retrieveFarmerReg.invoke(HeaderrequestObject, retrieve_farmer_registrationscreenAPI_ResponseHandler);
}
function retrieve_farmer_registrationscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_farmer_registration_header(responseJSON.context.Header) 
                generate_farmer_registration_Kyc(responseJSON.context.KYC);
                generate_farmer_registration_Bank(responseJSON.context.Bank);
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

function save_farmer_registration_details(HeaderrequestObject) {
    $('#reviewEd').prop('disabled', true);
    FarmerRegistration_Farmer_Registration_saveFarmerReg.invoke(HeaderrequestObject,save_farmer_registrationAPI_ResponseHandler)
}
function save_farmer_registrationAPI_ResponseHandler(data, textStatus) {
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
                bind_farmer_registrationAPI_Response(responseJSON);
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

function bind_farmer_registrationAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Farmer registered successfully");
        get_farmer_registration_details(responseJSON.context.Header.farmer_rowid, responseJSON.context.Header.farmer_code, responseJSON.context.Header.version_no);
    }
    else if (mode == "D") {
        kendoAlert("Farmer Registration  Details Inactivate successfully");
        get_farmer_registration_details(responseJSON.context.Header.farmer_rowid, responseJSON.context.Header.farmer_code, responseJSON.context.Header.version_no);
    }
    else if (mode == "J") {
        kendoAlert("Application Rejected");
        get_farmer_registration_details(responseJSON.context.Header.farmer_rowid, responseJSON.context.Header.farmer_code, responseJSON.context.Header.version_no);
    }
    else if (mode == "A") {
        kendoAlert("Application Approved");
        get_farmer_registration_details(responseJSON.context.Header.farmer_rowid, responseJSON.context.Header.farmer_code, responseJSON.context.Header.version_no);
    }
     else if (mode == "U") {
        kendoAlert("Farmer Details Updated Successfully");
        get_farmer_registration_details(responseJSON.context.Header.farmer_rowid, responseJSON.context.Header.farmer_code, responseJSON.context.Header.version_no);
        $('#divEdit #btnSaveEd').prop('disabled', true);
    }
    else {
        kendoAlert("Submitted for review");
        get_farmer_registration_details(responseJSON.context.Header.farmer_rowid, responseJSON.context.Header.farmer_code, responseJSON.context.Header.version_no);
        $('#divEdit #reviewEd').prop('disabled', true);
}
       

}