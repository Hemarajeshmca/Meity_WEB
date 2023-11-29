var responseDataFormat = "JSON";

function retrieveSetupFarmerLoanSchemeListRequest(data)
{
    /**
     * @member {retrieveSetupFarmerLoanSchemeListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveSetupFarmerLoanSchemeListRequestcontext(data['context']);
    }
}

function retrieveSetupFarmerLoanSchemeListRequestcontext(data)
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
     * @member {retrieveSetupFarmerLoanSchemeListRequestFilter} Filter
     */
    this['Filter'] = null;
    
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
        
        if(data.hasOwnProperty('Filter') && data['Filter'] != null)
            this['Filter'] = new retrieveSetupFarmerLoanSchemeListRequestFilter(data['Filter']);
    }
}

function retrieveSetupFarmerLoanSchemeListRequestFilter(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_Fromvalue
     */
    this['FilterBy_Fromvalue'] = null;
    
    /**
     * @member {String} FilterBy_Tovalue
     */
    this['FilterBy_Tovalue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_Fromvalue'))
            this['FilterBy_Fromvalue'] = data['FilterBy_Fromvalue'];
        
        if(data.hasOwnProperty('FilterBy_Tovalue'))
            this['FilterBy_Tovalue'] = data['FilterBy_Tovalue'];
        
    }
}

function retrieveSetupFarmerLoanSchemeListResponse(data, format)
{
    /**
     * @member {retrieveSetupFarmerLoanSchemeListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveSetupFarmerLoanSchemeListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveSetupFarmerLoanSchemeListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveSetupFarmerLoanSchemeListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveSetupFarmerLoanSchemeListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveSetupFarmerLoanSchemeListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveSetupFarmerLoanSchemeListResponseApplicationException(data)
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

function retrieveSetupFarmerLoanSchemeListResponsecontext(data)
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
     * @member {retrieveSetupFarmerLoanSchemeListResponseList} List
     */
    this['List'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            List = [];
            for(Listchildi = 0; Listchildi < data.getElementsByTagName("List").length; Listchildi++)
            {
                List.push(new retrieveSetupFarmerLoanSchemeListResponseList(data.getElementsByTagName("List")[Listchildi]));
            }
            if(data.getElementsByTagName("List").length > 0)
                this['List'] = List;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('List') && data['List'] != null)
            {
                List = [];
                for(Listindex = 0; Listindex < data['List'].length; Listindex++)
                {
                    List.push(new retrieveSetupFarmerLoanSchemeListResponseList(data['List'][Listindex]));
                }
                this['List'] = List;
            }
        }
    }
}

function retrieveSetupFarmerLoanSchemeListResponseList(data)
{
    /**
     * @member {Int32} loanscheme_rowid
     */
    this['loanscheme_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
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
            this['loanscheme_rowid'] = parseInt(data.getElementsByTagName("loanscheme_rowid")[0].lastChild.nodeValue);
            
            this['fpoorgn_code'] = (data.getElementsByTagName("fpoorgn_code")[0].lastChild != null) ? data.getElementsByTagName("fpoorgn_code")[0].lastChild.nodeValue : "";
            
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
            this['loanscheme_rowid'] = data['loanscheme_rowid'];
            
            this['fpoorgn_code'] = data['fpoorgn_code'];
            
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

