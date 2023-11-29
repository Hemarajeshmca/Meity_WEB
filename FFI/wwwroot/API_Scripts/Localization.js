function retrieve_Localization_details(HeaderrequestObject) {
    LocalizationDefinition_Localization_retrieveLocalizationDefinition.invoke( HeaderrequestObject, retrieve_LocalizationscreenAPI_ResponseHandler);
}

function retrieve_LocalizationscreenAPI_ResponseHandler(data, textStatus) {
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
                //generate_Localization_header(responseJSON.context.Header)
                generate_Localization_Screen(responseJSON.context.Screen);
                generate_Localization_FE(responseJSON.context.FE);
                generate_Localization_BE(responseJSON.context.BE);
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


function save_Localization_details(DetailrequestObjectArray) {
    LocalizationDefinition_Localization_saveLocalizationDefinition.invoke(DetailrequestObjectArray, save_LocalizationAPI_ResponseHandler)
}

function save_LocalizationAPI_ResponseHandler(data, textStatus) {
    if (textStatus == "success") {
        responseJSON = data;
 //       responseJSON = jQuery.parseJSON(data);
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
                bind_LocalizationAPI_Response(responseJSON);
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

function bind_LocalizationAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Localization Details saved successfully");
        //get_CCUserMap_details();
        // clear_val();

    }
    else if (mode == "D") {
        kendoAlert("Localization Details inactivate successfully");
        //get_CCUserMap_details();
    }
    else {
        kendoAlert("Localization Details saved successfully");
       // clear_val();
        Active_screen();
        //retrieve_CCUserMap_details();
        //get_CCUserMap_details();
        //get_CCUserMap(responseJSON.context.Header);
    }

}
