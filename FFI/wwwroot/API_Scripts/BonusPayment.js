function retrieve_BonusPayment_list(FilterrequestObject) {
    BonusPayment_Bonus_Payment_retrieveBonusPaymentList.invoke(FilterrequestObject, retrieve_BonusPayment_listAPI_ResponseHandler);
}
function retrieve_BonusPayment_listAPI_ResponseHandler(data, textStatus) {
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
                generate_BonusPayment_list(responseJSON.context.List);
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
function retrieve_BonusPayment_details(HeaderrequestObject) {
    BonusPayment_Bonus_Payment_retrieveBonusPayment.invoke(HeaderrequestObject, retrieve_BonusPaymentscreenAPI_ResponseHandler);
}
function retrieve_BonusPaymentscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_BonusPayment_header(responseJSON.context.Header)
                generate_BonusPayment_Detail(responseJSON.context.Detail)
                return true;
            }
            catch (e) {
                retrieve_BonusPaymentdetail_details();
                kendoAlert(e.message);
                return false;
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}
function retrieve_BonusPaymendetail_details(HeaderrequestObject) {
    BonusPayment_Bonus_Payment_retrieveBonusPayment.invoke(HeaderrequestObject, retrieve_BonusPaymendetailscreenAPI_ResponseHandler);
}
function retrieve_BonusPaymendetailscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_BonusPayment_Detail(responseJSON.context.Detail)
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
function retrieve_BonusPaymendetailList_details(HeaderrequestObject) {
    BonusPayment_Bonus_Payment_retrieveBonusPayment.invoke(HeaderrequestObject, retrieve_BonusPaymendetaillistscreenAPI_ResponseHandler);
}
function retrieve_BonusPaymendetaillistscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_BonusPaymentlist_Detail(responseJSON.context.Detail)
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
function save_BonusPayment_details(HeaderrequestObject) {
    BonusPayment_Bonus_Payment_saveBonusPayment.invoke(HeaderrequestObject,save_BonusPaymentAPI_ResponseHandler)
}

function save_BonusPaymentAPI_ResponseHandler(data, textStatus) {
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
                bind_BonusPaymentAPI_Response(responseJSON);
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

function bind_BonusPaymentAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Bonus Payment Details saved successfully");
        get_BonusPayment_details(responseJSON.context.Detail);
        get_BonusPayment_Header(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Bonus Payment Details inactivate successfully");
        get_BonusPayment_details(responseJSON.context.Detail);
        get_BonusPayment_Header(responseJSON.context.Header);
    }
    else {
        kendoAlert("Bonus Payment Details saved successfully");
        get_BonusPayment_details(responseJSON.context.Detail);
        get_BonusPayment_Header(responseJSON.context.Header);
    }

}