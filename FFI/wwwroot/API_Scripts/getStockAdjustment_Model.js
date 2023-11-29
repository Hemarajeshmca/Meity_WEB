var responseDataFormat = "JSON";

function getStockAdjustmentRequest(data)
{
    /**
     * @member {getStockAdjustmentRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getStockAdjustmentRequestcontext(data['context']);
    }
}

function getStockAdjustmentRequestcontext(data)
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
     * @member {getStockAdjustmentRequestHeader} Header
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
            this['Header'] = new getStockAdjustmentRequestHeader(data['Header']);
    }
}

function getStockAdjustmentRequestHeader(data)
{
    /**
     * @member {Int32} adjustment_rowid
     */
    this['adjustment_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('adjustment_rowid'))
            this['adjustment_rowid'] = data['adjustment_rowid'];
        
    }
}

function getStockAdjustmentResponse(data, format)
{
    /**
     * @member {getStockAdjustmentResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getStockAdjustmentResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getStockAdjustmentResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getStockAdjustmentResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getStockAdjustmentResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getStockAdjustmentResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getStockAdjustmentResponseApplicationException(data)
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

function getStockAdjustmentResponsecontext(data)
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
     * @member {getStockAdjustmentResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getStockAdjustmentResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getStockAdjustmentResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new getStockAdjustmentResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getStockAdjustmentResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new getStockAdjustmentResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function getStockAdjustmentResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['adjustment_rowid'] = data.getElementsByTagName("adjustment_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("orgn_code")[0].attributes.length == 0) //Check NULL value
                this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_code")[0].attributes.length == 0) //Check NULL value
                this['ic_code'] = (data.getElementsByTagName("ic_code")[0].lastChild != null) ? data.getElementsByTagName("ic_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_desc")[0].attributes.length == 0) //Check NULL value
                this['ic_desc'] = (data.getElementsByTagName("ic_desc")[0].lastChild != null) ? data.getElementsByTagName("ic_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("adjustment_no")[0].attributes.length == 0) //Check NULL value
                this['adjustment_no'] = (data.getElementsByTagName("adjustment_no")[0].lastChild != null) ? data.getElementsByTagName("adjustment_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("adjustment_date")[0].attributes.length == 0) //Check NULL value
                this['adjustment_date'] = (data.getElementsByTagName("adjustment_date")[0].lastChild != null) ? data.getElementsByTagName("adjustment_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status")[0].attributes.length == 0) //Check NULL value
                this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue;
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['adjustment_rowid'] = data['adjustment_rowid'];
            
            this['orgn_code'] = data['orgn_code'];
            
            this['ic_code'] = data['ic_code'];
            
            this['ic_desc'] = data['ic_desc'];
            
            this['adjustment_no'] = data['adjustment_no'];
            
            this['adjustment_date'] = data['adjustment_date'];
            
            this['status_code'] = data['status_code'];
            
            this['process_status'] = data['process_status'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function getStockAdjustmentResponseDetail(data)
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
     * @member {String} adjustment_desc
     */
    this['adjustment_desc'] = null;
    
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
     * @member {String} uom_type_desc
     */
    this['uom_type_desc'] = null;
    
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
                this['adjustmentdtl_rowid'] = data.getElementsByTagName("adjustmentdtl_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("adjustment_no")[0].attributes.length == 0) //Check NULL value
                this['adjustment_no'] = (data.getElementsByTagName("adjustment_no")[0].lastChild != null) ? data.getElementsByTagName("adjustment_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("receipt_ref_doc_no")[0].attributes.length == 0) //Check NULL value
                this['receipt_ref_doc_no'] = (data.getElementsByTagName("receipt_ref_doc_no")[0].lastChild != null) ? data.getElementsByTagName("receipt_ref_doc_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ref_doc_date")[0].attributes.length == 0) //Check NULL value
                this['ref_doc_date'] = (data.getElementsByTagName("ref_doc_date")[0].lastChild != null) ? data.getElementsByTagName("ref_doc_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("adjustment_type")[0].attributes.length == 0) //Check NULL value
                this['adjustment_type'] = (data.getElementsByTagName("adjustment_type")[0].lastChild != null) ? data.getElementsByTagName("adjustment_type")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("adjustment_desc")[0].attributes.length == 0) //Check NULL value
                this['adjustment_desc'] = (data.getElementsByTagName("adjustment_desc")[0].lastChild != null) ? data.getElementsByTagName("adjustment_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_catg_code")[0].attributes.length == 0) //Check NULL value
                this['product_catg_code'] = (data.getElementsByTagName("product_catg_code")[0].lastChild != null) ? data.getElementsByTagName("product_catg_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_catg_desc")[0].attributes.length == 0) //Check NULL value
                this['product_catg_desc'] = (data.getElementsByTagName("product_catg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_catg_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_subcatg_code")[0].attributes.length == 0) //Check NULL value
                this['product_subcatg_code'] = (data.getElementsByTagName("product_subcatg_code")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_subcatg_desc")[0].attributes.length == 0) //Check NULL value
                this['product_subcatg_desc'] = (data.getElementsByTagName("product_subcatg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_code")[0].attributes.length == 0) //Check NULL value
                this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_desc")[0].attributes.length == 0) //Check NULL value
                this['product_desc'] = (data.getElementsByTagName("product_desc")[0].lastChild != null) ? data.getElementsByTagName("product_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("adjustment_qty")[0].attributes.length == 0) //Check NULL value
                this['adjustment_qty'] = data.getElementsByTagName("adjustment_qty")[0].lastChild.nodeValue;
            
            this['uom_type'] = (data.getElementsByTagName("uom_type")[0].lastChild != null) ? data.getElementsByTagName("uom_type")[0].lastChild.nodeValue : "";
            
            this['uom_type_desc'] = (data.getElementsByTagName("uom_type_desc")[0].lastChild != null) ? data.getElementsByTagName("uom_type_desc")[0].lastChild.nodeValue : "";
            
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
            
            this['adjustment_no'] = data['adjustment_no'];
            
            this['receipt_ref_doc_no'] = data['receipt_ref_doc_no'];
            
            this['ref_doc_date'] = data['ref_doc_date'];
            
            this['adjustment_type'] = data['adjustment_type'];
            
            this['adjustment_desc'] = data['adjustment_desc'];
            
            this['product_catg_code'] = data['product_catg_code'];
            
            this['product_catg_desc'] = data['product_catg_desc'];
            
            this['product_subcatg_code'] = data['product_subcatg_code'];
            
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
            
            this['product_code'] = data['product_code'];
            
            this['product_desc'] = data['product_desc'];
            
            this['adjustment_qty'] = data['adjustment_qty'].toFixed(2);
            
            this['uom_type'] = data['uom_type'];
            
            this['uom_type_desc'] = data['uom_type_desc'];
            
            this['remarks'] = data['remarks'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

