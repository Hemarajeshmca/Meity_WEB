function retrieve_StockAdjustment_list(FilterrequestObject) {
    StockAdjustment_stockAdjustment_master_getStockAdjustmentList.invoke(FilterrequestObject, retrieve_StockAdjustment_listAPI_ResponseHandler);
}

function retrieve_StockAdjustment_listAPI_ResponseHandler(data, textStatus) {
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
                generate_StockAdjustment_list(responseJSON.context.List);
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

function retrieve_StockAdjustment_details(HeaderrequestObject) {
    StockAdjustment_stockAdjustment_master_getStockAdjustment.invoke(HeaderrequestObject, retrieve_StockAdjustmentscreenAPI_ResponseHandler);
}

function retrieve_StockAdjustmentscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_StockAdjustment_header(responseJSON.context.Header);
                generate_StockAdjustment_detail(responseJSON.context.Detail);
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

function save_StockAdjustment_details(HeaderrequestObject) {
    StockAdjustment_stockAdjustment_master_saveStockAdjustment.invoke(HeaderrequestObject, save_StockAdjustmentAPI_ResponseHandler)
}

function save_StockAdjustmentAPI_ResponseHandler(data, textStatus) {
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
                bind_StockAdjustmentAPI_Response(responseJSON);
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

function bind_StockAdjustmentAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("StockAdjustment Details saved successfully");
        get_StockAdjustment_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("StockAdjustment Details inactivate successfully");
        get_StockAdjustment_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("StockAdjustment Details saved successfully");
        get_StockAdjustment_details(responseJSON.context.Header);
    }

}




