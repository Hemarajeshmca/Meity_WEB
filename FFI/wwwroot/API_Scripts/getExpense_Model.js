var responseDataFormat = "JSON";

function getExpenseRequest(data)
{
    /**
     * @member {getExpenseRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getExpenseRequestcontext(data['context']);
    }
}

function getExpenseRequestcontext(data)
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
     * @member {getExpenseRequestHeader} Header
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
            this['Header'] = new getExpenseRequestHeader(data['Header']);
    }
}

function getExpenseRequestHeader(data)
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
        if(data.hasOwnProperty('expense_rowid'))
            this['expense_rowid'] = data['expense_rowid'];
        
        if(data.hasOwnProperty('expense_id'))
            this['expense_id'] = data['expense_id'];
        
    }
}

function getExpenseResponse(data, format)
{
    /**
     * @member {getExpenseResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getExpenseResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getExpenseResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getExpenseResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getExpenseResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getExpenseResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getExpenseResponseApplicationException(data)
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

function getExpenseResponsecontext(data)
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
     * @member {getExpenseResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getExpenseResponseDetails} Details
     */
    this['Details'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getExpenseResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Details = [];
            for(Detailschildi = 0; Detailschildi < data.getElementsByTagName("Details").length; Detailschildi++)
            {
                Details.push(new getExpenseResponseDetails(data.getElementsByTagName("Details")[Detailschildi]));
            }
            if(data.getElementsByTagName("Details").length > 0)
                this['Details'] = Details;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getExpenseResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Details') && data['Details'] != null)
            {
                Details = [];
                for(Detailsindex = 0; Detailsindex < data['Details'].length; Detailsindex++)
                {
                    Details.push(new getExpenseResponseDetails(data['Details'][Detailsindex]));
                }
                this['Details'] = Details;
            }
        }
    }
}

function getExpenseResponseHeader(data)
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
        if (responseDataFormat == "XML") {
            this['expense_rowid'] = data.getElementsByTagName("expense_rowid")[0].lastChild.nodeValue;
            
            this['expense_id'] = (data.getElementsByTagName("expense_id")[0].lastChild != null) ? data.getElementsByTagName("expense_id")[0].lastChild.nodeValue : "";
            
            this['financial_year_code'] = (data.getElementsByTagName("financial_year_code")[0].lastChild != null) ? data.getElementsByTagName("financial_year_code")[0].lastChild.nodeValue : "";
            
            this['financial_year'] = (data.getElementsByTagName("financial_year")[0].lastChild != null) ? data.getElementsByTagName("financial_year")[0].lastChild.nodeValue : "";
            
            this['business_code'] = (data.getElementsByTagName("business_code")[0].lastChild != null) ? data.getElementsByTagName("business_code")[0].lastChild.nodeValue : "";
            
            this['business_desc'] = (data.getElementsByTagName("business_desc")[0].lastChild != null) ? data.getElementsByTagName("business_desc")[0].lastChild.nodeValue : "";
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
        }
        else {
            this['expense_rowid'] = data['expense_rowid'];
            
            this['expense_id'] = data['expense_id'];
            
            this['financial_year_code'] = data['financial_year_code'];
            
            this['financial_year'] = data['financial_year'];
            
            this['business_code'] = data['business_code'];
            
            this['business_desc'] = data['business_desc'];
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
            
            this['row_timestamp'] = data['row_timestamp'];
        }
    }
}

function getExpenseResponseDetails(data)
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
        if (responseDataFormat == "XML") {
            this['expensedtl_rowid'] = data.getElementsByTagName("expensedtl_rowid")[0].lastChild.nodeValue;
            
            this['trn_date'] = data.getElementsByTagName("trn_date")[0].lastChild.nodeValue;
            
            this['expense_description'] = (data.getElementsByTagName("expense_description")[0].lastChild != null) ? data.getElementsByTagName("expense_description")[0].lastChild.nodeValue : "";
            
            this['expense_head'] = (data.getElementsByTagName("expense_head")[0].lastChild != null) ? data.getElementsByTagName("expense_head")[0].lastChild.nodeValue : "";
            
            this['bill_no'] = (data.getElementsByTagName("bill_no")[0].lastChild != null) ? data.getElementsByTagName("bill_no")[0].lastChild.nodeValue : "";
            
            this['expense_amount'] = data.getElementsByTagName("expense_amount")[0].lastChild.nodeValue;
            
            this['status_code'] = (data.getElementsByTagName("status_code")[0].lastChild != null) ? data.getElementsByTagName("status_code")[0].lastChild.nodeValue : "";
            
            this['status_desc'] = (data.getElementsByTagName("status_desc")[0].lastChild != null) ? data.getElementsByTagName("status_desc")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['expensedtl_rowid'] = data['expensedtl_rowid'];
            
            this['trn_date'] = data['trn_date'];
            
            this['expense_description'] = data['expense_description'];
            
            this['expense_head'] = data['expense_head'];
            
            this['bill_no'] = data['bill_no'];
            
            this['expense_amount'] = data['expense_amount'].toFixed(2);
            
            this['status_code'] = data['status_code'];
            
            this['status_desc'] = data['status_desc'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

