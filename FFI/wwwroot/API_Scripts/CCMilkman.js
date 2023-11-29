function retrieve_ccmilkman_list(FilterrequestObject) {
    CCMilkmanMap_CCMilkman_Map_retrieveCCMilkmanMapList.invoke(FilterrequestObject, retrieve_ccmilkman_listAPI_ResponseHandler);
}
    function retrieve_ccmilkman_listAPI_ResponseHandler(data, textStatus) {
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
                    generate_ccmilkman_list(responseJSON.context.List);
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


    function retrieve_ccmilkman_details(HeaderrequestObject) {
        CCMilkmanMap_CCMilkman_Map_retrieveCCMilkmanMap.invoke(HeaderrequestObject, retrieve_ccmilkmanscreenAPI_ResponseHandler);
    }

    function retrieve_ccmilkmanscreenAPI_ResponseHandler(data, textStatus) {
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
                    generate_ccmilkman_header(responseJSON.context.Header)
                    generate_ccmilkman_detail(responseJSON.context.Map);
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

    function save_ccmilkman_details(HeaderrequestObject) {
        CCMilkmanMap_CCMilkman_Map_saveCCMilkmanMap.invoke(HeaderrequestObject, save_ccmilkmanAPI_ResponseHandler)
    }

    function save_ccmilkmanAPI_ResponseHandler(data, textStatus) {
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
                    bind_ccmilkmanAPI_Response(responseJSON);
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

    function bind_ccmilkmanAPI_Response(responseJSON) {

        var mode = $("#txtMode").val();
        if (mode == "I") {
            kendoAlert("CC Milkman Map Details saved successfully");
            //retrieve_ccmilkman_list();
            get_ccmilkman_details(responseJSON.context.Header);
        }
        else if (mode == "D") {
            kendoAlert("CC Milkman Map Details inactivate successfully");
            //retrieve_ccmilkman_list();
            get_ccmilkman_details(responseJSON.context.Header);
        }
        else {
            kendoAlert("CC Milkman Map Details saved successfully");
            //retrieve_ccmilkman_list();
            get_ccmilkman_details(responseJSON.context.Header);
        }

    }