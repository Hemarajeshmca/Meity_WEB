function retrieve_milkreceipts_list(FilterrequestObject) {
    MilkReciptsCP_milk_receipt_retrievemilkreceiptList.invoke(FilterrequestObject, retrieve_milkreceipts_listAPI_ResponseHandler);
}

function retrieve_milkreceipts_listAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
            responseJSON = data;
        if (responseJSON.ApplicationException != null) {
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
                generate_milkreceipts_list(responseJSON.context.Recipt);
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

function retrieve_milkreceipts_details(HeaderrequestObject) {
    MilkReciptsCP_milk_receipt_retrievemilkreceipt.invoke(HeaderrequestObject, retrieve_milkreceiptsscreenAPI_ResponseHandler);
}

function retrieve_milkreceiptsscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_milkreceipts_header(responseJSON.context.Header)
                generate_milkreceipts_detail(responseJSON.context.Detail);
                generate_milkreceipts_summary(responseJSON.context.summary);
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
function retrieve_milkreceipts_default(HeaderrequestObject) {
    MilkReciptsCP_milk_receipt_defaultmilk_receiptfetch.invoke(HeaderrequestObject, retrieve_milkreceiptscreenAPI_ResponseHandler);
}

function retrieve_milkreceiptscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_milkreceipt_header(responseJSON.context.Header)
                generate_milkreceipt_detail(responseJSON.context.Detail);
                generate_milkreceipt_summary(responseJSON.context.summary);
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
function save_milkreceipts_details(HeaderrequestObject) {
    MilkReciptsCP_milk_receipt_savemilkreceipt.invoke(HeaderrequestObject, save_milkreceiptsAPI_ResponseHandler)
}

function save_milkreceiptsAPI_ResponseHandler(data, textStatus) {
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
                bind_milkreceiptsAPI_Response(responseJSON);
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

function bind_milkreceiptsAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("milk receipts saved successfully");
        get_reccipts_details(responseJSON.context.Header);
       
    }
    else if (mode == "D") {
        kendoAlert("milk receipts inactivate successfully");
        get_reccipts_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("milk receipts saved successfully");
        get_reccipts_details(responseJSON.context.Header);
    }

}