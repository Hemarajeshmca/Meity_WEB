function retrieve_userrole_list(data) {
    UserRole_userrole_detail_retrieveuserrole_list.invoke( data,retrieve_userrole_listAPI_ResponseHandler);
}

function retrieve_userrole_listAPI_ResponseHandler(data, textStatus) {
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
                generate_userrole_list(responseJSON.context.List);
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



function retrieve_userrole_details(HeaderrequestObject) {
    UserRole_userrole_detail_retrieveuserrole.invoke( HeaderrequestObject, retrieve_userrolescreenAPI_ResponseHandler);
}

function retrieve_userrolescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_userrole_header(responseJSON.context.Header)
                generate_userrole_detail(responseJSON.context.Detail);
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


function save_userrole_details(HeaderrequestObject) {
    UserRole_userrole_detail_saveuserrole.invoke( HeaderrequestObject, save_userroleAPI_ResponseHandler)
}

function save_userroleAPI_ResponseHandler(data, textStatus) {
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
        kendoAlert("User Definition  Details saved successfully");
        var data = {};
        data.context = WebAPIProxy.getContext();
        retrieve_userrole_list(data);
        clear_val();
    }
    else if (mode == "D") {
        kendoAlert("User Definition  Details inactivate successfully");
        get_user_details($("#txtUserId").val());
    }
    else {
        kendoAlert("User Definition  Details saved successfully");      
        get_user_details($("#txtUserId").val());
        //retrieve_userrole_list();
    }

}




function retrieve_userrole_activity_details(HeaderrequestObject) {
    UserRole_userrole_detail_retrieveuserrole_activity.invoke( HeaderrequestObject, retrieve_userroleactivityscreenAPI_ResponseHandler);
}

function retrieve_userroleactivityscreenAPI_ResponseHandler(data, textStatus) {
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
              //  generate_roleactivity_header(responseJSON.context.Header)
                generate_userroleactivity_detail(responseJSON.context.Detail);
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
