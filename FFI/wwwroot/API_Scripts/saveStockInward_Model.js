var responseDataFormat = "JSON";

function saveStockInwardRequest(data)
{
    /**
     * @member {saveStockInwardRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveStockInwardRequestcontext(data['context']);
    }
}

function saveStockInwardRequestcontext(data)
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
     * @member {saveStockInwardRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveStockInwardRequestDetail} Detail
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
            this['Header'] = new saveStockInwardRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveStockInwardRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveStockInwardRequestHeader(data)
{
    /**
     * @member {Int32} inward_rowid
     */
    this['inward_rowid'] = null;
    
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {String} ic_code
     */
    this['ic_code'] = null;
    
    /**
     * @member {String} inward_code
     */
    this['inward_code'] = null;
    
    /**
     * @member {String} grn_no
     */
    this['grn_no'] = null;
    
    /**
     * @member {String} grn_date
     */
    this['grn_date'] = null;
    
    /**
     * @member {String} supplier_name
     */
    this['supplier_name'] = null;
    
    /**
     * @member {String} supplier_location
     */
    this['supplier_location'] = null;
    
    /**
     * @member {String} from_state
     */
    this['from_state'] = null;
    
    /**
     * @member {String} Remarks
     */
    this['Remarks'] = null;
    
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
        if(data.hasOwnProperty('inward_rowid'))
            this['inward_rowid'] = data['inward_rowid'];
        
        if(data.hasOwnProperty('orgn_code'))
            this['orgn_code'] = data['orgn_code'];
        
        if(data.hasOwnProperty('ic_code'))
            this['ic_code'] = data['ic_code'];
        
        if(data.hasOwnProperty('inward_code'))
            this['inward_code'] = data['inward_code'];
        
        if(data.hasOwnProperty('grn_no'))
            this['grn_no'] = data['grn_no'];
        
        if(data.hasOwnProperty('grn_date'))
            this['grn_date'] = data['grn_date'];
        
        if(data.hasOwnProperty('supplier_name'))
            this['supplier_name'] = data['supplier_name'];
        
        if(data.hasOwnProperty('supplier_location'))
            this['supplier_location'] = data['supplier_location'];
        
        if(data.hasOwnProperty('from_state'))
            this['from_state'] = data['from_state'];
        
        if(data.hasOwnProperty('Remarks'))
            this['Remarks'] = data['Remarks'];
        
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

function saveStockInwardRequestDetail(data)
{
    /**
     * @member {Int32} inwarddtl_rowid
     */
    this['inwarddtl_rowid'] = null;
    
    /**
     * @member {String} inward_code
     */
    this['inward_code'] = null;
    
    /**
     * @member {String} grn_no
     */
    this['grn_no'] = null;
    
    /**
     * @member {String} product_catg_code
     */
    this['product_catg_code'] = null;
    
    /**
     * @member {String} product_subcatg_code
     */
    this['product_subcatg_code'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} uomtype_code
     */
    this['uomtype_code'] = null;
    
    /**
     * @member {String} batch_no
     */
    this['batch_no'] = null;
    
    /**
     * @member {Decimal} received_qty
     */
    this['received_qty'] = null;
    
    /**
     * @member {Decimal} product_amount
     */
    this['product_amount'] = null;
    
    /**
     * @member {Decimal} tax_amount
     */
    this['tax_amount'] = null;
    
    /**
     * @member {Decimal} transport_amount
     */
    this['transport_amount'] = null;
    
    /**
     * @member {Decimal} discount
     */
    this['discount'] = null;
    
    /**
     * @member {Decimal} net_amount
     */
    this['net_amount'] = null;
    
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
        if(data.hasOwnProperty('inwarddtl_rowid'))
            this['inwarddtl_rowid'] = data['inwarddtl_rowid'];
        
        if(data.hasOwnProperty('inward_code'))
            this['inward_code'] = data['inward_code'];
        
        if(data.hasOwnProperty('grn_no'))
            this['grn_no'] = data['grn_no'];
        
        if(data.hasOwnProperty('product_catg_code'))
            this['product_catg_code'] = data['product_catg_code'];
        
        if(data.hasOwnProperty('product_subcatg_code'))
            this['product_subcatg_code'] = data['product_subcatg_code'];
        
        if(data.hasOwnProperty('product_code'))
            this['product_code'] = data['product_code'];
        
        if(data.hasOwnProperty('uomtype_code'))
            this['uomtype_code'] = data['uomtype_code'];
        
        if(data.hasOwnProperty('batch_no'))
            this['batch_no'] = data['batch_no'];
        
        if(data.hasOwnProperty('received_qty'))
            this['received_qty'] = data['received_qty'];
        
        if(data.hasOwnProperty('product_amount'))
            this['product_amount'] = data['product_amount'];
        
        if(data.hasOwnProperty('tax_amount'))
            this['tax_amount'] = data['tax_amount'];
        
        if(data.hasOwnProperty('transport_amount'))
            this['transport_amount'] = data['transport_amount'];
        
        if(data.hasOwnProperty('discount'))
            this['discount'] = data['discount'];
        
        if(data.hasOwnProperty('net_amount'))
            this['net_amount'] = data['net_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveStockInwardResponse(data, format)
{
    /**
     * @member {saveStockInwardResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveStockInwardResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveStockInwardResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveStockInwardResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveStockInwardResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveStockInwardResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveStockInwardResponseApplicationException(data)
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

function saveStockInwardResponsecontext(data)
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
     * @member {saveStockInwardResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveStockInwardResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveStockInwardResponseHeader(data['Header']);
        }
    }
}

function saveStockInwardResponseHeader(data)
{
    /**
     * @member {Int32} inward_rowid
     */
    this['inward_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['inward_rowid'] = data.getElementsByTagName("inward_rowid")[0].lastChild.nodeValue;
        }
        else {
            this['inward_rowid'] = data['inward_rowid'];
        }
    }
}

