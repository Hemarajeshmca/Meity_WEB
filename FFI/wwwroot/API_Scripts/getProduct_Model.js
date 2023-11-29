var responseDataFormat = "JSON";

function getProductRequest(data)
{
    /**
     * @member {getProductRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getProductRequestcontext(data['context']);
    }
}

function getProductRequestcontext(data)
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
     * @member {getProductRequestDetail} Detail
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
            this['Detail'] = new getProductRequestDetail(data['Detail']);
    }
}

function getProductRequestDetail(data)
{
    /**
     * @member {Int32} product_rowid
     */
    this['product_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('product_rowid'))
            this['product_rowid'] = data['product_rowid'];
        
    }
}

function getProductResponse(data, format)
{
    /**
     * @member {getProductResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getProductResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getProductResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getProductResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getProductResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getProductResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getProductResponseApplicationException(data)
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

function getProductResponsecontext(data)
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
     * @member {getProductResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Detail'] = new getProductResponseDetail(data.getElementsByTagName("Detail")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Detail'] = new getProductResponseDetail(data['Detail']);
        }
    }
}

function getProductResponseDetail(data)
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
     * @member {String} ic_name
     */
    this['ic_name'] = null;
    
    /**
     * @member {Int16} taxrate_rowid
     */
    this['taxrate_rowid'] = null;
    
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
     * @member {String} product_name
     */
    this['product_name'] = null;
    
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
     * @member {String} uomtype_desc
     */
    this['uomtype_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
            this['product_rowid'] = data.getElementsByTagName("product_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("orgn_code")[0].attributes.length == 0) //Check NULL value
                this['orgn_code'] = (data.getElementsByTagName("orgn_code")[0].lastChild != null) ? data.getElementsByTagName("orgn_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_code")[0].attributes.length == 0) //Check NULL value
                this['ic_code'] = (data.getElementsByTagName("ic_code")[0].lastChild != null) ? data.getElementsByTagName("ic_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ic_name")[0].attributes.length == 0) //Check NULL value
                this['ic_name'] = (data.getElementsByTagName("ic_name")[0].lastChild != null) ? data.getElementsByTagName("ic_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("taxrate_rowid")[0].attributes.length == 0) //Check NULL value
                this['taxrate_rowid'] = data.getElementsByTagName("taxrate_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("product_catg_code")[0].attributes.length == 0) //Check NULL value
                this['product_catg_code'] = (data.getElementsByTagName("product_catg_code")[0].lastChild != null) ? data.getElementsByTagName("product_catg_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_catg_desc")[0].attributes.length == 0) //Check NULL value
                this['product_catg_desc'] = (data.getElementsByTagName("product_catg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_catg_desc")[0].lastChild.nodeValue : "";
            
            this['product_subcatg_code'] = (data.getElementsByTagName("product_subcatg_code")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("product_subcatg_desc")[0].attributes.length == 0) //Check NULL value
                this['product_subcatg_desc'] = (data.getElementsByTagName("product_subcatg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_desc")[0].lastChild.nodeValue : "";
            
            this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            this['product_name'] = (data.getElementsByTagName("product_name")[0].lastChild != null) ? data.getElementsByTagName("product_name")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("hsn_code")[0].attributes.length == 0) //Check NULL value
                this['hsn_code'] = (data.getElementsByTagName("hsn_code")[0].lastChild != null) ? data.getElementsByTagName("hsn_code")[0].lastChild.nodeValue : "";
            
            this['hsn_description'] = (data.getElementsByTagName("hsn_description")[0].lastChild != null) ? data.getElementsByTagName("hsn_description")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("base_price")[0].attributes.length == 0) //Check NULL value
                this['base_price'] = data.getElementsByTagName("base_price")[0].lastChild.nodeValue;
            
            this['current_qty'] = data.getElementsByTagName("current_qty")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("uomtype_code")[0].attributes.length == 0) //Check NULL value
                this['uomtype_code'] = (data.getElementsByTagName("uomtype_code")[0].lastChild != null) ? data.getElementsByTagName("uomtype_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("uomtype_desc")[0].attributes.length == 0) //Check NULL value
                this['uomtype_desc'] = (data.getElementsByTagName("uomtype_desc")[0].lastChild != null) ? data.getElementsByTagName("uomtype_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("effective_from")[0].attributes.length == 0) //Check NULL value
                this['effective_from'] = (data.getElementsByTagName("effective_from")[0].lastChild != null) ? data.getElementsByTagName("effective_from")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("effective_to")[0].attributes.length == 0) //Check NULL value
                this['effective_to'] = (data.getElementsByTagName("effective_to")[0].lastChild != null) ? data.getElementsByTagName("effective_to")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_code")[0].attributes.length == 0) //Check NULL value
                this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("status_desc")[0].attributes.length == 0) //Check NULL value
                this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("row_timestamp")[0].attributes.length == 0) //Check NULL value
                this['row_timestamp'] = data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue;
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['product_rowid'] = data['product_rowid'];
            
            this['orgn_code'] = data['orgn_code'];
            
            this['ic_code'] = data['ic_code'];
            
            this['ic_name'] = data['ic_name'];
            
            this['taxrate_rowid'] = data['taxrate_rowid'];
            
            this['product_catg_code'] = data['product_catg_code'];
            
            this['product_catg_desc'] = data['product_catg_desc'];
            
            this['product_subcatg_code'] = data['product_subcatg_code'];
            
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
            
            this['product_code'] = data['product_code'];
            
            this['product_name'] = data['product_name'];
            
            this['hsn_code'] = data['hsn_code'];
            
            this['hsn_description'] = data['hsn_description'];
            
            this['base_price'] = data['base_price'].toFixed(4);
            
            this['current_qty'] = data['current_qty'].toFixed(2);
            
            this['uomtype_code'] = data['uomtype_code'];
            
            this['uomtype_desc'] = data['uomtype_desc'];
            
            this['effective_from'] = data['effective_from'];
            
            this['effective_to'] = data['effective_to'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

