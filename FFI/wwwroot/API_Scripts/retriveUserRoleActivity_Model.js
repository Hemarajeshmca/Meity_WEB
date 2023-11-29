var responseDataFormat = "JSON";

function retriveUserRoleActivityRequest(data)
{
    /**
     * @member {retriveUserRoleActivityRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retriveUserRoleActivityRequestcontext(data['context']);
    }
}

function retriveUserRoleActivityRequestcontext(data)
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
     * @member {retriveUserRoleActivityRequestHeader} Header
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
            this['Header'] = new retriveUserRoleActivityRequestHeader(data['Header']);
    }
}

function retriveUserRoleActivityRequestHeader(data)
{
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
    /**
     * @member {String} role_code
     */
    this['role_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('user_code'))
            this['user_code'] = data['user_code'];
        
        if(data.hasOwnProperty('role_code'))
            this['role_code'] = data['role_code'];
        
    }
}

function retriveUserRoleActivityResponse(data, format)
{
    /**
     * @member {retriveUserRoleActivityResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retriveUserRoleActivityResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retriveUserRoleActivityResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retriveUserRoleActivityResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retriveUserRoleActivityResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retriveUserRoleActivityResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retriveUserRoleActivityResponseApplicationException(data)
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

function retriveUserRoleActivityResponsecontext(data)
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
     * @member {retriveUserRoleActivityResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retriveUserRoleActivityResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retriveUserRoleActivityResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retriveUserRoleActivityResponseDetail(data)
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
     * @member {String} auth_perm
     */
    this['auth_perm'] = null;
    
    /**
     * @member {String} view_perm
     */
    this['view_perm'] = null;
    
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
            
            this['auth_perm'] = (data.getElementsByTagName("auth_perm")[0].lastChild != null) ? data.getElementsByTagName("auth_perm")[0].lastChild.nodeValue : "";
            
            this['view_perm'] = (data.getElementsByTagName("view_perm")[0].lastChild != null) ? data.getElementsByTagName("view_perm")[0].lastChild.nodeValue : "";
            
            this['inactivate_perm'] = (data.getElementsByTagName("inactivate_perm")[0].lastChild != null) ? data.getElementsByTagName("inactivate_perm")[0].lastChild.nodeValue : "";
            
            this['print_perm'] = (data.getElementsByTagName("print_perm")[0].lastChild != null) ? data.getElementsByTagName("print_perm")[0].lastChild.nodeValue : "";
            
            this['deny_perm'] = (data.getElementsByTagName("deny_perm")[0].lastChild != null) ? data.getElementsByTagName("deny_perm")[0].lastChild.nodeValue : "";
        }
        else {
            this['activity_code'] = data['activity_code'];
            
            this['activity_desc'] = data['activity_desc'];
            
            this['add_perm'] = data['add_perm'];
            
            this['mod_perm'] = data['mod_perm'];
            
            this['auth_perm'] = data['auth_perm'];
            
            this['view_perm'] = data['view_perm'];
            
            this['inactivate_perm'] = data['inactivate_perm'];
            
            this['print_perm'] = data['print_perm'];
            
            this['deny_perm'] = data['deny_perm'];
        }
    }
}

