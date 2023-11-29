var responseDataFormat = "JSON";

function saveFLClosure_Letter_NDCRequest(data)
{
    /**
     * @member {saveFLClosure_Letter_NDCRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFLClosure_Letter_NDCRequestcontext(data['context']);
    }
}

function saveFLClosure_Letter_NDCRequestcontext(data)
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
     * @member {saveFLClosure_Letter_NDCRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveFLClosure_Letter_NDCRequestDetail} Detail
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
            this['Header'] = new saveFLClosure_Letter_NDCRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveFLClosure_Letter_NDCRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveFLClosure_Letter_NDCRequestHeader(data)
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

function saveFLClosure_Letter_NDCRequestDetail(data)
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
    
    if(data)
    {
        if(data.hasOwnProperty('loan_rowid'))
            this['loan_rowid'] = data['loan_rowid'];
        
        if(data.hasOwnProperty('fpomember_code'))
            this['fpomember_code'] = data['fpomember_code'];
        
        if(data.hasOwnProperty('farmer_name'))
            this['farmer_name'] = data['farmer_name'];
        
        if(data.hasOwnProperty('loanscheme_code'))
            this['loanscheme_code'] = data['loanscheme_code'];
        
        if(data.hasOwnProperty('loan_no'))
            this['loan_no'] = data['loan_no'];
        
        if(data.hasOwnProperty('loan_amount'))
            this['loan_amount'] = data['loan_amount'];
        
        if(data.hasOwnProperty('loan_status'))
            this['loan_status'] = data['loan_status'];
        
    }
}

function saveFLClosure_Letter_NDCResponse(data, format)
{
    /**
     * @member {saveFLClosure_Letter_NDCResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFLClosure_Letter_NDCResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFLClosure_Letter_NDCResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFLClosure_Letter_NDCResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFLClosure_Letter_NDCResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFLClosure_Letter_NDCResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFLClosure_Letter_NDCResponseApplicationException(data)
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

function saveFLClosure_Letter_NDCResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
        }
    }
}

