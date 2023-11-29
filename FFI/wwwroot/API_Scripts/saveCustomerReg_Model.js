var responseDataFormat = "JSON";

function saveCustomerRegRequest(data)
{
    /**
     * @member {saveCustomerRegRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveCustomerRegRequestcontext(data['context']);
    }
}

function saveCustomerRegRequestcontext(data)
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
     * @member {saveCustomerRegRequestHeader} Header
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
            this['Header'] = new saveCustomerRegRequestHeader(data['Header']);
    }
}

function saveCustomerRegRequestHeader(data)
{
    /**
     * @member {Int32} userregistration_rowid
     */
    this['userregistration_rowid'] = null;
    
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    /**
     * @member {String} user_address
     */
    this['user_address'] = null;
    
    /**
     * @member {String} email_id
     */
    this['email_id'] = null;
    
    /**
     * @member {String} contact_no
     */
    this['contact_no'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('userregistration_rowid'))
            this['userregistration_rowid'] = data['userregistration_rowid'];
        
        if(data.hasOwnProperty('orgn_code'))
            this['orgn_code'] = data['orgn_code'];
        
        if(data.hasOwnProperty('user_name'))
            this['user_name'] = data['user_name'];
        
        if(data.hasOwnProperty('user_address'))
            this['user_address'] = data['user_address'];
        
        if(data.hasOwnProperty('email_id'))
            this['email_id'] = data['email_id'];
        
        if(data.hasOwnProperty('contact_no'))
            this['contact_no'] = data['contact_no'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveCustomerRegResponse(data, format)
{
    /**
     * @member {saveCustomerRegResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveCustomerRegResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveCustomerRegResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveCustomerRegResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveCustomerRegResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveCustomerRegResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveCustomerRegResponseApplicationException(data)
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

function saveCustomerRegResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

