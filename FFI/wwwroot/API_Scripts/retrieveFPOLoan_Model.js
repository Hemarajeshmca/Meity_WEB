var responseDataFormat = "JSON";

function retrieveFPOLoanRequest(data)
{
    /**
     * @member {retrieveFPOLoanRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFPOLoanRequestcontext(data['context']);
    }
}

function retrieveFPOLoanRequestcontext(data)
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
     * @member {retrieveFPOLoanRequestHeader} Header
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
            this['Header'] = new retrieveFPOLoanRequestHeader(data['Header']);
    }
}

function retrieveFPOLoanRequestHeader(data)
{
    /**
     * @member {Int32} fpoloan_rowid
     */
    this['fpoloan_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fpoloan_rowid'))
            this['fpoloan_rowid'] = data['fpoloan_rowid'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function retrieveFPOLoanResponse(data, format)
{
    /**
     * @member {retrieveFPOLoanResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFPOLoanResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFPOLoanResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFPOLoanResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFPOLoanResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFPOLoanResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFPOLoanResponseApplicationException(data)
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

function retrieveFPOLoanResponsecontext(data)
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
     * @member {retrieveFPOLoanResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFPOLoanResponseTranche} Tranche
     */
    this['Tranche'] = null;
    
    /**
     * @member {retrieveFPOLoanResponseRepayment} Repayment
     */
    this['Repayment'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFPOLoanResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Tranche = [];
            for(Tranchechildi = 0; Tranchechildi < data.getElementsByTagName("Tranche").length; Tranchechildi++)
            {
                Tranche.push(new retrieveFPOLoanResponseTranche(data.getElementsByTagName("Tranche")[Tranchechildi]));
            }
            if(data.getElementsByTagName("Tranche").length > 0)
                this['Tranche'] = Tranche;
            
            Repayment = [];
            for(Repaymentchildi = 0; Repaymentchildi < data.getElementsByTagName("Repayment").length; Repaymentchildi++)
            {
                Repayment.push(new retrieveFPOLoanResponseRepayment(data.getElementsByTagName("Repayment")[Repaymentchildi]));
            }
            if(data.getElementsByTagName("Repayment").length > 0)
                this['Repayment'] = Repayment;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFPOLoanResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Tranche') && data['Tranche'] != null)
            {
                Tranche = [];
                for(Trancheindex = 0; Trancheindex < data['Tranche'].length; Trancheindex++)
                {
                    Tranche.push(new retrieveFPOLoanResponseTranche(data['Tranche'][Trancheindex]));
                }
                this['Tranche'] = Tranche;
            }
            
            
            if(data.hasOwnProperty('Repayment') && data['Repayment'] != null)
            {
                Repayment = [];
                for(Repaymentindex = 0; Repaymentindex < data['Repayment'].length; Repaymentindex++)
                {
                    Repayment.push(new retrieveFPOLoanResponseRepayment(data['Repayment'][Repaymentindex]));
                }
                this['Repayment'] = Repayment;
            }
        }
    }
}

function retrieveFPOLoanResponseHeader(data)
{
    /**
     * @member {String} fpoloan_no
     */
    this['fpoloan_no'] = null;
    
    /**
     * @member {String} institution_type
     */
    this['institution_type'] = null;
    
    /**
     * @member {String} institution_type_desc
     */
    this['institution_type_desc'] = null;
    
    /**
     * @member {String} sanctioned_date
     */
    this['sanctioned_date'] = null;
    
    /**
     * @member {String} fpoloan_start_date
     */
    this['fpoloan_start_date'] = null;
    
    /**
     * @member {String} fpoloan_mat_date
     */
    this['fpoloan_mat_date'] = null;
    
    /**
     * @member {Decimal} sanctioned_amount
     */
    this['sanctioned_amount'] = null;
    
    /**
     * @member {Decimal} received_amount
     */
    this['received_amount'] = null;
    
    /**
     * @member {Decimal} emi_amount
     */
    this['emi_amount'] = null;
    
    /**
     * @member {Decimal} interest_rate
     */
    this['interest_rate'] = null;
    
    /**
     * @member {Decimal} repayment_in_yrs
     */
    this['repayment_in_yrs'] = null;
    
    /**
     * @member {Int16} repayment_in_months
     */
    this['repayment_in_months'] = null;
    
    /**
     * @member {String} repayment_freq
     */
    this['repayment_freq'] = null;
    
    /**
     * @member {String} repayment_freq_desc
     */
    this['repayment_freq_desc'] = null;
    
    /**
     * @member {String} collateral_type
     */
    this['collateral_type'] = null;
    
    /**
     * @member {String} collateral_type_desc
     */
    this['collateral_type_desc'] = null;
    
    /**
     * @member {Decimal} collateral_amount
     */
    this['collateral_amount'] = null;
    
    /**
     * @member {Decimal} payable_amount
     */
    this['payable_amount'] = null;
    
    /**
     * @member {Decimal} payable_exception
     */
    this['payable_exception'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {Decimal} principle_paid
     */
    this['principle_paid'] = null;
    
    /**
     * @member {Decimal} interest_paid
     */
    this['interest_paid'] = null;
    
    /**
     * @member {Decimal} refund_received
     */
    this['refund_received'] = null;
    
    /**
     * @member {String} closed_date
     */
    this['closed_date'] = null;
    
    /**
     * @member {Decimal} settlement_amount
     */
    this['settlement_amount'] = null;
    
    /**
     * @member {Decimal} lend_balance_amount
     */
    this['lend_balance_amount'] = null;
    
    /**
     * @member {Decimal} waive_amount
     */
    this['waive_amount'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
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
            this['fpoloan_no'] = (data.getElementsByTagName("fpoloan_no")[0].lastChild != null) ? data.getElementsByTagName("fpoloan_no")[0].lastChild.nodeValue : "";
            
            this['institution_type'] = (data.getElementsByTagName("institution_type")[0].lastChild != null) ? data.getElementsByTagName("institution_type")[0].lastChild.nodeValue : "";
            
            this['institution_type_desc'] = (data.getElementsByTagName("institution_type_desc")[0].lastChild != null) ? data.getElementsByTagName("institution_type_desc")[0].lastChild.nodeValue : "";
            
            this['sanctioned_date'] = (data.getElementsByTagName("sanctioned_date")[0].lastChild != null) ? data.getElementsByTagName("sanctioned_date")[0].lastChild.nodeValue : "";
            
            this['fpoloan_start_date'] = (data.getElementsByTagName("fpoloan_start_date")[0].lastChild != null) ? data.getElementsByTagName("fpoloan_start_date")[0].lastChild.nodeValue : "";
            
            this['fpoloan_mat_date'] = (data.getElementsByTagName("fpoloan_mat_date")[0].lastChild != null) ? data.getElementsByTagName("fpoloan_mat_date")[0].lastChild.nodeValue : "";
            
            this['sanctioned_amount'] = parseFloat(data.getElementsByTagName("sanctioned_amount")[0].lastChild.nodeValue);
            
            this['received_amount'] = parseFloat(data.getElementsByTagName("received_amount")[0].lastChild.nodeValue);
            
            this['emi_amount'] = parseFloat(data.getElementsByTagName("emi_amount")[0].lastChild.nodeValue);
            
            this['interest_rate'] = parseFloat(data.getElementsByTagName("interest_rate")[0].lastChild.nodeValue);
            
            this['repayment_in_yrs'] = parseFloat(data.getElementsByTagName("repayment_in_yrs")[0].lastChild.nodeValue);
            
            this['repayment_in_months'] = parseInt(data.getElementsByTagName("repayment_in_months")[0].lastChild.nodeValue);
            
            this['repayment_freq'] = (data.getElementsByTagName("repayment_freq")[0].lastChild != null) ? data.getElementsByTagName("repayment_freq")[0].lastChild.nodeValue : "";
            
            this['repayment_freq_desc'] = (data.getElementsByTagName("repayment_freq_desc")[0].lastChild != null) ? data.getElementsByTagName("repayment_freq_desc")[0].lastChild.nodeValue : "";
            
            this['collateral_type'] = (data.getElementsByTagName("collateral_type")[0].lastChild != null) ? data.getElementsByTagName("collateral_type")[0].lastChild.nodeValue : "";
            
            this['collateral_type_desc'] = (data.getElementsByTagName("collateral_type_desc")[0].lastChild != null) ? data.getElementsByTagName("collateral_type_desc")[0].lastChild.nodeValue : "";
            
            this['collateral_amount'] = parseFloat(data.getElementsByTagName("collateral_amount")[0].lastChild.nodeValue);
            
            this['payable_amount'] = parseFloat(data.getElementsByTagName("payable_amount")[0].lastChild.nodeValue);
            
            this['payable_exception'] = parseFloat(data.getElementsByTagName("payable_exception")[0].lastChild.nodeValue);
            
            this['interest_amount'] = parseFloat(data.getElementsByTagName("interest_amount")[0].lastChild.nodeValue);
            
            this['principle_paid'] = parseFloat(data.getElementsByTagName("principle_paid")[0].lastChild.nodeValue);
            
            this['interest_paid'] = parseFloat(data.getElementsByTagName("interest_paid")[0].lastChild.nodeValue);
            
            this['refund_received'] = parseFloat(data.getElementsByTagName("refund_received")[0].lastChild.nodeValue);
            
            this['closed_date'] = (data.getElementsByTagName("closed_date")[0].lastChild != null) ? data.getElementsByTagName("closed_date")[0].lastChild.nodeValue : "";
            
            this['settlement_amount'] = parseFloat(data.getElementsByTagName("settlement_amount")[0].lastChild.nodeValue);
            
            this['lend_balance_amount'] = parseFloat(data.getElementsByTagName("lend_balance_amount")[0].lastChild.nodeValue);
            
            this['waive_amount'] = parseFloat(data.getElementsByTagName("waive_amount")[0].lastChild.nodeValue);
            
            this['balance_amount'] = parseFloat(data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpoloan_no'] = data['fpoloan_no'];
            
            this['institution_type'] = data['institution_type'];
            
            this['institution_type_desc'] = data['institution_type_desc'];
            
            this['sanctioned_date'] = data['sanctioned_date'];
            
            this['fpoloan_start_date'] = data['fpoloan_start_date'];
            
            this['fpoloan_mat_date'] = data['fpoloan_mat_date'];
            
            this['sanctioned_amount'] = data['sanctioned_amount'];
            
            this['received_amount'] = data['received_amount'];
            
            this['emi_amount'] = data['emi_amount'];
            
            this['interest_rate'] = data['interest_rate'];
            
            this['repayment_in_yrs'] = data['repayment_in_yrs'];
            
            this['repayment_in_months'] = data['repayment_in_months'];
            
            this['repayment_freq'] = data['repayment_freq'];
            
            this['repayment_freq_desc'] = data['repayment_freq_desc'];
            
            this['collateral_type'] = data['collateral_type'];
            
            this['collateral_type_desc'] = data['collateral_type_desc'];
            
            this['collateral_amount'] = data['collateral_amount'];
            
            this['payable_amount'] = data['payable_amount'];
            
            this['payable_exception'] = data['payable_exception'];
            
            this['interest_amount'] = data['interest_amount'];
            
            this['principle_paid'] = data['principle_paid'];
            
            this['interest_paid'] = data['interest_paid'];
            
            this['refund_received'] = data['refund_received'];
            
            this['closed_date'] = data['closed_date'];
            
            this['settlement_amount'] = data['settlement_amount'];
            
            this['lend_balance_amount'] = data['lend_balance_amount'];
            
            this['waive_amount'] = data['waive_amount'];
            
            this['balance_amount'] = data['balance_amount'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveFPOLoanResponseTranche(data)
{
    /**
     * @member {Int32} fpoloantranche_rowid
     */
    this['fpoloantranche_rowid'] = null;
    
    /**
     * @member {String} tranche_no
     */
    this['tranche_no'] = null;
    
    /**
     * @member {Decimal} tranche_amount
     */
    this['tranche_amount'] = null;
    
    /**
     * @member {String} received_date
     */
    this['received_date'] = null;
    
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
            this['fpoloantranche_rowid'] = parseInt(data.getElementsByTagName("fpoloantranche_rowid")[0].lastChild.nodeValue);
            
            this['tranche_no'] = (data.getElementsByTagName("tranche_no")[0].lastChild != null) ? data.getElementsByTagName("tranche_no")[0].lastChild.nodeValue : "";
            
            this['tranche_amount'] = parseFloat(data.getElementsByTagName("tranche_amount")[0].lastChild.nodeValue);
            
            this['received_date'] = (data.getElementsByTagName("received_date")[0].lastChild != null) ? data.getElementsByTagName("received_date")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpoloantranche_rowid'] = data['fpoloantranche_rowid'];
            
            this['tranche_no'] = data['tranche_no'];
            
            this['tranche_amount'] = data['tranche_amount'];
            
            this['received_date'] = data['received_date'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveFPOLoanResponseRepayment(data)
{
    /**
     * @member {Int32} loanrepayment_rowid
     */
    this['loanrepayment_rowid'] = null;
    
    /**
     * @member {Int16} loaninstalment_rowid
     */
    this['loaninstalment_rowid'] = null;
    
    /**
     * @member {String} instalment_date
     */
    this['instalment_date'] = null;
    
    /**
     * @member {Decimal} instalment_amount
     */
    this['instalment_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_acc_type
     */
    this['bank_acc_type'] = null;
    
    /**
     * @member {String} bank_acc_type_desc
     */
    this['bank_acc_type_desc'] = null;
    
    /**
     * @member {String} bank_acc_no
     */
    this['bank_acc_no'] = null;
    
    /**
     * @member {String} bank_ifsc_code
     */
    this['bank_ifsc_code'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} chq_date
     */
    this['chq_date'] = null;
    
    /**
     * @member {String} chq_no
     */
    this['chq_no'] = null;
    
    /**
     * @member {String} micr_code
     */
    this['micr_code'] = null;
    
    /**
     * @member {String} chq_valid_flag
     */
    this['chq_valid_flag'] = null;
    
    /**
     * @member {String} repayment_remark
     */
    this['repayment_remark'] = null;
    
    /**
     * @member {String} repayment_status
     */
    this['repayment_status'] = null;
    
    /**
     * @member {String} repayment_status_desc
     */
    this['repayment_status_desc'] = null;
    
    /**
     * @member {Int16} instalment_no
     */
    this['instalment_no'] = null;
    
    /**
     * @member {Decimal} principle_amount
     */
    this['principle_amount'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {Decimal} lend_balance_amount
     */
    this['lend_balance_amount'] = null;
    
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
            this['loanrepayment_rowid'] = parseInt(data.getElementsByTagName("loanrepayment_rowid")[0].lastChild.nodeValue);
            
            this['loaninstalment_rowid'] = parseInt(data.getElementsByTagName("loaninstalment_rowid")[0].lastChild.nodeValue);
            
            this['instalment_date'] = (data.getElementsByTagName("instalment_date")[0].lastChild != null) ? data.getElementsByTagName("instalment_date")[0].lastChild.nodeValue : "";
            
            this['instalment_amount'] = parseFloat(data.getElementsByTagName("instalment_amount")[0].lastChild.nodeValue);
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['bank_code'] = (data.getElementsByTagName("bank_code")[0].lastChild != null) ? data.getElementsByTagName("bank_code")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type'] = (data.getElementsByTagName("bank_acc_type")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type")[0].lastChild.nodeValue : "";
            
            this['bank_acc_type_desc'] = (data.getElementsByTagName("bank_acc_type_desc")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_type_desc")[0].lastChild.nodeValue : "";
            
            this['bank_acc_no'] = (data.getElementsByTagName("bank_acc_no")[0].lastChild != null) ? data.getElementsByTagName("bank_acc_no")[0].lastChild.nodeValue : "";
            
            this['bank_ifsc_code'] = (data.getElementsByTagName("bank_ifsc_code")[0].lastChild != null) ? data.getElementsByTagName("bank_ifsc_code")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['chq_date'] = (data.getElementsByTagName("chq_date")[0].lastChild != null) ? data.getElementsByTagName("chq_date")[0].lastChild.nodeValue : "";
            
            this['chq_no'] = (data.getElementsByTagName("chq_no")[0].lastChild != null) ? data.getElementsByTagName("chq_no")[0].lastChild.nodeValue : "";
            
            this['micr_code'] = (data.getElementsByTagName("micr_code")[0].lastChild != null) ? data.getElementsByTagName("micr_code")[0].lastChild.nodeValue : "";
            
            this['chq_valid_flag'] = (data.getElementsByTagName("chq_valid_flag")[0].lastChild != null) ? data.getElementsByTagName("chq_valid_flag")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("repayment_remark")[0].attributes.length == 0) //Check NULL value
                this['repayment_remark'] = (data.getElementsByTagName("repayment_remark")[0].lastChild != null) ? data.getElementsByTagName("repayment_remark")[0].lastChild.nodeValue : "";
            
            this['repayment_status'] = (data.getElementsByTagName("repayment_status")[0].lastChild != null) ? data.getElementsByTagName("repayment_status")[0].lastChild.nodeValue : "";
            
            this['repayment_status_desc'] = (data.getElementsByTagName("repayment_status_desc")[0].lastChild != null) ? data.getElementsByTagName("repayment_status_desc")[0].lastChild.nodeValue : "";
            
            this['instalment_no'] = parseInt(data.getElementsByTagName("instalment_no")[0].lastChild.nodeValue);
            
            this['principle_amount'] = parseFloat(data.getElementsByTagName("principle_amount")[0].lastChild.nodeValue);
            
            this['interest_amount'] = parseFloat(data.getElementsByTagName("interest_amount")[0].lastChild.nodeValue);
            
            this['lend_balance_amount'] = parseFloat(data.getElementsByTagName("lend_balance_amount")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['loanrepayment_rowid'] = data['loanrepayment_rowid'];
            
            this['loaninstalment_rowid'] = data['loaninstalment_rowid'];
            
            this['instalment_date'] = data['instalment_date'];
            
            this['instalment_amount'] = data['instalment_amount'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['bank_code'] = data['bank_code'];
            
            this['bank_acc_type'] = data['bank_acc_type'];
            
            this['bank_acc_type_desc'] = data['bank_acc_type_desc'];
            
            this['bank_acc_no'] = data['bank_acc_no'];
            
            this['bank_ifsc_code'] = data['bank_ifsc_code'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['chq_date'] = data['chq_date'];
            
            this['chq_no'] = data['chq_no'];
            
            this['micr_code'] = data['micr_code'];
            
            this['chq_valid_flag'] = data['chq_valid_flag'];
            
            this['repayment_remark'] = data['repayment_remark'];
            
            this['repayment_status'] = data['repayment_status'];
            
            this['repayment_status_desc'] = data['repayment_status_desc'];
            
            this['instalment_no'] = data['instalment_no'];
            
            this['principle_amount'] = data['principle_amount'];
            
            this['interest_amount'] = data['interest_amount'];
            
            this['lend_balance_amount'] = data['lend_balance_amount'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

