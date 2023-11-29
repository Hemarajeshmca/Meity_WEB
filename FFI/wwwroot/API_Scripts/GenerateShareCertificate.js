
function retrieve_GenerateShareCertificate_list(FilterrequestObject) {
    ShareApplication_Share_App_retrieveShareRegisterList.invoke(FilterrequestObject, retrieve_GenerateShareCertificate_listAPI_ResponseHandler);
}

function retrieve_GenerateShareCertificate_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ShareCertificate_list(responseJSON.context.List);
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

function retrieve_GenerateShareCertificate_details(HeaderrequestObject) {
    ShareApplication_Share_App_retrieveGenerateShareCertificate.invoke(HeaderrequestObject, retrieve_GenerateShareCertificatescreenAPI_ResponseHandler);
}

function retrieve_GenerateShareCertificatescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_GenerateShareCertificate_header(responseJSON.context.Header)
                generate_GenerateShareCertificate_detail(responseJSON.context.Detail);
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
function save_GenerateShare_details(HeaderrequestObject) {
    ShareApplication_Share_App_saveGenerateShareCertificate.invoke(HeaderrequestObject, save_GenerateShareCertificateAPI_ResponseHandler)
}

function save_GenerateShareCertificateAPI_ResponseHandler(data, textStatus) {
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
                bind_GenerateShareCertificateAPI_Response(responseJSON);
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

function bind_GenerateShareCertificateAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Generate Share Certificate saved successfully");
        get_GenerateShareCertificate_details(responseJSON.context.Header);
        //get_AllotmentRegister_details(responseJSON.context.Header.bank_rowid);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Generate Share Certificate inactivate successfully");
        //get_AllotmentRegister_details(responseJSON.context.Header.bank_rowid);
    }
    else {
        kendoAlert("Generate Share Certificate Updated successfully");
         get_GenerateShareCertificate_details(responseJSON.context.Header);
       // get_GenerateShareCertificate_details(responseJSON.context.Detail);
        //get_AllotmentRegister_details(responseJSON.context.Header.register_rowid);
        //get_AllotmentRegister_details(responseJSON.context.Header.bank_rowid);
    }

}




