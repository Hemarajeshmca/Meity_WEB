function retrieve_customermaster_list(FilterrequestObject) {
    CustomerMaster_Customer_master_PAWHS_getCustomerMasterList.invoke(FilterrequestObject, retrieve_customermaster_listAPI_ResponseHandler);
}

function retrieve_customermaster_listAPI_ResponseHandler(data, textStatus) {
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
                /* Define in Page  */
                generate_Customer_list(responseJSON.context.List);
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

function retrieve_Customer_MasterScreen(HeaderrequestObject) {
    CustomerMaster_Customer_master_PAWHS_getCustomerMaster.invoke(HeaderrequestObject, retrieve_customermasterscreen_ResponseHandler);
    
}

function retrieve_customermasterscreen_ResponseHandler(data, textStatus) {
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
                /* Define In Page */
                generate_customermaster_header(responseJSON.context.Header);  //(responseJSON.context.header);
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


function save_Customer_details(HeaderrequestObject) {
    CustomerMaster_Customer_master_PAWHS_saveCustomerMaster.invoke(HeaderrequestObject, save_customermaster_ResponseHandler)
}

function save_customermaster_ResponseHandler(data, textStatus) {
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
                bind_customerMaster_Response(responseJSON);
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



function bind_customerMaster_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Customer Master saved successfully");
        Get_customerMaster_details(responseJSON.context.Header);

        //var rowid = responseJSON.context.Header.paymenthead_rowid;
        //var no = responseJSON.context.Header.payment_no;
        //get_fetch_advice_details(rowid, no);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }

    else {
        kendoAlert("Customer Master update successfully");
        Get_customerMaster_details(responseJSON.context.Header);

        //var rowid = responseJSON.context.Header.paymenthead_rowid;
        //var no = responseJSON.context.Header.payment_no;
        //get_fetch_advice_details(rowid, no);
    }

}





