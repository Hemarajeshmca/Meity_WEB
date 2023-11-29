var responseDataFormat = "JSON";

function saveProductRequest(data)
{
    /**
     * @member {saveProductRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveProductRequestcontext(data['context']);
    }
}

function saveProductRequestcontext(data)
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
     * @member {saveProductRequestDetail} Detail
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
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            this['Detail'] = new saveProductRequestDetail(data['Detail']);
    }
}

function saveProductRequestDetail(data)
{
    /**
     * @member {Int32} product_rowid
     */
    this['product_rowid'] = null;
    
    /**
     * @member {String} orgn_code
     */
    this['orgn_code'] = null;
    
    /**
     * @member {String} ic_code
     */
    this['ic_code'] = null;
    
    /**
     * @member {Int16} taxrate_rowid
     */
    this['taxrate_rowid'] = null;
    
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
     * @member {Decimal} current_product
     */
    this['current_product'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {String} hsn_description
     */
    this['hsn_description'] = null;
    
    /**
     * @member {Decimal} base_price
     */
    this['base_price'] = null;
    
    /**
     * @member {Decimal} current_qty
     */
    this['current_qty'] = null;
    
    /**
     * @member {String} uomtype_code
     */
    this['uomtype_code'] = null;
    
    /**
     * @member {String} effective_from
     */
    this['effective_from'] = null;
    
    /**
     * @member {String} effective_to
     */
    this['effective_to'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {DateTime} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} product_name
     */
    this['product_name'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('product_rowid'))
            this['product_rowid'] = data['product_rowid'];
        
        if(data.hasOwnProperty('orgn_code'))
            this['orgn_code'] = data['orgn_code'];
        
        if(data.hasOwnProperty('ic_code'))
            this['ic_code'] = data['ic_code'];
        
        if(data.hasOwnProperty('taxrate_rowid'))
            this['taxrate_rowid'] = data['taxrate_rowid'];
        
        if(data.hasOwnProperty('product_catg_code'))
            this['product_catg_code'] = data['product_catg_code'];
        
        if(data.hasOwnProperty('product_subcatg_code'))
            this['product_subcatg_code'] = data['product_subcatg_code'];
        
        if(data.hasOwnProperty('product_code'))
            this['product_code'] = data['product_code'];
        
        if(data.hasOwnProperty('current_product'))
            this['current_product'] = data['current_product'];
        
        if(data.hasOwnProperty('hsn_code'))
            this['hsn_code'] = data['hsn_code'];
        
        if(data.hasOwnProperty('hsn_description'))
            this['hsn_description'] = data['hsn_description'];
        
        if(data.hasOwnProperty('base_price'))
            this['base_price'] = data['base_price'];
        
        if(data.hasOwnProperty('current_qty'))
            this['current_qty'] = data['current_qty'];
        
        if(data.hasOwnProperty('uomtype_code'))
            this['uomtype_code'] = data['uomtype_code'];
        
        if(data.hasOwnProperty('effective_from'))
            this['effective_from'] = data['effective_from'];
        
        if(data.hasOwnProperty('effective_to'))
            this['effective_to'] = data['effective_to'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('product_name'))
            this['product_name'] = data['product_name'];
        
    }
}

function saveProductResponse(data, format)
{
    /**
     * @member {saveProductResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveProductResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveProductResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveProductResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveProductResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveProductResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveProductResponseApplicationException(data)
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

function saveProductResponsecontext(data)
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
     * @member {saveProductResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Detail'] = new saveProductResponseDetail(data.getElementsByTagName("Detail")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Detail'] = new saveProductResponseDetail(data['Detail']);
        }
    }
}

function saveProductResponseDetail(data)
{
    /**
     * @member {Int32} product_rowid
     */
    this['product_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['product_rowid'] = data.getElementsByTagName("product_rowid")[0].lastChild.nodeValue;
        }
        else {
            this['product_rowid'] = data['product_rowid'];
        }
    }
}

