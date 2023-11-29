var responseDataFormat = "JSON";

function retrieveFPOExpenseRequest(data)
{
    /**
     * @member {retrieveFPOExpenseRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFPOExpenseRequestcontext(data['context']);
    }
}

function retrieveFPOExpenseRequestcontext(data)
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
     * @member {retrieveFPOExpenseRequestHeader} Header
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
            this['Header'] = new retrieveFPOExpenseRequestHeader(data['Header']);
    }
}

function retrieveFPOExpenseRequestHeader(data)
{
    /**
     * @member {Int32} expense_rowid
     */
    this['expense_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('expense_rowid'))
            this['expense_rowid'] = data['expense_rowid'];
        
    }
}

function retrieveFPOExpenseResponse(data, format)
{
    /**
     * @member {retrieveFPOExpenseResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFPOExpenseResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFPOExpenseResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFPOExpenseResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFPOExpenseResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFPOExpenseResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFPOExpenseResponseApplicationException(data)
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

function retrieveFPOExpenseResponsecontext(data)
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
     * @member {retrieveFPOExpenseResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {retrieveFPOExpenseResponseFPOExpenseDtl} FPOExpenseDtl
     */
    this['FPOExpenseDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new retrieveFPOExpenseResponseHeader(data.getElementsByTagName("Header")[0]);
            
            FPOExpenseDtl = [];
            for(FPOExpenseDtlchildi = 0; FPOExpenseDtlchildi < data.getElementsByTagName("FPOExpenseDtl").length; FPOExpenseDtlchildi++)
            {
                FPOExpenseDtl.push(new retrieveFPOExpenseResponseFPOExpenseDtl(data.getElementsByTagName("FPOExpenseDtl")[FPOExpenseDtlchildi]));
            }
            if(data.getElementsByTagName("FPOExpenseDtl").length > 0)
                this['FPOExpenseDtl'] = FPOExpenseDtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new retrieveFPOExpenseResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('FPOExpenseDtl') && data['FPOExpenseDtl'] != null)
            {
                FPOExpenseDtl = [];
                for(FPOExpenseDtlindex = 0; FPOExpenseDtlindex < data['FPOExpenseDtl'].length; FPOExpenseDtlindex++)
                {
                    FPOExpenseDtl.push(new retrieveFPOExpenseResponseFPOExpenseDtl(data['FPOExpenseDtl'][FPOExpenseDtlindex]));
                }
                this['FPOExpenseDtl'] = FPOExpenseDtl;
            }
        }
    }
}

function retrieveFPOExpenseResponseHeader(data)
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
     * @member {String} finyear_desc
     */
    this['finyear_desc'] = null;
    
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
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['expense_rowid'] = parseInt(data.getElementsByTagName("expense_rowid")[0].lastChild.nodeValue);
            
            this['expense_code'] = (data.getElementsByTagName("expense_code")[0].lastChild != null) ? data.getElementsByTagName("expense_code")[0].lastChild.nodeValue : "";
            
            this['finyear_code'] = (data.getElementsByTagName("finyear_code")[0].lastChild != null) ? data.getElementsByTagName("finyear_code")[0].lastChild.nodeValue : "";
            
            this['finyear_desc'] = (data.getElementsByTagName("finyear_desc")[0].lastChild != null) ? data.getElementsByTagName("finyear_desc")[0].lastChild.nodeValue : "";
            
            this['totalexpense_Amt'] = parseFloat(data.getElementsByTagName("totalexpense_Amt")[0].lastChild.nodeValue);
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['expense_rowid'] = data['expense_rowid'];
            
            this['expense_code'] = data['expense_code'];
            
            this['finyear_code'] = data['finyear_code'];
            
            this['finyear_desc'] = data['finyear_desc'];
            
            this['totalexpense_Amt'] = data['totalexpense_Amt'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function retrieveFPOExpenseResponseFPOExpenseDtl(data)
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
     * @member {String} businessactivity_desc
     */
    this['businessactivity_desc'] = null;
    
    /**
     * @member {String} expensehead_code
     */
    this['expensehead_code'] = null;
    
    /**
     * @member {String} expensehead_desc
     */
    this['expensehead_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['expensedtl_rowid'] = parseInt(data.getElementsByTagName("expensedtl_rowid")[0].lastChild.nodeValue);
            
            this['businessactivity_code'] = (data.getElementsByTagName("businessactivity_code")[0].lastChild != null) ? data.getElementsByTagName("businessactivity_code")[0].lastChild.nodeValue : "";
            
            this['businessactivity_desc'] = (data.getElementsByTagName("businessactivity_desc")[0].lastChild != null) ? data.getElementsByTagName("businessactivity_desc")[0].lastChild.nodeValue : "";
            
            this['expensehead_code'] = (data.getElementsByTagName("expensehead_code")[0].lastChild != null) ? data.getElementsByTagName("expensehead_code")[0].lastChild.nodeValue : "";
            
            this['expensehead_desc'] = (data.getElementsByTagName("expensehead_desc")[0].lastChild != null) ? data.getElementsByTagName("expensehead_desc")[0].lastChild.nodeValue : "";
            
            this['expense_desc'] = (data.getElementsByTagName("expense_desc")[0].lastChild != null) ? data.getElementsByTagName("expense_desc")[0].lastChild.nodeValue : "";
            
            this['expense_date'] = (data.getElementsByTagName("expense_date")[0].lastChild != null) ? data.getElementsByTagName("expense_date")[0].lastChild.nodeValue : "";
            
            this['expense_amount'] = parseFloat(data.getElementsByTagName("expense_amount")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['expensedtl_rowid'] = data['expensedtl_rowid'];
            
            this['businessactivity_code'] = data['businessactivity_code'];
            
            this['businessactivity_desc'] = data['businessactivity_desc'];
            
            this['expensehead_code'] = data['expensehead_code'];
            
            this['expensehead_desc'] = data['expensehead_desc'];
            
            this['expense_desc'] = data['expense_desc'];
            
            this['expense_date'] = data['expense_date'];
            
            this['expense_amount'] = data['expense_amount'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

