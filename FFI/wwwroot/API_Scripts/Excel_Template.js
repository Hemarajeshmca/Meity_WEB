function retrieve_Excel_Template_list(HeaderrequestObject) {
    ExcelTemplate_Excel_Template_retrieveExcelTemplate.invoke(HeaderrequestObject, retrieve_Excel_Template_listAPI_ResponseHandler);
}
function retrieve_Excel_Template_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Excel_Template_Header(responseJSON.context.Header);
                generate_Excel_Template_Column(responseJSON.context.excelColumn);
                generate_Excel_Template_history(responseJSON.context.excelHistory);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function save_Excel_Template_details(HeaderrequestObject) {
    ExcelTemplate_Excel_Template_saveExcelHistoryLog.invoke(HeaderrequestObject, save_Excel_TemplateAPI_ResponseHandler)
}
function save_Excel_TemplateAPI_ResponseHandler(data, textStatus) {
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
                bind_Excel_TemplateAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}


function save_ExcelScaler_Template_details(HeaderrequestObject) {
    setlocalStorage("rowval", HeaderrequestObject)
    ExcelTemplate_Excel_Template_uploadExcelScaler.invoke(HeaderrequestObject, save_ExcelScaler_TemplateAPI_ResponseHandler)
}
function save_ExcelScaler_TemplateAPI_ResponseHandler(data, textStatus) {
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
            var data = getlocalStorage("rowval");
            // kendoAlert(errorNumber + errorDescription);
            load_error_code("Failure", data.context.header.rowval, errorDescription);
            setlocalStorage("SFail", 'Failure');

            return false;
        }
        else {
            try {
                bind_ScalerExcel_TemplateAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function save_ExcelVector_Template_details(HeaderrequestObject) {
    setlocalStorage("rowvalue", HeaderrequestObject)
    ExcelTemplate_Excel_Template_uploadExcelVector.invoke(HeaderrequestObject, save_ExcelVector_TemplateAPI_ResponseHandler)
}
function save_ExcelVector_TemplateAPI_ResponseHandler(data, textStatus) {
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
            var data = getlocalStorage("rowvalue");
            //kendoAlert(errorNumber + errorDescription);
            load_error_code("Failure", data.context.header.row, errorDescription);
            setlocalStorage("VFail", 'Failure');

            return false;
        }
        else {
            try {
                bind_VectorExcel_TemplateAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function load_error_code(status,row_no,error) {
    var data = {};
    data.status = status;
    data.row = row_no;
    data.str_err2 = error;
    var tab_values = ajaxcall_param("/BulkUploads/processdata", JSON.stringify(data));

   
}

function save_Excel_history_details(historyrequestObject) {
    ExcelTemplate_Excel_Template_saveExcelHistoryLog.invoke(historyrequestObject, save_Excel_historyAPI_ResponseHandler)
}
function save_Excel_historyAPI_ResponseHandler(data, textStatus) {
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
                bind_Excel_historyAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}
function bind_VectorExcel_TemplateAPI_Response(responseJSON) {    
    var data1 = getlocalStorage("rowvalue");
    load_error_code("Success", data1.context.Header.row, "-");
    //setlocalStorage("VFail", 'Success');
}

function bind_ScalerExcel_TemplateAPI_Response(responseJSON) {
    var data = getlocalStorage("rowval");
    load_error_code("Success", data.context.header.rowval, "-");
   // setlocalStorage("SFail", 'Success');

}
function bind_Excel_historyAPI_Response(responseJSON) {

}
