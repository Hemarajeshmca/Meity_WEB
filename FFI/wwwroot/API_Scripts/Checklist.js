function retrieve_CheckList_details(HeaderrequestObject) {
    CheckList_Check_List_retrieveChecklist.invoke(HeaderrequestObject, retrieve_CheckListscreenAPI_ResponseHandler);
}

function retrieve_CheckListscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_Chek_List_header(responseJSON.context.Header)
                generate_Chek_List_element(responseJSON.context.Element);
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
function save_CheckList_details(HeaderrequestObject) {
    CheckList_Check_List_saveChecklist.invoke(HeaderrequestObject, save_CheckListAPI_ResponseHandler);
}

function save_CheckListAPI_ResponseHandler(data, textStatus) {
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
                bind_CheckListAPI_Response(responseJSON);
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

function bind_CheckListAPI_Response(responseJSON) {
    debugger;
    alert("checklist")
    var mode = $("#txtMode").val();
    if (mode == "I") {
        setlocalStorage('chklst', 'save');
        kendoAlert("CheckList saved successfully");
        get_CheckList_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("CheckList inactivate successfully");
        setlocalStorage('chklst', 'ignore');
        get_CheckList_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("CheckList saved successfully");
        setlocalStorage('chklst', 'save');
        get_CheckList_details(responseJSON.context.Header);
    }

}