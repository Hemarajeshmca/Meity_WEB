var responseDataFormat = "JSON";

function retrieveDocumentNumberRequest(data)
{
    /**
     * @member {retrieveDocumentNumberRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveDocumentNumberRequestcontext(data['context']);
    }
}

function retrieveDocumentNumberRequestcontext(data)
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
     * @member {retrieveDocumentNumberRequestHeader} Header
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
            this['Header'] = new retrieveDocumentNumberRequestHeader(data['Header']);
    }
}

function retrieveDocumentNumberRequestHeader(data)
{
    /**
     * @member {String} activity_code
     */
    this['activity_code'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {Int32} docnum_rowid
     */
    this['docnum_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('activity_code'))
            this['activity_code'] = data['activity_code'];
        
        if(data.hasOwnProperty('finyear_code'))
            this['finyear_code'] = data['finyear_code'];
        
        if(data.hasOwnProperty('docnum_rowid'))
            this['docnum_rowid'] = data['docnum_rowid'];
        
    }
}

function retrieveDocumentNumberResponse(data, format)
{
    /**
     * @member {retrieveDocumentNumberResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveDocumentNumberResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveDocumentNumberResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveDocumentNumberResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveDocumentNumberResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveDocumentNumberResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveDocumentNumberResponseApplicationException(data)
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

function retrieveDocumentNumberResponsecontext(data)
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
     * @member {retrieveDocumentNumberResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveDocumentNumberResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveDocumentNumberResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveDocumentNumberResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveDocumentNumberResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveDocumentNumberResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveDocumentNumberResponseHeader(data)
{
    /**
     * @member {String} activity_code
     */
    this['activity_code'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {Int32} docnum_rowid
     */
    this['docnum_rowid'] = null;
    
    /**
     * @member {String} docnum_preview
     */
    this['docnum_preview'] = null;
    
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
            this['activity_code'] = (data.getElementsByTagName("activity_code")[0].lastChild != null) ? data.getElementsByTagName("activity_code")[0].lastChild.nodeValue : "";
            
            this['finyear_code'] = (data.getElementsByTagName("finyear_code")[0].lastChild != null) ? data.getElementsByTagName("finyear_code")[0].lastChild.nodeValue : "";
            
            this['docnum_rowid'] = parseInt(data.getElementsByTagName("docnum_rowid")[0].lastChild.nodeValue);
            
            this['docnum_preview'] = (data.getElementsByTagName("docnum_preview")[0].lastChild != null) ? data.getElementsByTagName("docnum_preview")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['activity_code'] = data['activity_code'];
            
            this['finyear_code'] = data['finyear_code'];
            
            this['docnum_rowid'] = data['docnum_rowid'];
            
            this['docnum_preview'] = data['docnum_preview'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveDocumentNumberResponseDetail(data)
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
            this['docnumformat_rowid'] = parseInt(data.getElementsByTagName("docnumformat_rowid")[0].lastChild.nodeValue);
            
            this['row_slno'] = parseInt(data.getElementsByTagName("row_slno")[0].lastChild.nodeValue);
            
            this['format_type'] = (data.getElementsByTagName("format_type")[0].lastChild != null) ? data.getElementsByTagName("format_type")[0].lastChild.nodeValue : "";
            
            this['format_type_desc'] = (data.getElementsByTagName("format_type_desc")[0].lastChild != null) ? data.getElementsByTagName("format_type_desc")[0].lastChild.nodeValue : "";
            
            this['format_desc'] = (data.getElementsByTagName("format_desc")[0].lastChild != null) ? data.getElementsByTagName("format_desc")[0].lastChild.nodeValue : "";
            
            this['format_value'] = (data.getElementsByTagName("format_value")[0].lastChild != null) ? data.getElementsByTagName("format_value")[0].lastChild.nodeValue : "";
            
            this['format_length'] = (data.getElementsByTagName("format_length")[0].lastChild != null) ? data.getElementsByTagName("format_length")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['docnumformat_rowid'] = data['docnumformat_rowid'];
            
            this['row_slno'] = data['row_slno'];
            
            this['format_type'] = data['format_type'];
            
            this['format_type_desc'] = data['format_type_desc'];
            
            this['format_desc'] = data['format_desc'];
            
            this['format_value'] = data['format_value'];
            
            this['format_length'] = data['format_length'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

