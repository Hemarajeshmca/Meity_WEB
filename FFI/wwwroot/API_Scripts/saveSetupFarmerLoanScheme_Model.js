var responseDataFormat = "JSON";

function saveSetupFarmerLoanSchemeRequest(data)
{
    /**
     * @member {saveSetupFarmerLoanSchemeRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveSetupFarmerLoanSchemeRequestcontext(data['context']);
    }
}

function saveSetupFarmerLoanSchemeRequestcontext(data)
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
     * @member {saveSetupFarmerLoanSchemeRequestHeader} Header
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
            this['Header'] = new saveSetupFarmerLoanSchemeRequestHeader(data['Header']);
    }
}

function saveSetupFarmerLoanSchemeRequestHeader(data)
{
    /**
     * @member {Int32} loanscheme_rowid
     */
    this['loanscheme_rowid'] = null;
    
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} fpoloan_no
     */
    this['fpoloan_no'] = null;
    
    /**
     * @member {String} creation_date
     */
    this['creation_date'] = null;
    
    /**
     * @member {String} effective_from
     */
    this['effective_from'] = null;
    
    /**
     * @member {String} effective_to
     */
    this['effective_to'] = null;
    
    /**
     * @member {Decimal} base_rate
     */
    this['base_rate'] = null;
    
    /**
     * @member {Decimal} fpo_margin_rate
     */
    this['fpo_margin_rate'] = null;
    
    /**
     * @member {Decimal} fig_margin_rate
     */
    this['fig_margin_rate'] = null;
    
    /**
     * @member {Decimal} interest_rate
     */
    this['interest_rate'] = null;
    
    /**
     * @member {String} repayment_freq
     */
    this['repayment_freq'] = null;
    
    /**
     * @member {String} repayment_freq_desc
     */
    this['repayment_freq_desc'] = null;
    
    /**
     * @member {Decimal} repayment_in_yrs
     */
    this['repayment_in_yrs'] = null;
    
    /**
     * @member {Int16} repayment_in_months
     */
    this['repayment_in_months'] = null;
    
    /**
     * @member {Int16} principle_interest_holiday_period
     */
    this['principle_interest_holiday_period'] = null;
    
    /**
     * @member {Decimal} min_loan_amount
     */
    this['min_loan_amount'] = null;
    
    /**
     * @member {Decimal} max_loan_amount
     */
    this['max_loan_amount'] = null;
    
    /**
     * @member {Decimal} allotted_amount
     */
    this['allotted_amount'] = null;
    
    /**
     * @member {Decimal} received_amount
     */
    this['received_amount'] = null;
    
    /**
     * @member {Decimal} lend_amount
     */
    this['lend_amount'] = null;
    
    /**
     * @member {Decimal} lend_balance_amount
     */
    this['lend_balance_amount'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {String} interest_type
     */
    this['interest_type'] = null;
    
    /**
     * @member {Decimal} subvention_amount
     */
    this['subvention_amount'] = null;
    
    /**
     * @member {Decimal} refund_amount
     */
    this['refund_amount'] = null;
    
    /**
     * @member {Int16} emi_start_month
     */
    this['emi_start_month'] = null;
    
    /**
     * @member {String} tp_beneficiary_flag
     */
    this['tp_beneficiary_flag'] = null;
    
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
        if(data.hasOwnProperty('loanscheme_rowid'))
            this['loanscheme_rowid'] = data['loanscheme_rowid'];
        
        if(data.hasOwnProperty('loanscheme_code'))
            this['loanscheme_code'] = data['loanscheme_code'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('loan_type'))
            this['loan_type'] = data['loan_type'];
        
        if(data.hasOwnProperty('fpoloan_no'))
            this['fpoloan_no'] = data['fpoloan_no'];
        
        if(data.hasOwnProperty('creation_date'))
            this['creation_date'] = data['creation_date'];
        
        if(data.hasOwnProperty('effective_from'))
            this['effective_from'] = data['effective_from'];
        
        if(data.hasOwnProperty('effective_to'))
            this['effective_to'] = data['effective_to'];
        
        if(data.hasOwnProperty('base_rate'))
            this['base_rate'] = data['base_rate'];
        
        if(data.hasOwnProperty('fpo_margin_rate'))
            this['fpo_margin_rate'] = data['fpo_margin_rate'];
        
        if(data.hasOwnProperty('fig_margin_rate'))
            this['fig_margin_rate'] = data['fig_margin_rate'];
        
        if(data.hasOwnProperty('interest_rate'))
            this['interest_rate'] = data['interest_rate'];
        
        if(data.hasOwnProperty('repayment_freq'))
            this['repayment_freq'] = data['repayment_freq'];
        
        if(data.hasOwnProperty('repayment_freq_desc'))
            this['repayment_freq_desc'] = data['repayment_freq_desc'];
        
        if(data.hasOwnProperty('repayment_in_yrs'))
            this['repayment_in_yrs'] = data['repayment_in_yrs'];
        
        if(data.hasOwnProperty('repayment_in_months'))
            this['repayment_in_months'] = data['repayment_in_months'];
        
        if(data.hasOwnProperty('principle_interest_holiday_period'))
            this['principle_interest_holiday_period'] = data['principle_interest_holiday_period'];
        
        if(data.hasOwnProperty('min_loan_amount'))
            this['min_loan_amount'] = data['min_loan_amount'];
        
        if(data.hasOwnProperty('max_loan_amount'))
            this['max_loan_amount'] = data['max_loan_amount'];
        
        if(data.hasOwnProperty('allotted_amount'))
            this['allotted_amount'] = data['allotted_amount'];
        
        if(data.hasOwnProperty('received_amount'))
            this['received_amount'] = data['received_amount'];
        
        if(data.hasOwnProperty('lend_amount'))
            this['lend_amount'] = data['lend_amount'];
        
        if(data.hasOwnProperty('lend_balance_amount'))
            this['lend_balance_amount'] = data['lend_balance_amount'];
        
        if(data.hasOwnProperty('interest_amount'))
            this['interest_amount'] = data['interest_amount'];
        
        if(data.hasOwnProperty('interest_type'))
            this['interest_type'] = data['interest_type'];
        
        if(data.hasOwnProperty('subvention_amount'))
            this['subvention_amount'] = data['subvention_amount'];
        
        if(data.hasOwnProperty('refund_amount'))
            this['refund_amount'] = data['refund_amount'];
        
        if(data.hasOwnProperty('emi_start_month'))
            this['emi_start_month'] = data['emi_start_month'];
        
        if(data.hasOwnProperty('tp_beneficiary_flag'))
            this['tp_beneficiary_flag'] = data['tp_beneficiary_flag'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveSetupFarmerLoanSchemeResponse(data, format)
{
    /**
     * @member {saveSetupFarmerLoanSchemeResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveSetupFarmerLoanSchemeResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveSetupFarmerLoanSchemeResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveSetupFarmerLoanSchemeResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveSetupFarmerLoanSchemeResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveSetupFarmerLoanSchemeResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveSetupFarmerLoanSchemeResponseApplicationException(data)
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

function saveSetupFarmerLoanSchemeResponsecontext(data)
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
     * @member {saveSetupFarmerLoanSchemeResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveSetupFarmerLoanSchemeResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveSetupFarmerLoanSchemeResponseHeader(data['Header']);
        }
    }
}

function saveSetupFarmerLoanSchemeResponseHeader(data)
{
    /**
     * @member {Int32} loanscheme_rowid
     */
    this['loanscheme_rowid'] = null;
    
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loanscheme_rowid'] = parseInt(data.getElementsByTagName("loanscheme_rowid")[0].lastChild.nodeValue);
            
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['loanscheme_rowid'] = data['loanscheme_rowid'];
            
            this['loanscheme_code'] = data['loanscheme_code'];
        }
    }
}

