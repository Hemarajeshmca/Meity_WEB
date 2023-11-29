var responseDataFormat = "JSON";

function saveRevenueRequest(data)
{
    /**
     * @member {saveRevenueRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveRevenueRequestcontext(data['context']);
    }
}

function saveRevenueRequestcontext(data)
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
     * @member {saveRevenueRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveRevenueRequestDetails} Details
     */
    this['Details'] = null;
    
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
            this['Header'] = new saveRevenueRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Details') && data['Details'] != null)
        {
            Details = [];
            for(Detailsindex = 0; Detailsindex < data['Details'].length; Detailsindex++)
            {
                Details.push(new saveRevenueRequestDetails(data['Details'][Detailsindex]));
            }
            this['Details'] = Details;
        }
    }
}

function saveRevenueRequestHeader(data)
{
    /**
     * @member {Int32} revenue_rowid
     */
    this['revenue_rowid'] = null;
    
    /**
     * @member {String} revenue_id
     */
    this['revenue_id'] = null;
    
    /**
     * @member {String} financial_year_code
     */
    this['financial_year_code'] = null;
    
    /**
     * @member {String} business_code
     */
    this['business_code'] = null;
    
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
        if(data.hasOwnProperty('revenue_rowid'))
            this['revenue_rowid'] = data['revenue_rowid'];
        
        if(data.hasOwnProperty('revenue_id'))
            this['revenue_id'] = data['revenue_id'];
        
        if(data.hasOwnProperty('financial_year_code'))
            this['financial_year_code'] = data['financial_year_code'];
        
        if(data.hasOwnProperty('business_code'))
            this['business_code'] = data['business_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveRevenueRequestDetails(data)
{
    /**
     * @member {Int32} revenuedtl_rowid
     */
    this['revenuedtl_rowid'] = null;
    
    /**
     * @member {DateTime} trn_date
     */
    this['trn_date'] = null;
    
    /**
     * @member {String} revenue_head
     */
    this['revenue_head'] = null;
    
    /**
     * @member {String} revenue_desc
     */
    this['revenue_desc'] = null;
    
    /**
     * @member {String} bill_no
     */
    this['bill_no'] = null;
    
    /**
     * @member {Decimal} revenue_amount
     */
    this['revenue_amount'] = null;
    
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
        if(data.hasOwnProperty('revenuedtl_rowid'))
            this['revenuedtl_rowid'] = data['revenuedtl_rowid'];
        
        if(data.hasOwnProperty('trn_date'))
            this['trn_date'] = data['trn_date'];
        
        if(data.hasOwnProperty('revenue_head'))
            this['revenue_head'] = data['revenue_head'];
        
        if(data.hasOwnProperty('revenue_desc'))
            this['revenue_desc'] = data['revenue_desc'];
        
        if(data.hasOwnProperty('bill_no'))
            this['bill_no'] = data['bill_no'];
        
        if(data.hasOwnProperty('revenue_amount'))
            this['revenue_amount'] = data['revenue_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveRevenueResponse(data, format)
{
    /**
     * @member {saveRevenueResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveRevenueResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveRevenueResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveRevenueResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveRevenueResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveRevenueResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveRevenueResponseApplicationException(data)
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

function saveRevenueResponsecontext(data)
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
     * @member {saveRevenueResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveRevenueResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveRevenueResponseHeader(data['Header']);
        }
    }
}

function saveRevenueResponseHeader(data)
{
    /**
     * @member {Int32} revenue_rowid
     */
    this['revenue_rowid'] = null;
    
    /**
     * @member {String} revenue_id
     */
    this['revenue_id'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['revenue_rowid'] = data.getElementsByTagName("revenue_rowid")[0].lastChild.nodeValue;
            
            this['revenue_id'] = (data.getElementsByTagName("revenue_id")[0].lastChild != null) ? data.getElementsByTagName("revenue_id")[0].lastChild.nodeValue : "";
        }
        else {
            this['revenue_rowid'] = data['revenue_rowid'];
            
            this['revenue_id'] = data['revenue_id'];
        }
    }
}

