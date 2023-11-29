var responseDataFormat = "JSON";

function retrieveFLClosure_Letter_NDCRequest(data)
{
    /**
     * @member {retrieveFLClosure_Letter_NDCRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFLClosure_Letter_NDCRequestcontext(data['context']);
    }
}

function retrieveFLClosure_Letter_NDCRequestcontext(data)
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
     * @member {retrieveFLClosure_Letter_NDCRequestHeader} Header
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
            this['Header'] = new retrieveFLClosure_Letter_NDCRequestHeader(data['Header']);
    }
}

function retrieveFLClosure_Letter_NDCRequestHeader(data)
{
    /**
     * @member {String} select_option
     */
    this['select_option'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('select_option'))
            this['select_option'] = data['select_option'];
        
    }
}

function retrieveFLClosure_Letter_NDCResponse(data, format)
{
    /**
     * @member {retrieveFLClosure_Letter_NDCResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFLClosure_Letter_NDCResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFLClosure_Letter_NDCResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFLClosure_Letter_NDCResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFLClosure_Letter_NDCResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFLClosure_Letter_NDCResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFLClosure_Letter_NDCResponseApplicationException(data)
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

function retrieveFLClosure_Letter_NDCResponsecontext(data)
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
     * @member {retrieveFLClosure_Letter_NDCResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new retrieveFLClosure_Letter_NDCResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new retrieveFLClosure_Letter_NDCResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function retrieveFLClosure_Letter_NDCResponseDetail(data)
{
    /**
     * @member {Int32} loan_rowid
     */
    this['loan_rowid'] = null;
    
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
     * @member {Decimal} loan_amount
     */
    this['loan_amount'] = null;
    
    /**
     * @member {String} loan_status
     */
    this['loan_status'] = null;
    
    /**
     * @member {String} loan_status_desc
     */
    this['loan_status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['loan_rowid'] = parseInt(data.getElementsByTagName("loan_rowid")[0].lastChild.nodeValue);
            
            this['fpomember_code'] = (data.getElementsByTagName("fpomember_code")[0].lastChild != null) ? data.getElementsByTagName("fpomember_code")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['loanscheme_code'] = (data.getElementsByTagName("loanscheme_code")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_code")[0].lastChild.nodeValue : "";
            
            this['loanscheme_desc'] = (data.getElementsByTagName("loanscheme_desc")[0].lastChild != null) ? data.getElementsByTagName("loanscheme_desc")[0].lastChild.nodeValue : "";
            
            this['loan_no'] = (data.getElementsByTagName("loan_no")[0].lastChild != null) ? data.getElementsByTagName("loan_no")[0].lastChild.nodeValue : "";
            
            this['loan_amount'] = parseFloat(data.getElementsByTagName("loan_amount")[0].lastChild.nodeValue);
            
            this['loan_status'] = (data.getElementsByTagName("loan_status")[0].lastChild != null) ? data.getElementsByTagName("loan_status")[0].lastChild.nodeValue : "";
            
            this['loan_status_desc'] = (data.getElementsByTagName("loan_status_desc")[0].lastChild != null) ? data.getElementsByTagName("loan_status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['loan_rowid'] = data['loan_rowid'];
            
            this['fpomember_code'] = data['fpomember_code'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['loanscheme_code'] = data['loanscheme_code'];
            
            this['loanscheme_desc'] = data['loanscheme_desc'];
            
            this['loan_no'] = data['loan_no'];
            
            this['loan_amount'] = data['loan_amount'];
            
            this['loan_status'] = data['loan_status'];
            
            this['loan_status_desc'] = data['loan_status_desc'];
        }
    }
}

