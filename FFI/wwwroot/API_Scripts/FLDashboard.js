function retrieve_FLDashboard_list(FilterrequestObject) {
    EquipmentReport_equipmentReports_retrieveEquipmentReports.invoke(FilterrequestObject, retrieve_FLDashboard_listAPI_ResponseHandler);
}
function retrieve_FLDashboard_listAPI_ResponseHandler(data, textStatus) {
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
                generate_FLDashboard_header(responseJSON.context.Header);
                generate_FLDashboard_LeaseDetails(responseJSON.context.LeaseDetails);
                generate_FLDashboard_EquipmentDetails(responseJSON.context.EquipmentDetails);
                generate_FLDashboard_EquipmentStatus(responseJSON.context.EquipmentStatus);              
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
