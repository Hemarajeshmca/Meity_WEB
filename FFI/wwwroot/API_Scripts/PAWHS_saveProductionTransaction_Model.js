var responseDataFormat = "JSON";

function PAWHS_saveProductionTransactionRequest(data)
{
    /**
     * @member {PAWHS_saveProductionTransactionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveProductionTransactionRequestcontext(data['context']);
    }
}

function PAWHS_saveProductionTransactionRequestcontext(data)
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
     * @member {PAWHS_saveProductionTransactionRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveProductionTransactionRequestList} List
     */
    this['List'] = null;
    
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
            this['Header'] = new PAWHS_saveProductionTransactionRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('List') && data['List'] != null)
        {
            List = [];
            for(Listindex = 0; Listindex < data['List'].length; Listindex++)
            {
                List.push(new PAWHS_saveProductionTransactionRequestList(data['List'][Listindex]));
            }
            this['List'] = List;
        }
    }
}

function PAWHS_saveProductionTransactionRequestHeader(data)
{
    /**
     * @member {Int32} pro_tran_rowid
     */
    this['pro_tran_rowid'] = null;
    
    /**
     * @member {String} fg_code
     */
    this['fg_code'] = null;
    
    /**
     * @member {String} stage_document_id
     */
    this['stage_document_id'] = null;
    
    /**
     * @member {String} production_stage_code
     */
    this['production_stage_code'] = null;
    
    /**
     * @member {DateTime} stage_start_datetime
     */
    this['stage_start_datetime'] = null;
    
    /**
     * @member {DateTime} stage_end_datetime
     */
    this['stage_end_datetime'] = null;
    
    /**
     * @member {String} tran_type
     */
    this['tran_type'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('pro_tran_rowid'))
            this['pro_tran_rowid'] = data['pro_tran_rowid'];
        
        if(data.hasOwnProperty('fg_code'))
            this['fg_code'] = data['fg_code'];
        
        if(data.hasOwnProperty('stage_document_id'))
            this['stage_document_id'] = data['stage_document_id'];
        
        if(data.hasOwnProperty('production_stage_code'))
            this['production_stage_code'] = data['production_stage_code'];
        
        if(data.hasOwnProperty('stage_start_datetime'))
            this['stage_start_datetime'] = data['stage_start_datetime'];
        
        if(data.hasOwnProperty('stage_end_datetime'))
            this['stage_end_datetime'] = data['stage_end_datetime'];
        
        if(data.hasOwnProperty('tran_type'))
            this['tran_type'] = data['tran_type'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveProductionTransactionRequestList(data)
{
    /**
     * @member {Int32} pro_tran_dtl_rowid
     */
    this['pro_tran_dtl_rowid'] = null;
    
    /**
     * @member {String} input_or_output
     */
    this['input_or_output'] = null;
    
    /**
     * @member {String} item
     */
    this['item'] = null;
    
    /**
     * @member {String} uom
     */
    this['uom'] = null;
    
    /**
     * @member {Decimal} qty
     */
    this['qty'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('pro_tran_dtl_rowid'))
            this['pro_tran_dtl_rowid'] = data['pro_tran_dtl_rowid'];
        
        if(data.hasOwnProperty('input_or_output'))
            this['input_or_output'] = data['input_or_output'];
        
        if(data.hasOwnProperty('item'))
            this['item'] = data['item'];
        
        if(data.hasOwnProperty('uom'))
            this['uom'] = data['uom'];
        
        if(data.hasOwnProperty('qty'))
            this['qty'] = data['qty'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveProductionTransactionResponse(data, format)
{
    /**
     * @member {PAWHS_saveProductionTransactionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveProductionTransactionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveProductionTransactionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveProductionTransactionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveProductionTransactionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveProductionTransactionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveProductionTransactionResponseApplicationException(data)
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

function PAWHS_saveProductionTransactionResponsecontext(data)
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
     * @member {PAWHS_saveProductionTransactionResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveProductionTransactionResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveProductionTransactionResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveProductionTransactionResponseHeader(data)
{
    /**
     * @member {Int32} pro_tran_rowid
     */
    this['pro_tran_rowid'] = null;
    
    /**
     * @member {String} fg_code
     */
    this['fg_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['pro_tran_rowid'] = parseInt(data.getElementsByTagName("pro_tran_rowid")[0].lastChild.nodeValue);
            
            this['fg_code'] = (data.getElementsByTagName("fg_code")[0].lastChild != null) ? data.getElementsByTagName("fg_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['pro_tran_rowid'] = data['pro_tran_rowid'];
            
            this['fg_code'] = data['fg_code'];
        }
    }
}

