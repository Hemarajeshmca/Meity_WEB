var responseDataFormat = "JSON";

function saveDividendStructureRequest(data)
{
    /**
     * @member {saveDividendStructureRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveDividendStructureRequestcontext(data['context']);
    }
}

function saveDividendStructureRequestcontext(data)
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
     * @member {saveDividendStructureRequestHeader} Header
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
            this['Header'] = new saveDividendStructureRequestHeader(data['Header']);
    }
}

function saveDividendStructureRequestHeader(data)
{
    /**
     * @member {Int32} dividendstru_rowid
     */
    this['dividendstru_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {String} dividend_type
     */
    this['dividend_type'] = null;
    
    /**
     * @member {Decimal} dividend_percent
     */
    this['dividend_percent'] = null;
    
    /**
     * @member {String} report_date
     */
    this['report_date'] = null;
    
    /**
     * @member {String} declared_date
     */
    this['declared_date'] = null;
    
    /**
     * @member {String} payor_bank_code
     */
    this['payor_bank_code'] = null;
    
    /**
     * @member {String} payor_bank_acc_type
     */
    this['payor_bank_acc_type'] = null;
    
    /**
     * @member {String} payor_bank_acc_no
     */
    this['payor_bank_acc_no'] = null;
    
    /**
     * @member {String} payor_ifsc_code
     */
    this['payor_ifsc_code'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('dividendstru_rowid'))
            this['dividendstru_rowid'] = data['dividendstru_rowid'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('finyear_code'))
            this['finyear_code'] = data['finyear_code'];
        
        if(data.hasOwnProperty('period_from'))
            this['period_from'] = data['period_from'];
        
        if(data.hasOwnProperty('period_to'))
            this['period_to'] = data['period_to'];
        
        if(data.hasOwnProperty('dividend_type'))
            this['dividend_type'] = data['dividend_type'];
        
        if(data.hasOwnProperty('dividend_percent'))
            this['dividend_percent'] = data['dividend_percent'];
        
        if(data.hasOwnProperty('report_date'))
            this['report_date'] = data['report_date'];
        
        if(data.hasOwnProperty('declared_date'))
            this['declared_date'] = data['declared_date'];
        
        if(data.hasOwnProperty('payor_bank_code'))
            this['payor_bank_code'] = data['payor_bank_code'];
        
        if(data.hasOwnProperty('payor_bank_acc_type'))
            this['payor_bank_acc_type'] = data['payor_bank_acc_type'];
        
        if(data.hasOwnProperty('payor_bank_acc_no'))
            this['payor_bank_acc_no'] = data['payor_bank_acc_no'];
        
        if(data.hasOwnProperty('payor_ifsc_code'))
            this['payor_ifsc_code'] = data['payor_ifsc_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveDividendStructureResponse(data, format)
{
    /**
     * @member {saveDividendStructureResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveDividendStructureResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveDividendStructureResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveDividendStructureResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveDividendStructureResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveDividendStructureResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveDividendStructureResponseApplicationException(data)
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

function saveDividendStructureResponsecontext(data)
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
     * @member {saveDividendStructureResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveDividendStructureResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveDividendStructureResponseHeader(data['Header']);
        }
    }
}

function saveDividendStructureResponseHeader(data)
{
    /**
     * @member {Int32} dividendstru_rowid
     */
    this['dividendstru_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['dividendstru_rowid'] = parseInt(data.getElementsByTagName("dividendstru_rowid")[0].lastChild.nodeValue);
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['dividendstru_rowid'] = data['dividendstru_rowid'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
        }
    }
}

