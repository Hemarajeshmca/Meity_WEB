var responseDataFormat = "JSON";

function PAWHS_getRaiseInvoiceRequest(data)
{
    /**
     * @member {PAWHS_getRaiseInvoiceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getRaiseInvoiceRequestcontext(data['context']);
    }
}

function PAWHS_getRaiseInvoiceRequestcontext(data)
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
     * @member {PAWHS_getRaiseInvoiceRequestHeader} Header
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
            this['Header'] = new PAWHS_getRaiseInvoiceRequestHeader(data['Header']);
    }
}

function PAWHS_getRaiseInvoiceRequestHeader(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('invoice_rowid'))
            this['invoice_rowid'] = data['invoice_rowid'];
        
    }
}

function PAWHS_getRaiseInvoiceResponse(data, format)
{
    /**
     * @member {PAWHS_getRaiseInvoiceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getRaiseInvoiceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getRaiseInvoiceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getRaiseInvoiceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getRaiseInvoiceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getRaiseInvoiceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getRaiseInvoiceResponseApplicationException(data)
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

function PAWHS_getRaiseInvoiceResponsecontext(data)
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
     * @member {PAWHS_getRaiseInvoiceResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getRaiseInvoiceResponseInvoiceDetails} InvoiceDetails
     */
    this['InvoiceDetails'] = null;
    
    /**
     * @member {PAWHS_getRaiseInvoiceResponseTaxDetails} TaxDetails
     */
    this['TaxDetails'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getRaiseInvoiceResponseHeader(data.getElementsByTagName("Header")[0]);
            
            InvoiceDetails = [];
            for(InvoiceDetailschildi = 0; InvoiceDetailschildi < data.getElementsByTagName("InvoiceDetails").length; InvoiceDetailschildi++)
            {
                InvoiceDetails.push(new PAWHS_getRaiseInvoiceResponseInvoiceDetails(data.getElementsByTagName("InvoiceDetails")[InvoiceDetailschildi]));
            }
            if(data.getElementsByTagName("InvoiceDetails").length > 0)
                this['InvoiceDetails'] = InvoiceDetails;
            
            TaxDetails = [];
            for(TaxDetailschildi = 0; TaxDetailschildi < data.getElementsByTagName("TaxDetails").length; TaxDetailschildi++)
            {
                TaxDetails.push(new PAWHS_getRaiseInvoiceResponseTaxDetails(data.getElementsByTagName("TaxDetails")[TaxDetailschildi]));
            }
            if(data.getElementsByTagName("TaxDetails").length > 0)
                this['TaxDetails'] = TaxDetails;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getRaiseInvoiceResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('InvoiceDetails') && data['InvoiceDetails'] != null)
            {
                InvoiceDetails = [];
                for(InvoiceDetailsindex = 0; InvoiceDetailsindex < data['InvoiceDetails'].length; InvoiceDetailsindex++)
                {
                    InvoiceDetails.push(new PAWHS_getRaiseInvoiceResponseInvoiceDetails(data['InvoiceDetails'][InvoiceDetailsindex]));
                }
                this['InvoiceDetails'] = InvoiceDetails;
            }
            
            
            if(data.hasOwnProperty('TaxDetails') && data['TaxDetails'] != null)
            {
                TaxDetails = [];
                for(TaxDetailsindex = 0; TaxDetailsindex < data['TaxDetails'].length; TaxDetailsindex++)
                {
                    TaxDetails.push(new PAWHS_getRaiseInvoiceResponseTaxDetails(data['TaxDetails'][TaxDetailsindex]));
                }
                this['TaxDetails'] = TaxDetails;
            }
        }
    }
}

function PAWHS_getRaiseInvoiceResponseHeader(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    /**
     * @member {String} fpo_name
     */
    this['fpo_name'] = null;
    
    /**
     * @member {String} invoice_date
     */
    this['invoice_date'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    /**
     * @member {String} customer_code
     */
    this['customer_code'] = null;
    
    /**
     * @member {String} customer_name
     */
    this['customer_name'] = null;
    
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
            this['invoice_rowid'] = parseInt(data.getElementsByTagName("invoice_rowid")[0].lastChild.nodeValue);
            
            this['fpo_name'] = (data.getElementsByTagName("fpo_name")[0].lastChild != null) ? data.getElementsByTagName("fpo_name")[0].lastChild.nodeValue : "";
            
            this['invoice_date'] = (data.getElementsByTagName("invoice_date")[0].lastChild != null) ? data.getElementsByTagName("invoice_date")[0].lastChild.nodeValue : "";
            
            this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['customer_state'] = (data.getElementsByTagName("customer_state")[0].lastChild != null) ? data.getElementsByTagName("customer_state")[0].lastChild.nodeValue : "";
            
            this['provider_state'] = (data.getElementsByTagName("provider_state")[0].lastChild != null) ? data.getElementsByTagName("provider_state")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['invoice_rowid'] = data['invoice_rowid'];
            
            this['fpo_name'] = data['fpo_name'];
            
            this['invoice_date'] = data['invoice_date'];
            
            this['invoice_no'] = data['invoice_no'];
            
            this['customer_code'] = data['customer_code'];
            
            this['customer_name'] = data['customer_name'];
            
            this['customer_state'] = data['customer_state'];
            
            this['provider_state'] = data['provider_state'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getRaiseInvoiceResponseInvoiceDetails(data)
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
     * @member {String} uom_desc
     */
    this['uom_desc'] = null;
    
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
            this['invoice_details_rowid'] = parseInt(data.getElementsByTagName("invoice_details_rowid")[0].lastChild.nodeValue);
            
            this['item_code'] = (data.getElementsByTagName("item_code")[0].lastChild != null) ? data.getElementsByTagName("item_code")[0].lastChild.nodeValue : "";
            
            this['item_desc'] = (data.getElementsByTagName("item_desc")[0].lastChild != null) ? data.getElementsByTagName("item_desc")[0].lastChild.nodeValue : "";
            
            this['item_name'] = (data.getElementsByTagName("item_name")[0].lastChild != null) ? data.getElementsByTagName("item_name")[0].lastChild.nodeValue : "";
            
            this['type'] = (data.getElementsByTagName("type")[0].lastChild != null) ? data.getElementsByTagName("type")[0].lastChild.nodeValue : "";
            
            this['qty'] = parseInt(data.getElementsByTagName("qty")[0].lastChild.nodeValue);
            
            this['uom_code'] = (data.getElementsByTagName("uom_code")[0].lastChild != null) ? data.getElementsByTagName("uom_code")[0].lastChild.nodeValue : "";
            
            this['uom_desc'] = (data.getElementsByTagName("uom_desc")[0].lastChild != null) ? data.getElementsByTagName("uom_desc")[0].lastChild.nodeValue : "";
            
            this['rate'] = parseFloat(data.getElementsByTagName("rate")[0].lastChild.nodeValue);
            
            this['amount'] = parseFloat(data.getElementsByTagName("amount")[0].lastChild.nodeValue);
            
            this['discount'] = parseFloat(data.getElementsByTagName("discount")[0].lastChild.nodeValue);
            
            this['tax_amount'] = parseFloat(data.getElementsByTagName("tax_amount")[0].lastChild.nodeValue);
            
            this['net_amount'] = parseFloat(data.getElementsByTagName("net_amount")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['invoice_details_rowid'] = data['invoice_details_rowid'];
            
            this['item_code'] = data['item_code'];
            
            this['item_desc'] = data['item_desc'];
            
            this['item_name'] = data['item_name'];
            
            this['type'] = data['type'];
            
            this['qty'] = data['qty'];
            
            this['uom_code'] = data['uom_code'];
            
            this['uom_desc'] = data['uom_desc'];
            
            this['rate'] = data['rate'];
            
            this['amount'] = data['amount'];
            
            this['discount'] = data['discount'];
            
            this['tax_amount'] = data['tax_amount'];
            
            this['net_amount'] = data['net_amount'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function PAWHS_getRaiseInvoiceResponseTaxDetails(data)
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
            this['taxdetails_rowid'] = parseInt(data.getElementsByTagName("taxdetails_rowid")[0].lastChild.nodeValue);
            
            this['state'] = (data.getElementsByTagName("state")[0].lastChild != null) ? data.getElementsByTagName("state")[0].lastChild.nodeValue : "";
            
            this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_description'] = (data.getElementsByTagName("hsn_description")[0].lastChild != null) ? data.getElementsByTagName("hsn_description")[0].lastChild.nodeValue : "";
            
            this['tax_rate'] = parseFloat(data.getElementsByTagName("tax_rate")[0].lastChild.nodeValue);
            
            this['taxable_amount'] = parseFloat(data.getElementsByTagName("taxable_amount")[0].lastChild.nodeValue);
            
            this['tax_amount'] = parseFloat(data.getElementsByTagName("tax_amount")[0].lastChild.nodeValue);
            
            this['cgst'] = parseFloat(data.getElementsByTagName("cgst")[0].lastChild.nodeValue);
            
            this['sgst'] = parseFloat(data.getElementsByTagName("sgst")[0].lastChild.nodeValue);
            
            this['igst'] = parseFloat(data.getElementsByTagName("igst")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['taxdetails_rowid'] = data['taxdetails_rowid'];
            
            this['state'] = data['state'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_description'] = data['hsn_description'];
            
            this['tax_rate'] = data['tax_rate'];
            
            this['taxable_amount'] = data['taxable_amount'];
            
            this['tax_amount'] = data['tax_amount'];
            
            this['cgst'] = data['cgst'];
            
            this['sgst'] = data['sgst'];
            
            this['igst'] = data['igst'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

