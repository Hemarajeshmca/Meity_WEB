function retrieve_productiontransaction_list(FilterrequestObject) {
    ProductionTransaction_Production_Transaction_PAWHS_getProductionTransactionList.invoke(FilterrequestObject, retrieve_productiontransaction_listAPI_ResponseHandler);
}
function retrieve_productiontransaction_listAPI_ResponseHandler(data, textStatus) {
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
                generate_productiontransaction_list(responseJSON.context.List);
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
function retrieve_productrans_details(HeaderrequestObject) {
    ProductionTransaction_Production_Transaction_PAWHS_getProductionTransaction.invoke(HeaderrequestObject, retrieve_productransAPI_ResponseHandler);
}
function retrieve_productransAPI_ResponseHandler(data, textStatus) {
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
                generate_productrans_header(responseJSON.context.Header)
                generate_productrans_list(responseJSON.context.List)
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
function retrieve_Stages(HeaderrequestObject) {
    StageItemDefinition_StageItem_Definition_PAWHS_getProductionStage.invoke(HeaderrequestObject, retrieve_Stagees_ResponseHandler);
}

function retrieve_Stagees_ResponseHandler(data, textStatus) {
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
                GenerateStageHeader(responseJSON.context);
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
function retrieve_StageItemsForEdit(HeaderrequestObject) {
    StageItemDefinition_StageItem_Definition_PAWHS_getStageItemDefinition.invoke(HeaderrequestObject, retrieve_StageItemEditScreen_ResponseHandler);
}

function retrieve_StageItemEditScreen_ResponseHandler(data, textStatus) {
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
                generate_StageItemDefinition(responseJSON.context.Stage);
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
function save_productiontransaction_details(HeaderrequestObject) {
    ProductionTransaction_Production_Transaction_PAWHS_saveProductionTransaction.invoke(HeaderrequestObject, save_productiontransactionAPI_ResponseHandler)
}
function save_productiontransactionAPI_ResponseHandler(data, textStatus) {
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
                bind_productiontransactionAPI_Response(responseJSON);
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
function bind_productiontransactionAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Production Transaction saved successfully");
        get_productiontransaction_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Production Transaction inactivate successfully");
        get_productiontransaction_details(responseJSON.context.Header);

    }
    else {
        kendoAlert("Production Transaction Updated successfully");
        // retrieve_productiontransaction_list();
        get_productiontransaction_details(responseJSON.context.Header);
    }

}
