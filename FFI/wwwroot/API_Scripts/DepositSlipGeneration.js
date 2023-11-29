function retrieve_DepositSlipGeneration_details(HeaderrequestObject) {
    FLDeposit_Slip_Generation_FLDepositSlipGeneration_retrieveFLDeposit_Slip_Generation.invoke(HeaderrequestObject, retrieve_DepositSlipGenerationscreenAPI_ResponseHandler);
}

function retrieve_DepositSlipGenerationscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_DepositSlipGeneration_Header(responseJSON.context.Header);
                generate_DepositSlipGeneration_Detail(responseJSON.context.Detail);
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


function save_DepositSlipGeneration_details(HeaderrequestObject) {
    FLDeposit_Slip_Generation_FLDepositSlipGeneration_saveFLDeposit_Slip_Generation.invoke(HeaderrequestObject, save_DepositSlipGenerationAPI_ResponseHandler)
}

function save_DepositSlipGenerationAPI_ResponseHandler(data, textStatus) {
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
                bind_DepositSlipGenerationAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                javascript_log4j_root(arguments.callee.name, e);

            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
        clear_val();
    }
}

function bind_DepositSlipGenerationAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Deposit Slip Generation Details saved successfully");
        //get_Capital_details();
        //clear_val();
    }
    else {
        kendoAlert("Deposit Slip Generation Details saved successfully");
        //get_Capital_details();        
        //clear_val();
    }

}
