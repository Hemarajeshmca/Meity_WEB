var responseDataFormat = "JSON";

function PAWHS_getWarehouseReceiptRequest(data)
{
    /**
     * @member {PAWHS_getWarehouseReceiptRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getWarehouseReceiptRequestcontext(data['context']);
    }
}

function PAWHS_getWarehouseReceiptRequestcontext(data)
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
     * @member {PAWHS_getWarehouseReceiptRequestHeader} Header
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
            this['Header'] = new PAWHS_getWarehouseReceiptRequestHeader(data['Header']);
    }
}

function PAWHS_getWarehouseReceiptRequestHeader(data)
{
    /**
     * @member {Int32} whs_receipt_rowid
     */
    this['whs_receipt_rowid'] = null;
    
    /**
     * @member {String} grn_invoice_no
     */
    this['grn_invoice_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('whs_receipt_rowid'))
            this['whs_receipt_rowid'] = data['whs_receipt_rowid'];
        
        if(data.hasOwnProperty('grn_invoice_no'))
            this['grn_invoice_no'] = data['grn_invoice_no'];
        
    }
}

function PAWHS_getWarehouseReceiptResponse(data, format)
{
    /**
     * @member {PAWHS_getWarehouseReceiptResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getWarehouseReceiptResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getWarehouseReceiptResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getWarehouseReceiptResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getWarehouseReceiptResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getWarehouseReceiptResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getWarehouseReceiptResponseApplicationException(data)
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

function PAWHS_getWarehouseReceiptResponsecontext(data)
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
     * @member {PAWHS_getWarehouseReceiptResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getWarehouseReceiptResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getWarehouseReceiptResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new PAWHS_getWarehouseReceiptResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getWarehouseReceiptResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new PAWHS_getWarehouseReceiptResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function PAWHS_getWarehouseReceiptResponseHeader(data)
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
     * @member {String} whs_name
     */
    this['whs_name'] = null;
    
    /**
     * @member {String} receipt_date
     */
    this['receipt_date'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
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
     * @member {String} item_name
     */
    this['item_name'] = null;
    
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
     * @member {String} quality_desc
     */
    this['quality_desc'] = null;
    
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
            this['whs_receipt_rowid'] = data.getElementsByTagName("whs_receipt_rowid")[0].lastChild.nodeValue;
            
            this['grn_invoice_no'] = (data.getElementsByTagName("grn_invoice_no")[0].lastChild != null) ? data.getElementsByTagName("grn_invoice_no")[0].lastChild.nodeValue : "";
            
            this['whs_code'] = (data.getElementsByTagName("whs_code")[0].lastChild != null) ? data.getElementsByTagName("whs_code")[0].lastChild.nodeValue : "";
            
            this['whs_name'] = (data.getElementsByTagName("whs_name")[0].lastChild != null) ? data.getElementsByTagName("whs_name")[0].lastChild.nodeValue : "";
            
            this['receipt_date'] = (data.getElementsByTagName("receipt_date")[0].lastChild != null) ? data.getElementsByTagName("receipt_date")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['reg_mobile_no'] = (data.getElementsByTagName("reg_mobile_no")[0].lastChild != null) ? data.getElementsByTagName("reg_mobile_no")[0].lastChild.nodeValue : "";
            
            this['pickup_request_id'] = (data.getElementsByTagName("pickup_request_id")[0].lastChild != null) ? data.getElementsByTagName("pickup_request_id")[0].lastChild.nodeValue : "";
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['item_name'] = (data.getElementsByTagName("item_name")[0].lastChild != null) ? data.getElementsByTagName("item_name")[0].lastChild.nodeValue : "";
            
            this['uom'] = (data.getElementsByTagName("uom")[0].lastChild != null) ? data.getElementsByTagName("uom")[0].lastChild.nodeValue : "";
            
            this['quantity'] = (data.getElementsByTagName("quantity")[0].lastChild != null) ? data.getElementsByTagName("quantity")[0].lastChild.nodeValue : "";
            
            this['quality'] = (data.getElementsByTagName("quality")[0].lastChild != null) ? data.getElementsByTagName("quality")[0].lastChild.nodeValue : "";
            
            this['quality_desc'] = (data.getElementsByTagName("quality_desc")[0].lastChild != null) ? data.getElementsByTagName("quality_desc")[0].lastChild.nodeValue : "";
            
            this['received_qty'] = (data.getElementsByTagName("received_qty")[0].lastChild != null) ? data.getElementsByTagName("received_qty")[0].lastChild.nodeValue : "";
            
            this['accepted_qty'] = (data.getElementsByTagName("accepted_qty")[0].lastChild != null) ? data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue : "";
            
            this['rate'] = data.getElementsByTagName("rate")[0].lastChild.nodeValue;
            
            this['amount'] = data.getElementsByTagName("amount")[0].lastChild.nodeValue;
            
            this['paid_amount'] = data.getElementsByTagName("paid_amount")[0].lastChild.nodeValue;
            
            this['balance_amount'] = data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue;
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['whs_receipt_rowid'] = data['whs_receipt_rowid'];
            
            this['grn_invoice_no'] = data['grn_invoice_no'];
            
            this['whs_code'] = data['whs_code'];
            
            this['whs_name'] = data['whs_name'];
            
            this['receipt_date'] = data['receipt_date'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['reg_mobile_no'] = data['reg_mobile_no'];
            
            this['pickup_request_id'] = data['pickup_request_id'];
            
            this['item_code'] = data['item_code'];
            
            this['item_name'] = data['item_name'];
            
            this['uom'] = data['uom'];
            
            this['quantity'] = data['quantity'];
            
            this['quality'] = data['quality'];
            
            this['quality_desc'] = data['quality_desc'];
            
            this['received_qty'] = data['received_qty'];
            
            this['accepted_qty'] = data['accepted_qty'];
            
            this['rate'] = data['rate'].toFixed(4);
            
            this['amount'] = data['amount'].toFixed(2);
            
            this['paid_amount'] = data['paid_amount'].toFixed(2);
            
            this['balance_amount'] = data['balance_amount'].toFixed(2);
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getWarehouseReceiptResponseDetail(data)
{
    /**
     * @member {String} quality_code
     */
    this['quality_code'] = null;
    
    /**
     * @member {String} quality_desc
     */
    this['quality_desc'] = null;
    
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
     * @member {String} product_range_desc
     */
    this['product_range_desc'] = null;
    
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
            this['quality_code'] = (data.getElementsByTagName("quality_code")[0].lastChild != null) ? data.getElementsByTagName("quality_code")[0].lastChild.nodeValue : "";
            
            this['quality_desc'] = (data.getElementsByTagName("quality_desc")[0].lastChild != null) ? data.getElementsByTagName("quality_desc")[0].lastChild.nodeValue : "";
            
            this['range1'] = (data.getElementsByTagName("range1")[0].lastChild != null) ? data.getElementsByTagName("range1")[0].lastChild.nodeValue : "";
            
            this['range2'] = (data.getElementsByTagName("range2")[0].lastChild != null) ? data.getElementsByTagName("range2")[0].lastChild.nodeValue : "";
            
            this['range3'] = (data.getElementsByTagName("range3")[0].lastChild != null) ? data.getElementsByTagName("range3")[0].lastChild.nodeValue : "";
            
            this['range4'] = (data.getElementsByTagName("range4")[0].lastChild != null) ? data.getElementsByTagName("range4")[0].lastChild.nodeValue : "";
            
            this['range5'] = (data.getElementsByTagName("range5")[0].lastChild != null) ? data.getElementsByTagName("range5")[0].lastChild.nodeValue : "";
            
            this['product_range'] = (data.getElementsByTagName("product_range")[0].lastChild != null) ? data.getElementsByTagName("product_range")[0].lastChild.nodeValue : "";
            
            this['product_range_desc'] = (data.getElementsByTagName("product_range_desc")[0].lastChild != null) ? data.getElementsByTagName("product_range_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['quality_code'] = data['quality_code'];
            
            this['quality_desc'] = data['quality_desc'];
            
            this['range1'] = data['range1'];
            
            this['range2'] = data['range2'];
            
            this['range3'] = data['range3'];
            
            this['range4'] = data['range4'];
            
            this['range5'] = data['range5'];
            
            this['product_range'] = data['product_range'];
            
            this['product_range_desc'] = data['product_range_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

