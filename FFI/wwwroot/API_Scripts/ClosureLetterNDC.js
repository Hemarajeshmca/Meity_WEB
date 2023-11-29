
function retrieve_ClosureLetter_list(FilterrequestObject) {
    FLClosure_Letter_NDC_FLClosureLetterNDC_retrieveFLClosure_Letter_NDC.invoke(FilterrequestObject, retrieve_ClosureLetter_listAPI_ResponseHandler);
}

function retrieve_ClosureLetter_listAPI_ResponseHandler(data, textStatus) {
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
                generate_ClosureLetter_list(responseJSON.context.List);
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

function retrieve_ClosureLetter_details(HeaderrequestObject) {
    FLClosure_Letter_NDC_FLClosureLetterNDC_retrieveFLClosure_Letter_NDC.invoke(HeaderrequestObject, retrieve_ClosureLetterscreenAPI_ResponseHandler);
}

function retrieve_ClosureLetterscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_ClosureLetter_detail(responseJSON.context.Detail);
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
function save_ClosureLetter_details(HeaderrequestObject) {
    FLClosure_Letter_NDC_FLClosureLetterNDC_saveFLClosure_Letter_NDC.invoke(HeaderrequestObject, save_ClosureLetterAPI_ResponseHandler)
}

function save_ClosureLetterAPI_ResponseHandler(data, textStatus) {
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
                bind_ClosureLetterAPI_Response(responseJSON);
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

function bind_ClosureLetterAPI_Response(responseJSON) {  
        kendoAlert("Closure Letter saved successfully");
        get_ClosureLetter_details(responseJSON.context.Header);

}




