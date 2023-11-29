var responseDataFormat = "JSON";

function saveDocumentNumberRequest(data)
{
    /**
     * @member {saveDocumentNumberRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveDocumentNumberRequestcontext(data['context']);
    }
}

function saveDocumentNumberRequestcontext(data)
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
     * @member {saveDocumentNumberRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveDocumentNumberRequestDetail} Detail
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
            this['Header'] = new saveDocumentNumberRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveDocumentNumberRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveDocumentNumberRequestHeader(data)
{
    /**
     * @member {Int32} docnum_rowid
     */
    this['docnum_rowid'] = null;
    
    /**
     * @member {String} activity_code
     */
    this['activity_code'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {String} docnum_preview
     */
    this['docnum_preview'] = null;
    
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
        if(data.hasOwnProperty('docnum_rowid'))
            this['docnum_rowid'] = data['docnum_rowid'];
        
        if(data.hasOwnProperty('activity_code'))
            this['activity_code'] = data['activity_code'];
        
        if(data.hasOwnProperty('finyear_code'))
            this['finyear_code'] = data['finyear_code'];
        
        if(data.hasOwnProperty('docnum_preview'))
            this['docnum_preview'] = data['docnum_preview'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveDocumentNumberRequestDetail(data)
{
    /**
     * @member {Int32} docnumformat_rowid
     */
    this['docnumformat_rowid'] = null;
    
    /**
     * @member {Int16} row_slno
     */
    this['row_slno'] = null;
    
    /**
     * @member {String} format_type
     */
    this['format_type'] = null;
    
    /**
     * @member {String} format_type_desc
     */
    this['format_type_desc'] = null;
    
    /**
     * @member {String} format_desc
     */
    this['format_desc'] = null;
    
    /**
     * @member {String} format_value
     */
    this['format_value'] = null;
    
    /**
     * @member {String} format_length
     */
    this['format_length'] = null;
    
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
        if(data.hasOwnProperty('docnumformat_rowid'))
            this['docnumformat_rowid'] = data['docnumformat_rowid'];
        
        if(data.hasOwnProperty('row_slno'))
            this['row_slno'] = data['row_slno'];
        
        if(data.hasOwnProperty('format_type'))
            this['format_type'] = data['format_type'];
        
        if(data.hasOwnProperty('format_type_desc'))
            this['format_type_desc'] = data['format_type_desc'];
        
        if(data.hasOwnProperty('format_desc'))
            this['format_desc'] = data['format_desc'];
        
        if(data.hasOwnProperty('format_value'))
            this['format_value'] = data['format_value'];
        
        if(data.hasOwnProperty('format_length'))
            this['format_length'] = data['format_length'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveDocumentNumberResponse(data, format)
{
    /**
     * @member {saveDocumentNumberResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveDocumentNumberResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveDocumentNumberResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveDocumentNumberResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveDocumentNumberResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveDocumentNumberResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveDocumentNumberResponseApplicationException(data)
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

function saveDocumentNumberResponsecontext(data)
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
     * @member {saveDocumentNumberResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveDocumentNumberResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveDocumentNumberResponseHeader(data['Header']);
        }
    }
}

function saveDocumentNumberResponseHeader(data)
{
    /**
     * @member {Int32} docnum_rowid
     */
    this['docnum_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['docnum_rowid'] = parseInt(data.getElementsByTagName("docnum_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['docnum_rowid'] = data['docnum_rowid'];
        }
    }
}

