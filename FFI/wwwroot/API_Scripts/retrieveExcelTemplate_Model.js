var responseDataFormat = "JSON";

function retrieveExcelTemplateRequest(data)
{
    /**
     * @member {retrieveExcelTemplateRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveExcelTemplateRequestcontext(data['context']);
    }
}

function retrieveExcelTemplateRequestcontext(data)
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
     * @member {retrieveExcelTemplateRequestHeader} Header
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
            this['Header'] = new retrieveExcelTemplateRequestHeader(data['Header']);
    }
}

function retrieveExcelTemplateRequestHeader(data)
{
    /**
     * @member {String} excel_upload_code
     */
    this['excel_upload_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('excel_upload_code'))
            this['excel_upload_code'] = data['excel_upload_code'];
        
    }
}

function retrieveExcelTemplateResponse(data, format)
{
    /**
     * @member {retrieveExcelTemplateResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveExcelTemplateResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveExcelTemplateResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveExcelTemplateResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveExcelTemplateResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveExcelTemplateResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveExcelTemplateResponseApplicationException(data)
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

function retrieveExcelTemplateResponsecontext(data)
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
     * @member {retrieveExcelTemplateResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveExcelTemplateResponseexcelColumn} excelColumn
     */
    this['excelColumn'] = null;
    
    /**
     * @member {retrieveExcelTemplateResponseexcelHistory} excelHistory
     */
    this['excelHistory'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveExcelTemplateResponseHeader(data.getElementsByTagName("Header")[0]);
            
            excelColumn = [];
            for(excelColumnchildi = 0; excelColumnchildi < data.getElementsByTagName("excelColumn").length; excelColumnchildi++)
            {
                excelColumn.push(new retrieveExcelTemplateResponseexcelColumn(data.getElementsByTagName("excelColumn")[excelColumnchildi]));
            }
            if(data.getElementsByTagName("excelColumn").length > 0)
                this['excelColumn'] = excelColumn;
            
            excelHistory = [];
            for(excelHistorychildi = 0; excelHistorychildi < data.getElementsByTagName("excelHistory").length; excelHistorychildi++)
            {
                excelHistory.push(new retrieveExcelTemplateResponseexcelHistory(data.getElementsByTagName("excelHistory")[excelHistorychildi]));
            }
            if(data.getElementsByTagName("excelHistory").length > 0)
                this['excelHistory'] = excelHistory;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveExcelTemplateResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('excelColumn') && data['excelColumn'] != null)
            {
                excelColumn = [];
                for(excelColumnindex = 0; excelColumnindex < data['excelColumn'].length; excelColumnindex++)
                {
                    excelColumn.push(new retrieveExcelTemplateResponseexcelColumn(data['excelColumn'][excelColumnindex]));
                }
                this['excelColumn'] = excelColumn;
            }
            
            
            if(data.hasOwnProperty('excelHistory') && data['excelHistory'] != null)
            {
                excelHistory = [];
                for(excelHistoryindex = 0; excelHistoryindex < data['excelHistory'].length; excelHistoryindex++)
                {
                    excelHistory.push(new retrieveExcelTemplateResponseexcelHistory(data['excelHistory'][excelHistoryindex]));
                }
                this['excelHistory'] = excelHistory;
            }
        }
    }
}

function retrieveExcelTemplateResponseHeader(data)
{
    /**
     * @member {String} entity_group_code
     */
    this['entity_group_code'] = null;
    
    /**
     * @member {String} procedure_name
     */
    this['procedure_name'] = null;
    
    /**
     * @member {String} procedure_type
     */
    this['procedure_type'] = null;
    
    /**
     * @member {Int16} no_of_columns
     */
    this['no_of_columns'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['entity_group_code'] = (data.getElementsByTagName("entity_group_code")[0].lastChild != null) ? data.getElementsByTagName("entity_group_code")[0].lastChild.nodeValue : "";
            
            this['procedure_name'] = (data.getElementsByTagName("procedure_name")[0].lastChild != null) ? data.getElementsByTagName("procedure_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("procedure_type")[0].attributes.length == 0) //Check NULL value
                this['procedure_type'] = (data.getElementsByTagName("procedure_type")[0].lastChild != null) ? data.getElementsByTagName("procedure_type")[0].lastChild.nodeValue : "";
            
            this['no_of_columns'] = parseInt(data.getElementsByTagName("no_of_columns")[0].lastChild.nodeValue);
        }
        else {
            this['entity_group_code'] = data['entity_group_code'];
            
            this['procedure_name'] = data['procedure_name'];
            
            this['procedure_type'] = data['procedure_type'];
            
            this['no_of_columns'] = data['no_of_columns'];
        }
    }
}

function retrieveExcelTemplateResponseexcelColumn(data)
{
    /**
     * @member {String} excel_column
     */
    this['excel_column'] = null;
    
    /**
     * @member {String} column_name
     */
    this['column_name'] = null;
    
    /**
     * @member {String} column_type
     */
    this['column_type'] = null;
    
    /**
     * @member {Decimal} max_len
     */
    this['max_len'] = null;
    
    /**
     * @member {Int16} seq_no
     */
    this['seq_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['excel_column'] = (data.getElementsByTagName("excel_column")[0].lastChild != null) ? data.getElementsByTagName("excel_column")[0].lastChild.nodeValue : "";
            
            this['column_name'] = (data.getElementsByTagName("column_name")[0].lastChild != null) ? data.getElementsByTagName("column_name")[0].lastChild.nodeValue : "";
            
            this['column_type'] = (data.getElementsByTagName("column_type")[0].lastChild != null) ? data.getElementsByTagName("column_type")[0].lastChild.nodeValue : "";
            
            this['max_len'] = parseFloat(data.getElementsByTagName("max_len")[0].lastChild.nodeValue);
            
            this['seq_no'] = parseInt(data.getElementsByTagName("seq_no")[0].lastChild.nodeValue);
        }
        else {
            this['excel_column'] = data['excel_column'];
            
            this['column_name'] = data['column_name'];
            
            this['column_type'] = data['column_type'];
            
            this['max_len'] = data['max_len'];
            
            this['seq_no'] = data['seq_no'];
        }
    }
}

function retrieveExcelTemplateResponseexcelHistory(data)
{
    /**
     * @member {String} history_log
     */
    this['history_log'] = null;
    
    /**
     * @member {String} excel_filename
     */
    this['excel_filename'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['history_log'] = (data.getElementsByTagName("history_log")[0].lastChild != null) ? data.getElementsByTagName("history_log")[0].lastChild.nodeValue : "";
            
            this['excel_filename'] = (data.getElementsByTagName("excel_filename")[0].lastChild != null) ? data.getElementsByTagName("excel_filename")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['uploaded_by'] = (data.getElementsByTagName("uploaded_by")[0].lastChild != null) ? data.getElementsByTagName("uploaded_by")[0].lastChild.nodeValue : "";
            
            this['uploaded_datetime'] = data.getElementsByTagName("uploaded_datetime")[0].lastChild.nodeValue;
        }
        else {
            this['history_log'] = data['history_log'];
            
            this['excel_filename'] = data['excel_filename'];
            
            this['status_desc'] = data['status_desc'];
            
            this['uploaded_by'] = data['uploaded_by'];
            
            this['uploaded_datetime'] = data['uploaded_datetime'];
        }
    }
}

