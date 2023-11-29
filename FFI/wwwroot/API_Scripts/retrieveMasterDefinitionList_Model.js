var responseDataFormat = "JSON";

function retrieveMasterDefinitionListRequest(data)
{
    /**
     * @member {retrieveMasterDefinitionListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveMasterDefinitionListRequestcontext(data['context']);
    }
}

function retrieveMasterDefinitionListRequestcontext(data)
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
     * @member {retrieveMasterDefinitionListRequestHeader} Header
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
            this['Header'] = new retrieveMasterDefinitionListRequestHeader(data['Header']);
    }
}

function retrieveMasterDefinitionListRequestHeader(data)
{
    /**
     * @member {String} parent_code
     */
    this['parent_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('parent_code'))
            this['parent_code'] = data['parent_code'];
        
    }
}

function retrieveMasterDefinitionListResponse(data, format)
{
    /**
     * @member {retrieveMasterDefinitionListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveMasterDefinitionListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveMasterDefinitionListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveMasterDefinitionListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveMasterDefinitionListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveMasterDefinitionListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveMasterDefinitionListResponseApplicationException(data)
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

function retrieveMasterDefinitionListResponsecontext(data)
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
     * @member {retrieveMasterDefinitionListResponseDetail} Detail
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
                Detail.push(new retrieveMasterDefinitionListResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
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
                    Detail.push(new retrieveMasterDefinitionListResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveMasterDefinitionListResponseDetail(data)
{
    /**
     * @member {Int32} master_rowid
     */
    this['master_rowid'] = null;
    
    /**
     * @member {String} parent_code
     */
    this['parent_code'] = null;
    
    /**
     * @member {String} parent_descripton
     */
    this['parent_descripton'] = null;
    
    /**
     * @member {String} master_code
     */
    this['master_code'] = null;
    
    /**
     * @member {String} master_description
     */
    this['master_description'] = null;
    
    /**
     * @member {String} master_ll_description
     */
    this['master_ll_description'] = null;
    
    /**
     * @member {String} depend_desc
     */
    this['depend_desc'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['master_rowid'] = parseInt(data.getElementsByTagName("master_rowid")[0].lastChild.nodeValue);
            
            this['parent_code'] = (data.getElementsByTagName("parent_code")[0].lastChild != null) ? data.getElementsByTagName("parent_code")[0].lastChild.nodeValue : "";
            
            this['parent_descripton'] = (data.getElementsByTagName("parent_descripton")[0].lastChild != null) ? data.getElementsByTagName("parent_descripton")[0].lastChild.nodeValue : "";
            
            this['master_code'] = (data.getElementsByTagName("master_code")[0].lastChild != null) ? data.getElementsByTagName("master_code")[0].lastChild.nodeValue : "";
            
            this['master_description'] = (data.getElementsByTagName("master_description")[0].lastChild != null) ? data.getElementsByTagName("master_description")[0].lastChild.nodeValue : "";
            
            this['master_ll_description'] = (data.getElementsByTagName("master_ll_description")[0].lastChild != null) ? data.getElementsByTagName("master_ll_description")[0].lastChild.nodeValue : "";
            
            this['depend_desc'] = (data.getElementsByTagName("depend_desc")[0].lastChild != null) ? data.getElementsByTagName("depend_desc")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['master_rowid'] = data['master_rowid'];
            
            this['parent_code'] = data['parent_code'];
            
            this['parent_descripton'] = data['parent_descripton'];
            
            this['master_code'] = data['master_code'];
            
            this['master_description'] = data['master_description'];
            
            this['master_ll_description'] = data['master_ll_description'];
            
            this['depend_desc'] = data['depend_desc'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

