function retrieve_ItemMaster_list(FilterrequestObject) {
    ItemMaster_Item_Master_PAWHS_getItemMasterList.invoke(FilterrequestObject, retrieve_ItemMaster_listAPI_ResponseHandler);
}
function retrieve_ItemMaster_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ItemMaster_list(responseJSON.context.List);
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
function retrieve_ItemMaster_details(HeaderrequestObject) {
    ItemMaster_Item_Master_PAWHS_getItemMaster.invoke(HeaderrequestObject, retrieve_ItemMasterAPI_ResponseHandler);
}
function retrieve_ItemMasterAPI_ResponseHandler(data, textStatus) {
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
                generate_ItemMaster_header(responseJSON.context.Header)
                generate_ItemMaster_list(responseJSON.context.Detail);
                return true;
            }
            catch (e) {
                // retrieve_SerReqAddsdetail_details();
                javascript_log4j_root(arguments.callee.name, e);

            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function save_ItemMaster_details(HeaderrequestObject) {
    ItemMaster_Item_Master_PAWHS_saveItemMaster.invoke(HeaderrequestObject, save_ItemMasterAPI_ResponseHandler)
}

function save_ItemMasterAPI_ResponseHandler(data, textStatus) {
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
                bind_ItemMasterAPI_Response(responseJSON);
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

function bind_ItemMasterAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Item Master saved successfully");
        get_ItemMaster_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Item Master inactivate successfully");
        get_ItemMaster_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Item Master saved successfully");
        get_ItemMaster_details(responseJSON.context.Header);
    }

}