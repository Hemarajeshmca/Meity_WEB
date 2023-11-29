var responseDataFormat = "JSON";

function saveFPOExpenseRequest(data)
{
    /**
     * @member {saveFPOExpenseRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveFPOExpenseRequestcontext(data['context']);
    }
}

function saveFPOExpenseRequestcontext(data)
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
     * @member {saveFPOExpenseRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveFPOExpenseRequestFpoExpenseDtl} FpoExpenseDtl
     */
    this['FpoExpenseDtl'] = null;
    
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
            this['Header'] = new saveFPOExpenseRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('FpoExpenseDtl') && data['FpoExpenseDtl'] != null)
        {
            FpoExpenseDtl = [];
            for(FpoExpenseDtlindex = 0; FpoExpenseDtlindex < data['FpoExpenseDtl'].length; FpoExpenseDtlindex++)
            {
                FpoExpenseDtl.push(new saveFPOExpenseRequestFpoExpenseDtl(data['FpoExpenseDtl'][FpoExpenseDtlindex]));
            }
            this['FpoExpenseDtl'] = FpoExpenseDtl;
        }
    }
}

function saveFPOExpenseRequestHeader(data)
{
    /**
     * @member {Int32} expense_rowid
     */
    this['expense_rowid'] = null;
    
    /**
     * @member {String} expense_code
     */
    this['expense_code'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {Decimal} totalexpense_Amt
     */
    this['totalexpense_Amt'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('expense_rowid'))
            this['expense_rowid'] = data['expense_rowid'];
        
        if(data.hasOwnProperty('expense_code'))
            this['expense_code'] = data['expense_code'];
        
        if(data.hasOwnProperty('finyear_code'))
            this['finyear_code'] = data['finyear_code'];
        
        if(data.hasOwnProperty('totalexpense_Amt'))
            this['totalexpense_Amt'] = data['totalexpense_Amt'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveFPOExpenseRequestFpoExpenseDtl(data)
{
    /**
     * @member {Int32} expensedtl_rowid
     */
    this['expensedtl_rowid'] = null;
    
    /**
     * @member {String} businessactivity_code
     */
    this['businessactivity_code'] = null;
    
    /**
     * @member {String} expense_code
     */
    this['expense_code'] = null;
    
    /**
     * @member {String} expensehead_code
     */
    this['expensehead_code'] = null;
    
    /**
     * @member {String} expense_desc
     */
    this['expense_desc'] = null;
    
    /**
     * @member {String} expense_date
     */
    this['expense_date'] = null;
    
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
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('expensedtl_rowid'))
            this['expensedtl_rowid'] = data['expensedtl_rowid'];
        
        if(data.hasOwnProperty('businessactivity_code'))
            this['businessactivity_code'] = data['businessactivity_code'];
        
        if(data.hasOwnProperty('expense_code'))
            this['expense_code'] = data['expense_code'];
        
        if(data.hasOwnProperty('expensehead_code'))
            this['expensehead_code'] = data['expensehead_code'];
        
        if(data.hasOwnProperty('expense_desc'))
            this['expense_desc'] = data['expense_desc'];
        
        if(data.hasOwnProperty('expense_date'))
            this['expense_date'] = data['expense_date'];
        
        if(data.hasOwnProperty('expense_amount'))
            this['expense_amount'] = data['expense_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function saveFPOExpenseResponse(data, format)
{
    /**
     * @member {saveFPOExpenseResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveFPOExpenseResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveFPOExpenseResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveFPOExpenseResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveFPOExpenseResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveFPOExpenseResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveFPOExpenseResponseApplicationException(data)
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

function saveFPOExpenseResponsecontext(data)
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
     * @member {saveFPOExpenseResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveFPOExpenseResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveFPOExpenseResponseHeader(data['Header']);
        }
    }
}

function saveFPOExpenseResponseHeader(data)
{
    /**
     * @member {Int32} expense_rowid
     */
    this['expense_rowid'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['expense_rowid'] = parseInt(data.getElementsByTagName("expense_rowid")[0].lastChild.nodeValue);
        }
        else {
            this['expense_rowid'] = data['expense_rowid'];
        }
    }
}

