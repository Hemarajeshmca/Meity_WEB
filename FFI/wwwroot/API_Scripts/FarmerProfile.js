function retrieve_farmer_list(HeaderrequestObject) {
    FarmerProfile_Farmer_Profile_retrieveFarmerProfileList.invoke(HeaderrequestObject, retrieve_farmerprofile_listAPI_ResponseHandler);
}

function retrieve_farmerprofile_listAPI_ResponseHandler(data, textStatus) {
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
                generate_farmerprofile_list(responseJSON);
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


function retrieve_farmerprofile_details(HeaderrequestObject) {
    FarmerProfile_Farmer_Profile_retrieveFarmerProfile.invoke(HeaderrequestObject, retrieve_farmerprofilescreenAPI_ResponseHandler);
}

function retrieve_farmerprofilescreenAPI_ResponseHandler(data, textStatus) {
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
                generate_farmerprofile_header(responseJSON.context.Header)
               // generate_farmerprofile_detail(responseJSON.context.Header.detail);
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


function save_farmerprofile_details(HeaderrequestObject) {
    FarmerProfile_Farmer_Profile_saveFarmerProfile.invoke(HeaderrequestObject,save_farmerprofileAPI_ResponseHandler)
}

function save_farmerprofileAPI_ResponseHandler(data, textStatus) {
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
    kendoAlert("Farmer Profile  Details saved successfully");
    farmerprofile_details(responseJSON);
    
}



