var responseDataFormat = "JSON";

function saveStockAdjustmentRequest(data)
{
    /**
     * @member {saveStockAdjustmentRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveStockAdjustmentRequestcontext(data['context']);
    }
}

function saveStockAdjustmentRequestcontext(data)
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
     * @member {saveStockAdjustmentRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveStockAdjustmentRequestDetail} Detail
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
            this['Header'] = new saveStockAdjustmentRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveStockAdjustmentRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveStockAdjustmentRequestHeader(data)
{
    /**
     * @member {Int32} adjustment_rowid
     */
    this['adjustment_rowid'] = null;
    
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {String} ic_code
     */
    this['ic_code'] = null;
    
    /**
     * @member {String} ic_desc
     */
    this['ic_desc'] = null;
    
    /**
     * @member {String} adjustment_no
     */
    this['adjustment_no'] = null;
    
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
        
        if(data.hasOwnProperty('orgn_code'))
            this['orgn_code'] = data['orgn_code'];
        
        if(data.hasOwnProperty('ic_code'))
            this['ic_code'] = data['ic_code'];
        
        if(data.hasOwnProperty('ic_desc'))
            this['ic_desc'] = data['ic_desc'];
        
        if(data.hasOwnProperty('adjustment_no'))
            this['adjustment_no'] = data['adjustment_no'];
        
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

function saveStockAdjustmentRequestDetail(data)
{
    /**
     * @member {Int32} adjustmentdtl_rowid
     */
    this['adjustmentdtl_rowid'] = null;
    
    /**
     * @member {String} adjustment_no
     */
    this['adjustment_no'] = null;
    
    /**
     * @member {String} receipt_ref_doc_no
     */
    this['receipt_ref_doc_no'] = null;
    
    /**
     * @member {String} ref_doc_date
     */
    this['ref_doc_date'] = null;
    
    /**
     * @member {String} adjustment_type
     */
    this['adjustment_type'] = null;
    
    /**
     * @member {String} product_catg_code
     */
    this['product_catg_code'] = null;
    
    /**
     * @member {String} product_catg_desc
     */
    this['product_catg_desc'] = null;
    
    /**
     * @member {String} product_subcatg_code
     */
    this['product_subcatg_code'] = null;
    
    /**
     * @member {String} product_subcatg_desc
     */
    this['product_subcatg_desc'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} product_desc
     */
    this['product_desc'] = null;
    
    /**
     * @member {Decimal} adjustment_qty
     */
    this['adjustment_qty'] = null;
    
    /**
     * @member {String} uom_type
     */
    this['uom_type'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
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
        if(data.hasOwnProperty('adjustmentdtl_rowid'))
            this['adjustmentdtl_rowid'] = data['adjustmentdtl_rowid'];
        
        if(data.hasOwnProperty('adjustment_no'))
            this['adjustment_no'] = data['adjustment_no'];
        
        if(data.hasOwnProperty('receipt_ref_doc_no'))
            this['receipt_ref_doc_no'] = data['receipt_ref_doc_no'];
        
        if(data.hasOwnProperty('ref_doc_date'))
            this['ref_doc_date'] = data['ref_doc_date'];
        
        if(data.hasOwnProperty('adjustment_type'))
            this['adjustment_type'] = data['adjustment_type'];
        
        if(data.hasOwnProperty('product_catg_code'))
            this['product_catg_code'] = data['product_catg_code'];
        
        if(data.hasOwnProperty('product_catg_desc'))
            this['product_catg_desc'] = data['product_catg_desc'];
        
        if(data.hasOwnProperty('product_subcatg_code'))
            this['product_subcatg_code'] = data['product_subcatg_code'];
        
        if(data.hasOwnProperty('product_subcatg_desc'))
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
        
        if(data.hasOwnProperty('product_code'))
            this['product_code'] = data['product_code'];
        
        if(data.hasOwnProperty('product_desc'))
            this['product_desc'] = data['product_desc'];
        
        if(data.hasOwnProperty('adjustment_qty'))
            this['adjustment_qty'] = data['adjustment_qty'];
        
        if(data.hasOwnProperty('uom_type'))
            this['uom_type'] = data['uom_type'];
        
        if(data.hasOwnProperty('remarks'))
            this['remarks'] = data['remarks'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveStockAdjustmentResponse(data, format)
{
    /**
     * @member {saveStockAdjustmentResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveStockAdjustmentResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveStockAdjustmentResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveStockAdjustmentResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveStockAdjustmentResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveStockAdjustmentResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveStockAdjustmentResponseApplicationException(data)
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

function saveStockAdjustmentResponsecontext(data)
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
     * @member {saveStockAdjustmentResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveStockAdjustmentResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveStockAdjustmentResponseHeader(data['Header']);
        }
    }
}

function saveStockAdjustmentResponseHeader(data)
{
    /**
     * @member {Int32} adjustment_rowid
     */
    this['adjustment_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['adjustment_rowid'] = data.getElementsByTagName("adjustment_rowid")[0].lastChild.nodeValue;
        }
        else {
            this['adjustment_rowid'] = data['adjustment_rowid'];
        }
    }
}

