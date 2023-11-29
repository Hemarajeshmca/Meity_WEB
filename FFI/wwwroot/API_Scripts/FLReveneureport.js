function retrieve_Flrevenue_list(FilterrequestObject) {
    RevenueReport_Revenue_Report_retrieveRevenueReport.invoke(FilterrequestObject, retrieve_Flrevenue_listAPI_ResponseHandler);
}
function retrieve_Flrevenue_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Flrevenue_header(responseJSON.context.Header);
                generate_Flrevenue_ESPDetails(responseJSON.context.ESPDetails);
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
