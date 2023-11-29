var responseDataFormat = "JSON";

function PAWHS_getPaymentUpdateRequest(data)
{
    /**
     * @member {PAWHS_getPaymentUpdateRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getPaymentUpdateRequestcontext(data['context']);
    }
}

function PAWHS_getPaymentUpdateRequestcontext(data)
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
     * @member {PAWHS_getPaymentUpdateRequestHeader} Header
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
            this['Header'] = new PAWHS_getPaymentUpdateRequestHeader(data['Header']);
    }
}

function PAWHS_getPaymentUpdateRequestHeader(data)
{
    /**
     * @member {String} payment_status
     */
    this['payment_status'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('payment_status'))
            this['payment_status'] = data['payment_status'];
        
    }
}

function PAWHS_getPaymentUpdateResponse(data, format)
{
    /**
     * @member {PAWHS_getPaymentUpdateResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getPaymentUpdateResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getPaymentUpdateResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getPaymentUpdateResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getPaymentUpdateResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getPaymentUpdateResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getPaymentUpdateResponseApplicationException(data)
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

function PAWHS_getPaymentUpdateResponsecontext(data)
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
     * @member {PAWHS_getPaymentUpdateResponsePaymentDtl} PaymentDtl
     */
    this['PaymentDtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            PaymentDtl = [];
            for(PaymentDtlchildi = 0; PaymentDtlchildi < data.getElementsByTagName("PaymentDtl").length; PaymentDtlchildi++)
            {
                PaymentDtl.push(new PAWHS_getPaymentUpdateResponsePaymentDtl(data.getElementsByTagName("PaymentDtl")[PaymentDtlchildi]));
            }
            if(data.getElementsByTagName("PaymentDtl").length > 0)
                this['PaymentDtl'] = PaymentDtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            if(data.hasOwnProperty('PaymentDtl') && data['PaymentDtl'] != null)
            {
                PaymentDtl = [];
                for(PaymentDtlindex = 0; PaymentDtlindex < data['PaymentDtl'].length; PaymentDtlindex++)
                {
                    PaymentDtl.push(new PAWHS_getPaymentUpdateResponsePaymentDtl(data['PaymentDtl'][PaymentDtlindex]));
                }
                this['PaymentDtl'] = PaymentDtl;
            }
        }
    }
}

function PAWHS_getPaymentUpdateResponsePaymentDtl(data)
{
    /**
     * @member {Int32} paymentdtl_rowid
     */
    this['paymentdtl_rowid'] = null;
    
    /**
     * @member {String} payment_advice_no
     */
    this['payment_advice_no'] = null;
    
    /**
     * @member {String} receipt_id
     */
    this['receipt_id'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {Decimal} payment_amount
     */
    this['payment_amount'] = null;
    
    /**
     * @member {String} payment_date
     */
    this['payment_date'] = null;
    
    /**
     * @member {String} payment_mode
     */
    this['payment_mode'] = null;
    
    /**
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
    /**
     * @member {String} payment_remark
     */
    this['payment_remark'] = null;
    
    /**
     * @member {String} bank_ref_no
     */
    this['bank_ref_no'] = null;
    
    /**
     * @member {String} payment_status
     */
    this['payment_status'] = null;
    
    /**
     * @member {String} payment_status_desc
     */
    this['payment_status_desc'] = null;
    
    /**
     * @member {String} row_timestamp
     */
    this['row_timestamp'] = null;
    
    /**
     * @member {String} mode_flag
     */
    this['mode_flag'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['paymentdtl_rowid'] = parseInt(data.getElementsByTagName("paymentdtl_rowid")[0].lastChild.nodeValue);
            
            this['payment_advice_no'] = (data.getElementsByTagName("payment_advice_no")[0].lastChild != null) ? data.getElementsByTagName("payment_advice_no")[0].lastChild.nodeValue : "";
            
            this['receipt_id'] = (data.getElementsByTagName("receipt_id")[0].lastChild != null) ? data.getElementsByTagName("receipt_id")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['payment_amount'] = parseFloat(data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue);
            
            this['payment_date'] = (data.getElementsByTagName("payment_date")[0].lastChild != null) ? data.getElementsByTagName("payment_date")[0].lastChild.nodeValue : "";
            
            this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            this['payment_remark'] = (data.getElementsByTagName("payment_remark")[0].lastChild != null) ? data.getElementsByTagName("payment_remark")[0].lastChild.nodeValue : "";
            
            this['bank_ref_no'] = (data.getElementsByTagName("bank_ref_no")[0].lastChild != null) ? data.getElementsByTagName("bank_ref_no")[0].lastChild.nodeValue : "";
            
            this['payment_status'] = (data.getElementsByTagName("payment_status")[0].lastChild != null) ? data.getElementsByTagName("payment_status")[0].lastChild.nodeValue : "";
            
            this['payment_status_desc'] = (data.getElementsByTagName("payment_status_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_status_desc")[0].lastChild.nodeValue : "";
            
            this['row_timestamp'] = (data.getElementsByTagName("row_timestamp")[0].lastChild != null) ? data.getElementsByTagName("row_timestamp")[0].lastChild.nodeValue : "";
            
            this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymentdtl_rowid'] = data['paymentdtl_rowid'];
            
            this['payment_advice_no'] = data['payment_advice_no'];
            
            this['receipt_id'] = data['receipt_id'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['payment_amount'] = data['payment_amount'];
            
            this['payment_date'] = data['payment_date'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['payment_remark'] = data['payment_remark'];
            
            this['bank_ref_no'] = data['bank_ref_no'];
            
            this['payment_status'] = data['payment_status'];
            
            this['payment_status_desc'] = data['payment_status_desc'];
            
            this['row_timestamp'] = data['row_timestamp'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

