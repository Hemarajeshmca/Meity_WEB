var responseDataFormat = "JSON";

function saveFLDisbursementAdviceGenRequest(data)
{
    /**
     * @member {saveFLDisbursementAdviceGenRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFLDisbursementAdviceGenRequestcontext(data['context']);
    }
}

function saveFLDisbursementAdviceGenRequestcontext(data)
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
     * @member {saveFLDisbursementAdviceGenRequestFilter} Filter
     */
    this['Filter'] = null;
    
    /**
     * @member {saveFLDisbursementAdviceGenRequestList} List
     */
    this['List'] = null;
    
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
            this['Filter'] = new saveFLDisbursementAdviceGenRequestFilter(data['Filter']);
        
        if(data.hasOwnProperty('List') && data['List'] != null)
        {
            List = [];
            for(Listindex = 0; Listindex < data['List'].length; Listindex++)
            {
                List.push(new saveFLDisbursementAdviceGenRequestList(data['List'][Listindex]));
            }
            this['List'] = List;
        }
    }
}

function saveFLDisbursementAdviceGenRequestFilter(data)
{
    /**
     * @member {String} status_option
     */
    this['status_option'] = null;
    
    /**
     * @member {String} fpoorgn_code
     */
    this['fpoorgn_code'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('status_option'))
            this['status_option'] = data['status_option'];
        
        if(data.hasOwnProperty('fpoorgn_code'))
            this['fpoorgn_code'] = data['fpoorgn_code'];
        
    }
}

function saveFLDisbursementAdviceGenRequestList(data)
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
     * @member {String} app_date
     */
    this['app_date'] = null;
    
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
     * @member {String} disbursement_date
     */
    this['disbursement_date'] = null;
    
    /**
     * @member {String} status_of_client
     */
    this['status_of_client'] = null;
    
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
        
        if(data.hasOwnProperty('app_date'))
            this['app_date'] = data['app_date'];
        
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
        
        if(data.hasOwnProperty('disbursement_date'))
            this['disbursement_date'] = data['disbursement_date'];
        
        if(data.hasOwnProperty('status_of_client'))
            this['status_of_client'] = data['status_of_client'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveFLDisbursementAdviceGenResponse(data, format)
{
    /**
     * @member {saveFLDisbursementAdviceGenResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFLDisbursementAdviceGenResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFLDisbursementAdviceGenResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFLDisbursementAdviceGenResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFLDisbursementAdviceGenResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFLDisbursementAdviceGenResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFLDisbursementAdviceGenResponseApplicationException(data)
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

function saveFLDisbursementAdviceGenResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

