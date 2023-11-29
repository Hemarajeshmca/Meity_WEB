var Creditevalution_Credit_evalution_retrieveCreditevalution = {
    /*
     Function to invoke API
     Notes:
     Resource: Credit_evalution
     Description: retrieveCreditevalution
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCreditevalution_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCreditevalution_Request.context && retrieveCreditevalution_Request.context.hasOwnProperty('orgnId')) ? retrieveCreditevalution_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCreditevalution_Request.context && retrieveCreditevalution_Request.context.hasOwnProperty('locnId')) ? retrieveCreditevalution_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCreditevalution_Request.context && retrieveCreditevalution_Request.context.hasOwnProperty('userId')) ? retrieveCreditevalution_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCreditevalution_Request.context && retrieveCreditevalution_Request.context.hasOwnProperty('localeId')) ? retrieveCreditevalution_Request.context["localeId"] : null; //Unicode string(100)
        var param_creditevaluation_id = (retrieveCreditevalution_Request.context.Header && retrieveCreditevalution_Request.context.Header.hasOwnProperty('creditevaluation_id')) ? retrieveCreditevalution_Request.context.Header["creditevaluation_id"] : null; //Integer(32)
        var param_fpoorgn_code = (retrieveCreditevalution_Request.context.Header && retrieveCreditevalution_Request.context.Header.hasOwnProperty('fpoorgn_code')) ? retrieveCreditevalution_Request.context.Header["fpoorgn_code"] : null; //Unicode string(50)
        var param_member_code = (retrieveCreditevalution_Request.context.Header && retrieveCreditevalution_Request.context.Header.hasOwnProperty('member_code')) ? retrieveCreditevalution_Request.context.Header["member_code"] : null; //Unicode string(50)
        var param_loan_type = (retrieveCreditevalution_Request.context.Header && retrieveCreditevalution_Request.context.Header.hasOwnProperty('loan_type')) ? retrieveCreditevalution_Request.context.Header["loan_type"] : null; //Unicode string(50)
        var param_loan_no = (retrieveCreditevalution_Request.context.Header && retrieveCreditevalution_Request.context.Header.hasOwnProperty('loan_no')) ? retrieveCreditevalution_Request.context.Header["loan_no"] : null; //Unicode string(1024)
        var param_questionnairesmap_id = (retrieveCreditevalution_Request.context.Header && retrieveCreditevalution_Request.context.Header.hasOwnProperty('evaluationmap_id')) ? retrieveCreditevalution_Request.context.Header["evaluationmap_id"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Creditevalution/credit_eval?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&creditevaluation_id=" + param_creditevaluation_id + "&fpoorgn_code=" + param_fpoorgn_code + "&member_code=" + param_member_code + "&loan_type=" + param_loan_type + "&loan_no=" + param_loan_no + "&questionnairesmap_id=" + param_questionnairesmap_id + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Creditevalution_Credit_evalution_retrieveCreditevalution.retrieveCreditevalution_ResponseHandler);
        return true;
    },
    
    retrieveCreditevalution_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCreditevalution_ResponseObject = new retrieveCreditevalutionResponse(responseData, "JSON");
            Creditevalution_Credit_evalution_retrieveCreditevalution.callbackfunction(retrieveCreditevalution_ResponseObject, textStatus);
        }
        else {
            Creditevalution_Credit_evalution_retrieveCreditevalution.callbackfunction(responseData, textStatus);
        }
    },
    
    /**
     * @deprecated as on 16 March 2017. This method will be removed by 30 September 2017. Use 'invoke' method instead.
     */
    invokeAPI: function (contextrequestObject, HeaderrequestObject, callbackHandler)
    {
        /// <deprecated type="deprecate" >Invokes API. This function has been retained for backward compatibility with the user interfaces that have integrated with the older version of the generated snippets.</deprecated>
        if (contextrequestObject == null)
        {
            var context = WebAPIProxy.getContext();
            contextrequestObject = new retrieveCreditevalutionRequestcontext();
            if(context != null && context.hasOwnProperty("orgnId"))
                contextrequestObject.orgnId = context.orgnId;
            if(context != null && context.hasOwnProperty("locnId"))
                contextrequestObject.locnId = context.locnId;
            if(context != null && context.hasOwnProperty("userId"))
                contextrequestObject.userId = context.userId;
            if(context != null && context.hasOwnProperty("localeId"))
                contextrequestObject.localeId = context.localeId;
        }
        var param_orgnid = (contextrequestObject && contextrequestObject.hasOwnProperty('orgnId')) ? contextrequestObject["orgnId"] : null; //Unicode string(100)
        var param_locnid = (contextrequestObject && contextrequestObject.hasOwnProperty('locnId')) ? contextrequestObject["locnId"] : null; //Unicode string(100)
        var param_userid = (contextrequestObject && contextrequestObject.hasOwnProperty('userId')) ? contextrequestObject["userId"] : null; //Unicode string(128)
        var param_localeid = (contextrequestObject && contextrequestObject.hasOwnProperty('localeId')) ? contextrequestObject["localeId"] : null; //Unicode string(100)
        var param_creditevaluation_id = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('creditevaluation_id')) ? HeaderrequestObject["creditevaluation_id"] : null; //Integer(32)
        var param_fpoorgn_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('fpoorgn_code')) ? HeaderrequestObject["fpoorgn_code"] : null; //Unicode string(50)
        var param_member_code = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('member_code')) ? HeaderrequestObject["member_code"] : null; //Unicode string(50)
        var param_loan_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loan_type')) ? HeaderrequestObject["loan_type"] : null; //Unicode string(50)
        var param_loan_no = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loan_no')) ? HeaderrequestObject["loan_no"] : null; //Unicode string(1024)
        var param_questionnairesmap_id = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('evaluationmap_id')) ? HeaderrequestObject["evaluationmap_id"] : null; //Integer(16)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Creditevalution/credit_eval?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&creditevaluation_id=" + param_creditevaluation_id + "&fpoorgn_code=" + param_fpoorgn_code + "&member_code=" + param_member_code + "&loan_type=" + param_loan_type + "&loan_no=" + param_loan_no + "&questionnairesmap_id=" + param_questionnairesmap_id + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
