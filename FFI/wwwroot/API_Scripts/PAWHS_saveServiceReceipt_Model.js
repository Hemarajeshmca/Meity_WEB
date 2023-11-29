var responseDataFormat = "JSON";

function PAWHS_saveServiceReceiptRequest(data)
{
    /**
     * @member {PAWHS_saveServiceReceiptRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveServiceReceiptRequestcontext(data['context']);
    }
}

function PAWHS_saveServiceReceiptRequestcontext(data)
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
     * @member {PAWHS_saveServiceReceiptRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveServiceReceiptRequestDetail} Detail
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
            this['Header'] = new PAWHS_saveServiceReceiptRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new PAWHS_saveServiceReceiptRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function PAWHS_saveServiceReceiptRequestHeader(data)
{
    /**
     * @member {Int32} receipt_rowid
     */
    this['receipt_rowid'] = null;
    
    /**
     * @member {String} service_receipt_no
     */
    this['service_receipt_no'] = null;
    
    /**
     * @member {String} warehouse_code
     */
    this['warehouse_code'] = null;
    
    /**
     * @member {String} service_receipt_date
     */
    this['service_receipt_date'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} request_id
     */
    this['request_id'] = null;
    
    /**
     * @member {Decimal} amount
     */
    this['amount'] = null;
    
    /**
     * @member {Decimal} paid_amount
     */
    this['paid_amount'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
    /**
     * @member {String} output_item
     */
    this['output_item'] = null;
    
    /**
     * @member {String} service_type
     */
    this['service_type'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
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
        if(data.hasOwnProperty('receipt_rowid'))
            this['receipt_rowid'] = data['receipt_rowid'];
        
        if(data.hasOwnProperty('service_receipt_no'))
            this['service_receipt_no'] = data['service_receipt_no'];
        
        if(data.hasOwnProperty('warehouse_code'))
            this['warehouse_code'] = data['warehouse_code'];
        
        if(data.hasOwnProperty('service_receipt_date'))
            this['service_receipt_date'] = data['service_receipt_date'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('request_id'))
            this['request_id'] = data['request_id'];
        
        if(data.hasOwnProperty('amount'))
            this['amount'] = data['amount'];
        
        if(data.hasOwnProperty('paid_amount'))
            this['paid_amount'] = data['paid_amount'];
        
        if(data.hasOwnProperty('remarks'))
            this['remarks'] = data['remarks'];
        
        if(data.hasOwnProperty('output_item'))
            this['output_item'] = data['output_item'];
        
        if(data.hasOwnProperty('service_type'))
            this['service_type'] = data['service_type'];
        
        if(data.hasOwnProperty('balance_amount'))
            this['balance_amount'] = data['balance_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveServiceReceiptRequestDetail(data)
{
    /**
     * @member {Int32} receiptdtl_rowid
     */
    this['receiptdtl_rowid'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} uom
     */
    this['uom'] = null;
    
    /**
     * @member {Decimal} quantity
     */
    this['quantity'] = null;
    
    /**
     * @member {Decimal} received_qty
     */
    this['received_qty'] = null;
    
    /**
     * @member {Decimal} accepted_qty
     */
    this['accepted_qty'] = null;
    
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
        if(data.hasOwnProperty('receiptdtl_rowid'))
            this['receiptdtl_rowid'] = data['receiptdtl_rowid'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
        if(data.hasOwnProperty('uom'))
            this['uom'] = data['uom'];
        
        if(data.hasOwnProperty('quantity'))
            this['quantity'] = data['quantity'];
        
        if(data.hasOwnProperty('received_qty'))
            this['received_qty'] = data['received_qty'];
        
        if(data.hasOwnProperty('accepted_qty'))
            this['accepted_qty'] = data['accepted_qty'];
        
        if(data.hasOwnProperty('remarks'))
            this['remarks'] = data['remarks'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveServiceReceiptResponse(data, format)
{
    /**
     * @member {PAWHS_saveServiceReceiptResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveServiceReceiptResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveServiceReceiptResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveServiceReceiptResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveServiceReceiptResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveServiceReceiptResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveServiceReceiptResponseApplicationException(data)
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

function PAWHS_saveServiceReceiptResponsecontext(data)
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
     * @member {PAWHS_saveServiceReceiptResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveServiceReceiptResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveServiceReceiptResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveServiceReceiptResponseHeader(data)
{
    /**
     * @member {Int32} receipt_rowid
     */
    this['receipt_rowid'] = null;
    
    /**
     * @member {String} service_receipt_no
     */
    this['service_receipt_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['receipt_rowid'] = data.getElementsByTagName("receipt_rowid")[0].lastChild.nodeValue;
            
            this['service_receipt_no'] = (data.getElementsByTagName("service_receipt_no")[0].lastChild != null) ? data.getElementsByTagName("service_receipt_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['receipt_rowid'] = data['receipt_rowid'];
            
            this['service_receipt_no'] = data['service_receipt_no'];
        }
    }
}

