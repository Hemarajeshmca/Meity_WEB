var responseDataFormat = "JSON";

function retrieveCaptialRequest(data)
{
    /**
     * @member {retrieveCaptialRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveCaptialRequestcontext(data['context']);
    }
}

function retrieveCaptialRequestcontext(data)
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
     * @member {retrieveCaptialRequestHeader} Header
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
            this['Header'] = new retrieveCaptialRequestHeader(data['Header']);
    }
}

function retrieveCaptialRequestHeader(data)
{
    /**
     * @member {Int32} capital_rowid
     */
    this['capital_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('capital_rowid'))
            this['capital_rowid'] = data['capital_rowid'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function retrieveCaptialResponse(data, format)
{
    /**
     * @member {retrieveCaptialResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveCaptialResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveCaptialResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveCaptialResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveCaptialResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveCaptialResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveCaptialResponseApplicationException(data)
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

function retrieveCaptialResponsecontext(data)
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
     * @member {retrieveCaptialResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveCaptialResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveCaptialResponseHeader(data['Header']);
        }
    }
}

function retrieveCaptialResponseHeader(data)
{
    /**
     * @member {Int32} capital_rowid
     */
    this['capital_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} fpoorgn_desc
     */
    this['fpoorgn_desc'] = null;
    
    /**
     * @member {Decimal} authorized_capital
     */
    this['authorized_capital'] = null;
    
    /**
     * @member {Decimal} paid_capital
     */
    this['paid_capital'] = null;
    
    /**
     * @member {Int16} max_shares_per_applicant
     */
    this['max_shares_per_applicant'] = null;
    
    /**
     * @member {Decimal} share_price
     */
    this['share_price'] = null;
    
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
            this['capital_rowid'] = parseInt(data.getElementsByTagName("capital_rowid")[0].lastChild.nodeValue);
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
            
            this['fpoorgn_desc'] = (data.getElementsByTagName("fpoorgn_desc")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_desc")[0].lastChild.nodeValue : "";
            
            this['authorized_capital'] = parseFloat(data.getElementsByTagName("authorized_capital")[0].lastChild.nodeValue);
            
            this['paid_capital'] = parseFloat(data.getElementsByTagName("paid_capital")[0].lastChild.nodeValue);
            
            this['max_shares_per_applicant'] = parseInt(data.getElementsByTagName("max_shares_per_applicant")[0].lastChild.nodeValue);
            
            this['share_price'] = parseFloat(data.getElementsByTagName("share_price")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['capital_rowid'] = data['capital_rowid'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
            
            this['fpoorgn_desc'] = data['fpoorgn_desc'];
            
            this['authorized_capital'] = data['authorized_capital'];
            
            this['paid_capital'] = data['paid_capital'];
            
            this['max_shares_per_applicant'] = data['max_shares_per_applicant'];
            
            this['share_price'] = data['share_price'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

