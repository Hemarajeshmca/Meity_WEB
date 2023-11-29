var responseDataFormat = "JSON";

function saveFLRepayment_MaintenanceRequest(data)
{
    /**
     * @member {saveFLRepayment_MaintenanceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFLRepayment_MaintenanceRequestcontext(data['context']);
    }
}

function saveFLRepayment_MaintenanceRequestcontext(data)
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
     * @member {saveFLRepayment_MaintenanceRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveFLRepayment_MaintenanceRequestRepaymentDtl} RepaymentDtl
     */
    this['RepaymentDtl'] = null;
    
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
            this['Header'] = new saveFLRepayment_MaintenanceRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('RepaymentDtl') && data['RepaymentDtl'] != null)
        {
            RepaymentDtl = [];
            for(RepaymentDtlindex = 0; RepaymentDtlindex < data['RepaymentDtl'].length; RepaymentDtlindex++)
            {
                RepaymentDtl.push(new saveFLRepayment_MaintenanceRequestRepaymentDtl(data['RepaymentDtl'][RepaymentDtlindex]));
            }
            this['RepaymentDtl'] = RepaymentDtl;
        }
    }
}

function saveFLRepayment_MaintenanceRequestHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int32} loanrepayment_rowid
     */
    this['loanrepayment_rowid'] = null;
    
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {Decimal} interest_rate
     */
    this['interest_rate'] = null;
    
    /**
     * @member {Int16} Tenure
     */
    this['Tenure'] = null;
    
    /**
     * @member {Decimal} loan_amount
     */
    this['loan_amount'] = null;
    
    /**
     * @member {Decimal} principle_paid
     */
    this['principle_paid'] = null;
    
    /**
     * @member {Decimal} principle_due
     */
    this['principle_due'] = null;
    
    /**
     * @member {Decimal} interest_paid
     */
    this['interest_paid'] = null;
    
    /**
     * @member {Decimal} instalment_paid
     */
    this['instalment_paid'] = null;
    
    /**
     * @member {String} loan_status
     */
    this['loan_status'] = null;
    
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
        if(data.hasOwnProperty('loan_no'))
            this['loan_no'] = data['loan_no'];
        
        if(data.hasOwnProperty('loanrepayment_rowid'))
            this['loanrepayment_rowid'] = data['loanrepayment_rowid'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('loanscheme_code'))
            this['loanscheme_code'] = data['loanscheme_code'];
        
        if(data.hasOwnProperty('interest_rate'))
            this['interest_rate'] = data['interest_rate'];
        
        if(data.hasOwnProperty('Tenure'))
            this['Tenure'] = data['Tenure'];
        
        if(data.hasOwnProperty('loan_amount'))
            this['loan_amount'] = data['loan_amount'];
        
        if(data.hasOwnProperty('principle_paid'))
            this['principle_paid'] = data['principle_paid'];
        
        if(data.hasOwnProperty('principle_due'))
            this['principle_due'] = data['principle_due'];
        
        if(data.hasOwnProperty('interest_paid'))
            this['interest_paid'] = data['interest_paid'];
        
        if(data.hasOwnProperty('instalment_paid'))
            this['instalment_paid'] = data['instalment_paid'];
        
        if(data.hasOwnProperty('loan_status'))
            this['loan_status'] = data['loan_status'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFLRepayment_MaintenanceRequestRepaymentDtl(data)
{
    /**
     * @member {Int32} loaninstalment_rowid
     */
    this['loaninstalment_rowid'] = null;
    
    /**
     * @member {Int16} instalment_no
     */
    this['instalment_no'] = null;
    
    /**
     * @member {String} instalment_date
     */
    this['instalment_date'] = null;
    
    /**
     * @member {Decimal} instalment_amount
     */
    this['instalment_amount'] = null;
    
    /**
     * @member {Decimal} principle_amount
     */
    this['principle_amount'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loaninstalment_rowid'))
            this['loaninstalment_rowid'] = data['loaninstalment_rowid'];
        
        if(data.hasOwnProperty('instalment_no'))
            this['instalment_no'] = data['instalment_no'];
        
        if(data.hasOwnProperty('instalment_date'))
            this['instalment_date'] = data['instalment_date'];
        
        if(data.hasOwnProperty('instalment_amount'))
            this['instalment_amount'] = data['instalment_amount'];
        
        if(data.hasOwnProperty('principle_amount'))
            this['principle_amount'] = data['principle_amount'];
        
        if(data.hasOwnProperty('interest_amount'))
            this['interest_amount'] = data['interest_amount'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('bank_ref_no'))
            this['bank_ref_no'] = data['bank_ref_no'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFLRepayment_MaintenanceResponse(data, format)
{
    /**
     * @member {saveFLRepayment_MaintenanceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFLRepayment_MaintenanceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFLRepayment_MaintenanceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFLRepayment_MaintenanceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFLRepayment_MaintenanceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFLRepayment_MaintenanceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFLRepayment_MaintenanceResponseApplicationException(data)
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

function saveFLRepayment_MaintenanceResponsecontext(data)
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
     * @member {saveFLRepayment_MaintenanceResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveFLRepayment_MaintenanceResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveFLRepayment_MaintenanceResponseHeader(data['Header']);
        }
    }
}

function saveFLRepayment_MaintenanceResponseHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int32} loanrepayment_rowid
     */
    this['loanrepayment_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['loanrepayment_rowid'] = parseInt(data.getElementsByTagName("loanrepayment_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['loan_no'] = data['loan_no'];
            
            this['loanrepayment_rowid'] = data['loanrepayment_rowid'];
        }
    }
}

