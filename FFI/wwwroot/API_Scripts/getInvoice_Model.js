var responseDataFormat = "JSON";

function getInvoiceRequest(data)
{
    /**
     * @member {getInvoiceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getInvoiceRequestcontext(data['context']);
    }
}

function getInvoiceRequestcontext(data)
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
     * @member {getInvoiceRequestHeader} Header
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
            this['Header'] = new getInvoiceRequestHeader(data['Header']);
    }
}

function getInvoiceRequestHeader(data)
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

function getInvoiceResponse(data, format)
{
    /**
     * @member {getInvoiceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getInvoiceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getInvoiceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getInvoiceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getInvoiceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getInvoiceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getInvoiceResponseApplicationException(data)
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

function getInvoiceResponsecontext(data)
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
     * @member {getInvoiceResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getInvoiceResponseInvoiceDetail} InvoiceDetail
     */
    this['InvoiceDetail'] = null;
    
    /**
     * @member {getInvoiceResponseInvoiceTax} InvoiceTax
     */
    this['InvoiceTax'] = null;
    
    /**
     * @member {getInvoiceResponsePaymentCollection} PaymentCollection
     */
    this['PaymentCollection'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getInvoiceResponseHeader(data.getElementsByTagName("Header")[0]);
            
            InvoiceDetail = [];
            for(InvoiceDetailchildi = 0; InvoiceDetailchildi < data.getElementsByTagName("InvoiceDetail").length; InvoiceDetailchildi++)
            {
                InvoiceDetail.push(new getInvoiceResponseInvoiceDetail(data.getElementsByTagName("InvoiceDetail")[InvoiceDetailchildi]));
            }
            if(data.getElementsByTagName("InvoiceDetail").length > 0)
                this['InvoiceDetail'] = InvoiceDetail;
            
            InvoiceTax = [];
            for(InvoiceTaxchildi = 0; InvoiceTaxchildi < data.getElementsByTagName("InvoiceTax").length; InvoiceTaxchildi++)
            {
                InvoiceTax.push(new getInvoiceResponseInvoiceTax(data.getElementsByTagName("InvoiceTax")[InvoiceTaxchildi]));
            }
            if(data.getElementsByTagName("InvoiceTax").length > 0)
                this['InvoiceTax'] = InvoiceTax;
            
            PaymentCollection = [];
            for(PaymentCollectionchildi = 0; PaymentCollectionchildi < data.getElementsByTagName("PaymentCollection").length; PaymentCollectionchildi++)
            {
                PaymentCollection.push(new getInvoiceResponsePaymentCollection(data.getElementsByTagName("PaymentCollection")[PaymentCollectionchildi]));
            }
            if(data.getElementsByTagName("PaymentCollection").length > 0)
                this['PaymentCollection'] = PaymentCollection;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getInvoiceResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('InvoiceDetail') && data['InvoiceDetail'] != null)
            {
                InvoiceDetail = [];
                for(InvoiceDetailindex = 0; InvoiceDetailindex < data['InvoiceDetail'].length; InvoiceDetailindex++)
                {
                    InvoiceDetail.push(new getInvoiceResponseInvoiceDetail(data['InvoiceDetail'][InvoiceDetailindex]));
                }
                this['InvoiceDetail'] = InvoiceDetail;
            }
            
            
            if(data.hasOwnProperty('InvoiceTax') && data['InvoiceTax'] != null)
            {
                InvoiceTax = [];
                for(InvoiceTaxindex = 0; InvoiceTaxindex < data['InvoiceTax'].length; InvoiceTaxindex++)
                {
                    InvoiceTax.push(new getInvoiceResponseInvoiceTax(data['InvoiceTax'][InvoiceTaxindex]));
                }
                this['InvoiceTax'] = InvoiceTax;
            }
            
            
            if(data.hasOwnProperty('PaymentCollection') && data['PaymentCollection'] != null)
            {
                PaymentCollection = [];
                for(PaymentCollectionindex = 0; PaymentCollectionindex < data['PaymentCollection'].length; PaymentCollectionindex++)
                {
                    PaymentCollection.push(new getInvoiceResponsePaymentCollection(data['PaymentCollection'][PaymentCollectionindex]));
                }
                this['PaymentCollection'] = PaymentCollection;
            }
        }
    }
}

function getInvoiceResponseHeader(data)
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
     * @member {String} ic_desc
     */
    this['ic_desc'] = null;
    
    /**
     * @member {String} invoice_date
     */
    this['invoice_date'] = null;
    
    /**
     * @member {String} customer_type
     */
    this['customer_type'] = null;
    
    /**
     * @member {String} customer_type_desc
     */
    this['customer_type_desc'] = null;
    
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
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} provider_location
     */
    this['provider_location'] = null;
    
    /**
     * @member {String} provider_location_desc
     */
    this['provider_location_desc'] = null;
    
    /**
     * @member {String} reciver_location
     */
    this['reciver_location'] = null;
    
    /**
     * @member {String} reciver_location_desc
     */
    this['reciver_location_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} process_status_desc
     */
    this['process_status_desc'] = null;
    
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
            this['invoice_rowid'] = data.getElementsByTagName("invoice_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("orgn_code")[0].attributes.length == 0) //Check NULL value
                this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("invoice_no")[0].attributes.length == 0) //Check NULL value
                this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_code")[0].attributes.length == 0) //Check NULL value
                this['ic_code'] = (data.getElementsByTagName("ic_code")[0].lastChild != null) ? data.getElementsByTagName("ic_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_desc")[0].attributes.length == 0) //Check NULL value
                this['ic_desc'] = (data.getElementsByTagName("ic_desc")[0].lastChild != null) ? data.getElementsByTagName("ic_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("invoice_date")[0].attributes.length == 0) //Check NULL value
                this['invoice_date'] = (data.getElementsByTagName("invoice_date")[0].lastChild != null) ? data.getElementsByTagName("invoice_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("customer_type")[0].attributes.length == 0) //Check NULL value
                this['customer_type'] = (data.getElementsByTagName("customer_type")[0].lastChild != null) ? data.getElementsByTagName("customer_type")[0].lastChild.nodeValue : "";
            
            this['customer_type_desc'] = (data.getElementsByTagName("customer_type_desc")[0].lastChild != null) ? data.getElementsByTagName("customer_type_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("customer_name")[0].attributes.length == 0) //Check NULL value
                this['customer_name'] = (data.getElementsByTagName("customer_name")[0].lastChild != null) ? data.getElementsByTagName("customer_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("customer_address")[0].attributes.length == 0) //Check NULL value
                this['customer_address'] = (data.getElementsByTagName("customer_address")[0].lastChild != null) ? data.getElementsByTagName("customer_address")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_code")[0].attributes.length == 0) //Check NULL value
                this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("farmer_name")[0].attributes.length == 0) //Check NULL value
                this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("provider_location")[0].attributes.length == 0) //Check NULL value
                this['provider_location'] = (data.getElementsByTagName("provider_location")[0].lastChild != null) ? data.getElementsByTagName("provider_location")[0].lastChild.nodeValue : "";
            
            this['provider_location_desc'] = (data.getElementsByTagName("provider_location_desc")[0].lastChild != null) ? data.getElementsByTagName("provider_location_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("reciver_location")[0].attributes.length == 0) //Check NULL value
                this['reciver_location'] = (data.getElementsByTagName("reciver_location")[0].lastChild != null) ? data.getElementsByTagName("reciver_location")[0].lastChild.nodeValue : "";
            
            this['reciver_location_desc'] = (data.getElementsByTagName("reciver_location_desc")[0].lastChild != null) ? data.getElementsByTagName("reciver_location_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("totalinvoice_amount")[0].attributes.length == 0) //Check NULL value
                this['totalinvoice_amount'] = data.getElementsByTagName("totalinvoice_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("balance_amount")[0].attributes.length == 0) //Check NULL value
                this['balance_amount'] = data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status")[0].attributes.length == 0) //Check NULL value
                this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status_desc")[0].attributes.length == 0) //Check NULL value
                this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue;
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['invoice_rowid'] = data['invoice_rowid'];
            
            this['orgn_code'] = data['orgn_code'];
            
            this['invoice_no'] = data['invoice_no'];
            
            this['ic_code'] = data['ic_code'];
            
            this['ic_desc'] = data['ic_desc'];
            
            this['invoice_date'] = data['invoice_date'];
            
            this['customer_type'] = data['customer_type'];
            
            this['customer_type_desc'] = data['customer_type_desc'];
            
            this['customer_name'] = data['customer_name'];
            
            this['customer_address'] = data['customer_address'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['provider_location'] = data['provider_location'];
            
            this['provider_location_desc'] = data['provider_location_desc'];
            
            this['reciver_location'] = data['reciver_location'];
            
            this['reciver_location_desc'] = data['reciver_location_desc'];
            
            this['totalinvoice_amount'] = data['totalinvoice_amount'].toFixed(4);
            
            this['balance_amount'] = data['balance_amount'].toFixed(4);
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function getInvoiceResponseInvoiceDetail(data)
{
    /**
     * @member {Int32} invoicedtl_rowid
     */
    this['invoicedtl_rowid'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
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
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_desc
     */
    this['hsn_desc'] = null;
    
    /**
     * @member {Decimal} qty
     */
    this['qty'] = null;
    
    /**
     * @member {String} uomtype_code
     */
    this['uomtype_code'] = null;
    
    /**
     * @member {String} uomtype_desc
     */
    this['uomtype_desc'] = null;
    
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
     * @member {Decimal} tax_rate
     */
    this['tax_rate'] = null;
    
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
            if(data.getElementsByTagName("invoicedtl_rowid")[0].attributes.length == 0) //Check NULL value
                this['invoicedtl_rowid'] = data.getElementsByTagName("invoicedtl_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("invoice_no")[0].attributes.length == 0) //Check NULL value
                this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
            
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
            
            if(data.getElementsByTagName("hsn_code")[0].attributes.length == 0) //Check NULL value
                this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_desc")[0].attributes.length == 0) //Check NULL value
                this['hsn_desc'] = (data.getElementsByTagName("hsn_desc")[0].lastChild != null) ? data.getElementsByTagName("hsn_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("qty")[0].attributes.length == 0) //Check NULL value
                this['qty'] = data.getElementsByTagName("qty")[0].lastChild.nodeValue;
            
            this['uomtype_code'] = (data.getElementsByTagName("uomtype_code")[0].lastChild != null) ? data.getElementsByTagName("uomtype_code")[0].lastChild.nodeValue : "";
            
            this['uomtype_desc'] = (data.getElementsByTagName("uomtype_desc")[0].lastChild != null) ? data.getElementsByTagName("uomtype_desc")[0].lastChild.nodeValue : "";
            
            this['base_price'] = data.getElementsByTagName("base_price")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("product_amount")[0].attributes.length == 0) //Check NULL value
                this['product_amount'] = data.getElementsByTagName("product_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("discount_amount")[0].attributes.length == 0) //Check NULL value
                this['discount_amount'] = data.getElementsByTagName("discount_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("tax_amount")[0].attributes.length == 0) //Check NULL value
                this['tax_amount'] = data.getElementsByTagName("tax_amount")[0].lastChild.nodeValue;
            
            this['tax_rate'] = data.getElementsByTagName("tax_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("net_amount")[0].attributes.length == 0) //Check NULL value
                this['net_amount'] = data.getElementsByTagName("net_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['invoicedtl_rowid'] = data['invoicedtl_rowid'];
            
            this['invoice_no'] = data['invoice_no'];
            
            this['product_catg_code'] = data['product_catg_code'];
            
            this['product_catg_desc'] = data['product_catg_desc'];
            
            this['product_subcatg_code'] = data['product_subcatg_code'];
            
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
            
            this['product_code'] = data['product_code'];
            
            this['product_desc'] = data['product_desc'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_desc'] = data['hsn_desc'];
            
            this['qty'] = data['qty'].toFixed(2);
            
            this['uomtype_code'] = data['uomtype_code'];
            
            this['uomtype_desc'] = data['uomtype_desc'];
            
            this['base_price'] = data['base_price'].toFixed(4);
            
            this['product_amount'] = data['product_amount'].toFixed(4);
            
            this['discount_amount'] = data['discount_amount'].toFixed(4);
            
            this['tax_amount'] = data['tax_amount'].toFixed(4);
            
            this['tax_rate'] = data['tax_rate'].toFixed(4);
            
            this['net_amount'] = data['net_amount'].toFixed(4);
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function getInvoiceResponseInvoiceTax(data)
{
    /**
     * @member {Int32} invoicetax_rowid
     */
    this['invoicetax_rowid'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} product_name
     */
    this['product_name'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_desc
     */
    this['hsn_desc'] = null;
    
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
     * @member {String} tax_type
     */
    this['tax_type'] = null;
    
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
            this['invoicetax_rowid'] = data.getElementsByTagName("invoicetax_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("invoice_no")[0].attributes.length == 0) //Check NULL value
                this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
            
            this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            this['product_name'] = (data.getElementsByTagName("product_name")[0].lastChild != null) ? data.getElementsByTagName("product_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_code")[0].attributes.length == 0) //Check NULL value
                this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_desc")[0].attributes.length == 0) //Check NULL value
                this['hsn_desc'] = (data.getElementsByTagName("hsn_desc")[0].lastChild != null) ? data.getElementsByTagName("hsn_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("cgst_rate")[0].attributes.length == 0) //Check NULL value
                this['cgst_rate'] = data.getElementsByTagName("cgst_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("sgst_rate")[0].attributes.length == 0) //Check NULL value
                this['sgst_rate'] = data.getElementsByTagName("sgst_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("igst_rate")[0].attributes.length == 0) //Check NULL value
                this['igst_rate'] = data.getElementsByTagName("igst_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("ugst_rate")[0].attributes.length == 0) //Check NULL value
                this['ugst_rate'] = data.getElementsByTagName("ugst_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("tax_type")[0].attributes.length == 0) //Check NULL value
                this['tax_type'] = (data.getElementsByTagName("tax_type")[0].lastChild != null) ? data.getElementsByTagName("tax_type")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("tax_rate")[0].attributes.length == 0) //Check NULL value
                this['tax_rate'] = data.getElementsByTagName("tax_rate")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("taxable_amount")[0].attributes.length == 0) //Check NULL value
                this['taxable_amount'] = data.getElementsByTagName("taxable_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("tax_amount")[0].attributes.length == 0) //Check NULL value
                this['tax_amount'] = data.getElementsByTagName("tax_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("mode_flag")[0].attributes.length == 0) //Check NULL value
                this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['invoicetax_rowid'] = data['invoicetax_rowid'];
            
            this['invoice_no'] = data['invoice_no'];
            
            this['product_code'] = data['product_code'];
            
            this['product_name'] = data['product_name'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_desc'] = data['hsn_desc'];
            
            this['cgst_rate'] = data['cgst_rate'].toFixed(4);
            
            this['sgst_rate'] = data['sgst_rate'].toFixed(4);
            
            this['igst_rate'] = data['igst_rate'].toFixed(4);
            
            this['ugst_rate'] = data['ugst_rate'].toFixed(4);
            
            this['tax_type'] = data['tax_type'];
            
            this['tax_rate'] = data['tax_rate'].toFixed(4);
            
            this['taxable_amount'] = data['taxable_amount'].toFixed(4);
            
            this['tax_amount'] = data['tax_amount'].toFixed(4);
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function getInvoiceResponsePaymentCollection(data)
{
    /**
     * @member {Int32} paymentcollection_rowid
     */
    this['paymentcollection_rowid'] = null;
    
    /**
     * @member {String} payment_type
     */
    this['payment_type'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} ref_no
     */
    this['ref_no'] = null;
    
    /**
     * @member {String} payment_date
     */
    this['payment_date'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {String} process_desc
     */
    this['process_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['paymentcollection_rowid'] = data.getElementsByTagName("paymentcollection_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("payment_type")[0].attributes.length == 0) //Check NULL value
                this['payment_type'] = (data.getElementsByTagName("payment_type")[0].lastChild != null) ? data.getElementsByTagName("payment_type")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_no")[0].attributes.length == 0) //Check NULL value
                this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("balance_amount")[0].attributes.length == 0) //Check NULL value
                this['balance_amount'] = data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("payment_amount")[0].attributes.length == 0) //Check NULL value
                this['payment_amount'] = data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("payment_mode")[0].attributes.length == 0) //Check NULL value
                this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ref_no")[0].attributes.length == 0) //Check NULL value
                this['ref_no'] = (data.getElementsByTagName("ref_no")[0].lastChild != null) ? data.getElementsByTagName("ref_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_date")[0].attributes.length == 0) //Check NULL value
                this['payment_date'] = (data.getElementsByTagName("payment_date")[0].lastChild != null) ? data.getElementsByTagName("payment_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status")[0].attributes.length == 0) //Check NULL value
                this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_desc")[0].attributes.length == 0) //Check NULL value
                this['process_desc'] = (data.getElementsByTagName("process_desc")[0].lastChild != null) ? data.getElementsByTagName("process_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("mode_flag")[0].attributes.length == 0) //Check NULL value
                this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymentcollection_rowid'] = data['paymentcollection_rowid'];
            
            this['payment_type'] = data['payment_type'];
            
            this['payment_no'] = data['payment_no'];
            
            this['balance_amount'] = data['balance_amount'].toFixed(4);
            
            this['payment_amount'] = data['payment_amount'].toFixed(4);
            
            this['payment_mode'] = data['payment_mode'];
            
            this['ref_no'] = data['ref_no'];
            
            this['payment_date'] = data['payment_date'];
            
            this['process_status'] = data['process_status'];
            
            this['process_desc'] = data['process_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

