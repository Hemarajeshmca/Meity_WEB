var responseDataFormat = "JSON";

function retrieveUserRoleRequest(data)
{
    /**
     * @member {retrieveUserRoleRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveUserRoleRequestcontext(data['context']);
    }
}

function retrieveUserRoleRequestcontext(data)
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
     * @member {retrieveUserRoleRequestHeader} Header
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
            this['Header'] = new retrieveUserRoleRequestHeader(data['Header']);
    }
}

function retrieveUserRoleRequestHeader(data)
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

function retrieveUserRoleResponse(data, format)
{
    /**
     * @member {retrieveUserRoleResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveUserRoleResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveUserRoleResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveUserRoleResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveUserRoleResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveUserRoleResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveUserRoleResponseApplicationException(data)
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

function retrieveUserRoleResponsecontext(data)
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
     * @member {retrieveUserRoleResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveUserRoleResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveUserRoleResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveUserRoleResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveUserRoleResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveUserRoleResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveUserRoleResponseHeader(data)
{
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    /**
     * @member {String} role_code
     */
    this['role_code'] = null;
    
    /**
     * @member {String} user_pwd
     */
    this['user_pwd'] = null;
    
    /**
     * @member {String} valid_till
     */
    this['valid_till'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
            
            this['role_code'] = (data.getElementsByTagName("role_code")[0].lastChild != null) ? data.getElementsByTagName("role_code")[0].lastChild.nodeValue : "";
            
            this['user_pwd'] = (data.getElementsByTagName("user_pwd")[0].lastChild != null) ? data.getElementsByTagName("user_pwd")[0].lastChild.nodeValue : "";
            
            this['valid_till'] = (data.getElementsByTagName("valid_till")[0].lastChild != null) ? data.getElementsByTagName("valid_till")[0].lastChild.nodeValue : "";
            
            this['contact_no'] = (data.getElementsByTagName("contact_no")[0].lastChild != null) ? data.getElementsByTagName("contact_no")[0].lastChild.nodeValue : "";
            
            this['email_id'] = (data.getElementsByTagName("email_id")[0].lastChild != null) ? data.getElementsByTagName("email_id")[0].lastChild.nodeValue : "";
            
            this['profile_photo'] = (data.getElementsByTagName("profile_photo")[0].lastChild != null) ? data.getElementsByTagName("profile_photo")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("row_timestamp")[0].attributes.length == 0) //Check NULL value
                this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgn_code'] = data['orgn_code'];
            
            this['user_name'] = data['user_name'];
            
            this['role_code'] = data['role_code'];
            
            this['user_pwd'] = data['user_pwd'];
            
            this['valid_till'] = data['valid_till'];
            
            this['contact_no'] = data['contact_no'];
            
            this['email_id'] = data['email_id'];
            
            this['profile_photo'] = data['profile_photo'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveUserRoleResponseDetail(data)
{
    /**
     * @member {String} activity_code
     */
    this['activity_code'] = null;
    
    /**
     * @member {String} activity_desc
     */
    this['activity_desc'] = null;
    
    /**
     * @member {String} add_perm
     */
    this['add_perm'] = null;
    
    /**
     * @member {String} mod_perm
     */
    this['mod_perm'] = null;
    
    /**
     * @member {String} view_perm
     */
    this['view_perm'] = null;
    
    /**
     * @member {String} auth_perm
     */
    this['auth_perm'] = null;
    
    /**
     * @member {String} inactivate_perm
     */
    this['inactivate_perm'] = null;
    
    /**
     * @member {String} print_perm
     */
    this['print_perm'] = null;
    
    /**
     * @member {String} deny_perm
     */
    this['deny_perm'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['activity_code'] = (data.getElementsByTagName("activity_code")[0].lastChild != null) ? data.getElementsByTagName("activity_code")[0].lastChild.nodeValue : "";
            
            this['activity_desc'] = (data.getElementsByTagName("activity_desc")[0].lastChild != null) ? data.getElementsByTagName("activity_desc")[0].lastChild.nodeValue : "";
            
            this['add_perm'] = (data.getElementsByTagName("add_perm")[0].lastChild != null) ? data.getElementsByTagName("add_perm")[0].lastChild.nodeValue : "";
            
            this['mod_perm'] = (data.getElementsByTagName("mod_perm")[0].lastChild != null) ? data.getElementsByTagName("mod_perm")[0].lastChild.nodeValue : "";
            
            this['view_perm'] = (data.getElementsByTagName("view_perm")[0].lastChild != null) ? data.getElementsByTagName("view_perm")[0].lastChild.nodeValue : "";
            
            this['auth_perm'] = (data.getElementsByTagName("auth_perm")[0].lastChild != null) ? data.getElementsByTagName("auth_perm")[0].lastChild.nodeValue : "";
            
            this['inactivate_perm'] = (data.getElementsByTagName("inactivate_perm")[0].lastChild != null) ? data.getElementsByTagName("inactivate_perm")[0].lastChild.nodeValue : "";
            
            this['print_perm'] = (data.getElementsByTagName("print_perm")[0].lastChild != null) ? data.getElementsByTagName("print_perm")[0].lastChild.nodeValue : "";
            
            this['deny_perm'] = (data.getElementsByTagName("deny_perm")[0].lastChild != null) ? data.getElementsByTagName("deny_perm")[0].lastChild.nodeValue : "";
        }
        else {
            this['activity_code'] = data['activity_code'];
            
            this['activity_desc'] = data['activity_desc'];
            
            this['add_perm'] = data['add_perm'];
            
            this['mod_perm'] = data['mod_perm'];
            
            this['view_perm'] = data['view_perm'];
            
            this['auth_perm'] = data['auth_perm'];
            
            this['inactivate_perm'] = data['inactivate_perm'];
            
            this['print_perm'] = data['print_perm'];
            
            this['deny_perm'] = data['deny_perm'];
        }
    }
}

