var responseDataFormat = "JSON";

function PAWHS_savePaymentAdviceRequest(data)
{
    /**
     * @member {PAWHS_savePaymentAdviceRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new PAWHS_savePaymentAdviceRequestcontext(data['context']);
    }
}

function PAWHS_savePaymentAdviceRequestcontext(data)
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
     * @member {PAWHS_savePaymentAdviceRequestHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {PAWHS_savePaymentAdviceRequestDetail} Detail
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
            this['Header'] = new PAWHS_savePaymentAdviceRequestHeader(data['Header']);
        
        if(data.hasOwnProperty('Detail') && data['Detail'] != null)
        {
            Detail = [];
            for(Detailindex = 0; Detailindex < data['Detail'].length; Detailindex++)
            {
                Detail.push(new PAWHS_savePaymentAdviceRequestDetail(data['Detail'][Detailindex]));
            }
            this['Detail'] = Detail;
        }
    }
}

function PAWHS_savePaymentAdviceRequestHeader(data)
{
    /**
     * @member {Int32} payment_rowid
     */
    this['payment_rowid'] = null;
    
    /**
     * @member {String} payment_id
     */
    this['payment_id'] = null;
    
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    /**
     * @member {String} bank_name
     */
    this['bank_name'] = null;
    
    /**
     * @member {Decimal} total_amount
     */
    this['total_amount'] = null;
    
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
        if(data.hasOwnProperty('payment_rowid'))
            this['payment_rowid'] = data['payment_rowid'];
        
        if(data.hasOwnProperty('payment_id'))
            this['payment_id'] = data['payment_id'];
        
        if(data.hasOwnProperty('from_date'))
            this['from_date'] = data['from_date'];
        
        if(data.hasOwnProperty('to_date'))
            this['to_date'] = data['to_date'];
        
        if(data.hasOwnProperty('bank_name'))
            this['bank_name'] = data['bank_name'];
        
        if(data.hasOwnProperty('total_amount'))
            this['total_amount'] = data['total_amount'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('row_timestamp'))
            this['row_timestamp'] = data['row_timestamp'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_savePaymentAdviceRequestDetail(data)
{
    /**
     * @member {Int32} paymentdtl_rowid
     */
    this['paymentdtl_rowid'] = null;
    
    /**
     * @member {String} req_no
     */
    this['req_no'] = null;
    
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {Decimal} amount_paid
     */
    this['amount_paid'] = null;
    
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
        if(data.hasOwnProperty('paymentdtl_rowid'))
            this['paymentdtl_rowid'] = data['paymentdtl_rowid'];
        
        if(data.hasOwnProperty('req_no'))
            this['req_no'] = data['req_no'];
        
        if(data.hasOwnProperty('farmer_code'))
            this['farmer_code'] = data['farmer_code'];
        
        if(data.hasOwnProperty('amount_paid'))
            this['amount_paid'] = data['amount_paid'];
        
        if(data.hasOwnProperty('status_code'))
            this['status_code'] = data['status_code'];
        
        if(data.hasOwnProperty('mode_flag'))
            this['mode_flag'] = data['mode_flag'];
        
    }
}

function PAWHS_savePaymentAdviceResponse(data, format)
{
    /**
     * @member {PAWHS_savePaymentAdviceResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {PAWHS_savePaymentAdviceResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new PAWHS_savePaymentAdviceResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new PAWHS_savePaymentAdviceResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new PAWHS_savePaymentAdviceResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new PAWHS_savePaymentAdviceResponseApplicationException(data['ApplicationException']);
        }
    }
}

function PAWHS_savePaymentAdviceResponseApplicationException(data)
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

function PAWHS_savePaymentAdviceResponsecontext(data)
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
     * @member {PAWHS_savePaymentAdviceResponseHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new PAWHS_savePaymentAdviceResponseHeader(data.getElementsByTagName("Header")[0]);
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new PAWHS_savePaymentAdviceResponseHeader(data['Header']);
        }
    }
}

function PAWHS_savePaymentAdviceResponseHeader(data)
{
    /**
     * @member {Int32} payment_rowid
     */
    this['payment_rowid'] = null;
    
    /**
     * @member {Decimal} total_amount
     */
    this['total_amount'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['payment_rowid'] = parseInt(data.getElementsByTagName("payment_rowid")[0].lastChild.nodeValue);
            
            this['total_amount'] = parseFloat(data.getElementsByTagName("total_amount")[0].lastChild.nodeValue);
        }
        else {
            this['payment_rowid'] = data['payment_rowid'];
            
            this['total_amount'] = data['total_amount'];
        }
    }
}

