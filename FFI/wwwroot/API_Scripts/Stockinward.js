function retrieve_Stockinward_list(FilterrequestObject) {
    StockInward_stockInward_master_getStockInwardList.invoke(FilterrequestObject, retrieve_Stockinward_listAPI_ResponseHandler);
}

function retrieve_Stockinward_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Stockinward_list(responseJSON.context.List);
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

function retrieve_Stockinward_details(HeaderrequestObject) {
    StockInward_stockInward_master_getStockInward.invoke(HeaderrequestObject, retrieve_StockinwardscreenAPI_ResponseHandler);
}

function retrieve_StockinwardscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Stockinward_header(responseJSON.context.Header);
                generate_Stockinward_detail(responseJSON.context.Detail);
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

function save_Stockinward_details(HeaderrequestObject) {
    StockInward_stockInward_master_saveStockInward.invoke(HeaderrequestObject, save_StockinwardAPI_ResponseHandler)
}

function save_StockinwardAPI_ResponseHandler(data, textStatus) {
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
                bind_StockinwardAPI_Response(responseJSON);
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

function bind_StockinwardAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Stockinward Details saved successfully");
        get_Stockinward_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Stockinward Details inactivate successfully");
        //get_Stockinward_details(responseJSON.context.Header.);
    }
    else {
        kendoAlert("Stockinward Details Updated successfully");
        get_Stockinward_details(responseJSON.context.Header);
    }

}




