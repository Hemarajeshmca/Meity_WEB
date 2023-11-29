var responseDataFormat = "JSON";

function retrieveCustomerRequest(data)
{
    /**
     * @member {retrieveCustomerRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCustomerRequestcontext(data['context']);
    }
}

function retrieveCustomerRequestcontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    /**
     * @member {String} userId
     */
    this['userId'] = null;
    
    /**
     * @member {String} localeId
     */
    this['localeId'] = null;
    
    /**
     * @member {retrieveCustomerRequestHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('orgnId'))
            this['orgnId'] = data['orgnId'];
        
        if(data.hasOwnProperty('locnId'))
            this['locnId'] = data['locnId'];
        
        if(data.hasOwnProperty('userId'))
            this['userId'] = data['userId'];
        
        if(data.hasOwnProperty('localeId'))
            this['localeId'] = data['localeId'];
        
        if(data.hasOwnProperty('Header') && data['Header'] != null)
            this['Header'] = new retrieveCustomerRequestHeader(data['Header']);
    }
}

function retrieveCustomerRequestHeader(data)
{
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('user_code'))
            this['user_code'] = data['user_code'];
        
    }
}

function retrieveCustomerResponse(data, format)
{
    /**
     * @member {retrieveCustomerResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCustomerResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCustomerResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCustomerResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCustomerResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCustomerResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCustomerResponseApplicationException(data)
{
    /**
    * @member {String} sessionId
    */
    this['errorNumber'] = "";
    
    /**
    * @member {String} sessionId
    */
    this['errorDescription'] = "";
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("errorNumber")[0].lastChild != null)
                this['errorNumber'] = data.getElementsByTagName("errorNumber")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("errorDescription")[0].lastChild != null)
                this['errorDescription'] = data.getElementsByTagName("errorDescription")[0].lastChild.nodeValue;
        }
        else {
            this['errorNumber'] = data['errorNumber'];
            this['errorDescription'] = data['errorDescription'];
        }
    }
}

function retrieveCustomerResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    /**
     * @member {retrieveCustomerResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveCustomerResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveCustomerResponseHeader(data['Header']);
        }
    }
}

function retrieveCustomerResponseHeader(data)
{
    /**
     * @member {String} user_type_code
     */
    this['user_type_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    /**
     * @member {String} user_pwd
     */
    this['user_pwd'] = null;
    
    /**
     * @member {String} valid_till
     */
    this['valid_till'] = null;
    
    /**
     * @member {String} role_code
     */
    this['role_code'] = null;
    
    /**
     * @member {String} facilitator_orgn_code
     */
    this['facilitator_orgn_code'] = null;
    
    /**
     * @member {String} contact_no
     */
    this['contact_no'] = null;
    
    /**
     * @member {String} email_id
     */
    this['email_id'] = null;
    
    /**
     * @member {String} profile_photo
     */
    this['profile_photo'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['user_type_code'] = (data.getElementsByTagName("user_type_code")[0].lastChild != null) ? data.getElementsByTagName("user_type_code")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
            
            this['user_pwd'] = (data.getElementsByTagName("user_pwd")[0].lastChild != null) ? data.getElementsByTagName("user_pwd")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("valid_till")[0].attributes.length == 0) //Check NULL value
                this['valid_till'] = (data.getElementsByTagName("valid_till")[0].lastChild != null) ? data.getElementsByTagName("valid_till")[0].lastChild.nodeValue : "";
            
            this['role_code'] = (data.getElementsByTagName("role_code")[0].lastChild != null) ? data.getElementsByTagName("role_code")[0].lastChild.nodeValue : "";
            
            this['facilitator_orgn_code'] = (data.getElementsByTagName("facilitator_orgn_code")[0].lastChild != null) ? data.getElementsByTagName("facilitator_orgn_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("contact_no")[0].attributes.length == 0) //Check NULL value
                this['contact_no'] = (data.getElementsByTagName("contact_no")[0].lastChild != null) ? data.getElementsByTagName("contact_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("email_id")[0].attributes.length == 0) //Check NULL value
                this['email_id'] = (data.getElementsByTagName("email_id")[0].lastChild != null) ? data.getElementsByTagName("email_id")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("profile_photo")[0].attributes.length == 0) //Check NULL value
                this['profile_photo'] = (data.getElementsByTagName("profile_photo")[0].lastChild != null) ? data.getElementsByTagName("profile_photo")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("row_timestamp")[0].attributes.length == 0) //Check NULL value
                this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['user_type_code'] = data['user_type_code'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['user_name'] = data['user_name'];
            
            this['user_pwd'] = data['user_pwd'];
            
            this['valid_till'] = data['valid_till'];
            
            this['role_code'] = data['role_code'];
            
            this['facilitator_orgn_code'] = data['facilitator_orgn_code'];
            
            this['contact_no'] = data['contact_no'];
            
            this['email_id'] = data['email_id'];
            
            this['profile_photo'] = data['profile_photo'];
            
            this['status_code'] = data['status_code'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

