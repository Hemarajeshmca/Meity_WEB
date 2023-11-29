function retrieve_My_Booking_list(FilterrequestObject) {
    MyBooking_My_Booking_retrieveMyBookingList.invoke(FilterrequestObject, retrieve_MyBooking_listAPI_ResponseHandler);
}

function retrieve_MyBooking_listAPI_ResponseHandler(data, textStatus) {
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
                generate_MyBooking_list(responseJSON.context.List);
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
function retrieve_MyBooking_Equipmentratedetails(HeaderrequestObject) {
    MyBooking_My_Booking_retrievebookingrate.invoke(HeaderrequestObject, retrieve_MyBookingratescreenAPI_ResponseHandler);
}

function retrieve_MyBookingratescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_MyBookingrate_header(responseJSON.context.Header);
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
function retrieve_MyBooking_details(HeaderrequestObject) {
    MyBooking_My_Booking_retrieveMyBooking.invoke(HeaderrequestObject, retrieve_MyBookingscreenAPI_ResponseHandler);
}

function retrieve_MyBookingscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_MyBooking_header(responseJSON.context.Header);
                generate_MyBooking_termsandcondition(responseJSON.context.Terms_and_Conditions);
                generate_MyBooking_bookinghistory(responseJSON.context.booking_History);
                generate_MyBooking_termsandconditionhistory(responseJSON.context.terms_and_conditions_history);
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

function save_MyBooking_details(HeaderrequestObject) {
    MyBooking_My_Booking_saveMyBooking.invoke(HeaderrequestObject, save_MyBookingAPI_ResponseHandler)
}

function save_MyBookingAPI_ResponseHandler(data, textStatus) {
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
                bind_MyBookingAPI_Response(responseJSON);
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

function bind_MyBookingAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Booking Confirmed");
        get_MyBooking_details(responseJSON.context.Header);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "R") {
        kendoAlert("Booking Confirmed");
        get_MyBooking_details(responseJSON.context.Header);
    }
    else if (mode == "ST") {
        kendoAlert("Service Initiated");
        get_MyBooking_details(responseJSON.context.Header);
    }
    else if (mode == "E") {
        kendoAlert("Service Completed");
        get_MyBooking_details(responseJSON.context.Header);
    }
    else if (mode == "J") {
        kendoAlert("Booking Reject");
        get_MyBooking_details(responseJSON.context.Header);
    }
    else if (mode == "SC") {
        kendoAlert("Service Completed");
        get_MyBooking_details(responseJSON.context.Header);
    }
}




