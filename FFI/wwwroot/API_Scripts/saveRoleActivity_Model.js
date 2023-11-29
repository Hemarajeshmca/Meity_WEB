var responseDataFormat = "JSON";

function saveRoleActivityRequest(data)
{
    /**
     * @member {saveRoleActivityRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveRoleActivityRequestcontext(data['context']);
    }
}

function saveRoleActivityRequestcontext(data)
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
     * @member {saveRoleActivityRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveRoleActivityRequestDetail} Detail
     */
    this['Detail'] = null;
    
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
            this['Header'] = new saveRoleActivityRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveRoleActivityRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveRoleActivityRequestHeader(data)
{
    /**
     * @member {Int32} role_rowid
     */
    this['role_rowid'] = null;
    
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
     * @member {String} status_code
     */
    this['status_code'] = null;
    
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
        if(data.hasOwnProperty('role_rowid'))
            this['role_rowid'] = data['role_rowid'];
        
        if(data.hasOwnProperty('role_code'))
            this['role_code'] = data['role_code'];
        
        if(data.hasOwnProperty('role_name'))
            this['role_name'] = data['role_name'];
        
        if(data.hasOwnProperty('orgn_level'))
            this['orgn_level'] = data['orgn_level'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveRoleActivityRequestDetail(data)
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
        if(data.hasOwnProperty('rolemenu_rowid'))
            this['rolemenu_rowid'] = data['rolemenu_rowid'];
        
        if(data.hasOwnProperty('activity_code'))
            this['activity_code'] = data['activity_code'];
        
        if(data.hasOwnProperty('add_perm'))
            this['add_perm'] = data['add_perm'];
        
        if(data.hasOwnProperty('mod_perm'))
            this['mod_perm'] = data['mod_perm'];
        
        if(data.hasOwnProperty('view_perm'))
            this['view_perm'] = data['view_perm'];
        
        if(data.hasOwnProperty('auth_perm'))
            this['auth_perm'] = data['auth_perm'];
        
        if(data.hasOwnProperty('inactivate_perm'))
            this['inactivate_perm'] = data['inactivate_perm'];
        
        if(data.hasOwnProperty('print_perm'))
            this['print_perm'] = data['print_perm'];
        
        if(data.hasOwnProperty('deny_perm'))
            this['deny_perm'] = data['deny_perm'];
        
    }
}

function saveRoleActivityResponse(data, format)
{
    /**
     * @member {saveRoleActivityResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveRoleActivityResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveRoleActivityResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveRoleActivityResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveRoleActivityResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveRoleActivityResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveRoleActivityResponseApplicationException(data)
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

function saveRoleActivityResponsecontext(data)
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
     * @member {saveRoleActivityResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveRoleActivityResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveRoleActivityResponseHeader(data['Header']);
        }
    }
}

function saveRoleActivityResponseHeader(data)
{
    /**
     * @member {Int32} role_rowid
     */
    this['role_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['role_rowid'] = parseInt(data.getElementsByTagName("role_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['role_rowid'] = data['role_rowid'];
        }
    }
}

