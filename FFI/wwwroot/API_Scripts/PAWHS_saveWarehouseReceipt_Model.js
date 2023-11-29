var responseDataFormat = "JSON";

function PAWHS_saveWarehouseReceiptRequest(data)
{
    /**
     * @member {PAWHS_saveWarehouseReceiptRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveWarehouseReceiptRequestcontext(data['context']);
    }
}

function PAWHS_saveWarehouseReceiptRequestcontext(data)
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
     * @member {PAWHS_saveWarehouseReceiptRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveWarehouseReceiptRequestDetail} Detail
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
            this['Header'] = new PAWHS_saveWarehouseReceiptRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new PAWHS_saveWarehouseReceiptRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function PAWHS_saveWarehouseReceiptRequestHeader(data)
{
    /**
     * @member {Int32} whs_receipt_rowid
     */
    this['whs_receipt_rowid'] = null;
    
    /**
     * @member {String} grn_invoice_no
     */
    this['grn_invoice_no'] = null;
    
    /**
     * @member {String} whs_code
     */
    this['whs_code'] = null;
    
    /**
     * @member {String} receipt_date
     */
    this['receipt_date'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} reg_mobile_no
     */
    this['reg_mobile_no'] = null;
    
    /**
     * @member {String} pickup_request_id
     */
    this['pickup_request_id'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} uom
     */
    this['uom'] = null;
    
    /**
     * @member {String} quantity
     */
    this['quantity'] = null;
    
    /**
     * @member {String} quality
     */
    this['quality'] = null;
    
    /**
     * @member {String} received_qty
     */
    this['received_qty'] = null;
    
    /**
     * @member {String} accepted_qty
     */
    this['accepted_qty'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
    /**
     * @member {Decimal} amount
     */
    this['amount'] = null;
    
    /**
     * @member {Decimal} paid_amount
     */
    this['paid_amount'] = null;
    
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
        if(data.hasOwnProperty('whs_receipt_rowid'))
            this['whs_receipt_rowid'] = data['whs_receipt_rowid'];
        
        if(data.hasOwnProperty('grn_invoice_no'))
            this['grn_invoice_no'] = data['grn_invoice_no'];
        
        if(data.hasOwnProperty('whs_code'))
            this['whs_code'] = data['whs_code'];
        
        if(data.hasOwnProperty('receipt_date'))
            this['receipt_date'] = data['receipt_date'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('reg_mobile_no'))
            this['reg_mobile_no'] = data['reg_mobile_no'];
        
        if(data.hasOwnProperty('pickup_request_id'))
            this['pickup_request_id'] = data['pickup_request_id'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
        if(data.hasOwnProperty('uom'))
            this['uom'] = data['uom'];
        
        if(data.hasOwnProperty('quantity'))
            this['quantity'] = data['quantity'];
        
        if(data.hasOwnProperty('quality'))
            this['quality'] = data['quality'];
        
        if(data.hasOwnProperty('received_qty'))
            this['received_qty'] = data['received_qty'];
        
        if(data.hasOwnProperty('accepted_qty'))
            this['accepted_qty'] = data['accepted_qty'];
        
        if(data.hasOwnProperty('rate'))
            this['rate'] = data['rate'];
        
        if(data.hasOwnProperty('amount'))
            this['amount'] = data['amount'];
        
        if(data.hasOwnProperty('paid_amount'))
            this['paid_amount'] = data['paid_amount'];
        
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

function PAWHS_saveWarehouseReceiptRequestDetail(data)
{
    /**
     * @member {String} quality_code
     */
    this['quality_code'] = null;
    
    /**
     * @member {String} range1
     */
    this['range1'] = null;
    
    /**
     * @member {String} range2
     */
    this['range2'] = null;
    
    /**
     * @member {String} range3
     */
    this['range3'] = null;
    
    /**
     * @member {String} range4
     */
    this['range4'] = null;
    
    /**
     * @member {String} range5
     */
    this['range5'] = null;
    
    /**
     * @member {String} product_range
     */
    this['product_range'] = null;
    
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
        if(data.hasOwnProperty('quality_code'))
            this['quality_code'] = data['quality_code'];
        
        if(data.hasOwnProperty('range1'))
            this['range1'] = data['range1'];
        
        if(data.hasOwnProperty('range2'))
            this['range2'] = data['range2'];
        
        if(data.hasOwnProperty('range3'))
            this['range3'] = data['range3'];
        
        if(data.hasOwnProperty('range4'))
            this['range4'] = data['range4'];
        
        if(data.hasOwnProperty('range5'))
            this['range5'] = data['range5'];
        
        if(data.hasOwnProperty('product_range'))
            this['product_range'] = data['product_range'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveWarehouseReceiptResponse(data, format)
{
    /**
     * @member {PAWHS_saveWarehouseReceiptResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveWarehouseReceiptResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveWarehouseReceiptResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveWarehouseReceiptResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveWarehouseReceiptResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveWarehouseReceiptResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveWarehouseReceiptResponseApplicationException(data)
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

function PAWHS_saveWarehouseReceiptResponsecontext(data)
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
     * @member {PAWHS_saveWarehouseReceiptResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveWarehouseReceiptResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveWarehouseReceiptResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveWarehouseReceiptResponseHeader(data)
{
    /**
     * @member {Int32} whs_receipt_rowid
     */
    this['whs_receipt_rowid'] = null;
    
    /**
     * @member {String} grn_invoice_no
     */
    this['grn_invoice_no'] = null;
    
    /**
     * @member {String} pickup_request_id
     */
    this['pickup_request_id'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['whs_receipt_rowid'] = data.getElementsByTagName("whs_receipt_rowid")[0].lastChild.nodeValue;
            
            this['grn_invoice_no'] = (data.getElementsByTagName("grn_invoice_no")[0].lastChild != null) ? data.getElementsByTagName("grn_invoice_no")[0].lastChild.nodeValue : "";
            
            this['pickup_request_id'] = (data.getElementsByTagName("pickup_request_id")[0].lastChild != null) ? data.getElementsByTagName("pickup_request_id")[0].lastChild.nodeValue : "";
        }
        else {
            this['whs_receipt_rowid'] = data['whs_receipt_rowid'];
            
            this['grn_invoice_no'] = data['grn_invoice_no'];
            
            this['pickup_request_id'] = data['pickup_request_id'];
        }
    }
}

