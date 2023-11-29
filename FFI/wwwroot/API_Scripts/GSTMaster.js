function GSTMaster_GST_Master_getGSTMasterList(FilterrequestObject) {
    GST_gst_master_getGSTList.invoke(FilterrequestObject, retrieve_GSTMaster_listAPI_ResponseHandler);
}

function retrieve_GSTMaster_listAPI_ResponseHandler(data, textStatus) {
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
                generate_gst_list(responseJSON.context.List);
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

function GSTMaster_GST_Master_getGSTMaster(HeaderrequestObject) {
    GST_gst_master_getGST.invoke(HeaderrequestObject, retrieve_GSTMasterscreenAPI_ResponseHandler);
}

function retrieve_GSTMasterscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Gst_header(responseJSON.context.Header);
                generate_Gst_detail(responseJSON.context.Detail);
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

function GSTMaster_Master_saveGSTMaster(HeaderrequestObject) {
    GSTMaster_GST_Master_saveGSTMaster.invoke(HeaderrequestObject, save_GSTMasterAPI_ResponseHandler)
}

function save_GSTMasterAPI_ResponseHandler(data, textStatus) {
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
                bind_GSTMasterAPI_Response(responseJSON);
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

function bind_GSTMasterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("GST Details saved successfully");
        get_GST_details(responseJSON.context.Header.taxrate_rowid);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("GST Details inactivate successfully");
        get_GST_details(responseJSON.context.Header.taxrate_rowid);
    }
    else {
        kendoAlert("GST Details saved successfully");
        get_GST_details(responseJSON.context.Header.taxrate_rowid);
    }

}




