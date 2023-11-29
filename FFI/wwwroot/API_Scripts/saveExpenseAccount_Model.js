var responseDataFormat = "JSON";

function saveExpenseAccountRequest(data)
{
    /**
     * @member {saveExpenseAccountRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveExpenseAccountRequestcontext(data['context']);
    }
}

function saveExpenseAccountRequestcontext(data)
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
     * @member {saveExpenseAccountRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveExpenseAccountRequestDetail} Detail
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
            this['Header'] = new saveExpenseAccountRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new saveExpenseAccountRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function saveExpenseAccountRequestHeader(data)
{
    /**
     * @member {Int32} expense_rowid
     */
    this['expense_rowid'] = null;
    
    /**
     * @member {String} expense_no
     */
    this['expense_no'] = null;
    
    /**
     * @member {String} cc_aggrloc_code
     */
    this['cc_aggrloc_code'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('expense_rowid'))
            this['expense_rowid'] = data['expense_rowid'];
        
        if(data.hasOwnProperty('expense_no'))
            this['expense_no'] = data['expense_no'];
        
        if(data.hasOwnProperty('cc_aggrloc_code'))
            this['cc_aggrloc_code'] = data['cc_aggrloc_code'];
        
        if(data.hasOwnProperty('finyear_code'))
            this['finyear_code'] = data['finyear_code'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveExpenseAccountRequestDetail(data)
{
    /**
     * @member {Int32} expensedtl_rowid
     */
    this['expensedtl_rowid'] = null;
    
    /**
     * @member {String} incurred_on
     */
    this['incurred_on'] = null;
    
    /**
     * @member {String} expense_code
     */
    this['expense_code'] = null;
    
    /**
     * @member {String} expense_desc
     */
    this['expense_desc'] = null;
    
    /**
     * @member {Decimal} expense_amount
     */
    this['expense_amount'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('expensedtl_rowid'))
            this['expensedtl_rowid'] = data['expensedtl_rowid'];
        
        if(data.hasOwnProperty('incurred_on'))
            this['incurred_on'] = data['incurred_on'];
        
        if(data.hasOwnProperty('expense_code'))
            this['expense_code'] = data['expense_code'];
        
        if(data.hasOwnProperty('expense_desc'))
            this['expense_desc'] = data['expense_desc'];
        
        if(data.hasOwnProperty('expense_amount'))
            this['expense_amount'] = data['expense_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveExpenseAccountResponse(data, format)
{
    /**
     * @member {saveExpenseAccountResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveExpenseAccountResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveExpenseAccountResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveExpenseAccountResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveExpenseAccountResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveExpenseAccountResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveExpenseAccountResponseApplicationException(data)
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

function saveExpenseAccountResponsecontext(data)
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
     * @member {saveExpenseAccountResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveExpenseAccountResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveExpenseAccountResponseHeader(data['Header']);
        }
    }
}

function saveExpenseAccountResponseHeader(data)
{
    /**
     * @member {Int32} expense_rowid
     */
    this['expense_rowid'] = null;
    
    /**
     * @member {String} expense_no
     */
    this['expense_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['expense_rowid'] = parseInt(data.getElementsByTagName("expense_rowid")[0].lastChild.nodeValue);
            
            this['expense_no'] = (data.getElementsByTagName("expense_no")[0].lastChild != null) ? data.getElementsByTagName("expense_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['expense_rowid'] = data['expense_rowid'];
            
            this['expense_no'] = data['expense_no'];
        }
    }
}

