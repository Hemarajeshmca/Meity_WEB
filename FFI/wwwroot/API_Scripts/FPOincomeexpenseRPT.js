function retrieve_FPOIncExp_list(FilterrequestObject) {
    FPOIncome_ExpenseReport_incme_exp_rpt_getIncome_ExpenseReport.invoke(FilterrequestObject, retrieve_FPOIncExp_listAPI_ResponseHandler);
}
function retrieve_FPOIncExp_listAPI_ResponseHandler(data, textStatus) {
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
                generate_FPOIncExp_Header(responseJSON.context.Header);
                generate_FPOIncExp_Income_expensedtl(responseJSON.context.Income_expensedtl);
                generate_FPOIncExp_ICDemand_prddtl(responseJSON.context.ICDemand_prddtl);
                generate_FPOIncExp_ICDemand_fardtl(responseJSON.context.ICDemand_fardtl);
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