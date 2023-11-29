function retrieve_RateCard_list(FilterrequestObject) {
    RateCard_Rate_Card_retrieveRateCardList.invoke(FilterrequestObject, retrieve_RateCard_listAPI_ResponseHandler);
}
function retrieve_RateCard_listAPI_ResponseHandler(data, textStatus) {
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
                generate_RateCard_list(responseJSON.context.List);
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
function retrieve_RateCard_details(HeaderrequestObject) {
    RateCard_Rate_Card_retrieveRateCard.invoke(HeaderrequestObject, retrieve_RateCardscreenAPI_ResponseHandler);
}
function retrieve_RateCardscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_RateCard_header(responseJSON.context.Header)
                generate_RateCard_detail(responseJSON.context.Detail);
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

function save_RateCard_details(HeaderrequestObject) {
    RateCard_Rate_Card_saveRateCard.invoke(HeaderrequestObject,save_RateCardAPI_ResponseHandler)
}

function save_RateCardAPI_ResponseHandler(data, textStatus) {
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
                bind_RateCardAPI_Response(responseJSON);
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

function bind_RateCardAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Rate Card saved successfully");
        get_RateCard_details(responseJSON.context.Header.ratecard_rowid, responseJSON.context.Header.ratecard_code);
    }
    else if (mode == "D") {
        kendoAlert("Rate Card Inactivate successfully");
        get_RateCard_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Rate Card Updated successfully");
        get_RateCard_details(responseJSON.context.Header.ratecard_rowid, responseJSON.context.Header.ratecard_code);
    }

}
