function retrieve_roleactivity_list(data) {
    RoleActivity_Role_Activity_retrieveroleactivity_list.invoke( data,retrieve_roleactivity_listAPI_ResponseHandler);
}

function retrieve_roleactivity_listAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //    responseJSON = jQuery.parseJSON(data);
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
                generate_roleactivity_list(responseJSON.context.List);
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



function retrieve_roleactivity_details(HeaderrequestObject) {
    RoleActivity_Role_Activity_retrieveroleactivity.invoke( HeaderrequestObject, retrieve_roleactivityscreenAPI_ResponseHandler);
}

function retrieve_roleactivityscreenAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //   responseJSON = jQuery.parseJSON(data);
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
                generate_roleactivity_header(responseJSON.context.Header)
                generate_roleactivity_detail(responseJSON.context.Detail);
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


function save_roleactivity_details(HeaderrequestObject) {
    RoleActivity_Role_Activity_saveroleactivity.invoke( HeaderrequestObject, save_roleactivityAPI_ResponseHandler)
}

function save_roleactivityAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        //    responseJSON = jQuery.parseJSON(data);
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
                kendoAlert(e.message);
                return false;
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
        kendoAlert("Role Definition  Details saved successfully");
        var data = {};
        data.context = WebAPIProxy.getContext();
        retrieve_roleactivity_list(data);
        clear_val();
    }   
    else if (mode == "D") {
        kendoAlert("Role Definition  Details inactivated successfully");
        get_role_details(responseJSON.context.Header.role_rowid);
    }
    else {
        kendoAlert("Role Definition  Details saved successfully");
        var data = {};
        data.context = WebAPIProxy.getContext();
        retrieve_roleactivity_list(data);
        get_role_details(responseJSON.context.Header.role_rowid);
    }

}

