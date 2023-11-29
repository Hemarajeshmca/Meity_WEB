var responseDataFormat = "JSON";

function savePaymentAdviceRequest(data)
{
    /**
     * @member {savePaymentAdviceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new savePaymentAdviceRequestcontext(data['context']);
    }
}

function savePaymentAdviceRequestcontext(data)
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
     * @member {savePaymentAdviceRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {savePaymentAdviceRequestsummary} summary
     */
    this['summary'] = null;
    
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
            this['Header'] = new savePaymentAdviceRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('summary') && data['summary'] != null)
            this['summary'] = new savePaymentAdviceRequestsummary(data['summary']);
    }
}

function savePaymentAdviceRequestHeader(data)
{
    /**
     * @member {Int32} paymenthead_rowid
     */
    this['paymenthead_rowid'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    /**
     * @member {String} ccbill_no
     */
    this['ccbill_no'] = null;
    
    /**
     * @member {String} process_payment
     */
    this['process_payment'] = null;
    
    /**
     * @member {String} payment_date
     */
    this['payment_date'] = null;
    
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
        if(data.hasOwnProperty('paymenthead_rowid'))
            this['paymenthead_rowid'] = data['paymenthead_rowid'];
        
        if(data.hasOwnProperty('payment_no'))
            this['payment_no'] = data['payment_no'];
        
        if(data.hasOwnProperty('ccbill_no'))
            this['ccbill_no'] = data['ccbill_no'];
        
        if(data.hasOwnProperty('process_payment'))
            this['process_payment'] = data['process_payment'];
        
        if(data.hasOwnProperty('payment_date'))
            this['payment_date'] = data['payment_date'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
    }
}

function savePaymentAdviceRequestsummary(data)
{
    /**
     * @member {Decimal} retailsale_amount
     */
    this['retailsale_amount'] = null;
    
    /**
     * @member {Decimal} cp_bill_amount
     */
    this['cp_bill_amount'] = null;
    
    /**
     * @member {Decimal} gross_amount
     */
    this['gross_amount'] = null;
    
    /**
     * @member {Decimal} gross_qty
     */
    this['gross_qty'] = null;
    
    /**
     * @member {String} deduction_type
     */
    this['deduction_type'] = null;
    
    /**
     * @member {Decimal} deduction_per_ltr
     */
    this['deduction_per_ltr'] = null;
    
    /**
     * @member {Decimal} deduction_amount
     */
    this['deduction_amount'] = null;
    
    /**
     * @member {Decimal} deduction_total_amount
     */
    this['deduction_total_amount'] = null;
    
    /**
     * @member {Decimal} net_amount
     */
    this['net_amount'] = null;
    
    /**
     * @member {Decimal} calcrate_per_ltr
     */
    this['calcrate_per_ltr'] = null;
    
    /**
     * @member {String} transfer_or_retail
     */
    this['transfer_or_retail'] = null;
    
    /**
     * @member {String} cp_code
     */
    this['cp_code'] = null;
    
    /**
     * @member {String} milk_from
     */
    this['milk_from'] = null;
    
    /**
     * @member {String} supplied_from
     */
    this['supplied_from'] = null;
    
    /**
     * @member {String} supplied_to
     */
    this['supplied_to'] = null;
    
    /**
     * @member {Decimal} total_milk
     */
    this['total_milk'] = null;
    
    /**
     * @member {Decimal} rate_per_ltr
     */
    this['rate_per_ltr'] = null;
    
    /**
     * @member {Decimal} amount
     */
    this['amount'] = null;
    
    /**
     * @member {Decimal} revised_rate
     */
    this['revised_rate'] = null;
    
    /**
     * @member {Decimal} revised_amount
     */
    this['revised_amount'] = null;
    
    /**
     * @member {String} process_status
     */
    this['process_status'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('retailsale_amount'))
            this['retailsale_amount'] = data['retailsale_amount'];
        
        if(data.hasOwnProperty('cp_bill_amount'))
            this['cp_bill_amount'] = data['cp_bill_amount'];
        
        if(data.hasOwnProperty('gross_amount'))
            this['gross_amount'] = data['gross_amount'];
        
        if(data.hasOwnProperty('gross_qty'))
            this['gross_qty'] = data['gross_qty'];
        
        if(data.hasOwnProperty('deduction_type'))
            this['deduction_type'] = data['deduction_type'];
        
        if(data.hasOwnProperty('deduction_per_ltr'))
            this['deduction_per_ltr'] = data['deduction_per_ltr'];
        
        if(data.hasOwnProperty('deduction_amount'))
            this['deduction_amount'] = data['deduction_amount'];
        
        if(data.hasOwnProperty('deduction_total_amount'))
            this['deduction_total_amount'] = data['deduction_total_amount'];
        
        if(data.hasOwnProperty('net_amount'))
            this['net_amount'] = data['net_amount'];
        
        if(data.hasOwnProperty('calcrate_per_ltr'))
            this['calcrate_per_ltr'] = data['calcrate_per_ltr'];
        
        if(data.hasOwnProperty('transfer_or_retail'))
            this['transfer_or_retail'] = data['transfer_or_retail'];
        
        if(data.hasOwnProperty('cp_code'))
            this['cp_code'] = data['cp_code'];
        
        if(data.hasOwnProperty('milk_from'))
            this['milk_from'] = data['milk_from'];
        
        if(data.hasOwnProperty('supplied_from'))
            this['supplied_from'] = data['supplied_from'];
        
        if(data.hasOwnProperty('supplied_to'))
            this['supplied_to'] = data['supplied_to'];
        
        if(data.hasOwnProperty('total_milk'))
            this['total_milk'] = data['total_milk'];
        
        if(data.hasOwnProperty('rate_per_ltr'))
            this['rate_per_ltr'] = data['rate_per_ltr'];
        
        if(data.hasOwnProperty('amount'))
            this['amount'] = data['amount'];
        
        if(data.hasOwnProperty('revised_rate'))
            this['revised_rate'] = data['revised_rate'];
        
        if(data.hasOwnProperty('revised_amount'))
            this['revised_amount'] = data['revised_amount'];
        
        if(data.hasOwnProperty('process_status'))
            this['process_status'] = data['process_status'];
        
    }
}

function savePaymentAdviceResponse(data, format)
{
    /**
     * @member {savePaymentAdviceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {savePaymentAdviceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new savePaymentAdviceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new savePaymentAdviceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new savePaymentAdviceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new savePaymentAdviceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function savePaymentAdviceResponseApplicationException(data)
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

function savePaymentAdviceResponsecontext(data)
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
     * @member {savePaymentAdviceResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new savePaymentAdviceResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new savePaymentAdviceResponseHeader(data['Header']);
        }
    }
}

function savePaymentAdviceResponseHeader(data)
{
    /**
     * @member {Int32} paymenthead_rowid
     */
    this['paymenthead_rowid'] = null;
    
    /**
     * @member {String} payment_no
     */
    this['payment_no'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['paymenthead_rowid'] = parseInt(data.getElementsByTagName("paymenthead_rowid")[0].lastChild.nodeValue);
            
            this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymenthead_rowid'] = data['paymenthead_rowid'];
            
            this['payment_no'] = data['payment_no'];
        }
    }
}

