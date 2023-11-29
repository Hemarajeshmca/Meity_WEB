var Creditevalution_Credit_evalution_retrieveCreditevalutionSetup = {
    /*
     Function to invoke API
     Notes:
     Resource: Credit_evalution
     Description: retrieveCreditevalutionSetup
     Http verb: GET
     Request format: NOT APPLICABLE
     Response format: JSON
     Requires authorization: No
     */
    invoke: function (retrieveCreditevalutionSetup_Request, callbackHandler)
    {
        var param_orgnid = (retrieveCreditevalutionSetup_Request.context && retrieveCreditevalutionSetup_Request.context.hasOwnProperty('orgnId')) ? retrieveCreditevalutionSetup_Request.context["orgnId"] : null; //Unicode string(100)
        var param_locnid = (retrieveCreditevalutionSetup_Request.context && retrieveCreditevalutionSetup_Request.context.hasOwnProperty('locnId')) ? retrieveCreditevalutionSetup_Request.context["locnId"] : null; //Unicode string(100)
        var param_userid = (retrieveCreditevalutionSetup_Request.context && retrieveCreditevalutionSetup_Request.context.hasOwnProperty('userId')) ? retrieveCreditevalutionSetup_Request.context["userId"] : null; //Unicode string(128)
        var param_localeid = (retrieveCreditevalutionSetup_Request.context && retrieveCreditevalutionSetup_Request.context.hasOwnProperty('localeId')) ? retrieveCreditevalutionSetup_Request.context["localeId"] : null; //Unicode string(100)
        var param_evaluationmap_id = (retrieveCreditevalutionSetup_Request.context.Header && retrieveCreditevalutionSetup_Request.context.Header.hasOwnProperty('evaluationmap_id')) ? retrieveCreditevalutionSetup_Request.context.Header["evaluationmap_id"] : null; //Integer(32)
        var param_questionnaire = (retrieveCreditevalutionSetup_Request.context.Header && retrieveCreditevalutionSetup_Request.context.Header.hasOwnProperty('questionnaire')) ? retrieveCreditevalutionSetup_Request.context.Header["questionnaire"] : null; //Unicode string(1024)
        var param_loan_type = (retrieveCreditevalutionSetup_Request.context.Header && retrieveCreditevalutionSetup_Request.context.Header.hasOwnProperty('loan_type')) ? retrieveCreditevalutionSetup_Request.context.Header["loan_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        this.callbackfunction = callbackHandler;
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Creditevalution/credit_eval_setup?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&evaluationmap_id=" + param_evaluationmap_id + "&questionnaire=" + param_questionnaire + "&loan_type=" + param_loan_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, Creditevalution_Credit_evalution_retrieveCreditevalutionSetup.retrieveCreditevalutionSetup_ResponseHandler);
        return true;
    },
    
    retrieveCreditevalutionSetup_ResponseHandler: function (responseData, textStatus)
    {
        if (textStatus == "success") {
            var retrieveCreditevalutionSetup_ResponseObject = new retrieveCreditevalutionSetupResponse(responseData, "JSON");
            Creditevalution_Credit_evalution_retrieveCreditevalutionSetup.callbackfunction(retrieveCreditevalutionSetup_ResponseObject, textStatus);
        }
        else {
            Creditevalution_Credit_evalution_retrieveCreditevalutionSetup.callbackfunction(responseData, textStatus);
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
            contextrequestObject = new retrieveCreditevalutionSetupRequestcontext();
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
        var param_evaluationmap_id = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('evaluationmap_id')) ? HeaderrequestObject["evaluationmap_id"] : null; //Integer(32)
        var param_questionnaire = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('questionnaire')) ? HeaderrequestObject["questionnaire"] : null; //Unicode string(1024)
        var param_loan_type = (HeaderrequestObject && HeaderrequestObject.hasOwnProperty('loan_type')) ? HeaderrequestObject["loan_type"] : null; //Unicode string(50)
        
        var contentType = null;
        var responseFormat = "json";
        
        var targetURL = WebAPIProxy.getWebURL() + "/api/Creditevalution/credit_eval_setup?org=" + param_orgnid + "&locn=" + param_locnid + "&user=" + param_userid + "&lang=" + param_localeid + "&evaluationmap_id=" + param_evaluationmap_id + "&questionnaire=" + param_questionnaire + "&loan_type=" + param_loan_type + "";
        
        WebAPIProxy.invokeAPI("GET", targetURL, null, contentType, responseFormat, null, callbackHandler);
        return true;
    }
};
