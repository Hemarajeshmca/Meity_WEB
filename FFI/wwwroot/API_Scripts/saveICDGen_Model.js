var responseDataFormat = "JSON";

function saveICDGenRequest(data)
{
    /**
     * @member {saveICDGenRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveICDGenRequestcontext(data['context']);
    }
}

function saveICDGenRequestcontext(data)
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
     * @member {saveICDGenRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveICDGenRequestICDGenDtl} ICDGenDtl
     */
    this['ICDGenDtl'] = null;
    
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
            this['Header'] = new saveICDGenRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('ICDGenDtl') && data['ICDGenDtl'] != null)
        {
            ICDGenDtl = [];
            for(ICDGenDtlindex = 0; ICDGenDtlindex < data['ICDGenDtl'].length; ICDGenDtlindex++)
            {
                ICDGenDtl.push(new saveICDGenRequestICDGenDtl(data['ICDGenDtl'][ICDGenDtlindex]));
            }
            this['ICDGenDtl'] = ICDGenDtl;
        }
    }
}

function saveICDGenRequestHeader(data)
{
    /**
     * @member {Int32} icdemand_rowid
     */
    this['icdemand_rowid'] = null;
    
    /**
     * @member {String} icdemand_code
     */
    this['icdemand_code'] = null;
    
    /**
     * @member {String} icdemand_date
     */
    this['icdemand_date'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('icdemand_rowid'))
            this['icdemand_rowid'] = data['icdemand_rowid'];
        
        if(data.hasOwnProperty('icdemand_code'))
            this['icdemand_code'] = data['icdemand_code'];
        
        if(data.hasOwnProperty('icdemand_date'))
            this['icdemand_date'] = data['icdemand_date'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveICDGenRequestICDGenDtl(data)
{
    /**
     * @member {Int32} icdemanddtl_rowid
     */
    this['icdemanddtl_rowid'] = null;
    
    /**
     * @member {String} icdemand_code
     */
    this['icdemand_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} product_catg_code
     */
    this['product_catg_code'] = null;
    
    /**
     * @member {String} product_subcatg_code
     */
    this['product_subcatg_code'] = null;
    
    /**
     * @member {String} hsn_code
     */
    this['hsn_code'] = null;
    
    /**
     * @member {Decimal} qty
     */
    this['qty'] = null;
    
    /**
     * @member {String} month
     */
    this['month'] = null;
    
    /**
     * @member {String} year
     */
    this['year'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
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
        if(data.hasOwnProperty('icdemanddtl_rowid'))
            this['icdemanddtl_rowid'] = data['icdemanddtl_rowid'];
        
        if(data.hasOwnProperty('icdemand_code'))
            this['icdemand_code'] = data['icdemand_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('product_code'))
            this['product_code'] = data['product_code'];
        
        if(data.hasOwnProperty('product_catg_code'))
            this['product_catg_code'] = data['product_catg_code'];
        
        if(data.hasOwnProperty('product_subcatg_code'))
            this['product_subcatg_code'] = data['product_subcatg_code'];
        
        if(data.hasOwnProperty('hsn_code'))
            this['hsn_code'] = data['hsn_code'];
        
        if(data.hasOwnProperty('qty'))
            this['qty'] = data['qty'];
        
        if(data.hasOwnProperty('month'))
            this['month'] = data['month'];
        
        if(data.hasOwnProperty('year'))
            this['year'] = data['year'];
        
        if(data.hasOwnProperty('remarks'))
            this['remarks'] = data['remarks'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveICDGenResponse(data, format)
{
    /**
     * @member {saveICDGenResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveICDGenResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveICDGenResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveICDGenResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveICDGenResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveICDGenResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveICDGenResponseApplicationException(data)
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

function saveICDGenResponsecontext(data)
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
     * @member {saveICDGenResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveICDGenResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveICDGenResponseHeader(data['Header']);
        }
    }
}

function saveICDGenResponseHeader(data)
{
    /**
     * @member {Int32} icdemand_rowid
     */
    this['icdemand_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['icdemand_rowid'] = parseInt(data.getElementsByTagName("icdemand_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['icdemand_rowid'] = data['icdemand_rowid'];
        }
    }
}

