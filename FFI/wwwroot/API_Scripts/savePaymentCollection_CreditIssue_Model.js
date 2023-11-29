var responseDataFormat = "JSON";

function savePaymentCollection_CreditIssueRequest(data)
{
    /**
     * @member {savePaymentCollection_CreditIssueRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new savePaymentCollection_CreditIssueRequestcontext(data['context']);
    }
}

function savePaymentCollection_CreditIssueRequestcontext(data)
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
     * @member {savePaymentCollection_CreditIssueRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {savePaymentCollection_CreditIssueRequestDetail} Detail
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
            this['Header'] = new savePaymentCollection_CreditIssueRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new savePaymentCollection_CreditIssueRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function savePaymentCollection_CreditIssueRequestHeader(data)
{
    /**
     * @member {Int32} creditissue_rowid
     */
    this['creditissue_rowid'] = null;
    
    /**
     * @member {String} creditissue_no
     */
    this['creditissue_no'] = null;
    
    /**
     * @member {String} creditissue_date
     */
    this['creditissue_date'] = null;
    
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
        if(data.hasOwnProperty('creditissue_rowid'))
            this['creditissue_rowid'] = data['creditissue_rowid'];
        
        if(data.hasOwnProperty('creditissue_no'))
            this['creditissue_no'] = data['creditissue_no'];
        
        if(data.hasOwnProperty('creditissue_date'))
            this['creditissue_date'] = data['creditissue_date'];
        
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

function savePaymentCollection_CreditIssueRequestDetail(data)
{
    /**
     * @member {Int32} paymentcollection_rowid
     */
    this['paymentcollection_rowid'] = null;
    
    /**
     * @member {String} payment_type
     */
    this['payment_type'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
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
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {Decimal} paid_amount
     */
    this['paid_amount'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('paymentcollection_rowid'))
            this['paymentcollection_rowid'] = data['paymentcollection_rowid'];
        
        if(data.hasOwnProperty('payment_type'))
            this['payment_type'] = data['payment_type'];
        
        if(data.hasOwnProperty('payment_no'))
            this['payment_no'] = data['payment_no'];
        
        if(data.hasOwnProperty('balance_amount'))
            this['balance_amount'] = data['balance_amount'];
        
        if(data.hasOwnProperty('payment_amount'))
            this['payment_amount'] = data['payment_amount'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('ref_no'))
            this['ref_no'] = data['ref_no'];
        
        if(data.hasOwnProperty('payment_date'))
            this['payment_date'] = data['payment_date'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
        if(data.hasOwnProperty('paid_amount'))
            this['paid_amount'] = data['paid_amount'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function savePaymentCollection_CreditIssueResponse(data, format)
{
    /**
     * @member {savePaymentCollection_CreditIssueResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {savePaymentCollection_CreditIssueResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new savePaymentCollection_CreditIssueResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new savePaymentCollection_CreditIssueResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new savePaymentCollection_CreditIssueResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new savePaymentCollection_CreditIssueResponseApplicationException(data['ApplicationException']);
        }
    }
}

function savePaymentCollection_CreditIssueResponseApplicationException(data)
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

function savePaymentCollection_CreditIssueResponsecontext(data)
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
     * @member {savePaymentCollection_CreditIssueResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new savePaymentCollection_CreditIssueResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new savePaymentCollection_CreditIssueResponseHeader(data['Header']);
        }
    }
}

function savePaymentCollection_CreditIssueResponseHeader(data)
{
    /**
     * @member {Int32} creditissue_rowid
     */
    this['creditissue_rowid'] = null;
    
    /**
     * @member {String} creditissue_no
     */
    this['creditissue_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['creditissue_rowid'] = data.getElementsByTagName("creditissue_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("creditissue_no")[0].attributes.length == 0) //Check NULL value
                this['creditissue_no'] = (data.getElementsByTagName("creditissue_no")[0].lastChild != null) ? data.getElementsByTagName("creditissue_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['creditissue_rowid'] = data['creditissue_rowid'];
            
            this['creditissue_no'] = data['creditissue_no'];
        }
    }
}

