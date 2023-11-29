var responseDataFormat = "JSON";

function saveFLDisbursementRequest(data)
{
    /**
     * @member {saveFLDisbursementRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFLDisbursementRequestcontext(data['context']);
    }
}

function saveFLDisbursementRequestcontext(data)
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
     * @member {saveFLDisbursementRequestHeader} Header
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
            this['Header'] = new saveFLDisbursementRequestHeader(data['Header']);
    }
}

function saveFLDisbursementRequestHeader(data)
{
    /**
     * @member {Int32} loanapp_rowid
     */
    this['loanapp_rowid'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    /**
     * @member {String} loanapp_no
     */
    this['loanapp_no'] = null;
    
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
     * @member {Decimal} loan_amount
     */
    this['loan_amount'] = null;
    
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {String} sanctioned_date
     */
    this['sanctioned_date'] = null;
    
    /**
     * @member {Decimal} sanctioned_amount
     */
    this['sanctioned_amount'] = null;
    
    /**
     * @member {String} beneficiary_type
     */
    this['beneficiary_type'] = null;
    
    /**
     * @member {String} beneficiary_name
     */
    this['beneficiary_name'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} bank_acc_type
     */
    this['bank_acc_type'] = null;
    
    /**
     * @member {String} bank_acc_no
     */
    this['bank_acc_no'] = null;
    
    /**
     * @member {String} bank_code
     */
    this['bank_code'] = null;
    
    /**
     * @member {String} bank_ifsc_code
     */
    this['bank_ifsc_code'] = null;
    
    /**
     * @member {String} disb_advice_no
     */
    this['disb_advice_no'] = null;
    
    /**
     * @member {String} disb_bank_ref_no
     */
    this['disb_bank_ref_no'] = null;
    
    /**
     * @member {String} disb_date
     */
    this['disb_date'] = null;
    
    /**
     * @member {String} disb_remark
     */
    this['disb_remark'] = null;
    
    /**
     * @member {String} disb_credit_status
     */
    this['disb_credit_status'] = null;
    
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
        if(data.hasOwnProperty('loanapp_rowid'))
            this['loanapp_rowid'] = data['loanapp_rowid'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
        if(data.hasOwnProperty('loanapp_no'))
            this['loanapp_no'] = data['loanapp_no'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('loanscheme_code'))
            this['loanscheme_code'] = data['loanscheme_code'];
        
        if(data.hasOwnProperty('loan_amount'))
            this['loan_amount'] = data['loan_amount'];
        
        if(data.hasOwnProperty('loan_no'))
            this['loan_no'] = data['loan_no'];
        
        if(data.hasOwnProperty('sanctioned_date'))
            this['sanctioned_date'] = data['sanctioned_date'];
        
        if(data.hasOwnProperty('sanctioned_amount'))
            this['sanctioned_amount'] = data['sanctioned_amount'];
        
        if(data.hasOwnProperty('beneficiary_type'))
            this['beneficiary_type'] = data['beneficiary_type'];
        
        if(data.hasOwnProperty('beneficiary_name'))
            this['beneficiary_name'] = data['beneficiary_name'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('bank_acc_type'))
            this['bank_acc_type'] = data['bank_acc_type'];
        
        if(data.hasOwnProperty('bank_acc_no'))
            this['bank_acc_no'] = data['bank_acc_no'];
        
        if(data.hasOwnProperty('bank_code'))
            this['bank_code'] = data['bank_code'];
        
        if(data.hasOwnProperty('bank_ifsc_code'))
            this['bank_ifsc_code'] = data['bank_ifsc_code'];
        
        if(data.hasOwnProperty('disb_advice_no'))
            this['disb_advice_no'] = data['disb_advice_no'];
        
        if(data.hasOwnProperty('disb_bank_ref_no'))
            this['disb_bank_ref_no'] = data['disb_bank_ref_no'];
        
        if(data.hasOwnProperty('disb_date'))
            this['disb_date'] = data['disb_date'];
        
        if(data.hasOwnProperty('disb_remark'))
            this['disb_remark'] = data['disb_remark'];
        
        if(data.hasOwnProperty('disb_credit_status'))
            this['disb_credit_status'] = data['disb_credit_status'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveFLDisbursementResponse(data, format)
{
    /**
     * @member {saveFLDisbursementResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFLDisbursementResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFLDisbursementResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFLDisbursementResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFLDisbursementResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFLDisbursementResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFLDisbursementResponseApplicationException(data)
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

function saveFLDisbursementResponsecontext(data)
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
     * @member {saveFLDisbursementResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveFLDisbursementResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveFLDisbursementResponseHeader(data['Header']);
        }
    }
}

function saveFLDisbursementResponseHeader(data)
{
    /**
     * @member {String} disb_advice_no
     */
    this['disb_advice_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['disb_advice_no'] = (data.getElementsByTagName("disb_advice_no")[0].lastChild != null) ? data.getElementsByTagName("disb_advice_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['disb_advice_no'] = data['disb_advice_no'];
        }
    }
}

