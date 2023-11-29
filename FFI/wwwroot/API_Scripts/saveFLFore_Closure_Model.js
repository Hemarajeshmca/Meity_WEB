var responseDataFormat = "JSON";

function saveFLFore_ClosureRequest(data)
{
    /**
     * @member {saveFLFore_ClosureRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFLFore_ClosureRequestcontext(data['context']);
    }
}

function saveFLFore_ClosureRequestcontext(data)
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
     * @member {saveFLFore_ClosureRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveFLFore_ClosureRequestDetail} Detail
     */
    this['Detail'] = null;
    
    /**
     * @member {saveFLFore_ClosureRequestForeClosureDtl} ForeClosureDtl
     */
    this['ForeClosureDtl'] = null;
    
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
            this['Header'] = new saveFLFore_ClosureRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            this['Detail'] = new saveFLFore_ClosureRequestDetail(data['Detail']);
        
        if(data.hasOwnProperty('ForeClosureDtl') && data['ForeClosureDtl'] != null)
            this['ForeClosureDtl'] = new saveFLFore_ClosureRequestForeClosureDtl(data['ForeClosureDtl']);
    }
}

function saveFLFore_ClosureRequestHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loan_no'))
            this['loan_no'] = data['loan_no'];
        
    }
}

function saveFLFore_ClosureRequestDetail(data)
{
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sur_name
     */
    this['sur_name'] = null;
    
    /**
     * @member {String} loanapp_no
     */
    this['loanapp_no'] = null;
    
    /**
     * @member {String} app_date
     */
    this['app_date'] = null;
    
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {String} loanscheme_desc
     */
    this['loanscheme_desc'] = null;
    
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
     * @member {String} loan_status_desc
     */
    this['loan_status_desc'] = null;
    
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
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('farmer_name'))
            this['farmer_name'] = data['farmer_name'];
        
        if(data.hasOwnProperty('sur_name'))
            this['sur_name'] = data['sur_name'];
        
        if(data.hasOwnProperty('loanapp_no'))
            this['loanapp_no'] = data['loanapp_no'];
        
        if(data.hasOwnProperty('app_date'))
            this['app_date'] = data['app_date'];
        
        if(data.hasOwnProperty('loanscheme_code'))
            this['loanscheme_code'] = data['loanscheme_code'];
        
        if(data.hasOwnProperty('loanscheme_desc'))
            this['loanscheme_desc'] = data['loanscheme_desc'];
        
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
        
        if(data.hasOwnProperty('loan_status_desc'))
            this['loan_status_desc'] = data['loan_status_desc'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFLFore_ClosureRequestForeClosureDtl(data)
{
    /**
     * @member {String} req_date
     */
    this['req_date'] = null;
    
    /**
     * @member {Decimal} principle_due
     */
    this['principle_due'] = null;
    
    /**
     * @member {Decimal} waive_amount
     */
    this['waive_amount'] = null;
    
    /**
     * @member {Decimal} other_charges
     */
    this['other_charges'] = null;
    
    /**
     * @member {Decimal} principle_amount
     */
    this['principle_amount'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} prepayment_date
     */
    this['prepayment_date'] = null;
    
    /**
     * @member {String} received_date
     */
    this['received_date'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('req_date'))
            this['req_date'] = data['req_date'];
        
        if(data.hasOwnProperty('principle_due'))
            this['principle_due'] = data['principle_due'];
        
        if(data.hasOwnProperty('waive_amount'))
            this['waive_amount'] = data['waive_amount'];
        
        if(data.hasOwnProperty('other_charges'))
            this['other_charges'] = data['other_charges'];
        
        if(data.hasOwnProperty('principle_amount'))
            this['principle_amount'] = data['principle_amount'];
        
        if(data.hasOwnProperty('bank_ref_no'))
            this['bank_ref_no'] = data['bank_ref_no'];
        
        if(data.hasOwnProperty('prepayment_date'))
            this['prepayment_date'] = data['prepayment_date'];
        
        if(data.hasOwnProperty('received_date'))
            this['received_date'] = data['received_date'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveFLFore_ClosureResponse(data, format)
{
    /**
     * @member {saveFLFore_ClosureResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFLFore_ClosureResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFLFore_ClosureResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFLFore_ClosureResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFLFore_ClosureResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFLFore_ClosureResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFLFore_ClosureResponseApplicationException(data)
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

function saveFLFore_ClosureResponsecontext(data)
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
     * @member {saveFLFore_ClosureResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveFLFore_ClosureResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveFLFore_ClosureResponseHeader(data['Header']);
        }
    }
}

function saveFLFore_ClosureResponseHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['loan_no'] = data['loan_no'];
        }
    }
}

