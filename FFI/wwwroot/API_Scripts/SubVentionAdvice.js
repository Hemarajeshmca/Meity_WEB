function retrieve_SubVentionAdvice_details(FilterrequestObject) {
    SubventionMaster_subvention_master_retrieveSubvention_advice.invoke(FilterrequestObject, retrieve_SubVentionAdviceGen_DetailsAPI_ResponseHandler);
}

function retrieve_SubVentionAdviceGen_DetailsAPI_ResponseHandler(data, textStatus) {
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
                generate_SubVentionAdviceGen_Header(responseJSON.context.Header);
                generate_SubVentionAdviceGen_Detail(responseJSON.context.Detail);
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

function save_SubVentionAdviceGen_details(HeaderrequestObject) {
    SubventionMaster_subvention_master_save_subvention_advice.invoke(HeaderrequestObject, save_SubVentionAdviceGenAPI_ResponseHandler)
}

function save_SubVentionAdviceGenAPI_ResponseHandler(data, textStatus) {
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
                bind_SubVentionAdviceGenAPI_Response(responseJSON);
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

function bind_SubVentionAdviceGenAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("SubVention Advice generated successfully");
        get_SubVentionAdviceGenk_details();
    }
    else if (mode == "D") {
        kendoAlert("SubVention Advice inactivate successfully");
        get_SubVentionAdviceGen_details();
    }
    else {
        kendoAlert("SubVention Advice saved successfully");
        get_SubVentionAdviceGen_details();
    }

}
