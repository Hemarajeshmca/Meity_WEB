function retrieve_UpdateFPOShareAlotment_details(HeaderrequestObject) {
    ShareApplication_Share_App_retrieveUpdateShareAllotment.invoke(HeaderrequestObject, retrieve_UpdateFPOAllotmentAPI_ResponseHandler);
}
function retrieve_UpdateFPOAllotmentAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        responseJSON =  data ;
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
                generate_FPOAllotmentRegister_detail(responseJSON.context.Detail);
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
function save_UpdateFPOAllotmentRegister_details(HeaderrequestObject) {
    ShareApplication_Share_App_saveUpdateShareAllotment.invoke(HeaderrequestObject,Save_UpdateFPOAllotmentRegisterAPI_ResponseHandler)
}

function Save_UpdateFPOAllotmentRegisterAPI_ResponseHandler(data, textStatus) {
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
                bind_AllotmentRegisterAPI_Response(responseJSON);
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

function bind_AllotmentRegisterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("AllotmentRegister saved successfully");
        get_updateshareallotemnt_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("AllotmentRegister inactivate successfully");
        //get_AllotmentRegister_details(responseJSON.context.Header.bank_rowid);
    }
    else {
        kendoAlert("AllotmentRegister saved successfully");
        get_updateshareallotemnt_details(responseJSON.context.Header);
    }

}