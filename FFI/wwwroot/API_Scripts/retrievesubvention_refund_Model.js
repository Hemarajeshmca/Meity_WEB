var responseDataFormat = "JSON";

function retrievesubvention_refundRequest(data)
{
    /**
     * @member {retrievesubvention_refundRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrievesubvention_refundRequestcontext(data['context']);
    }
}

function retrievesubvention_refundRequestcontext(data)
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
     * @member {retrievesubvention_refundRequestHeader} Header
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
            this['Header'] = new retrievesubvention_refundRequestHeader(data['Header']);
    }
}

function retrievesubvention_refundRequestHeader(data)
{
    /**
     * @member {String} refund_status_code
     */
    this['refund_status_code'] = null;
    
    /**
     * @member {String} run_date
     */
    this['run_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('refund_status_code'))
            this['refund_status_code'] = data['refund_status_code'];
        
        if(data.hasOwnProperty('run_date'))
            this['run_date'] = data['run_date'];
        
    }
}

function retrievesubvention_refundResponse(data, format)
{
    /**
     * @member {retrievesubvention_refundResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrievesubvention_refundResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrievesubvention_refundResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrievesubvention_refundResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrievesubvention_refundResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrievesubvention_refundResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrievesubvention_refundResponseApplicationException(data)
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

function retrievesubvention_refundResponsecontext(data)
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
     * @member {retrievesubvention_refundResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrievesubvention_refundResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrievesubvention_refundResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrievesubvention_refundResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrievesubvention_refundResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrievesubvention_refundResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrievesubvention_refundResponseHeader(data)
{
    /**
     * @member {String} refund_status_code
     */
    this['refund_status_code'] = null;
    
    /**
     * @member {String} refund_status_desc
     */
    this['refund_status_desc'] = null;
    
    /**
     * @member {String} run_date
     */
    this['run_date'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['refund_status_code'] = (data.getElementsByTagName("refund_status_code")[0].lastChild != null) ? data.getElementsByTagName("refund_status_code")[0].lastChild.nodeValue : "";
            
            this['refund_status_desc'] = (data.getElementsByTagName("refund_status_desc")[0].lastChild != null) ? data.getElementsByTagName("refund_status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("run_date")[0].attributes.length == 0) //Check NULL value
                this['run_date'] = (data.getElementsByTagName("run_date")[0].lastChild != null) ? data.getElementsByTagName("run_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['refund_status_code'] = data['refund_status_code'];
            
            this['refund_status_desc'] = data['refund_status_desc'];
            
            this['run_date'] = data['run_date'];
        }
    }
}

function retrievesubvention_refundResponseDetail(data)
{
    /**
     * @member {String} sel_flag
     */
    this['sel_flag'] = null;
    
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
     * @member {String} subvention_code
     */
    this['subvention_code'] = null;
    
    /**
     * @member {String} subvention_name
     */
    this['subvention_name'] = null;
    
    /**
     * @member {String} loan_acc_no
     */
    this['loan_acc_no'] = null;
    
    /**
     * @member {Decimal} refund_amount
     */
    this['refund_amount'] = null;
    
    /**
     * @member {String} refund_advice_no
     */
    this['refund_advice_no'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} refund_date
     */
    this['refund_date'] = null;
    
    /**
     * @member {String} refund_status
     */
    this['refund_status'] = null;
    
    /**
     * @member {String} refund_status_desc
     */
    this['refund_status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['sel_flag'] = (data.getElementsByTagName("sel_flag")[0].lastChild != null) ? data.getElementsByTagName("sel_flag")[0].lastChild.nodeValue : "";
            
            this['loansubvention_rowid'] = parseInt(data.getElementsByTagName("loansubvention_rowid")[0].lastChild.nodeValue);
            
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['subvention_code'] = (data.getElementsByTagName("subvention_code")[0].lastChild != null) ? data.getElementsByTagName("subvention_code")[0].lastChild.nodeValue : "";
            
            this['subvention_name'] = (data.getElementsByTagName("subvention_name")[0].lastChild != null) ? data.getElementsByTagName("subvention_name")[0].lastChild.nodeValue : "";
            
            this['loan_acc_no'] = (data.getElementsByTagName("loan_acc_no")[0].lastChild != null) ? data.getElementsByTagName("loan_acc_no")[0].lastChild.nodeValue : "";
            
            this['refund_amount'] = parseFloat(data.getElementsByTagName("refund_amount")[0].lastChild.nodeValue);
            
            this['refund_advice_no'] = (data.getElementsByTagName("refund_advice_no")[0].lastChild != null) ? data.getElementsByTagName("refund_advice_no")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['refund_date'] = (data.getElementsByTagName("refund_date")[0].lastChild != null) ? data.getElementsByTagName("refund_date")[0].lastChild.nodeValue : "";
            
            this['refund_status'] = (data.getElementsByTagName("refund_status")[0].lastChild != null) ? data.getElementsByTagName("refund_status")[0].lastChild.nodeValue : "";
            
            this['refund_status_desc'] = (data.getElementsByTagName("refund_status_desc")[0].lastChild != null) ? data.getElementsByTagName("refund_status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['sel_flag'] = data['sel_flag'];
            
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
            
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['subvention_code'] = data['subvention_code'];
            
            this['subvention_name'] = data['subvention_name'];
            
            this['loan_acc_no'] = data['loan_acc_no'];
            
            this['refund_amount'] = data['refund_amount'];
            
            this['refund_advice_no'] = data['refund_advice_no'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['refund_date'] = data['refund_date'];
            
            this['refund_status'] = data['refund_status'];
            
            this['refund_status_desc'] = data['refund_status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

