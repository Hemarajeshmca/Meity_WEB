function retrieve_AttrGroupactivity_list(FilterrequestObject) {
    AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivityList.invoke(FilterrequestObject, retrieve_AttrGroupactivity_listAPI_ResponseHandler);
}
function retrieve_AttrGroupactivity_listAPI_ResponseHandler(data, textStatus) {
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
                generate_AttrGroupactivity_list(responseJSON.context.List);
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
function retrieve__AttrGroupactivity_details(HeaderrequestObject) {
    AttributeGroupActivity_Attribute_GroupActivity_retrieveAttrGroupActivity.invoke(HeaderrequestObject, retrieve_AttrGroupActivityscreenAPI_ResponseHandler);
}
function retrieve_AttrGroupActivityscreenAPI_ResponseHandler(data, textStatus) {
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
                //generate_AttrGroupActivity_header(responseJSON.context.Header)
                generate_AttrGroupActivity_detail(responseJSON.context.Detail);
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

function save_AttrGroupActivity_details(HeaderrequestObject) {
    AttributeGroupActivity_Attribute_GroupActivity_saveAttrGroupActivity.invoke(HeaderrequestObject,save_AttrGroupActivityAPI_ResponseHandler)
}
function save_AttrGroupActivityAPI_ResponseHandler(data, textStatus) {
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
                bind_AttrGroupActivityAPI_Response(responseJSON);
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
function bind_AttrGroupActivityAPI_Response(responseJSON) {

    var mode = $("#txtMode").val();
    if (mode == "I") {
        kendoAlert("Attributes Group Mapping  Details saved successfully");
        get_AttrGroupActivity_details($('#cmb_menu').data("kendoComboBox").value());
    }
    else if (mode == "D") {
        kendoAlert("Attributes Group Mapping  Details inactivate successfully");
        get_AttrGroupActivity_details($('#cmb_menu').data("kendoComboBox").value());
    }
    else {
        kendoAlert("Attributes Group Mapping Details saved successfully");
        //retrieve_AttrGroupactivity_list();
        get_AttrGroupActivity_details($('#cmb_menu').data("kendoComboBox").value());
    }

}
