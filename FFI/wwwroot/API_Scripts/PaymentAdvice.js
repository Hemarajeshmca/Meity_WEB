function retrieve_payment_ad_list(FilterrequestObject) {
    PaymentAdvice_Payment_Advice_retrievePaymentAdviceList.invoke( FilterrequestObject, retrieve_payment_ad_listAPI_ResponseHandler);
}

function retrieve_payment_ad_listAPI_ResponseHandler(data, textStatus) {
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
                generate_paymentadvce_list(responseJSON.context.List);
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

function retrieve_paymntadvce_details(HeaderrequestObject) {
    PaymentAdvice_Payment_Advice_retrievePaymentAdvice.invoke( HeaderrequestObject, retrieve_pay_advicescreenAPI_ResponseHandler);
}

function retrieve_pay_advicescreenAPI_ResponseHandler(data, textStatus) {
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
             
                generate_payment_advice_bill_header(responseJSON.context.Header)
                generate_payment_advice_bill_detail(responseJSON.context.BillDetail);
                generate_payment_advice_retail_detail(responseJSON.context.RetailDetail);
                generate_payment_advice_Milk_Payment_Details(responseJSON.context.OverAllBillEntry);
                generate_payment_advice_bill_summary(responseJSON.context.summary);
                //  generate_payment_advice_detail(responseJSON.context.Detail);
                generate_payment_advice_adv(responseJSON.context.PaymentAdv);
                generate_payment_advice_payment_summary(responseJSON.context.PaymentSummary);
                
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


function retrieve_paymntadvce_bill_details(HeaderrequestObject) {
    PaymentAdvice_Payment_Advice_retrievePaymentAdviceBillDetail.invoke( HeaderrequestObject, retrieve_pay_advice_billscreenAPI_ResponseHandler);
}

function retrieve_pay_advice_billscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_payment_advice_bill_header(responseJSON.context.Header)
                generate_payment_advice_bill_detail(responseJSON.context.BillDetail);
                generate_payment_advice_retail_detail(responseJSON.context.RetailDetail);
                generate_payment_advice_Milk_Payment_Details(responseJSON.context.OverAllBillEntry);
                generate_payment_advice_bill_summary(responseJSON.context.summary);
                
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
function save_payment_details(HeaderrequestObject) {
    PaymentAdvice_Payment_Advice_savePaymentAdvice.invoke( HeaderrequestObject, save_payment_adviceAPI_ResponseHandler)
}

function save_payment_adviceAPI_ResponseHandler(data, textStatus) {
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
        kendoAlert("Payment Advice Details saved successfully");
        var rowid = responseJSON.context.Header.paymenthead_rowid;
       var no = responseJSON.context.Header.payment_no;
        get_fetch_advice_details(rowid, no);
      
        //get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Payment Advice inactivate successfully");
        var rowid = responseJSON.context.Header.paymenthead_rowid;
        var no = responseJSON.context.Header.payment_no;
        get_fetch_advice_details(rowid, no);
    }
    else if (mode == "G") {
        kendoAlert("Payment Advice Calculated successfully");
        var rowid = responseJSON.context.Header.paymenthead_rowid;
        var no = responseJSON.context.Header.payment_no;
        lock();
       get_fetch_advice_details(rowid, no);

    }

    else {
        kendoAlert("Payment Advice saved successfully");
        var rowid = responseJSON.context.Header.paymenthead_rowid;
        var no = responseJSON.context.Header.payment_no;
        get_fetch_advice_details(rowid, no);
    }

}




