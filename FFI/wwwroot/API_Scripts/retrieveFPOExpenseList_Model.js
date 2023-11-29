var responseDataFormat = "JSON";

function retrieveFPOExpenseListRequest(data)
{
    /**
     * @member {retrieveFPOExpenseListRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new retrieveFPOExpenseListRequestcontext(data['context']);
    }
}

function retrieveFPOExpenseListRequestcontext(data)
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
     * @member {retrieveFPOExpenseListRequestFilter} Filter
     */
    this['Filter'] = null;
    
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
        
        if(data.hasOwnProperty('Filter') && data['Filter'] != null)
            this['Filter'] = new retrieveFPOExpenseListRequestFilter(data['Filter']);
    }
}

function retrieveFPOExpenseListRequestFilter(data)
{
    /**
     * @member {String} FilterBy_Option
     */
    this['FilterBy_Option'] = null;
    
    /**
     * @member {String} FilterBy_Code
     */
    this['FilterBy_Code'] = null;
    
    /**
     * @member {String} FilterBy_Fromvalue
     */
    this['FilterBy_Fromvalue'] = null;
    
    /**
     * @member {String} FilterBy_Tovalue
     */
    this['FilterBy_Tovalue'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('FilterBy_Option'))
            this['FilterBy_Option'] = data['FilterBy_Option'];
        
        if(data.hasOwnProperty('FilterBy_Code'))
            this['FilterBy_Code'] = data['FilterBy_Code'];
        
        if(data.hasOwnProperty('FilterBy_Fromvalue'))
            this['FilterBy_Fromvalue'] = data['FilterBy_Fromvalue'];
        
        if(data.hasOwnProperty('FilterBy_Tovalue'))
            this['FilterBy_Tovalue'] = data['FilterBy_Tovalue'];
        
    }
}

function retrieveFPOExpenseListResponse(data, format)
{
    /**
     * @member {retrieveFPOExpenseListResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {retrieveFPOExpenseListResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new retrieveFPOExpenseListResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new retrieveFPOExpenseListResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new retrieveFPOExpenseListResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new retrieveFPOExpenseListResponseApplicationException(data['ApplicationException']);
        }
    }
}

function retrieveFPOExpenseListResponseApplicationException(data)
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

function retrieveFPOExpenseListResponsecontext(data)
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
     * @member {retrieveFPOExpenseListResponseFpoExpenseDtl} FpoExpenseDtl
     */
    this['FpoExpenseDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            FpoExpenseDtl = [];
            for(FpoExpenseDtlchildi = 0; FpoExpenseDtlchildi < data.getElementsByTagName("FpoExpenseDtl").length; FpoExpenseDtlchildi++)
            {
                FpoExpenseDtl.push(new retrieveFPOExpenseListResponseFpoExpenseDtl(data.getElementsByTagName("FpoExpenseDtl")[FpoExpenseDtlchildi]));
            }
            if(data.getElementsByTagName("FpoExpenseDtl").length > 0)
                this['FpoExpenseDtl'] = FpoExpenseDtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('FpoExpenseDtl') && data['FpoExpenseDtl'] != null)
            {
                FpoExpenseDtl = [];
                for(FpoExpenseDtlindex = 0; FpoExpenseDtlindex < data['FpoExpenseDtl'].length; FpoExpenseDtlindex++)
                {
                    FpoExpenseDtl.push(new retrieveFPOExpenseListResponseFpoExpenseDtl(data['FpoExpenseDtl'][FpoExpenseDtlindex]));
                }
                this['FpoExpenseDtl'] = FpoExpenseDtl;
            }
        }
    }
}

function retrieveFPOExpenseListResponseFpoExpenseDtl(data)
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
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} status_desc
     */
    this['status_desc'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['expense_rowid'] = parseInt(data.getElementsByTagName("expense_rowid")[0].lastChild.nodeValue);
            
            this['expense_code'] = (data.getElementsByTagName("expense_code")[0].lastChild != null) ? data.getElementsByTagName("expense_code")[0].lastChild.nodeValue : "";
            
            this['finyear_code'] = (data.getElementsByTagName("finyear_code")[0].lastChild != null) ? data.getElementsByTagName("finyear_code")[0].lastChild.nodeValue : "";
            
            this['finyear_desc'] = (data.getElementsByTagName("finyear_desc")[0].lastChild != null) ? data.getElementsByTagName("finyear_desc")[0].lastChild.nodeValue : "";
            
            this['totalexpense_Amt'] = parseFloat(data.getElementsByTagName("totalexpense_Amt")[0].lastChild.nodeValue);
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
        }
        else {
            this['expense_rowid'] = data['expense_rowid'];
            
            this['expense_code'] = data['expense_code'];
            
            this['finyear_code'] = data['finyear_code'];
            
            this['finyear_desc'] = data['finyear_desc'];
            
            this['totalexpense_Amt'] = data['totalexpense_Amt'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
        }
    }
}

