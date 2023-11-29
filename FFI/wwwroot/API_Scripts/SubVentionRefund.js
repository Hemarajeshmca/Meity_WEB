function retrieve_SubVentionRefund_details(FilterrequestObject) {
    SubventionMaster_subvention_master_retrievesubvention_refund.invoke(FilterrequestObject, retrieve_SubVentionRefundGen_DetailsAPI_ResponseHandler);
}

function retrieve_SubVentionRefundGen_DetailsAPI_ResponseHandler(data, textStatus) {
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
                generate_SubVentionRefundGen_Header(responseJSON.context.Header);
                generate_SubVentionRefundGen_Detail(responseJSON.context.Detail);
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

function save_SubVentionRefundGen_details(HeaderrequestObject) {
    SubventionMaster_subvention_master_save_subvention_refund.invoke(HeaderrequestObject, save_SubVentionRefundGenAPI_ResponseHandler)
}

function save_SubVentionRefundGenAPI_ResponseHandler(data, textStatus) {
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
                bind_SubVentionRefundGenAPI_Response(responseJSON);
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

function bind_SubVentionRefundGenAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("SubVention Refund successfully");
        get_SubVentionRefundGenk_details();
    }
    else if (mode == "D") {
        kendoAlert("SubVention Refund inactivate successfully");
        get_SubVentionRefundGen_details();
    }
    else {
        kendoAlert("SubVention Refund saved successfully");
        get_SubVentionRefundGen_details();
    }

}
