function retrieve_WarehouseMaster_list(FilterrequestObject) {
    WarehouseRegistration_Warehouse_Registration_PAWHS_getWarehouseRegList.invoke(FilterrequestObject, retrieve_Warehouse_listAPI_ResponseHandler);
}

function retrieve_Warehouse_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Warehouse_list(responseJSON.context.List);
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

function retrieve_WHS_masterScreen(HeaderrequestObject) {
    WarehouseRegistration_Warehouse_Registration_PAWHS_getWarehouseReg.invoke(HeaderrequestObject, retrieve_WarehouseMasterScreen_ResponseHandler);
}

function retrieve_WarehouseMasterScreen_ResponseHandler(data, textStatus) {
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
                generate_WarehouseMaster_header(responseJSON.context.Header);
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

function SaveWarehouseMasterList(HeaderrequestObject) {
    WarehouseRegistration_Warehouse_Registration_PAWHS_saveWarehouseReg.invoke(HeaderrequestObject, save_WarehouseMaster_ResponseHandler)
}

function save_WarehouseMaster_ResponseHandler(data, textStatus) {
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
                bind_WarehouseMaster_Response(responseJSON);
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

function bind_WarehouseMaster_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Warehouse Master Saved Successfully");
        Get_WarehouseMaster_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "U") {
        kendoAlert("Warehouse Master Updated Successfully");
        Get_WarehouseMaster_details(responseJSON.context.Header);
    }
}




