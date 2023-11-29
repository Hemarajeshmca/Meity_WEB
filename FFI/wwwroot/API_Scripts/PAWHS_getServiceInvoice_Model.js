var responseDataFormat = "JSON";

function PAWHS_getServiceInvoiceRequest(data)
{
    /**
     * @member {PAWHS_getServiceInvoiceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getServiceInvoiceRequestcontext(data['context']);
    }
}

function PAWHS_getServiceInvoiceRequestcontext(data)
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
     * @member {PAWHS_getServiceInvoiceRequestHeader} Header
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
            this['Header'] = new PAWHS_getServiceInvoiceRequestHeader(data['Header']);
    }
}

function PAWHS_getServiceInvoiceRequestHeader(data)
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

function PAWHS_getServiceInvoiceResponse(data, format)
{
    /**
     * @member {PAWHS_getServiceInvoiceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getServiceInvoiceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getServiceInvoiceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getServiceInvoiceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getServiceInvoiceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getServiceInvoiceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getServiceInvoiceResponseApplicationException(data)
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

function PAWHS_getServiceInvoiceResponsecontext(data)
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
     * @member {PAWHS_getServiceInvoiceResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getServiceInvoiceResponseInvoiceDetails} InvoiceDetails
     */
    this['InvoiceDetails'] = null;
    
    /**
     * @member {PAWHS_getServiceInvoiceResponseTaxDetails} TaxDetails
     */
    this['TaxDetails'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getServiceInvoiceResponseHeader(data.getElementsByTagName("Header")[0]);
            
            InvoiceDetails = [];
            for(InvoiceDetailschildi = 0; InvoiceDetailschildi < data.getElementsByTagName("InvoiceDetails").length; InvoiceDetailschildi++)
            {
                InvoiceDetails.push(new PAWHS_getServiceInvoiceResponseInvoiceDetails(data.getElementsByTagName("InvoiceDetails")[InvoiceDetailschildi]));
            }
            if(data.getElementsByTagName("InvoiceDetails").length > 0)
                this['InvoiceDetails'] = InvoiceDetails;
            
            TaxDetails = [];
            for(TaxDetailschildi = 0; TaxDetailschildi < data.getElementsByTagName("TaxDetails").length; TaxDetailschildi++)
            {
                TaxDetails.push(new PAWHS_getServiceInvoiceResponseTaxDetails(data.getElementsByTagName("TaxDetails")[TaxDetailschildi]));
            }
            if(data.getElementsByTagName("TaxDetails").length > 0)
                this['TaxDetails'] = TaxDetails;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getServiceInvoiceResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('InvoiceDetails') && data['InvoiceDetails'] != null)
            {
                InvoiceDetails = [];
                for(InvoiceDetailsindex = 0; InvoiceDetailsindex < data['InvoiceDetails'].length; InvoiceDetailsindex++)
                {
                    InvoiceDetails.push(new PAWHS_getServiceInvoiceResponseInvoiceDetails(data['InvoiceDetails'][InvoiceDetailsindex]));
                }
                this['InvoiceDetails'] = InvoiceDetails;
            }
            
            
            if(data.hasOwnProperty('TaxDetails') && data['TaxDetails'] != null)
            {
                TaxDetails = [];
                for(TaxDetailsindex = 0; TaxDetailsindex < data['TaxDetails'].length; TaxDetailsindex++)
                {
                    TaxDetails.push(new PAWHS_getServiceInvoiceResponseTaxDetails(data['TaxDetails'][TaxDetailsindex]));
                }
                this['TaxDetails'] = TaxDetails;
            }
        }
    }
}

function PAWHS_getServiceInvoiceResponseHeader(data)
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
     * @member {String} service_code
     */
    this['service_code'] = null;
    
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
     * @member {String} output_field
     */
    this['output_field'] = null;
    
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
            
            this['service_code'] = (data.getElementsByTagName("service_code")[0].lastChild != null) ? data.getElementsByTagName("service_code")[0].lastChild.nodeValue : "";
            
            this['customer_code'] = (data.getElementsByTagName("customer_code")[0].lastChild != null) ? data.getElementsByTagName("customer_code")[0].lastChild.nodeValue : "";
            
            this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            this['customer_state'] = (data.getElementsByTagName("customer_state")[0].lastChild != null) ? data.getElementsByTagName("customer_state")[0].lastChild.nodeValue : "";
            
            this['provider_state'] = (data.getElementsByTagName("provider_state")[0].lastChild != null) ? data.getElementsByTagName("provider_state")[0].lastChild.nodeValue : "";
            
            this['output_field'] = (data.getElementsByTagName("output_field")[0].lastChild != null) ? data.getElementsByTagName("output_field")[0].lastChild.nodeValue : "";
            
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
            
            this['service_code'] = data['service_code'];
            
            this['customer_code'] = data['customer_code'];
            
            this['customer_name'] = data['customer_name'];
            
            this['customer_state'] = data['customer_state'];
            
            this['provider_state'] = data['provider_state'];
            
            this['output_field'] = data['output_field'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function PAWHS_getServiceInvoiceResponseInvoiceDetails(data)
{
    /**
     * @member {Int32} invoice_details_rowid
     */
    this['invoice_details_rowid'] = null;
    
    /**
     * @member {String} service_code
     */
    this['service_code'] = null;
    
    /**
     * @member {String} service_desc
     */
    this['service_desc'] = null;
    
    /**
     * @member {Decimal} qty
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
            
            this['service_code'] = (data.getElementsByTagName("service_code")[0].lastChild != null) ? data.getElementsByTagName("service_code")[0].lastChild.nodeValue : "";
            
            this['service_desc'] = (data.getElementsByTagName("service_desc")[0].lastChild != null) ? data.getElementsByTagName("service_desc")[0].lastChild.nodeValue : "";
            
            this['qty'] = parseFloat(data.getElementsByTagName("qty")[0].lastChild.nodeValue);
            
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
            
            this['service_code'] = data['service_code'];
            
            this['service_desc'] = data['service_desc'];
            
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

function PAWHS_getServiceInvoiceResponseTaxDetails(data)
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
            
            this['cgst'] = parseFloat(data.getElementsByTagName("cgst")[0].lastChild.nodeValue);
            
            this['sgst'] = parseFloat(data.getElementsByTagName("sgst")[0].lastChild.nodeValue);
            
            this['igst'] = parseFloat(data.getElementsByTagName("igst")[0].lastChild.nodeValue);
            
            this['tax_rate'] = parseFloat(data.getElementsByTagName("tax_rate")[0].lastChild.nodeValue);
            
            this['taxable_amount'] = parseFloat(data.getElementsByTagName("taxable_amount")[0].lastChild.nodeValue);
            
            this['tax_amount'] = parseFloat(data.getElementsByTagName("tax_amount")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['taxdetails_rowid'] = data['taxdetails_rowid'];
            
            this['state'] = data['state'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_description'] = data['hsn_description'];
            
            this['cgst'] = data['cgst'];
            
            this['sgst'] = data['sgst'];
            
            this['igst'] = data['igst'];
            
            this['tax_rate'] = data['tax_rate'];
            
            this['taxable_amount'] = data['taxable_amount'];
            
            this['tax_amount'] = data['tax_amount'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

