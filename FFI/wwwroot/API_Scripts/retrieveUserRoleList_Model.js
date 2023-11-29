var responseDataFormat = "JSON";

function retrieveUserRoleListRequest(data)
{
    /**
     * @member {retrieveUserRoleListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveUserRoleListRequestcontext(data['context']);
    }
}

function retrieveUserRoleListRequestcontext(data)
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
        
    }
}

function retrieveUserRoleListResponse(data, format)
{
    /**
     * @member {retrieveUserRoleListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveUserRoleListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveUserRoleListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveUserRoleListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveUserRoleListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveUserRoleListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveUserRoleListResponseApplicationException(data)
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

function retrieveUserRoleListResponsecontext(data)
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
     * @member {retrieveUserRoleListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new retrieveUserRoleListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new retrieveUserRoleListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveUserRoleListResponseList(data)
{
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {String} orgn_desc
     */
    this['orgn_desc'] = null;
    
    /**
     * @member {String} user_code
     */
    this['user_code'] = null;
    
    /**
     * @member {String} user_name
     */
    this['user_name'] = null;
    
    /**
     * @member {String} role_code
     */
    this['role_code'] = null;
    
    /**
     * @member {String} role_name
     */
    this['role_name'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            this['orgn_desc'] = (data.getElementsByTagName("orgn_desc")[0].lastChild != null) ? data.getElementsByTagName("orgn_desc")[0].lastChild.nodeValue : "";
            
            this['user_code'] = (data.getElementsByTagName("user_code")[0].lastChild != null) ? data.getElementsByTagName("user_code")[0].lastChild.nodeValue : "";
            
            this['user_name'] = (data.getElementsByTagName("user_name")[0].lastChild != null) ? data.getElementsByTagName("user_name")[0].lastChild.nodeValue : "";
            
            this['role_code'] = (data.getElementsByTagName("role_code")[0].lastChild != null) ? data.getElementsByTagName("role_code")[0].lastChild.nodeValue : "";
            
            this['role_name'] = (data.getElementsByTagName("role_name")[0].lastChild != null) ? data.getElementsByTagName("role_name")[0].lastChild.nodeValue : "";
            
            this['valid_till'] = (data.getElementsByTagName("valid_till")[0].lastChild != null) ? data.getElementsByTagName("valid_till")[0].lastChild.nodeValue : "";
            
            this['contact_no'] = (data.getElementsByTagName("contact_no")[0].lastChild != null) ? data.getElementsByTagName("contact_no")[0].lastChild.nodeValue : "";
            
            this['email_id'] = (data.getElementsByTagName("email_id")[0].lastChild != null) ? data.getElementsByTagName("email_id")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgn_code'] = data['orgn_code'];
            
            this['orgn_desc'] = data['orgn_desc'];
            
            this['user_code'] = data['user_code'];
            
            this['user_name'] = data['user_name'];
            
            this['role_code'] = data['role_code'];
            
            this['role_name'] = data['role_name'];
            
            this['valid_till'] = data['valid_till'];
            
            this['contact_no'] = data['contact_no'];
            
            this['email_id'] = data['email_id'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

