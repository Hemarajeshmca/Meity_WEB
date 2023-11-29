var responseDataFormat = "JSON";

function savePaymentCollectionRequest(data)
{
    /**
     * @member {savePaymentCollectionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new savePaymentCollectionRequestcontext(data['context']);
    }
}

function savePaymentCollectionRequestcontext(data)
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
     * @member {savePaymentCollectionRequestHeader} Header
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
            this['Header'] = new savePaymentCollectionRequestHeader(data['Header']);
    }
}

function savePaymentCollectionRequestHeader(data)
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
     * @member {String} invoice_date
     */
    this['invoice_date'] = null;
    
    /**
     * @member {Decimal} invoice_amount
     */
    this['invoice_amount'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
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
     * @member {DateTime} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('invoice_rowid'))
            this['invoice_rowid'] = data['invoice_rowid'];
        
        if(data.hasOwnProperty('invoice_no'))
            this['invoice_no'] = data['invoice_no'];
        
        if(data.hasOwnProperty('invoice_date'))
            this['invoice_date'] = data['invoice_date'];
        
        if(data.hasOwnProperty('invoice_amount'))
            this['invoice_amount'] = data['invoice_amount'];
        
        if(data.hasOwnProperty('balance_amount'))
            this['balance_amount'] = data['balance_amount'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('ref_no'))
            this['ref_no'] = data['ref_no'];
        
        if(data.hasOwnProperty('payment_date'))
            this['payment_date'] = data['payment_date'];
        
        if(data.hasOwnProperty('payment_amount'))
            this['payment_amount'] = data['payment_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function savePaymentCollectionResponse(data, format)
{
    /**
     * @member {savePaymentCollectionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {savePaymentCollectionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new savePaymentCollectionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new savePaymentCollectionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new savePaymentCollectionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new savePaymentCollectionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function savePaymentCollectionResponseApplicationException(data)
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

function savePaymentCollectionResponsecontext(data)
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

