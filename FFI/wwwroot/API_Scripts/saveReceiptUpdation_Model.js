var responseDataFormat = "JSON";

function saveReceiptUpdationRequest(data)
{
    /**
     * @member {saveReceiptUpdationRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new saveReceiptUpdationRequestcontext(data['context']);
    }
}

function saveReceiptUpdationRequestcontext(data)
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
     * @member {saveReceiptUpdationRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {saveReceiptUpdationRequestReceipt_Updation} Receipt_Updation
     */
    this['Receipt_Updation'] = null;
    
    /**
     * @member {saveReceiptUpdationRequestTerms_and_Conditions} Terms_and_Conditions
     */
    this['Terms_and_Conditions'] = null;
    
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
            this['Header'] = new saveReceiptUpdationRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Receipt_Updation') && data['Receipt_Updation'] != null)
        {
            Receipt_Updation = [];
            for(Receipt_Updationindex = 0; Receipt_Updationindex < data['Receipt_Updation'].length; Receipt_Updationindex++)
            {
                Receipt_Updation.push(new saveReceiptUpdationRequestReceipt_Updation(data['Receipt_Updation'][Receipt_Updationindex]));
            }
            this['Receipt_Updation'] = Receipt_Updation;
        }
        
        if(data.hasOwnProperty('Terms_and_Conditions') && data['Terms_and_Conditions'] != null)
        {
            Terms_and_Conditions = [];
            for(Terms_and_Conditionsindex = 0; Terms_and_Conditionsindex < data['Terms_and_Conditions'].length; Terms_and_Conditionsindex++)
            {
                Terms_and_Conditions.push(new saveReceiptUpdationRequestTerms_and_Conditions(data['Terms_and_Conditions'][Terms_and_Conditionsindex]));
            }
            this['Terms_and_Conditions'] = Terms_and_Conditions;
        }
    }
}

function saveReceiptUpdationRequestHeader(data)
{
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('booking_rowid'))
            this['booking_rowid'] = data['booking_rowid'];
        
        if(data.hasOwnProperty('booking_no'))
            this['booking_no'] = data['booking_no'];
        
    }
}

function saveReceiptUpdationRequestReceipt_Updation(data)
{
    /**
     * @member {Int32} paymentcollection_rowid
     */
    this['paymentcollection_rowid'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {String} invoice_no
     */
    this['invoice_no'] = null;
    
    /**
     * @member {Decimal} invoice_amount
     */
    this['invoice_amount'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} ref_no
     */
    this['ref_no'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    /**
     * @member {String} receipt_date
     */
    this['receipt_date'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
    /**
     * @member {Decimal} balance_amount
     */
    this['balance_amount'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('paymentcollection_rowid'))
            this['paymentcollection_rowid'] = data['paymentcollection_rowid'];
        
        if(data.hasOwnProperty('payment_no'))
            this['payment_no'] = data['payment_no'];
        
        if(data.hasOwnProperty('invoice_no'))
            this['invoice_no'] = data['invoice_no'];
        
        if(data.hasOwnProperty('invoice_amount'))
            this['invoice_amount'] = data['invoice_amount'];
        
        if(data.hasOwnProperty('payment_mode'))
            this['payment_mode'] = data['payment_mode'];
        
        if(data.hasOwnProperty('ref_no'))
            this['ref_no'] = data['ref_no'];
        
        if(data.hasOwnProperty('booking_no'))
            this['booking_no'] = data['booking_no'];
        
        if(data.hasOwnProperty('receipt_date'))
            this['receipt_date'] = data['receipt_date'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
        if(data.hasOwnProperty('payment_amount'))
            this['payment_amount'] = data['payment_amount'];
        
        if(data.hasOwnProperty('balance_amount'))
            this['balance_amount'] = data['balance_amount'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveReceiptUpdationRequestTerms_and_Conditions(data)
{
    /**
     * @member {Int32} termsandconditions_rowid
     */
    this['termsandconditions_rowid'] = null;
    
    /**
     * @member {Int16} sl_no
     */
    this['sl_no'] = null;
    
    /**
     * @member {String} termsandconditions
     */
    this['termsandconditions'] = null;
    
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
        if(data.hasOwnProperty('termsandconditions_rowid'))
            this['termsandconditions_rowid'] = data['termsandconditions_rowid'];
        
        if(data.hasOwnProperty('sl_no'))
            this['sl_no'] = data['sl_no'];
        
        if(data.hasOwnProperty('termsandconditions'))
            this['termsandconditions'] = data['termsandconditions'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function saveReceiptUpdationResponse(data, format)
{
    /**
     * @member {saveReceiptUpdationResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {saveReceiptUpdationResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new saveReceiptUpdationResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new saveReceiptUpdationResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new saveReceiptUpdationResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new saveReceiptUpdationResponseApplicationException(data['ApplicationException']);
        }
    }
}

function saveReceiptUpdationResponseApplicationException(data)
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

function saveReceiptUpdationResponsecontext(data)
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
     * @member {saveReceiptUpdationResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new saveReceiptUpdationResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new saveReceiptUpdationResponseHeader(data['Header']);
        }
    }
}

function saveReceiptUpdationResponseHeader(data)
{
    /**
     * @member {Int32} booking_rowid
     */
    this['booking_rowid'] = null;
    
    /**
     * @member {String} booking_no
     */
    this['booking_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['booking_rowid'] = parseInt(data.getElementsByTagName("booking_rowid")[0].lastChild.nodeValue);
            
            this['booking_no'] = (data.getElementsByTagName("booking_no")[0].lastChild != null) ? data.getElementsByTagName("booking_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['booking_rowid'] = data['booking_rowid'];
            
            this['booking_no'] = data['booking_no'];
        }
    }
}

