function retrieve_attribute_group_list(FilterrequestObject) {
    AttributeGroup_Attribute_Group_retrieveAttributeGroupList.invoke(FilterrequestObject, retrieve_attribute_group_listAPI_ResponseHandler);
}

function retrieve_attribute_group_listAPI_ResponseHandler(data, textStatus) {
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
                generate_attribute_group_list(responseJSON.context.List);
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

function retrieve_attribute_group_details(HeaderrequestObject) {
    AttributeGroup_Attribute_Group_retrieveAttributeGroup.invoke(HeaderrequestObject, retrieve_attribute_groupscreenAPI_ResponseHandler);
}

function retrieve_attribute_groupscreenAPI_ResponseHandler(data, textStatus) {
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
                generate_attribute_group_header(responseJSON.context.Header)
                generate_attribute_group_detail(responseJSON.context.Detail);
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
function save_attribute_group_details(HeaderrequestObject) {
    AttributeGroup_Attribute_Group_saveAttributeGroup.invoke(HeaderrequestObject,save_attribute_groupAPI_ResponseHandler)
}

function save_attribute_groupAPI_ResponseHandler(data, textStatus) {
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
        kendoAlert("Attribute Group  Details saved successfully");
        get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else if (mode == "D") {
        kendoAlert("Attribute Group  Details inactivate successfully");
        get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }
    else {
        kendoAlert("Attribute Group  Details saved successfully");
        get_attribute_group_details(responseJSON.context.Header.entitygrp_rowid);
    }

}




