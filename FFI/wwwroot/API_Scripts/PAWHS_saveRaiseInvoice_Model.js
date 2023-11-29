var responseDataFormat = "JSON";

function PAWHS_saveRaiseInvoiceRequest(data)
{
    /**
     * @member {PAWHS_saveRaiseInvoiceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_saveRaiseInvoiceRequestcontext(data['context']);
    }
}

function PAWHS_saveRaiseInvoiceRequestcontext(data)
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
     * @member {PAWHS_saveRaiseInvoiceRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_saveRaiseInvoiceRequestInvoiceDetails} InvoiceDetails
     */
    this['InvoiceDetails'] = null;
    
    /**
     * @member {PAWHS_saveRaiseInvoiceRequestTaxDetails} TaxDetails
     */
    this['TaxDetails'] = null;
    
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
            this['Header'] = new PAWHS_saveRaiseInvoiceRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('InvoiceDetails') && data['InvoiceDetails'] != null)
        {
            InvoiceDetails = [];
            for(InvoiceDetailsindex = 0; InvoiceDetailsindex < data['InvoiceDetails'].length; InvoiceDetailsindex++)
            {
                InvoiceDetails.push(new PAWHS_saveRaiseInvoiceRequestInvoiceDetails(data['InvoiceDetails'][InvoiceDetailsindex]));
            }
            this['InvoiceDetails'] = InvoiceDetails;
        }
        
        if(data.hasOwnProperty('TaxDetails') && data['TaxDetails'] != null)
        {
            TaxDetails = [];
            for(TaxDetailsindex = 0; TaxDetailsindex < data['TaxDetails'].length; TaxDetailsindex++)
            {
                TaxDetails.push(new PAWHS_saveRaiseInvoiceRequestTaxDetails(data['TaxDetails'][TaxDetailsindex]));
            }
            this['TaxDetails'] = TaxDetails;
        }
    }
}

function PAWHS_saveRaiseInvoiceRequestHeader(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    /**
     * @member {String} fpo_name
     */
    this['fpo_name'] = null;
    
    /**
     * @member {String} invoice_date
     */
    this['invoice_date'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    /**
     * @member {String} customer_state
     */
    this['customer_state'] = null;
    
    /**
     * @member {String} provider_state
     */
    this['provider_state'] = null;
    
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
        if(data.hasOwnProperty('invoice_rowid'))
            this['invoice_rowid'] = data['invoice_rowid'];
        
        if(data.hasOwnProperty('invoice_no'))
            this['invoice_no'] = data['invoice_no'];
        
        if(data.hasOwnProperty('fpo_name'))
            this['fpo_name'] = data['fpo_name'];
        
        if(data.hasOwnProperty('invoice_date'))
            this['invoice_date'] = data['invoice_date'];
        
        if(data.hasOwnProperty('customer_code'))
            this['customer_code'] = data['customer_code'];
        
        if(data.hasOwnProperty('customer_state'))
            this['customer_state'] = data['customer_state'];
        
        if(data.hasOwnProperty('provider_state'))
            this['provider_state'] = data['provider_state'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_saveRaiseInvoiceRequestInvoiceDetails(data)
{
    /**
     * @member {Int32} invoice_details_rowid
     */
    this['invoice_details_rowid'] = null;
    
    /**
     * @member {String} item_code
     */
    this['item_code'] = null;
    
    /**
     * @member {String} item_desc
     */
    this['item_desc'] = null;
    
    /**
     * @member {String} item_name
     */
    this['item_name'] = null;
    
    /**
     * @member {String} type
     */
    this['type'] = null;
    
    /**
     * @member {Int16} qty
     */
    this['qty'] = null;
    
    /**
     * @member {String} uom_code
     */
    this['uom_code'] = null;
    
    /**
     * @member {Decimal} rate
     */
    this['rate'] = null;
    
    /**
     * @member {Decimal} amount
     */
    this['amount'] = null;
    
    /**
     * @member {Decimal} discount
     */
    this['discount'] = null;
    
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
        if(data.hasOwnProperty('invoice_details_rowid'))
            this['invoice_details_rowid'] = data['invoice_details_rowid'];
        
        if(data.hasOwnProperty('item_code'))
            this['item_code'] = data['item_code'];
        
        if(data.hasOwnProperty('item_desc'))
            this['item_desc'] = data['item_desc'];
        
        if(data.hasOwnProperty('item_name'))
            this['item_name'] = data['item_name'];
        
        if(data.hasOwnProperty('type'))
            this['type'] = data['type'];
        
        if(data.hasOwnProperty('qty'))
            this['qty'] = data['qty'];
        
        if(data.hasOwnProperty('uom_code'))
            this['uom_code'] = data['uom_code'];
        
        if(data.hasOwnProperty('rate'))
            this['rate'] = data['rate'];
        
        if(data.hasOwnProperty('amount'))
            this['amount'] = data['amount'];
        
        if(data.hasOwnProperty('discount'))
            this['discount'] = data['discount'];
        
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

function PAWHS_saveRaiseInvoiceRequestTaxDetails(data)
{
    /**
     * @member {Int32} taxdetails_rowid
     */
    this['taxdetails_rowid'] = null;
    
    /**
     * @member {String} state
     */
    this['state'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_description
     */
    this['hsn_description'] = null;
    
    /**
     * @member {Decimal} tax_rate
     */
    this['tax_rate'] = null;
    
    /**
     * @member {Decimal} taxable_amount
     */
    this['taxable_amount'] = null;
    
    /**
     * @member {Decimal} tax_amount
     */
    this['tax_amount'] = null;
    
    /**
     * @member {Decimal} cgst
     */
    this['cgst'] = null;
    
    /**
     * @member {Decimal} sgst
     */
    this['sgst'] = null;
    
    /**
     * @member {Decimal} igst
     */
    this['igst'] = null;
    
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
        if(data.hasOwnProperty('taxdetails_rowid'))
            this['taxdetails_rowid'] = data['taxdetails_rowid'];
        
        if(data.hasOwnProperty('state'))
            this['state'] = data['state'];
        
        if(data.hasOwnProperty('hsn_code'))
            this['hsn_code'] = data['hsn_code'];
        
        if(data.hasOwnProperty('hsn_description'))
            this['hsn_description'] = data['hsn_description'];
        
        if(data.hasOwnProperty('tax_rate'))
            this['tax_rate'] = data['tax_rate'];
        
        if(data.hasOwnProperty('taxable_amount'))
            this['taxable_amount'] = data['taxable_amount'];
        
        if(data.hasOwnProperty('tax_amount'))
            this['tax_amount'] = data['tax_amount'];
        
        if(data.hasOwnProperty('cgst'))
            this['cgst'] = data['cgst'];
        
        if(data.hasOwnProperty('sgst'))
            this['sgst'] = data['sgst'];
        
        if(data.hasOwnProperty('igst'))
            this['igst'] = data['igst'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_saveRaiseInvoiceResponse(data, format)
{
    /**
     * @member {PAWHS_saveRaiseInvoiceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_saveRaiseInvoiceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_saveRaiseInvoiceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_saveRaiseInvoiceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_saveRaiseInvoiceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_saveRaiseInvoiceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_saveRaiseInvoiceResponseApplicationException(data)
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

function PAWHS_saveRaiseInvoiceResponsecontext(data)
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
     * @member {PAWHS_saveRaiseInvoiceResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_saveRaiseInvoiceResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_saveRaiseInvoiceResponseHeader(data['Header']);
        }
    }
}

function PAWHS_saveRaiseInvoiceResponseHeader(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['invoice_rowid'] = parseInt(data.getElementsByTagName("invoice_rowid")[0].lastChild.nodeValue);
            
            this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['invoice_rowid'] = data['invoice_rowid'];
            
            this['invoice_no'] = data['invoice_no'];
        }
    }
}

