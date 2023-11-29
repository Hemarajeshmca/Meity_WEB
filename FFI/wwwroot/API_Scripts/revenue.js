function retrieve_Revenue_list(FilterrequestObject) {
    Revenue_Revenue_Master_getRevenueList.invoke(FilterrequestObject, retrieve_revenue_listAPI_ResponseHandler);
}

function retrieve_revenue_listAPI_ResponseHandler(data, textStatus) {
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
                generate_Revenue_list(responseJSON.context.List);
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

function retrieve_Revenue_details(HeaderrequestObject) {
    Revenue_Revenue_Master_getRevenue.invoke(HeaderrequestObject, retrieve_RevenuescreenAPI_ResponseHandler);
}

function retrieve_RevenuescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_revenue_header(responseJSON.context.Header);
                generate_revenue_detail(responseJSON.context.Details);
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

function save_Revenue_details(HeaderrequestObject) {
    Revenue_Revenue_Master_saveRevenue.invoke(HeaderrequestObject, save_RevenueAPI_ResponseHandler)
}

function save_RevenueAPI_ResponseHandler(data, textStatus) {
    debugger;
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
            $('#divUserRole24 #btngen').show();
            return false;
        }
        else {
            try {
                bind_RevenueAPI_Response(responseJSON);
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

function bind_RevenueAPI_Response(responseJSON) {
    debugger;
    var mode = $("#mode_flag").val();
    if (mode == "I") {
        kendoAlert("Revenue Details saved successfully");
        get_revenue_details(responseJSON.context.Header);
        //save_disable();
    }
    else if (mode == "D") {
        kendoAlert("Revenue  Details inactivate successfully");
        get_revenue_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Revenue  Details saved successfully");
        get_revenue_details(responseJSON.context.Header);
        //save_disable();
    }

}
