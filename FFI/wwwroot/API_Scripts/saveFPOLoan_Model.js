var responseDataFormat = "JSON";

function saveFPOLoanRequest(data)
{
    /**
     * @member {saveFPOLoanRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFPOLoanRequestcontext(data['context']);
    }
}

function saveFPOLoanRequestcontext(data)
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
     * @member {saveFPOLoanRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveFPOLoanRequestTranche} Tranche
     */
    this['Tranche'] = null;
    
    /**
     * @member {saveFPOLoanRequestRepayment} Repayment
     */
    this['Repayment'] = null;
    
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
            this['Header'] = new saveFPOLoanRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Tranche') && data['Tranche'] != null)
        {
            Tranche = [];
            for(Trancheindex = 0; Trancheindex < data['Tranche'].length; Trancheindex++)
            {
                Tranche.push(new saveFPOLoanRequestTranche(data['Tranche'][Trancheindex]));
            }
            this['Tranche'] = Tranche;
        }
        
        if(data.hasOwnProperty('Repayment') && data['Repayment'] != null)
        {
            Repayment = [];
            for(Repaymentindex = 0; Repaymentindex < data['Repayment'].length; Repaymentindex++)
            {
                Repayment.push(new saveFPOLoanRequestRepayment(data['Repayment'][Repaymentindex]));
            }
            this['Repayment'] = Repayment;
        }
    }
}

function saveFPOLoanRequestHeader(data)
{
    /**
     * @member {Int32} fpoloan_rowid
     */
    this['fpoloan_rowid'] = null;
    
    /**
     * @member {String} fpoloan_no
     */
    this['fpoloan_no'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} institution_type
     */
    this['institution_type'] = null;
    
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
     * @member {String} collateral_type
     */
    this['collateral_type'] = null;
    
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
     * @member {Decimal} waive_amount
     */
    this['waive_amount'] = null;
    
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
        if(data.hasOwnProperty('fpoloan_rowid'))
            this['fpoloan_rowid'] = data['fpoloan_rowid'];
        
        if(data.hasOwnProperty('fpoloan_no'))
            this['fpoloan_no'] = data['fpoloan_no'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('institution_type'))
            this['institution_type'] = data['institution_type'];
        
        if(data.hasOwnProperty('sanctioned_date'))
            this['sanctioned_date'] = data['sanctioned_date'];
        
        if(data.hasOwnProperty('fpoloan_start_date'))
            this['fpoloan_start_date'] = data['fpoloan_start_date'];
        
        if(data.hasOwnProperty('fpoloan_mat_date'))
            this['fpoloan_mat_date'] = data['fpoloan_mat_date'];
        
        if(data.hasOwnProperty('sanctioned_amount'))
            this['sanctioned_amount'] = data['sanctioned_amount'];
        
        if(data.hasOwnProperty('received_amount'))
            this['received_amount'] = data['received_amount'];
        
        if(data.hasOwnProperty('emi_amount'))
            this['emi_amount'] = data['emi_amount'];
        
        if(data.hasOwnProperty('interest_rate'))
            this['interest_rate'] = data['interest_rate'];
        
        if(data.hasOwnProperty('repayment_in_yrs'))
            this['repayment_in_yrs'] = data['repayment_in_yrs'];
        
        if(data.hasOwnProperty('repayment_in_months'))
            this['repayment_in_months'] = data['repayment_in_months'];
        
        if(data.hasOwnProperty('repayment_freq'))
            this['repayment_freq'] = data['repayment_freq'];
        
        if(data.hasOwnProperty('collateral_type'))
            this['collateral_type'] = data['collateral_type'];
        
        if(data.hasOwnProperty('collateral_amount'))
            this['collateral_amount'] = data['collateral_amount'];
        
        if(data.hasOwnProperty('payable_amount'))
            this['payable_amount'] = data['payable_amount'];
        
        if(data.hasOwnProperty('payable_exception'))
            this['payable_exception'] = data['payable_exception'];
        
        if(data.hasOwnProperty('interest_amount'))
            this['interest_amount'] = data['interest_amount'];
        
        if(data.hasOwnProperty('principle_paid'))
            this['principle_paid'] = data['principle_paid'];
        
        if(data.hasOwnProperty('interest_paid'))
            this['interest_paid'] = data['interest_paid'];
        
        if(data.hasOwnProperty('refund_received'))
            this['refund_received'] = data['refund_received'];
        
        if(data.hasOwnProperty('closed_date'))
            this['closed_date'] = data['closed_date'];
        
        if(data.hasOwnProperty('settlement_amount'))
            this['settlement_amount'] = data['settlement_amount'];
        
        if(data.hasOwnProperty('waive_amount'))
            this['waive_amount'] = data['waive_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveFPOLoanRequestTranche(data)
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
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('fpoloantranche_rowid'))
            this['fpoloantranche_rowid'] = data['fpoloantranche_rowid'];
        
        if(data.hasOwnProperty('tranche_no'))
            this['tranche_no'] = data['tranche_no'];
        
        if(data.hasOwnProperty('tranche_amount'))
            this['tranche_amount'] = data['tranche_amount'];
        
        if(data.hasOwnProperty('received_date'))
            this['received_date'] = data['received_date'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFPOLoanRequestRepayment(data)
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
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_acc_type
     */
    this['bank_acc_type'] = null;
    
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
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loanrepayment_rowid'))
            this['loanrepayment_rowid'] = data['loanrepayment_rowid'];
        
        if(data.hasOwnProperty('loaninstalment_rowid'))
            this['loaninstalment_rowid'] = data['loaninstalment_rowid'];
        
        if(data.hasOwnProperty('instalment_date'))
            this['instalment_date'] = data['instalment_date'];
        
        if(data.hasOwnProperty('instalment_amount'))
            this['instalment_amount'] = data['instalment_amount'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('bank_code'))
            this['bank_code'] = data['bank_code'];
        
        if(data.hasOwnProperty('bank_acc_type'))
            this['bank_acc_type'] = data['bank_acc_type'];
        
        if(data.hasOwnProperty('bank_acc_no'))
            this['bank_acc_no'] = data['bank_acc_no'];
        
        if(data.hasOwnProperty('bank_ifsc_code'))
            this['bank_ifsc_code'] = data['bank_ifsc_code'];
        
        if(data.hasOwnProperty('bank_ref_no'))
            this['bank_ref_no'] = data['bank_ref_no'];
        
        if(data.hasOwnProperty('chq_date'))
            this['chq_date'] = data['chq_date'];
        
        if(data.hasOwnProperty('chq_no'))
            this['chq_no'] = data['chq_no'];
        
        if(data.hasOwnProperty('micr_code'))
            this['micr_code'] = data['micr_code'];
        
        if(data.hasOwnProperty('chq_valid_flag'))
            this['chq_valid_flag'] = data['chq_valid_flag'];
        
        if(data.hasOwnProperty('repayment_remark'))
            this['repayment_remark'] = data['repayment_remark'];
        
        if(data.hasOwnProperty('repayment_status'))
            this['repayment_status'] = data['repayment_status'];
        
        if(data.hasOwnProperty('instalment_no'))
            this['instalment_no'] = data['instalment_no'];
        
        if(data.hasOwnProperty('principle_amount'))
            this['principle_amount'] = data['principle_amount'];
        
        if(data.hasOwnProperty('interest_amount'))
            this['interest_amount'] = data['interest_amount'];
        
        if(data.hasOwnProperty('lend_balance_amount'))
            this['lend_balance_amount'] = data['lend_balance_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFPOLoanResponse(data, format)
{
    /**
     * @member {saveFPOLoanResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFPOLoanResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFPOLoanResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFPOLoanResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFPOLoanResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFPOLoanResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFPOLoanResponseApplicationException(data)
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

function saveFPOLoanResponsecontext(data)
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
     * @member {saveFPOLoanResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveFPOLoanResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveFPOLoanResponseHeader(data['Header']);
        }
    }
}

function saveFPOLoanResponseHeader(data)
{
    /**
     * @member {Int32} fpoloan_rowid
     */
    this['fpoloan_rowid'] = null;
    
    /**
     * @member {String} fpoloan_no
     */
    this['fpoloan_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['fpoloan_rowid'] = parseInt(data.getElementsByTagName("fpoloan_rowid")[0].lastChild.nodeValue);
            
            this['fpoloan_no'] = (data.getElementsByTagName("fpoloan_no")[0].lastChild != null) ? data.getElementsByTagName("fpoloan_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpoloan_rowid'] = data['fpoloan_rowid'];
            
            this['fpoloan_no'] = data['fpoloan_no'];
        }
    }
}

