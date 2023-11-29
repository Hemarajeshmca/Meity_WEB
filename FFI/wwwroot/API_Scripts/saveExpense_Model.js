var responseDataFormat = "JSON";

function saveExpenseRequest(data)
{
    /**
     * @member {saveExpenseRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveExpenseRequestcontext(data['context']);
    }
}

function saveExpenseRequestcontext(data)
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
     * @member {saveExpenseRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveExpenseRequestDetails} Details
     */
    this['Details'] = null;
    
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
            this['Header'] = new saveExpenseRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Details') && data['Details'] != null)
        {
            Details = [];
            for(Detailsindex = 0; Detailsindex < data['Details'].length; Detailsindex++)
            {
                Details.push(new saveExpenseRequestDetails(data['Details'][Detailsindex]));
            }
            this['Details'] = Details;
        }
    }
}

function saveExpenseRequestHeader(data)
{
    /**
     * @member {Int32} expense_rowid
     */
    this['expense_rowid'] = null;
    
    /**
     * @member {String} expense_id
     */
    this['expense_id'] = null;
    
    /**
     * @member {String} financial_year_code
     */
    this['financial_year_code'] = null;
    
    /**
     * @member {String} financial_year
     */
    this['financial_year'] = null;
    
    /**
     * @member {String} business_code
     */
    this['business_code'] = null;
    
    /**
     * @member {String} business_desc
     */
    this['business_desc'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
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
        
        if(data.hasOwnProperty('expense_id'))
            this['expense_id'] = data['expense_id'];
        
        if(data.hasOwnProperty('financial_year_code'))
            this['financial_year_code'] = data['financial_year_code'];
        
        if(data.hasOwnProperty('financial_year'))
            this['financial_year'] = data['financial_year'];
        
        if(data.hasOwnProperty('business_code'))
            this['business_code'] = data['business_code'];
        
        if(data.hasOwnProperty('business_desc'))
            this['business_desc'] = data['business_desc'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveExpenseRequestDetails(data)
{
    /**
     * @member {Int32} expensedtl_rowid
     */
    this['expensedtl_rowid'] = null;
    
    /**
     * @member {DateTime} trn_date
     */
    this['trn_date'] = null;
    
    /**
     * @member {String} expense_description
     */
    this['expense_description'] = null;
    
    /**
     * @member {String} expense_head
     */
    this['expense_head'] = null;
    
    /**
     * @member {String} bill_no
     */
    this['bill_no'] = null;
    
    /**
     * @member {Decimal} expense_amount
     */
    this['expense_amount'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('expensedtl_rowid'))
            this['expensedtl_rowid'] = data['expensedtl_rowid'];
        
        if(data.hasOwnProperty('trn_date'))
            this['trn_date'] = data['trn_date'];
        
        if(data.hasOwnProperty('expense_description'))
            this['expense_description'] = data['expense_description'];
        
        if(data.hasOwnProperty('expense_head'))
            this['expense_head'] = data['expense_head'];
        
        if(data.hasOwnProperty('bill_no'))
            this['bill_no'] = data['bill_no'];
        
        if(data.hasOwnProperty('expense_amount'))
            this['expense_amount'] = data['expense_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('status_desc'))
            this['status_desc'] = data['status_desc'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveExpenseResponse(data, format)
{
    /**
     * @member {saveExpenseResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveExpenseResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveExpenseResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveExpenseResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveExpenseResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveExpenseResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveExpenseResponseApplicationException(data)
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

function saveExpenseResponsecontext(data)
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
     * @member {saveExpenseResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveExpenseResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveExpenseResponseHeader(data['Header']);
        }
    }
}

function saveExpenseResponseHeader(data)
{
    /**
     * @member {Int32} expense_rowid
     */
    this['expense_rowid'] = null;
    
    /**
     * @member {String} expense_id
     */
    this['expense_id'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['expense_rowid'] = data.getElementsByTagName("expense_rowid")[0].lastChild.nodeValue;
            
            this['expense_id'] = (data.getElementsByTagName("expense_id")[0].lastChild != null) ? data.getElementsByTagName("expense_id")[0].lastChild.nodeValue : "";
        }
        else {
            this['expense_rowid'] = data['expense_rowid'];
            
            this['expense_id'] = data['expense_id'];
        }
    }
}

