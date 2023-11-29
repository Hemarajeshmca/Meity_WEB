var responseDataFormat = "JSON";

function getStockInwardRequest(data)
{
    /**
     * @member {getStockInwardRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getStockInwardRequestcontext(data['context']);
    }
}

function getStockInwardRequestcontext(data)
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
     * @member {getStockInwardRequestHeader} Header
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
            this['Header'] = new getStockInwardRequestHeader(data['Header']);
    }
}

function getStockInwardRequestHeader(data)
{
    /**
     * @member {Int32} inward_rowid
     */
    this['inward_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('inward_rowid'))
            this['inward_rowid'] = data['inward_rowid'];
        
    }
}

function getStockInwardResponse(data, format)
{
    /**
     * @member {getStockInwardResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getStockInwardResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getStockInwardResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getStockInwardResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getStockInwardResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getStockInwardResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getStockInwardResponseApplicationException(data)
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

function getStockInwardResponsecontext(data)
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
     * @member {getStockInwardResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getStockInwardResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getStockInwardResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new getStockInwardResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getStockInwardResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new getStockInwardResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function getStockInwardResponseHeader(data)
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
     * @member {String} ic_desc
     */
    this['ic_desc'] = null;
    
    /**
     * @member {String} inward_code
     */
    this['inward_code'] = null;
    
    /**
     * @member {String} inward_desc
     */
    this['inward_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['inward_rowid'] = data.getElementsByTagName("inward_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("orgn_code")[0].attributes.length == 0) //Check NULL value
                this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_code")[0].attributes.length == 0) //Check NULL value
                this['ic_code'] = (data.getElementsByTagName("ic_code")[0].lastChild != null) ? data.getElementsByTagName("ic_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_desc")[0].attributes.length == 0) //Check NULL value
                this['ic_desc'] = (data.getElementsByTagName("ic_desc")[0].lastChild != null) ? data.getElementsByTagName("ic_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("inward_code")[0].attributes.length == 0) //Check NULL value
                this['inward_code'] = (data.getElementsByTagName("inward_code")[0].lastChild != null) ? data.getElementsByTagName("inward_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("inward_desc")[0].attributes.length == 0) //Check NULL value
                this['inward_desc'] = (data.getElementsByTagName("inward_desc")[0].lastChild != null) ? data.getElementsByTagName("inward_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("grn_no")[0].attributes.length == 0) //Check NULL value
                this['grn_no'] = (data.getElementsByTagName("grn_no")[0].lastChild != null) ? data.getElementsByTagName("grn_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("grn_date")[0].attributes.length == 0) //Check NULL value
                this['grn_date'] = (data.getElementsByTagName("grn_date")[0].lastChild != null) ? data.getElementsByTagName("grn_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("supplier_name")[0].attributes.length == 0) //Check NULL value
                this['supplier_name'] = (data.getElementsByTagName("supplier_name")[0].lastChild != null) ? data.getElementsByTagName("supplier_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("supplier_location")[0].attributes.length == 0) //Check NULL value
                this['supplier_location'] = (data.getElementsByTagName("supplier_location")[0].lastChild != null) ? data.getElementsByTagName("supplier_location")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("from_state")[0].attributes.length == 0) //Check NULL value
                this['from_state'] = (data.getElementsByTagName("from_state")[0].lastChild != null) ? data.getElementsByTagName("from_state")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("Remarks")[0].attributes.length == 0) //Check NULL value
                this['Remarks'] = (data.getElementsByTagName("Remarks")[0].lastChild != null) ? data.getElementsByTagName("Remarks")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status")[0].attributes.length == 0) //Check NULL value
                this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue;
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['inward_rowid'] = data['inward_rowid'];
            
            this['orgn_code'] = data['orgn_code'];
            
            this['ic_code'] = data['ic_code'];
            
            this['ic_desc'] = data['ic_desc'];
            
            this['inward_code'] = data['inward_code'];
            
            this['inward_desc'] = data['inward_desc'];
            
            this['grn_no'] = data['grn_no'];
            
            this['grn_date'] = data['grn_date'];
            
            this['supplier_name'] = data['supplier_name'];
            
            this['supplier_location'] = data['supplier_location'];
            
            this['from_state'] = data['from_state'];
            
            this['Remarks'] = data['Remarks'];
            
            this['status_code'] = data['status_code'];
            
            this['process_status'] = data['process_status'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function getStockInwardResponseDetail(data)
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
     * @member {String} inward_desc
     */
    this['inward_desc'] = null;
    
    /**
     * @member {String} grn_no
     */
    this['grn_no'] = null;
    
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
     * @member {String} uomtype_code
     */
    this['uomtype_code'] = null;
    
    /**
     * @member {String} uomtype_desc
     */
    this['uomtype_desc'] = null;
    
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
     * @member {Decimal} net_amount
     */
    this['net_amount'] = null;
    
    /**
     * @member {Decimal} transport_amount
     */
    this['transport_amount'] = null;
    
    /**
     * @member {Decimal} discount
     */
    this['discount'] = null;
    
    /**
     * @member {Decimal} cgst_rate
     */
    this['cgst_rate'] = null;
    
    /**
     * @member {Decimal} sgst_rate
     */
    this['sgst_rate'] = null;
    
    /**
     * @member {Decimal} igst_rate
     */
    this['igst_rate'] = null;
    
    /**
     * @member {Decimal} ugst_rate
     */
    this['ugst_rate'] = null;
    
    /**
     * @member {Decimal} tax_rate
     */
    this['tax_rate'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_desc
     */
    this['hsn_desc'] = null;
    
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
            this['inwarddtl_rowid'] = data.getElementsByTagName("inwarddtl_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("inward_code")[0].attributes.length == 0) //Check NULL value
                this['inward_code'] = (data.getElementsByTagName("inward_code")[0].lastChild != null) ? data.getElementsByTagName("inward_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("inward_desc")[0].attributes.length == 0) //Check NULL value
                this['inward_desc'] = (data.getElementsByTagName("inward_desc")[0].lastChild != null) ? data.getElementsByTagName("inward_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("grn_no")[0].attributes.length == 0) //Check NULL value
                this['grn_no'] = (data.getElementsByTagName("grn_no")[0].lastChild != null) ? data.getElementsByTagName("grn_no")[0].lastChild.nodeValue : "";
            
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
            
            if(data.getElementsByTagName("uomtype_code")[0].attributes.length == 0) //Check NULL value
                this['uomtype_code'] = (data.getElementsByTagName("uomtype_code")[0].lastChild != null) ? data.getElementsByTagName("uomtype_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("uomtype_desc")[0].attributes.length == 0) //Check NULL value
                this['uomtype_desc'] = (data.getElementsByTagName("uomtype_desc")[0].lastChild != null) ? data.getElementsByTagName("uomtype_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("batch_no")[0].attributes.length == 0) //Check NULL value
                this['batch_no'] = (data.getElementsByTagName("batch_no")[0].lastChild != null) ? data.getElementsByTagName("batch_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("received_qty")[0].attributes.length == 0) //Check NULL value
                this['received_qty'] = data.getElementsByTagName("received_qty")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("product_amount")[0].attributes.length == 0) //Check NULL value
                this['product_amount'] = data.getElementsByTagName("product_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("tax_amount")[0].attributes.length == 0) //Check NULL value
                this['tax_amount'] = data.getElementsByTagName("tax_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("net_amount")[0].attributes.length == 0) //Check NULL value
                this['net_amount'] = data.getElementsByTagName("net_amount")[0].lastChild.nodeValue;
            
            this['transport_amount'] = data.getElementsByTagName("transport_amount")[0].lastChild.nodeValue;
            
            this['discount'] = data.getElementsByTagName("discount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("cgst_rate")[0].attributes.length == 0) //Check NULL value
                this['cgst_rate'] = data.getElementsByTagName("cgst_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("sgst_rate")[0].attributes.length == 0) //Check NULL value
                this['sgst_rate'] = data.getElementsByTagName("sgst_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("igst_rate")[0].attributes.length == 0) //Check NULL value
                this['igst_rate'] = data.getElementsByTagName("igst_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("ugst_rate")[0].attributes.length == 0) //Check NULL value
                this['ugst_rate'] = data.getElementsByTagName("ugst_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("tax_rate")[0].attributes.length == 0) //Check NULL value
                this['tax_rate'] = data.getElementsByTagName("tax_rate")[0].lastChild.nodeValue;
            
            this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_desc'] = (data.getElementsByTagName("hsn_desc")[0].lastChild != null) ? data.getElementsByTagName("hsn_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['inwarddtl_rowid'] = data['inwarddtl_rowid'];
            
            this['inward_code'] = data['inward_code'];
            
            this['inward_desc'] = data['inward_desc'];
            
            this['grn_no'] = data['grn_no'];
            
            this['product_catg_code'] = data['product_catg_code'];
            
            this['product_catg_desc'] = data['product_catg_desc'];
            
            this['product_subcatg_code'] = data['product_subcatg_code'];
            
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
            
            this['product_code'] = data['product_code'];
            
            this['product_desc'] = data['product_desc'];
            
            this['uomtype_code'] = data['uomtype_code'];
            
            this['uomtype_desc'] = data['uomtype_desc'];
            
            this['batch_no'] = data['batch_no'];
            
            this['received_qty'] = data['received_qty'].toFixed(2);
            
            this['product_amount'] = data['product_amount'].toFixed(4);
            
            this['tax_amount'] = data['tax_amount'].toFixed(4);
            
            this['net_amount'] = data['net_amount'].toFixed(4);
            
            this['transport_amount'] = data['transport_amount'].toFixed(4);
            
            this['discount'] = data['discount'].toFixed(4);
            
            this['cgst_rate'] = data['cgst_rate'].toFixed(4);
            
            this['sgst_rate'] = data['sgst_rate'].toFixed(4);
            
            this['igst_rate'] = data['igst_rate'].toFixed(4);
            
            this['ugst_rate'] = data['ugst_rate'].toFixed(4);
            
            this['tax_rate'] = data['tax_rate'].toFixed(4);
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_desc'] = data['hsn_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

