function retrieve_icdgen_list(FilterrequestObject) {
    InputCenterDemandGeneration_ICDGen_retrieveICDGENList.invoke(FilterrequestObject, retrieve_icdgen_listAPI_ResponseHandler);
}

function retrieve_icdgen_listAPI_ResponseHandler(data, textStatus) {
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
                generate_icdgen_list(responseJSON.context.ICDGenDtl);
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

function retrieve_icdgen_details(HeaderrequestObject) {
    InputCenterDemandGeneration_ICDGen_retrieveICDGEN.invoke(HeaderrequestObject, retrieve_icdgenscreenAPI_ResponseHandler);
}

function retrieve_icdgenscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_icdgen_header(responseJSON.context.Header)
                generate_icdgen_detail(responseJSON.context.ICDGenDtl);
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
function save_icdgen_details(HeaderrequestObject) {
    InputCenterDemandGeneration_ICDGen_saveICDGen.invoke(HeaderrequestObject, save_icdgenAPI_ResponseHandler)
}

function save_icdgenAPI_ResponseHandler(data, textStatus) {
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
                bind_icdgenAPI_Response(responseJSON);
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

function bind_icdgenAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("ICD Details saved successfully");
        get_icdgen_details(responseJSON.context.Header.icdemand_rowid);
    }
    else if (mode == "D") {
        kendoAlert("ICD  Details inactivate successfully");
        get_icdgen_details(responseJSON.context.Header.icdemand_rowid);
    }
    else {
        kendoAlert("ICD  Details Updated successfully");
        get_icdgen_details(responseJSON.context.Header.icdemand_rowid);
    }

}
//product search

function retrieve_Invoiceproduct_list(FilterrequestObject) {
    Invoice_Invoice_master_getProductSearch.invoke(FilterrequestObject, retrieve_Invoiceproduct_listAPI_ResponseHandler);
}

function retrieve_Invoiceproduct_listAPI_ResponseHandler(data, textStatus) {
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
                generate_TaxInvoiceproduct_list(responseJSON.context.InvoiceTax);
                generate_Invoiceproduct_list(responseJSON.context.Detail);

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



