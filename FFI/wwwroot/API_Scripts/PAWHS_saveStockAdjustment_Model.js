var responseDataFormat = "JSON";

function PAWHS_saveStockAdjustmentRequest(data)
{
    /**
     * @member {PAWHS_saveStockAdjustmentRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveStockAdjustmentRequestcontext(data['context']);
    }
}

function PAWHS_saveStockAdjustmentRequestcontext(data)
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
     * @member {PAWHS_saveStockAdjustmentRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveStockAdjustmentRequestDetail} Detail
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
            this['Header'] = new PAWHS_saveStockAdjustmentRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new PAWHS_saveStockAdjustmentRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function PAWHS_saveStockAdjustmentRequestHeader(data)
{
    /**
     * @member {Int32} adjustment_rowid
     */
    this['adjustment_rowid'] = null;
    
    /**
     * @member {String} adjustment_no
     */
    this['adjustment_no'] = null;
    
    /**
     * @member {String} whs_code
     */
    this['whs_code'] = null;
    
    /**
     * @member {String} adjustment_date
     */
    this['adjustment_date'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {DateTime} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('adjustment_rowid'))
            this['adjustment_rowid'] = data['adjustment_rowid'];
        
        if(data.hasOwnProperty('adjustment_no'))
            this['adjustment_no'] = data['adjustment_no'];
        
        if(data.hasOwnProperty('whs_code'))
            this['whs_code'] = data['whs_code'];
        
        if(data.hasOwnProperty('adjustment_date'))
            this['adjustment_date'] = data['adjustment_date'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveStockAdjustmentRequestDetail(data)
{
    /**
     * @member {Int32} adjustmentdtl_rowid
     */
    this['adjustmentdtl_rowid'] = null;
    
    /**
     * @member {String} grn_invoiceno
     */
    this['grn_invoiceno'] = null;
    
    /**
     * @member {String} adjustment_type
     */
    this['adjustment_type'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} inward_outward
     */
    this['inward_outward'] = null;
    
    /**
     * @member {String} uom
     */
    this['uom'] = null;
    
    /**
     * @member {Decimal} quantity
     */
    this['quantity'] = null;
    
    /**
     * @member {Decimal} adjustment_qty
     */
    this['adjustment_qty'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
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
        if(data.hasOwnProperty('adjustmentdtl_rowid'))
            this['adjustmentdtl_rowid'] = data['adjustmentdtl_rowid'];
        
        if(data.hasOwnProperty('grn_invoiceno'))
            this['grn_invoiceno'] = data['grn_invoiceno'];
        
        if(data.hasOwnProperty('adjustment_type'))
            this['adjustment_type'] = data['adjustment_type'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
        if(data.hasOwnProperty('inward_outward'))
            this['inward_outward'] = data['inward_outward'];
        
        if(data.hasOwnProperty('uom'))
            this['uom'] = data['uom'];
        
        if(data.hasOwnProperty('quantity'))
            this['quantity'] = data['quantity'];
        
        if(data.hasOwnProperty('adjustment_qty'))
            this['adjustment_qty'] = data['adjustment_qty'];
        
        if(data.hasOwnProperty('remarks'))
            this['remarks'] = data['remarks'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveStockAdjustmentResponse(data, format)
{
    /**
     * @member {PAWHS_saveStockAdjustmentResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveStockAdjustmentResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveStockAdjustmentResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveStockAdjustmentResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveStockAdjustmentResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveStockAdjustmentResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveStockAdjustmentResponseApplicationException(data)
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

function PAWHS_saveStockAdjustmentResponsecontext(data)
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
     * @member {PAWHS_saveStockAdjustmentResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveStockAdjustmentResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveStockAdjustmentResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveStockAdjustmentResponseHeader(data)
{
    /**
     * @member {Int32} adjustment_rowid
     */
    this['adjustment_rowid'] = null;
    
    /**
     * @member {String} adjustment_no
     */
    this['adjustment_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['adjustment_rowid'] = parseInt(data.getElementsByTagName("adjustment_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("adjustment_no")[0].attributes.length == 0) //Check NULL value
                this['adjustment_no'] = (data.getElementsByTagName("adjustment_no")[0].lastChild != null) ? data.getElementsByTagName("adjustment_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['adjustment_rowid'] = data['adjustment_rowid'];
            
            this['adjustment_no'] = data['adjustment_no'];
        }
    }
}

