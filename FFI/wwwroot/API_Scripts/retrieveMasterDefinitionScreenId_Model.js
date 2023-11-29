var responseDataFormat = "JSON";

function retrieveMasterDefinitionScreenIdRequest(data)
{
    /**
     * @member {retrieveMasterDefinitionScreenIdRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveMasterDefinitionScreenIdRequestcontext(data['context']);
    }
}

function retrieveMasterDefinitionScreenIdRequestcontext(data)
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
     * @member {retrieveMasterDefinitionScreenIdRequestHeader} Header
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
            this['Header'] = new retrieveMasterDefinitionScreenIdRequestHeader(data['Header']);
    }
}

function retrieveMasterDefinitionScreenIdRequestHeader(data)
{
    /**
     * @member {String} screen_code
     */
    this['screen_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('screen_code'))
            this['screen_code'] = data['screen_code'];
        
    }
}

function retrieveMasterDefinitionScreenIdResponse(data, format)
{
    /**
     * @member {retrieveMasterDefinitionScreenIdResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveMasterDefinitionScreenIdResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveMasterDefinitionScreenIdResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveMasterDefinitionScreenIdResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveMasterDefinitionScreenIdResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveMasterDefinitionScreenIdResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveMasterDefinitionScreenIdResponseApplicationException(data)
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

function retrieveMasterDefinitionScreenIdResponsecontext(data)
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
     * @member {retrieveMasterDefinitionScreenIdResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveMasterDefinitionScreenIdResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveMasterDefinitionScreenIdResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveMasterDefinitionScreenIdResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveMasterDefinitionScreenIdResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveMasterDefinitionScreenIdResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveMasterDefinitionScreenIdResponseHeader(data)
{
    /**
     * @member {String} screen_description
     */
    this['screen_description'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['screen_description'] = (data.getElementsByTagName("screen_description")[0].lastChild != null) ? data.getElementsByTagName("screen_description")[0].lastChild.nodeValue : "";
        }
        else {
            this['screen_description'] = data['screen_description'];
        }
    }
}

function retrieveMasterDefinitionScreenIdResponseDetail(data)
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
     * @member {String} parent_code
     */
    this['parent_code'] = null;
    
    /**
     * @member {String} parent_description
     */
    this['parent_description'] = null;
    
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
     * @member {String} depend_desc
     */
    this['depend_desc'] = null;
    
    /**
     * @member {String} locallang_flag
     */
    this['locallang_flag'] = null;
    
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
            this['master_rowid'] = parseInt(data.getElementsByTagName("master_rowid")[0].lastChild.nodeValue);
            
            this['row_slno'] = parseInt(data.getElementsByTagName("row_slno")[0].lastChild.nodeValue);
            
            this['parent_code'] = (data.getElementsByTagName("parent_code")[0].lastChild != null) ? data.getElementsByTagName("parent_code")[0].lastChild.nodeValue : "";
            
            this['parent_description'] = (data.getElementsByTagName("parent_description")[0].lastChild != null) ? data.getElementsByTagName("parent_description")[0].lastChild.nodeValue : "";
            
            this['master_code'] = (data.getElementsByTagName("master_code")[0].lastChild != null) ? data.getElementsByTagName("master_code")[0].lastChild.nodeValue : "";
            
            this['master_description'] = (data.getElementsByTagName("master_description")[0].lastChild != null) ? data.getElementsByTagName("master_description")[0].lastChild.nodeValue : "";
            
            this['master_ll_description'] = (data.getElementsByTagName("master_ll_description")[0].lastChild != null) ? data.getElementsByTagName("master_ll_description")[0].lastChild.nodeValue : "";
            
            this['depend_code'] = (data.getElementsByTagName("depend_code")[0].lastChild != null) ? data.getElementsByTagName("depend_code")[0].lastChild.nodeValue : "";
            
            this['depend_desc'] = (data.getElementsByTagName("depend_desc")[0].lastChild != null) ? data.getElementsByTagName("depend_desc")[0].lastChild.nodeValue : "";
            
            this['locallang_flag'] = (data.getElementsByTagName("locallang_flag")[0].lastChild != null) ? data.getElementsByTagName("locallang_flag")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['master_rowid'] = data['master_rowid'];
            
            this['row_slno'] = data['row_slno'];
            
            this['parent_code'] = data['parent_code'];
            
            this['parent_description'] = data['parent_description'];
            
            this['master_code'] = data['master_code'];
            
            this['master_description'] = data['master_description'];
            
            this['master_ll_description'] = data['master_ll_description'];
            
            this['depend_code'] = data['depend_code'];
            
            this['depend_desc'] = data['depend_desc'];
            
            this['locallang_flag'] = data['locallang_flag'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

