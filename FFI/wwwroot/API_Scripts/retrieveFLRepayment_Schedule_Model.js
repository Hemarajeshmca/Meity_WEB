var responseDataFormat = "JSON";

function retrieveFLRepayment_ScheduleRequest(data)
{
    /**
     * @member {retrieveFLRepayment_ScheduleRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLRepayment_ScheduleRequestcontext(data['context']);
    }
}

function retrieveFLRepayment_ScheduleRequestcontext(data)
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
     * @member {retrieveFLRepayment_ScheduleRequestHeader} Header
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
            this['Header'] = new retrieveFLRepayment_ScheduleRequestHeader(data['Header']);
    }
}

function retrieveFLRepayment_ScheduleRequestHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {String} loan_start_date
     */
    this['loan_start_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loan_no'))
            this['loan_no'] = data['loan_no'];
        
        if(data.hasOwnProperty('loan_start_date'))
            this['loan_start_date'] = data['loan_start_date'];
        
    }
}

function retrieveFLRepayment_ScheduleResponse(data, format)
{
    /**
     * @member {retrieveFLRepayment_ScheduleResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLRepayment_ScheduleResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLRepayment_ScheduleResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLRepayment_ScheduleResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLRepayment_ScheduleResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLRepayment_ScheduleResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLRepayment_ScheduleResponseApplicationException(data)
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

function retrieveFLRepayment_ScheduleResponsecontext(data)
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
     * @member {retrieveFLRepayment_ScheduleResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFLRepayment_ScheduleResponseDetails} Details
     */
    this['Details'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFLRepayment_ScheduleResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Details = [];
            for(Detailschildi = 0; Detailschildi < data.getElementsByTagName("Details").length; Detailschildi++)
            {
                Details.push(new retrieveFLRepayment_ScheduleResponseDetails(data.getElementsByTagName("Details")[Detailschildi]));
            }
            if(data.getElementsByTagName("Details").length > 0)
                this['Details'] = Details;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFLRepayment_ScheduleResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Details') && data['Details'] != null)
            {
                Details = [];
                for(Detailsindex = 0; Detailsindex < data['Details'].length; Detailsindex++)
                {
                    Details.push(new retrieveFLRepayment_ScheduleResponseDetails(data['Details'][Detailsindex]));
                }
                this['Details'] = Details;
            }
        }
    }
}

function retrieveFLRepayment_ScheduleResponseHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {String} loan_start_date
     */
    this['loan_start_date'] = null;
    
    /**
     * @member {Decimal} instalment_amount
     */
    this['instalment_amount'] = null;
    
    /**
     * @member {Decimal} repayment_in_yrs
     */
    this['repayment_in_yrs'] = null;
    
    /**
     * @member {Decimal} total_payments
     */
    this['total_payments'] = null;
    
    /**
     * @member {Decimal} tranche_amount
     */
    this['tranche_amount'] = null;
    
    /**
     * @member {String} repayment_freq
     */
    this['repayment_freq'] = null;
    
    /**
     * @member {String} repayment_freq_desc
     */
    this['repayment_freq_desc'] = null;
    
    /**
     * @member {Int16} payments_per_yr
     */
    this['payments_per_yr'] = null;
    
    /**
     * @member {Decimal} total_interest
     */
    this['total_interest'] = null;
    
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {String} loanscheme_name
     */
    this['loanscheme_name'] = null;
    
    /**
     * @member {String} interest_type_code
     */
    this['interest_type_code'] = null;
    
    /**
     * @member {String} interest_type
     */
    this['interest_type'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['loan_start_date'] = (data.getElementsByTagName("loan_start_date")[0].lastChild != null) ? data.getElementsByTagName("loan_start_date")[0].lastChild.nodeValue : "";
            
            this['instalment_amount'] = parseFloat(data.getElementsByTagName("instalment_amount")[0].lastChild.nodeValue);
            
            this['repayment_in_yrs'] = parseFloat(data.getElementsByTagName("repayment_in_yrs")[0].lastChild.nodeValue);
            
            this['total_payments'] = parseFloat(data.getElementsByTagName("total_payments")[0].lastChild.nodeValue);
            
            this['tranche_amount'] = parseFloat(data.getElementsByTagName("tranche_amount")[0].lastChild.nodeValue);
            
            this['repayment_freq'] = (data.getElementsByTagName("repayment_freq")[0].lastChild != null) ? data.getElementsByTagName("repayment_freq")[0].lastChild.nodeValue : "";
            
            this['repayment_freq_desc'] = (data.getElementsByTagName("repayment_freq_desc")[0].lastChild != null) ? data.getElementsByTagName("repayment_freq_desc")[0].lastChild.nodeValue : "";
            
            this['payments_per_yr'] = parseInt(data.getElementsByTagName("payments_per_yr")[0].lastChild.nodeValue);
            
            this['total_interest'] = parseFloat(data.getElementsByTagName("total_interest")[0].lastChild.nodeValue);
            
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_name'] = (data.getElementsByTagName("loanscheme_name")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_name")[0].lastChild.nodeValue : "";
            
            this['interest_type_code'] = (data.getElementsByTagName("interest_type_code")[0].lastChild != null) ? data.getElementsByTagName("interest_type_code")[0].lastChild.nodeValue : "";
            
            this['interest_type'] = (data.getElementsByTagName("interest_type")[0].lastChild != null) ? data.getElementsByTagName("interest_type")[0].lastChild.nodeValue : "";
        }
        else {
            this['loan_no'] = data['loan_no'];
            
            this['loan_start_date'] = data['loan_start_date'];
            
            this['instalment_amount'] = data['instalment_amount'];
            
            this['repayment_in_yrs'] = data['repayment_in_yrs'];
            
            this['total_payments'] = data['total_payments'];
            
            this['tranche_amount'] = data['tranche_amount'];
            
            this['repayment_freq'] = data['repayment_freq'];
            
            this['repayment_freq_desc'] = data['repayment_freq_desc'];
            
            this['payments_per_yr'] = data['payments_per_yr'];
            
            this['total_interest'] = data['total_interest'];
            
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_name'] = data['loanscheme_name'];
            
            this['interest_type_code'] = data['interest_type_code'];
            
            this['interest_type'] = data['interest_type'];
        }
    }
}

function retrieveFLRepayment_ScheduleResponseDetails(data)
{
    /**
     * @member {Int16} instalment_no
     */
    this['instalment_no'] = null;
    
    /**
     * @member {String} instalment_date
     */
    this['instalment_date'] = null;
    
    /**
     * @member {Decimal} opening_balance
     */
    this['opening_balance'] = null;
    
    /**
     * @member {Decimal} principle_adj
     */
    this['principle_adj'] = null;
    
    /**
     * @member {Decimal} interest_adj
     */
    this['interest_adj'] = null;
    
    /**
     * @member {Decimal} closing_balance
     */
    this['closing_balance'] = null;
    
    /**
     * @member {Decimal} cum_interest
     */
    this['cum_interest'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['instalment_no'] = parseInt(data.getElementsByTagName("instalment_no")[0].lastChild.nodeValue);
            
            this['instalment_date'] = (data.getElementsByTagName("instalment_date")[0].lastChild != null) ? data.getElementsByTagName("instalment_date")[0].lastChild.nodeValue : "";
            
            this['opening_balance'] = parseFloat(data.getElementsByTagName("opening_balance")[0].lastChild.nodeValue);
            
            this['principle_adj'] = parseFloat(data.getElementsByTagName("principle_adj")[0].lastChild.nodeValue);
            
            this['interest_adj'] = parseFloat(data.getElementsByTagName("interest_adj")[0].lastChild.nodeValue);
            
            this['closing_balance'] = parseFloat(data.getElementsByTagName("closing_balance")[0].lastChild.nodeValue);
            
            this['cum_interest'] = parseFloat(data.getElementsByTagName("cum_interest")[0].lastChild.nodeValue);
        }
        else {
            this['instalment_no'] = data['instalment_no'];
            
            this['instalment_date'] = data['instalment_date'];
            
            this['opening_balance'] = data['opening_balance'];
            
            this['principle_adj'] = data['principle_adj'];
            
            this['interest_adj'] = data['interest_adj'];
            
            this['closing_balance'] = data['closing_balance'];
            
            this['cum_interest'] = data['cum_interest'];
        }
    }
}

