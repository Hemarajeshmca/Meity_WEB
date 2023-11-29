var responseDataFormat = "JSON";

function save_subvention_adviceRequest(data)
{
    /**
     * @member {save_subvention_adviceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new save_subvention_adviceRequestcontext(data['context']);
    }
}

function save_subvention_adviceRequestcontext(data)
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
     * @member {save_subvention_adviceRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {save_subvention_adviceRequestDetail} Detail
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
            this['Header'] = new save_subvention_adviceRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new save_subvention_adviceRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function save_subvention_adviceRequestHeader(data)
{
    /**
     * @member {String} refund_status_code
     */
    this['refund_status_code'] = null;
    
    /**
     * @member {String} subvention_code
     */
    this['subvention_code'] = null;
    
    /**
     * @member {String} run_date
     */
    this['run_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('refund_status_code'))
            this['refund_status_code'] = data['refund_status_code'];
        
        if(data.hasOwnProperty('subvention_code'))
            this['subvention_code'] = data['subvention_code'];
        
        if(data.hasOwnProperty('run_date'))
            this['run_date'] = data['run_date'];
        
    }
}

function save_subvention_adviceRequestDetail(data)
{
    /**
     * @member {Int32} loansubvention_rowid
     */
    this['loansubvention_rowid'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} sel_flag
     */
    this['sel_flag'] = null;
    
    /**
     * @member {String} subvention_code
     */
    this['subvention_code'] = null;
    
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} loan_acc_no
     */
    this['loan_acc_no'] = null;
    
    /**
     * @member {Decimal} interest_amount
     */
    this['interest_amount'] = null;
    
    /**
     * @member {Decimal} refund_amount
     */
    this['refund_amount'] = null;
    
    /**
     * @member {String} refund_advice_no
     */
    this['refund_advice_no'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('loansubvention_rowid'))
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('farmer_name'))
            this['farmer_name'] = data['farmer_name'];
        
        if(data.hasOwnProperty('sel_flag'))
            this['sel_flag'] = data['sel_flag'];
        
        if(data.hasOwnProperty('subvention_code'))
            this['subvention_code'] = data['subvention_code'];
        
        if(data.hasOwnProperty('loan_type'))
            this['loan_type'] = data['loan_type'];
        
        if(data.hasOwnProperty('loan_acc_no'))
            this['loan_acc_no'] = data['loan_acc_no'];
        
        if(data.hasOwnProperty('interest_amount'))
            this['interest_amount'] = data['interest_amount'];
        
        if(data.hasOwnProperty('refund_amount'))
            this['refund_amount'] = data['refund_amount'];
        
        if(data.hasOwnProperty('refund_advice_no'))
            this['refund_advice_no'] = data['refund_advice_no'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function save_subvention_adviceResponse(data, format)
{
    /**
     * @member {save_subvention_adviceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {save_subvention_adviceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new save_subvention_adviceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new save_subvention_adviceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new save_subvention_adviceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new save_subvention_adviceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function save_subvention_adviceResponseApplicationException(data)
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

function save_subvention_adviceResponsecontext(data)
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
     * @member {save_subvention_adviceResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new save_subvention_adviceResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new save_subvention_adviceResponseHeader(data['Header']);
        }
    }
}

function save_subvention_adviceResponseHeader(data)
{
    /**
     * @member {String} refund_status_code
     */
    this['refund_status_code'] = null;
    
    /**
     * @member {String} subvention_code
     */
    this['subvention_code'] = null;
    
    /**
     * @member {String} run_date
     */
    this['run_date'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['refund_status_code'] = (data.getElementsByTagName("refund_status_code")[0].lastChild != null) ? data.getElementsByTagName("refund_status_code")[0].lastChild.nodeValue : "";
            
            this['subvention_code'] = (data.getElementsByTagName("subvention_code")[0].lastChild != null) ? data.getElementsByTagName("subvention_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("run_date")[0].attributes.length == 0) //Check NULL value
                this['run_date'] = (data.getElementsByTagName("run_date")[0].lastChild != null) ? data.getElementsByTagName("run_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['refund_status_code'] = data['refund_status_code'];
            
            this['subvention_code'] = data['subvention_code'];
            
            this['run_date'] = data['run_date'];
        }
    }
}

