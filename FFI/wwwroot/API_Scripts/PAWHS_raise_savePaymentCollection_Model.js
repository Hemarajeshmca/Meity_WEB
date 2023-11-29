var responseDataFormat = "JSON";

function PAWHS_raise_savePaymentCollectionRequest(data)
{
    /**
     * @member {PAWHS_raise_savePaymentCollectionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_raise_savePaymentCollectionRequestcontext(data['context']);
    }
}

function PAWHS_raise_savePaymentCollectionRequestcontext(data)
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
     * @member {PAWHS_raise_savePaymentCollectionRequestHeader} Header
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
            this['Header'] = new PAWHS_raise_savePaymentCollectionRequestHeader(data['Header']);
    }
}

function PAWHS_raise_savePaymentCollectionRequestHeader(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    /**
     * @member {Decimal} amount
     */
    this['amount'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
    /**
     * @member {String} paymode_code
     */
    this['paymode_code'] = null;
    
    /**
     * @member {String} ref_no
     */
    this['ref_no'] = null;
    
    /**
     * @member {String} payment_date
     */
    this['payment_date'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
    /**
     * @member {String} status_code
     */
    this['status_code'] = null;
    
    /**
     * @member {String} modeflag
     */
    this['modeflag'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('invoice_rowid'))
            this['invoice_rowid'] = data['invoice_rowid'];
        
        if(data.hasOwnProperty('invoice_no'))
            this['invoice_no'] = data['invoice_no'];
        
        if(data.hasOwnProperty('amount'))
            this['amount'] = data['amount'];
        
        if(data.hasOwnProperty('balance_amount'))
            this['balance_amount'] = data['balance_amount'];
        
        if(data.hasOwnProperty('paymode_code'))
            this['paymode_code'] = data['paymode_code'];
        
        if(data.hasOwnProperty('ref_no'))
            this['ref_no'] = data['ref_no'];
        
        if(data.hasOwnProperty('payment_date'))
            this['payment_date'] = data['payment_date'];
        
        if(data.hasOwnProperty('payment_amount'))
            this['payment_amount'] = data['payment_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('modeflag'))
            this['modeflag'] = data['modeflag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function PAWHS_raise_savePaymentCollectionResponse(data, format)
{
    /**
     * @member {PAWHS_raise_savePaymentCollectionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_raise_savePaymentCollectionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_raise_savePaymentCollectionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_raise_savePaymentCollectionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_raise_savePaymentCollectionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_raise_savePaymentCollectionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_raise_savePaymentCollectionResponseApplicationException(data)
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

function PAWHS_raise_savePaymentCollectionResponsecontext(data)
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

