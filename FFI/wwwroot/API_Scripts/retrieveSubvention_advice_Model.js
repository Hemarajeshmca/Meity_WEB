var responseDataFormat = "JSON";

function retrieveSubvention_adviceRequest(data)
{
    /**
     * @member {retrieveSubvention_adviceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveSubvention_adviceRequestcontext(data['context']);
    }
}

function retrieveSubvention_adviceRequestcontext(data)
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
     * @member {retrieveSubvention_adviceRequestHeader} Header
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
            this['Header'] = new retrieveSubvention_adviceRequestHeader(data['Header']);
    }
}

function retrieveSubvention_adviceRequestHeader(data)
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

function retrieveSubvention_adviceResponse(data, format)
{
    /**
     * @member {retrieveSubvention_adviceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveSubvention_adviceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveSubvention_adviceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveSubvention_adviceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveSubvention_adviceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveSubvention_adviceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveSubvention_adviceResponseApplicationException(data)
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

function retrieveSubvention_adviceResponsecontext(data)
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
     * @member {retrieveSubvention_adviceResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveSubvention_adviceResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveSubvention_adviceResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveSubvention_adviceResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveSubvention_adviceResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveSubvention_adviceResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveSubvention_adviceResponseHeader(data)
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
    
    /**
     * @member {String} subvention_desc
     */
    this['subvention_desc'] = null;
    
    /**
     * @member {String} refund_status_desc
     */
    this['refund_status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['refund_status_code'] = (data.getElementsByTagName("refund_status_code")[0].lastChild != null) ? data.getElementsByTagName("refund_status_code")[0].lastChild.nodeValue : "";
            
            this['subvention_code'] = (data.getElementsByTagName("subvention_code")[0].lastChild != null) ? data.getElementsByTagName("subvention_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("run_date")[0].attributes.length == 0) //Check NULL value
                this['run_date'] = (data.getElementsByTagName("run_date")[0].lastChild != null) ? data.getElementsByTagName("run_date")[0].lastChild.nodeValue : "";
            
            this['subvention_desc'] = (data.getElementsByTagName("subvention_desc")[0].lastChild != null) ? data.getElementsByTagName("subvention_desc")[0].lastChild.nodeValue : "";
            
            this['refund_status_desc'] = (data.getElementsByTagName("refund_status_desc")[0].lastChild != null) ? data.getElementsByTagName("refund_status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['refund_status_code'] = data['refund_status_code'];
            
            this['subvention_code'] = data['subvention_code'];
            
            this['run_date'] = data['run_date'];
            
            this['subvention_desc'] = data['subvention_desc'];
            
            this['refund_status_desc'] = data['refund_status_desc'];
        }
    }
}

function retrieveSubvention_adviceResponseDetail(data)
{
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
     * @member {String} subvention_name
     */
    this['subvention_name'] = null;
    
    /**
     * @member {String} loan_type
     */
    this['loan_type'] = null;
    
    /**
     * @member {String} loan_type_desc
     */
    this['loan_type_desc'] = null;
    
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
     * @member {Int32} loansubvention_rowid
     */
    this['loansubvention_rowid'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['sel_flag'] = (data.getElementsByTagName("sel_flag")[0].lastChild != null) ? data.getElementsByTagName("sel_flag")[0].lastChild.nodeValue : "";
            
            this['subvention_code'] = (data.getElementsByTagName("subvention_code")[0].lastChild != null) ? data.getElementsByTagName("subvention_code")[0].lastChild.nodeValue : "";
            
            this['subvention_name'] = (data.getElementsByTagName("subvention_name")[0].lastChild != null) ? data.getElementsByTagName("subvention_name")[0].lastChild.nodeValue : "";
            
            this['loan_type'] = (data.getElementsByTagName("loan_type")[0].lastChild != null) ? data.getElementsByTagName("loan_type")[0].lastChild.nodeValue : "";
            
            this['loan_type_desc'] = (data.getElementsByTagName("loan_type_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_type_desc")[0].lastChild.nodeValue : "";
            
            this['loan_acc_no'] = (data.getElementsByTagName("loan_acc_no")[0].lastChild != null) ? data.getElementsByTagName("loan_acc_no")[0].lastChild.nodeValue : "";
            
            this['interest_amount'] = parseFloat(data.getElementsByTagName("interest_amount")[0].lastChild.nodeValue);
            
            this['refund_amount'] = parseFloat(data.getElementsByTagName("refund_amount")[0].lastChild.nodeValue);
            
            this['refund_advice_no'] = (data.getElementsByTagName("refund_advice_no")[0].lastChild != null) ? data.getElementsByTagName("refund_advice_no")[0].lastChild.nodeValue : "";
            
            this['loansubvention_rowid'] = parseInt(data.getElementsByTagName("loansubvention_rowid")[0].lastChild.nodeValue);
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['sel_flag'] = data['sel_flag'];
            
            this['subvention_code'] = data['subvention_code'];
            
            this['subvention_name'] = data['subvention_name'];
            
            this['loan_type'] = data['loan_type'];
            
            this['loan_type_desc'] = data['loan_type_desc'];
            
            this['loan_acc_no'] = data['loan_acc_no'];
            
            this['interest_amount'] = data['interest_amount'];
            
            this['refund_amount'] = data['refund_amount'];
            
            this['refund_advice_no'] = data['refund_advice_no'];
            
            this['loansubvention_rowid'] = data['loansubvention_rowid'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

