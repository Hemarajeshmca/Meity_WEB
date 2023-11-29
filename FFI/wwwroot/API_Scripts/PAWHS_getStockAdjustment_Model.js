var responseDataFormat = "JSON";

function PAWHS_getStockAdjustmentRequest(data)
{
    /**
     * @member {PAWHS_getStockAdjustmentRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getStockAdjustmentRequestcontext(data['context']);
    }
}

function PAWHS_getStockAdjustmentRequestcontext(data)
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
     * @member {PAWHS_getStockAdjustmentRequestHeader} Header
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
            this['Header'] = new PAWHS_getStockAdjustmentRequestHeader(data['Header']);
    }
}

function PAWHS_getStockAdjustmentRequestHeader(data)
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
        if(data.hasOwnProperty('adjustment_rowid'))
            this['adjustment_rowid'] = data['adjustment_rowid'];
        
        if(data.hasOwnProperty('adjustment_no'))
            this['adjustment_no'] = data['adjustment_no'];
        
    }
}

function PAWHS_getStockAdjustmentResponse(data, format)
{
    /**
     * @member {PAWHS_getStockAdjustmentResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getStockAdjustmentResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getStockAdjustmentResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getStockAdjustmentResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getStockAdjustmentResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getStockAdjustmentResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getStockAdjustmentResponseApplicationException(data)
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

function PAWHS_getStockAdjustmentResponsecontext(data)
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
     * @member {PAWHS_getStockAdjustmentResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getStockAdjustmentResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getStockAdjustmentResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new PAWHS_getStockAdjustmentResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getStockAdjustmentResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new PAWHS_getStockAdjustmentResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function PAWHS_getStockAdjustmentResponseHeader(data)
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
     * @member {String} whs_name
     */
    this['whs_name'] = null;
    
    /**
     * @member {String} adjustment_date
     */
    this['adjustment_date'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['adjustment_rowid'] = parseInt(data.getElementsByTagName("adjustment_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("adjustment_no")[0].attributes.length == 0) //Check NULL value
                this['adjustment_no'] = (data.getElementsByTagName("adjustment_no")[0].lastChild != null) ? data.getElementsByTagName("adjustment_no")[0].lastChild.nodeValue : "";
            
            this['whs_code'] = (data.getElementsByTagName("whs_code")[0].lastChild != null) ? data.getElementsByTagName("whs_code")[0].lastChild.nodeValue : "";
            
            this['whs_name'] = (data.getElementsByTagName("whs_name")[0].lastChild != null) ? data.getElementsByTagName("whs_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("adjustment_date")[0].attributes.length == 0) //Check NULL value
                this['adjustment_date'] = (data.getElementsByTagName("adjustment_date")[0].lastChild != null) ? data.getElementsByTagName("adjustment_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status")[0].attributes.length == 0) //Check NULL value
                this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue;
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['adjustment_rowid'] = data['adjustment_rowid'];
            
            this['adjustment_no'] = data['adjustment_no'];
            
            this['whs_code'] = data['whs_code'];
            
            this['whs_name'] = data['whs_name'];
            
            this['adjustment_date'] = data['adjustment_date'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['process_status'] = data['process_status'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function PAWHS_getStockAdjustmentResponseDetail(data)
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
     * @member {String} adjustment_desc
     */
    this['adjustment_desc'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} item_name
     */
    this['item_name'] = null;
    
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
            if(data.getElementsByTagName("adjustmentdtl_rowid")[0].attributes.length == 0) //Check NULL value
                this['adjustmentdtl_rowid'] = parseInt(data.getElementsByTagName("adjustmentdtl_rowid")[0].lastChild.nodeValue);
            
            this['grn_invoiceno'] = (data.getElementsByTagName("grn_invoiceno")[0].lastChild != null) ? data.getElementsByTagName("grn_invoiceno")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("adjustment_type")[0].attributes.length == 0) //Check NULL value
                this['adjustment_type'] = (data.getElementsByTagName("adjustment_type")[0].lastChild != null) ? data.getElementsByTagName("adjustment_type")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("adjustment_desc")[0].attributes.length == 0) //Check NULL value
                this['adjustment_desc'] = (data.getElementsByTagName("adjustment_desc")[0].lastChild != null) ? data.getElementsByTagName("adjustment_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("item_code")[0].attributes.length == 0) //Check NULL value
                this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("item_name")[0].attributes.length == 0) //Check NULL value
                this['item_name'] = (data.getElementsByTagName("item_name")[0].lastChild != null) ? data.getElementsByTagName("item_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("inward_outward")[0].attributes.length == 0) //Check NULL value
                this['inward_outward'] = (data.getElementsByTagName("inward_outward")[0].lastChild != null) ? data.getElementsByTagName("inward_outward")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("uom")[0].attributes.length == 0) //Check NULL value
                this['uom'] = (data.getElementsByTagName("uom")[0].lastChild != null) ? data.getElementsByTagName("uom")[0].lastChild.nodeValue : "";
            
            this['quantity'] = parseFloat(data.getElementsByTagName("quantity")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("adjustment_qty")[0].attributes.length == 0) //Check NULL value
                this['adjustment_qty'] = parseFloat(data.getElementsByTagName("adjustment_qty")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("remarks")[0].attributes.length == 0) //Check NULL value
                this['remarks'] = (data.getElementsByTagName("remarks")[0].lastChild != null) ? data.getElementsByTagName("remarks")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['adjustmentdtl_rowid'] = data['adjustmentdtl_rowid'];
            
            this['grn_invoiceno'] = data['grn_invoiceno'];
            
            this['adjustment_type'] = data['adjustment_type'];
            
            this['adjustment_desc'] = data['adjustment_desc'];
            
            this['item_code'] = data['item_code'];
            
            this['item_name'] = data['item_name'];
            
            this['inward_outward'] = data['inward_outward'];
            
            this['uom'] = data['uom'];
            
            this['quantity'] = data['quantity'];
            
            this['adjustment_qty'] = data['adjustment_qty'];
            
            this['remarks'] = data['remarks'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

