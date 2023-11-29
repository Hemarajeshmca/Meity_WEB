var responseDataFormat = "JSON";

function retrieveSetupFarmerLoanSchemeRequest(data)
{
    /**
     * @member {retrieveSetupFarmerLoanSchemeRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveSetupFarmerLoanSchemeRequestcontext(data['context']);
    }
}

function retrieveSetupFarmerLoanSchemeRequestcontext(data)
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
     * @member {retrieveSetupFarmerLoanSchemeRequestHeader} Header
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
            this['Header'] = new retrieveSetupFarmerLoanSchemeRequestHeader(data['Header']);
    }
}

function retrieveSetupFarmerLoanSchemeRequestHeader(data)
{
    /**
     * @member {Int32} loanscheme_rowid
     */
    this['loanscheme_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loanscheme_rowid'))
            this['loanscheme_rowid'] = data['loanscheme_rowid'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function retrieveSetupFarmerLoanSchemeResponse(data, format)
{
    /**
     * @member {retrieveSetupFarmerLoanSchemeResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveSetupFarmerLoanSchemeResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveSetupFarmerLoanSchemeResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveSetupFarmerLoanSchemeResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveSetupFarmerLoanSchemeResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveSetupFarmerLoanSchemeResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveSetupFarmerLoanSchemeResponseApplicationException(data)
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

function retrieveSetupFarmerLoanSchemeResponsecontext(data)
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
     * @member {retrieveSetupFarmerLoanSchemeResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveSetupFarmerLoanSchemeResponseSubvention} Subvention
     */
    this['Subvention'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveSetupFarmerLoanSchemeResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Subvention = [];
            for(Subventionchildi = 0; Subventionchildi < data.getElementsByTagName("Subvention").length; Subventionchildi++)
            {
                Subvention.push(new retrieveSetupFarmerLoanSchemeResponseSubvention(data.getElementsByTagName("Subvention")[Subventionchildi]));
            }
            if(data.getElementsByTagName("Subvention").length > 0)
                this['Subvention'] = Subvention;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveSetupFarmerLoanSchemeResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Subvention') && data['Subvention'] != null)
            {
                Subvention = [];
                for(Subventionindex = 0; Subventionindex < data['Subvention'].length; Subventionindex++)
                {
                    Subvention.push(new retrieveSetupFarmerLoanSchemeResponseSubvention(data['Subvention'][Subventionindex]));
                }
                this['Subvention'] = Subvention;
            }
        }
    }
}

function retrieveSetupFarmerLoanSchemeResponseHeader(data)
{
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {String} loanscheme_name
     */
    this['loanscheme_name'] = null;
    
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} loan_type_desc
     */
    this['loan_type_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_name'] = (data.getElementsByTagName("loanscheme_name")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_name")[0].lastChild.nodeValue : "";
            
            this['loan_type'] = (data.getElementsByTagName("loan_type")[0].lastChild != null) ? data.getElementsByTagName("loan_type")[0].lastChild.nodeValue : "";
            
            this['loan_type_desc'] = (data.getElementsByTagName("loan_type_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_type_desc")[0].lastChild.nodeValue : "";
            
            this['fpoloan_no'] = (data.getElementsByTagName("fpoloan_no")[0].lastChild != null) ? data.getElementsByTagName("fpoloan_no")[0].lastChild.nodeValue : "";
            
            this['creation_date'] = (data.getElementsByTagName("creation_date")[0].lastChild != null) ? data.getElementsByTagName("creation_date")[0].lastChild.nodeValue : "";
            
            this['effective_from'] = (data.getElementsByTagName("effective_from")[0].lastChild != null) ? data.getElementsByTagName("effective_from")[0].lastChild.nodeValue : "";
            
            this['effective_to'] = (data.getElementsByTagName("effective_to")[0].lastChild != null) ? data.getElementsByTagName("effective_to")[0].lastChild.nodeValue : "";
            
            this['base_rate'] = parseFloat(data.getElementsByTagName("base_rate")[0].lastChild.nodeValue);
            
            this['fpo_margin_rate'] = parseFloat(data.getElementsByTagName("fpo_margin_rate")[0].lastChild.nodeValue);
            
            this['fig_margin_rate'] = parseFloat(data.getElementsByTagName("fig_margin_rate")[0].lastChild.nodeValue);
            
            this['interest_rate'] = parseFloat(data.getElementsByTagName("interest_rate")[0].lastChild.nodeValue);
            
            this['repayment_freq'] = (data.getElementsByTagName("repayment_freq")[0].lastChild != null) ? data.getElementsByTagName("repayment_freq")[0].lastChild.nodeValue : "";
            
            this['repayment_freq_desc'] = (data.getElementsByTagName("repayment_freq_desc")[0].lastChild != null) ? data.getElementsByTagName("repayment_freq_desc")[0].lastChild.nodeValue : "";
            
            this['repayment_in_yrs'] = parseFloat(data.getElementsByTagName("repayment_in_yrs")[0].lastChild.nodeValue);
            
            this['repayment_in_months'] = parseInt(data.getElementsByTagName("repayment_in_months")[0].lastChild.nodeValue);
            
            this['principle_interest_holiday_period'] = parseInt(data.getElementsByTagName("principle_interest_holiday_period")[0].lastChild.nodeValue);
            
            this['min_loan_amount'] = parseFloat(data.getElementsByTagName("min_loan_amount")[0].lastChild.nodeValue);
            
            this['max_loan_amount'] = parseFloat(data.getElementsByTagName("max_loan_amount")[0].lastChild.nodeValue);
            
            this['allotted_amount'] = parseFloat(data.getElementsByTagName("allotted_amount")[0].lastChild.nodeValue);
            
            this['received_amount'] = parseFloat(data.getElementsByTagName("received_amount")[0].lastChild.nodeValue);
            
            this['lend_amount'] = parseFloat(data.getElementsByTagName("lend_amount")[0].lastChild.nodeValue);
            
            this['lend_balance_amount'] = parseFloat(data.getElementsByTagName("lend_balance_amount")[0].lastChild.nodeValue);
            
            this['interest_amount'] = parseFloat(data.getElementsByTagName("interest_amount")[0].lastChild.nodeValue);
            
            this['interest_type'] = (data.getElementsByTagName("interest_type")[0].lastChild != null) ? data.getElementsByTagName("interest_type")[0].lastChild.nodeValue : "";
            
            this['subvention_amount'] = parseFloat(data.getElementsByTagName("subvention_amount")[0].lastChild.nodeValue);
            
            this['refund_amount'] = parseFloat(data.getElementsByTagName("refund_amount")[0].lastChild.nodeValue);
            
            this['emi_start_month'] = parseInt(data.getElementsByTagName("emi_start_month")[0].lastChild.nodeValue);
            
            this['tp_beneficiary_flag'] = (data.getElementsByTagName("tp_beneficiary_flag")[0].lastChild != null) ? data.getElementsByTagName("tp_beneficiary_flag")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_name'] = data['loanscheme_name'];
            
            this['loan_type'] = data['loan_type'];
            
            this['loan_type_desc'] = data['loan_type_desc'];
            
            this['fpoloan_no'] = data['fpoloan_no'];
            
            this['creation_date'] = data['creation_date'];
            
            this['effective_from'] = data['effective_from'];
            
            this['effective_to'] = data['effective_to'];
            
            this['base_rate'] = data['base_rate'];
            
            this['fpo_margin_rate'] = data['fpo_margin_rate'];
            
            this['fig_margin_rate'] = data['fig_margin_rate'];
            
            this['interest_rate'] = data['interest_rate'];
            
            this['repayment_freq'] = data['repayment_freq'];
            
            this['repayment_freq_desc'] = data['repayment_freq_desc'];
            
            this['repayment_in_yrs'] = data['repayment_in_yrs'];
            
            this['repayment_in_months'] = data['repayment_in_months'];
            
            this['principle_interest_holiday_period'] = data['principle_interest_holiday_period'];
            
            this['min_loan_amount'] = data['min_loan_amount'];
            
            this['max_loan_amount'] = data['max_loan_amount'];
            
            this['allotted_amount'] = data['allotted_amount'];
            
            this['received_amount'] = data['received_amount'];
            
            this['lend_amount'] = data['lend_amount'];
            
            this['lend_balance_amount'] = data['lend_balance_amount'];
            
            this['interest_amount'] = data['interest_amount'];
            
            this['interest_type'] = data['interest_type'];
            
            this['subvention_amount'] = data['subvention_amount'];
            
            this['refund_amount'] = data['refund_amount'];
            
            this['emi_start_month'] = data['emi_start_month'];
            
            this['tp_beneficiary_flag'] = data['tp_beneficiary_flag'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveSetupFarmerLoanSchemeResponseSubvention(data)
{
    /**
     * @member {Int32} loansubvention_rowid
     */
    this['loansubvention_rowid'] = null;
    
    /**
     * @member {String} subvention_code
     */
    this['subvention_code'] = null;
    
    /**
     * @member {String} subvention_name
     */
    this['subvention_name'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {Decimal} subvention_rate
     */
    this['subvention_rate'] = null;
    
    /**
     * @member {Decimal} refund_amount
     */
    this['refund_amount'] = null;
    
    /**
     * @member {String} refund_date
     */
    this['refund_date'] = null;
    
    /**
     * @member {String} refund_status
     */
    this['refund_status'] = null;
    
    /**
     * @member {String} refund_status_desc
     */
    this['refund_status_desc'] = null;
    
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
            this['loansubvention_rowid'] = parseInt(data.getElementsByTagName("loansubvention_rowid")[0].lastChild.nodeValue);
            
            this['subvention_code'] = (data.getElementsByTagName("subvention_code")[0].lastChild != null) ? data.getElementsByTagName("subvention_code")[0].lastChild.nodeValue : "";
            
            this['subvention_name'] = (data.getElementsByTagName("subvention_name")[0].lastChild != null) ? data.getElementsByTagName("subvention_name")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['subvention_rate'] = parseFloat(data.getElementsByTagName("subvention_rate")[0].lastChild.nodeValue);
            
            this['refund_amount'] = parseFloat(data.getElementsByTagName("refund_amount")[0].lastChild.nodeValue);
            
            this['refund_date'] = (data.getElementsByTagName("refund_date")[0].lastChild != null) ? data.getElementsByTagName("refund_date")[0].lastChild.nodeValue : "";
            
            this['refund_status'] = (data.getElementsByTagName("refund_status")[0].lastChild != null) ? data.getElementsByTagName("refund_status")[0].lastChild.nodeValue : "";
            
            this['refund_status_desc'] = (data.getElementsByTagName("refund_status_desc")[0].lastChild != null) ? data.getElementsByTagName("refund_status_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
            
            this['subvention_code'] = data['subvention_code'];
            
            this['subvention_name'] = data['subvention_name'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['subvention_rate'] = data['subvention_rate'];
            
            this['refund_amount'] = data['refund_amount'];
            
            this['refund_date'] = data['refund_date'];
            
            this['refund_status'] = data['refund_status'];
            
            this['refund_status_desc'] = data['refund_status_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

