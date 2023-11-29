function retrieve_productmaster_list(FilterrequestObject) {
    Product_product_master_getProductList.invoke(FilterrequestObject, retrieve_productmaster_listAPI_ResponseHandler);
}

function retrieve_productmaster_listAPI_ResponseHandler(data, textStatus) {
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
                generate_productmaster_list(responseJSON.context.List);
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

function retrieve_productmaster_details(HeaderrequestObject) {
    Product_product_master_getProduct.invoke(HeaderrequestObject, retrieve_productmaster_ResponseHandler);
}

function retrieve_productmaster_ResponseHandler(data, textStatus) {
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
                generate_productmaster_detail(responseJSON.context.Detail);
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


function save_productmaster_details(HeaderrequestObject) {
    Product_product_master_saveProduct.invoke(HeaderrequestObject, save_productmaster_ResponseHandler)
}

function save_productmaster_ResponseHandler(data, textStatus) {
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
                bind_attribute_groupAPI_Response(responseJSON);
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



function bind_attribute_groupAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Product Master saved successfully");
        //var rowid = responseJSON.context.Header.paymenthead_rowid;
        //var no = responseJSON.context.Header.payment_no;
        //get_fetch_advice_details(rowid, no);
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    } 

    else {
        kendoAlert("Product Master update successfully");
        //var rowid = responseJSON.context.Header.paymenthead_rowid;
        //var no = responseJSON.context.Header.payment_no;
        //get_fetch_advice_details(rowid, no);
savebtn_disable();
    }

} 





