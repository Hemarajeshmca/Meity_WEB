var responseDataFormat = "JSON";

function PAWHS_getPaymentCollectionRequest(data)
{
    /**
     * @member {PAWHS_getPaymentCollectionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_getPaymentCollectionRequestcontext(data['context']);
    }
}

function PAWHS_getPaymentCollectionRequestcontext(data)
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
     * @member {PAWHS_getPaymentCollectionRequestHeader} Header
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
            this['Header'] = new PAWHS_getPaymentCollectionRequestHeader(data['Header']);
    }
}

function PAWHS_getPaymentCollectionRequestHeader(data)
{
    /**
     * @member {Int32} whs_receipt_rowid
     */
    this['whs_receipt_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('whs_receipt_rowid'))
            this['whs_receipt_rowid'] = data['whs_receipt_rowid'];
        
    }
}

function PAWHS_getPaymentCollectionResponse(data, format)
{
    /**
     * @member {PAWHS_getPaymentCollectionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_getPaymentCollectionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_getPaymentCollectionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_getPaymentCollectionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_getPaymentCollectionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_getPaymentCollectionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_getPaymentCollectionResponseApplicationException(data)
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

function PAWHS_getPaymentCollectionResponsecontext(data)
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
     * @member {PAWHS_getPaymentCollectionResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_getPaymentCollectionResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_getPaymentCollectionResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new PAWHS_getPaymentCollectionResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_getPaymentCollectionResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new PAWHS_getPaymentCollectionResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function PAWHS_getPaymentCollectionResponseHeader(data)
{
    /**
     * @member {String} grn_invoice_no
     */
    this['grn_invoice_no'] = null;
    
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
     * @member {String} paymode_desc
     */
    this['paymode_desc'] = null;
    
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("grn_invoice_no")[0].attributes.length == 0) //Check NULL value
                this['grn_invoice_no'] = (data.getElementsByTagName("grn_invoice_no")[0].lastChild != null) ? data.getElementsByTagName("grn_invoice_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("amount")[0].attributes.length == 0) //Check NULL value
                this['amount'] = data.getElementsByTagName("amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("balance_amount")[0].attributes.length == 0) //Check NULL value
                this['balance_amount'] = data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue;
            
            this['paymode_code'] = (data.getElementsByTagName("paymode_code")[0].lastChild != null) ? data.getElementsByTagName("paymode_code")[0].lastChild.nodeValue : "";
            
            this['paymode_desc'] = (data.getElementsByTagName("paymode_desc")[0].lastChild != null) ? data.getElementsByTagName("paymode_desc")[0].lastChild.nodeValue : "";
            
            this['ref_no'] = (data.getElementsByTagName("ref_no")[0].lastChild != null) ? data.getElementsByTagName("ref_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_date")[0].attributes.length == 0) //Check NULL value
                this['payment_date'] = (data.getElementsByTagName("payment_date")[0].lastChild != null) ? data.getElementsByTagName("payment_date")[0].lastChild.nodeValue : "";
            
            this['payment_amount'] = data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue;
        }
        else {
            this['grn_invoice_no'] = data['grn_invoice_no'];
            
            this['amount'] = data['amount'].toFixed(2);
            
            this['balance_amount'] = data['balance_amount'].toFixed(2);
            
            this['paymode_code'] = data['paymode_code'];
            
            this['paymode_desc'] = data['paymode_desc'];
            
            this['ref_no'] = data['ref_no'];
            
            this['payment_date'] = data['payment_date'];
            
            this['payment_amount'] = data['payment_amount'].toFixed(2);
        }
    }
}

function PAWHS_getPaymentCollectionResponseDetail(data)
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
     * @member {String} payment_type_desc
     */
    this['payment_type_desc'] = null;
    
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
     * @member {String} payment_mode_desc
     */
    this['payment_mode_desc'] = null;
    
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
     * @member {String} process_status_desc
     */
    this['process_status_desc'] = null;
    
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
        if (responseDataFormat == "XML") {
            this['paymentcollection_rowid'] = data.getElementsByTagName("paymentcollection_rowid")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("payment_type")[0].attributes.length == 0) //Check NULL value
                this['payment_type'] = (data.getElementsByTagName("payment_type")[0].lastChild != null) ? data.getElementsByTagName("payment_type")[0].lastChild.nodeValue : "";
            
            this['payment_type_desc'] = (data.getElementsByTagName("payment_type_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_type_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_no")[0].attributes.length == 0) //Check NULL value
                this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("balance_amount")[0].attributes.length == 0) //Check NULL value
                this['balance_amount'] = data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("payment_amount")[0].attributes.length == 0) //Check NULL value
                this['payment_amount'] = data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("payment_mode")[0].attributes.length == 0) //Check NULL value
                this['payment_mode'] = (data.getElementsByTagName("payment_mode")[0].lastChild != null) ? data.getElementsByTagName("payment_mode")[0].lastChild.nodeValue : "";
            
            this['payment_mode_desc'] = (data.getElementsByTagName("payment_mode_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_mode_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("ref_no")[0].attributes.length == 0) //Check NULL value
                this['ref_no'] = (data.getElementsByTagName("ref_no")[0].lastChild != null) ? data.getElementsByTagName("ref_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_date")[0].attributes.length == 0) //Check NULL value
                this['payment_date'] = (data.getElementsByTagName("payment_date")[0].lastChild != null) ? data.getElementsByTagName("payment_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status")[0].attributes.length == 0) //Check NULL value
                this['process_status'] = (data.getElementsByTagName("process_status")[0].lastChild != null) ? data.getElementsByTagName("process_status")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("process_status_desc")[0].attributes.length == 0) //Check NULL value
                this['process_status_desc'] = (data.getElementsByTagName("process_status_desc")[0].lastChild != null) ? data.getElementsByTagName("process_status_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("paid_amount")[0].attributes.length == 0) //Check NULL value
                this['paid_amount'] = data.getElementsByTagName("paid_amount")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("mode_flag")[0].attributes.length == 0) //Check NULL value
                this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymentcollection_rowid'] = data['paymentcollection_rowid'];
            
            this['payment_type'] = data['payment_type'];
            
            this['payment_type_desc'] = data['payment_type_desc'];
            
            this['payment_no'] = data['payment_no'];
            
            this['balance_amount'] = data['balance_amount'].toFixed(2);
            
            this['payment_amount'] = data['payment_amount'].toFixed(2);
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['ref_no'] = data['ref_no'];
            
            this['payment_date'] = data['payment_date'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['paid_amount'] = data['paid_amount'].toFixed(2);
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

