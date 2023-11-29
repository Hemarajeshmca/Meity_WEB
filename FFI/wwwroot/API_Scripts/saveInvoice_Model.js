var responseDataFormat = "JSON";

function saveInvoiceRequest(data)
{
    /**
     * @member {saveInvoiceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveInvoiceRequestcontext(data['context']);
    }
}

function saveInvoiceRequestcontext(data)
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
     * @member {saveInvoiceRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveInvoiceRequestInvoiceDetail} InvoiceDetail
     */
    this['InvoiceDetail'] = null;
    
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
            this['Header'] = new saveInvoiceRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('InvoiceDetail') && data['InvoiceDetail'] != null)
        {
            InvoiceDetail = [];
            for(InvoiceDetailindex = 0; InvoiceDetailindex < data['InvoiceDetail'].length; InvoiceDetailindex++)
            {
                InvoiceDetail.push(new saveInvoiceRequestInvoiceDetail(data['InvoiceDetail'][InvoiceDetailindex]));
            }
            this['InvoiceDetail'] = InvoiceDetail;
        }
    }
}

function saveInvoiceRequestHeader(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    /**
     * @member {String} ic_code
     */
    this['ic_code'] = null;
    
    /**
     * @member {String} invoice_date
     */
    this['invoice_date'] = null;
    
    /**
     * @member {String} customer_type
     */
    this['customer_type'] = null;
    
    /**
     * @member {String} customer_name
     */
    this['customer_name'] = null;
    
    /**
     * @member {String} customer_address
     */
    this['customer_address'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} provider_location
     */
    this['provider_location'] = null;
    
    /**
     * @member {String} reciver_location
     */
    this['reciver_location'] = null;
    
    /**
     * @member {Decimal} totalinvoice_amount
     */
    this['totalinvoice_amount'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
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
        if(data.hasOwnProperty('invoice_rowid'))
            this['invoice_rowid'] = data['invoice_rowid'];
        
        if(data.hasOwnProperty('orgn_code'))
            this['orgn_code'] = data['orgn_code'];
        
        if(data.hasOwnProperty('invoice_no'))
            this['invoice_no'] = data['invoice_no'];
        
        if(data.hasOwnProperty('ic_code'))
            this['ic_code'] = data['ic_code'];
        
        if(data.hasOwnProperty('invoice_date'))
            this['invoice_date'] = data['invoice_date'];
        
        if(data.hasOwnProperty('customer_type'))
            this['customer_type'] = data['customer_type'];
        
        if(data.hasOwnProperty('customer_name'))
            this['customer_name'] = data['customer_name'];
        
        if(data.hasOwnProperty('customer_address'))
            this['customer_address'] = data['customer_address'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('provider_location'))
            this['provider_location'] = data['provider_location'];
        
        if(data.hasOwnProperty('reciver_location'))
            this['reciver_location'] = data['reciver_location'];
        
        if(data.hasOwnProperty('totalinvoice_amount'))
            this['totalinvoice_amount'] = data['totalinvoice_amount'];
        
        if(data.hasOwnProperty('balance_amount'))
            this['balance_amount'] = data['balance_amount'];
        
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

function saveInvoiceRequestInvoiceDetail(data)
{
    /**
     * @member {Int32} invoicedtl_rowid
     */
    this['invoicedtl_rowid'] = null;
    
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
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {Decimal} qty
     */
    this['qty'] = null;
    
    /**
     * @member {Decimal} base_price
     */
    this['base_price'] = null;
    
    /**
     * @member {Decimal} product_amount
     */
    this['product_amount'] = null;
    
    /**
     * @member {Decimal} discount_amount
     */
    this['discount_amount'] = null;
    
    /**
     * @member {Decimal} tax_amount
     */
    this['tax_amount'] = null;
    
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
        if(data.hasOwnProperty('invoicedtl_rowid'))
            this['invoicedtl_rowid'] = data['invoicedtl_rowid'];
        
        if(data.hasOwnProperty('product_catg_code'))
            this['product_catg_code'] = data['product_catg_code'];
        
        if(data.hasOwnProperty('product_subcatg_code'))
            this['product_subcatg_code'] = data['product_subcatg_code'];
        
        if(data.hasOwnProperty('product_code'))
            this['product_code'] = data['product_code'];
        
        if(data.hasOwnProperty('hsn_code'))
            this['hsn_code'] = data['hsn_code'];
        
        if(data.hasOwnProperty('qty'))
            this['qty'] = data['qty'];
        
        if(data.hasOwnProperty('base_price'))
            this['base_price'] = data['base_price'];
        
        if(data.hasOwnProperty('product_amount'))
            this['product_amount'] = data['product_amount'];
        
        if(data.hasOwnProperty('discount_amount'))
            this['discount_amount'] = data['discount_amount'];
        
        if(data.hasOwnProperty('tax_amount'))
            this['tax_amount'] = data['tax_amount'];
        
        if(data.hasOwnProperty('net_amount'))
            this['net_amount'] = data['net_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveInvoiceResponse(data, format)
{
    /**
     * @member {saveInvoiceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveInvoiceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveInvoiceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveInvoiceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveInvoiceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveInvoiceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveInvoiceResponseApplicationException(data)
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

function saveInvoiceResponsecontext(data)
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
     * @member {saveInvoiceResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveInvoiceResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveInvoiceResponseHeader(data['Header']);
        }
    }
}

function saveInvoiceResponseHeader(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['invoice_rowid'] = data.getElementsByTagName("invoice_rowid")[0].lastChild.nodeValue;
        }
        else {
            this['invoice_rowid'] = data['invoice_rowid'];
        }
    }
}

