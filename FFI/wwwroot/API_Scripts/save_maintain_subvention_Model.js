var responseDataFormat = "JSON";

function save_maintain_subventionRequest(data)
{
    /**
     * @member {save_maintain_subventionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new save_maintain_subventionRequestcontext(data['context']);
    }
}

function save_maintain_subventionRequestcontext(data)
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
     * @member {save_maintain_subventionRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {save_maintain_subventionRequestDetail} Detail
     */
    this['Detail'] = null;
    
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
            this['Header'] = new save_maintain_subventionRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new save_maintain_subventionRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function save_maintain_subventionRequestHeader(data)
{
    /**
     * @member {Int32} loansubvention_rowid
     */
    this['loansubvention_rowid'] = null;
    
    /**
     * @member {String} subvention_code
     */
    this['subvention_code'] = null;
    
    /**
     * @member {String} subvention_name
     */
    this['subvention_name'] = null;
    
    /**
     * @member {String} schemecreated_date
     */
    this['schemecreated_date'] = null;
    
    /**
     * @member {String} period_from
     */
    this['period_from'] = null;
    
    /**
     * @member {String} period_to
     */
    this['period_to'] = null;
    
    /**
     * @member {Decimal} subvention_rate
     */
    this['subvention_rate'] = null;
    
    /**
     * @member {String} Threshold
     */
    this['Threshold'] = null;
    
    /**
     * @member {String} Ref_Circular_No
     */
    this['Ref_Circular_No'] = null;
    
    /**
     * @member {String} loan_type_code
     */
    this['loan_type_code'] = null;
    
    /**
     * @member {String} Interest_Paid_From
     */
    this['Interest_Paid_From'] = null;
    
    /**
     * @member {String} Interest_Paid_to
     */
    this['Interest_Paid_to'] = null;
    
    /**
     * @member {String} Loan_Disb_From
     */
    this['Loan_Disb_From'] = null;
    
    /**
     * @member {String} Loan_Disb_to
     */
    this['Loan_Disb_to'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {DateTime} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loansubvention_rowid'))
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
        
        if(data.hasOwnProperty('subvention_code'))
            this['subvention_code'] = data['subvention_code'];
        
        if(data.hasOwnProperty('subvention_name'))
            this['subvention_name'] = data['subvention_name'];
        
        if(data.hasOwnProperty('schemecreated_date'))
            this['schemecreated_date'] = data['schemecreated_date'];
        
        if(data.hasOwnProperty('period_from'))
            this['period_from'] = data['period_from'];
        
        if(data.hasOwnProperty('period_to'))
            this['period_to'] = data['period_to'];
        
        if(data.hasOwnProperty('subvention_rate'))
            this['subvention_rate'] = data['subvention_rate'];
        
        if(data.hasOwnProperty('Threshold'))
            this['Threshold'] = data['Threshold'];
        
        if(data.hasOwnProperty('Ref_Circular_No'))
            this['Ref_Circular_No'] = data['Ref_Circular_No'];
        
        if(data.hasOwnProperty('loan_type_code'))
            this['loan_type_code'] = data['loan_type_code'];
        
        if(data.hasOwnProperty('Interest_Paid_From'))
            this['Interest_Paid_From'] = data['Interest_Paid_From'];
        
        if(data.hasOwnProperty('Interest_Paid_to'))
            this['Interest_Paid_to'] = data['Interest_Paid_to'];
        
        if(data.hasOwnProperty('Loan_Disb_From'))
            this['Loan_Disb_From'] = data['Loan_Disb_From'];
        
        if(data.hasOwnProperty('Loan_Disb_to'))
            this['Loan_Disb_to'] = data['Loan_Disb_to'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function save_maintain_subventionRequestDetail(data)
{
    /**
     * @member {Int32} loansubventionmap_rowid
     */
    this['loansubventionmap_rowid'] = null;
    
    /**
     * @member {String} sel_flag
     */
    this['sel_flag'] = null;
    
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loansubventionmap_rowid'))
            this['loansubventionmap_rowid'] = data['loansubventionmap_rowid'];
        
        if(data.hasOwnProperty('sel_flag'))
            this['sel_flag'] = data['sel_flag'];
        
        if(data.hasOwnProperty('loanscheme_code'))
            this['loanscheme_code'] = data['loanscheme_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function save_maintain_subventionResponse(data, format)
{
    /**
     * @member {save_maintain_subventionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {save_maintain_subventionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new save_maintain_subventionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new save_maintain_subventionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new save_maintain_subventionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new save_maintain_subventionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function save_maintain_subventionResponseApplicationException(data)
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

function save_maintain_subventionResponsecontext(data)
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
     * @member {save_maintain_subventionResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new save_maintain_subventionResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new save_maintain_subventionResponseHeader(data['Header']);
        }
    }
}

function save_maintain_subventionResponseHeader(data)
{
    /**
     * @member {Int32} loansubvention_rowid
     */
    this['loansubvention_rowid'] = null;
    
    /**
     * @member {String} subvention_code
     */
    this['subvention_code'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loansubvention_rowid'] = parseInt(data.getElementsByTagName("loansubvention_rowid")[0].lastChild.nodeValue);
            
            this['subvention_code'] = (data.getElementsByTagName("subvention_code")[0].lastChild != null) ? data.getElementsByTagName("subvention_code")[0].lastChild.nodeValue : "";
        }
        else {
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
            
            this['subvention_code'] = data['subvention_code'];
        }
    }
}

