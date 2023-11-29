var responseDataFormat = "JSON";

function PAWHS_getProductionTransactionRequest(data)
{
    /**
     * @member {PAWHS_getProductionTransactionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getProductionTransactionRequestcontext(data['context']);
    }
}

function PAWHS_getProductionTransactionRequestcontext(data)
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
     * @member {PAWHS_getProductionTransactionRequestHeader} Header
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
            this['Header'] = new PAWHS_getProductionTransactionRequestHeader(data['Header']);
    }
}

function PAWHS_getProductionTransactionRequestHeader(data)
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
        if(data.hasOwnProperty('pro_tran_rowid'))
            this['pro_tran_rowid'] = data['pro_tran_rowid'];
        
        if(data.hasOwnProperty('fg_code'))
            this['fg_code'] = data['fg_code'];
        
    }
}

function PAWHS_getProductionTransactionResponse(data, format)
{
    /**
     * @member {PAWHS_getProductionTransactionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getProductionTransactionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getProductionTransactionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getProductionTransactionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getProductionTransactionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getProductionTransactionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getProductionTransactionResponseApplicationException(data)
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

function PAWHS_getProductionTransactionResponsecontext(data)
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
     * @member {PAWHS_getProductionTransactionResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getProductionTransactionResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getProductionTransactionResponseHeader(data.getElementsByTagName("Header")[0]);
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new PAWHS_getProductionTransactionResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getProductionTransactionResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new PAWHS_getProductionTransactionResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function PAWHS_getProductionTransactionResponseHeader(data)
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
     * @member {String} production_stage_desc
     */
    this['production_stage_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['pro_tran_rowid'] = parseInt(data.getElementsByTagName("pro_tran_rowid")[0].lastChild.nodeValue);
            
            this['fg_code'] = (data.getElementsByTagName("fg_code")[0].lastChild != null) ? data.getElementsByTagName("fg_code")[0].lastChild.nodeValue : "";
            
            this['stage_document_id'] = (data.getElementsByTagName("stage_document_id")[0].lastChild != null) ? data.getElementsByTagName("stage_document_id")[0].lastChild.nodeValue : "";
            
            this['production_stage_code'] = (data.getElementsByTagName("production_stage_code")[0].lastChild != null) ? data.getElementsByTagName("production_stage_code")[0].lastChild.nodeValue : "";
            
            this['production_stage_desc'] = (data.getElementsByTagName("production_stage_desc")[0].lastChild != null) ? data.getElementsByTagName("production_stage_desc")[0].lastChild.nodeValue : "";
            
            this['stage_start_datetime'] = data.getElementsByTagName("stage_start_datetime")[0].lastChild.nodeValue;
            
            this['stage_end_datetime'] = data.getElementsByTagName("stage_end_datetime")[0].lastChild.nodeValue;
            
            this['tran_type'] = (data.getElementsByTagName("tran_type")[0].lastChild != null) ? data.getElementsByTagName("tran_type")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['pro_tran_rowid'] = data['pro_tran_rowid'];
            
            this['fg_code'] = data['fg_code'];
            
            this['stage_document_id'] = data['stage_document_id'];
            
            this['production_stage_code'] = data['production_stage_code'];
            
            this['production_stage_desc'] = data['production_stage_desc'];
            
            this['stage_start_datetime'] = data['stage_start_datetime'];
            
            this['stage_end_datetime'] = data['stage_end_datetime'];
            
            this['tran_type'] = data['tran_type'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getProductionTransactionResponseList(data)
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['pro_tran_dtl_rowid'] = parseInt(data.getElementsByTagName("pro_tran_dtl_rowid")[0].lastChild.nodeValue);
            
            this['input_or_output'] = (data.getElementsByTagName("input_or_output")[0].lastChild != null) ? data.getElementsByTagName("input_or_output")[0].lastChild.nodeValue : "";
            
            this['item'] = (data.getElementsByTagName("item")[0].lastChild != null) ? data.getElementsByTagName("item")[0].lastChild.nodeValue : "";
            
            this['uom'] = (data.getElementsByTagName("uom")[0].lastChild != null) ? data.getElementsByTagName("uom")[0].lastChild.nodeValue : "";
            
            this['qty'] = parseFloat(data.getElementsByTagName("qty")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['pro_tran_dtl_rowid'] = data['pro_tran_dtl_rowid'];
            
            this['input_or_output'] = data['input_or_output'];
            
            this['item'] = data['item'];
            
            this['uom'] = data['uom'];
            
            this['qty'] = data['qty'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

