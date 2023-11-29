var responseDataFormat = "JSON";

function retrieveMaintainMasterRequest(data)
{
    /**
     * @member {retrieveMaintainMasterRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveMaintainMasterRequestcontext(data['context']);
    }
}

function retrieveMaintainMasterRequestcontext(data)
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
     * @member {retrieveMaintainMasterRequestHeader} Header
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
            this['Header'] = new retrieveMaintainMasterRequestHeader(data['Header']);
    }
}

function retrieveMaintainMasterRequestHeader(data)
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
        if(data.hasOwnProperty('loansubvention_rowid'))
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
        
        if(data.hasOwnProperty('subvention_code'))
            this['subvention_code'] = data['subvention_code'];
        
    }
}

function retrieveMaintainMasterResponse(data, format)
{
    /**
     * @member {retrieveMaintainMasterResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveMaintainMasterResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveMaintainMasterResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveMaintainMasterResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveMaintainMasterResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveMaintainMasterResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveMaintainMasterResponseApplicationException(data)
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

function retrieveMaintainMasterResponsecontext(data)
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
     * @member {retrieveMaintainMasterResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveMaintainMasterResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveMaintainMasterResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveMaintainMasterResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveMaintainMasterResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveMaintainMasterResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveMaintainMasterResponseHeader(data)
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
     * @member {String} loan_type_desc
     */
    this['loan_type_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['loansubvention_rowid'] = parseInt(data.getElementsByTagName("loansubvention_rowid")[0].lastChild.nodeValue);
            
            this['subvention_code'] = (data.getElementsByTagName("subvention_code")[0].lastChild != null) ? data.getElementsByTagName("subvention_code")[0].lastChild.nodeValue : "";
            
            this['subvention_name'] = (data.getElementsByTagName("subvention_name")[0].lastChild != null) ? data.getElementsByTagName("subvention_name")[0].lastChild.nodeValue : "";
            
            this['schemecreated_date'] = (data.getElementsByTagName("schemecreated_date")[0].lastChild != null) ? data.getElementsByTagName("schemecreated_date")[0].lastChild.nodeValue : "";
            
            this['period_from'] = (data.getElementsByTagName("period_from")[0].lastChild != null) ? data.getElementsByTagName("period_from")[0].lastChild.nodeValue : "";
            
            this['period_to'] = (data.getElementsByTagName("period_to")[0].lastChild != null) ? data.getElementsByTagName("period_to")[0].lastChild.nodeValue : "";
            
            this['subvention_rate'] = parseFloat(data.getElementsByTagName("subvention_rate")[0].lastChild.nodeValue);
            
            this['Threshold'] = (data.getElementsByTagName("Threshold")[0].lastChild != null) ? data.getElementsByTagName("Threshold")[0].lastChild.nodeValue : "";
            
            this['Ref_Circular_No'] = (data.getElementsByTagName("Ref_Circular_No")[0].lastChild != null) ? data.getElementsByTagName("Ref_Circular_No")[0].lastChild.nodeValue : "";
            
            this['loan_type_code'] = (data.getElementsByTagName("loan_type_code")[0].lastChild != null) ? data.getElementsByTagName("loan_type_code")[0].lastChild.nodeValue : "";
            
            this['loan_type_desc'] = (data.getElementsByTagName("loan_type_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_type_desc")[0].lastChild.nodeValue : "";
            
            this['Interest_Paid_From'] = (data.getElementsByTagName("Interest_Paid_From")[0].lastChild != null) ? data.getElementsByTagName("Interest_Paid_From")[0].lastChild.nodeValue : "";
            
            this['Interest_Paid_to'] = (data.getElementsByTagName("Interest_Paid_to")[0].lastChild != null) ? data.getElementsByTagName("Interest_Paid_to")[0].lastChild.nodeValue : "";
            
            this['Loan_Disb_From'] = (data.getElementsByTagName("Loan_Disb_From")[0].lastChild != null) ? data.getElementsByTagName("Loan_Disb_From")[0].lastChild.nodeValue : "";
            
            this['Loan_Disb_to'] = (data.getElementsByTagName("Loan_Disb_to")[0].lastChild != null) ? data.getElementsByTagName("Loan_Disb_to")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue;
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
            
            this['subvention_code'] = data['subvention_code'];
            
            this['subvention_name'] = data['subvention_name'];
            
            this['schemecreated_date'] = data['schemecreated_date'];
            
            this['period_from'] = data['period_from'];
            
            this['period_to'] = data['period_to'];
            
            this['subvention_rate'] = data['subvention_rate'];
            
            this['Threshold'] = data['Threshold'];
            
            this['Ref_Circular_No'] = data['Ref_Circular_No'];
            
            this['loan_type_code'] = data['loan_type_code'];
            
            this['loan_type_desc'] = data['loan_type_desc'];
            
            this['Interest_Paid_From'] = data['Interest_Paid_From'];
            
            this['Interest_Paid_to'] = data['Interest_Paid_to'];
            
            this['Loan_Disb_From'] = data['Loan_Disb_From'];
            
            this['Loan_Disb_to'] = data['Loan_Disb_to'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

function retrieveMaintainMasterResponseDetail(data)
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
     * @member {String} loanscheme_desc
     */
    this['loanscheme_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loansubventionmap_rowid'] = parseInt(data.getElementsByTagName("loansubventionmap_rowid")[0].lastChild.nodeValue);
            
            this['sel_flag'] = (data.getElementsByTagName("sel_flag")[0].lastChild != null) ? data.getElementsByTagName("sel_flag")[0].lastChild.nodeValue : "";
            
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_desc'] = (data.getElementsByTagName("loanscheme_desc")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['loansubventionmap_rowid'] = data['loansubventionmap_rowid'];
            
            this['sel_flag'] = data['sel_flag'];
            
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_desc'] = data['loanscheme_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

