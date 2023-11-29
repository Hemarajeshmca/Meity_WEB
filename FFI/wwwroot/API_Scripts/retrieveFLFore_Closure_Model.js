var responseDataFormat = "JSON";

function retrieveFLFore_ClosureRequest(data)
{
    /**
     * @member {retrieveFLFore_ClosureRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLFore_ClosureRequestcontext(data['context']);
    }
}

function retrieveFLFore_ClosureRequestcontext(data)
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
     * @member {retrieveFLFore_ClosureRequestHeader} Header
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
            this['Header'] = new retrieveFLFore_ClosureRequestHeader(data['Header']);
    }
}

function retrieveFLFore_ClosureRequestHeader(data)
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

function retrieveFLFore_ClosureResponse(data, format)
{
    /**
     * @member {retrieveFLFore_ClosureResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLFore_ClosureResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLFore_ClosureResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLFore_ClosureResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLFore_ClosureResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLFore_ClosureResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLFore_ClosureResponseApplicationException(data)
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

function retrieveFLFore_ClosureResponsecontext(data)
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
     * @member {retrieveFLFore_ClosureResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFLFore_ClosureResponseDetail} Detail
     */
    this['Detail'] = null;
    
    /**
     * @member {retrieveFLFore_ClosureResponseForeClosureDtl} ForeClosureDtl
     */
    this['ForeClosureDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFLFore_ClosureResponseHeader(data.getElementsByTagName("Header")[0]);
            
            this['Detail'] = new retrieveFLFore_ClosureResponseDetail(data.getElementsByTagName("Detail")[0]);
            
            this['ForeClosureDtl'] = new retrieveFLFore_ClosureResponseForeClosureDtl(data.getElementsByTagName("ForeClosureDtl")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFLFore_ClosureResponseHeader(data['Header']);
            
            
            this['Detail'] = new retrieveFLFore_ClosureResponseDetail(data['Detail']);
            
            
            this['ForeClosureDtl'] = new retrieveFLFore_ClosureResponseForeClosureDtl(data['ForeClosureDtl']);
        }
    }
}

function retrieveFLFore_ClosureResponseHeader(data)
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

function retrieveFLFore_ClosureResponseDetail(data)
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
        if (responseDataFormat == "XML") {
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['loanapp_no'] = (data.getElementsByTagName("loanapp_no")[0].lastChild != null) ? data.getElementsByTagName("loanapp_no")[0].lastChild.nodeValue : "";
            
            this['app_date'] = (data.getElementsByTagName("app_date")[0].lastChild != null) ? data.getElementsByTagName("app_date")[0].lastChild.nodeValue : "";
            
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_desc'] = (data.getElementsByTagName("loanscheme_desc")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_desc")[0].lastChild.nodeValue : "";
            
            this['interest_rate'] = parseFloat(data.getElementsByTagName("interest_rate")[0].lastChild.nodeValue);
            
            this['Tenure'] = parseInt(data.getElementsByTagName("Tenure")[0].lastChild.nodeValue);
            
            this['loan_amount'] = parseFloat(data.getElementsByTagName("loan_amount")[0].lastChild.nodeValue);
            
            this['principle_paid'] = parseFloat(data.getElementsByTagName("principle_paid")[0].lastChild.nodeValue);
            
            this['principle_due'] = parseFloat(data.getElementsByTagName("principle_due")[0].lastChild.nodeValue);
            
            this['interest_paid'] = parseFloat(data.getElementsByTagName("interest_paid")[0].lastChild.nodeValue);
            
            this['instalment_paid'] = parseFloat(data.getElementsByTagName("instalment_paid")[0].lastChild.nodeValue);
            
            this['loan_status'] = (data.getElementsByTagName("loan_status")[0].lastChild != null) ? data.getElementsByTagName("loan_status")[0].lastChild.nodeValue : "";
            
            this['loan_status_desc'] = (data.getElementsByTagName("loan_status_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpomember_code'] = data['fpomember_code'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['loanapp_no'] = data['loanapp_no'];
            
            this['app_date'] = data['app_date'];
            
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_desc'] = data['loanscheme_desc'];
            
            this['interest_rate'] = data['interest_rate'];
            
            this['Tenure'] = data['Tenure'];
            
            this['loan_amount'] = data['loan_amount'];
            
            this['principle_paid'] = data['principle_paid'];
            
            this['principle_due'] = data['principle_due'];
            
            this['interest_paid'] = data['interest_paid'];
            
            this['instalment_paid'] = data['instalment_paid'];
            
            this['loan_status'] = data['loan_status'];
            
            this['loan_status_desc'] = data['loan_status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveFLFore_ClosureResponseForeClosureDtl(data)
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
        if (responseDataFormat == "XML") {
            this['req_date'] = (data.getElementsByTagName("req_date")[0].lastChild != null) ? data.getElementsByTagName("req_date")[0].lastChild.nodeValue : "";
            
            this['principle_due'] = parseFloat(data.getElementsByTagName("principle_due")[0].lastChild.nodeValue);
            
            this['waive_amount'] = parseFloat(data.getElementsByTagName("waive_amount")[0].lastChild.nodeValue);
            
            this['other_charges'] = parseFloat(data.getElementsByTagName("other_charges")[0].lastChild.nodeValue);
            
            this['principle_amount'] = parseFloat(data.getElementsByTagName("principle_amount")[0].lastChild.nodeValue);
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['prepayment_date'] = (data.getElementsByTagName("prepayment_date")[0].lastChild != null) ? data.getElementsByTagName("prepayment_date")[0].lastChild.nodeValue : "";
            
            this['received_date'] = (data.getElementsByTagName("received_date")[0].lastChild != null) ? data.getElementsByTagName("received_date")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['req_date'] = data['req_date'];
            
            this['principle_due'] = data['principle_due'];
            
            this['waive_amount'] = data['waive_amount'];
            
            this['other_charges'] = data['other_charges'];
            
            this['principle_amount'] = data['principle_amount'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['prepayment_date'] = data['prepayment_date'];
            
            this['received_date'] = data['received_date'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

