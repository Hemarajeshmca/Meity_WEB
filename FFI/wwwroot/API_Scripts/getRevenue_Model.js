var responseDataFormat = "JSON";

function getRevenueRequest(data)
{
    /**
     * @member {getRevenueRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getRevenueRequestcontext(data['context']);
    }
}

function getRevenueRequestcontext(data)
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
     * @member {getRevenueRequestHeader} Header
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
            this['Header'] = new getRevenueRequestHeader(data['Header']);
    }
}

function getRevenueRequestHeader(data)
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
        if(data.hasOwnProperty('revenue_rowid'))
            this['revenue_rowid'] = data['revenue_rowid'];
        
        if(data.hasOwnProperty('revenue_id'))
            this['revenue_id'] = data['revenue_id'];
        
    }
}

function getRevenueResponse(data, format)
{
    /**
     * @member {getRevenueResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getRevenueResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getRevenueResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getRevenueResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getRevenueResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getRevenueResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getRevenueResponseApplicationException(data)
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

function getRevenueResponsecontext(data)
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
     * @member {getRevenueResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getRevenueResponseDetails} Details
     */
    this['Details'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getRevenueResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Details = [];
            for(Detailschildi = 0; Detailschildi < data.getElementsByTagName("Details").length; Detailschildi++)
            {
                Details.push(new getRevenueResponseDetails(data.getElementsByTagName("Details")[Detailschildi]));
            }
            if(data.getElementsByTagName("Details").length > 0)
                this['Details'] = Details;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getRevenueResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Details') && data['Details'] != null)
            {
                Details = [];
                for(Detailsindex = 0; Detailsindex < data['Details'].length; Detailsindex++)
                {
                    Details.push(new getRevenueResponseDetails(data['Details'][Detailsindex]));
                }
                this['Details'] = Details;
            }
        }
    }
}

function getRevenueResponseHeader(data)
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
     * @member {String} financial_year
     */
    this['financial_year'] = null;
    
    /**
     * @member {String} business_code
     */
    this['business_code'] = null;
    
    /**
     * @member {String} business_desc
     */
    this['business_desc'] = null;
    
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
            this['revenue_rowid'] = data.getElementsByTagName("revenue_rowid")[0].lastChild.nodeValue;
            
            this['revenue_id'] = (data.getElementsByTagName("revenue_id")[0].lastChild != null) ? data.getElementsByTagName("revenue_id")[0].lastChild.nodeValue : "";
            
            this['financial_year_code'] = (data.getElementsByTagName("financial_year_code")[0].lastChild != null) ? data.getElementsByTagName("financial_year_code")[0].lastChild.nodeValue : "";
            
            this['financial_year'] = (data.getElementsByTagName("financial_year")[0].lastChild != null) ? data.getElementsByTagName("financial_year")[0].lastChild.nodeValue : "";
            
            this['business_code'] = (data.getElementsByTagName("business_code")[0].lastChild != null) ? data.getElementsByTagName("business_code")[0].lastChild.nodeValue : "";
            
            this['business_desc'] = (data.getElementsByTagName("business_desc")[0].lastChild != null) ? data.getElementsByTagName("business_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['revenue_rowid'] = data['revenue_rowid'];
            
            this['revenue_id'] = data['revenue_id'];
            
            this['financial_year_code'] = data['financial_year_code'];
            
            this['financial_year'] = data['financial_year'];
            
            this['business_code'] = data['business_code'];
            
            this['business_desc'] = data['business_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function getRevenueResponseDetails(data)
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
            this['revenuedtl_rowid'] = data.getElementsByTagName("revenuedtl_rowid")[0].lastChild.nodeValue;
            
            this['trn_date'] = data.getElementsByTagName("trn_date")[0].lastChild.nodeValue;
            
            this['revenue_head'] = (data.getElementsByTagName("revenue_head")[0].lastChild != null) ? data.getElementsByTagName("revenue_head")[0].lastChild.nodeValue : "";
            
            this['revenue_desc'] = (data.getElementsByTagName("revenue_desc")[0].lastChild != null) ? data.getElementsByTagName("revenue_desc")[0].lastChild.nodeValue : "";
            
            this['bill_no'] = (data.getElementsByTagName("bill_no")[0].lastChild != null) ? data.getElementsByTagName("bill_no")[0].lastChild.nodeValue : "";
            
            this['revenue_amount'] = data.getElementsByTagName("revenue_amount")[0].lastChild.nodeValue;
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['revenuedtl_rowid'] = data['revenuedtl_rowid'];
            
            this['trn_date'] = data['trn_date'];
            
            this['revenue_head'] = data['revenue_head'];
            
            this['revenue_desc'] = data['revenue_desc'];
            
            this['bill_no'] = data['bill_no'];
            
            this['revenue_amount'] = data['revenue_amount'].toFixed(2);
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

