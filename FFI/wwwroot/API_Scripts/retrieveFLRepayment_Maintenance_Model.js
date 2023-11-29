var responseDataFormat = "JSON";

function retrieveFLRepayment_MaintenanceRequest(data)
{
    /**
     * @member {retrieveFLRepayment_MaintenanceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLRepayment_MaintenanceRequestcontext(data['context']);
    }
}

function retrieveFLRepayment_MaintenanceRequestcontext(data)
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
     * @member {retrieveFLRepayment_MaintenanceRequestHeader} Header
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
            this['Header'] = new retrieveFLRepayment_MaintenanceRequestHeader(data['Header']);
    }
}

function retrieveFLRepayment_MaintenanceRequestHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int32} loanrepayment_rowid
     */
    this['loanrepayment_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loan_no'))
            this['loan_no'] = data['loan_no'];
        
        if(data.hasOwnProperty('loanrepayment_rowid'))
            this['loanrepayment_rowid'] = data['loanrepayment_rowid'];
        
    }
}

function retrieveFLRepayment_MaintenanceResponse(data, format)
{
    /**
     * @member {retrieveFLRepayment_MaintenanceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLRepayment_MaintenanceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLRepayment_MaintenanceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLRepayment_MaintenanceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLRepayment_MaintenanceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLRepayment_MaintenanceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLRepayment_MaintenanceResponseApplicationException(data)
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

function retrieveFLRepayment_MaintenanceResponsecontext(data)
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
     * @member {retrieveFLRepayment_MaintenanceResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFLRepayment_MaintenanceResponseRepaymentDtl} RepaymentDtl
     */
    this['RepaymentDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFLRepayment_MaintenanceResponseHeader(data.getElementsByTagName("Header")[0]);
            
            RepaymentDtl = [];
            for(RepaymentDtlchildi = 0; RepaymentDtlchildi < data.getElementsByTagName("RepaymentDtl").length; RepaymentDtlchildi++)
            {
                RepaymentDtl.push(new retrieveFLRepayment_MaintenanceResponseRepaymentDtl(data.getElementsByTagName("RepaymentDtl")[RepaymentDtlchildi]));
            }
            if(data.getElementsByTagName("RepaymentDtl").length > 0)
                this['RepaymentDtl'] = RepaymentDtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFLRepayment_MaintenanceResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('RepaymentDtl') && data['RepaymentDtl'] != null)
            {
                RepaymentDtl = [];
                for(RepaymentDtlindex = 0; RepaymentDtlindex < data['RepaymentDtl'].length; RepaymentDtlindex++)
                {
                    RepaymentDtl.push(new retrieveFLRepayment_MaintenanceResponseRepaymentDtl(data['RepaymentDtl'][RepaymentDtlindex]));
                }
                this['RepaymentDtl'] = RepaymentDtl;
            }
        }
    }
}

function retrieveFLRepayment_MaintenanceResponseHeader(data)
{
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int32} loanrepayment_rowid
     */
    this['loanrepayment_rowid'] = null;
    
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
     * @member {String} duepayment_date
     */
    this['duepayment_date'] = null;
    
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
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['loanrepayment_rowid'] = parseInt(data.getElementsByTagName("loanrepayment_rowid")[0].lastChild.nodeValue);
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sur_name'] = (data.getElementsByTagName("sur_name")[0].lastChild != null) ? data.getElementsByTagName("sur_name")[0].lastChild.nodeValue : "";
            
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_desc'] = (data.getElementsByTagName("loanscheme_desc")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_desc")[0].lastChild.nodeValue : "";
            
            this['interest_rate'] = parseFloat(data.getElementsByTagName("interest_rate")[0].lastChild.nodeValue);
            
            this['Tenure'] = parseInt(data.getElementsByTagName("Tenure")[0].lastChild.nodeValue);
            
            this['loan_amount'] = parseFloat(data.getElementsByTagName("loan_amount")[0].lastChild.nodeValue);
            
            this['principle_paid'] = parseFloat(data.getElementsByTagName("principle_paid")[0].lastChild.nodeValue);
            
            this['principle_due'] = parseFloat(data.getElementsByTagName("principle_due")[0].lastChild.nodeValue);
            
            this['interest_paid'] = parseFloat(data.getElementsByTagName("interest_paid")[0].lastChild.nodeValue);
            
            this['instalment_paid'] = parseFloat(data.getElementsByTagName("instalment_paid")[0].lastChild.nodeValue);
            
            this['duepayment_date'] = (data.getElementsByTagName("duepayment_date")[0].lastChild != null) ? data.getElementsByTagName("duepayment_date")[0].lastChild.nodeValue : "";
            
            this['loan_status'] = (data.getElementsByTagName("loan_status")[0].lastChild != null) ? data.getElementsByTagName("loan_status")[0].lastChild.nodeValue : "";
            
            this['loan_status_desc'] = (data.getElementsByTagName("loan_status_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['loan_no'] = data['loan_no'];
            
            this['loanrepayment_rowid'] = data['loanrepayment_rowid'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sur_name'] = data['sur_name'];
            
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_desc'] = data['loanscheme_desc'];
            
            this['interest_rate'] = data['interest_rate'];
            
            this['Tenure'] = data['Tenure'];
            
            this['loan_amount'] = data['loan_amount'];
            
            this['principle_paid'] = data['principle_paid'];
            
            this['principle_due'] = data['principle_due'];
            
            this['interest_paid'] = data['interest_paid'];
            
            this['instalment_paid'] = data['instalment_paid'];
            
            this['duepayment_date'] = data['duepayment_date'];
            
            this['loan_status'] = data['loan_status'];
            
            this['loan_status_desc'] = data['loan_status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveFLRepayment_MaintenanceResponseRepaymentDtl(data)
{
    /**
     * @member {Int32} loaninstalment_rowid
     */
    this['loaninstalment_rowid'] = null;
    
    /**
     * @member {Int16} instalment_no
     */
    this['instalment_no'] = null;
    
    /**
     * @member {String} instalment_date
     */
    this['instalment_date'] = null;
    
    /**
     * @member {Decimal} instalment_amount
     */
    this['instalment_amount'] = null;
    
    /**
     * @member {Decimal} principle_amount
     */
    this['principle_amount'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loaninstalment_rowid'] = parseInt(data.getElementsByTagName("loaninstalment_rowid")[0].lastChild.nodeValue);
            
            this['instalment_no'] = parseInt(data.getElementsByTagName("instalment_no")[0].lastChild.nodeValue);
            
            this['instalment_date'] = (data.getElementsByTagName("instalment_date")[0].lastChild != null) ? data.getElementsByTagName("instalment_date")[0].lastChild.nodeValue : "";
            
            this['instalment_amount'] = parseFloat(data.getElementsByTagName("instalment_amount")[0].lastChild.nodeValue);
            
            this['principle_amount'] = parseFloat(data.getElementsByTagName("principle_amount")[0].lastChild.nodeValue);
            
            this['interest_amount'] = parseFloat(data.getElementsByTagName("interest_amount")[0].lastChild.nodeValue);
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['loaninstalment_rowid'] = data['loaninstalment_rowid'];
            
            this['instalment_no'] = data['instalment_no'];
            
            this['instalment_date'] = data['instalment_date'];
            
            this['instalment_amount'] = data['instalment_amount'];
            
            this['principle_amount'] = data['principle_amount'];
            
            this['interest_amount'] = data['interest_amount'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

