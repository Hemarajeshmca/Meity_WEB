var responseDataFormat = "JSON";

function UserValidationRequest(data)
{
    /**
     * @member {UserValidationRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new UserValidationRequestcontext(data['context']);
    }
}

function UserValidationRequestcontext(data)
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
     * @member {UserValidationRequestHeader} Header
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
            this['Header'] = new UserValidationRequestHeader(data['Header']);
    }
}

function UserValidationRequestHeader(data)
{
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
    /**
     * @member {String} user_pwd
     */
    this['user_pwd'] = null;
    
    /**
     * @member {String} mobile_no
     */
    this['mobile_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('user_code'))
            this['user_code'] = data['user_code'];
        
        if(data.hasOwnProperty('user_pwd'))
            this['user_pwd'] = data['user_pwd'];
        
        if(data.hasOwnProperty('mobile_no'))
            this['mobile_no'] = data['mobile_no'];
        
    }
}

function UserValidationResponse(data, format)
{
    /**
     * @member {UserValidationResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {UserValidationResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new UserValidationResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new UserValidationResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new UserValidationResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new UserValidationResponseApplicationException(data['ApplicationException']);
        }
    }
}

function UserValidationResponseApplicationException(data)
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

function UserValidationResponsecontext(data)
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
     * @member {UserValidationResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new UserValidationResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new UserValidationResponseHeader(data['Header']);
        }
    }
}

function UserValidationResponseHeader(data)
{
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} user_type_code
     */
    this['user_type_code'] = null;
    
    /**
     * @member {String} role_code
     */
    this['role_code'] = null;
    
    /**
     * @member {String} email_id
     */
    this['email_id'] = null;
    
    /**
     * @member {String} contact_no
     */
    this['contact_no'] = null;
    
    /**
     * @member {String} valid_till
     */
    this['valid_till'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['user_type_code'] = (data.getElementsByTagName("user_type_code")[0].lastChild != null) ? data.getElementsByTagName("user_type_code")[0].lastChild.nodeValue : "";
            
            this['role_code'] = (data.getElementsByTagName("role_code")[0].lastChild != null) ? data.getElementsByTagName("role_code")[0].lastChild.nodeValue : "";
            
            this['email_id'] = (data.getElementsByTagName("email_id")[0].lastChild != null) ? data.getElementsByTagName("email_id")[0].lastChild.nodeValue : "";
            
            this['contact_no'] = (data.getElementsByTagName("contact_no")[0].lastChild != null) ? data.getElementsByTagName("contact_no")[0].lastChild.nodeValue : "";
            
            this['valid_till'] = (data.getElementsByTagName("valid_till")[0].lastChild != null) ? data.getElementsByTagName("valid_till")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['user_name'] = data['user_name'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['user_type_code'] = data['user_type_code'];
            
            this['role_code'] = data['role_code'];
            
            this['email_id'] = data['email_id'];
            
            this['contact_no'] = data['contact_no'];
            
            this['valid_till'] = data['valid_till'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

