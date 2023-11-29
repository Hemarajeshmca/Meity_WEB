var responseDataFormat = "JSON";

function product_searchRequest(data)
{
    /**
     * @member {product_searchRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new product_searchRequestcontext(data['context']);
    }
}

function product_searchRequestcontext(data)
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
     * @member {product_searchRequestHeader} Header
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
            this['Header'] = new product_searchRequestHeader(data['Header']);
    }
}

function product_searchRequestHeader(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_Fromvalue
     */
    this['FilterBy_Fromvalue'] = null;
    
    /**
     * @member {String} FilterBy_Tovalue
     */
    this['FilterBy_Tovalue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_Fromvalue'))
            this['FilterBy_Fromvalue'] = data['FilterBy_Fromvalue'];
        
        if(data.hasOwnProperty('FilterBy_Tovalue'))
            this['FilterBy_Tovalue'] = data['FilterBy_Tovalue'];
        
    }
}

function product_searchResponse(data, format)
{
    /**
     * @member {product_searchResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {product_searchResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new product_searchResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new product_searchResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new product_searchResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new product_searchResponseApplicationException(data['ApplicationException']);
        }
    }
}

function product_searchResponseApplicationException(data)
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

function product_searchResponsecontext(data)
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
     * @member {product_searchResponseDetail} Detail
     */
    this['Detail'] = null;
    
    /**
     * @member {product_searchResponseInvoiceTax} InvoiceTax
     */
    this['InvoiceTax'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new product_searchResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
            
            InvoiceTax = [];
            for(InvoiceTaxchildi = 0; InvoiceTaxchildi < data.getElementsByTagName("InvoiceTax").length; InvoiceTaxchildi++)
            {
                InvoiceTax.push(new product_searchResponseInvoiceTax(data.getElementsByTagName("InvoiceTax")[InvoiceTaxchildi]));
            }
            if(data.getElementsByTagName("InvoiceTax").length > 0)
                this['InvoiceTax'] = InvoiceTax;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new product_searchResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
            
            
            if(data.hasOwnProperty('InvoiceTax') && data['InvoiceTax'] != null)
            {
                InvoiceTax = [];
                for(InvoiceTaxindex = 0; InvoiceTaxindex < data['InvoiceTax'].length; InvoiceTaxindex++)
                {
                    InvoiceTax.push(new product_searchResponseInvoiceTax(data['InvoiceTax'][InvoiceTaxindex]));
                }
                this['InvoiceTax'] = InvoiceTax;
            }
        }
    }
}

function product_searchResponseDetail(data)
{
    /**
     * @member {String} ic_code
     */
    this['ic_code'] = null;
    
    /**
     * @member {String} productcategory
     */
    this['productcategory'] = null;
    
    /**
     * @member {String} productcategory_desc
     */
    this['productcategory_desc'] = null;
    
    /**
     * @member {String} productsubcategory
     */
    this['productsubcategory'] = null;
    
    /**
     * @member {String} productsubcategory_desc
     */
    this['productsubcategory_desc'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} product_name
     */
    this['product_name'] = null;
    
    /**
     * @member {String} uomtype_code
     */
    this['uomtype_code'] = null;
    
    /**
     * @member {String} uomtype_code_desc
     */
    this['uomtype_code_desc'] = null;
    
    /**
     * @member {Decimal} base_price
     */
    this['base_price'] = null;
    
    /**
     * @member {Decimal} current_qty
     */
    this['current_qty'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("ic_code")[0].attributes.length == 0) //Check NULL value
                this['ic_code'] = (data.getElementsByTagName("ic_code")[0].lastChild != null) ? data.getElementsByTagName("ic_code")[0].lastChild.nodeValue : "";
            
            this['productcategory'] = (data.getElementsByTagName("productcategory")[0].lastChild != null) ? data.getElementsByTagName("productcategory")[0].lastChild.nodeValue : "";
            
            this['productcategory_desc'] = (data.getElementsByTagName("productcategory_desc")[0].lastChild != null) ? data.getElementsByTagName("productcategory_desc")[0].lastChild.nodeValue : "";
            
            this['productsubcategory'] = (data.getElementsByTagName("productsubcategory")[0].lastChild != null) ? data.getElementsByTagName("productsubcategory")[0].lastChild.nodeValue : "";
            
            this['productsubcategory_desc'] = (data.getElementsByTagName("productsubcategory_desc")[0].lastChild != null) ? data.getElementsByTagName("productsubcategory_desc")[0].lastChild.nodeValue : "";
            
            this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            this['product_name'] = (data.getElementsByTagName("product_name")[0].lastChild != null) ? data.getElementsByTagName("product_name")[0].lastChild.nodeValue : "";
            
            this['uomtype_code'] = (data.getElementsByTagName("uomtype_code")[0].lastChild != null) ? data.getElementsByTagName("uomtype_code")[0].lastChild.nodeValue : "";
            
            this['uomtype_code_desc'] = (data.getElementsByTagName("uomtype_code_desc")[0].lastChild != null) ? data.getElementsByTagName("uomtype_code_desc")[0].lastChild.nodeValue : "";
            
            this['base_price'] = parseFloat(data.getElementsByTagName("base_price")[0].lastChild.nodeValue);
            
            this['current_qty'] = parseFloat(data.getElementsByTagName("current_qty")[0].lastChild.nodeValue);
        }
        else {
            this['ic_code'] = data['ic_code'];
            
            this['productcategory'] = data['productcategory'];
            
            this['productcategory_desc'] = data['productcategory_desc'];
            
            this['productsubcategory'] = data['productsubcategory'];
            
            this['productsubcategory_desc'] = data['productsubcategory_desc'];
            
            this['product_code'] = data['product_code'];
            
            this['product_name'] = data['product_name'];
            
            this['uomtype_code'] = data['uomtype_code'];
            
            this['uomtype_code_desc'] = data['uomtype_code_desc'];
            
            this['base_price'] = data['base_price'];
            
            this['current_qty'] = data['current_qty'];
        }
    }
}

function product_searchResponseInvoiceTax(data)
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
            this['invoicetax_rowid'] = parseInt(data.getElementsByTagName("invoicetax_rowid")[0].lastChild.nodeValue);
            
            this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
            
            this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            this['product_name'] = (data.getElementsByTagName("product_name")[0].lastChild != null) ? data.getElementsByTagName("product_name")[0].lastChild.nodeValue : "";
            
            this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_desc'] = (data.getElementsByTagName("hsn_desc")[0].lastChild != null) ? data.getElementsByTagName("hsn_desc")[0].lastChild.nodeValue : "";
            
            this['cgst_rate'] = parseFloat(data.getElementsByTagName("cgst_rate")[0].lastChild.nodeValue);
            
            this['sgst_rate'] = parseFloat(data.getElementsByTagName("sgst_rate")[0].lastChild.nodeValue);
            
            this['igst_rate'] = parseFloat(data.getElementsByTagName("igst_rate")[0].lastChild.nodeValue);
            
            this['ugst_rate'] = parseFloat(data.getElementsByTagName("ugst_rate")[0].lastChild.nodeValue);
            
            this['tax_type'] = (data.getElementsByTagName("tax_type")[0].lastChild != null) ? data.getElementsByTagName("tax_type")[0].lastChild.nodeValue : "";
            
            this['tax_rate'] = parseFloat(data.getElementsByTagName("tax_rate")[0].lastChild.nodeValue);
            
            this['taxable_amount'] = parseFloat(data.getElementsByTagName("taxable_amount")[0].lastChild.nodeValue);
            
            this['tax_amount'] = parseFloat(data.getElementsByTagName("tax_amount")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['invoicetax_rowid'] = data['invoicetax_rowid'];
            
            this['invoice_no'] = data['invoice_no'];
            
            this['product_code'] = data['product_code'];
            
            this['product_name'] = data['product_name'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_desc'] = data['hsn_desc'];
            
            this['cgst_rate'] = data['cgst_rate'];
            
            this['sgst_rate'] = data['sgst_rate'];
            
            this['igst_rate'] = data['igst_rate'];
            
            this['ugst_rate'] = data['ugst_rate'];
            
            this['tax_type'] = data['tax_type'];
            
            this['tax_rate'] = data['tax_rate'];
            
            this['taxable_amount'] = data['taxable_amount'];
            
            this['tax_amount'] = data['tax_amount'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

