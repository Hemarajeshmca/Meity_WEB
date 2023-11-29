var responseDataFormat = "JSON";

function retrieveRoleActivityRequest(data)
{
    /**
     * @member {retrieveRoleActivityRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveRoleActivityRequestcontext(data['context']);
    }
}

function retrieveRoleActivityRequestcontext(data)
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
     * @member {retrieveRoleActivityRequestHeader} Header
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
            this['Header'] = new retrieveRoleActivityRequestHeader(data['Header']);
    }
}

function retrieveRoleActivityRequestHeader(data)
{
    /**
     * @member {Int32} role_rowid
     */
    this['role_rowid'] = null;
    
    /**
     * @member {String} orgn_level
     */
    this['orgn_level'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('role_rowid'))
            this['role_rowid'] = data['role_rowid'];
        
        if(data.hasOwnProperty('orgn_level'))
            this['orgn_level'] = data['orgn_level'];
        
    }
}

function retrieveRoleActivityResponse(data, format)
{
    /**
     * @member {retrieveRoleActivityResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveRoleActivityResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveRoleActivityResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveRoleActivityResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveRoleActivityResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveRoleActivityResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveRoleActivityResponseApplicationException(data)
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

function retrieveRoleActivityResponsecontext(data)
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
     * @member {retrieveRoleActivityResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveRoleActivityResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveRoleActivityResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveRoleActivityResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveRoleActivityResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveRoleActivityResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveRoleActivityResponseHeader(data)
{
    /**
     * @member {String} role_code
     */
    this['role_code'] = null;
    
    /**
     * @member {String} role_name
     */
    this['role_name'] = null;
    
    /**
     * @member {String} orgn_level
     */
    this['orgn_level'] = null;
    
    /**
     * @member {String} orgn_level_desc
     */
    this['orgn_level_desc'] = null;
    
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
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['role_code'] = (data.getElementsByTagName("role_code")[0].lastChild != null) ? data.getElementsByTagName("role_code")[0].lastChild.nodeValue : "";
            
            this['role_name'] = (data.getElementsByTagName("role_name")[0].lastChild != null) ? data.getElementsByTagName("role_name")[0].lastChild.nodeValue : "";
            
            this['orgn_level'] = (data.getElementsByTagName("orgn_level")[0].lastChild != null) ? data.getElementsByTagName("orgn_level")[0].lastChild.nodeValue : "";
            
            this['orgn_level_desc'] = (data.getElementsByTagName("orgn_level_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_level_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['role_code'] = data['role_code'];
            
            this['role_name'] = data['role_name'];
            
            this['orgn_level'] = data['orgn_level'];
            
            this['orgn_level_desc'] = data['orgn_level_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveRoleActivityResponseDetail(data)
{
    /**
     * @member {Int32} rolemenu_rowid
     */
    this['rolemenu_rowid'] = null;
    
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
            this['rolemenu_rowid'] = parseInt(data.getElementsByTagName("rolemenu_rowid")[0].lastChild.nodeValue);
            
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
            this['rolemenu_rowid'] = data['rolemenu_rowid'];
            
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

