function retrieve_AggrVSmap_list(HeaderrequestObject) {
    AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_getMappedFarmersList.invoke(HeaderrequestObject, retrieve_AggrVSmapListscreenAPI_ResponseHandler);
}

function retrieve_AggrVSmapListscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_AggrVSmap_List(responseJSON.context.List);
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

function retrieve_AggrVSmap_details(HeaderrequestObject) {
    AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_getAggregatorVsFarMap.invoke(HeaderrequestObject, retrieve_AggrVSmapscreenAPI_ResponseHandler);
}

function retrieve_AggrVSmapscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_AggrVSmap_header(responseJSON.context.Header)
                generate_AggrVSmap_detail(responseJSON.context.FarmersNotMapped);
                return true;
            }
            catch (e) {
                //kendoAlert(e.message);
                //return false;
                javascript_log4j_root(arguments.callee.name, e);
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function save_AggrVSmap_details(HeaderrequestObject) {
    AggregatorVsFarmerMapping_Aggr_Vs_FarmerMapping_PAWHS_saveAggregatorVsFarMap.invoke(HeaderrequestObject, save_AggrVSmapAPI_ResponseHandler)
}

function save_AggrVSmapAPI_ResponseHandler(data, textStatus) {
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
                bind_AggrVSmapAPI_Response(responseJSON);
                return true;
            }
            catch (e) {
                //kendoAlert(e.message);
                //return false;
                javascript_log4j_root(arguments.callee.name, e);
            }
        }
    }
    else {
        kendoAlert('Error encountered during API execution. ' + data);
    }
}

function bind_AggrVSmapAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Aggregator Farmer Mapping Details saved successfully");
        //retrieve_AggrVSmap_list();
        get_AggrVSmap_details(responseJSON.context.Header);
    }
    else if (mode == "D") {
        kendoAlert("Aggregator Farmer Mapping inactivate successfully");
        //retrieve_AggrVSmap_list();
        get_AggrVSmap_details(responseJSON.context.Header);
    }
    else {
        kendoAlert("Aggregator Farmer Mapping saved successfully");
        //retrieve_AggrVSmap_list();
        get_AggrVSmap_details(responseJSON.context.Header);
    }

}