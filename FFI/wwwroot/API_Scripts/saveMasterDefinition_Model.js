var responseDataFormat = "JSON";

function saveMasterDefinitionRequest(data)
{
    /**
     * @member {saveMasterDefinitionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveMasterDefinitionRequestcontext(data['context']);
    }
}

function saveMasterDefinitionRequestcontext(data)
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
     * @member {saveMasterDefinitionRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveMasterDefinitionRequestDetail} Detail
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
            this['Header'] = new saveMasterDefinitionRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveMasterDefinitionRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveMasterDefinitionRequestHeader(data)
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

function saveMasterDefinitionRequestDetail(data)
{
    /**
     * @member {Int32} master_rowid
     */
    this['master_rowid'] = null;
    
    /**
     * @member {Int16} row_slno
     */
    this['row_slno'] = null;
    
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
     * @member {String} depend_code
     */
    this['depend_code'] = null;
    
    /**
     * @member {String} locallang_flag
     */
    this['locallang_flag'] = null;
    
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
        if(data.hasOwnProperty('master_rowid'))
            this['master_rowid'] = data['master_rowid'];
        
        if(data.hasOwnProperty('row_slno'))
            this['row_slno'] = data['row_slno'];
        
        if(data.hasOwnProperty('master_code'))
            this['master_code'] = data['master_code'];
        
        if(data.hasOwnProperty('master_description'))
            this['master_description'] = data['master_description'];
        
        if(data.hasOwnProperty('master_ll_description'))
            this['master_ll_description'] = data['master_ll_description'];
        
        if(data.hasOwnProperty('depend_code'))
            this['depend_code'] = data['depend_code'];
        
        if(data.hasOwnProperty('locallang_flag'))
            this['locallang_flag'] = data['locallang_flag'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveMasterDefinitionResponse(data, format)
{
    /**
     * @member {saveMasterDefinitionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveMasterDefinitionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveMasterDefinitionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveMasterDefinitionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveMasterDefinitionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveMasterDefinitionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveMasterDefinitionResponseApplicationException(data)
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

function saveMasterDefinitionResponsecontext(data)
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

