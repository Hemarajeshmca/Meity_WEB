function retrieve_fin_year_list(FilterrequestObject) {
    FinYear_Fin_Year_retrieveFinYearList.invoke(FilterrequestObject, retrieve_fin_year_listAPI_ResponseHandler);
}

function retrieve_fin_year_listAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //  responseJSON = jQuery.parseJSON(data);
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
                generate_fin_year_list(responseJSON.context.List);
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


function retrieve_fin_year_details(HeaderrequestObject) {
    FinYear_Fin_Year_retrieveFinYear.invoke(HeaderrequestObject, retrieve_fin_yearAPI_ResponseHandler);
}

function retrieve_fin_yearAPI_ResponseHandler(data, textStatus) {
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
                generate_fin_year_header(responseJSON.context.Header)                
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


function save_fin_year_details(HeaderrequestObject) {
    FinYear_Fin_Year_saveFinYear.invoke( HeaderrequestObject,  save_fin_yearAPI_ResponseHandler)
}

function save_fin_yearAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //     responseJSON = jQuery.parseJSON(data);
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
                bind_roleactivityAPI_Response(responseJSON);
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

function bind_roleactivityAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Financial Year  Details saved successfully");
        listpageloadfetch();
        clear_val()
       
    }
    else if (mode == "D") {
        kendoAlert("Financial Year  Details inactivate successfully");
        listpageloadfetch();
        clear_val()
    }
    else {
        kendoAlert("Financial Year  Details saved successfully");
        listpageloadfetch();
        clear_val()
    }


}



