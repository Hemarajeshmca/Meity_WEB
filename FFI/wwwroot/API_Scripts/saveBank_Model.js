var responseDataFormat = "JSON";

function saveBankRequest(data)
{
    /**
     * @member {saveBankRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveBankRequestcontext(data['context']);
    }
}

function saveBankRequestcontext(data)
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
     * @member {saveBankRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveBankRequestBankDtl} BankDtl
     */
    this['BankDtl'] = null;
    
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
            this['Header'] = new saveBankRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('BankDtl') && data['BankDtl'] != null)
        {
            BankDtl = [];
            for(BankDtlindex = 0; BankDtlindex < data['BankDtl'].length; BankDtlindex++)
            {
                BankDtl.push(new saveBankRequestBankDtl(data['BankDtl'][BankDtlindex]));
            }
            this['BankDtl'] = BankDtl;
        }
    }
}

function saveBankRequestHeader(data)
{
    /**
     * @member {Int32} bank_rowid
     */
    this['bank_rowid'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_name
     */
    this['bank_name'] = null;
    
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
        if(data.hasOwnProperty('bank_rowid'))
            this['bank_rowid'] = data['bank_rowid'];
        
        if(data.hasOwnProperty('bank_code'))
            this['bank_code'] = data['bank_code'];
        
        if(data.hasOwnProperty('bank_name'))
            this['bank_name'] = data['bank_name'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveBankRequestBankDtl(data)
{
    /**
     * @member {Int32} bankifsc_rowid
     */
    this['bankifsc_rowid'] = null;
    
    /**
     * @member {String} ifsc_code
     */
    this['ifsc_code'] = null;
    
    /**
     * @member {String} branch_name
     */
    this['branch_name'] = null;
    
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
        if(data.hasOwnProperty('bankifsc_rowid'))
            this['bankifsc_rowid'] = data['bankifsc_rowid'];
        
        if(data.hasOwnProperty('ifsc_code'))
            this['ifsc_code'] = data['ifsc_code'];
        
        if(data.hasOwnProperty('branch_name'))
            this['branch_name'] = data['branch_name'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveBankResponse(data, format)
{
    /**
     * @member {saveBankResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveBankResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveBankResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveBankResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveBankResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveBankResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveBankResponseApplicationException(data)
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

function saveBankResponsecontext(data)
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
     * @member {saveBankResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveBankResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveBankResponseHeader(data['Header']);
        }
    }
}

function saveBankResponseHeader(data)
{
    /**
     * @member {Int32} bank_rowid
     */
    this['bank_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['bank_rowid'] = parseInt(data.getElementsByTagName("bank_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['bank_rowid'] = data['bank_rowid'];
        }
    }
}

