var responseDataFormat = "JSON";

function saveExcelHistoryLogRequest(data)
{
    /**
     * @member {saveExcelHistoryLogRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveExcelHistoryLogRequestcontext(data['context']);
    }
}

function saveExcelHistoryLogRequestcontext(data)
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
     * @member {saveExcelHistoryLogRequestexcelHistory} excelHistory
     */
    this['excelHistory'] = null;
    
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
        
        if(data.hasOwnProperty('excelHistory') && data['excelHistory'] != null)
            this['excelHistory'] = new saveExcelHistoryLogRequestexcelHistory(data['excelHistory']);
    }
}

function saveExcelHistoryLogRequestexcelHistory(data)
{
    /**
     * @member {String} excel_upload_code
     */
    this['excel_upload_code'] = null;
    
    /**
     * @member {String} excel_filename
     */
    this['excel_filename'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} uploaded_by
     */
    this['uploaded_by'] = null;
    
    /**
     * @member {DateTime} uploaded_datetime
     */
    this['uploaded_datetime'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('excel_upload_code'))
            this['excel_upload_code'] = data['excel_upload_code'];
        
        if(data.hasOwnProperty('excel_filename'))
            this['excel_filename'] = data['excel_filename'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('uploaded_by'))
            this['uploaded_by'] = data['uploaded_by'];
        
        if(data.hasOwnProperty('uploaded_datetime'))
            this['uploaded_datetime'] = data['uploaded_datetime'];
        
    }
}

function saveExcelHistoryLogResponse(data, format)
{
    /**
     * @member {saveExcelHistoryLogResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveExcelHistoryLogResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveExcelHistoryLogResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveExcelHistoryLogResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveExcelHistoryLogResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveExcelHistoryLogResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveExcelHistoryLogResponseApplicationException(data)
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

function saveExcelHistoryLogResponsecontext(data)
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

