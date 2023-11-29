var responseDataFormat = "JSON";

function retrieveFLRecovery_Status_UpdateRequest(data)
{
    /**
     * @member {retrieveFLRecovery_Status_UpdateRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLRecovery_Status_UpdateRequestcontext(data['context']);
    }
}

function retrieveFLRecovery_Status_UpdateRequestcontext(data)
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
     * @member {retrieveFLRecovery_Status_UpdateRequestHeader} Header
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
            this['Header'] = new retrieveFLRecovery_Status_UpdateRequestHeader(data['Header']);
    }
}

function retrieveFLRecovery_Status_UpdateRequestHeader(data)
{
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_status
     */
    this['payment_status'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('payment_status'))
            this['payment_status'] = data['payment_status'];
        
    }
}

function retrieveFLRecovery_Status_UpdateResponse(data, format)
{
    /**
     * @member {retrieveFLRecovery_Status_UpdateResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLRecovery_Status_UpdateResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLRecovery_Status_UpdateResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLRecovery_Status_UpdateResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLRecovery_Status_UpdateResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLRecovery_Status_UpdateResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLRecovery_Status_UpdateResponseApplicationException(data)
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

function retrieveFLRecovery_Status_UpdateResponsecontext(data)
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
     * @member {retrieveFLRecovery_Status_UpdateResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFLRecovery_Status_UpdateResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFLRecovery_Status_UpdateResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveFLRecovery_Status_UpdateResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFLRecovery_Status_UpdateResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveFLRecovery_Status_UpdateResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveFLRecovery_Status_UpdateResponseHeader(data)
{
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_status
     */
    this['payment_status'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_status'] = (data.getElementsByTagName("payment_status")[0].lastChild != null) ? data.getElementsByTagName("payment_status")[0].lastChild.nodeValue : "";
        }
        else {
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_status'] = data['payment_status'];
        }
    }
}

function retrieveFLRecovery_Status_UpdateResponseDetail(data)
{
    /**
     * @member {String} fpomember_code
     */
    this['fpomember_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {String} loanscheme_desc
     */
    this['loanscheme_desc'] = null;
    
    /**
     * @member {String} loan_no
     */
    this['loan_no'] = null;
    
    /**
     * @member {Int16} instalment_no
     */
    this['instalment_no'] = null;
    
    /**
     * @member {Decimal} instalment_amount
     */
    this['instalment_amount'] = null;
    
    /**
     * @member {String} payment_due_date
     */
    this['payment_due_date'] = null;
    
    /**
     * @member {String} instalment_date
     */
    this['instalment_date'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} payment_status
     */
    this['payment_status'] = null;
    
    /**
     * @member {String} payment_status_desc
     */
    this['payment_status_desc'] = null;
    
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
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_desc'] = (data.getElementsByTagName("loanscheme_desc")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_desc")[0].lastChild.nodeValue : "";
            
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['instalment_no'] = parseInt(data.getElementsByTagName("instalment_no")[0].lastChild.nodeValue);
            
            this['instalment_amount'] = parseFloat(data.getElementsByTagName("instalment_amount")[0].lastChild.nodeValue);
            
            this['payment_due_date'] = (data.getElementsByTagName("payment_due_date")[0].lastChild != null) ? data.getElementsByTagName("payment_due_date")[0].lastChild.nodeValue : "";
            
            this['instalment_date'] = (data.getElementsByTagName("instalment_date")[0].lastChild != null) ? data.getElementsByTagName("instalment_date")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['payment_status'] = (data.getElementsByTagName("payment_status")[0].lastChild != null) ? data.getElementsByTagName("payment_status")[0].lastChild.nodeValue : "";
            
            this['payment_status_desc'] = (data.getElementsByTagName("payment_status_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['fpomember_code'] = data['fpomember_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_desc'] = data['loanscheme_desc'];
            
            this['loan_no'] = data['loan_no'];
            
            this['instalment_no'] = data['instalment_no'];
            
            this['instalment_amount'] = data['instalment_amount'];
            
            this['payment_due_date'] = data['payment_due_date'];
            
            this['instalment_date'] = data['instalment_date'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['payment_status'] = data['payment_status'];
            
            this['payment_status_desc'] = data['payment_status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

