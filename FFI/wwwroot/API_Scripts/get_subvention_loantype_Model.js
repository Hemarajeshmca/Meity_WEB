var responseDataFormat = "JSON";

function get_subvention_loantypeRequest(data)
{
    /**
     * @member {get_subvention_loantypeRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new get_subvention_loantypeRequestcontext(data['context']);
    }
}

function get_subvention_loantypeRequestcontext(data)
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
     * @member {get_subvention_loantypeRequestHeader} Header
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
            this['Header'] = new get_subvention_loantypeRequestHeader(data['Header']);
    }
}

function get_subvention_loantypeRequestHeader(data)
{
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} Interest_Paid_From
     */
    this['Interest_Paid_From'] = null;
    
    /**
     * @member {String} Interest_Paid_To
     */
    this['Interest_Paid_To'] = null;
    
    /**
     * @member {String} Loan_Disb_From
     */
    this['Loan_Disb_From'] = null;
    
    /**
     * @member {String} Loan_Disb_to
     */
    this['Loan_Disb_to'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loan_type'))
            this['loan_type'] = data['loan_type'];
        
        if(data.hasOwnProperty('Interest_Paid_From'))
            this['Interest_Paid_From'] = data['Interest_Paid_From'];
        
        if(data.hasOwnProperty('Interest_Paid_To'))
            this['Interest_Paid_To'] = data['Interest_Paid_To'];
        
        if(data.hasOwnProperty('Loan_Disb_From'))
            this['Loan_Disb_From'] = data['Loan_Disb_From'];
        
        if(data.hasOwnProperty('Loan_Disb_to'))
            this['Loan_Disb_to'] = data['Loan_Disb_to'];
        
    }
}

function get_subvention_loantypeResponse(data, format)
{
    /**
     * @member {get_subvention_loantypeResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {get_subvention_loantypeResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new get_subvention_loantypeResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new get_subvention_loantypeResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new get_subvention_loantypeResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new get_subvention_loantypeResponseApplicationException(data['ApplicationException']);
        }
    }
}

function get_subvention_loantypeResponseApplicationException(data)
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

function get_subvention_loantypeResponsecontext(data)
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
     * @member {get_subvention_loantypeResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {get_subvention_loantypeResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new get_subvention_loantypeResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new get_subvention_loantypeResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new get_subvention_loantypeResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new get_subvention_loantypeResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function get_subvention_loantypeResponseHeader(data)
{
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} loan_type_desc
     */
    this['loan_type_desc'] = null;
    
    /**
     * @member {String} Interest_Paid_From
     */
    this['Interest_Paid_From'] = null;
    
    /**
     * @member {String} Interest_Paid_To
     */
    this['Interest_Paid_To'] = null;
    
    /**
     * @member {String} Loan_Disb_From
     */
    this['Loan_Disb_From'] = null;
    
    /**
     * @member {String} Loan_Disb_to
     */
    this['Loan_Disb_to'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loan_type'] = (data.getElementsByTagName("loan_type")[0].lastChild != null) ? data.getElementsByTagName("loan_type")[0].lastChild.nodeValue : "";
            
            this['loan_type_desc'] = (data.getElementsByTagName("loan_type_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_type_desc")[0].lastChild.nodeValue : "";
            
            this['Interest_Paid_From'] = (data.getElementsByTagName("Interest_Paid_From")[0].lastChild != null) ? data.getElementsByTagName("Interest_Paid_From")[0].lastChild.nodeValue : "";
            
            this['Interest_Paid_To'] = (data.getElementsByTagName("Interest_Paid_To")[0].lastChild != null) ? data.getElementsByTagName("Interest_Paid_To")[0].lastChild.nodeValue : "";
            
            this['Loan_Disb_From'] = (data.getElementsByTagName("Loan_Disb_From")[0].lastChild != null) ? data.getElementsByTagName("Loan_Disb_From")[0].lastChild.nodeValue : "";
            
            this['Loan_Disb_to'] = (data.getElementsByTagName("Loan_Disb_to")[0].lastChild != null) ? data.getElementsByTagName("Loan_Disb_to")[0].lastChild.nodeValue : "";
        }
        else {
            this['loan_type'] = data['loan_type'];
            
            this['loan_type_desc'] = data['loan_type_desc'];
            
            this['Interest_Paid_From'] = data['Interest_Paid_From'];
            
            this['Interest_Paid_To'] = data['Interest_Paid_To'];
            
            this['Loan_Disb_From'] = data['Loan_Disb_From'];
            
            this['Loan_Disb_to'] = data['Loan_Disb_to'];
        }
    }
}

function get_subvention_loantypeResponseDetail(data)
{
    /**
     * @member {String} loanscheme_code
     */
    this['loanscheme_code'] = null;
    
    /**
     * @member {String} loanscheme_desc
     */
    this['loanscheme_desc'] = null;
    
    /**
     * @member {String} sel_flag
     */
    this['sel_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_desc'] = (data.getElementsByTagName("loanscheme_desc")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_desc")[0].lastChild.nodeValue : "";
            
            this['sel_flag'] = (data.getElementsByTagName("sel_flag")[0].lastChild != null) ? data.getElementsByTagName("sel_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_desc'] = data['loanscheme_desc'];
            
            this['sel_flag'] = data['sel_flag'];
        }
    }
}

