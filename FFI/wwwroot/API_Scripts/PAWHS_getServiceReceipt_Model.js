var responseDataFormat = "JSON";

function PAWHS_getServiceReceiptRequest(data)
{
    /**
     * @member {PAWHS_getServiceReceiptRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getServiceReceiptRequestcontext(data['context']);
    }
}

function PAWHS_getServiceReceiptRequestcontext(data)
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
     * @member {PAWHS_getServiceReceiptRequestHeader} Header
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
            this['Header'] = new PAWHS_getServiceReceiptRequestHeader(data['Header']);
    }
}

function PAWHS_getServiceReceiptRequestHeader(data)
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
        if(data.hasOwnProperty('receipt_rowid'))
            this['receipt_rowid'] = data['receipt_rowid'];
        
        if(data.hasOwnProperty('service_receipt_no'))
            this['service_receipt_no'] = data['service_receipt_no'];
        
    }
}

function PAWHS_getServiceReceiptResponse(data, format)
{
    /**
     * @member {PAWHS_getServiceReceiptResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getServiceReceiptResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getServiceReceiptResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getServiceReceiptResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getServiceReceiptResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getServiceReceiptResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getServiceReceiptResponseApplicationException(data)
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

function PAWHS_getServiceReceiptResponsecontext(data)
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
     * @member {PAWHS_getServiceReceiptResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getServiceReceiptResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getServiceReceiptResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new PAWHS_getServiceReceiptResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getServiceReceiptResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new PAWHS_getServiceReceiptResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function PAWHS_getServiceReceiptResponseHeader(data)
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
     * @member {String} warehouse_name
     */
    this['warehouse_name'] = null;
    
    /**
     * @member {String} service_receipt_date
     */
    this['service_receipt_date'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
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
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
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
            this['receipt_rowid'] = data.getElementsByTagName("receipt_rowid")[0].lastChild.nodeValue;
            
            this['service_receipt_no'] = (data.getElementsByTagName("service_receipt_no")[0].lastChild != null) ? data.getElementsByTagName("service_receipt_no")[0].lastChild.nodeValue : "";
            
            this['warehouse_code'] = (data.getElementsByTagName("warehouse_code")[0].lastChild != null) ? data.getElementsByTagName("warehouse_code")[0].lastChild.nodeValue : "";
            
            this['warehouse_name'] = (data.getElementsByTagName("warehouse_name")[0].lastChild != null) ? data.getElementsByTagName("warehouse_name")[0].lastChild.nodeValue : "";
            
            this['service_receipt_date'] = (data.getElementsByTagName("service_receipt_date")[0].lastChild != null) ? data.getElementsByTagName("service_receipt_date")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['request_id'] = (data.getElementsByTagName("request_id")[0].lastChild != null) ? data.getElementsByTagName("request_id")[0].lastChild.nodeValue : "";
            
            this['amount'] = data.getElementsByTagName("amount")[0].lastChild.nodeValue;
            
            this['paid_amount'] = data.getElementsByTagName("paid_amount")[0].lastChild.nodeValue;
            
            this['balance_amount'] = data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue;
            
            this['remarks'] = (data.getElementsByTagName("remarks")[0].lastChild != null) ? data.getElementsByTagName("remarks")[0].lastChild.nodeValue : "";
            
            this['output_item'] = (data.getElementsByTagName("output_item")[0].lastChild != null) ? data.getElementsByTagName("output_item")[0].lastChild.nodeValue : "";
            
            this['service_type'] = (data.getElementsByTagName("service_type")[0].lastChild != null) ? data.getElementsByTagName("service_type")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['receipt_rowid'] = data['receipt_rowid'];
            
            this['service_receipt_no'] = data['service_receipt_no'];
            
            this['warehouse_code'] = data['warehouse_code'];
            
            this['warehouse_name'] = data['warehouse_name'];
            
            this['service_receipt_date'] = data['service_receipt_date'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['request_id'] = data['request_id'];
            
            this['amount'] = data['amount'].toFixed(2);
            
            this['paid_amount'] = data['paid_amount'].toFixed(2);
            
            this['balance_amount'] = data['balance_amount'].toFixed(2);
            
            this['remarks'] = data['remarks'];
            
            this['output_item'] = data['output_item'];
            
            this['service_type'] = data['service_type'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getServiceReceiptResponseDetail(data)
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
     * @member {String} item_name
     */
    this['item_name'] = null;
    
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
            this['receiptdtl_rowid'] = data.getElementsByTagName("receiptdtl_rowid")[0].lastChild.nodeValue;
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['item_name'] = (data.getElementsByTagName("item_name")[0].lastChild != null) ? data.getElementsByTagName("item_name")[0].lastChild.nodeValue : "";
            
            this['uom'] = (data.getElementsByTagName("uom")[0].lastChild != null) ? data.getElementsByTagName("uom")[0].lastChild.nodeValue : "";
            
            this['quantity'] = data.getElementsByTagName("quantity")[0].lastChild.nodeValue;
            
            this['received_qty'] = data.getElementsByTagName("received_qty")[0].lastChild.nodeValue;
            
            this['accepted_qty'] = data.getElementsByTagName("accepted_qty")[0].lastChild.nodeValue;
            
            this['remarks'] = (data.getElementsByTagName("remarks")[0].lastChild != null) ? data.getElementsByTagName("remarks")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['receiptdtl_rowid'] = data['receiptdtl_rowid'];
            
            this['item_code'] = data['item_code'];
            
            this['item_name'] = data['item_name'];
            
            this['uom'] = data['uom'];
            
            this['quantity'] = data['quantity'].toFixed(2);
            
            this['received_qty'] = data['received_qty'].toFixed(2);
            
            this['accepted_qty'] = data['accepted_qty'].toFixed(2);
            
            this['remarks'] = data['remarks'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

