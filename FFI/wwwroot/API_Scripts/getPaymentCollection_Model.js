var responseDataFormat = "JSON";

function getPaymentCollectionRequest(data)
{
    /**
     * @member {getPaymentCollectionRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getPaymentCollectionRequestcontext(data['context']);
    }
}

function getPaymentCollectionRequestcontext(data)
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
     * @member {getPaymentCollectionRequestHeader} Header
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
            this['Header'] = new getPaymentCollectionRequestHeader(data['Header']);
    }
}

function getPaymentCollectionRequestHeader(data)
{
    /**
     * @member {Int32} invoice_rowid
     */
    this['invoice_rowid'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('invoice_rowid'))
            this['invoice_rowid'] = data['invoice_rowid'];
        
    }
}

function getPaymentCollectionResponse(data, format)
{
    /**
     * @member {getPaymentCollectionResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getPaymentCollectionResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getPaymentCollectionResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getPaymentCollectionResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getPaymentCollectionResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getPaymentCollectionResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getPaymentCollectionResponseApplicationException(data)
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

function getPaymentCollectionResponsecontext(data)
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
     * @member {getPaymentCollectionResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getPaymentCollectionResponseDetail} Detail
     */
    this['Detail'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getPaymentCollectionResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Detail = [];
            for(Detailchildi = 0; Detailchildi < data.getElementsByTagName("Detail").length; Detailchildi++)
            {
                Detail.push(new getPaymentCollectionResponseDetail(data.getElementsByTagName("Detail")[Detailchildi]));
            }
            if(data.getElementsByTagName("Detail").length > 0)
                this['Detail'] = Detail;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getPaymentCollectionResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Detail') && data['Detail'] != null)
            {
                Detail = [];
                for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
                {
                    Detail.push(new getPaymentCollectionResponseDetail(data['Detail'][Detailindex]));
                }
                this['Detail'] = Detail;
            }
        }
    }
}

function getPaymentCollectionResponseHeader(data)
{
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
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("invoice_no")[0].attributes.length == 0) //Check NULL value
                this['invoice_no'] = (data.getElementsByTagName("invoice_no")[0].lastChild != null) ? data.getElementsByTagName("invoice_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("invoice_date")[0].attributes.length == 0) //Check NULL value
                this['invoice_date'] = (data.getElementsByTagName("invoice_date")[0].lastChild != null) ? data.getElementsByTagName("invoice_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("invoice_amount")[0].attributes.length == 0) //Check NULL value
                this['invoice_amount'] = parseFloat(data.getElementsByTagName("invoice_amount")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("balance_amount")[0].attributes.length == 0) //Check NULL value
                this['balance_amount'] = parseFloat(data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue);
        }
        else {
            this['invoice_no'] = data['invoice_no'];
            
            this['invoice_date'] = data['invoice_date'];
            
            this['invoice_amount'] = data['invoice_amount'];
            
            this['balance_amount'] = data['balance_amount'];
        }
    }
}

function getPaymentCollectionResponseDetail(data)
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
            this['paymentcollection_rowid'] = parseInt(data.getElementsByTagName("paymentcollection_rowid")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("payment_type")[0].attributes.length == 0) //Check NULL value
                this['payment_type'] = (data.getElementsByTagName("payment_type")[0].lastChild != null) ? data.getElementsByTagName("payment_type")[0].lastChild.nodeValue : "";
            
            this['payment_type_desc'] = (data.getElementsByTagName("payment_type_desc")[0].lastChild != null) ? data.getElementsByTagName("payment_type_desc")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("payment_no")[0].attributes.length == 0) //Check NULL value
                this['payment_no'] = (data.getElementsByTagName("payment_no")[0].lastChild != null) ? data.getElementsByTagName("payment_no")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("balance_amount")[0].attributes.length == 0) //Check NULL value
                this['balance_amount'] = parseFloat(data.getElementsByTagName("balance_amount")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("payment_amount")[0].attributes.length == 0) //Check NULL value
                this['payment_amount'] = parseFloat(data.getElementsByTagName("payment_amount")[0].lastChild.nodeValue);
            
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
                this['paid_amount'] = parseFloat(data.getElementsByTagName("paid_amount")[0].lastChild.nodeValue);
            
            if(data.getElementsByTagName("mode_flag")[0].attributes.length == 0) //Check NULL value
                this['mode_flag'] = (data.getElementsByTagName("mode_flag")[0].lastChild != null) ? data.getElementsByTagName("mode_flag")[0].lastChild.nodeValue : "";
        }
        else {
            this['paymentcollection_rowid'] = data['paymentcollection_rowid'];
            
            this['payment_type'] = data['payment_type'];
            
            this['payment_type_desc'] = data['payment_type_desc'];
            
            this['payment_no'] = data['payment_no'];
            
            this['balance_amount'] = data['balance_amount'];
            
            this['payment_amount'] = data['payment_amount'];
            
            this['payment_mode'] = data['payment_mode'];
            
            this['payment_mode_desc'] = data['payment_mode_desc'];
            
            this['ref_no'] = data['ref_no'];
            
            this['payment_date'] = data['payment_date'];
            
            this['process_status'] = data['process_status'];
            
            this['process_status_desc'] = data['process_status_desc'];
            
            this['paid_amount'] = data['paid_amount'];
            
            this['mode_flag'] = data['mode_flag'];
        }
    }
}

