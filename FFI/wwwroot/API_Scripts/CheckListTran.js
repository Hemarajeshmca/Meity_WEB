function retrieve_CheckList_Tran_details(HeaderrequestObject) {
    CheckList_Check_List_retrieveChecklistTran.invoke(HeaderrequestObject, retrieve_CheckList_TranscreenAPI_ResponseHandler);
}

function retrieve_CheckList_TranscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Chek_Tran_List_element(responseJSON.context.Element)
                generate_Chek_Tran_List_history(responseJSON.context.History);
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

function retrieve_CheckList_Tran_History_details(HeaderrequestObject) {
    CheckList_Check_List_retrieveChecklistTranHistory.invoke(HeaderrequestObject, retrieve_CheckList_Tran_HistoryscreenAPI_ResponseHandler);
}

function retrieve_CheckList_Tran_HistoryscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Chek_Tran_History_List_element(responseJSON.context.Chklist_Element);
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

function save_CheckList_Tran_details(HeaderrequestObject) {
    CheckList_Check_List_saveChecklistTran.invoke(HeaderrequestObject, save_CheckList_TranAPI_ResponseHandler);
}

function save_CheckList_TranAPI_ResponseHandler(data, textStatus) {
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
                bind_CheckList_TranAPI_Response(responseJSON);
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

function bind_CheckList_TranAPI_Response(responseJSON) {
    debugger;
    var mode = $("#txtMode").val();
    if (mode == "I") {
        setlocalStorage('chklst', 'save');
        kendoAlert("CheckList saved successfully");
        get_CheckList_Tran_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        setlocalStorage('chklst', 'ignore');
        kendoAlert("CheckList inactivate successfully");
        get_CheckList_Tran_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("CheckList saved successfully");
        setlocalStorage('chklst', 'save');
        get_CheckList_Tran_details(responseJSON.context.Header);
    }

}